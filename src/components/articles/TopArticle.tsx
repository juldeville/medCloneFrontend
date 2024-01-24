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
  return (
    <div className="flex flex-col w-1/4 gap-3">
      <div className="flex items-center gap-3">
        <img src="/avatar.png" className="w-12" />
        <div>{author}</div>
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div>{date}</div>
    </div>
  );
}
