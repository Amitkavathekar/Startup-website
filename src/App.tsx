import Routes from "./routes/AppRoutes";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
