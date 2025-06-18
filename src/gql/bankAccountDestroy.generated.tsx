import type * as Types from '../types/graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DestroyBankAccountMutationVariables = Types.Exact<{
  input: Types.BankAccountDestroyInput;
}>;


export type DestroyBankAccountMutation = { __typename?: 'Mutation', bankAccountDestroy?: boolean };


export const DestroyBankAccountDocument = gql`
    mutation destroyBankAccount($input: bankAccountDestroyInput!) {
  bankAccountDestroy(input: $input)
}
    `;
export type DestroyBankAccountMutationFn = Apollo.MutationFunction<DestroyBankAccountMutation, DestroyBankAccountMutationVariables>;

/**
 * __useDestroyBankAccountMutation__
 *
 * To run a mutation, you first call `useDestroyBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyBankAccountMutation, { data, loading, error }] = useDestroyBankAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDestroyBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<DestroyBankAccountMutation, DestroyBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyBankAccountMutation, DestroyBankAccountMutationVariables>(DestroyBankAccountDocument, options);
      }
export type DestroyBankAccountMutationHookResult = ReturnType<typeof useDestroyBankAccountMutation>;
export type DestroyBankAccountMutationResult = Apollo.MutationResult<DestroyBankAccountMutation>;
export type DestroyBankAccountMutationOptions = Apollo.BaseMutationOptions<DestroyBankAccountMutation, DestroyBankAccountMutationVariables>;