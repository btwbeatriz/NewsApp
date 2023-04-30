import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Inscreva-se na nossa NewsLetter e fique por dentro!</Text>
      <TextInput style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={handleEmailChange}
      />

      <Button style={styles.button}
        title="Inscrever-se"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    color: '#007A71',
  },
});
