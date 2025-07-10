import { useState } from "react";
import "./App.css";
import GradesAvg from "./Components/GradesAvg";

function App() {
  const [AllGrades, setAllGrades] = useState([5, 5, 5, 5]);
  console.log(AllGrades);
  const NumberOfPointsFromSchool =
    (AllGrades[0] + AllGrades[1] + AllGrades[2] + AllGrades[3]) * 2;
  return (
    <>
      <div>
        <h1>Entrance Exam Points Calculator</h1>
        <p>
          Ovaj sajt je namenjen maturantima koji žele da izračunaju ukupan broj
          bodova za upis na fakultete koji imaju matematiku kao prijemni ispit.
          Bilo da konkurišeš na ETF, FON, Matematički fakultet ili slične
          tehničko-prirodne smerove, ovde možeš jednostavno da uneseš svoje
          ocene i rezultate sa prijemnog i odmah vidiš koliko bodova imaš — i da
          li si bliže budžetu ili samofinansiranju. Važno: ovaj sajt je
          napravljen za vežbu i informativne svrhe, pa bodovi koje izračuna ne
          mogu zameniti zvanične rezultate.
        </p>
      </div>
      <div>
        <h2>Unos proseka za sve četiri godine srednje škole</h2>
        <p>Decimale se odvajaju tačkom. (Npr. 4.33)</p>
        <GradesAvg index={0} AllGrades={AllGrades} setAllGrades={setAllGrades}>
          Prva godina:
        </GradesAvg>
        <GradesAvg index={1} AllGrades={AllGrades} setAllGrades={setAllGrades}>
          Druga godina:
        </GradesAvg>
        <GradesAvg index={2} AllGrades={AllGrades} setAllGrades={setAllGrades}>
          Treća godina:
        </GradesAvg>
        <GradesAvg index={3} AllGrades={AllGrades} setAllGrades={setAllGrades}>
          Četvrta godina:
        </GradesAvg>
        <h2>Broj bodova od škole: {NumberOfPointsFromSchool}</h2>
      </div>
    </>
  );
}

export default App;
