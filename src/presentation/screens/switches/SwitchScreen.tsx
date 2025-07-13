import {useState} from 'react';

import { CustomView } from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';

import { StyleSheet } from 'react-native';
import { Separator } from '../../components/ui/separator';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    return (
        <CustomView style={styles.SwitchScreen}>
        <Card>
            <CustomSwitch
            isOn={state.isActive}
            onChange={value => setState({...state, isActive: value})}
            text="¿Está activo?"
            />

            <Separator />

            <CustomSwitch
            isOn={state.isHungry}
            onChange={value => setState({...state, isHungry: value})}
            text="¿Tiene hambre?"
            />

            <Separator />

            <CustomSwitch
            isOn={state.isHappy}
            onChange={value => setState({...state, isHappy: value})}
            text="¿Es feliz?"
            />

            {/* 
            <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#8316a4' : '#f4f3f4'}
            ios_backgroundColor="#571818"
            onValueChange={toggleSwitch}
            value={isEnabled}
            /> */}
        </Card>
        </CustomView>
    );
};

const styles = StyleSheet.create({
    SwitchScreen: {
        marginTop: 100,
        paddingHorizontal: 10
    },
});