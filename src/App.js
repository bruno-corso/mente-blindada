import * as Scroll from 'react-scroll';
import './App.css';
import Secao1 from './Secoes/Secao1';
import Secao2 from './Secoes/Secao2';
import Secao3 from './Secoes/Secao3';
import Secao4 from './Secoes/Secao4';


function App() {

  const scroller = Scroll.scroller

  function rolarPagina() {
    scroller.scrollTo('secao2', {
      duration: 750,
      delay: 0,
      smooth: true,
      offset: 0
    });
  }

  return (
    <div>
      <Secao1 rolar={rolarPagina} />
      <div name="secao2" >
        <Secao2  />
      </div>
      <Secao3 />
      <Secao4 />
    </div>
  );
}

export default App;
