import axios from "axios";
import type { TypedDocumentString } from "@/graphql/graphql";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  try {
    const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

    // const response = await fetch(endpoint, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/graphql-response+json",
    //   },
    //   body: JSON.stringify({
    //     query,
    //     variables,
    //   }),
    // });

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    // return response.json() as TResult;

    const response = await axios.post(
      endpoint,
      { query, variables },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/graphql-response+json",
        },
      },
    );

    return response.data?.data as TResult;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
