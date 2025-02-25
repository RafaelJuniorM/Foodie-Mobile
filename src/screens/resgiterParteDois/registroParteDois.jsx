import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { styles } from "./registroParteDois.style.js";

import Header from "../../components/header/header.jsx";
import Inputs from "../../components/inputs/input.jsx";
import Button from "../../components/button/button.jsx";
import icons from "../../constants/icons.js";

function RegistroParteDois() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.back} source={icons.back} />
          <Header texto="Informe seu endereço." />
        </View>

        <View style={styles.form}>
          <View style={styles.twoinput}>
            <View style={styles.input70}>
              <Inputs label="Enedereço" />
            </View>

            <View>
              <Inputs label="Compl." />
            </View>
          </View>

          <View style={styles.input}>
            <Inputs label="Bairro" />
          </View>

          <View style={styles.twoinput}>
            <View style={styles.input70}>
              <Inputs label="Cidade" />
            </View>

            <View style={styles.input30}>
              <Inputs label= "UF  " />
            </View>
          </View>

          <View style={styles.input}>
            <Inputs label="CEP" />
          </View>
        </View>

        <View style={styles.button}>
          <Button text="Criar minha conta"> </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegistroParteDois;
