import { FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl margin="normal" fullWidth>
        <TextField {...register("email")} label={"E-mail"} />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          {...register("password")}
          type="password"
          label={"Password"}
        />
      </FormControl>
    </form>
  );
}
