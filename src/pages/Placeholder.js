export const Placeholder = ({ onDateClick }) => {
  return (
    <>
      <div className="App-main-highlight">Zvedavý, kde budeš sedieť?</div>
      <br />
      <div>
        Zasadací poriadok bude dostupný{" "}
        <span className="App-main-date" onClick={onDateClick}>
          16. 10. 2025
        </span>{" "}
        – deň pred našou svadbou.
      </div>
      <p>
        Nezabudni sa sem vrátiť, aby si zistil, pri kom budeš stolovať a kde ťa
        čaká tvoje miesto pri stole.
      </p>
    </>
  );
};
