import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";


export const styles = StyleSheet.create({
    container: {
       flex: 1,
       paddingLeft: 40,
       paddingRight: 40,
       paddingTop: 55,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: color.white
    },  
    scrollView: {
        width: '100%',
        
    },
    form: {
        width:'100%',
        marginTop: 50,
    },
    
    inputs: {
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
        padding: 20,
        height: 70
        
    },

    footerText: {
        textAlign:'center',
        color: color.medium_gray,
        fontSize: fontSize.md
    }
});