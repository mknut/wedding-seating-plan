export const Placeholder = ({ onDateClick }) => {
  return (
    <>
      <div className="App-main-section">
        <div className="App-main-highlight">Zvedavý, kde budeš sedieť?</div>
        <br />
        <div>
          <div>
            Zasadací poriadok bude dostupný{" "}
            <span className="App-main-date" onClick={onDateClick}>
              16. 10. 2025
            </span>{" "}
            – deň pred našou svadbou.
          </div>
          <p>
            Nezabudni sa sem vrátiť, aby si zistil, pri kom budeš stolovať a kde
            ťa čaká tvoje miesto pri stole.
          </p>
        </div>

        <div className="App-main-schedule">
          <div className="App-main-schedule-title">Harmonogram </div>
          <p>Piatok, 17.10.2025</p>
          <hr />
          <p className="App-main-schedule-arrow">&#9207;</p>
        </div>
      </div>
      <div className="App-main-section">
        <div className="App-main-highlight">Svadobný obrad &#9962;</div>
        <p>&#128337; 14:15</p>
        <hr />
        <p>
          Svoje áno si povieme v Kostole sv. Gorazda a spoločníkov v Košiciach{" "}
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.429127739088!2d21.230017076651283!3d48.713505410891486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee03f6406b817%3A0x9709fd04e3537b5c!2sChurch%20of%20st.Gorazd%20and%20his%20associates!5e1!3m2!1sen!2sde!4v1753391148468!5m2!1sen!2sde"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kostol sv. Gorazda a spoločníkov"
        />
      </div>
      <div className="App-main-section">
        <div className="App-main-highlight">Svadobná hostina &#129346;</div>
        <p>&#128339; 16:00</p>
        <hr />
        <p>Náš deň oslávime v Sála Bačíkova</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.4485056904327!2d21.249702776651823!3d48.726324809990984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee18e01a24097%3A0xdc8688361a981c68!2zU8OhbGEgQmHEjcOta292YQ!5e1!3m2!1sen!2sde!4v1753390368704!5m2!1sen!2sde"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sála Bačíkova"
        />
      </div>
    </>
  );
};
