import styles from "./Textbox2.module.css";

const Textbox2 = ({ corTitulo, corTexto, titulo, texto, topicos, link }) => {
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
      {link && (
        <a
          style={{
            color: corTexto,
            textDecorationLine: "none",
            padding: "8px 12px",
            backgroundColor: "var(--preto2)",
          }}
          href="https://hipno-erica.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Saiba mais →
        </a>
      )}
    </div>
  );
};

export default Textbox2;
