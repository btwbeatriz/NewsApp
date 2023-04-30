import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Modal } from 'react-native';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleSubscribe = () => {

    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setModalMessage('Por favor, preencha um email válido.');
      setIsModalVisible(true);
      return;
    }

    if (!name) {
      setModalMessage('Por favor, preencha seu nome.');
      setIsModalVisible(true);
      return;
    }

    setModalMessage('Inscrição realizada!');
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalMessage('');
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

      <Button
        title="Inscrever-se"
        onPress={handleSubscribe}
      />

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <Button title="OK" onPress={closeModal} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});
