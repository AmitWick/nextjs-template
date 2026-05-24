"use client";

import { Button } from "@/components/ui/button";
import { execute } from "@/schema/graphqlQuery";
import {
  counterInitialState,
  decrement,
  increment,
} from "@/redux/slice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import GetCountry from "@/schema/queries/getCountry";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { value } = useAppSelector(counterInitialState);
  const dispatch = useAppDispatch();

  const { data } = useQuery({
    queryKey: ["Country Info schema"],
    queryFn: () => {
      console.log("CLIENT FETCH");
      return execute(GetCountry, { code: "IN" });
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const { user } = useUser();

  return (
    <main>
      <h1 className="text-2xl font-bold">Hello, Next.js!</h1>
      <article>
        <p>{value}</p>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </article>
      <p>{JSON.stringify(user?.emailAddresses)}</p>
      <br></br>
      <br></br>
      <br></br>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
};

export default Home;
