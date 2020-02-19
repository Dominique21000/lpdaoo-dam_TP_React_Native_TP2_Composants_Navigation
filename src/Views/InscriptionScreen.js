import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';


class InscriptionScreen extends React.Component{
    static navigationOptions = {
        title: 'Inscription',
      };

    state = {
        name : "",
        email: "",
        password:"",
    }
  
    render(){
        const { navigate} = this.props.navigation;
        
        const validationFormulaire = () => {
            // recupe des donnees
            var nom = this.state.name;
            var email = this.state.email;
            var password = this.state.password;
            var ok = true;

            // verification 
            if (nom.length==0)
            {
                ok = false;
                alert("Vous devez remplir votre nom");
            }
            
            const rm_1 = "^[a-zA-Z0-9]*$";
            //cosnt rm_2 = 

            //alert(this.state.name);
            //console.log(this.props);

            if (ok == true)
            {
                // appel de la page destinateur
                navigate('Accueil', { 'nom' : nom, 'email' : email, 'password' : password });
            }
        };

        return (
            <View style={ styles.container }>
                <Text style={styles.title}>Inscription</Text>
                <TextInput
                    name="nom"
                    placeholder="Nom"
                    style={styles.n_saisie} 
                    onChangeText={text=> this.setState({ name:text})}     
                    returnKeyLabel="next"                                 
                />
                <TextInput
                    email="email"
                    placeholder=" Email"
                    style={styles.e_saisie}
                    onChangeText={text=> this.setState({ email:text})}  
                    returnKeyType="next"

                />
                <TextInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={ styles.p_saisie }
                    onChangeText={text=> this.setState({ password:text})}                
                    returnKeyType="next"
                />

                { /* validation */ }
                <Button 
                    mode="contained"
                    buttonStyle={styles.btn_inscription} 
                    title="INSCRIPTION"
                    onPress={ validationFormulaire }                    
                    />


                <View style={styles.bas}>                    
                    <Text style={styles.inscrit} title="inscrit">Déjà inscrit ?</Text>
                    { /* bouton de connexion */ }
                    <TouchableHighlight onPress={()=> navigate('Connexion', { name:'Connexion'})}>
                        <Text style={styles.connectez} title="inscrit">Connectez-vous</Text>
                    </TouchableHighlight>
                </View>
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
        margin:10,
    },

    n_saisie:{
        marginTop:10,
        height:50,
        width: 200,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding:10,
        
    },


    e_saisie:{
        marginTop:10,
        height:50,
        width:200,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding:10,
        
    },

    p_saisie:{
        marginTop:10,
        height:50,
        width:200,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 10,
        width:200,
        
    },

    btn_inscription:{   
        marginTop:20,     
        margin:10,
        width:200,
        backgroundColor:'blue',
        padding:15,
    },

    connectez:{
        marginLeft: 10,
        color:'blue',
        fontWeight:'bold',
    },

    bas:{
        marginTop:10,
        flexDirection: 'row',
        alignItems:'center',        
    },
})


export default InscriptionScreen;