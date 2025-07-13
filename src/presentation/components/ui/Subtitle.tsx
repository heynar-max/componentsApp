import { Text, StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

export const SubTitle = ({text, safe = false, backgroundColor = colors.background, }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
        style={[
            globalStyles.subTitle,
            styles.base,
            safe && { marginTop: top },
            { backgroundColor },
        ]}
        >
        {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    base: {
        marginBottom: 10,
    },
    });