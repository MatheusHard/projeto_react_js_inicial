import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
export function Comment(){

    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src='https://github.com/MatheusHard.png'/>
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
                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Q BOm, belo post, parabens!!!</p>
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