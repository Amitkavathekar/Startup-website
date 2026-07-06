import Routes from "./routes/AppRoutes";
import Navbar from "./Components/navbar/navbar";

const App = () => {
  return (
    <div className="bg-red-200">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
