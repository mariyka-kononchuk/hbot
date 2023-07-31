import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    width: 1280px;
  }
`;
