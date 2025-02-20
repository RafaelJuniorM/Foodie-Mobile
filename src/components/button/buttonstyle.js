import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";

export const styles = StyleSheet.create({
    btn: {
        width: '100%',
        backgroundColor: color.red,
        borderRadius: 6
    },
    
    texto: {
        fontSize: fontSize.md,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: color.white,
        textAlign:'center',
        padding: 14
    }
    
});