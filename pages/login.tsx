import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  TextField,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: 200
    }
  })
);

const Login = (): JSX.Element => {
  const classes = useStyles();
  const [values, setValues] = useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            className={clsx(classes.margin, classes.textField)}
            label="ID"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            required
            id="standard-required"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid container xs={12} spacing={2}>
          <Grid item>
            <Button variant="contained">회원가입</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
