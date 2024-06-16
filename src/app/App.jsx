import { Header } from '../components/hearder/Header'
import '../global.css'
import styles from '../app/App.module.css'
import { SideBar } from '../components/sidebar/SideBar'
import { Post } from './pages/post/Post'

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post/>
        </main>
      </div>
     
    </div>
  )
}

