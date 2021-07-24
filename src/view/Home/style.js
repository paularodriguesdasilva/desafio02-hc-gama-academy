import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section {
    height: auto;
    width: 100%;
    background: #548ca8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 12px;

    .product-content {
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 12px;

      img {
        width: 200px;
        height: 200px;
      }

      button {
        border-radius: 5px;
        border: none;
        background-color: #476072;
        color: #eeeeee;
        text-align: center;
        cursor: pointer;
        &:hover {
          background: #eeeeee;
          color: #334257;
          border: 1px solid #334257;
          transition: 0.4s ease-in-out;
        }
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;

  img {
    width: 40px;
    height: auto;
    border-radius: 5px;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      padding-right: 20px;
    }
  }
`;

export const LinkLogin = styled(Link)`
  width: 120px;
  height: 30px;
  text-decoration: none;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  color: #476072;
  text-align: center;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    background: #476072;
    color: #eeeeee;
    border: 1px solid #eeeeee;
    transition: 0.4s ease-in-out;
  }
`;
