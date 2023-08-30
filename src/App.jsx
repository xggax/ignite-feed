import { Post } from "./Post"
import { Header } from "./components/Header";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

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