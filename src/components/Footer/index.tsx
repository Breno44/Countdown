import { Container } from "./styles";
import FaceIcon from "../../assets/images/icon-facebook.svg";
import InstaIcon from "../../assets/images/icon-instagram.svg";
import PintIcon from "../../assets/images/icon-pinterest.svg";

export function Footer() {
  return (
    <Container>
      <img src={FaceIcon} alt="icon" />
      <img src={PintIcon} alt="icon" />
      <img src={InstaIcon} alt="icon" />
    </Container>
  );
}
