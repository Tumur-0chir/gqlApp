import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginScreen() {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    try {
      await login(username, password);
    } catch (e) {
      console.log('Нэвтрэхэд алдаа:', e);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#F8F8F8',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        bottom: 50,
      }}
    >
      <Text>Утасны дугаар:</Text>
      <TextInput
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 10, paddingHorizontal: 16 }}
        onChangeText={setUsername}
        value={username}
      />
      <Text style={{ marginTop: 10 }}>Нууц үг:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#DDDDDD',
          borderRadius: 10,
          marginBottom: 10,
          paddingHorizontal: 16,
          color: '#222222',
        }}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'coral',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text>Нэвтрэх</Text>
      </TouchableOpacity>
      {isAuthenticated && <Text>⚡ Та нэвтэрсэн байна</Text>}
    </View>
  );
}
