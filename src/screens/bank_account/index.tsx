import { Alert, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext.tsx';
import { useMeQuery } from '../../gql/me.generated.tsx';
import CustomHeader from '../../components/Header.tsx';
import Navigator from '../../navigation/RootNavigator.ts'
import { useMessage } from '../../contexts/MessageContext.tsx';
import { useDestroyBankAccountMutation } from '../../gql/bankAccountDestroy.generated.tsx';

const BankAccount = () => {
      const { logout } = useAuth();
      const { data, error, refetch } = useMeQuery();
      const { showSuccess, showError } = useMessage();
      const [destroyBankAccount] = useDestroyBankAccountMutation();

      console.log(data, 'data');

      const onDelete = (id: string) => {
        Alert.alert('Анхаар!', 'Та энэ дансыг устгахдаа итгэлтэй байна уу?', [
          { text: 'Цуцлах', style: 'cancel' },
          {
            text: 'Устгах',
            style: 'destructive',
            onPress: async () => {
              try {
                await destroyBankAccount({
                  variables: {
                    input: {
                      id,
                      clientMutationId: 'client-delete-' + Date.now(),
                    },
                  },
                });
                showSuccess('Данс амжилттай устлаа');
                refetch();
              } catch (error: any) {
                console.error(error);
                const message =
                  error?.graphQLErrors?.[0]?.message ||
                  error.message ||
                  'Алдаа гарлаа';
                showError(message);
              }
            },
          },
        ]);
      };

  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}
    >
      <CustomHeader title="Данс" />
      <View style={{ paddingHorizontal: 16, flex: 1, marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: '600', color: 'black' }}>
          Миний данс
        </Text>
        {data?.me?.bankAccounts?.map(account => (
          <TouchableOpacity
            onPress={() => onDelete(account?.id)}
            style={{
              padding: 20,
              borderRadius: 12,
              backgroundColor: '#F8F8F8',
              marginTop: 10,
            }}
            key={account.id}
          >
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#020202' }}>
              {account.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#020202' }}>
              {account.number}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={{
          padding: 20,
          width: '100%',
          borderWidth: 1,
          borderColor: '#E6E6E6',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => Navigator.navigate('AddBank')}
      >
        <Text style={{ fontSize: 12, fontWeight: '700', color: '#020202' }}>
          Данс нэмэх
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          width: '100%',
          marginBottom: 10,
          backgroundColor: '#F8F8F8',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => logout()}
      >
        <Text style={{ fontSize: 12, fontWeight: '700', color: 'red' }}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BankAccount;
