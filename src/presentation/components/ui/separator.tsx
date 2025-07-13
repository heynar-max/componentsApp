import {  StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/theme';


interface Props {
    style?: StyleProp<ViewStyle>;
}


export const Separator = ({ style }:Props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.separator, style]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
    },
    separator: {
        alignSelf: 'center',
        width: '80%',
        height: 1,
        backgroundColor: colors.text,
        opacity: 0.1,
        marginVertical: 8,
    },
});