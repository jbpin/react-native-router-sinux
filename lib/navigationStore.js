import { Store, Command } from 'sinux';
import { NavigationExperimental } from 'react-native';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const navigationStore = new Store({ index: 0, key: 'App', routes: [] }, ...Object.keys(NavigationStateUtils));

for (const method in NavigationStateUtils) {
  new Command(navigationStore[method], NavigationStateUtils[method]);
}

export default navigationStore;
