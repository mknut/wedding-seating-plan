import { Autocomplete, TextField, InputAdornment, Icon } from "@mui/material";
import { useState } from "react";

const tableData = [
  {
    name: "Stôl 1",
    guests: [
      "Kristián K.",
      "Matej M.",
      "Zuzana M.",
      "Michal B.",
      "Dorota S.",
      "Viktória S.",
    ],
  },
  {
    name: "Stôl 2",
    guests: [
      "Marián S.",
      "Valéria S.",
      "Mária M.",
      "Miroslav M.",
      "Monika N.",
      "Fero N.",
      "Marek R.",
      "Kvetka R.",
      "Peter R.",
      "Vavrinec R.",
    ],
  },
  {
    name: "Stôl 3",
    guests: [
      "Erika G.",
      "Tomáš G.",
      "Michaela R.",
      "Tomáš U.",
      "Karin R.",
      "Marko R.",
      "Vavrinec R.",
      "Bibiana R.",
    ],
  },
  {
    name: "Stôl 4",
    guests: [
      "Monika N.",
      "Fero N.",
      "Viktória N.",
      "Mária H.",
      "Jakub H.",
      "Marián S.",
      "Adriana S.",
      "Ondrej S.",
      "Nikola S.",
      "Valéria K.",
      "Tibor K.",
      "Miroslav M.",
      "Ivana M.",
    ],
  },
  {
    name: "Stôl 5",
    guests: [
      "Zuzana K.",
      "Zuzana G.",
      "Marián G.",
      "Katarína",
      "Timotej V.",
      "Tatiana B.",
      "Matej H.",
      "Viktória H.",
      "Martina H.",
      "Matúš H.",
    ],
  },
  {
    name: "Stôl 6",
    guests: [
      "Peter Š.",
      "Monika Š.",
      "Michaela K.",
      "Ľubomír K.",
      "Stela K.",
      "Rudolf K.",
      "Paulína K.",
      "Karolína K.",
    ],
  },
  {
    name: "Stôl 7",
    guests: ["Rudolf K.", "Jana K.", "Mária Š.", "Peter Š.", "Rufolf K."],
  },
  {
    name: "Stôl 8",
    guests: [
      "Martina G.",
      "Peter",
      "Alena G.",
      "Marián G.",
      "Jozef V.",
      "Mária V.",
      "Metod H.",
      "Antónia H.",
      "Sabina V.",
    ],
  },
  {
    name: "Stôl 9",
    guests: [
      "Juraj Š.",
      "Dana Š.",
      "Miroslav M.",
      "Andrea M.",
      "Peter O.",
      "Kristína O.",
    ],
  },
];

export const TableList = () => {
  const [inputValue, setInputValue] = useState("");
  // const [open, setOpen] = useState(false);
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
              // setOpen(false);
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
          // setOpen(!!newInputValue);
        }}
        onChange={(event, value) => {
          setSelectedTable(value);
          // setOpen(false);
        }}
        // open={open}
        // onOpen={() => {
        //   if (inputValue) setOpen(true);
        // }}
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
