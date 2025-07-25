import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MenuItem, Title } from '../../components';
import { CustomView } from '../../components/ui/CustomView';

const animationMenuItems = [
    // 01-animationMenuItems
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
]
export const menuItems = [

    // 02-menuItems
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionListScreen',
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlidesScreen',
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen',
    },

];

const uiMenuItems = [
    // 03- uiMenuItems
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },
    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen',
    },
]

export const HomeScreen = () => {
    return (
        <CustomView margin>
            
                <ScrollView>
                    <Title text='Opciones de menu' safe/>

                    {/* animationMenuItems
                        menuItems
                        uiMenuItems */}

                        {animationMenuItems.map((item, index) => (
                            <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === animationMenuItems.length - 1}
                            />
                        ))}

                        <View style={styles.separador} />
                        {uiMenuItems.map((item, index) => (
                            <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === uiMenuItems.length - 1}
                            />
                        ))}

                        <View style={styles.separador} />
                        {menuItems.map((item, index) => (
                            <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                            />
                        ))}

                        <View style={styles.separador} />
                </ScrollView>
            </CustomView>
            
        
    )
}

const styles = StyleSheet.create({
    separador: {
        marginTop: 30,
    },
});