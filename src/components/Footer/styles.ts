import styled from "styled-components";
import BgImg from "../../assets/images/pattern-hills.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  width: 100vw;
  height: 250px;
  background-image: url(${BgImg});
  background-size: cover;

  @media (min-width: 300px) and (max-width: 720px) {
    height: 150px;
  }
`;
