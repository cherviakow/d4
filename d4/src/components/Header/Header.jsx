/* eslint-disable react/prop-types */
import css from "./Header.module.css";
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.username);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            className={css.search}
            name="username"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
