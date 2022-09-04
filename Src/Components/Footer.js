import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { sizes } from '../Assets/Theme/theme'

export default function Footer({ showScan, onPress }) {

    return (
        <View style={{ height: sizes.height * 8, width: '100%' }}>
            {showScan === true && <TouchableOpacity onPress={() => onPress()}>
                <Image source={require("../Assets/ScanIcon.png")} style={styles.ScanSty} />
            </TouchableOpacity>}
            <View style={styles.FooterMainSty} >
                <View style={[styles.FooterSty, { justifyContent: 'flex-start' }]}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.FooterEndSection}>
                        <Image source={require("../Assets/HomeIcon.png")} style={styles.FooterIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.FooterStartSection, { alignItems: "flex-start", borderTopRightRadius: sizes.radius * 13 }]}>
                        <Image source={require("../Assets/FooterIcon2.png")} style={styles.FooterIcon} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.FooterSty, { justifyContent: 'flex-end' }]}>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.FooterStartSection, {
                        alignItems: "flex-end",
                        borderTopLeftRadius: sizes.radius * 10,
                    }]}>
                        <Image source={require("../Assets/FooterIcon3.png")} style={styles.FooterIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.FooterEndSection}>
                        <Image source={require("../Assets/FooterIcon4.png")} style={styles.FooterIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ScanSty: {
        height: sizes.height * 8, width: sizes.height * 8, resizeMode: 'contain',
        alignSelf: 'center', bottom: sizes.margin * 4
    },
    FooterMainSty: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        top: -sizes.margin * 7
    },
    FooterSty: {
        height: sizes.height * 8,
        width: "50%",
        flexDirection: "row",
    },
    FooterEndSection: {
        height: sizes.height * 8, width: "43%", backgroundColor: '#229397',
        justifyContent: "center", alignItems: "center",
    },
    FooterStartSection: {
        height: sizes.height * 8, width: "45%",
        justifyContent: "center", paddingLeft: sizes.padding * 1.5,
        backgroundColor: '#229397'
    },
    FooterIcon: { height: sizes.height * 3, width: sizes.height * 3, resizeMode: 'contain' }
})