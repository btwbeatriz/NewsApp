import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <View>
        <Text>Inscreva-se na nossa NewsLetter e fique por dentro!</Text>
      <TextInput
        placeholder="Insira seu endereço de e-mail"
        value={email}
        onChangeText={handleEmailChange}
      />

      <Button
        title="Inscreva-se"
      />
    </View>
  );
}
