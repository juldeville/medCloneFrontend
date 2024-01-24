import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

type ArticleProps = {
  avatar: string;
  author: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

export default function Article({
  avatar,
  author,
  title,
  description,
  date,
  image,
}: ArticleProps) {
  return (
    <div className="flex flex-col gap-3 w-3/4">
      <div className="flex justify-between items-center  w-8/12">
        <div className="flex items-center gap-3">
          <img src="/avatar.png" className="w-12" />
          <div className="text-sm font-semibold">{author}</div>
        </div>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col justify-between  w-8/12">
          <div className="text-xl font-bold">{title}</div>
          <div>{description}</div>
          <div>{date}</div>
        </div>
        <img src={image} className="w-72" />
      </div>
    </div>
  );
}
