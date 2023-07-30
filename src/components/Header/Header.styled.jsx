import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 50px;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 189px;
  height: 59px;

  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.02;
  text-transform: uppercase;

  color: #000000;
  background-color: #f5f6fb;
  text-decoration: none;

  &.active {
    color: #ffffff;
    background-color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;

    border-radius: 20px 20px 0px 0px;
    background-color: #fafbfd;
    &.active {
      color: #ff751d;
      background-color: #fefefe;
    }
  }
`;
