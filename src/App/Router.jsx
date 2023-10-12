import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from "../Components/NavBar/index";
import Home from "../Page/home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/home"} element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
