import React from "react";
import "@fortawesome/fontawesome-free";
import "./shoes.css";

// image
import Logo from "../shoes/img/logo_nike-removebg-preview.png";
import Produk1 from "../shoes/img/sepatu-1.png";
import Produk2 from "../shoes/img/sepatu-2.png";
import Produk3 from "../shoes/img/sepatu-3.png";
import Produk4 from "../shoes/img/sepatu-4.png";

const Shoes = () => {
  return (
    <>
      <div className="bannerAddtionalBg">
        <section className="home">
          <div className="container">
            <header>
              <div className="menu">
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <ul>
                  <li className="active">Shop</li>
                  <li>New Release</li>
                  <li>Sale</li>
                </ul>

                <div className="myAccount">
                  <div className="item">
                    <i className="fa fa-search"></i>
                  </div>
                  <div className="item cart">
                    <i className="fa fa-cart-plus"></i>
                    <span className="cart_item">1</span>
                  </div>
                  <div className="item user">
                    My Account <i className="fa fa-user-o"></i>
                  </div>
                </div>

                <div className="menu_bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </header>
            <div className="content">
              <h1>JoyBoy</h1>
              <div className="main">
                <img src="./img-product/sepatu-1.png" alt="" />
              </div>
              <div className="cta">ADD TO CART +</div>
            </div>

            <div className="slider_item">
              <div className="slider text">
                <div className="info">
                  <h3>TOP PICKS</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum est facere mollitia reprehenderit dicta quia numquam
                    facilis, veniam quasi! Quam sint, a similique perferendis
                    ullam laborum mollitia eveniet enim quis?
                  </p>
                  <div className="dots">
                    <span></span>
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="next_cta">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>

              {/* produk */}
              <div className="slider">
                <div className="small_product">
                  <img src={Produk1} alt="" />
                </div>
                <div className="product_details">
                  <h3>Pegasus</h3>
                  <p>Running collection</p>
                  <span>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                  <h2>$155</h2>
                </div>
                <div className="atc">
                  <i className="fa fa-plus-circle"></i>
                </div>
              </div>

              <div className="slider">
                <div className="small_product">
                  <img src={Produk2} alt="" />
                </div>
                <div className="product_details">
                  <h3>Pegasus</h3>
                  <p>Running collection</p>
                  <span>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star "></i>
                  </span>
                  <h2>$155</h2>
                </div>
                <div className="atc">
                  <i className="fa fa-plus-circle"></i>
                </div>
              </div>

              <div className="slider">
                <div className="small_product">
                  <img src={Produk3} alt="" />
                </div>
                <div className="product_details">
                  <h3>Pegasus</h3>
                  <p>Running collection</p>
                  <span>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star "></i>
                  </span>
                  <h2>$155</h2>
                </div>
                <div className="atc">
                  <i className="fa fa-plus-circle"></i>
                </div>
              </div>

              <div className="slider">
                <div className="small_product">
                  <img src={Produk4} alt="" />
                </div>
                <div className="product_details">
                  <h3>Pegasus</h3>
                  <p>Running collection</p>
                  <span>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star colored"></i>
                    <i className="fa fa-star "></i>
                    <i className="fa fa-star "></i>
                  </span>
                  <h2>$155</h2>
                </div>
                <div className="atc">
                  <i className="fa fa-plus-circle"></i>
                </div>
              </div>

              <div className="pagination">
                <span></span>
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shoes;
