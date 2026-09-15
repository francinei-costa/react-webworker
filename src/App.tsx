import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import "./styles/theme.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultInput } from "./components/DefaultInput";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="meuInput" label="task" type="text" />
          </div>
          <div className="formRow">
            <p>escreva sua tarefa aqui</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
