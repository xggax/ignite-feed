import { Post } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John"
            content="EXEMPLO CONTENT"
          />
          <Post 
            author="Edward"
            content="EXEMPLO CONTENT 2"
          />
        </main>
      </div>
    </>
  )
}