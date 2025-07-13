import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';



export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition} = useAnimation();


    return (
        <View style={ styles.container }>
        
        <Animated.View style={[
            styles.purpleBox,
            {
                opacity: animatedOpacity,
                transform: [{
                    translateY:animatedTop
                }]
            }
        ]}/>

        <Pressable onPress={ () => {
            fadeIn({});
            startMovingTopPosition({ 
                initialPosition:-100,
                easing: Easing.bounce,
                duration:750,
            })
        }} style={styles.button}>
            <Text>Fadein</Text>
        </Pressable>
        <Pressable onPress={ () => fadeOut({})} style={styles.button}>
            <Text>FadeOut</Text>
        </Pressable>
        
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
    button: {
    marginTop: 10,
    },
})