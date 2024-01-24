import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

type TopArticleProps = {
  avatar?: string;
  author: string;
  title: string;
  date: string;
};

export default function TopArticle({
  avatar,
  author,
  title,
  date,
}: TopArticleProps) {
  const formatedDate = new Date(`${date}`)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  let formatedTitle = title;
  if (title.length > 67) {
    formatedTitle = title.substring(0, 67) + "...";
  }
  return (
    <div className="flex flex-col w-1/4 gap-3">
      <div className="flex items-center gap-3">
        <img src="/avatar.png" className="w-12" />
        <div className="text-sm font-semibold">{author}</div>
      </div>
      <div className="text-lg font-bold">{formatedTitle}</div>
      <div>{formatedDate}</div>
    </div>
  );
}
