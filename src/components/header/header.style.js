import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";



export const styles = StyleSheet.create({
    Header: {
        width: '100%',
        alignItems: 'center',
        
    },
    
    logo: {
      width: 190,
      height: 50  
    },
    
    titulo: {
        color: color.medium_gray,
        fontSize: fontSize.md,
        textAlign: 'center'
    }
});