import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../Firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function alterarCriptos({ navigation, route}){
    
    const id = route.params.id;

    const [nomeCripto, setnomeCripto] = useState(route.params.nomeCripto)
    const [siglaCripto, setsiglaCripto] = useState(route.params.siglaCripto)
    const [valorCripto, setvalorCripto] = useState(route.params.valorCripto)

    async function alterarCripto(id, nomeCripto, siglaCripto, valorCripto) {

    try{
        await updateDoc(doc(collection(firestore, "tbmoeda"), id), {
            nomeCripto: tem.nomeCripto,
            siglaCripto: item.siglaCripto,
            valorCripto: item.valorCripto
        })
        Alert.alert("Aviso","Criptomoeda Alterado com sucesso.")
        navigation.navigate("home")
    }
    catch (erro) {
        console.erro("Erro ao alterar: ", error);
        Alert.alter("Erro","Erro ao alterar. por favor, tente novamente.");
    }
}
    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Alterar dados da Criptomoeda</Text>
            </View>
            <View>
               <TextInput autoCaptalize='words' style={estilo.input} place holder="digite a criptomoeda" onChange={setNome} value={nome} />
               <TextInput style={estilo.input} placeholder="digite a sigla" onChangeText={setSigla} value={sigla}/>
               <TextInput style={estilo.input} placeholder="digite o valor" onChangeText={setValor} value={valor}/>
                <TouchableOpacity
                style={estilo.btnenviar}
                onPress={() => {
                    alterarCripto(id, nomeCripto, siglaCripto, valorCripto);
                }}>
                    <Text style={estilo.btntxtenviar}> Alterar </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        allignItems: 'center',
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234' ,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    btntxtenviar:{
        marginTop: 25,
    },
    btnenviar:{
        marginTop: 20,
    },
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center',
    }
});