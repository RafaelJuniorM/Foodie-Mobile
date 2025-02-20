import { View, StyleSheet, Image, Text } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons";


function Header(props){
    return (
        <View style={styles.Header}>
            <Image
                style= {styles.logo}
                source={icons.logo}
            />
            <Text style = {styles.titulo}> {props.texto}</Text>
        </View>

    )
}

export default Header;