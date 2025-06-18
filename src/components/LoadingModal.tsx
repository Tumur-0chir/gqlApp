// src/components/LoadingModal.tsx
import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useGlobalLoading } from '../contexts/GlobalLoadingContext';

export default function LoadingModal() {
  const { isLoading } = useGlobalLoading();

  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000055',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
}
