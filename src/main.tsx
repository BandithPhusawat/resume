import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/Home/Home";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
