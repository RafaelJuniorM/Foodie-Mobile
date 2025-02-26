import React, {useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import Inputs from "../../components/inputs/input.jsx";
import Button from "../../components/button/button.jsx"



function Login(props){

   const [email, setEmail] = useState(''); //email =  variavel de estado 
   const [senha, setSenha] = useState('');
   
   function processarLogin(){
        console.log(email, senha)
   }

    return (
        <View style={styles.container}>
            <Header texto='Acesse sua conta.'/>
            
            <View style={styles.form}> 
                <View style={styles.input}>
                    <Inputs 
                        label = 'E-mail' 
                        placeholder ='seuemail@email.com'
                        onChangeText = {(texto)=>{
                            setEmail(texto)
                        }}
                        value={email}
                    />    
                </View>

                <View  style={styles.input}>
                    <Inputs 
                        label = 'Senha'  
                        isPassword ={true} 
                        onChangeText = {(texto)=>{
                            setSenha(texto)
                        }}
                        value={senha}
                    />
                </View>
            </View>
           
            <View style={styles.button} >
                <Button text='Acessar' 
                    onPress = {processarLogin}
                > 
                </Button>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
                    <Text style={styles.footerText}> Criar minha conta.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;