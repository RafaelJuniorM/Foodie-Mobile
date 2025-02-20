import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import Inputs from "../../components/inputs/input.jsx";
import Button from "../../components/button/button.jsx"


function Login(){
    return (
        <View style={styles.container}>
            <Header texto='Acesse sua conta.'/>
            
            <View style={styles.form}> 
                <View style={styles.input}>
                    <Inputs label = 'E-mail' placeholder ='seuemail@email.com'/>    
                </View>

                <View  style={styles.input}>
                    <Inputs label = 'Senha'  isPassword  />
                </View>
            </View>
           
            <View style={styles.button} >
                <Button text='Acessar'> </Button>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}> Criar minha conta.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;