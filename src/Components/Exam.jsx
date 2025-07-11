import { useState } from "react";
import { getSystem } from "./GradingSystem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Exam() {
  const navigate = useNavigate();
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
    const storage = { system: system, points: totalScore.toFixed(2) };
    localStorage.setItem("Exam Points", JSON.stringify(storage));
    GoToSummary();
  }
  function GoToSummary() {
    navigate("/summary");
  }
  return (
    <div className="min-h-screen bg-slate-800 text-white px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Sistem bodovanja
      </h1>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="system-select" className="font-medium">
          Izaberi sistem:
        </label>
        <select
          id="system-select"
          value={system}
          onChange={(e) => {
            setSystem(e.target.value);
            setAnswers(Array(20).fill(null));
          }}
          className="bg-slate-700 text-white px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="ETF">ETF</option>
          <option value="FON">FON</option>
        </select>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {system} Sistem bodovanja
      </h2>

      <div className="rounded-lg overflow-x-auto">
        <table className="min-w-full w-full border-collapse border border-gray-600 text-sm sm:text-base">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-gray-600 p-3 text-left">Zadatak</th>
              <th className="border border-gray-600 p-3 text-center">Tačno</th>
              <th className="border border-gray-600 p-3 text-center">
                Netačno
              </th>
              <th className="border border-gray-600 p-3 text-center">
                Ne znam
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ id, name }, i) => (
              <tr key={id} className="hover:bg-slate-700">
                <td className="border border-gray-600 p-3">
                  {`${name} (${tasks[i].points} poena)`}
                </td>
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
      </div>

      <div className="mt-6 text-lg sm:text-xl font-semibold flex items-center justify-center">
        <Button onClick={calculateScore} hoverBgColor="bg-slate-700">
          Prikaži ukupan broj bodova
        </Button>
      </div>
    </div>
  );
}

export default Exam;
