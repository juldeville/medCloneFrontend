import Button from "../commons/Button";
import Navlink from "../commons/Navlink";
import SignUpModal from "../section/SignUpModal";
import { useState } from "react";

export default function Navbar() {
  const [modalState, setModalState] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
  };

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
          <Button onClick={handleModalOpen} label="Get Started" />
        </div>
        <SignUpModal isOpen={modalState} onRequestClose={handleModalClose} />
      </div>
    </div>
  );
}
