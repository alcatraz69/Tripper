import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Explore from "./Pages/Explore";
import HeroPage from "./Pages/HeroPage";
import Home from "./Pages/Home/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
