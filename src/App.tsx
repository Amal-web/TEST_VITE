import { useState } from "react";

import "./App.css";

import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/new")}>new</button>
    </div>
  );
};

const New = () => {
  return <div>New 5654k6pds1hfsdfsdbfn</div>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
