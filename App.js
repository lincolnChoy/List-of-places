import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

import configureStore from './src/store/configureStore';

const store = configureStore();

/* Register screens */
Navigation.registerComponent("places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);

/* Start app */
Navigation.startSingleScreenApp({

	screen : {
		screen: "places.AuthScreen",
		title : "Login"
	}
});