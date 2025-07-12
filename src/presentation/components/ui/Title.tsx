import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ text, safe = false, white = false }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={[
                globalStyles.title,
                styles.base,
                safe && { marginTop: top },
                white ? styles.whiteText : styles.blackText,
            ]}
            >{ text }
        </Text>
    )
}

const styles = StyleSheet.create({
    base: {
        marginBottom: 10,
    },
    whiteText: {
        color: 'white',
    },
    blackText: {
        color: colors.text,
    },
});