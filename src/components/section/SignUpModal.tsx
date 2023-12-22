import Modal from "react-modal";
import { useState } from "react";
import Button from "../commons/Button";
import { useDispatch } from "react-redux";
import { addTokenToStore, addUsernameToStore } from "@/reducers/users";

type SignUpModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  modalStep: 1 | 2;
  handleModalStep: () => void;
};

export default function SignUpModal({
  isOpen,
  onRequestClose,
  modalStep,
  handleModalStep,
}: SignUpModalProps) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const requestSignUp = () => {
    fetch("http://localhost:3000/users/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data is:", data);
        dispatch(addTokenToStore({ token: data.token }));
        dispatch(addUsernameToStore({ username: username }));
      });
  };

  const clearInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = () => {
    requestSignUp();
    clearInputs();
    onRequestClose();
  };

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "600px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
    },
  } as Modal.Styles;

  if (modalStep === 1) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={modalStyle}
        ariaHideApp={false}
      >
        <div className="bg-white flex flex-col justify-center items-center h-full gap-16 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-2xl font-semibold">Sign up with username</div>
            <div>
              Enter a username and email that will be associated with your
              account.
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center w-full ">
              <div>Your username</div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-b border-black focus:outline-none w-64"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <div>Your email</div>
              <input
                value={email}
                className="border-b border-black focus:outline-none  w-64"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <Button label="Continue" onClick={handleModalStep} />
        </div>
      </Modal>
    );
  } else if (modalStep === 2) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyle}>
        <div className="bg-white flex flex-col justify-center items-center h-full gap-16 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-2xl font-semibold">Create password</div>
            <div>
              Create a password that will be associated with your account.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full ">
            <div>Your password</div>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-black focus:outline-none w-64"
            />
          </div>
          <Button label="Continue" onClick={handleSubmit} />
        </div>
      </Modal>
    );
  } else {
    console.log("Error loading modal, modal step is:", modalStep);
  }
}
