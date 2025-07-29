import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Summary() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [system, setSystem] = useState("");
  const [points, setPoints] = useState(0);
  const [schoolPoints, setSchoolPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const examData = JSON.parse(localStorage.getItem("Exam Points"));
    const allGrades = JSON.parse(localStorage.getItem("AllGrades"));

    if (!examData || !allGrades) {
      setMessage("Nema podataka o bodovima.");
      return;
    }

    const prijemni = Number(examData.points);
    const skola =
      (allGrades.firstYear +
        allGrades.secondYear +
        allGrades.thirdYear +
        allGrades.fourthYear) *
      2;

    const ukupno = (prijemni * 60) / 100 + skola;

    setSystem(examData.system);
    setPoints(prijemni);
    setSchoolPoints(skola);
    setTotalPoints(ukupno);

    if (examData.system === "ETF") {
      if (ukupno < 67.75) {
        setMessage("Nisi upisao");
      } else if (ukupno < 73.35) {
        setMessage("Upao si na samofinansirajuci ER program");
      } else if (ukupno < 75.18) {
        setMessage("Upao si na samofinansirajuci ER i SI program");
      } else if (ukupno < 97.22) {
        setMessage("Upao si na budžet ER i samofinansirajuci SI program");
      } else {
        setMessage("Upao si na budžet ER i SI program");
      }
    } else if (examData.system === "FON") {
      if (ukupno < 30) {
        setMessage("Nisi upisao");
      } else if (ukupno < 51) {
        setMessage("Upao si kao samofinansirajuci student");
      } else {
        setMessage("Upao si na budžet");
      }
    } else if (examData.system === "Građevinski") {
      if (ukupno < 40) {
        setMessage("Nisi upisao");
      } else if (ukupno < 62) {
        setMessage("Upao si kao samofinansirajuci student");
      } else {
        setMessage("Upao si na budžet");
      }
    } else if (examData.system === "Matematički") {
      if (ukupno < 40) {
        setMessage("Nisi upisao");
      } else if (ukupno < 65) {
        setMessage("Upao si kao samofinansirajuci student");
      } else {
        setMessage("Upao si na budžet");
      }
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-4 py-10 text-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl font-bold text-sky-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.h1>

      <motion.div
        className="bg-slate-800 rounded-lg p-6 shadow-lg w-full max-w-md text-left text-base sm:text-lg"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>
          <span className="font-semibold text-white">Sistem:</span>{" "}
          <span className="text-sky-300">{system}</span>
        </p>
        <p>
          <span className="font-semibold text-white">Bodovi sa prijemnog:</span>{" "}
          <span className="text-sky-300">{points}/100</span>
        </p>
        <p>
          <span className="font-semibold text-white">Bodovi iz škole:</span>{" "}
          <span className="text-sky-300">{schoolPoints.toFixed(2)}</span>
        </p>
        <p className="mt-2 border-t border-slate-600 pt-2">
          <span className="font-semibold text-white">Ukupno bodova:</span>{" "}
          <span className="text-green-400 text-xl font-bold">
            {totalPoints.toFixed(2)}
          </span>
        </p>
      </motion.div>

      <Button
        onClick={() => navigate("/")}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        Go Home
      </Button>
    </motion.div>
  );
}

export default Summary;
