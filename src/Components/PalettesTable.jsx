import React from "react";

const palettes = [
  {
    name: "Professional Blues",
    colors: [
      "bg-blue-600",
      "bg-blue-100",
      "bg-gray-100",
      "bg-gray-700",
      "bg-green-500",
    ],
  },
  {
    name: "Bright & Motivational",
    colors: [
      "bg-yellow-400",
      "bg-green-400",
      "bg-white",
      "bg-gray-800",
      "bg-red-400",
    ],
  },
  {
    name: "Calm & Focused",
    colors: [
      "bg-indigo-500",
      "bg-indigo-100",
      "bg-gray-200",
      "bg-gray-900",
      "bg-emerald-500",
    ],
  },
  {
    name: "Teal Serenity",
    colors: [
      "bg-teal-800",
      "bg-teal-500",
      "bg-teal-300",
      "bg-gray-100",
      "bg-emerald-500",
    ],
  },
  {
    name: "Slate Calm",
    colors: [
      "bg-slate-800",
      "bg-slate-500",
      "bg-slate-300",
      "bg-gray-100",
      "bg-sky-400",
    ],
  },
];

// Helper set for dark backgrounds (to set text color accordingly)
const darkBgClasses = new Set([
  "blue-600",
  "gray-700",
  "green-500",
  "yellow-400",
  "green-400",
  "gray-800",
  "red-400",
  "indigo-500",
  "gray-900",
  "emerald-500",
  "teal-800",
  "teal-500",
  "slate-800",
  "slate-500",
]);

const getColorKey = (className) => className.replace("bg-", "");

const isDarkBg = (className) => darkBgClasses.has(getColorKey(className));

function PalettesTable() {
  return (
    <div className="p-8">
      {palettes.map((palette) => (
        <div key={palette.name} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{palette.name}</h2>
          <table className="w-full table-fixed border-collapse border border-gray-300 text-center">
            <thead>
              <tr>
                {palette.colors.map((color, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 p-2 text-sm font-medium"
                  >
                    {getColorKey(color).replace(/-/g, " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {palette.colors.map((color, idx) => (
                  <td
                    key={idx}
                    className={`border border-gray-300 p-6 ${color} ${
                      isDarkBg(color) ? "text-white" : "text-gray-900"
                    } font-semibold`}
                  >
                    {getColorKey(color)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default PalettesTable;
