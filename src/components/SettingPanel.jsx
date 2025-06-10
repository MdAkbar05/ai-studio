import React, { useEffect, useState } from "react";
import listImageModels from "../utility/listImageModels";

export default function SettingPanel({ onParamsChange }) {
  const [models, setModels] = useState([]);
  const [settings, setSettings] = useState({
    model: "flux",
    seed: Math.floor(Math.random() * 1000000), // Auto-generated seed
    width: 1024,
    height: 1024,
  });
  function fetchModels() {
    listImageModels().then((model) => {
      setModels(model);
    });
  }
  useEffect(() => {
    fetchModels();
    onParamsChange(settings);
  }, [onParamsChange, settings]);

  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Model Selection */}
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Model
          </label>
          <select
            id="model"
            onChange={(e) => {
              setSettings({ ...settings, model: e.target.value });
            }}
            className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            {models?.map((model, index) => (
              <option key={index} className="bg-zinc-900" value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        {/* Seed Input : Auto Generated, readonly for user */}
        <div>
          <label
            htmlFor="seed"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Seed (for reproducible results)
          </label>
          <input
            type="number"
            id="seed"
            disabled={true}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Random"
          />
        </div>
        {/* Width Input */}
        <div>
          <label
            htmlFor="width"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Width
          </label>
          <input
            type="number"
            id="width"
            onChange={(e) => {
              setSettings({ ...settings, width: parseInt(e.target.value) });
            }}
            value={settings.width}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        {/* Height Input */}
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Height
          </label>
          <input
            type="number"
            id="height"
            onChange={(e) => {
              setSettings({ ...settings, height: parseInt(e.target.value) });
            }}
            value={settings.height}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        {/* Aspect Ratio Presets */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Aspect Ratio Presets
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSettings({ ...settings, width: 1024, height: 1024 });
              }}
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
            >
              1:1
            </button>
            <button
              onClick={() => {
                setSettings({ ...settings, width: 1920, height: 1080 });
              }}
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
            >
              16:9
            </button>
            <button
              onClick={() => {
                setSettings({ ...settings, width: 1600, height: 1200 });
              }}
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
            >
              4:3
            </button>
            <button
              onClick={() => {
                setSettings({ ...settings, width: 1536, height: 1024 });
              }}
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
            >
              3:2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
