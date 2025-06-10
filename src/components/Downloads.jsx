import React from "react";
import { DownloadIcon } from "./svg";
import downloadImage from "../utility/downloadImage";

export default function Downloads({ downloadHistory, onDownloadHistory }) {
  return (
    <>
      {/* Glow */}
      <div className="fixed -bottom-1/4 -right-0 ">
        <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
      </div>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold mb-8">
          Downloaded <span className="text-2xl">👋</span>
        </h2>
        {/* Image Presets Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {downloadHistory.map((history) => (
              <div
                key={history.id}
                className="image-card rounded-xl overflow-hidden cursor-pointer relative"
              >
                <div
                  className="absolute bottom-2 right-2  p-1  "
                  onClick={() => {
                    onDownloadHistory(history.item);
                    downloadImage(history.item);
                  }}
                >
                  <DownloadIcon />
                </div>
                <img
                  src={history.item}
                  alt="Anime character in kimono"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
