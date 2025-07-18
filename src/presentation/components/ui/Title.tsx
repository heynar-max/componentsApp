import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {  globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ text, safe = false, white = false }: Props) => {

    const { top } = useSafeAreaInsets();
    const { colors } = useContext( ThemeContext);

    return (
        <Text
            style={[
                globalStyles.title,
                styles.base,
                safe && { marginTop: top },
                { color: white ? 'white' : colors.text },
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
});