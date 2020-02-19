import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class ConnexionScreen extends React.Component{
    static navigationOptions = {
        title: 'Connexion',
    };
      
    state = {
        email: "",
        password:"",
    }

    render(){
        const { navigate} = this.props.navigation;

        const verifSaisie = () => {
            console.log("verif");
            // recup des données de l'inscription
            const nav = this.props.navigation;
            const i_nom = nav.getParam('nom','pas-nom');
            const i_email = nav.getParam('email','pas-mail');
            const i_password = nav.getParam('password','pas-password');
        
            // recupe des donnees
            console.log("ici");
            var s_email = this.state.email;
            var s_password = this.state.password;
            console.log("s_mail " + s_email);
            console.log("s_password" + s_password);
            var ok = true;

            console.log("avant if");
            // verification 
            if (s_email==i_email && s_password == i_password)
            {
                console.log("ok");
                navigate('Succes', { 'nom' : i_nom, 'email' : i_email, 'password' : i_password });
            }
            else{
                alert("Erreur d'identification !");
            }                        
        };

        return (
            <View style={ styles.container }>
                <Text style={styles.title}>Connexion</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.saisie}
                    onChangeText={text=> this.setState({ email:text})} 

                />
                <TextInput
                    placeholder="Password"
                    style={ styles.saisie }
                    secureTextEntry={true}
                    onChangeText={text=> this.setState({ password:text})} 
                />
                { /* Bouton de connexion */ } 
                <Button 
                    mode="contained"
                    buttonStyle={styles.btn_connexion} 
                    title="Connexion"  
                    onPress={ verifSaisie }
                    
                />            
                <Button 
                    title="S'inscrire"
                    buttonStyle={styles.btn_sinscrire}
                    titleStyle={styles.btn_sinscrire_text}
                    onPress={()=> navigate('Inscription', { name:'Inscription'})}  
                />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },

    title: {
        color:'blue',
        fontSize:30,
        fontWeight:'bold',
    },

    saisie:{
        height:50,
        width:200,
        borderColor:'black',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop:10,
        padding:10,
    },

    accueil:{        
        marginTop:20,
        fontSize:20,
        color:'powderblue',
        fontWeight:'bold',
    },

    btn_connexion:{        
        marginTop:40,
        width:200,
        backgroundColor:'blue',
        padding:5,
    },

    btn_sinscrire:{
        marginTop:10,
        backgroundColor:'white',
        width:200,
        
    },

    btn_sinscrire_text:{
        color:'blue',
        width:200,
        
    },
})

export default ConnexionScreen;