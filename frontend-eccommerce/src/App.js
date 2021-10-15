import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/cart/Cart";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import TemplateProvider from "./templates/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
