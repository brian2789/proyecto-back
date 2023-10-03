import React, { Component } from "react";

const product = {
  title: "Guitarra",
  description: "Guitarra Acustica",
  price: 5,
  thumbnail: "a",
  code: "1",
  stock: 5,
};
export default class ProductManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  validateProduct(product) {
    if (
      !product ||
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      return false;
    } else {
      return true;
    }
  }
  addProduct(product) {
    let productosTemporales = this.state.products;
    let exist = productosTemporales.findIndex((item) => {
      return item.code === product.code;
    });
    console.log(exist);
    if (exist === -1) {
      if (this.validateProduct(product)) {
        let newProduct = {
          ...product,
          id: productosTemporales.lenght ? productosTemporales.lenght + 1 : 1,
        };
        productosTemporales.push(newProduct);
        this.setState({ products: productosTemporales });
        console.log("New Product", newProduct);
      }
    }
  }
  getProducts() {
    console.log("Products", this.state.products);
    return this.state.products;
  }
  getProductsById(id) {
    let productosTemporales = this.state.products;
    let exist = productosTemporales.findIndex((item) => {
      return item.id === id;
    });
    console.log(exist, productosTemporales);
    if (exist != -1) {
      console.log("Product", productosTemporales[exist]);
      return productosTemporales[exist];
    } else {
      console.log("Not Found");
    }
    return false;
  }
  render() {
    return (
      <div>
        <h2>Agregar un producto</h2>
        <div className="button" onClick={() => this.addProduct(product)}>
          <p>Agregar Producto</p>
        </div>
        <h2>Mostrar productos en consola</h2>
        <div className="button" onClick={() => this.getProducts()}>
          <p>Mostrar Productos</p>
        </div>
        <h2>Mostrar producto con id=1 en consola</h2>
        <div className="button" onClick={() => this.getProductsById(1)}>
          <p>Mostrar producto</p>
        </div>
      </div>
    );
  }
}
