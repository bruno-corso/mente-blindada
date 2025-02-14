import * as Scroll from "react-scroll";
import "./App.css";
import Secao1 from "./Secoes/Secao1";
import Secao5 from "./Secoes/Secao5";
import Secao6 from "./Secoes/Secao6";
import Secao7 from "./Secoes/Secao7";
import Secao8 from "./Secoes/Secao8";
import Secao9 from "./Secoes/Secao9";

function App() {
  const scroller = Scroll.scroller;

  function rolarPagina() {
    scroller.scrollTo("secao5", {
      duration: 750,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  }

  return (
    <div>
      <Secao1 rolar={rolarPagina} />
      <div name="secao5">
        <Secao5 />
      </div>
      <Secao6 />
      <Secao7 />
      <Secao8 />
      <Secao9 />
    </div>
  );
}

export default App;
