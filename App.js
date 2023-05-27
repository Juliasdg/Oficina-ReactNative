import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native'; 

export default ()=> {
  const [nota1, setNota1] = useState ("");
  const [nota2, setNota2] = useState ("");

  return(
    <View style={{backgroundColor: "#bdb2ff", flex: 1, justifyContent: "center", alignItems:"Center"}}>
      <Text style={{fontSize: 30, fontFamily: "Poppins", color:"#9d4edd", fontWeight: 800}}> Cálculo de Média </Text>
      <Text> </Text>
      <Text style={{fontSize: 18, fontFamily: "Poppins"}}> Informe a 1ª nota </Text>
      <TextInput value={nota1} onChangeText={setNota1} style={{borderWidth: 2, borderRadius: 7, borderColor:"#9d4edd"}}/>
      <Text> </Text>
      <Text style={{fontSize: 18, fontFamily: "Poppins"}}>Informe a 2ª nota</Text>
      <TextInput value={nota2} onChangeText={setNota2} style={{borderWidth: 2, borderRadius: 7, borderColor:"#9d4edd"}}/>
      <Text> </Text>
      <Button color="#9d4edd" title="Calcular" 
        onPress={()=>{
          const n1 = parseFloat(nota1);
          const n2 = parseFloat(nota2);
          const media = (n1+n2)/2;

          alert("Sua média é: "+ media);
        }}/>
    </View>
  );
}