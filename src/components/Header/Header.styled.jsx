import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  padding: 10px 0px 10px 0px;
  color: #7a7a7a;
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
  font-size: 24px;
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

export const ListItem = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
  //display: flex;
  //justify-content: center;
  //align-items: left;

  //width: 189px;
  //height: 59px;

  //font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.167;
  letter-spacing: 0.02;
  //text-transform: uppercase;

  color: #6ec1e4;
  //background-color: #f5f6fb;
  text-decoration: none;

  &.active {
    color: #6ec1e4;
    //background-color: #ff751d;
  }

  &:hover {
    //text-decoration: underline;
    cursor: pointer;
    color: #6ec1e4;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;

    border-radius: 20px 20px 0px 0px;
    //background-color: #fafbfd;
    &.active {
      //color: #ff751d;
      //background-color: #fefefe;
    }
  }
`;
