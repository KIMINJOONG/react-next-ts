import { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const AppLayout = ({ children }: IProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid item xs={12}>
        <span>헤더</span>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <span>푸터</span>
      </Grid>
    </Container>
  );
};

export default AppLayout;
