# reactNativeRouterSinux

Simple wrapper to use React Native Experimental Navigation

# How to use it

The first step is to create an initial component that use NavigationRoot. This is in general the first component that your application will load. (index.ios.js or whatever you decide).

NavigationRoot is tacking a props named `initialRoute` that allow the router to display the first view.

EveryChildren is considered in the stack if they have a props named `routeKey`. It's the key we will use in order to navigate.

```javascript

import { NavigationRoot } from 'react-native-router-sinux';

...

render() {
  return (
    <NavigationRoot initialRoute="home">
      <View routeKey="home">
        <Text> This is the home page</Text>
      </View>
      <View routeKey="first">
        <Text> This is the first page</Text>
      </View>
      <View routeKey="second">
        <Text> This is the second page</Text>
      </View>
    </NavigationRoot>
  )
}

```

Now we have our NavigationRoot setted we want to be able to navigate between views. For that we use `navigationStore`

`navigationStore` is a store writen in [Sinux](https://github.com/jbpin/sinux) that duplicate the behavior of `ExperimentalNavigation` helper `NavigationStateUtils`.

Method available in `NavigationStateUtils` are accessible through `navigationStore`.

```
  * back: Sets the focused route to the previous route.
  * forward: Sets the focused route to the next route.
  * get: Gets a route by key
  * has: Returns `true` at which a given route's key can be found in the routes of the navigation state.
  * indexOf: Returns the first index at which a given route's key can be found in the routes of the navigation state, or -1 if it is not present.
  * jumpTo: Sets the focused route of the navigation state by key.
  * jumpToIndex: Sets the focused route of the navigation state by index.
  * **pop**: Pops out a route from the navigation state. *Note that this moves the index to the positon to where the last route in the stack is at.*
  * **push**: Pushes a new route into the navigation state. *Note that this moves the index to the positon to where the last route in the stack is at.*
  * replaceAt: Replace a route by a key.
  * replaceAtIndex: Replace a route by a index.
  * reset: Resets all routes. *Note that this moves the index to the positon to where the last route in the stack is at if the param `index` isn't provided.*
```

In order to navigate to a new view simply import navigationStore and call the push function.

```javascript
import { navigationStore } from 'react-native-router-sinux';

...

navigationStore.push({ key: 'first' });
```

That's it.

In a same way to go back simply call pop function

```javascript
navigationStore.pop();
```


You can pass all the props supported by the `ExperimentalNavigation` component `NavigationCardStack` but `renderScene` and `navigationState` :

```javascript
{
  direction: NavigationGestureDirection ('horizontal' | 'vertical'),
  onNavigateBack?: Function,
  renderHeader: ?NavigationSceneRenderer,
  cardStyle?: any,
  style: any,
  gestureResponseDistance?: ?number,
}
```

### This is a first shot, please don't hesitate to request support on Sinux or this component.
