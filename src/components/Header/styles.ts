import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;


export const Nav = styled.nav`
  display: flex;
  column-gap: 15px;
  align-items: center;
  
`;

export const List = styled.p`
  color: white;
  font-weight: 700;
  transition: all 0.7s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
    transition: all 0.6s;
  }
`;
