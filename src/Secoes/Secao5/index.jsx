import Textbox from "../../componentes/Textbox";
import styles from "./Secao5.module.css";

const Secao5 = () => {
  return (
    <div className={styles.secao}>
      <div className={styles.conteudo}>
        <Textbox
          texto={
            "O Mentes Blindadas é um programa exclusivo para empresários, investidores e empreendedores que querem fortalecer a mente e os resultados. Com hipnose clínica, tratamos desequilíbrios emocionais enquanto desenvolvemos resiliência para voos mais altos, aprofundamos técnicas de persuasão e vendas e construímos um networking estratégico com quem joga no mesmo nível ou acima."
          }
          titulo={"O que somos?"}
          corTexto={"var(--branco)"}
          corTitulo={"var(--laranja)"}
        />
      </div>
      <div className={styles.imagem}>
        <img src="/img/frase_blur.png" alt="" />
      </div>
    </div>
  );
};

export default Secao5;
