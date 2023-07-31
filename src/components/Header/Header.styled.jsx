import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  padding: 10px 0px 10px 0px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
  }
`;
export const LogoLink = styled(NavLink)`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

export const SubName = styled.p`
  font-weight: 400;
  font-size: 12px;
`;

export const List = styled.ul`
  //width: 50px;

  @media screen and (min-width: 768px) {
    //width: 40px;
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    //width: 50px;
  }
`;
export const StyledLink = styled(NavLink)`
  //display: flex;
  //justify-content: center;
  //align-items: left;

  width: 189px;
  height: 59px;

  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.02;
  text-transform: uppercase;

  color: #757575;
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
