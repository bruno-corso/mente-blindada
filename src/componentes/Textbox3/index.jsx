import Preco from "../Preco";
import styles from "./Textbox3.module.css";

const Textbox3 = ({
  corTitulo,
  corTexto,
  titulo,
  texto,
  topicos,
  parcela,
  total,
}) => {
  return (
    <div className={styles.textbox3}>
      <h3 style={{ color: corTitulo }}>{titulo}</h3>
      <div className={styles.cardzao}>
        <ul>
          {topicos.map((topic) => {
            return <li>{topic}</li>;
          })}
        </ul>
        <Preco parcela={parcela} total={total} />
      </div>
    </div>
  );
};

export default Textbox3;
