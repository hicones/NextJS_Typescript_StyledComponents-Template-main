/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import * as S from "./styles";
import logo from "../../assets/sidebar/Logo.png";
import home from "../../assets/sidebar/home.svg";
import config from "../../assets/sidebar/config.svg";
import swap from "../../assets/sidebar/swap.svg";
import table from "../../assets/sidebar/table.svg";
import withdraw from "../../assets/sidebar/withdraw.svg";
import deposit from "../../assets/sidebar/deposit.svg";
import exit from "../../assets/sidebar/exit.svg";
import graph from "../../assets/sidebar/graph.svg";
import arrow from "../../assets/header/arrow.svg";

function SideBar() {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const toggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <S.Sidebar>
      <nav className={toggleSidebar ? "sidebar close" : "sidebar"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo.src} alt="" />
            </span>
            <h1 className="text logo-text">Genezys GEX</h1>
          </div>
          <img src={arrow.src} className="toggle" alt="" onClick={toggle} />
        </header>
        <div className="menu-bar">
          <ul className="menu-links">
            <li className="nav-link active">
              <a href="#">
                <img src={home.src} alt="" />
                <span className="text nav-text">Home</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <img src={deposit.src} alt="" />
                <span className="text nav-text">Depósito</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <img src={withdraw.src} alt="" />
                <span className="text nav-text">Saque</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <img src={swap.src} alt="" />
                <span className="text nav-text">Swap</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <img src={graph.src} alt="" />
                <span className="text nav-text">Trade</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <img src={table.src} alt="" />
                <span className="text nav-text">OTC</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <img src={config.src} alt="" />
              <span className="text nav-text">Configurações</span>
            </a>
          </li>
          <li className="">
            <a href="#">
              <img src={exit.src} alt="" />
              <span className="text nav-text">Sair da Conta</span>
            </a>
          </li>
        </div>
      </nav>
    </S.Sidebar>
  );
}

export { SideBar };
