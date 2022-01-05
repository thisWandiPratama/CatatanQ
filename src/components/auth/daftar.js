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

class Daftar extends React.Component {
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
                                uri: 'https://i.ibb.co/LSdKgTH/Vector.png'
                            }}
                            style={styles.NamaLogo}
                        />
                        <TextInput
                            placeholder="Nama Pengguna"
                        />
                    </View>
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
                            placeholder="Konfirmasi Kata Sandi"
                        />
                    </View>
                </View>


                <View style={styles.boxBtnMasuk}>
                    <TouchableOpacity
                        style={styles.btnMasuk}
                    >
                        <Text style={styles.titleBtn} >Daftar</Text>
                    </TouchableOpacity>
                    <View style={styles.boxQuiz} >
                        <Text style={{
                            color: 'black',
                            paddingRight: 10
                        }} >Sudah memiliki akun ?</Text>
                        <Text
                            onPress={() => this.props.navigation.navigate("masuk")}
                            style={{
                                color: '#F55F44',
                            }}
                        >MASUK</Text>
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
        height: 200,
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
        height: 250
    },
    NamaLogo: {
        height: 30, width: 30, marginLeft: 5
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


export default Daftar