import Textbox from '../../componentes/Textbox';
import styles from './Secao3.module.css'

const Secao3 = ({ }) => {
    return (
        <div className={styles.secao}>
            <div className={styles.conteudo}>
                <Textbox
                    texto={"A hipnoterapia utiliza a hipnose (estado alterado da mente) como ferramenta para auxiliar o tratamento de transtornos mentais, emocionais e comportamentais e potencializar o indivíduo para alcançar seus sonhos.<br/><br/> Estes desequilíbrios podem ter como origem eventos que causaram mal estar e ficaram mal resolvidos no subconsciente, ou seja, o paciente pode ou não se lembrar."}
                    titulo={"O que é a hipnoterapia?"}
                    corTexto={"var(--creme)"}
                    corTitulo={"var(--laranja)"}
                />
                <Textbox
                    texto={"Portanto, o processo consiste em conduzir o paciente para este estado hipnótico, pesquisar e identificar em seu subconsciente estas causas raízes e ressignificá-las, buscando o alívio e bem estar.<br/><br/>O paciente acompanha conscientemente o processo e nada pode ser feito sem o seu consentimento.<br/><br/>Além destes eventos, busca-se identificar possíveis bloqueios, crenças limitantes, emoções negativas que estejam atrapalhando o alcance de seus objetivos e transformá-los"}
                    titulo={"Como funciona?"}
                    corTexto={"var(--creme)"}
                    corTitulo={"var(--laranja)"}
                />
            </div>
        </div>);
}

export default Secao3;