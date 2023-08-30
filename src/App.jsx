import { Post } from "./Post"
import { Header } from "./components/Header";

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="John"
        content="EXEMPLO CONTENT"
      />
      <Post 
        author="Edward"
        content="EXEMPLO CONTENT 2"
      />
    </>
  )
}