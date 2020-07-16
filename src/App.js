import React from "react";
import Hero from "./components/Hero";
import DirectoryContainer from "./components/DirectoryContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero className="mb-3" />
      <DirectoryContainer />
      <Footer />
    </>
  );
}

export default App;
