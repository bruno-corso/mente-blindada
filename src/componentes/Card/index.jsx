import styles from './Card.module.css'

const Card = ({imagem, alter, textinho}) => {
    return ( 
        <div className={styles.card}>
            <img src={imagem} alt={alter} />
            <legend>{textinho}</legend>
        </div>
     );
}
 
export default Card;