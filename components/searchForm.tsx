import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "../styles/searchForm.module.css";
import { IData } from "../pages";
import { api } from "../utils/api";

interface IProps {
  title: string;
  setData: Dispatch<IData>;
}

type FormData = {
  searchQuery: string;
};

const ipAddressRegEx = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$/;

const schema = yup
  .object({
    searchQuery: yup
      .string()
      .matches(
        /(^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$)|(^\w+([\.-]?\w+)*(\.\w{2,3})+$)/,
        {
          excludeEmptyString: true,
        }
      )
      .required(),
  })
  .required();

const SearchForm = ({ title, setData }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = ({ searchQuery }: FormData) => {
    const queryType = searchQuery.match(ipAddressRegEx)
      ? "ipAddress"
      : "domain";
    setIsLoading(true);
    api<IData>(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&${queryType}=${searchQuery}`
    )
      .then(({ ip, location, isp }) => {
        setData({ ip, location, isp });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className={styles.search}>
      <h1 className={styles.title}>{title}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="form"
        className={styles.form}
      >
        <div className={styles["input-wrapper"]}>
          <input
            {...register("searchQuery", { required: true })}
            required
            type="text"
            placeholder="Search for any IP or domain"
            disabled={isLoading}
          />
          {errors.searchQuery && (
            <p className={styles.error}>
              Accepts only ip addresses and domain names
            </p>
          )}
          <button type="submit" disabled={isLoading}>
            <span className="visually-hidden">Search</span>
            {isLoading ? (
              <svg
                className={styles.spin}
                viewBox="0 -256 1792 1792"
                id="svg3025"
                version="1.1"
                width="55%"
                height="55%"
              >
                <g transform="matrix(1,0,0,-1,121.49153,1315.7966)" id="g3027">
                  <path
                    fill={"white"}
                    d="M 496,192 Q 496,132 453.5,90 411,48 352,48 q -60,0 -102,42 -42,42 -42,102 0,60 42,102 42,42 102,42 59,0 101.5,-42 Q 496,252 496,192 z M 928,0 Q 928,-53 890.5,-90.5 853,-128 800,-128 747,-128 709.5,-90.5 672,-53 672,0 672,53 709.5,90.5 747,128 800,128 853,128 890.5,90.5 928,53 928,0 z M 320,640 Q 320,574 273,527 226,480 160,480 94,480 47,527 0,574 0,640 q 0,66 47,113 47,47 113,47 66,0 113,-47 47,-47 47,-113 z M 1360,192 q 0,-46 -33,-79 -33,-33 -79,-33 -46,0 -79,33 -33,33 -33,79 0,46 33,79 33,33 79,33 46,0 79,-33 33,-33 33,-79 z M 528,1088 Q 528,1015 476.5,963.5 425,912 352,912 279,912 227.5,963.5 176,1015 176,1088 q 0,73 51.5,124.5 51.5,51.5 124.5,51.5 73,0 124.5,-51.5 Q 528,1161 528,1088 z m 464,192 q 0,-80 -56,-136 -56,-56 -136,-56 -80,0 -136,56 -56,56 -56,136 0,80 56,136 56,56 136,56 80,0 136,-56 56,-56 56,-136 z m 544,-640 q 0,-40 -28,-68 -28,-28 -68,-28 -40,0 -68,28 -28,28 -28,68 0,40 28,68 28,28 68,28 40,0 68,-28 28,-28 28,-68 z m -208,448 q 0,-33 -23.5,-56.5 -23.5,-23.5 -56.5,-23.5 -33,0 -56.5,23.5 -23.5,23.5 -23.5,56.5 0,33 23.5,56.5 23.5,23.5 56.5,23.5 33,0 56.5,-23.5 23.5,-23.5 23.5,-56.5 z"
                    id="path3029"
                  />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
