import {createStackNavigator} from 'react-navigation';
import { createStack, CardStyleInterpolators } from 'react-navigation-stack';

import { Accueil } from '../src/Views/Accueil';
import { Connexion } from '../src/Views/Connexion';
const Router = createStackNavigator(
    {
        Profile:{
            scren:Accueil,
        },
        Accueil,
        Connexion,
    },
    {
        initialRouteName: 'Accueil',
        headerMode: 'none',
    }
)

export default createAppContainer(Routeur);