import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../services/categories";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data); 
      })
      .catch((err) => console.error("Error fetching categories", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Categories</h2>
      <ul className="flex flex-col gap-2">
        {categories.map((cat) => (
          <li key={cat.id} className="border p-2 rounded hover:bg-gray-100">
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
