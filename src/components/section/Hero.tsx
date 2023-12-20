import Button from "../commons/Button";

export default function Hero() {
  return (
    <div className="flex justify-between items-center px-72 py-6 bg-yellow">
      <div className="flex flex-col gap-10">
        <div className="text-8xl font-semibold">Stay curious.</div>
        <div className="text-2xl w-7/12">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>
        <div className="flex justify-start">
          <Button label="Start reading" />
        </div>
      </div>
      <img src="/images/banner.png" width={600} />
    </div>
  );
}
