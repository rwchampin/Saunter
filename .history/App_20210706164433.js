/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Transition, animated, useSpring} from '@react-spring/native';
import AnimatedScreen from './AnimatedScreen';
import {Trail} from './src/animation';
const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <AnimatedScreen>
      <Text>Loading...</Text>
    </AnimatedScreen>
  );
}

const HomeScreen1 = props => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <AnimatedScreen style={{backgroundColor: 'red'}}>
      <Text>Signed in1!</Text>

      <Button
        title="Screen 2"
        onPress={() => {
          props.navigation.push('HomeScreen2');
        }}
      />
      <Button title="Sign out" onPress={signOut} />
    </AnimatedScreen>
  );
};

const HomeScreen2 = props => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <AnimatedScreen style={{backgroundColor: 'green'}}>
      <Text>Signed in2!</Text>
      <Button
        title="Screen 2"
        onPress={() => props.navigation.push('HomeScreen1')}
      />
      <Button title="Sign out" onPress={signOut} />
    </AnimatedScreen>
  );
};

const SignInScreen = () => {
  const [open, setOpen] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  const btnSpring = useSpring({
    from: {marginTop: -500},
    to: {marginTop: 0},
    delay: 00,
  });

  return (
    <AnimatedScreen>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('./img/city1.jpg')}>
        {/* <Trail open={open}>
          <View>
            <Text>S</Text>
          </View>
          <View>
            <Text>A</Text>
          </View>
          <View>
            <Text>U</Text>
          </View>
          <View>
            <Text>N</Text>
          </View>
          <View>
            <Text>T</Text>
          </View>
          <View>
            <Text>E</Text>
          </View>
          <View>
            <Text>R</Text>
          </View>
        </Trail> */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <animated.View style={btnSpring}>
          <Button
            title="Sign in"
            onPress={() => signIn({username, password})}
          />
        </animated.View>
      </ImageBackground>
    </AnimatedScreen>
  );
};

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [loaded, set] = React.useState(false);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  const styles = useSpring({opacity: loaded ? 1 : 0});
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen1" headerMode="none">
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',

                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <>
              <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
              <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
