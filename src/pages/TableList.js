const tableData = [
  { name: "Stôl 1", guests: ["Ján", "Mária", "Peter"] },
  { name: "Stôl 2", guests: ["Ján", "Mária", "Peter", "Milan"] },
  { name: "Stôl 4", guests: ["Ján", "Mária", "Peter"] },
  { name: "Stôl 3", guests: ["Ján", "Mária"] },
  { name: "Stôl 5", guests: ["Ján", "Mária", "Peter"] },
  { name: "Stôl 6", guests: ["Ján", "Mária", "Peter"] },
  { name: "Stôl 7", guests: ["Ján", "Mária", "Peter"] },
  { name: "Stôl 8", guests: ["Ján", "Mária", "Peter"] },
];

export const TableList = () => {
  return (
    <div>
      <h1>Zasadací poriadok</h1>
      <div className="TableList-container">
        {tableData.map(({ name, guests }) => (
          <div className="TableList-item">
            <h2>{name}</h2>
            {guests.map((guest) => (
              <p>{guest}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
