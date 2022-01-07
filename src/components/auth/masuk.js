import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Touchable
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

class Masuk extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    Login = () => {
        const {  email, password } = this.state

        fetch("https://golang-api-kegiatanq.herokuapp.com/api/v1/auth/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(result => {    
                console.log(result)
                if(result.status===true){
                    AsyncStorage.setItem('@tokenlogin', JSON.stringify(result.data.token))
                    AsyncStorage.setItem('@namalogin', JSON.stringify(result.data.name))
                    AsyncStorage.setItem('@emaillogin', JSON.stringify(result.data.email))
                    alert("Login Sukses!!")
                    this.props.navigation.replace("home")
                }else{
                    alert("Email atau Password Salah!")
                }
            })
            .catch(error => console.log('error', error));

    }
    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={
                        styles.boxLogoMasuk
                    }
                >
                    <Image
                        source={{
                            uri: 'https://i.ibb.co/8Ddf831/kisspng-vector-graphics-royalty-free-pencil-cartoon-5c0ca74a56dd02-1.png'
                        }}
                        style={styles.logoMasuk}
                    />
                </View>
                <Text
                    style={styles.title}
                >KegiatanQ</Text>

                <View
                    style={styles.mainContent}
                >
                    <View
                        style={styles.boxInput}
                    >
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/FBfDZTG/EMAIL-LOGO-removebg-preview-2.png'
                            }}
                            style={styles.emailLogo}
                        />
                        <TextInput
                            placeholder="Email ID"
                            onChangeText={(email) => this.setState({email:email})}
                        />
                    </View>
                    <View
                        style={styles.boxInput}
                    >
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/ypZNWb5/247-2474005-png-file-svg-icon-login-password-clipart-1-1.png'
                            }}
                            style={styles.emailLogo}
                        />
                        <TextInput
                            placeholder="Kata Sandi"
                            onChangeText={(password) => this.setState({password:password})}
                        />
                    </View>
                </View>

                <View style={styles.boxBtnMasuk}>
                    <TouchableOpacity onPress={() => this.Login()}
                        style={styles.btnMasuk}
                    >
                        <Text style={styles.titleBtn} >Masuk</Text>
                    </TouchableOpacity>
                    <View style={styles.boxQuiz} >
                        <Text style={{
                            color: 'black',
                            paddingRight: 10
                        }} >Belum memiliki akun ?</Text>
                        <Text
                            onPress={() => this.props.navigation.navigate("daftar")}
                            style={{
                                color: '#F55F44',
                            }}
                        >DAFTAR</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoMasuk: {
        height: 273,
        width: 254,
        resizeMode: 'contain'
    },
    boxLogoMasuk: {
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontStyle: 'italic'
    },
    mainContent: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red',
        height: 150
    },
    emailLogo: {
        height: 45, width: 45
    },
    boxInput: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: '#FDD835',
        margin: 5,
        height: 53,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F55F44',
        borderRadius: 20
    },
    boxBtnMasuk: {
        alignItems: 'center',
        marginTop: 25
    },
    btnMasuk: {
        height: 50,
        width: '60%',
        backgroundColor: '#F55F44',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    titleBtn: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    boxQuiz: {
        flexDirection: 'row',
        marginTop: 10
    }
})


export default Masuk