type NavlinkProps = {
  label: string;
  onClick?: () => void;
};

export default function Navlink({ label, onClick }: NavlinkProps) {
  return (
    <div onClick={onClick} className="text-xs font-bold cursor-pointer">
      {label}
    </div>
  );
}
