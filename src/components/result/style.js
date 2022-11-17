import styled from "styled-components";

export const StyledSectionResult = styled.section`
  width: 25%;
  margin-right: 30px;

  h2 {
    font-size: 35px;
    color: blue;
    border-bottom: 1px solid blue;
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      margin-bottom: 30px;
      font-size: 30px;
      width: 100%;
      justify-content: space-between;

      p {
        color: blue;
        font-weight: 600;
      }

      span {
        color: blue;
      }
    }
  }
`;
