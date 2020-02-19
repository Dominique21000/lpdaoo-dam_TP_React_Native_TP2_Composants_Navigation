import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AccueilScreen from './src/Views/AccueilScreen';
import InscriptionScreen from './src/Views/InscriptionScreen';
import SuccesScreen from './src/Views/SuccesScreen';
import ConnexionScreen from './src/Views/ConnexionScreen';


const MainNavigator = createStackNavigator({

  Accueil: {screen: AccueilScreen},
  Inscription : {screen : InscriptionScreen},
  Connexion: { screen : ConnexionScreen},
  Succes: { screen : SuccesScreen},  
});

const App = createAppContainer(MainNavigator);

export default App;