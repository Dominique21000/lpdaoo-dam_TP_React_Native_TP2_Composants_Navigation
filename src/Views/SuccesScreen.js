import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class SuccesScreen extends React.Component{
    static navigationOptions = {
        title: 'Bienvenue :)',
    };

    render(){
        const { navigate} = this.props.navigation;
        const nav = this.props.navigation;
        const nom = nav.getParam('nom','pas-nom');
        const email = nav.getParam('email','pas-mail');
        const password = nav.getParam('password','pas-password');
      
        return (
            <View style={ styles.container }>
                <Text style={styles.title}>Vous êtes connecté</Text>
                <Text style={styles.message}>
                    Bienvenue { nom } sur notre application{ "\n" } inscription connexion
                </Text>
                
                <Button 
                    buttonStyle={styles.btn_deconnexion } 
                    titleStyle={styles.btn_deconnexion_text}
                    title="Déconnexion"
                    onPress={()=> navigate('Accueil')}   
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:"center",
    },

    title: {
        color:'blue',
        fontSize:30,
        fontWeight:'bold',
    },

    message:{
        margin:5,
        color:'black',
        alignContent:"center",
        justifyContent:"center",    
    },

    accueil:{       
        marginTop:20,
        fontSize:20,
        color:'powderblue',
        fontWeight:'bold',
    },

    btn_deconnexion:{       
        margin:10,
        backgroundColor:'white',
        width:200,
        borderColor:'black',
    },

    btn_deconnexion_text:{
        color:'blue',
    },

    sinscrire:{
        marginTop:10,
        color:'blue',
        backgroundColor:'white',
    },

    bas:{
        marginTop:10,
        flexDirection: 'row',
        alignItems:'center',        
    },
})


export default SuccesScreen;