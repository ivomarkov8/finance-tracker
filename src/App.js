import { useState } from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  FormControlLabel,
  Switch,
  styled,
} from "@mui/material";

const PageContainer = styled(Box)(() => ({
  textAlign: "center",
  padding: "50px",
}));

function App() {
  const [isIncome, setIsIncome] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [allTransactions, setAllTransactions] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
      const newTransaction = {
        amount: inputValue,
        isIncome,
      };
      setAllTransactions((prevTransactions) => [
        newTransaction,
        ...prevTransactions,
      ]);
      setInputValue("");
    }
  };

  return (
    <PageContainer>
      <Typography variant="h3">Finance Tracker</Typography>
      <Typography
        variant="h5"
        sx={{
          margin: "30px 0",
        }}
      >
        Balance: 4567,00 BGN
      </Typography>
      <FormControlLabel
        control={
          <Switch checked={isIncome} onChange={() => setIsIncome(!isIncome)} />
        }
        label="Select transaction type"
      />
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">{`Add ${
          isIncome ? "income" : "expense"
        }`}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label={`Add ${isIncome ? "income" : "expense"}`}
          color={isIncome ? "success" : "error"}
          type="number"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
      </FormControl>
      {allTransactions.length &&
        allTransactions.map((el, i) => (
          <Typography key={`${i}-${el.amount}`}>
            {el.isIncome ? "+" : "-"} {el.amount}
          </Typography>
        ))}
    </PageContainer>
  );
}

export default App;
