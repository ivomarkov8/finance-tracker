import { useState } from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  styled,
} from "@mui/material";

const PageContainer = styled(Box)(() => ({
  textAlign: "center",
  padding: "50px",
}));

function App() {
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
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
    </PageContainer>
  );
}

export default App;
