import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class AddCatatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            judul: "",
            deskripsi: ""
        };
    }

    getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@tokenlogin')
            if (token !== null) {
                this.setState({ token: JSON.parse(token) })
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getToken()
    }


    AddCatatan = () => {
        const { token, judul, deskripsi } = this.state

        fetch("https://golang-api-kegiatanq.herokuapp.com/api/v1/kegiatan/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                title: judul,
                deskripsi: deskripsi,
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === true) {
                    alert("Add Data Sukses!!")
                    this.props.navigation.goBack()
                }
            })
            .catch(error => console.log('error', error));

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
                        style={{ borderBottomWidth: 1, borderBottomColor: "#999", marginTop: 30 }}
                    >
                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Judul</Text>
                        <TextInput
                            placeholder='Masukan judul catatan'
                            onChangeText={(judul) => this.setState({ judul: judul })}
                        />
                    </View>
                    <View
                        style={{ borderBottomWidth: 1, borderBottomColor: "#999", marginTop: 20 }}
                    >
                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Deskripsi</Text>
                        <TextInput
                            placeholder='Masukan deskripsi catatan'
                            onChangeText={(deskripsi) => this.setState({ deskripsi: deskripsi })}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 40
                    }}>
                        <TouchableOpacity onPress={() => this.AddCatatan()}
                            style={{
                                height: 50,
                                width: "60%",
                                backgroundColor: "#F55F44",
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5
                            }}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 24,
                                    fontWeight: 'bold'
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
