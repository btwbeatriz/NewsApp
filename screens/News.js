import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

import Newsletter from './NewsLetter';

export default function News() {

  const news = [
    {
      id: 1,
      title: "WhatsApp testa transcrição automática de mensagens em áudio",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 2,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 3,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 4,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 5,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 6,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 7,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 8,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 9,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
    {
      id: 10,
      title: "Pesquisa revela impacto da pandemia na economia",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto; Meta diz que não comenta rumores",
      content: "",
      info: "",
      image: "https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg"
    },
  ]

  const mainNews = news.find(item => item.id === 1);
  const otherNews = news.filter(item => item.id !== 1);
  const allNews = [].concat(mainNews, otherNews);

  const NewsItem = ({ news }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: news.image }} />
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.content}>{news.description}</Text>
        <Text style={styles.content}>{news.content}</Text>
        <Text style={styles.content}>{news.info}</Text>
      </View>
    );
  };

  const [selectedNews, setSelectedNews] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Notícias Tech</Text>

      <FlatList
        data={allNews.slice(0, 10)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => {
          let counter = index + 1;
          return (
            <TouchableOpacity onPress={() => {
              setSelectedNews(item);
              setModalVisible(true);
            }}>
              <View style={styles.newsContainer}>
                {item.id === 1 ? (
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageMain}
                  />
                ) : (
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageLeft}
                  />
                )}
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  {item.id === 1 ? null : <Text style={styles.description}>{item.description}</Text>}
                </View>
              </View>
              {counter === 3 && <Newsletter/>}
            </TouchableOpacity>
          );
        }}
      />
      {selectedNews && (
        <Modal visible={modalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedNews.title}</Text>
            <Text>{selectedNews.content}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#A9A3B9',
    padding: 20,
    borderRadius: 4,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'right',
  },
  container: {
    padding: 10,
    backgroundColor: '#FFFF',
    marginBottom: 10,
    marginTop: "10%",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageLeft: {
    width: 90,
    height: 90,
    marginRight: 15,
    borderRadius: 8,
  },
  imageMain: {
    width: 250,
    height: 200,
    marginTop: "3%",
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textTop:{
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  content: {
    fontSize: 12,
    color: "gray",
  },
});