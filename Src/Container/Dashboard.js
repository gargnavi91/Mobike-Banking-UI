import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { sizes } from '../Assets/Theme/theme'
import Footer from '../Components/Footer'
import Modal from "react-native-modal";
import DropBox from '../Components/Modals/DropBox';

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const CategoryArray = [
        { id: 1, category: require("../Assets/CategoryA.png"), CategoryName: "Account info" },
        { id: 2, category: require("../Assets/CategoryB.png"), CategoryName: "Transfer" },
        { id: 3, category: require("../Assets/CategoryC.png"), CategoryName: "Top Up" },
        { id: 4, category: require("../Assets/CategoryD.png"), CategoryName: "Auto Debet" },
        { id: 5, category: require("../Assets/CategoryE.png"), CategoryName: "E-Commerce" },
        { id: 6, category: require("../Assets/CategoryF.png"), CategoryName: "Financing" },
        { id: 7, category: require("../Assets/CategoryG.png"), CategoryName: "Money Changers" },
        { id: 8, category: require("../Assets/CategoryH.png"), CategoryName: "More" }]

    return (
        <View style={styles.MainContainer}>
            <ScrollView style={{ flexGrow: 1 }}>
                <ImageBackground source={require("../Assets/BackgroundOrangeStripes.png")}
                    style={styles.OrangeStrips}>
                    <ImageBackground source={require("../Assets/BackgroundBlueStripes.png")}>
                        <View style={styles.BlueStrips}>
                            <View style={styles.WelcomeBackView}>
                                <View>
                                    <Text style={styles.WelcomeBack}>
                                        Welcome Back
                                    </Text>
                                    <Text style={styles.WelcomName}>
                                        Rachmat Ramadhan
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.Bell}>
                                    <Image source={require("../Assets/Bell.png")} />
                                </TouchableOpacity>
                            </View>
                            <ImageBackground source={require('../Assets/AtmBackground.png')} resizeMode={"contain"}
                                style={styles.ImgBackgroundAtm}>
                                <View style={styles.BalanceMainView}>
                                    <View>
                                        <Text style={styles.Balance}>
                                            Balance
                                        </Text>
                                        <Text style={styles.BalanceAmount}>
                                            $ 657.00
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={require("../Assets/AddCardInfo.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.CardNoView}>
                                    <Image source={require("../Assets/CardNo.png")} style={styles.CardNo} />
                                </View>
                                <View style={styles.ChipView}>
                                    <Image source={require("../Assets/Chip.png")} style={styles.Chip} />
                                    <Image source={require("../Assets/PaymentMethod.png")} style={styles.Chip} />
                                </View>

                            </ImageBackground>
                            <Image source={require("../Assets/Dots.png")} style={styles.Dots} />
                        </View>
                    </ImageBackground>
                </ImageBackground>
                <View style={styles.FlatListView}>
                    <FlatList contentContainerStyle={styles.ContainerSty} data={CategoryArray}
                        numColumns={4}
                        renderItem={({ item, index }) => {
                            return (
                                <View>
                                    <TouchableOpacity style={styles.TouchableCategory}>
                                        <Image source={item.category} style={styles.Category} />
                                    </TouchableOpacity>
                                    <View style={styles.CategoryNameView}>
                                        <Text style={styles.CategoryName}>
                                            {item.CategoryName}
                                        </Text>
                                    </View>
                                </View>
                            )
                        }} />
                </View>
                <View style={styles.GraphCardMainView}>
                    <View style={styles.GraphCardView}>
                        <Image source={require("../Assets/GraphCard.png")}
                            style={styles.GraphCard} />
                    </View>
                </View>
            </ScrollView>
            <Modal isVisible={showModal} animationIn={"slideInUp"}
                animationOut={"slideInDown"} animationInTiming={300}
                animationOutTiming={300}
                onBackdropPress={() => { setShowModal(false) }}
                style={styles.ModalSty}>
                <View style={styles.ModalMainView}>
                    <ImageBackground
                        source={require("../Assets/TransparentGreen.png")}
                        style={styles.ImgBackgroundGreen}>
                        {showModal && <DropBox closeModal={() => { setShowModal(false) }} />}
                    </ImageBackground>
                </View>
            </Modal>
            <View style={styles.MainViewFooter}>
                <Footer showScan={true} onPress={() => { setShowModal(true) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    OrangeStrips: {
        height: sizes.height * 50
    },
    BlueStrips: {
        height: sizes.height * 43,
        justifyContent: 'flex-end',
        paddingBottom: sizes.padding * 6
    },
    WelcomeBackView: {
        flexDirection: "row",
        height: sizes.height * 5,
        width: "100%",
        paddingLeft: sizes.padding * 3,
        justifyContent: "space-between"
    },
    WelcomeBack: {
        marginTop: -sizes.margin * 0.2
    },
    WelcomName: {
        color: "#000",
        fontWeight: "700"
    },
    Bell: {
        paddingRight: sizes.padding * 3
    },
    ImgBackgroundAtm: {
        height: sizes.height * 26,
        width: sizes.width * 36,
        alignSelf: 'center',
        borderRadius: sizes.radius,
        overflow: 'hidden',
        marginTop: sizes.margin / 3
    },
    BalanceMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.padding * 3,
        marginTop: sizes.margin * 3
    },
    Balance: {
        color: "#fff",
        fontWeight: "300",
        fontSize: sizes.f5
    },
    BalanceAmount: {
        color: "#fff",
        fontWeight: "800",
        fontSize: sizes.f7,
        marginTop: sizes.margin / 2
    },
    CardNoView: {
        alignSelf: 'flex-start',
        paddingHorizontal: sizes.padding * 3,
        marginTop: sizes.margin * 3
    },
    CardNo: {
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    ChipView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: sizes.padding * 3.2,
        paddingRight: sizes.padding * 1.5,
        marginTop: sizes.margin * 3
    },
    Chip: {
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    Dots: {
        alignSelf: 'center',
        bottom: -sizes.margin / 2
    },
    FlatListView: {
        minHeight: sizes.height * 24,
        width: "100%",
        marginTop: -sizes.margin * 9
    },
    ContainerSty: {
        flexGrow: 1,
        alignItems: 'center',
        top: -sizes.margin
    },
    TouchableCategory: {
        height: sizes.height * 8,
        width: sizes.height * 8,
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: sizes.margin,
        borderRadius: sizes.radius / 2,
        elevation: 3
    },
    Category: {
        resizeMode: 'contain'
    },
    CategoryNameView: {
        width: sizes.width * 8.5,
        alignItems: 'center',
        marginLeft: sizes.margin
    },
    CategoryName: {
        color: "grey",
        fontSize: sizes.f9 / 1.6,
        fontWeight: "500",
        top: -sizes.margin / 2
    },
    GraphCardMainView: {
        height: sizes.height * 33,
        width: "100%",
        top: -sizes.margin,
        alignItems: "center"
    },
    GraphCardView: {
        alignSelf: 'center'
    },
    GraphCard: {
        width: sizes.width * 39.5,
        resizeMode: "cover"
    },
    ModalSty: {
        flex: 1,
        width: "100%",
        margin: 0
    },
    ModalMainView: {
        flex: 1,
        width: "100%",
        margin: 0
    },
    ImgBackgroundGreen: {
        flex: 1
    },
    MainViewFooter: {
        height: sizes.height * 8,
        width: "100%",
        position: 'absolute',
        bottom: 0
    }
})