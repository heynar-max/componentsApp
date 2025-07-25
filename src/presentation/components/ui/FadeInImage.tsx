import { useState } from 'react';
import {
    ActivityIndicator,
    Animated,
    ImageStyle,
    StyleProp,
    StyleSheet,
    View,
} from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.container}>
        {isLoading && (
            <ActivityIndicator
            style={styles.loader}
            color="grey"
            size={30}
            />
        )}

        <Animated.Image
            source={{ uri }}
            onLoadEnd={() => {
            fadeIn({duration: 1000});
            setIsLoading(false);
            }}
            style={[style, { opacity: animatedOpacity }]}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
    },
});