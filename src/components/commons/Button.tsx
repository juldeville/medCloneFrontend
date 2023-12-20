type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-black p-2 px-6 rounded-full text-white cursor-pointer text-sm"
    >
      {label}
    </div>
  );
}
