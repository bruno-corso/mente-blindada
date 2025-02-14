import styles from "./Textbox2.module.css";

const Textbox2 = ({ corTitulo, corTexto, titulo, texto, topicos }) => {
  return (
    <div className={styles.textbox2}>
      <h3 style={{ color: corTitulo }}>{titulo}</h3>
      <article
        style={{ color: corTexto }}
        dangerouslySetInnerHTML={{ __html: texto }}
      />
      <ul>
        {topicos.map((topic) => {
          return <li>{topic}</li>;
        })}
      </ul>
    </div>
  );
};

export default Textbox2;
