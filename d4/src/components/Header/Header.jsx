import css from "./Header.module.css"


export default function SearchBar(){
    

    return(
        <header>
            <form>
                <input type="text"
                className={css.search}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos" 
                />

                <button className={css.button} type="submit">Search</button>
            </form>
        </header>
    )
}