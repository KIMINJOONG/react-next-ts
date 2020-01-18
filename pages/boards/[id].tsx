import Router, { useRouter } from "next/router";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>hi {id}</h1>;
};

export default Board;
