import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
       <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/12355794?v=4" />
            <div className={styles.authorInfo}>
              <strong>Gabriel Gama</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="31 de Agosto de 2023 às 11:35h" dateTime="2023-08-31 11:35:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>{' '} 
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}