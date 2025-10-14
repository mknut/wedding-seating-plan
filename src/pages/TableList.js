import { Autocomplete, TextField, InputAdornment, Icon } from "@mui/material";
import { useState } from "react";

const tableData = [
  {
    name: "Stôl 1",
    guests: [
      "Babka Jolanka",
      "Krstná",
      "Krstný",
      "Marián",
      "Maruška",
      "Renáta",
      "Vlado",
      "Jano",
      "Marta",
    ],
  },
  {
    name: "Stôl 2",
    guests: [
      "Matúš",
      "Renátka",
      "Zuzka",
      "Dia",
      "Patrik",
      "Erika",
      "Tomáš",
      "Valika",
      "Michal",
      "Lukáš",
    ],
  },
  {
    name: "Stôl 3",
    guests: [
      "Babka Dorotka",
      "Marek",
      "Kvetka",
      "Marko",
      "Karinka",
      "Miška",
      "Tomáš",
      "Vavrík",
      "Bibka",
      "Vavro",
    ],
  },
  {
    name: "Stôl 4",
    guests: [
      "Majo",
      "Adriána",
      "Ondro",
      "Nikoleta",
      "Valika",
      "Monika",
      "Ivka",
      "Miro",
    ],
  },
  {
    name: "Stôl 5",
    guests: ["Ferko", "Viky", "Viktorka", "Mária", "Jakub", "Hanka", "Sárka"],
  },
  {
    name: "Stôl 6",
    guests: [
      "Babka Sabina",
      "Martina",
      "Alenka",
      "Marián",
      "Jožo",
      "Maja",
      "Metod",
      "Tonka",
      "Božena",
      "Miro",
    ],
  },
  {
    name: "Stôl 7",
    guests: [
      "Zuzka",
      "Dávid",
      "Miška",
      "Ľubo",
      "Stelka",
      "Peťo",
      "Monika",
      "Paulína",
      "Aleš",
      "Karolína",
    ],
  },
  {
    name: "Stôl 8",
    guests: ["Dedo Rudo", "Rudo", "Janka", "Marika", "Peťo", "Peter", "Renáta"],
  },
  {
    name: "Stôl 9",
    guests: [
      "Majo",
      "Katka",
      "Tatiana",
      "Timotej",
      "Tobias",
      "Zuzka",
      "Martinka",
      "Matúš",
      "Matej",
      "Viktória",
    ],
  },

  {
    name: "Stôl 10",
    guests: ["Peťo", "Kika", "Ďuro", "Danka", "Miro", "Andrea"],
  },
  {
    name: "Stôl 11",
    guests: [
      "Zuzka",
      "Matej",
      "Kristián",
      "Paťo",
      "Robo",
      "Veronika",
      "Mišo",
      "Nika",
      "Dorka",
      "Viky",
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
