import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
});
