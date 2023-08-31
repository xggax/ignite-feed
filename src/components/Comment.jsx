import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/xggax.png" alt=""></img>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Gama</strong>
              <time title="31 de Agosto de 2023 às 11:35h" dateTime="2023-08-31 11:35:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito Bom, parabéns!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}