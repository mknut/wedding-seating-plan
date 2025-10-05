import { Autocomplete, TextField, InputAdornment, Icon } from "@mui/material";
import { useState } from "react";

const tableData = [
  {
    name: "Stôl 1",
    guests: [
      "Zuzana M.",
      "Matej M.",
      "Kristián",
      "Patrik K.",
      "Robo",
      "Veronika",
      "Michal B.",
      "Nikola V.",
      "Dorota S.",
      "Viktória S.",
    ],
  },
  {
    name: "Stôl 2",
    guests: [
      "Katarína",
      "Majo G.",
      "Zuzana G.",
      "Tobias",
      "Timotej",
      "Tatiana",
      "Matej H.",
      "Viktória H.",
      "Martina H.",
      "Matúš H.",
    ],
  },
  {
    name: "Stôl 3",
    guests: [
      "Dávid",
      "Zuzana",
      "Peťo",
      "Monika",
      "Miška",
      "Ľubo",
      "Stela",
      "Paulína",
      "Karolína",
    ],
  },
  {
    name: "Stôl 4",
    guests: [
      "Rudo",
      "Janka",
      "Marika",
      "Peter",
      "dedo Rudo",
      "Peter",
      "Renáta",
    ],
  },
  {
    name: "Stôl 5",
    guests: [
      "Miroslav",
      "Božena",
      "Martina",
      "Alenka",
      "Marián",
      "Jozef",
      "Mária",
      "Metod",
      "Tonka",
      "Sabina",
    ],
  },
  {
    name: "Stôl 6",
    guests: ["Juraj", "Danka", "Miro", "Andrea", "Peťo", "Kika"],
  },
  {
    name: "Stôl 7",
    guests: [
      "Erika",
      "Tomáš",
      "Zuzana Ch.",
      "Matúš Ch.",
      "Renka",
      "Diana",
      "Patrik",
      "Valika",
      "Michal",
      "Lukáš",
    ],
  },
  {
    name: "Stôl 8",
    guests: [
      "babka",
      "babka",
      "Monika.",
      "Fero",
      "Marián.",
      "Valika",
      "Miro",
      "Maruska",
    ],
  },
  {
    name: "Stôl 9",
    guests: [
      "Marek",
      "Kvetka",
      "Marko",
      "Vavro",
      "Peter",
      "Vavro",
      "Biba",
      "Miška",
      "Tomáš",
      "Karinka",
    ],
  },
  {
    name: "Stôl 10",
    guests: [
      "Ferko",
      "Viky a Dorotka",
      "Viktorka",
      "Mária a Sára",
      "Kubo",
      "Hanka",
      "Monika",
      "Ivka",
      "Miro",
    ],
  },
  {
    name: "Stôl 11",
    guests: [
      "Bordnarova teta",
      "Bordnar ujo",
      "Buranovska",
      "Buranovsky",
      "Majo",
      "Adriana",
      "Ondro",
      "Nikola a Ondrik",
      "Valika",
    ],
  },
];

export const TableList = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div>
      <h2>Zasadací poriadok</h2>
      <p>Nájdi svoje miesto</p>
      <Autocomplete
        disablePortal
        id="TableList-autocomplete"
        options={
          true
            ? tableData.flatMap((table) =>
                table.guests.map((guest) => `${guest} | ${table.name}`)
              )
            : []
        }
        sx={{ margin: "0 4rem 16px 4rem" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Meno"
            onClick={() => {
              setInputValue("");
              setSelectedTable(null);
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
        inputValue={inputValue}
        noOptionsText=""
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value) => {
          setSelectedTable(value);
          event.target.blur();
        }}
        size="small"
        freeSolo
      />

      {tableData
        .filter((table) =>
          selectedTable
            ? table.name === selectedTable?.split("|")[1].trim()
            : true
        )
        .map(({ name, guests }) => (
          <div className="TableList-item">
            <h3>{name}</h3>
            <div className="TableList-item-guests">
              {guests.map((guest) => (
                <p
                  className={
                    guest === selectedTable?.split("|")[0].trim() &&
                    "TableList-item-guest-highlight"
                  }
                >
                  {guest}
                </p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
