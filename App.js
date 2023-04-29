import { StyleSheet, ScrollView } from 'react-native';
import News from './screens/News';
import Newsletter from './screens/NewsLetter';


export default function App() {
  return (
  <ScrollView>
      <News />
      <Newsletter />
    </ScrollView>
  );
}

