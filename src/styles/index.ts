import styled from "styled-components";
import lines from "../assets/rightbar/graphLines.svg";

export const Container = styled.div`
  padding-right: 2rem;
  width: 100%;
  display: flex;
`;

export const HomeContent = styled.main`
  width: 60%;
  display: flex;
  padding: 0 20px;
  margin-right: 20px;
  flex-direction: column;
  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.BLACK2};
  height: 100%;
  padding-bottom: 20px;

  div.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.buttons {
    display: flex;
    .active {
      background: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  div.availableTokens {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.GRAY3};
    padding: 20px;
    border-radius: 10px;
    .content {
      div.list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        display: flex;
        list-style: none;
        align-items: center;

        li {
          font-size: 15px;
          font-weight: 400;
          margin: 15px;
          text-align: center;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          font-family: "Inter", sans-serif;
          color: ${({ theme }) => theme.COLORS.WHITE3};

          :hover {
            opacity: 0.8;
            background: ${({ theme }) => theme.COLORS.GRAY2};
            transition: all 0.5s ease;
            border-radius: 1000px;
            padding: 10px;
          }
        }

        li.active {
          color: ${({ theme }) => theme.COLORS.BLUE};
          background: ${({ theme }) => theme.COLORS.GRAY2};
          border-radius: 1000px;
          padding: 10px;
          img {
            margin: 5px;
          }
        }
      }
      li.searchInput {
        padding: 10px;
        list-style: none;
        display: flex;
        width: 300px;
        height: 48px;
        border-radius: 4px;
        background: ${({ theme }) => theme.COLORS.GRAY2};
        justify-self: end;

        input {
          margin: 5px;
          background: none;
          outline: none;
          border: none;
          font-size: 17px;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.WHITE3};
          transition: all 0.5s ease;
        }
      }
    }

    div.cardGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 20px;
    }

    div.card {
      display: flex;
      flex-direction: column;
      div.image {
        img {
          padding: 0;
          margin: 0;
          height: 100%;
          width: auto;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      }
      div.cardDescription {
        background: ${({ theme }) => theme.COLORS.BLACK2};
        width: 260px;
        height: 150px;
        padding: 20px;
        display: flex;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        div.price {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: end;
          height: 130px;
          color: ${({ theme }) => theme.COLORS.BLUE};

          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 18px;

          img {
            width: 50px;
            padding: 10px;
            background: ${({ theme }) => theme.COLORS.GRAY2};
            border-radius: 50%;
            display: flex;
            cursor: pointer;
            align-items: center;

            :hover {
              opacity: 0.7;
            }
          }
        }

        div.description {
          font-family: "Inter", sans-serif;
          width: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #ffff;
          span,
          small {
            color: ${({ theme }) => theme.COLORS.GRAY};
            font-size: 14px;
            font-weight: 400;
          }

          h3 {
            font-size: 18x;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const RightBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.BLACK2};
  border-radius: 16px;
  height: 100%;

  div.balance {
    div.title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      img {
        padding: 20px;
        background: ${({ theme }) => theme.COLORS.GRAY3};
        border-radius: 50%;
        cursor: pointer;

        :hover {
          opacity: 0.7;
        }
      }
    }
    .currentBalance {
      background: ${({ theme }) => theme.COLORS.BLUE};
      border-radius: 16px;
      margin: 0 25px 5px;
      padding: 20px;
      height: 150px;
    }
    .buttons {
      display: flex;
      justify-content: space-evenly;

      button {
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        width: 160px;
        height: 50px;
        border: 0;
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        font-family: "Inter", sans-serif;
        margin: 5px;
        cursor: pointer;
        background: ${({ theme }) => theme.COLORS.GRAY3};
        color: ${({ theme }) => theme.COLORS.WHITE};

        img {
          margin: 5px;
        }

        cursor: pointer;

        :hover {
          opacity: 0.7;
        }
      }
    }
  }

  div.portifolio {
    div.title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      span {
        color: ${({ theme }) => theme.COLORS.GRAY};
        text-decoration: underline;
        cursor: pointer;
      }
    }
    div.graph {
      display: flex;
      padding: 0 60px;
      ul {
        list-style: none;

        li {
          display: flex;
          align-items: center;
          font-family: "Inter", sans-serif;
          text-align: center;
          font-weight: 600;
          cursor: pointer;
          margin-top: 5px;
          color: ${({ theme }) => theme.COLORS.WHITE};

          small {
            margin: 5px;
            height: 10px;
            width: 10px;
            margin-left: 15px;
            border-radius: 1000px;
          }

          small.yellow {
            background: #f9b146;
          }

          small.pink {
            background: #be34c0;
          }
          small.blue {
            background: #1371ff;
          }
        }
      }
    }
  }

  div.wallet {
    div.title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      span {
        color: ${({ theme }) => theme.COLORS.GRAY};
        text-decoration: underline;
        cursor: pointer;
      }
    }
    div.cards {
      display: flex;
      justify-content: space-around;
    }

    div.card {
      width: 130px;
      height: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 16px;
      background-image: url(${lines.src});
      background-repeat: no-repeat;
      background-position: center;
      padding: 15px;
      justify-content: center;
      background-color: ${({ theme }) => theme.COLORS.GRAY3};
      font-family: "Inter", sans-serif;
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }

      img {
        position: absolute;
        margin-top: -80px;
      }

      h2 {
        font-size: 16px;
        font-weight: 600;
      }

      span {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 14px;
        font-weight: 400;
      }

      p {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      small {
        font-size: 14px;
        font-weight: 400;
        color: #00b574;
      }
    }
  }

  div.releases {
    div.title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      span {
        color: ${({ theme }) => theme.COLORS.GRAY};
        text-decoration: underline;
        cursor: pointer;
      }
    }

    div.content {
      display: flex;
      padding: 5px 20px;

      div.title {
        display: flex;
        flex-direction: column;
        align-items: baseline;
      }
    }

    div.card {
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.COLORS.GRAY3};
      border-radius: 16px;
      margin: 15px;
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }
    }

    div.price {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      justify-content: space-between;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      padding: 0 10px;

      small {
        font-size: 14px;
        font-weight: 400;
        color: #00b574;
      }
    }
  }
`;

export const Button = styled.a`
  padding: 1.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRAY3};
  border-radius: 8px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 250px;
  font-weight: 600;
  height: 72px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  img {
    margin: 5px;
  }

  :hover,
  :focus,
  :active {
    background: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
