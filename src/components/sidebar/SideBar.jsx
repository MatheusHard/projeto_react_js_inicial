import styles from '../sidebar/SideBar.module.css'
import {PencilLine } from "@phosphor-icons/react";


export function SideBar(){
    return(
        <aside className={styles.sidebar}>
           
            <img className={styles.cover} src="https://nxboats.com.br/wp-content/uploads/2023/11/Lamborghini.jpg"/>


            

            <div className={styles.profile}>

                <img className={styles.avatar} src="https://github.com/MatheusHard.png"/>
                <strong>Matheus Hardman</strong>
                <span>Full Stack Developer</span>

            </div>
            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}