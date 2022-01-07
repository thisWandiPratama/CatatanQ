import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            data: []
        };
    }


    getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@tokenlogin')
            if (token !== null) {
                this.setState({ token: JSON.parse(token) })
                setTimeout(() => {
                    this.getListData()
                }, 2000);
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getToken()
    }



    getListData = () => {
        const { token } = this.state
        fetch("https://golang-api-kegiatanq.herokuapp.com/api/v1/kegiatan/", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({ data: result.data })
            })
            .catch(error => console.log('error', error));
    }

    finish = (id) => {
        const { token } = this.state
        fetch(`https://golang-api-kegiatanq.herokuapp.com/api/v1/kegiatan/finish/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                id: id,
                is_finish: true,
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.getListData()
            })
            .catch(error => console.log('error', error));
    }

    Delete = (id) => {
        const { token } = this.state
        fetch(`https://golang-api-kegiatanq.herokuapp.com/api/v1/kegiatan/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.getListData()
            })
            .catch(error => console.log('error', error));
    }




    renderListData = () => {
        return this.state.data.map((value, index) => {
            return (
                <View style={{
                    height: 45,
                    width: "100%",
                    backgroundColor: "#C4C4C4",
                    flexDirection: 'row',
                    marginBottom: 5
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("detail", {title:value.title, deskripsi:value.deskripsi})}
                        style={{
                            justifyContent: 'center',
                            height: 45,
                            width: "75%",
                            paddingLeft: 5
                        }}
                    >
                        <Text
                            style={{
                                color: "#000",
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}
                        >{value.title}</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 45,
                            width: "20%",
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {value.is_finish === false ?
                            <TouchableOpacity onPress={() => this.finish(value.id)}>
                                <Image
                                    source={{ uri: "https://gcdn.pbrd.co/images/65nu1jUSfPZK.png?o=1" }}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        marginRight: 10
                                    }}
                                />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={() => this.finish(value.id)}>
                                <Image
                                    source={{ uri: "https://i.ibb.co/HBFwfD0/check.png" }}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        marginRight: 10
                                    }}
                                />
                            </TouchableOpacity>

                        }
                        <TouchableOpacity onPress={() => this.Delete(value.id)}>
                            <Image
                                source={{ uri: "https://i.ibb.co/yXZR6gX/delete.png" }}
                                style={{
                                    height: 25,
                                    width: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
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

                {this.state.data.length == 0 ?

                    <Image
                        source={{ uri: "https://i.ibb.co/56H2LGH/images-1.png" }}
                        style={styles.note}
                    />
                    :
                    <View style={{
                        position: 'absolute',
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                    }}>
                        <View style={{
                            marginTop: Dimensions.get('window').height / 4 + 20,
                            marginLeft: 40,
                            marginRight: 40,
                            marginBottom: 40,
                            flex: 1
                        }}>
                            {this.renderListData()}

                        </View>
                    </View>
                }
                <TouchableOpacity style={styles.boxAdd} onPress={() => this.props.navigation.navigate("addcatatan")} >
                    <Text style={styles.titleAdd}>+</Text>
                </TouchableOpacity>
            </View>
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
    note: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        marginLeft: 8
    },
    boxAdd: {
        width: 60,
        height: 60,
        backgroundColor: "#F55F44",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        bottom: 5,
        right: Dimensions.get('window').width / 2.5
    },
    titleAdd: {
        color: "#702C1F",
        fontSize: 40
    }
})

export default Home;
