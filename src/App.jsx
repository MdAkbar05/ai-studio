import { useState } from "react";
import Header from "./components/header";
import Results from "./components/Results";
import SearchInput from "./components/SearchInput";
import SettingPanel from "./components/SettingPanel";
import Downloads from "./components/Downloads";
//import toastify container
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [results, setResults] = useState([]);
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [page, setPage] = useState("create");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState({
    model: "Flux",
    seed: Math.floor(Math.random() * 1000000), // Auto-generated seed
    width: 1024,
    height: 1024,
  });

  const handleDownloadHistory = (item) => {
    //find by id exist
    const isExist = downloadHistory.find((i) => i.item === item);
    if (isExist) {
      return;
    }
    const newDownloadHistory = [
      ...downloadHistory,
      {
        id: crypto.randomUUID(),
        item,
      },
    ];
    setDownloadHistory(newDownloadHistory);
  };
  // Toggle between download and create image view
  const handleToggleDownload = (item) => {
    setPage(item);
  };

  const handleIsLoading = (loading) => {
    setIsLoading(loading);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleParamsChange = (newParams) => {
    setParams(newParams);
  };

  const handleResultClick = (image) => {
    setIsLoading(true);
    // Handle result click if needed
    console.log("Result clicked:", image);
    const newResults = [...results, image];
    setResults(newResults);
    setIsLoading(false);
    setSearchTerm(""); // Clear search term after saving results
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div class="fixed -bottom-1/4 -right-0  ">
        <div class="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full bg-pink-400 blur-[180px]"></div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header page={page} onToggleDownload={handleToggleDownload} />

      {page === "download" && (
        <Downloads
          downloadHistory={downloadHistory}
          onDownloadHistory={handleDownloadHistory}
        />
      )}
      {page === "create" && (
        <main className="relative z-10">
          {/* Welcome Message */}
          <h2 className="text-4xl font-bold mb-8">
            Let's create a masterpiece, Alvian!{" "}
            <span className="text-2xl">👋</span>
          </h2>
          {/* Search Input */}

          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            params={params}
            onSaveResults={handleResultClick}
            isLoading={isLoading}
            onLoading={handleIsLoading}
          />
          <SettingPanel params={params} onParamsChange={handleParamsChange} />
          <Results
            results={results}
            onDownloadHistory={handleDownloadHistory}
            isLoading={isLoading}
          />
        </main>
      )}
    </div>
  );
}
