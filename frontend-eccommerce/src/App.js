import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/cart/Cart";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
