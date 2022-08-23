import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr repeat(2, 1fr);
  section {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;
