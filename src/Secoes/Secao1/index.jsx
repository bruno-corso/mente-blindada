import Botao from '../../componentes/Botao';
import styles from './Secao1.module.css'

const Secao1 = ({ rolar }) => {
    return (
        <div className={styles.secao}>
            <div className={styles.conteudo}>
                <h1 className={styles.titlo_grande}>MENTES BLINDADAS</h1>
                <h2 className={styles.subtitulo}>Domine a arte da mente e orquestre a sua  vida</h2>
            </div >
            <div className={styles.botao}>
                <Botao
                    acao={rolar}
                    clique={'rolagem'}
                    styles={{
                        backgroundColor: 'var(--vermelho)',
                        margin: '1px 0 0 0'
                    }}>
                    Saiba Mais
                </Botao>
            </div>
        </div>
    );
}

export default Secao1;