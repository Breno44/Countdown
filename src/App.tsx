import { Message } from "./components/Message";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { Container } from "./styles/appStyles";

export function App() {
  return (
    <Container>
      <Message />
      <CountDown />
      <Footer />
    </Container>
  );
}
