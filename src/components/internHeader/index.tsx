import Link from "next/link"
import styles from '@/components/header/header.module.css'
export function InternHeader(){
    return(
        <>
        <Link className={styles.header} href='exit'>
          sair
        </Link>
        <br />
        <Link className={styles.header}  href='/mostrar grafico'>
          mostrar grafico
        </Link>
        <br />
        <Link className={styles.header}  href='/dashboard/settings'>
          config
    
        </Link>
        </>
    )
}