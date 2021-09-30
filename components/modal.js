import React, {useState} from "react";
import { Alert, Button, Modal,Text, TextInput, View, StyleSheet } from "react-native";

const ViewModal=({
    modelVisible,
    setModelVisible,
    date,
    mark,
    setMark
}) => {
    const [msg, setMsg] = useState ("Reaminder")
    const remaind = () =>{
        let temp = mark
        temp[date]={
            selected:true,
            marked:true,
            selectedColor: 'blue'
        }
        setMark(temp)
        console.log(mark)
        setModelVisible(false)
    }
    return(
        <View style={{marginTop:22}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modelVisible}
                onRequestClose={() => {
                    Alert.alert("Model has been closed");
                    setModelVisible(!modelVisible);
                }}
            >
                <View>
                    <View>
                            <Text>Enter Remainder</Text>
                            <TextInput
                                onChange={setMsg}
                                value={msg}
                                placeholder="Event"
                            />
                            <Button onPress={remaind} title="Remaind"/>
                    </View>
                </View> 
            </Modal>
        </View>
    );
}

const styles=StyleSheet.create({
    centerView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:22
    }
});

export default ViewModal;