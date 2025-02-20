import React from "react";
import { styles } from "./buttonstyle";
import { Text, TouchableOpacity } from "react-native";

function Button (props) {
    return (
       <TouchableOpacity style={styles.btn}> 
            <Text style={styles.texto}> {props.text}</Text>
       </TouchableOpacity>
    )
}

export default Button;