import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import RecomendedVideos from "./Components/RecomendedVideos";
import SearchPage from "./Components/SearchPage";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <RecomendedVideos />
            </div>
          </Route>
          <Route exact path="/search/:text">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <Header />
      <div className="app_page">
        <Sidebar />
        <RecomendedVideos />
      </div> */}
    </div>
  );
}

export default App;
