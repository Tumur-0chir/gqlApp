import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../components/Header';
import { useBankAccountCreateMutation } from '../../gql/bankAccountCreate.generated';
import { useMessage } from '../../contexts/MessageContext';
import Navigator from '../../navigation/RootNavigator';
import { useBanksQuery } from '../../gql/banks.generated';
import { useMeQuery } from '../../gql/me.generated';

const AddBankAccount = () => {
  const { data } = useBanksQuery();
  const [accountNumber, setAccountNumber] = useState('');
  const [createBankAccount] = useBankAccountCreateMutation();
  const { refetch } = useMeQuery();
  const { showSuccess, showError } = useMessage();

  const [selectedBank, setSelectedBank] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectBank = (bank: { id: string; name: string }) => {
    setSelectedBank(bank);
    setModalVisible(false);
  };

  const onSubmit = async () => {
    try {
      await createBankAccount({
        variables: {
          input: {
            bankId: selectedBank?.id ?? '',
            name: 'Ариунцас Энхбаяр',
            number: accountNumber,
            ownerId: 'Z2lkOi8vc3RvcmUtcGF5L1VzZXIvMTAwNzQzOA',
            isDefault: true,
            isConfirm: true,
            isActive: true,
            currency: 'MNT',
          },
        },
      });
      await refetch()
      Navigator.navigate('BankAccount');
      showSuccess('Банк амжилттай нэмэгдлээ');
    } catch (error: any) {
      console.error(error);

      const rawMessage =
        error?.graphQLErrors?.[0]?.message || error?.message || 'Алдаа гарлаа';

      let message = rawMessage;

      if (rawMessage.includes('Number Number has already been taken')) {
        message = 'Энэ дансны дугаар аль хэдийн бүртгэгдсэн байна';
        showError(message);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <CustomHeader title="Данс нэмэх" />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.bankSelect}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontWeight: selectedBank ? 'bold' : 'normal' }}>
            {selectedBank ? selectedBank.name : 'Select a bank'}
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Дансны дугаар"
          style={styles.input}
          placeholderTextColor='#020202'
          keyboardType="numeric"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>Данс нэмэх</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
        />
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Банк сонгох</Text>
          <FlatList
            data={data?.banks.nodes ?? []}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.bankItem}
                onPress={() => handleSelectBank(item)}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AddBankAccount;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
  },
  bankSelect: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  submitButton: {
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFF',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  bankItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    color: '#020202',
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});
