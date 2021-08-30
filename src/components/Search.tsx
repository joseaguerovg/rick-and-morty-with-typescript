import searchIcon from '../assets/icons/search_icon.svg'

export const Search = () => {
    return (
        <div className="form-content">
            <form>
                <div className="search-content">
                    <input type="text" name="search" placeholder="Buscar personaje..." />
                    <button type="submit">
                        <img src={searchIcon} alt="Search..." />
                    </button>
                </div>
            </form>
        </div>
    )
}
