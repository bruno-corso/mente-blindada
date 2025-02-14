import styles from "./Preco.module.css";

function Preco({ parcela, total }) {
  return (
    <div className={styles.cartao}>
      <div className={styles.cartao_credito}>
        <div className={styles.linha}>
          <span className={styles.textinho}>12x</span>
          <span>{parcela}</span>
        </div>
        <div className={styles.linha}>
          <span className={styles.textinho}>via cartão de crédito</span>
        </div>
      </div>
      <div className={styles.pix}>
        <div className={styles.linha}>
          <span>{total}</span>
        </div>
        <div className={styles.linha}>
          <span className={styles.textinho}>via PIX</span>
        </div>
      </div>
    </div>
  );
}

export default Preco;
