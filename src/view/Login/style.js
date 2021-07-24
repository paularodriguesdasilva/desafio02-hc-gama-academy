import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  background: #548ca8;
  color: #fff;
  margin-top: 100px;

  form {
    width: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      margin-bottom: 10px;
      width: 600px;
      height: 20px;
      border-radius: 10px;
      border: 0;
      padding: 5px;
    }

    button {
      margin: 0 auto;
      width: 40%;
      height: 30px;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      background-color: #eeeeee;
      color: #334257;
      text-align: center;
      font-weight: 800;
      cursor: pointer;
      &:hover {
        background: #334257;
        color: #eeeeee;
        border: 1px solid #eeeeee;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  margin-top: 30px;
  background-color: #eeeeee;
  color: #334257;
  width: 10%;
  height: auto;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-weight: 800;
  &:hover {
    background: #334257;
    color: #eeeeee;
    border: 1px solid #eeeeee;
    transition: 0.5s ease-in-out;
  }
`;
