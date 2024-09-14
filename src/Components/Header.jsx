import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={import.meta.env.BASE_URL + '/images/logo.svg'} alt="Disney" />
        </Link>
      </Logo>

      <>
        <NavMenu>
          <a href="/">
            <img src={import.meta.env.BASE_URL + '/images/home-icon.svg' } alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="#">
            <img src={import.meta.env.BASE_URL + '/images/search-icon.svg'} alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="#">
            <img src={import.meta.env.BASE_URL + '/images/original-icon.svg'} alt="ORIGINAL" />
            <span>ORIGINAL</span>
          </a>
          <a href="#">
            <img src={import.meta.env.BASE_URL + '/images/movie-icon.svg'} alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a href="#">
            <img src={import.meta.env.BASE_URL + '/images/series-icon.svg'} alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>

        <SignOut>
          <DropDown>
            <span>Sign Out</span>
          </DropDown>
        </SignOut>
      </>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgba(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 120px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
