import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GradesAvg from "./GradesAvg";
import Button from "./Button";

function Home() {
  const navigate = useNavigate();
  const [AllGrades, setAllGrades] = useState(
    localStorage.getItem("AllGrades")
      ? JSON.parse(localStorage.getItem("AllGrades"))
      : { firstYear: 5, secondYear: 5, thirdYear: 5, fourthYear: 5 }
  );
  const NumberOfPointsFromSchool =
    Math.round(
      (AllGrades.firstYear +
        AllGrades.secondYear +
        AllGrades.thirdYear +
        AllGrades.fourthYear) *
        2 *
        100
    ) / 100;

  function rememberGrades() {
    localStorage.setItem("AllGrades", JSON.stringify(AllGrades));
  }
  function goToExam() {
    navigate("/exam");
  }
  return (
    <div className="min-h-screen bg-slate-800 text-white px-4 py-6 md:px-12 lg:px-24">
      <header className="mb-8">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-4">
          Entrance Exam Points Calculator
        </h1>
        <p className="text-gray-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Ovaj sajt je namenjen maturantima koji žele da izračunaju ukupan broj
          bodova za upis na fakultete koji imaju matematiku kao prijemni ispit.
          Bilo da konkurišeš na ETF, FON, Matematički fakultet ili slične
          tehničko-prirodne smerove, ovde možeš jednostavno da uneseš svoje
          ocene i rezultate sa prijemnog i odmah vidiš koliko bodova imaš — i da
          li si bliže budžetu ili samofinansiranju. <br /> <br />
          <span className="text-sky-400 font-medium">
            Važno: ovaj sajt je napravljen za vežbu i informativne svrhe, pa
            bodovi koje izračuna ne mogu zameniti zvanične rezultate.
          </span>
        </p>
      </header>

      <section className="bg-slate-500 rounded-xl shadow-lg p-6 md:p-8 space-y-6 max-w-3xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Unos proseka za sve četiri godine srednje škole
          </h2>
          <p className="text-slate-300 text-sm">
            Decimale se odvajaju tačkom (npr. 4.33)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GradesAvg
            index={0}
            value={AllGrades.firstYear}
            AllGrades={AllGrades}
            setAllGrades={setAllGrades}
          >
            Prva godina:
          </GradesAvg>
          <GradesAvg
            index={1}
            value={AllGrades.secondYear}
            AllGrades={AllGrades}
            setAllGrades={setAllGrades}
          >
            Druga godina:
          </GradesAvg>
          <GradesAvg
            index={2}
            value={AllGrades.thirdYear}
            AllGrades={AllGrades}
            setAllGrades={setAllGrades}
          >
            Treća godina:
          </GradesAvg>
          <GradesAvg
            index={3}
            value={AllGrades.fourthYear}
            AllGrades={AllGrades}
            setAllGrades={setAllGrades}
          >
            Četvrta godina:
          </GradesAvg>
        </div>

        <div className="text-lg font-medium text-center flex flex-col gap-3 items-center mt-6">
          <div>
            Broj bodova od škole:{" "}
            <span className="text-sky-400 font-bold">
              {AllGrades.firstYear !== "" &&
                AllGrades.secondYear !== "" &&
                AllGrades.thirdYear !== "" &&
                AllGrades.fourthYear !== "" &&
                NumberOfPointsFromSchool}
            </span>
          </div>
          <Button onClick={rememberGrades} width="w-48">
            Zapamti proseke
          </Button>
          <Button onClick={goToExam} width="w-48">
            Radi test
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
