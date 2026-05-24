import getQueryClient from "@/lib/getQueryClient";
import Home from "./Home";
import { execute } from "@/schema/graphqlQuery";
import GetCountry from "@/schema/queries/getCountry";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["Country Info schema"],
    queryFn: () => execute(GetCountry, { code: "IN" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
