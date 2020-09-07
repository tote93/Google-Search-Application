import React from "react";
import "./styles/WebBuilder.css";
import { useStateValue } from "../StateProvider";

function WebBuilder() {
  const [{ webResults }, dispatch] = useStateValue();
  function truncateString(str, n) {
    // truncate string at N character appending "..." at the end
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="webBuilder__webSites">
      {webResults?.map((website, i) => {
        return (
          <div className="webBuilder__row" key={i}>
            <h2 className="webBuilder__title">{website?.title}</h2>
            <a href={website.formattedUrl} className="webBuilder__link">
              {truncateString(website?.displayLink, 100)}
            </a>
            <p className="webBuilder__info">
              {truncateString(website?.snippet, 100)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default WebBuilder;
