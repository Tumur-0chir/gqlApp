import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://api.storepay.global/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
