import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import Inputs from "../../components/inputs/input.jsx";
import Button from "../../components/button/button.jsx"


function Registro(){
    return (
        <View style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <Header texto='Criar sua conta.'/>
                
                <View style={styles.form}> 
                    <View style={styles.inputs}>
                        <Inputs label = 'Nome Completo' placeholder ='Seu Nome completo'/>    
                    </View>
                
                    <View  style={styles.inputs}>
                        <Inputs label = 'E-mail'    placeholder ='seuemail.com@email.com'/>
                    </View>

                    <View  style={styles.inputs}>
                        <Inputs label = 'Escolha uma senha'    ispassword/>
                    </View>

                    <View  style={styles.inputs}>
                        <Inputs label = 'Confirme a senha'    ispassword/>
                    </View>
                </View>
            
                <View style={styles.button} >
                    <Button text='Proximo passo'> </Button>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}> Acessar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Registro;