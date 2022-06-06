import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { IData } from "../pages";
import styles from "../styles/searchForm.module.css";

interface IProps {
  title: string;
  setData: Dispatch<IData>;
}

const SearchForm = (props: IProps) => {
  const { title, setData } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any) => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_sS1eXKFqU4w6Mtk9gXsuvHTywPDdw&ipAddress=${formData.searchQuery}`
    )
      .then((res) => res.json())
      .then(({ ip, location, isp }) => {
        setData({ ip, location, isp });
      });
  };

  return (
    <section className={styles.search}>
      <h1 className={styles.title}>{title}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="form"
        className={styles.form}
      >
        <label>
          <input
            {...register("searchQuery", { required: true })}
            required
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <span className="visually-hidden">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
