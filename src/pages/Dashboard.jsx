import React, { useState } from "react";
import api from "../services/api";
import CategoryList from "../components/CategoryList";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      await api.post("/categories", { name });
      setName("");
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <div className="p-4">
      {/* Judul Dashboard */}
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>

      {/* Form Tambah Kategori */}
      <form onSubmit={addCategory} className="mb-6">
        <label className="block mb-2 font-semibold">Tambah Kategori Baru</label>

        <input
          className="border p-2 rounded w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama kategori..."
          required
        />

        <button className="bg-blue-500 text-white p-2 px-4 rounded">
          Tambah Kategori
        </button>

        {saved && (
          <p className="text-green-600 mt-2">Kategori berhasil ditambahkan!</p>
        )}
      </form>

      {/* List Kategori */}
      <h2 className="text-xl font-bold mb-3">Daftar Semua Kategori</h2>
      <CategoryList />

      {/* Jika kamu ingin menambah fitur lain (artikel, user, dll)
          bisa ditambahkan di bawah ini */}
    </div>
  );
}
