import React from "react";
import "./Header.css";
import { Trans, useTranslation } from "react-i18next";

function HeaderNav() {
    const { t, i18n } =  useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header>
            <nav>
            <ul>
                <li>
                    <a href="#"><Trans i18nKey="description.menu1"></Trans></a>
                </li>
                <li><a href="#"><Trans i18nKey="description.menu2"></Trans></a></li>
                <li><a href="#"><Trans i18nKey="description.menu3"></Trans></a></li>
                <li><a href="#"><Trans i18nKey="description.menu4"></Trans></a></li>
                <li><a href="#"><Trans i18nKey="description.menu5"></Trans></a></li>
            </ul>
            <div className="language-selector">
                <div className="eng-language" onClick={() => changeLanguage("en")}>EN</div>
                <div className="hun-language" onClick={() => changeLanguage("hu")}>HU</div>
            </div>
            </nav>
        </header>
        );
}

class Header extends React.Component {
    
    render() {
       return (
        <HeaderNav />
       );
    }
 }

 export default Header;
