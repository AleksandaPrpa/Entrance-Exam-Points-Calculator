import { useState } from "react";
import { getSystem } from "./GradingSystem";

function Exam() {
  const [answers, setAnswers] = useState(Array(20).fill(null));

  const [system, setSystem] = useState("ETF");
  const tasks = system === "ETF" ? getSystem("ETF") : getSystem("FON");
  function handleChange(taskIndex, value) {
    const newAnswers = [...answers];
    newAnswers[taskIndex] = value;
    setAnswers(newAnswers);
  }

  function calculateScore() {
    let totalScore = 0;

    answers.forEach((answer, i) => {
      const task = tasks[i];
      if (answer === "correct") {
        totalScore += task.points;
      } else if (answer === "incorrect") {
        totalScore += task.negativePoints;
      }
    });

    return totalScore.toFixed(2);
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sistem bodovanja</h1>

      <div className="mb-6">
        <label htmlFor="system-select" className="mr-4 font-medium">
          Izaberi sistem:
        </label>
        <select
          id="system-select"
          value={system}
          onChange={(e) => {
            setSystem(e.target.value);
            setAnswers(Array(20).fill(null));
          }}
          className="bg-slate-700 text-white px-3 py-1 rounded-md cursor-pointer"
        >
          <option value="ETF">ETF</option>
          <option value="FON">FON</option>
        </select>
      </div>
      <h1 className="text-3xl font-bold mb-6">{system} Sistem bodovanja</h1>

      <table className="w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700">
            <th className="border border-gray-600 p-3 text-left">Zadatak</th>
            <th className="border border-gray-600 p-3 text-center">Tačno</th>
            <th className="border border-gray-600 p-3 text-center">Netačno</th>
            <th className="border border-gray-600 p-3 text-center">Ne znam</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ id, name }, i) => (
            <tr key={id} className="hover:bg-slate-700">
              <td className="border border-gray-600 p-3">{`${name} (${tasks[i].points} poena)`}</td>
              <td className="border border-gray-600 p-3 text-center">
                <input
                  type="radio"
                  name={`answer-${id}`}
                  checked={answers[i] === "correct"}
                  onChange={() => handleChange(i, "correct")}
                  className="cursor-pointer"
                />
              </td>
              <td className="border border-gray-600 p-3 text-center">
                <input
                  type="radio"
                  name={`answer-${id}`}
                  checked={answers[i] === "incorrect"}
                  onChange={() => handleChange(i, "incorrect")}
                  className="cursor-pointer"
                />
              </td>
              <td className="border border-gray-600 p-3 text-center">
                <input
                  type="radio"
                  name={`answer-${id}`}
                  checked={answers[i] === ""}
                  onChange={() => handleChange(i, "")}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-center text-xl font-semibold">
        Ukupno poena: <span className="text-sky-400">{calculateScore()}</span>
      </div>
    </div>
  );
}

export default Exam;
