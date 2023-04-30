import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

import Newsletter from './NewsLetter';

export default function News() {

  const news = [
    {
      id: 1,
      title: "Um dos maiores sucessos do ano: saiba quanto custou a produção de ‘God of War Ragnarök’",
      description: "Novo game da história de Kratos e Atreus é um dos melhores da franquia.",
      content: "Uma das franquias mais populares de todos os tempos é, sem sombra de dúvidas, “God of War“. O game foi indiscutivelmente um sucesso de crítica," +
      " público e vendas, levando então à sua continuação lançada no ano de 2022. A continuação recebeu como título “God of War: Ragnarök”, fazendo uma referência à morte do panteão nórdico, sobre o qual se passa a nova história." +
      "Esse game, assim como o anterior, foi um enorme sucesso entre todos, e logicamente arrecadou muito no mercado internacional. o jornal britânico The Guardian publicou uma entrevista em que um dos executivos da Sony, Shunei Yoshida," +
      " revelou quanto foi aproximadamente o custo de produção de “God of War: Ragnarök”. De acordo com o dado, o custo desse novo game foi de aproximadamente 200 milhões de dólares. Com certeza, o game teve um enorme custo de produção. Porém," +
      " logicamente a Sony sabia muito bem que esse valor seria mais do que justificável, afinal, como podemos ver agora, o jogo é um sucesso mundial.",
      info: "MultiversoNoticias 29/04/2023",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
    },
    {
      id: 2,
      title: "WhatsApp libera transcrição de áudios para usuários beta",
      description: "Recurso está disponível para um grupo restrito de usuários por enquanto.",
      content: "O WhatsApp começou a liberar a função de transcrever áudios em uma conversa para um pequeno grupo de usuários beta do mensageiro, " + 
        "conforme divulgado hoje pela equipe do WABetaInfo. De acordo com o site, a transcrição pode ser vista abaixo do balão da mensagem, facilitando " + 
        "a leitura para os usuários. O recurso vem ativado por padrão, mas pode ser desativado na aba Configurações do aplicativo caso o usuário deseje." + 
        "Outro detalhe das transcrições é a possibilidade de os usuários pesquisarem por informações específicas. Em resumo: se alguém procurar por determinada" +
        " informação em áudio ou não se lembrar qual áudio está procurando, basta pesquisar por uma palavra ou frase e a transcrição destacará em qual mensagem de voz esse texto aparece.",
      info: "MacMagazine 28/04/2023",
      image: "https://macmagazine.com.br/wp-content/uploads/2023/04/28-whatsapp-transcricao-audios-1893x2048.jpg.webp"
    },
    {
      id: 3,
      title: "Gatos fujões nunca mais! Empresa lança solução com rastreamento dos bichanos",
      description: "Rastreamento de gatos pode ser uma grande solução para os felinos fujões!",
      content: "Uma empresa tem a grandiosa solução para gatos que fogem de casa! A empresa Tile," +
      " focada em rastreamento de objetos, lançou um novo pacote focado em rastrear aquele gatinho fujão que sempre acaba escapando. A ideia é manter o controle" +
      " nos animais e evitar que situações de risco aconteçam com eles. O pacote da Tile conta com um adesivo rastreador e um acessório de coleira que garante que o tutor" +
      " saiba que o dispositivo está no felino. Tudo com a maior segurança e sem prejudicar o bem-estar do bichinho. Rastreador Tile for Cats, consegue ser detectado em até 75" +
      " metros de distância e possui uma bateria que dura até 3 anos. Para acompanhar os movimentos do bichano, você pode fazer o rastreamento através do seu celular iOS ou Android." +
      " Tudo na palma da sua mão, o que deixa você ainda mais confortável e entrega extrema segurança, tanto para o animal quanto para você.",
      info: "MultiversoNoticias 29/04/2023",
      image: "https://static1.patasdacasa.com.br/articles/7/51/27/@/21201-gato-e-mamifero-descubra-tudo-sobre-ess-articles_media_mobile-2.jpg"
    },
    
    {
      id: 4,
      title: "Lançamento da Starship provocou incêndio em parque estadual dos EUA",
      description: "Autoridades norte-americanas afirmam que o lançamento fracassado do foguete Starship, da SpaceX, na última semana, provocou um incêndio em um parque estadual do Texas, nos EUA.",
      content: "Autoridades norte-americanas afirmam que o lançamento fracassado do foguete Starship, da SpaceX, na última semana, provocou um incêndio em um parque estadual do Texas, nos EUA. As chamas " +
      "consumiram uma área de 3,5 acres do Boca Chica State Park, o que equivale a mais de 14,1 mil metros quadrados. Segundo agências federais, a explosão do foguete também espalhou detritos por cerca de 1,6 milhão m² " +
      "ao longo das instalações da SpaceX, do parque estadual e de praias próximas. As informações são da Bloomberg. Na última quinta-feira (20), a SpaceX fez a sua primeira tentativa de lançamento orbital da espaçonave Starship, " +
      "com a ajuda do novo foguete Super Heavy. O conjunto montado alcança 120 metros de altura, se tornando no mais alto, mais pesado e mais poderoso foguete já lançado na história até então. Porém, o voo foi curto, sendo encerrado " +
      "cerca de quatro minutos após a decolagem, depois de uma falha impedir a separação da Starship do Super Heavy. Por questões de segurança, a SpaceX acionou o sistema de destruição do foguete quando ele estava a cerca de 29 km de altitude.",
      info: "Gizmodo UOL 28/02/2023",
      image: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/04/lancamento-da-starship-provocou-incendio-em-parque-estadual-dos-eua-1000x600.jpg"
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
      </View>
    );
  };

  const [selectedNews, setSelectedNews] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>TechNews</Text>

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
            <Image style={styles.imageMain} source={{ uri: selectedNews.image }} />
            <Text>{selectedNews.content}</Text>
            <Text>{selectedNews.info}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFFF',
    padding: 30,
    borderRadius: 4,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: "blue",
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
  },
  newsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  imageLeft: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 8,
  },
  imageMain: {
    width: 195,
    height: 200,
    marginTop: "3%",
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    fontSize: 18,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textTop:{
    fontSize: 24,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 3,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: "#FFFF",
  },
});