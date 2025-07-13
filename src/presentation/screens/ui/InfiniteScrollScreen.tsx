import {useState} from 'react';
import { Text, View} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';


export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

        
        setNumbers([...numbers, ...newArray]);
        ;
    };

    return (
        <View style={{backgroundColor: 'black'}}>

            {/* flatlist entran cuando estan en pantalla  */}
        <FlatList
            data={numbers}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            
            renderItem={({item}) => (
                <Text style= {{
                    height: 300,
                    backgroundColor: colors.primary,
                    color: 'white',
                    fontSize: 50
                }}>
                    {item}
                </Text>
            )}
        />
        </View>
    );
    };

    