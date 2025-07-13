import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
        <ScrollView>
            <CustomView margin>
            <Title text="Text Inputs" safe />

            <Card>
                <TextInput
                style={globalStyles.input}
                placeholder="Nombre completo"
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={value => setForm({...form, name: value})}
                />

                <TextInput
                style={globalStyles.input}
                placeholder="Correo electrónico"
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => setForm({...form, email: value})}
                />

                <TextInput
                style={globalStyles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                onChangeText={value => setForm({...form, phone: value})}
                />
            </Card>

            <View style={styles.ViewHeight} />

            <Card>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{JSON.stringify(form, null, 2)}</Text>
            </Card>

            <View style={styles.ViewHeight} />

            <Card>
                <TextInput
                style={globalStyles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                onChangeText={value => setForm({...form, phone: value})}
                />
            </Card>
            </CustomView>

            <View style={styles.ViewHeight} />

        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    ViewHeight: {
        height: 20,
    },
});