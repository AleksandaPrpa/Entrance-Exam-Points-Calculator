function GradesAvg({ index, AllGrades, setAllGrades, children, value }) {
  function handleChange(e) {
    const raw = e.target.value;
    if (raw === "") {
      setAllGrades({
        ...AllGrades,
        ...(index === 0 && { firstYear: "" }),
        ...(index === 1 && { secondYear: "" }),
        ...(index === 2 && { thirdYear: "" }),
        ...(index === 3 && { fourthYear: "" }),
      });
      return;
    }
    const input = Number(raw);
    if (input < 1 || input > 5) return;
    if (index === 0)
      setAllGrades({
        firstYear: input,
        secondYear: AllGrades.secondYear,
        thirdYear: AllGrades.thirdYear,
        fourthYear: AllGrades.fourthYear,
      });
    else if (index === 1)
      setAllGrades({
        firstYear: AllGrades.firstYear,
        secondYear: input,
        thirdYear: AllGrades.thirdYear,
        fourthYear: AllGrades.fourthYear,
      });
    else if (index === 2)
      setAllGrades({
        firstYear: AllGrades.firstYear,
        secondYear: AllGrades.secondYear,
        thirdYear: input,
        fourthYear: AllGrades.fourthYear,
      });
    else if (index === 3)
      setAllGrades({
        firstYear: AllGrades.firstYear,
        secondYear: AllGrades.secondYear,
        thirdYear: AllGrades.thirdYear,
        fourthYear: input,
      });
  }
  return (
    <div className="flex flex-col gap-2 bg-slate-600 p-4 rounded-md shadow-sm">
      <label className="text-sm font-medium text-white">{children}</label>
      <input
        type="number"
        min={1}
        max={5}
        step={0.01}
        value={value}
        onChange={handleChange}
        className="p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
      />
    </div>
  );
}

export default GradesAvg;
