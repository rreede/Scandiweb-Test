import "./App.css";
import HeaderMain from "./HeaderMain";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Root() {
  return (
    <div className="App">
      <form
        action="http://localhost:80/Scandiweb-Test/Scandiweb-test/src/routes/api/database.php"
        method="post"
      >
        <HeaderMain />
        <MainContent className="MainContent" />
      </form>
      <Footer />
    </div>
  );
}

export default Root;
