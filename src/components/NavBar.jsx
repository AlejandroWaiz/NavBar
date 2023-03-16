import React from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function NavBar() {
  return (
    <>
      <NavContainer>
        <h2>
          {" "}
          Responsive <span> NavBar</span>
        </h2>
        <div>
          <a href="/">Home</a>
          <a href="/Database">Base de datos</a>
          <a href="/GetRandomCard">Carta aleatoria</a>
        </div>
        <div className="burguerButton">
          <BurguerButton />
        </div>
      </NavContainer>
    </>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  .burguerButton{
    @media(min-width: 768px){
      display: none;
    }
  }

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
