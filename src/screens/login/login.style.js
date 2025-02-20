import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";


export const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 40,
       justifyContent: 'center',
       alignItems: 'center'
    },  

    form: {
        width:'100%',
        marginTop: 100,
    },
    
    input: {
        width: '100%',
        marginBottom: 25,
    },

    button: {
        width: '100%',
        marginBottom: 60
    },

    footer:{
        width:'100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 50
    },

    footerText: {
        textAlign:'center',
        color: color.medium_gray,
        fontSize: fontSize.md
    }
});