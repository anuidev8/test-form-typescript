import { FC } from "react"

import styles from './Modal.module.css'

interface ModalProps {
    data:string,
    onClose?:(()=>void)
}
const Modal:FC<ModalProps> = ({data,onClose}) =>{
    return(
        <section className={`${styles.modal}`}>
            <pre className={`${styles.modalBox}`}>
                {data}
                <button onClick={onClose} >Close</button>
            </pre>

        </section>
    )
}

export default Modal