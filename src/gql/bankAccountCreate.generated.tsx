import type * as Types from '../types/graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BankAccountCreateMutationVariables = Types.Exact<{
  input: Types.BankAccountCreateInput;
}>;


export type BankAccountCreateMutation = { __typename?: 'Mutation', bankAccountCreate?: { __typename?: 'Account', id: string, name: string, number: string, bank: { __typename?: 'Bank', id: string, name: string } } };


export const BankAccountCreateDocument = gql`
    mutation BankAccountCreate($input: bankAccountCreateInput!) {
  bankAccountCreate(input: $input) {
    id
    name
    number
    bank {
      id
      name
    }
  }
}
    `;
export type BankAccountCreateMutationFn = Apollo.MutationFunction<BankAccountCreateMutation, BankAccountCreateMutationVariables>;

/**
 * __useBankAccountCreateMutation__
 *
 * To run a mutation, you first call `useBankAccountCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBankAccountCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bankAccountCreateMutation, { data, loading, error }] = useBankAccountCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBankAccountCreateMutation(baseOptions?: Apollo.MutationHookOptions<BankAccountCreateMutation, BankAccountCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BankAccountCreateMutation, BankAccountCreateMutationVariables>(BankAccountCreateDocument, options);
      }
export type BankAccountCreateMutationHookResult = ReturnType<typeof useBankAccountCreateMutation>;
export type BankAccountCreateMutationResult = Apollo.MutationResult<BankAccountCreateMutation>;
export type BankAccountCreateMutationOptions = Apollo.BaseMutationOptions<BankAccountCreateMutation, BankAccountCreateMutationVariables>;