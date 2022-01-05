import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class AddCatatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View
                style={
                    styles.container
                }
            >
                <TouchableOpacity style={styles.close} onPress={() => this.props.navigation.goBack()} >
                    <Text style={styles.titleClose}> X </Text>
                </TouchableOpacity>
                <View style={{
                    margin: 50,
                    flex: 1
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, color: "#000", fontWeight: 'bold' }}>Saya Akan...</Text>
                    </View>
                    <View
                        style={{ borderBottomWidth: 1, borderBottomColor: "#999", marginTop: 30}}
                    >
                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Judul</Text>
                        <TextInput
                            placeholder='Masukan judul catatan'
                        />
                    </View>
                    <View
                        style={{ borderBottomWidth: 1, borderBottomColor: "#999" , marginTop: 20}}
                    >
                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Deskripsi</Text>
                        <TextInput
                            placeholder='Masukan deskripsi catatan'
                        />
                    </View>
                    <View style={{
                        alignItems:'center',
                        marginTop: 40
                    }}>
                    <TouchableOpacity
                    style={{
                        height: 50, 
                        width: "60%",
                        backgroundColor:"#F55F44",
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius: 5
                    }}
                    >
                        <Text
                        style={{
                            color:"#fff",
                            fontSize: 24,
                            fontWeight:'bold'
                        }}
                        >Tambah</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    close: {
        height: 40,
        width: 40,
        right: 0,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleClose: {
        color: "#757575",
        fontSize: 25
    }
})

export default AddCatatan;
