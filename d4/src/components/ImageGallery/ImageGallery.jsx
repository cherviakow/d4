/* eslint-disable react/prop-types */
import css from "./ImageGallery.module.css";


export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <div>
            <img className={css.picture} src={urls.small} alt={alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
