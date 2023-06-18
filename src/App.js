// router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import fungsi/require (di JS)
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registrasi from "./Pages/Registrasi";
import Profile from "./Pages/Profile";
import MyTransaction from "./Pages/MyTransaction";
import PageNotFound from "./Pages/PageNotFound";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import { GlobalContextProvider } from "./GlobalState/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrasi" element={<Registrasi />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myTransaction" element={<MyTransaction />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/keranjang" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
