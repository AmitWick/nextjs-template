import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

import type { CodegenConfig } from "@graphql-codegen/cli";

console.log(process.env.GRAPHQL_ENDPOINT);

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ["schema/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
