import Button from "../commons/Button";
import Navlink from "../commons/Navlink";
import SignUpModal from "../section/SignUpModal";
import { useState } from "react";
import { resetDefaultStore } from "@/reducers/users";
import { useDispatch } from "react-redux";

type NavbarProps = {
  isConnected: boolean;
  username: string | null;
};

export default function Navbar({ isConnected, username }: NavbarProps) {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<boolean>(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1);

  const handleModalOpen = () => {
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
    setModalStep(1);
  };

  const handleModalStep = () => {
    if (modalStep === 1) {
      setModalStep(2);
    } else if (modalStep === 2) {
      setModalStep(1);
    }
  };

  const handleLogout = () => {
    dispatch(resetDefaultStore());
  };

  if (isConnected === false) {
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
          <SignUpModal
            isOpen={modalState}
            onRequestClose={handleModalClose}
            modalStep={modalStep}
            handleModalStep={handleModalStep}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-yellow border-b border-black px-72 py-5 flex justify-between items-center">
      <div>
        <img src="/images/mediumLogo.png" width={200} />
      </div>
      <div className="flex gap-6 items-center">
        <Navlink label="Our Story" />
        <Navlink label="Bookmarks" />
        <Navlink label="Logout" onClick={handleLogout} />
        <SignUpModal
          isOpen={modalState}
          onRequestClose={handleModalClose}
          modalStep={modalStep}
          handleModalStep={handleModalStep}
        />
      </div>
    </div>
  );
}
