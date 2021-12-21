import "./scss/index.scss";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollOnTop } from "./components/ScrollOnTop";
import { Suspense } from "react";
import SuspenseFallback from "./components/SuspenseFallback";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <ScrollOnTop />
      <Header />
      <Suspense fallback={<SuspenseFallback />}>
        <Routers />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
