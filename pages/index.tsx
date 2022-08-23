/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import * as S from "../src/styles";
import eye from "../src/assets/rightbar/eye.svg";
import graph from "../src/assets/rightbar/graph.svg";
import hurb from "../src/assets/rightbar/hurb.svg";
import geek from "../src/assets/rightbar/geek.svg";
import axie from "../src/assets/rightbar/axie.svg";
import logo from "../src/assets/sidebar/Logo.png";
import deposit from "../src/assets/sidebar/deposit.svg";
import withdraw from "../src/assets/sidebar/withdraw.svg";

import tokens from "../src/assets/menu/tokens.svg";
import receive from "../src/assets/menu/receive.svg";
import humanToken from "../src/assets/menu/humanToken.svg";
import realState from "../src/assets/menu/realState.svg";
import favorite from "../src/assets/menu/favorite.svg";
import search from "../src/assets/menu/search.svg";
import axies from "../src/assets/favorites/axie.jpg";

//hooks
import { useTranslations } from "next-intl";

//components
import Head from "next/head";
import getFavoriteData from "../src/assets/data/FavoriteData";

//this function is necessary to get the translations in every single page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../public/locales/${locale}.json`)).default,
    },
  };
};

const Home: NextPage = () => {
  const favoriteData = getFavoriteData();

  return (
    <S.Container>
      <Head>
        <title>Genezys Prototype</title>
        <meta name="Genezys" content="Genezys Prototype" />
      </Head>
      <S.HomeContent>
        <div className="markets">
          <div className="title">
            <h2>Mercados</h2>
          </div>
          <div className="buttons">
            <S.Button className="active">
              <img src={tokens.src} alt="" /> NFT Tokens
            </S.Button>
            <S.Button>
              <img src={receive.src} alt="" /> Recebíveis
            </S.Button>
            <S.Button>
              <img src={humanToken.src} alt="" /> Human Token
            </S.Button>
            <S.Button>
              <img src={realState.src} alt="" /> Real State
            </S.Button>
          </div>
        </div>
        <div className="title">
          <h2>Tokens Disponíveis</h2>
        </div>
        <div className="availableTokens">
          <div className="content">
            <div className="list">
              <ul className="menu">
                <li className="active">
                  <img src={favorite.src} alt="" />
                  Favoritos
                </li>
                <li>Todos</li>
                <li>Coleções NFT</li>
                <li>NFT Games</li>
              </ul>
              <li className="searchInput">
                <img src={search.src} alt="" />
                <input type="text" placeholder="Buscar por tokens" />
              </li>
            </div>
          </div>
          <div className="cardGrid">
            {favoriteData.map((card) => (
              <div className="card" key={card.title}>
                <div className="image">
                  <img src={card.img.src} alt="" />
                </div>
                <div className="cardDescription">
                  <div className="description">
                    <span>{card.collection}</span>
                    <h3>{card.title}</h3>
                    <small>{card.tag}</small>
                  </div>
                  <div className="price">
                    <img src={favorite.src} alt="" />
                    <p>${card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </S.HomeContent>
      <S.RightBar>
        <div className="balance">
          <div className="title">
            <h2>Seu Saldo</h2>
            <img src={eye.src} alt="eye" />
          </div>
          <div className="currentBalance">
            <img src={logo.src} alt="" />
            <h2>R$ 10.523,31</h2>
          </div>
          <div className="buttons">
            <button>
              <img src={withdraw.src} alt="" />
              Sacar
            </button>
            <button>
              <img src={deposit.src} alt="" />
              Depositar
            </button>
          </div>
        </div>
        <div className="portifolio">
          <div className="title">
            <h2>Seu Portifólio</h2>
            <span>Ver completo</span>
          </div>
          <div className="graph">
            <img src={graph.src} alt="" />
            <ul>
              <li>
                {" "}
                <small className="yellow" />
                BTC - 44.84%
              </li>
              <li>
                {" "}
                <small className="pink" />
                ETH - 33.04%
              </li>
              <li>
                {" "}
                <small className="blue" />
                APE - 22.35%
              </li>
            </ul>
          </div>
        </div>

        <div className="wallet">
          <div className="title">
            <h2>Carteira</h2>
            <span>Ver todos</span>
          </div>
          <div className="cards">
            <div className="card">
              <img src={hurb.src} alt="" />
              <h2>Bitcoin</h2>
              <span>BTC</span>
              <p>R$ 100</p>
              <small>+ 7,2%</small>
            </div>
            <div className="card">
              <img src={hurb.src} alt="" />
              <h2>Bitcoin</h2>
              <span>BTC</span>
              <p>R$ 100</p>
              <small>+ 7,2%</small>
            </div>
          </div>
        </div>
        <div className="releases">
          <div className="title">
            <h2>Lançamentos</h2>
            <span>Ver todos</span>
          </div>

          <div className="card">
            <div className="content">
              <img src={hurb.src} alt="" />
              <div className="title">
                <h2>Hotel Urbano</h2>
                <span>$HURB</span>
              </div>
            </div>
            <div className="price">
              <h2>R$ 14</h2>
              <small>+ 7,2%</small>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img src={geek.src} alt="" />
              <div className="title">
                <h2>Geek Hunter</h2>
                <span>$GEEK</span>
              </div>
            </div>
            <div className="price">
              <h2>R$ 51</h2>
              <small>+ 7,2%</small>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img src={axie.src} alt="" />
              <div className="title">
                <h2>Axie Infinity</h2>
                <span>$AXS</span>
              </div>
            </div>
            <div className="price">
              <h2>R$ 720</h2>
              <small>+ 7,2%</small>
            </div>
          </div>
        </div>
      </S.RightBar>
    </S.Container>
  );
};

export default Home;
