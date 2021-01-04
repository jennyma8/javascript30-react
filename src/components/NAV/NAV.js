import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NAV = () => {
  return (
    <>
      <header className="App-header">
        Javascript 30 Days Challenge in React
      </header>
      <StyledLink to="/D1">Day 1</StyledLink>
      <div>test2</div>
    </>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #6b45e7;
  padding: 20px;
  color: black;
`;

export default NAV;
