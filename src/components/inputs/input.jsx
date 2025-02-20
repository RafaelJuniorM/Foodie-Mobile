import { View, Text, TextInput } from "react-native"
import { styles } from "./input.style.js";

function Inputs(props){
    return (
        <View>
            <Text style= {styles.label} > {props.label}</Text>
            <TextInput  
                style= {styles.input}
                placeholder= {props.placeholder} 
                secureTextEntry={props.isPassword}
            />
        </View>

        
    )
       
}

export default Inputs;