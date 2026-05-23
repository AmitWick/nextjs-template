"use client";

import { execute } from "@/schema/graphqlQuery";
import getCountry from "@/schema/queries/getCountry";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["dfssds", "IN"],
    queryFn: () => execute(getCountry, { code: "IN" }),
    staleTime: Infinity,
  });

  return (
    <div>
      Home
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Home;
