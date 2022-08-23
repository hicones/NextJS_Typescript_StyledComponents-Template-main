import styled from "styled-components";

export const HeaderComponent = styled.header`
  grid-area: 1 / 2 / 2 / 6;

  width: 90%;
  height: 126px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY};
  justify-content: space-between;

  div {
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    p {
      font-size: 24px;
      font-family: "Inter", sans-serif;
    }
  }

  div.content {
    display: flex;
  }

  div.notify {
    width: 64px;
    cursor: pointer;
    height: 64px;
    padding: 15px;
    justify-content: center;
    display: flex;
    background: ${({ theme }) => theme.COLORS.BLACK2};
    border-radius: 50%;

    :hover {
      opacity: 0.9;
    }

    small {
      position: absolute;
      background: #f85757;
      height: 10px;
      width: 10px;
      margin-left: 15px;
      border-radius: 1000px;
    }
  }

  div.country {
    display: flex;
    margin: 0 20px;
    align-items: center;
    height: 64px;
    background: ${({ theme }) => theme.COLORS.BLACK2};
    cursor: pointer;
    border-radius: 1000px;
    padding: 20px;

    hr {
      height: 15px;
      margin: 0 5px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin: 0 5px;
      }
    }

    span.currency {
      align-items: end;
    }

    :hover {
      opacity: 0.9;
    }
  }

  div.user {
    background: ${({ theme }) => theme.COLORS.BLACK2};
    display: flex;
    align-items: center;
    padding: 20px;
    height: 64px;
    border-radius: 1000px;
    cursor: pointer;

    span {
      margin: 0 10px;
    }

    :hover {
      opacity: 0.9;
    }
  }
`;
