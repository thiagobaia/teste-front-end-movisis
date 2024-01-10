import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartStyles = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      color: #141419;
      flex-wrap: nowrap;
      width: 100%;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
