import style from './Botao.module.css'

const Botao = ({children, styles, clique, acao}) => {
    return (
        <button className={style.botao} style={styles}>
            {children}
        </button>
    );
}

export default Botao;