export default async function downloadImage(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.style.display = "none";
    const objectURL = URL.createObjectURL(blob);
    link.href = objectURL;
    link.download = "downloaded-image.jpg"; //  Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectURL);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}
