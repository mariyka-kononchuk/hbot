import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
  border-bottom: 1px solid rgb(209, 209, 209);
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
  color: #7a7a7a;
`;

export const LogoWrapper = styled.div`
  display: flex;
  // width: 350px;
`;

export const Image = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 60px;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 38px;
  color: rgb(34, 34, 34);
`;

export const SubName = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: rgb(58, 58, 58);
`;

export const List = styled.ul`
  //width: 50px;

  @media screen and (min-width: 768px) {
    //width: 40px;
    display: flex;
    align-items: center;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 1.167;
  letter-spacing: 0.02;
  //text-transform: uppercase;

  color: #30a4e1;
  //background-color: #f5f6fb;
  text-decoration: none;

  &.active {
    color: #7a7a7a;
    //background-color: #ff751d;
  }

  &:hover {
    //text-decoration: underline;
    cursor: pointer;
    color: #7a7a7a;
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
