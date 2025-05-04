import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const tableData = [
  { name: "Stôl 1", guests: ["Erika G.", "Tomáš G.", "Mel Gibson"] },
  { name: "Stôl 2", guests: ["babka Jolan", "babka Dorka"] },
  { name: "Stôl 3", guests: ["Marek R.", "Kvetka R."] },
];

export const TableList = () => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div>
      <p>Nájdi svoje miesto</p>
      <Autocomplete
        disablePortal
        id="TableList-autocomplete"
        options={
          inputValue
            ? tableData.flatMap((table) =>
                table.guests.map((guest) => `${guest} | ${table.name}`)
              )
            : []
        }
        sx={{ margin: "0 4rem 16px 4rem" }}
        renderInput={(params) => (
          <TextField
            {...params}
            onClick={() => {
              setOpen(false);
              setInputValue("");
              setSelectedTable(null);
            }}
          />
        )}
        inputValue={inputValue}
        noOptionsText=""
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setOpen(!!newInputValue);
        }}
        onChange={(event, value) => {
          setSelectedTable(value);
          setOpen(false);
        }}
        open={open}
        onOpen={() => {
          if (inputValue) setOpen(true);
        }}
      />

      <div className="TableList-container">
        {tableData
          .filter((table) => table.name === selectedTable?.split("|")[1].trim())
          .map(({ name, guests }) => (
            <div className="TableList-item">
              <h3>{name}</h3>
              {guests.map((guest) => (
                <p>{guest}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
