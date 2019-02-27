import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

    /* Execute async functions which return the icons and THEN register tabs */
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ])
    .then(
        (icons) => {
            Navigation.startTabBasedApp({

                tabs: [
                    {
                        screen: "places.FindPlaceScreen",
                        label: "Find place",
                        title: "Find place",
                        icon: icons[0]
                    },
                    {
                        screen: "places.SharePlaceScreen",
                        label: "Share place",
                        title: "Share place",
                        icon: icons[1]
                    }
                ]
            });
        }
    )

}

export default startTabs;