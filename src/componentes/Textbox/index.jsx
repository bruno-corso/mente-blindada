import styles from './Textbox.module.css'

const Textbox = ({corTitulo, corTexto, titulo, texto}) => {
    return ( 
        <div className={styles.textbox}>
            <h3 style={{color: corTitulo}}>{titulo}</h3>
            <article style={{color: corTexto}} dangerouslySetInnerHTML={{ __html: texto }}/>            
        </div>
     );
}
 
export default Textbox;