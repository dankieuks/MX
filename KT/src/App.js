import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import classNames from "classnames/bind";
import Header from "./Header/Header";

const cx = classNames.bind(styles);

function App() {
  return (
    <BrowserRouter>
      <div className={cx("container")}>
        <h1 className={cx("title")}>#todo</h1>
        <Header />
      </div>
    </BrowserRouter>
  );
}
export default App;
