import React, { useContext, useState } from "react";
import * as S from "./styles";
import notify from "../../assets/header/notify.svg";
import arrow from "../../assets/header/arrow.svg";
import userImg from "../../assets/header/userImg.png";
import brasil from "../../assets/header/brasil.svg";
import currency from "../../assets/header/currency.svg";

//components
import Image from "next/image";

function Header() {
  return (
    <S.HeaderComponent>
      <div>
        <h2>Token Market</h2>
        <p>Bem-Vindo, André!</p>
      </div>
      <div className="content">
        <div className="notify">
          <img src={notify.src} alt="notify" />
          <small />
        </div>
        <div className="country">
          <span>
            <img src={brasil.src} alt="notify" /> PT
          </span>
          <hr />
          <span className="currency">
            <img src={currency.src} alt="notify" /> BRL
          </span>
        </div>
        <div className="user">
          <img src={userImg.src} alt="usr" />
          <span>André Marques</span>
          <a>
            <img src={arrow.src} alt="arrow" />
          </a>
        </div>
      </div>
    </S.HeaderComponent>
  );
}

export { Header };
