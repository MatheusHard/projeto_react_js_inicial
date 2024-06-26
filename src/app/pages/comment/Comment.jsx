import { ThumbsUp  } from '@phosphor-icons/react'
import { FaTrashAlt } from "react-icons/fa";
import styles from './Comment.module.css'

import { Avatar } from '../../../components/avatar/Avatar'
export function Comment({content, onDeleteComment}){

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            {/*Componente Avatar*/}
            <Avatar borda={false} src={'https://github.com/MatheusHard.png'} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Hardman</strong>
                            <time 
                                title='12 de Fevereiro às 08:00'
                                dateTime='2024-02-12 08:00:00'>
                                à cerca de 2h
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <FaTrashAlt size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>        
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}