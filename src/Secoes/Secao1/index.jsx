import Botao from '../../componentes/Botao';
import styles from './Secao1.module.css'

const Secao1 = () => {
    return (
        <div className={styles.secao}>
            <div className={styles.conteudo}>
                <h1 className={styles.titlo_grande}>Hipnoterapia</h1>
                <h2 className={styles.subtitulo}>Erica Franzini</h2>
                <p className={styles.texto}>
                    Explore o potencial que está dentro de você e transforme sua vida.
                </p>
            </div >
            <div className={styles.botao}>
                <Botao styles={{
                    backgroundColor: 'var(--vermelho)',
                    margin: '10px 0 0 0'
                }}>
                    Saiba Mais
                </Botao>
            </div>
        </div>
    );
}

export default Secao1;