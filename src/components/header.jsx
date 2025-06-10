import Logo from "../assets/logo.svg";

export default function Header({ onToggleDownload, page }) {
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={Logo} className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <button
          className={`hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all ${
            page === "create" ? "text-zinc-200" : "text-zinc-400"
          }`}
          onClick={() => onToggleDownload("create")}
        >
          Create Image
        </button>
        <button
          className={`hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all ${
            page === "download" ? "text-zinc-200" : "text-zinc-400"
          }`}
          onClick={() => onToggleDownload("download")}
        >
          Downloaded
        </button>
      </ul>
    </header>
  );
}
