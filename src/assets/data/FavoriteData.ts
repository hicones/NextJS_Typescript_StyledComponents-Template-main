import axie from "../favorites/axie.png";
import blueWhales from "../favorites/blueWhales.png";
import bomb from "../favorites/bomb.png";
import bored from "../favorites/bored.png";
import clash from "../favorites/clash.png";
import sandbox from "../favorites/sandbox.png";

const getFavoriteData = () => {
  return [
    {
      collection: "Coleção NFT",
      title: "Blue Whales",
      price: "1000",
      tag: "BLUES",
      img: blueWhales,
    },
    {
      collection: "NFT Game",
      title: "Axie Infinity",
      price: "1000",
      tag: "AXS",
      img: axie,
    },
    {
      collection: "Coleção NFT",
      title: "Bored Apes",
      price: "1000",
      tag: "APE",
      img: bored,
    },
    {
      collection: "NFT Game",
      title: "Clash Of Cars",
      price: "1000",
      tag: "CLASH",
      img: clash,
    },
    {
      collection: "NFT Game",
      title: "Bomb Crypto",
      price: "1000",
      tag: "BCOIN",
      img: bomb,
    },
    {
      collection: "NFT Game",
      title: "The Sandbox",
      price: "1000",
      tag: "SAND",
      img: sandbox,
    },
  ];
};

export default getFavoriteData;
