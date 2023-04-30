import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

import Newsletter from './NewsLetter';

export default function News() {

  const news = [
    {
      id: 1,
      title: "ChatGPT permite cão-robô responder perguntas",
      description: "Engenheiros modificaram o cão-robô Spot, da Boston Dynamics, e integraram no sistema o ChatGPT, da OpenAI",
      content: "A inteligência artificial (IA) generativa já começa a fazer sua própria revolução na robótica. Pela primeira vez, engenheiros modificaram o cão-robô Spot, da Boston Dynamics," +
      " e integraram no sistema o ChatGPT, da OpenAI, e a ferramenta para modulação de voz natural Text-to-Speech, do Google. Agora, a máquina aprendeu a falar de forma estranhamente inteligente." +
      "Liderado por Santiago Valdarrama, professor e engenheiro de Machine Learning, o experimento com o cão-robô falante foi compartilhado no Twitter e já acumula um milhão de views. Por trás da" +
      " junção com o ChatGPT, a ideia é facilitar o acesso às informações coletadas pela máquina durante as missões. Só que, “não há uma maneira simples de consultar tudo sob demanda”. Na maioria dos" +
      " casos, os arquivos precisam ser interpretados por engenheiros. É aí que entra o ChatGPT, pontua. Compartilhamos os arquivos e os resultados da missão. Em seguida, fazemos nossas perguntas," +
      " dentro do contexto. Junte isso a uma interface habilitada por voz e teremos uma maneira incrível de consultar nossos dados, detalha.",
      info: "CanalTech 28/04/2023",
      image: "https://t.ctcdn.com.br/vTHZ0ZgrIRnFkXGwWmgnRB9SdUM=/720x405/smart/filters:format(webp)/i11711.jpeg"
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
      id: 4,
      title: "Tentando evitar um grande prejuízo, NVIDIA baixa preço de GPUs",
      description: "Nvidia sente a pressão da estagnação de vendas",
      content: "A Nvidia começou a diminuir o preço da sua GPU GeForce RTX 4070 na Europa, algo que chamou a atenção. Pelo visto a Nvidia está mesmo é com excesso de placas de vídeos estocadas, e por isso está tentando vender ao máximo os produtos no inventário" +
      " enquanto diminuir a produção para não ter prejuízo. Quem revelou o fato foi a empresa Arete Research, que a partir de uma análise descobriu que a Nvidia é uma das principais clientes da TSMC que conta com um estoque que excede em muito a média de 92 dias da indústria em 5 anos. A  TSMC é uma das primeiras empresas" +
      " a desenvolver e fabricar a tecnologia de processo 3nm para chips, porém teve alguns problemas no caminho. De acordo com a EETimes, a empresa atualmente está lidando com problemas de “ferramentas e rendimento”, o que acaba atrasando o volume da produção" +
      " desses chips baseados em 3nm para os clientes, o que inclui a Nvidia. A Nvidia está com um inventario tão grande de GPU que conta com um suprimento estimado de 220 dias.",
      info: "Hardware.com.br 28/04/2023",
      image: "https://i0.wp.com/www.hardware.com.br/wp-content/uploads/2023/04/3-29.jpg?fit=1200%2C630&ssl=1"
    },
    {
      id: 5,
      title: "PlayStation supera marca de meio bilhão de consoles domésticos vendidos",
      description: "Com números recém atualizados do PS5, Sony chegou a uma marca bastante impressionante",
      content: "Uma marca histórica. Com os dados revelados nesta sexta-feira (28) sobre as vendas do PS5, a Sony simplesmente superou a marca de 500 milhões de unidades de consoles" +
      " domésticos comercializados em sua história. Ou seja, mais de meio bilhão de aparelhos. Este “detalhe” foi observado por um usuário do ResetEra, e coloca a companhia em " +
      "uma “posição dominante” no mercado, sendo a líder do ramo com folga. A Nintendo, segunda colocada, registra pouco mais de 400 milhões, enquanto a Microsoft não chegou aos 200 milhões com as suas diferentes versõe do Xbox." +
      "É importante destacar, claro, que estes números contam apenas os chamados “consoles de mesa”, ou seja, eles não incluem os portáteis – algo que certamente daria a vantagem para a empresa de Mario, Zelda, Pokémon e companhia.",
      info: "meuPlaystation 28/04/2023",
      image: "https://meups.com.br/wp-content/uploads/2023/04/500milhoes-900x503.jpg"
    },
    {
      id: 6,
      title: "Lançamento da Starship provocou incêndio em parque estadual dos EUA",
      description: "Autoridades norte-americanas afirmam que o lançamento fracassado do foguete provocou um incêndio em um parque estadual do Texas, nos EUA.",
      content: "Autoridades norte-americanas afirmam que o lançamento fracassado do foguete Starship, da SpaceX, na última semana, provocou um incêndio em um parque estadual do Texas, nos EUA. As chamas " +
      "consumiram uma área de 3,5 acres do Boca Chica State Park, o que equivale a mais de 14,1 mil metros quadrados. Segundo agências federais, a explosão do foguete também espalhou detritos por cerca de 1,6 milhão m² " +
      "ao longo das instalações da SpaceX, do parque estadual e de praias próximas. As informações são da Bloomberg. Na última quinta-feira (20), a SpaceX fez a sua primeira tentativa de lançamento orbital da espaçonave Starship, " +
      "com a ajuda do novo foguete Super Heavy. O conjunto montado alcança 120 metros de altura, se tornando no mais alto, mais pesado e mais poderoso foguete já lançado na história até então. Porém, o voo foi curto, sendo encerrado " +
      "cerca de quatro minutos após a decolagem, depois de uma falha impedir a separação da Starship do Super Heavy. Por questões de segurança, a SpaceX acionou o sistema de destruição do foguete quando ele estava a cerca de 29 km de altitude.",
      info: "Gizmodo UOL 28/02/2023",
      image: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/04/lancamento-da-starship-provocou-incendio-em-parque-estadual-dos-eua-1000x600.jpg"
    },
    {
      id: 7,
      title: "IA do Google aprende habilidade sozinha e preocupa especialistas",
      description: "Programadores da empresa descobriram uma habilidade desconhecida em um dos sistemas alimentados por IA",
      content: "Engenheiros do Google que trabalham com IA (inteligência artificial) identificaram que um dos sistemas da empresa conseguiu aprender um novo idioma sozinho, o bengali, língua oficial de Bangladesh. Em entrevista à emissora americana" +
      " CBS, James Maneka, chefe da divisão de IA do Google, disse que, mesmo sem treinamento sobre o idioma, a IA começou a traduzi-lo sem explicação. O CEO do Google, Sundar Pichai, também comentou sobre o caso e disse que a capacidade da IA gerar habilidades" +
      " inesperadas já ganhou até um apelido interno entre os especialistas: ‘caixa preta’. Ian Hogarth, cofundador da empresa de tecnologia Plural, disse em entrevista à britânica BBC o que explica o achado. Segundo Hogarth, na IA o desenvolvimento de software é" +
      " muito diferente e pode resultar em sistemas mais “criativos” com o rápido salto de capacidade da tecnologia. Diferente da programação “comum”, quando trabalham com inteligência artificial, os engenheiros tentam basicamente simular as funções da mente humana.",
      info: "Olhar Digital 28/04/2023",
      image: "https://img.olhardigital.com.br/wp-content/uploads/2023/04/shutterstock_2294204011.jpg"
    },
    {
      id: 8,
      title: "Microsoft Designer: ferramenta de IA para designs é liberada na web",
      description: "A ferramenta de criação de designs com inteligência artificial foi disponibilizada na web e também foi lançada na barra lateral do Edge",
      content: "A Microsoft liberou o acesso geral a sua plataforma Microsoft Designer que gera designs para imagens a partir de inteligência artificial. A ferramenta anunciada em outubro do ano passado estava sob acesso restrito para alguns testadores. O Designer funciona" +
      " a partir de um aplicativo na web e utiliza o DALL-E 2 para gerar designs de apresentações, pôsteres, cartões postais, convites, postagens nas redes sociais e mais. A ferramenta também foi disponibilizada para o Edge com um botão na barra lateral do navegador Edge",
      info: "Olhar Digital 28/04/2023",
      image: "https://img.olhardigital.com.br/wp-content/uploads/2023/04/microsoft_designer.jpg"
    },
    {
      id: 9,
      title: "BYD lança carro elétrico baratinho, que pode substituir o Renault Kwid no Brasil",
      description: "Seagull, novo veículo elétrico da fabricante chinesa, conta com duas opções de bateria",
      content: "Quem quer trocar de carro ou comprar seu primeiro veículo novo sabe a tristeza que dá ao olhar um Renault Kwid por quase R$ 70 mil. Porém, pode ser que em breve seja possível comprar um automóvel melhor e ainda mais barato do que ele. Estamos falando do lançamento da BYD:" +
      " o Seagull, um veículo elétrico que custa R$ 57 mil e pode vir ao Brasil. A marca chinesa apresentou o novo subcompacto elétrico no Salão de Xangai, que ocorreu em abril deste ano. O Seagull é ainda menor do que seu irmão Dolphin, mas isso não necessariamente é um problema, já que ele é voltado para o uso urbano." +
      "No mercado nacional, o primeiro representante da série a aparecer por aqui foi o Yuan Plus (um SUV totalmente elétrico que custa cerca de R$ 270 mil).",
      info: "Olhar Digital 29/04/2023",
      image: "https://img.olhardigital.com.br/wp-content/uploads/2023/04/BYD-Seagull-2.jpg"
    },
    {
      id: 10,
      title: "Dropbox demite funcionários e investe em IA",
      description: "CEO afirmou que empresa tem que estar na vanguarda da era da IA",
      content: "O Dropbox está mudando sua atmosfera de trabalho, voltando seus investimentos futuros para as inteligências artificiais. Como consequência disso — ou de cenário econômico delicado, como declarado pela empresa – o Dropbox demitirá cerca de 500 funcionários — que representa em torno de 16% de toda sua" +
      " força de trabalho. A notícia foi dada pelo CEO da empresa, Drew Houston, em publicação no blog oficial do Dropbox. “Em primeiro lugar, quero reconhecer o impacto que esta decisão tem sobre os Dropboxers afetados e suas famílias, e assumo totalmente esta decisão e o caminho que nos trouxe até aqui”, escreveu Houston.",
      info: "Olhar Digital 28/04/2023",
      image: "https://img.olhardigital.com.br/wp-content/uploads/2023/04/shutterstock_1844100346.jpg"
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
            <Text style={styles.content}>{selectedNews.content}</Text>
            <Text style={styles.description}>{selectedNews.info}</Text>
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
    backgroundColor: '#d5d4ec',
    padding: 30,
    borderRadius: 4,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: "#0a046d",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    fontSize: 16,
    color: "#0a046d",
    textAlign: 'right',
  },
  container: {
    padding: 10,
    backgroundColor: '#FFFF',
    marginBottom: 10,
    marginTop: "5%",
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
    marginTop: "3%",
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
    color: "#0a046d",
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
    color: "#070347"
  },
  content: {
    fontSize: 14,
    color: "#070347",
  },
});