import React from "react";
import satu from "./codeee.jpg";
import Navbar from "./component/Navbar";
import js from "./js.png";
import react from "./react.png";
import html from "./html.png";
import css from "./css.png";
import Carousel from "./component/carousel";
import Footer from "./component/Footer";

class App extends React.Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, {});
    });
  }
  render() {
    return (
      <>
        <Navbar />
        <div class="parallax-container">
          <div class="parallax">
            <img src={satu} />
          </div>
        </div>
        <div class="section white">
          <div class="flex">
            <p class="grey-text text-darken-3 lighten-3">
              <img src="https://media-exp1.licdn.com/dms/image/C5103AQFkQVMx3D8jwA/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=zvn9ZXgLlPYDYHg1qToezCMZqy4hjU9L5sv7VyH_PCY" />
              <img src={js} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <h2 class="header">Chandra Budi Utama Pasaribu</h2>
              Perkenalkan,Nama saya Chandra Budi Utama Pasaribu,saya lahir di
              Batam,14 April 2003.Saya tinggal di
              Bendungan,Bangsri,Kr.Pandan,Kr.Anyar. .Saat ini saya sedang
              melaksananakan PKL di Pondok Programmer.
            </p>
          </div>
        </div>
        <Carousel />
        <div class="parallax-container">
          <div class="container">
            <h1 class="white-text text-darken-2">
              <i>
                "Aku tak punya bakat khusus.Aku hanya dipenuhi hasrat akan rasa
                penasaran"
              </i>
            </h1>
            <h4 class="white-text text-darken-2">*Albert Einstein*</h4>
          </div>
          <div class="parallax">
            <img src="https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl80XzE1MzIzNzgxNjNfMDg3/screen-4.jpg?fakeurl=1&type=.jpg" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
