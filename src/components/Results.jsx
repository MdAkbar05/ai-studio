import React from "react";
import ResultThumb from "./ResultThumb";
import ImageLoader from "./ImageLoader";

export default function Results({ results, onDownloadHistory, isLoading }) {
  console.log(isLoading);
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {results
          .sort((a, b) => b - a)
          .map((image, index) => (
            <ResultThumb
              key={index}
              image={image}
              onDownloadHistory={onDownloadHistory}
            />
          ))}
        {results.length === 0 && !isLoading && (
          <div className="col-span-3 text-center text-gray-500">
            No image generated yet. Please create an image first.
          </div>
        )}
        {isLoading && <ImageLoader />}
      </div>
    </div>
  );
}
