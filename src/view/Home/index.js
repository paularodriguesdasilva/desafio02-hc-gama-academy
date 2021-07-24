import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, LinkLogin, Menu } from "./style";

import ShopCart from "../../assets/cart.png";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart]);

  function handleCart(index) {
    let product = data[index];
    setCart((cart) => [...cart, product]);
  }

  return (
    <Container>
      <Menu>
        <div>
          <img
            src="https://i.pinimg.com/originals/9b/76/e9/9b76e9b3b02604e4aeba995f9601ba90.jpg"
            alt="Logo loja"
          />
        </div>
        <LinkLogin to="/login">Cadastre-se</LinkLogin>
        <div className="cart">
          <img src={ShopCart} alt="Shopcart" />
          <span>( {cart.length} ) - Itens no carrinho</span>
        </div>
      </Menu>
      <section>
        {data.map((product, index) => (
          <div className="product-content" key={product.id}>
            <img src={product.image} alt="Imagem do produto" />
            <h4>{product.name}</h4>
            <span>{product.model}</span>
            <h5>{product.price}</h5>
            <button onClick={() => handleCart(index)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </section>
    </Container>
  );
}
