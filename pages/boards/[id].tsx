import { useRouter } from "next/router";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography
} from "@material-ui/core";

const dummy = {
  idx: 1,
  title: "제목",
  content: "난짜라 배틀입니다.",
  category: 1,
  genre: 1,
  competitionStartDate: "2020-02-15",
  country: "한국",
  place: "서울특별시 갱냄",
  images: [
    "http://www.bodonews.com/imgdata/bodonews_com/201605/2016052054348111.png"
  ]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);
const Board = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h1>{dummy.title}</h1>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {dummy.content}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
