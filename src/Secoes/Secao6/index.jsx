import Textbox2 from "../../componentes/Textbox2";
import styles from "./Secao6.module.css";

const Secao6 = () => {
  return (
    <div className={styles.secao}>
      <h2 className={styles.titulo}>O PROGRAMA</h2>
      <div className={styles.conteudo}>
        <Textbox2
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
          titulo={"Tratamento Individual"}
          texto={
            "A melhor solução para eliminar desequilíbrios emocionais como ansiedade, depressão, síndrome do pânico, TOC e compulsões, porque oferece:"
          }
          topicos={[
            "Resultados rápidos em 3 a 5 sessões, enquanto outras técnicas levam anos.",
            "Economia de tempo e dinheiro, com foco na raiz do problema, não apenas na conversa.",
            "Possibilidade de reduzir ou eliminar medicamentos psiquiátricos.",
            "6 meses de suporte emocional para enfrentar desafios com inteligência e preservar sua reputação.",
          ]}
        />
        <Textbox2
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
          titulo={"Clube Mentes Blindadas"}
          texto={
            "Focado em empresários, investidores e empreendedores selecionados que querem dominar habilidades mentais para negócios, vendas e persuasão."
          }
          topicos={[
            "Resiliência para transformar desafios em oportunidades.",
            "Técnicas de Jordan Belfort, Tony Robbins, Natalia Beauty e outros.",
            "Influência e persuasão para negócios, equipe e clientes.",
            "Energia, vibração e alta performance na prática.",
            "Networking com pessoas no mesmo nível.",
            "Encontro online todo primeiro domingo do mês, com tema exclusivo.",
          ]}
        />
      </div>
    </div>
  );
};

export default Secao6;
