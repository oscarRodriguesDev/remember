import Link from "next/link"
import styles from '@/components/header/header.module.css'
export function Header(){
    return(
        <>
        <Link className={styles.header} href='/'>
          Home
        </Link>
        <br />
        <Link className={styles.header}  href='/contatos'>
          Contatos
        </Link>
        <br />
        <Link className={styles.header}  href='/dashboard'>
          DashBoards
        </Link>
        </>
    )
}