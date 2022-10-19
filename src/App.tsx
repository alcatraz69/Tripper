import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Explore from "./Pages/Explore";
import HeroPage from "./Pages/HeroPage";
import Home from "./Pages/Home/Home";
import HotelDetail from "./Pages/HotelDetail";

function App() {
  const queryClient = new QueryClient();
  const {pathname} = useLocation()
  console.log({pathname});
  
  return (
    <QueryClientProvider client={queryClient}>
    {<NavBar/>}
      <Routes>
        <Route path="/" element={<HeroPage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/hotel-detail/:hotelId" element={<HotelDetail/>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
