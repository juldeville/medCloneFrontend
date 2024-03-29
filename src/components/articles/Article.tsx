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
  const formatedDate = new Date(`${date}`)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  const randomNumber = Math.floor(Math.random() * 50) + 1;
  const avatarImage = `https://i.pravatar.cc/150?img=${randomNumber}`;

  return (
    <div className="flex flex-col gap-5 w-3/4">
      <div className="flex justify-between items-center  w-8/12">
        <div className="flex items-center gap-3">
          <img src={avatarImage} className="w-12 rounded-full" />
          <div className="text-sm font-semibold">{author}</div>
        </div>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-start gap-4  w-8/12">
          <div className="text-xl font-bold">{title}</div>
          <div>{description}</div>
          <div className="text-xs text-gray-400 font-semibold">
            {formatedDate}
          </div>
        </div>
        <img src={image} className="w-72" />
      </div>
    </div>
  );
}
