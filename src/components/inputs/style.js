import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  .MuiFormHelperText-root {
    margin-bottom: 40px;
    font-size: 20px;
  }

  .MuiFormLabel-root {
    font-size: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 30%;

  .MuiButtonBase-root {
    height: 50px;
    width: 50%;
    margin-left: 20%;
    font-size: 20px;
  }
`;
