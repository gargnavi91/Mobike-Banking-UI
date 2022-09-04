import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { sizes } from '../../Assets/Theme/theme'

export default function DropBox({ closeModal }) {
    return (
        <View style={styles.DropBoxContainer}>
            <TouchableOpacity style={styles.TouchableShare}>
                <Image source={require("../../Assets/Share.png")} />
            </TouchableOpacity>
            <View style={styles.DropBoxTextMainView}>
                <Image source={require("../../Assets/Dropbox.png")} />
                <View style={styles.DropboxView}>
                    <Text style={styles.Dropbox}>
                        Drop Box
                    </Text>
                    <Image source={require("../../Assets/Check.png")}
                        style={styles.DropboxTick} />
                </View>
                <Text style={styles.DropboxTime}>12:30 AM</Text>
                <View style={styles.AmountView}>
                    <Text style={styles.Amount}>
                        $550
                    </Text>
                </View>
                <View style={styles.MainViewAmountList}>
                    <View style={styles.DropboxProView}>
                        <View>
                            <Text style={styles.DropboxPro}>Drop Box Pro 500 GB</Text>
                        </View>
                        <View>
                            <Text style={styles.DropboxPro}>$400</Text>
                        </View>
                    </View>
                    <View style={styles.DropboxProView}>
                        <View>
                            <Text style={styles.DropboxPro}>Workspace</Text>
                        </View>
                        <View>
                            <Text style={styles.DropboxPro}>$50</Text>
                        </View>
                    </View>
                    <View style={styles.DropboxProView}>
                        <View>
                            <Text style={styles.DropboxPro}>Stream Maxx</Text>
                        </View>
                        <View>
                            <Text style={styles.DropboxPro}>$100</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.TouchableCloseBtn} onPress={() => { closeModal() }}>
                        <Text style={styles.CloseBtn}>
                            Ok, Close
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DropBoxContainer: {
        backgroundColor: '#fff',
        position: "absolute", width: "100%", bottom: 0,
        borderTopLeftRadius: sizes.radius * 4,
        borderTopRightRadius: sizes.radius * 4,
        paddingBottom: sizes.padding * 5
    },
    TouchableShare: {
        width: "100%",
        alignItems: "flex-end",
        paddingRight: sizes.padding * 3,
        paddingTop: sizes.padding * 3
    },
    DropBoxTextMainView: {
        width: "100%",
        alignItems: "center"
    },
    DropboxView: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: sizes.margin
    },
    Dropbox: {
        color: "#000",
        fontWeight: "400",
        fontSize: sizes.f7
    },
    DropboxTick: {
        paddingHorizontal: sizes.padding * 1.3,
        resizeMode: "contain"
    },
    DropboxTime: {
        marginVertical: sizes.margin / 2,
        fontSize: sizes.f5, color: "silver"
    },
    AmountView: {
        width: "100%",
        alignItems: "center",
        marginVertical: sizes.margin
    },
    Amount: {
        color: "#000",
        fontWeight: "900",
        fontSize: sizes.f9
    },
    MainViewAmountList: {
        minHeight: sizes.height * 10,
        width: "90%",
        paddingHorizontal: sizes.padding * 1.8
    },
    DropboxProView: {
        height: sizes.height * 4,
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center"
    },
    DropboxPro: {
        color: "#000",
        fontSize: sizes.f5
    },
    DropboxProAmount: {
        color: "#000",
        fontSize: sizes.f5
    },
    TouchableCloseBtn: {
        height: sizes.height * 5,
        width: sizes.width * 28,
        backgroundColor: "#229397",
        marginTop: sizes.margin,
        borderRadius: sizes.radius * 1.5,
        alignItems: 'center', alignSelf: 'center',
        justifyContent: 'center',
        marginTop: sizes.margin * 2.5
    },
    CloseBtn: {
        color: "#fff",
        fontWeight: "800",
        fontSize: sizes.f7
    }

})