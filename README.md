# LWS_AI Studio 🧠🎨

Welcome to **LWS_AI Studio**, a powerful AI-driven image generation tool that transforms your **text prompts into stunning images** using the **Pollinations AI API**.

This project is built as part of the **LWS Batch 3 Assignment 4** following all given instructions and limitations, using **Vite + React (JavaScript)** with **State-Based Routing** and Tailwind CSS.

---

## 🔗 Project Links

- 📂 GitHub Classroom: [Assignment Repo](https://github.com/Learn-with-Sumit/batch-3-assignment-4-lws-ai-studio-MdAkbar05)
- 📁 Personal Repository: [My Repo](https://github.com/MdAkbar05/ai-studio)

---

## 📌 Features

- 🔄 **State-Based Routing** (no React Router)
- ✨ **Text-to-Image Generation** using [Pollinations AI](https://pollinations.ai/)
- ⚙️ **Advanced Settings Panel** for:
  - Model selection (fetched from Pollinations AI)
  - Ratio presets (1:1, 16:9, etc.)
  - Custom Height & Width
- 🎲 **Random seed** generation for each image
- 🖼️ Fetch & render **9 AI-generated images per request**
- 🧠 Graceful **error handling** with loading, timeouts, and error messages
- ⬇️ **Download Button** for each image
- 📁 **Downloaded Images Tracker** – displayed on "Downloaded" page
- 💾 Unique download listing (one-time entry per image)

---

## 🧰 Tech Stack

- ⚡ Vite
- ⚛️ React (JavaScript)
- 🌬️ Tailwind CSS
- 🔗 REST APIs (Fetch API only)
- 🔔 `react-toastify` for user feedback
- 🎨 `react-icons` for UI icons

---

## 🚦 State Management

- `route` → for handling state-based navigation (e.g., `create`, `download`)
- `images` → holds the fetched image list
- `downloadedImages` → stores unique images downloaded by the user
- `settings` → stores selected model, size, and ratio

---

## ⚠️ Project Guidelines Followed

- ✅ No React Router used (state-based routing implemented)
- ✅ JavaScript used (TypeScript not allowed)
- ✅ Only Fetch API used (Axios not used)
- ✅ Vite used for project setup
- ✅ Followed provided HTML template (found in `dist` folder)
- ✅ All features implemented based on course learnings and assignment requirements

---

## 🔧 Bonus Implementations

- ✅ Fallback UI when images fail to load
- ✅ Random seed generation (input disabled)
- ✅ Error messages by react toastify for bad responses
- ✅ Prevent duplicate entries in download tracking
- ✅ Fully responsive and accessible UI

---
