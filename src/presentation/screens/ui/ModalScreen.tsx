import { Modal, Platform, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <CustomView margin>
        <Title text="Modal" safe />

        <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

        <Modal visible={isVisible} animationType="slide">
            <View style={styles.modalOverlay}>
            <View style={styles.modalHeader}>
                <Title text="Modal Content" safe />
            </View>

            <View style={styles.modalSpacer} />

            <Button
                text="Cerrar Modal"
                onPress={() => setIsVisible(false)}
                styles={styles.closeButton}
            />
            </View>
        </Modal>
        </CustomView>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    modalHeader: {
        paddingHorizontal: 10,
    },
    modalSpacer: {
        flex: 1,
    },
    closeButton: {
        height: Platform.OS === 'android' ? 40 : 60,
        borderRadius: 0,
    },
});