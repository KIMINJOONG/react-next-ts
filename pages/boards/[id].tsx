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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO0vyXejYXLyLixtnMLybTiXXd1pP30ktKatHpWUodVLo4BMPK"
  ]
};

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO0vyXejYXLyLixtnMLybTiXXd1pP30ktKatHpWUodVLo4BMPK" />
        </Grid>
        <Grid item xs={12}>
          <h1>{dummy.title}</h1>
          <Typography color={"textPrimary"}>
            {dummy.competitionStartDate} • {dummy.country}, {dummy.place} •{" "}
            {dummy.category} •{dummy.genre}
          </Typography>
          <Typography color={"textPrimary"}>{dummy.content}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
