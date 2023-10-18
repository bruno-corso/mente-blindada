import { useState } from 'react';
import styles from './Secao4.module.css'
import { AiFillPlusCircle } from 'react-icons/ai'
import iceberg from './imgs/iceberg.jpg'

const Secao4 = () => {

    const [benef1, setBenef1] = useState(false)
    const [benef2, setBenef2] = useState(false)
    const [benef3, setBenef3] = useState(false)

    return (
        <div className={styles.secao}>
            <h3>Principais Benefícios</h3>
            <div className={styles.topico} onClick={() => setBenef1(!benef1)}>
                <p>Resultados profundos, rápidos e transformadores</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
            {
                 benef1?   
                <div className={styles.detalhe1}>
                    <p>A maioria dos tratamentos terapêuticos são realizados através da mente consciente, que representa apenas 5% da mente.  A hipnoterapia permite acessarmos a mente subconsciente, que representa os outros 95% da mente. Atuar a nível subconsciente, identificar as causas raízes de transtornos que podem estar reprimidas e trabalha-las resulta em uma transformação significativamente mais rápida.</p>
                    <img src={iceberg} alt="Foto Iceberg explciando o que fica na superficie e o que fica nas profundezas" />
                </div>
                :null
            }
            <div className={styles.topico}>
                <p>Aumenta a possibilidade de  ter alta de remédios psiquiátricos</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
            <div className={styles.topico}>
                <p>Superar dificuldades pessoais e profissionais</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
        </div>
    )
}

export default Secao4;