import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            nama: "",
            email: "",
            latitude: "",
            longitude: ""
        };
    }

    getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@tokenlogin')
            const nama = await AsyncStorage.getItem('@namalogin')
            const email = await AsyncStorage.getItem('@emaillogin')
            if (token !== null && nama !== null && email !== null) {
                // console.log(jsonValue.name)
                this.setState({ token: JSON.parse(token), nama: JSON.parse(nama), email: JSON.parse(email) })
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getToken()
        this.getLocation()
    }
    
    
    getLocation = () => {
        Geolocation.getCurrentPosition(info => { this.setState({ latitude: info.coords.latitude, longitude: info.coords.longitude }) });
        // setTimeout(() => {
        //     let key = 'AIzaSyC7MU_zDS2NQddIpBlxGWavGOQGR8s0eaM'
        //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&latlng=${this.state.latitude},${this.state.longitude}`)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        // }, 2000);
    }


    Logout = () => {
        AsyncStorage.clear()
        this.props.navigation.replace("masuk")
    }



    render() {
        return (
            <View
                style={styles.container}
            >
                <Image
                    source={{ uri: "https://i.ibb.co/cFB8jX2/header.png" }}
                    style={styles.header}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("profile")} style={styles.boxlogo}>
                    <Image
                        source={{ uri: "https://i.ibb.co/7GXXKtk/roda.png" }}
                        style={styles.settingheader}
                    />
                </TouchableOpacity>
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
                        <Text style={{
                            color: "#000",
                            fontWeight: 'bold',
                            fontSize: 18
                        }} >{this.state.nama}</Text>
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
                        <Text style={{
                            color: "#000",
                            fontWeight: 'bold',
                            fontSize: 18
                        }} >{this.state.email}</Text>
                    </View>
                    <View
                        style={styles.boxInput}
                    >
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/jG6x2qZ/placeholder.png'
                            }}
                            style={styles.emailLogo}
                        />
                        <Text style={{
                            color: "#000",
                            fontWeight: 'bold',
                            fontSize: 18
                        }} >{this.state.latitude}, {this.state.longitude}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.Logout()}
                        style={{
                            height: 60,
                            width: "60%",
                            backgroundColor: "#F55F44",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            marginTop: '30%'
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}
                        >Keluar</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
    },
    settingheader: {
        height: 35,
        width: 35
    },
    boxlogo: {
        position: 'absolute',
        right: 3,
        top: 3
    },
    NamaLogo: {
        height: 30, width: 30,
        marginLeft: 11,
        marginRight: 5
    },
    emailLogo: {
        height: 45, width: 45,
        marginLeft: 5
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
        borderRadius: 20,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Profile;
