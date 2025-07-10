function GradesAvg({ index, AllGrades, setAllGrades, children }) {
  function handleChange(e) {
    if (index === 0)
      setAllGrades([
        Number(e.target.value),
        AllGrades[1],
        AllGrades[2],
        AllGrades[3],
      ]);
    else if (index === 1)
      setAllGrades([
        AllGrades[0],
        Number(e.target.value),
        AllGrades[2],
        AllGrades[3],
      ]);
    else if (index === 2)
      setAllGrades([
        AllGrades[0],
        AllGrades[1],
        Number(e.target.value),
        AllGrades[3],
      ]);
    else if (index === 3)
      setAllGrades([
        AllGrades[0],
        AllGrades[1],
        AllGrades[2],
        Number(e.target.value),
      ]);
  }
  return (
    <div>
      <h3>{children}</h3>
      <input
        type="number"
        min={1}
        max={5}
        value={AllGrades[index]}
        onChange={handleChange}
      />
    </div>
  );
}

export default GradesAvg;
