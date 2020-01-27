import { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: "50px"
    },
    content: {
      height: "700px"
    },
    loginJoin: {
      textAlign: "center"
    },
    footer: {
      height: "80px"
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
      <Grid container xs={12} className={classes.header}>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Link href="/">
                <a>홈</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/join">
                <a>회원가입</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <span>푸터</span>
      </Grid>
    </Container>
  );
};

export default AppLayout;
