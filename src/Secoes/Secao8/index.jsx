import Preco from "../../componentes/Preco";
import Textbox3 from "../../componentes/Textbox3";
import styles from "./Secao8.module.css";

const Secao8 = () => {
  return (
    <div className={styles.secao}>
      <h2 className={styles.titulo}>PLANOS</h2>
      <div className={styles.conteudo}>
        <Textbox3
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
          titulo={"COBRE"}
          topicos={[
            "4 a 5 sessões de hipnoterapia.",
            "1 retorno hipnoterapêutico no prazo de 6 meses.",
          ]}
          parcela={"R$ 160,00"}
          total={"R$ 1.600,00"}
        />
        <Textbox3
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
          titulo={"PRATA"}
          topicos={[
            "4 a 5 sessões de hipnoterapia.",
            "1 retorno hipnoterapeutico no prazo de 6 meses.",
            "1 ano de acesso ao Clube Mentes Brilhantes.",
          ]}
          parcela={"R$ 250,00"}
          total={"R$ 2.900,00"}
        />
        <Textbox3
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
          titulo={"OURO"}
          topicos={[
            "4 a 5 sessões de hipnoterapia.",
            "1 ano de acesso ao Clube Mentes Brilhantes.",
            "Retornos hipnoterapeuticos ilimitados no prazo de 3 anos.",
          ]}
          parcela={"R$ 600,00"}
          total={"R$ 6.000,00"}
        />
      </div>
    </div>
  );
};

export default Secao8;
