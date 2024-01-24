import { useEffect, useState } from "react";
import Article from "./Article";
import TopArticle from "./TopArticle";

export default function ArticlesContainer() {
  const [articleData, setArticleData] = useState<any[]>([]);
  const [topArticleData, setTopArticleData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/getArticles")
      .then((response) => response.json())
      .then((data) => {
        console.log("data.articles is:", data.articles);
        if (data.articles.length > 0 && data.result === true) {
          const sortedArticles = data.articles.slice(6);
          const sortedTopArticles = data.articles.slice(0, 6);
          setArticleData(sortedArticles);
          setTopArticleData(sortedTopArticles);
        } else if (data.result === false) {
          console.log(data.error);
        } else {
          console.log("error fetching article data.");
        }
      });
  }, []);

  const articles = articleData.map((article) => {
    return (
      <Article
        avatar=""
        author={article.author}
        title={article.title}
        description={article.description}
        date={article.publishedAt}
        image={article.urlToImage}
      />
    );
  });

  const topArticles = topArticleData.map((topArticle) => {
    return (
      <TopArticle
        avatar=""
        author={topArticle.author}
        title={topArticle.title}
        date={topArticle.publishedAt}
      />
    );
  });

  return (
    <div className="px-72 py-6">
      <div className="flex flex-wrap gap-6">{topArticles}</div>
      <div className="flex flex-col gap-6">{articles}</div>
    </div>
  );
}
