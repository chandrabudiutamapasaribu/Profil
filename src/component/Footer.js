import React from "react";

function Footer() {
  return (
    <div>
      <ul class="new collapsible ">
        <li>
          <div class="collapsible-header flex">
            <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" />
            <a href="https://www.facebook.com/budi.utama.9843499">Budi Utama</a>
          </div>
          <div class="collapsible-body"></div>
        </li>
        <li>
          <div class="collapsible-header flex">
            <img src="https://img.icons8.com/doodle/48/000000/github.png" />
            <a href="https://github.com/chandrabudiutamapasaribu">
              chandrabudiutamapasaribu
            </a>
          </div>
          <div class="collapsible-body"></div>
        </li>
        <li>
          <div class="collapsible-header flex">
            <img src="https://img.icons8.com/doodle/48/000000/instagram-new.png"></img>
            <a href="https://www.instagram.com/chandrabudiuta/?hl=id">
              chandrabudiuta
            </a>
          </div>
          <div class="collapsible-body"></div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
