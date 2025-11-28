import React from "react";
import CategoryList from "../components/CategoryList";

export default function Categories() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Kategori</h1>
      <CategoryList />
    </div>
  );
}
