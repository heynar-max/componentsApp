import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {
    return (
        <View style={[styles.card, style]}>
        {children}
        </View>
    );
    };

    const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10,
    },
});