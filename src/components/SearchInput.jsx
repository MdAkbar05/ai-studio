import { toast } from "react-toastify";
import fetchImage from "../utility/fetchImage";
import LoadingButton from "./LoadingButton";
import { GenerateButton } from "./svg";

export default function SearchInput({
  onSearchChange,
  searchTerm,
  params,
  onSaveResults,
  isLoading,
  onLoading,
}) {
  const handlePromptSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a search term.");
      return;
    }
    onLoading(true);

    try {
      const result = await fetchImage(searchTerm, params);
      onSaveResults(result.url);
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Error fetching image:", error);
      toast.error("Failed to generate image. Please try again.");
    }
    onLoading(false);
  };
  return (
    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pl-5 pr-2">
          <svg
            className="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <form
          action="#"
          onSubmit={handlePromptSubmit}
          className="flex justify-between w-full"
        >
          <input
            type="text"
            placeholder="Create with Prompts"
            className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
            value={searchTerm}
            onChange={(e) => onSearchChange(e)}
          />
          <button
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
            type="submit"
          >
            {isLoading ? <LoadingButton /> : <GenerateButton />}
          </button>
        </form>
      </div>
    </div>
  );
}
