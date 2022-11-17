import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";

export const Inputs = () => {
  const { setResult } = useContext(ResultsContext);

  const formSchema = yup.object().shape({
    amount: yup.number().required("Valor é obrigatório"),
    installments: yup
      .number()
      .required("Número de parcelas é obrigatório")
      .min(1, "A quantidade mínima de parcelas deve ser 1")
      .max(12, "A quantidade máxima de parcelas deve ser 12")
      .integer("Digite apenas números inteiros"),
    mdr: yup.number().required("Informe o MDR"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setResult(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          error={errors.amount && true}
          label="Informe o valor da venda"
          variant="outlined"
          {...register("amount")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          helperText={
            errors.amount
              ? errors.amount.message ===
                'amount must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                ? "Valor é obrigatório"
                : 'Valor inválido, digite no formato 1234.56'
              : "Digite o valor no formato 1250.30"
          }
        />
        <TextField
          label="Em quantas parcelas?"
          error={errors.installments && true}
          variant="outlined"
          helperText={
            errors.installments
              ? errors.installments.message ===
                'installments must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                ? "Número de parcelas é obrigatório"
                : 'Valor inválido, digite apenas números'
              : "Número máximo de parcelas é 12"
          }
          {...register("installments")}
        />
        <p></p>
        <TextField
          label="Informe o percentual de MDR"
          error={errors.mdr && true}
          variant="outlined"
          {...register("mdr")}
          helperText={
            errors.mdr
              ? errors.mdr.message ===
                'mdr must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                ? "Número de parcelas é obrigatório"
                : 'Valor inválido, digite no formato 4.5'
              : "Apenas números são aceitos"
          }
        />
        <Button type="submit" variant="contained">
          SIMULAR
        </Button>
      </form>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
      </div>
    </>
  );
};
