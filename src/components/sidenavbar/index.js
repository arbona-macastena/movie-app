import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link, useLocation } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  /* TODO: Write the necessary functions to open and close the sidebar */

  const handleNavState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideNav className={isOpen ? "visible" : ""}>
      {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
      {/* The sidebar should slide in from left */}
      <HamburgerMenu onClick={handleNavState}>
        <HamburgerMenuItem></HamburgerMenuItem>
        <HamburgerMenuItem></HamburgerMenuItem>
        <HamburgerMenuItem></HamburgerMenuItem>
      </HamburgerMenu>

      <SideNavBarCont>
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </SideNav>
  );
}

const SideNav = styled.div`
  width: 260px;
  height: 100%;
  position: fixed;
  transition: 0.4s;

  &.visible {
    background-color: ${colors.sideNavBar};
    z-index: 9;
  }

  @media (min-width: 768px) {
    background-color: ${colors.sideNavBar};
  }
`;

const SideNavBarCont = styled.div`
  z-index: 9;
  height: 100%;
  width: 100%;
  color: white;
  transition: 0.5s;
  transform: translateX(-100%);
  background-color: ${colors.sideNavBar};

  .visible & {
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    transform: translateX(0);
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}

  transition: background-color 1s;
  color: ${colors.sideNavBar};
  gap: 20px;

  @media (min-width: 768px) {
    color: white;
    justify-content: space-between;
  }

  .visible & {
    color: white;
  }
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 35px 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-right: 16px;
  cursor: pointer;
  padding: 24px;
  width: fit-content;

  @media screen and (min-width: 768px) {
    display: none;
  }

  .visible & {
    margin: 0 16px 10px 0;
  }
`;

const HamburgerMenuItem = styled.div`
  height: 2px;
  width: 30px;
  background: ${colors.sideNavBar};
  transition: all 0.3s ease-in-out;

  .visible & {
    background: white;

    &:first-child {
      display: none;
    }
    &:nth-child(2) {
      transform: rotate(-45deg) translate(-7px, 7px);
    }
    &:last-child {
      transform: rotate(45deg);
    }
  }
`;
