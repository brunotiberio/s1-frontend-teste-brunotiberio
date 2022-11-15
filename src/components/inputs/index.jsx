import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Inputs = () => {
  const formSchema = yup.object().shape({
    amount: yup.string().required("Valor é obrigatório"),
    installments: yup
      .number()
      .required("Número de parcelas é obrigatório")
      .min(1, "A quantidade mínima de parcelas deve ser 1")
      .max(12, "A quantidade máxima de parcelas deve ser 12"),
    mdr: yup.string().required("Informe o MDR"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    //enviar para a api
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          error={errors.amount && true}
          label="Informe o valor da venda"
          variant="outlined"
          {...register("amount")}
          helperText={errors.amount && errors.amount.message}
        />
        <TextField
          label="Em quantas parcelas?"
          error={errors.installments && true}
          variant="outlined"
          helperText={errors.installments ? errors.installments.message : "Máximo de 12 parcelas"}
          {...register("installments")}
        />
        <p></p>
        <TextField
          label="Informe o percentual de MDR"
          error={errors.mdr && true}
          variant="outlined"
          {...register("mdr")}
          helperText={errors.mdr && errors.mdr.message}
        />
        <Button type="submit" variant="contained">
          SIMULAR
        </Button>
      </form>
    </>
  );
};
