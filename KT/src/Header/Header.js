import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import All from "../All/All";
import Active from "../Active/Active";
import Completed from "../Completed/Completed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const cx = classNames.bind(styles);

const menus=[
    {
        text:'All',
        to:'/'
    },
    {
        text:'Active',
        to:'/active'
    },
    {
        text:'Completed',
        to:'/completed'
    },
]
const Header = () => {
    const [show, setShow]=useState(false)
    const handleShow=()=>{
        setShow(show===false?true:false)
    }

  return (
    <div>
      <ul className={cx('menu')}>
        {menus.map(menu=>(
            <li className={cx("menu-chil")}>
            <Link className={cx('chil')} to={menu.to}>{menu.text}</Link>
          </li>
        ))}
        
      </ul>

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
};

export default Header;
