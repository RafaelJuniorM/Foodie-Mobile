import { StyleSheet } from "react-native"
import { color, fontSize } from "../../constants/theme";


export const styles = StyleSheet.create({
   input: {
        width: '100%',
        backgroundColor: color.white,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: color.light_gray
       
    },  

    label: {
       color: color.dark_gray,
       fontSize: fontSize.md,
       marginBottom: 6
    }
});