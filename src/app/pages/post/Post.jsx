import styles from './Post.module.css'

export function Post() {
    
    return (
        
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <img className={styles.avatar} src='https://github.com/MatheusHard.png'/>
                <div className={styles.authorInfo}>
                    <strong>Matheus Hardman</strong>
                    <span>Full Stack MilkShake</span>
                </div>
            </div>
            <time 
                title='12 de Fevereiro às 08:00'
                dateTime='2024-02-12 08:00:00'>Publicado à 2h</time>
          </header>      

          <div className={styles.content}>
            <p>Fala poivo....</p>
            <p>Voces estudam, <a href='#'>ou so coçam?</a></p>
            <p>Deixe de Onda</p>
          </div>
          
          {/* Form de Comentario */}
          <form className={styles.commentForm}>
            <strong>Comenta</strong>
            <textarea placeholder='Comenta Logo, Ourubu!!!'/>
            <footer>
                <button type='submit'>Pubricar</button>
            </footer>
          </form>
        </article>
    )
}