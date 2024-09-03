import { React } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { home } from "./home"
import { cadastrar }from "./cadastrarCriptos"
import { alterar }from "./alterarCriptos"

const Stack = createStackNavigator();

export default function Rotas() {
    return(
        <Stack.Navigator>
            <stack.Screen name="home" component={home}/>
            <stack.Screen name="cadastrar" component={cadastrar}/>
            <stack.Screen name="alterar" component={alterar}/>
            </Stack.Navigator>
    );
}