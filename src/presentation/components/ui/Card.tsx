import { PropsWithChildren, useContext } from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {

    const { colors } = useContext( ThemeContext);


    return (
        <View style={[styles.card, style, {backgroundColor: colors.cardBackground}]}>
        {children}
        </View>
    );
    };

    const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 10,
    },
});