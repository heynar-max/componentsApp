import { Animated, Easing, StyleSheet } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';



export const Animation101Screen = () => {

    const { colors } = useContext( ThemeContext);

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition} = useAnimation();


    return (
        <CustomView style={ styles.container}>
        
        <Animated.View style={[
            styles.purpleBox,
            {
                opacity: animatedOpacity,
                backgroundColor: colors.primary,
                transform: [{
                    translateY:animatedTop
                }],
            }
        ]}/>

        <Button 
            text='FadeIn'
            onPress={ () => {
            fadeIn({});
            startMovingTopPosition({ 
                initialPosition:-100,
                easing: Easing.bounce,
                duration:750,
            })
        }} styles={styles.button}/>
        <Button text='FadeOut' onPress={ () => fadeOut({})} styles={styles.button}/>
        
        </CustomView>
    )
}




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    },
    button: {
    marginTop: 10,
    },
})