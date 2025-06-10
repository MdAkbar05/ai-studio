export default async function listImageModels() {
  const url = "https://image.pollinations.ai/models";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const models = await response.json();
    return models;
  } catch (error) {
    console.error("Error fetching image models:", error);
  }
}
