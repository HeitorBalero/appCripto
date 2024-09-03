import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { Firestore, firestore } from "../Firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
 
export default function Home({ navigation }) {
    const [criptos, setcriptos] = useState([]);
 
    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestore, "tbmoeda", id));
        } catch (erro) {
            Alert.alert("Erro ao deletar.", erro.message);
        }
    }
 
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "tbmoeda"), (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ ...doc.data(), id: doc.id });
            });
            setcriptos(lista);
        });
        return () => unsubscribe();
    }, []);
 
    return (
        <View>
            <View>
                <Text>Lista de criptomoedas</Text>
            </View>
            <FlatList
                data={criptos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("AlteraCriptos", {
                                        id: item.id,
                                        nomeCripto: item.nomeCripto,
                                        siglaCripto: item.siglaCripto,
                                        valorCripto: item.valorCripto,
                                    })
                                }
                            >
                                <Text> CriptoMoedas: <Text>{item.nomeCripto}</Text></Text>
                                <Text> Sigla: <Text>{item.siglaCripto}</Text></Text>
                                <Text> CriptoMoedas: <Text>{item.valorCripto}</Text></Text>
                            </TouchableOpacity>
                       
                        <TouchableOpacity onPress={()=>deleteCripto(item.id)}>
                            X
                        </TouchableOpacity>
                        </View>
                    );
                }}
               
 
            />
            <TouchableOpacity onPress={()=>navigation.navigate("CadastrarCriptos")}>
                +
            </TouchableOpacity>
    </View>
    );
}
 
