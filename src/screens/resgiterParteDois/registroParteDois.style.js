import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";


export const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 40,
       justifyContent: 'center',
       alignItems: 'center'
    },  

    header: {
        flexDirection: 'row',
        marginTop: 50,
        
        
    },

    back: {
       width: 40,
       height: 40,
       marginLeft: 20,
       flexDirection:'row',
       
    },

    form: {
        width:'100%',
        marginTop: 80,
    },

    twoinput: {
        
        flexDirection: 'row'
    },

    input: {
        width: '100%',
        marginBottom: 25,
    },

    input70: {
        width: '80%',
        paddingRight: 10
    },

    input30: {
        width: '20%'
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