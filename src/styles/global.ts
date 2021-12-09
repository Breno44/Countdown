import { createGlobalStyle } from "styled-components";
import BgImg from "../assets/images/bg-stars.svg";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Text', sans-serif;
        background-color: #201e2b;
        background-image: url(${BgImg});
    }
`;
