import logo from '../assets/images/logo.svg'
import { Search } from './Search'

export const Header = () => {
    return (
        <header className="container">
            <img src={logo} alt="Rick And Morty App" className="logo" />

            <Search />
        </header>
    )
}
