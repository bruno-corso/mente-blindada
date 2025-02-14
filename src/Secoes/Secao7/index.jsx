import Textbox from "../../componentes/Textbox";
import styles from "./Secao7.module.css";

const Secao7 = () => {
  return (
    <div className={styles.secao}>
      <div className={styles.imagem}>
        <img src="/img/erica.png" alt="" />
      </div>
      <div className={styles.conteudo}>
        <Textbox
          texto={
            `Os maiores nomes dos negócios e vendas, como Jordan Belfort, Luiza Trajano e Grant Cardone, têm um segredo em comum: uma mentalidade voltada para grandes resultados e o domínio de técnicas de hipnose como storytelling, rapport, PNL que influenciam o subconsciente, onde as decisões de compra realmente acontecem. <br/><br/>Como desenvolver essa mentalidade? A resposta está em aprender com quem estuda o poder da mente há anos e aplica essas técnicas diariamente, além de trocar experiências com pessoas com o mesmo foco.<br/><br/>Meus pacientes são pessoas altamente capacitadas, que muitas vezes estão a um clique mental de saltos quânticos em suas vidas material (financeira), mental (saúde) e espiritual (propósito). Ter uma mentalidade de alto desempenho é treinar o cérebro para agir com foco, resiliência e transformar desafios em oportunidades.<br/><br/>Erica`
          }
          titulo={"Clube de Mentes Blindadas"}
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
        />
      </div>
    </div>
  );
};

export default Secao7;
