import React from "react";
import { DownloadIcon } from "./svg";
import downloadImage from "../utility/downloadImage";

export default function ResultThumb({ image, onDownloadHistory }) {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <div
        className="absolute bottom-2 right-2  p-1 "
        onClick={() => {
          onDownloadHistory(image);
          downloadImage(image);
        }}
      >
        <DownloadIcon />
      </div>
      <img
        src={image}
        alt="Anime character in kimono"
        className="w-full h-48 object-cover"
      />
    </div>
  );
}
