import { NextPage } from "next";
import Link from "next/link";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Router from "next/router";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      height: 140,
      width: 100
    },
    gridList: {
      width: 500,
      height: 450
    },
    content: {
      "&:hover": {
        cursor: "pointer",
        background: "#f00"
      }
    }
  })
);
const tileData: any = [
  {
    idx: 1,
    img:
      "http://www.bodonews.com/imgdata/bodonews_com/201605/2016052054348111.png",
    title: "제목1",
    author: "작성자1"
  },
  {
    idx: 2,
    img: "https://t1.daumcdn.net/cfile/tistory/267E964453BA68932B",
    title: "제목2",
    author: "작성자2"
  },
  {
    idx: 3,
    img:
      "http://210.116.77.61/wp-content/uploads/2018/09/%EA%B0%95%EB%82%A8%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C_%EB%AE%A4%EC%A7%81%EB%B9%84%EB%B3%B4%EC%9D%B4-%EB%A9%94%EC%9D%B8%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%88%98%EC%A0%953-1.jpg",
    title: "제목3",
    author: "작성자3"
  }
];
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">이벤트 리스트</ListSubheader>
        </GridListTile>
        {tileData.map((tile: any) => (
          <GridListTile
            className={classes.content}
            key={tile.img}
            onClick={() => Router.push(`/boards/${tile.idx}`)}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
