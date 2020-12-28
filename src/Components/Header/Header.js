import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
       return (
         <header>
            <nav>
              <ul>
                  <li><a href="#">Rólam</a></li>
                  <li><a href="#">Tanulmányok</a></li>
                  <li><a href="#">Munkatapasztalat</a></li>
                  <li><a href="#">Szakmai tapasztalat</a></li>
                  <li><a href="#">Kapcsolat</a></li>
              </ul>
            </nav>
         </header>
       );
    }
 }

 export default Header;
