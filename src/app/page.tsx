"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProfileHead from "./components/ProfileHead";
import backGroundImg from "./assets/topBackground.png";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`h-screen	 ${theme === "dark" ? " text-white" : " text-black"}`}
      style={{ backgroundColor: theme === "dark" ? "#1D1D1D" : "#FFFFFF" }}
    >
   
      {/* <Header /> */}
      <ProfileHead />
      <div
        className="flex"
        style={{
          height: "82%",
          overflowY: "auto",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
        }}
      >
        <Sidebar />
        <MainContent />
      </div>
      {/* <button onClick={toggleTheme} className="p-2 m-4 border rounded">
        Toggle Theme
      </button> */}
    </div>
  );
}
