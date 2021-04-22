import { useEffect } from "react";
import Header from "../components/Header";
import { GetServerSideProps } from "next";

type Episode = {
  id: string;
  title: string;
  members: string;
};

type HomeProps = {
  episodes: Array<Episode>;
};

export default function Home(props: HomeProps) {
  return <h1> Index</h1>;
}

export const getStaticProps: GetServerSideProps = async () => {
  const response = await fetch(
    "http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc"
  );

  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 68 * 68 * 8,
  };
};
