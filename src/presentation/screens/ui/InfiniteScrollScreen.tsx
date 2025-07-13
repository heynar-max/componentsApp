import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../config/theme/theme';


export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
        setTimeout(() => {
        setNumbers([...numbers, ...newArray]);
        }, 3000);
    };

    return (
        <View style={styles.container}>

            {/* flatlist entran cuando estan en pantalla  */}
        <FlatList
            data={numbers}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <ListItem number={item} />}
            ListFooterComponent={ListFooter}
        />
        </View>
    );
    };

    interface ListItemProps {
    number: number;
    }

    const ListItem = ({ number }: ListItemProps) => {
    return (
        <Image
        source={{uri: `https://picsum.photos/id/${number}/500/400`}}
        style={styles.image}
        />
    );
    };

    const ListFooter = () => (
    <View style={styles.footer}>
        <ActivityIndicator size={40} color={colors.primary} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    image: {
        height: 400,
        width: '100%',
    },
    footer: {
        height: 150,
        justifyContent: 'center',
    },
});