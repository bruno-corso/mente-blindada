import Botao from "../../componentes/Botao";
import styles from "./Secao9.module.css";

const Secao9 = () => {
  return (
    <div className={styles.secao}>
      <div className={styles.conteudo}>
        <p className={styles.titulo}>
          Desperte sua mente, domine suas emoções e transforme seus resultados –
          o primeiro passo começa agora!
        </p>
      </div>
      <div className={styles.botao}>
        <Botao
          styles={{
            backgroundColor: "var(--laranja)",
            margin: "1px 0 0 0",
            color: "var(--preto)",
          }}
        >
          Agendar Avaliação
        </Botao>
      </div>
    </div>
  );
};

export default Secao9;
