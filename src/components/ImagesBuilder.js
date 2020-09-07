import React from "react";
import "./styles/ImagesBuilder.css";
import { useStateValue } from "../StateProvider";

function ImagesBuilder() {
  const [{ imagesResults }, dispatch] = useStateValue();
  return (
    <div className="ImagesBuilder__images">
      {imagesResults?.map((image, i) => {
        return (
          <a
            className="ImagesBuilder__link"
            key={i}
            href={image.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="ImagesBuilder__img"
              src={image?.link}
              alt={image.title}
            />
          </a>
        );
      })}
    </div>
  );
}

export default ImagesBuilder;
