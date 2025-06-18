import * as dotenv from 'dotenv';
import { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config();

const GQL_DOCUMENTS = 'src/gql/**/*.gql';
const BASE_TYPES_PATH = 'types/graphql.d.ts';

const config: CodegenConfig = {
  schema: 'schema.graphql', // эсвэл endpoint + auth-оор шууд татах бол энд сольж болно
  documents: GQL_DOCUMENTS,
  generates: {
    [BASE_TYPES_PATH]: {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T', // optional typing T | null
      },
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: BASE_TYPES_PATH,
        extension: '.generated.tsx',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        preResolveTypes: true,
        useTypeImports: true,
        allowEnumStringTypes: true,
        flattenGeneratedTypes: false,
        flattenGeneratedTypesIncludeFragments: false,
        disableDescriptions: true,
        maybeValue: 'T',
      },
    },
  },
  overwrite: true,
  ignoreNoDocuments: true,
};

export default config;
