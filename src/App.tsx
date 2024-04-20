// import { useState } from 'react'
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
