import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                {/* <Image
                    source={{ uri: "https://i.ibb.co/56H2LGH/images-1.png" }}
                    style={styles.note}
                /> */}
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
                        <View style={{
                            height: 45,
                            width: "100%",
                            backgroundColor: "#C4C4C4",
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("detail")}
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
                                    fontWeight:'bold'
                                }}
                                >Kegiatan 1</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 45,
                                    width:"20%",
                                    flexDirection: 'row',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image
                                    source={{ uri: "https://i.ibb.co/HBFwfD0/check.png" }}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        marginRight: 10
                                    }}
                                />
                                <Image
                                    source={{ uri: "https://i.ibb.co/yXZR6gX/delete.png" }}
                                    style={{
                                        height: 25,
                                        width: 25
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
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
