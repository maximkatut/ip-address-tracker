import styles from "../styles/searchForm.module.css"

const SearchForm = ({title}:{title: string}) => {
    return (
    <section className={styles.search}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <form name="form" action="post" className={styles.form}>
          <label>
            <input required type="text" placeholder='Search for any IP address or domain' minLength={7} maxLength={15} pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"/>
            <button type="submit">
                <span className='visually-hidden'>Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
            </button>
          </label>
        </form>
      </section>
    )
}

export default SearchForm;