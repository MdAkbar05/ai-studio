export default async function fetchImage(prompt, params = {}) {
  const defaultParams = {
    // width: 1024, height: 1024 // Defaults are handled by API
  };
  const queryParams = new URLSearchParams({ ...defaultParams, ...params });
  const encodedPrompt = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?${queryParams.toString()}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text(); // Get error details if possible
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    // const imageBlob = await response.blob();
    // const imageUrl = URL.createObjectURL(imageBlob);
    return response;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}
