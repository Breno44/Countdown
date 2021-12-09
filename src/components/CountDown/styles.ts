import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 80px;
  padding: 75px 0 230px 0;
  color: #7b7a97;
  font-size: 16px;
  letter-spacing: 6px;

  @media (min-width: 300px) and (max-width: 720px) {
    font-size: 10px;
    letter-spacing: 3px;
    gap: 30px;
    padding: 240px 0 260px 0;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    p:first-child {
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      font-size: 78px;
      color: #f95f85;
      border-radius: 10px;
      box-shadow: 0px 10px 0px #1a1a22;
      margin-bottom: 15px;
      background: rgb(52, 54, 79);
      background: linear-gradient(
        0deg,
        rgba(52, 54, 79, 1) 49%,
        rgba(44, 44, 68, 1) 49%
      );

      @media (min-width: 300px) and (max-width: 720px) {
        width: 60px;
        height: 60px;
        font-size: 18px;
      }
    }
  }
`;
