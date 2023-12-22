import Button from "../commons/Button";
import Navlink from "../commons/Navlink";
import SignUpModal from "../section/SignUpModal";
import { useState } from "react";
import { resetDefaultStore } from "@/reducers/users";
import { useDispatch } from "react-redux";
import SignInModal from "../section/SignInModal";

type NavbarProps = {
  isConnected: boolean;
  username: string | null;
};

export default function Navbar({ isConnected, username }: NavbarProps) {
  const dispatch = useDispatch();
  const [signUpModalState, setSignUpModalState] = useState<boolean>(false);
  const [signUpmodalStep, setSignUpModalStep] = useState<1 | 2>(1);

  const handleSignUpModalOpen = () => {
    setSignUpModalState(true);
  };

  const handleSignUpModalClose = () => {
    setSignUpModalState(false);
    setSignUpModalStep(1);
  };

  const handleSignUpModalStep = () => {
    if (signUpmodalStep === 1) {
      setSignUpModalStep(2);
    } else if (signUpmodalStep === 2) {
      setSignUpModalStep(1);
    }
  };

  const [signInModalState, setSignInModalState] = useState<boolean>(false);
  const [signInModalStep, setSignInModalStep] = useState<1 | 2>(1);

  const handleSignInModalOpen = () => {
    setSignInModalState(true);
  };

  const handleSignInModalClose = () => {
    setSignInModalState(false);
    setSignInModalStep(1);
  };

  const handleSignInModalStep = () => {
    if (signInModalStep === 1) {
      setSignInModalStep(2);
    } else if (signInModalStep === 2) {
      setSignInModalStep(1);
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
          <Navlink label="Sign in" onClick={handleSignInModalOpen} />
          <div className="inline-block">
            <Button onClick={handleSignUpModalOpen} label="Get Started" />
          </div>
          <SignUpModal
            isOpen={signUpModalState}
            onRequestClose={handleSignUpModalClose}
            modalStep={signUpmodalStep}
            handleModalStep={handleSignUpModalStep}
          />
          <SignInModal
            isOpen={signInModalState}
            onRequestClose={handleSignInModalClose}
            modalStep={signInModalStep}
            handleModalStep={handleSignInModalStep}
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
          isOpen={signUpModalState}
          onRequestClose={handleSignUpModalClose}
          modalStep={signUpmodalStep}
          handleModalStep={handleSignUpModalStep}
        />
      </div>
    </div>
  );
}
