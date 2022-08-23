import styled from "styled-components";

interface props {
  menuOpen?: boolean;
}

export const Sidebar = styled.div`
  grid-area: 1 / 1 / 6 / 2;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 75%;
  }

  nav.sidebar {
    position: fixed;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: ${({ theme }) => theme.COLORS.BLACK2};
    transition: all 0.3s ease;
    z-index: 100;
    color: ${({ theme }) => theme.COLORS.WHITE};

    ul {
      padding: 0;
    }

    li {
      height: 50px;
      list-style: none;
      display: flex;
      margin-top: 10px;
    }

    header .image,
    .icon {
      min-width: 60px;
      border-radius: 6px;
    }

    .icon {
      min-width: 60px;
      border-radius: 6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    header {
      position: relative;

      .image-text {
        display: flex;
        align-items: center;
      }

      .image {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 40px;
          border-radius: 6px;
        }
      }

      .toggle {
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%) rotate(90deg);
        height: 25px;
        width: 25px;
        background-color: ${({ theme }) => theme.COLORS.GRAY3};
        border-radius: 50%;
        display: flex;
        padding: 5px;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        cursor: pointer;
        transition: all 0.5s ease;
      }
    }

    .menu-bar {
      margin-top: 30px;
      height: calc(100% - 25%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-y: scroll;
    }

    .menu-bar::-webkit-scrollbar {
      display: none;
    }

    li a {
      list-style: none;
      height: 100%;
      background-color: transparent;
      display: flex;
      justify-content: left;
      align-items: center;
      height: 100%;
      padding: 13px;
      width: 100%;
      border-radius: 1000px;
      text-decoration: none;
      transition: all 0.3s ease;

      span {
        margin-left: 20px;
      }

      :hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY3};
      }
    }
    li.active {
      a {
        background-color: ${({ theme }) => theme.COLORS.GRAY3};
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
    }
  }
  nav.sidebar.close {
    width: 88px;

    .text {
      opacity: 0;
    }

    h1 {
      display: none;
    }

    .toggle {
      transform: translateY(-50%) rotate(270deg);
    }
  }
`;
