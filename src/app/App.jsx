import { Post } from '../Post'
import { Header } from '../components/hearder/Header'
import '../global.css'
import styles from '../app/App.module.css'
import { SideBar } from '../components/sidebar/SideBar'

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post author="BOm dia" />
          <Post author="BOm dia" />
        </main>
      </div>
     
    </div>
  )
}

