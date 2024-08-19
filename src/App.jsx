import { React } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayut from "./layout/mainLayut";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Tabel } from "./pages/tabel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayut />}>
          <Route index element={<Buttons />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="table" element={<Tabel />} />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
