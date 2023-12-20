import Button from "../commons/Button";
import Navlink from "../commons/Navlink";

export default function Navbar() {
  return (
    <div className="bg-yellow border-b border-black px-72 py-5 flex justify-between items-center">
      <div>
        <img src="/images/mediumLogo.png" width={200} />
      </div>
      <div className="flex gap-6 items-center">
        <Navlink label="Our Story" />
        <Navlink label="Bookmarks" />
        <Navlink label="Sign in" />
        <div className="inline-block">
          <Button label="Get Started" />
        </div>
      </div>
    </div>
  );
}
