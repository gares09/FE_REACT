import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";

import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Archive from "./pages/Archive";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryDetail from "./pages/CategoryDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
