import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;

  @media (min-width: 300px) and (max-width: 720px) {
    width: 370px;
  }
`;

export const H1 = styled.h1`
  color: #fff;
  letter-spacing: 8px;
  padding: 150px 0 65px 0;
  font-size: 24px;

  @media (min-width: 300px) and (max-width: 720px) {
    padding: 100px 0 30px 0;
    width: 370px;
    text-align: center;
  }
`;
