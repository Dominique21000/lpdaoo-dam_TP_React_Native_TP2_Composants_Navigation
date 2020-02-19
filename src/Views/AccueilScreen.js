import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

class AccueilScreen extends React.Component{
    static navigationOptions = {
        title:'Accueil',
    };
    
    render(){
        const { navigate} = this.props.navigation;
        const nav = this.props.navigation;
        const nom = nav.getParam('nom','pas-nom');
        const email = nav.getParam('email','pas-mail');
        const password = nav.getParam('password','pas-password');
       
        return (
            <View style={ styles.container }>
                <Text 
                    style={ styles.accueil }>Connexion / Inscription</Text>
                <Button 
                    buttonStyle={styles.btn_connexion} 
                    title="Connexion"
                    onPress={()=> navigate('Connexion', { nom: nom, email : email, password : password})}
                />
                <Button 
                    buttonStyle={ styles.btn_inscription }
                    titleStyle={ styles.btn_inscription_txt}
                    title="Inscription"
                    onPress={()=> navigate('Inscription', { name:'Inscription'})}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center",
    },

    accueil:{
        marginTop:20,
        fontSize:30,
        color:'blue',
        fontWeight:'bold',
        margin:10,
    },

    btn_connexion:{
        marginTop:10,
        padding:10,
        width:100,
    },

    btn_inscription:{
        backgroundColor:'white',
        marginTop:10,
        padding:10,
        width:100,
    },

    btn_inscription_txt:{
        color:'blue',
    }
})

export default AccueilScreen;