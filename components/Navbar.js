import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
export default function Navbar() {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.nav}>
            <img src="https://invidza.com/static/img/logo.svg" alt="logo" />
            <div className={styles.links}>
                <Link href="/sablon">
                    <a className={styles.link}>Davetiye Şablonları</a>
                </Link>
                <Link href="/blog">
                    <a className={styles.link}>Blog</a>
                </Link>
                <Link href="/destek">
                    <a className={styles.link}>Destek</a>
                </Link>
                <Link href="/giris">
                    <a className={styles.login}>Giris</a>
                </Link>
                <Link href="/uyeol">
                    <a className={styles.uyeol}>Üye Ol</a>
                </Link>
            </div>
            <div onClick={() => setShow(!show)} className={styles.menuIcon}><AiOutlineMenu size={30} /></div>
            {
                show && <div className={styles.menu}>
                    <div className={styles.menuShadow} onClick={() => setShow(!show)} ></div>
                    <div className={styles.menuContent} >
                        <Link href="/destek">
                            <a className={styles.link}>Giriş</a>
                        </Link>
                        <Link href="/destek">
                            <a className={styles.link}>Üye Ol</a>
                        </Link>
                        <Link href="/destek">
                            <a className={styles.link}>Davetiye Şablonları</a>
                        </Link>
                        <Link href="/destek">
                            <a className={styles.link}>Blog</a>
                        </Link>
                        <Link href="/destek">
                            <a className={styles.link}>Destek</a>
                        </Link>
                        <Link href="/destek">
                            <a className={styles.link}>İletişim</a>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}
