import { useEffect, useState } from "react";
import Articles from "./Articles";
import TopArticles from "./TopArticles";

export default function ArticlesContainer() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getArticles")
      .then((response) => response.json())
      .then((data) => {
        if (data.articles.length > 0 && data.response === true) {
          setArticleData(data.articles);
        } else if (data.response === false) {
          console.log(data.error);
        } else {
          console.log("error fetching article data.");
        }
      });
  }, []);
  return (
    <div>
      <TopArticles />
      <Articles />
    </div>
  );
}
