import { header, link } from "./Header.css"

export const Header = () => {
    return (
        <nav className={header}>
            <img className='' src='/logo.png' alt='Logo de Hacker News' width='20px' />
            <a className={link} href='/'>
                Hacker News
            </a>
        </nav>
    )
}