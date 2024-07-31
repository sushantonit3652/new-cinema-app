// src/AppScreens/LoginScreen.tsx
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Pinkbtn from './components/pinkbtn';
import { globalStyles } from '../global';
import axios from 'axios'; // Import axios for API requests
import API_URL from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Signup: undefined;
  // Add other routes here if needed
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const handleLogin = async () => {
    let valid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        const response = await axios.post(`${API_URL}/api/auth/login`, { email, password }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Assuming response contains a token
        const { token } = response.data;

        // Store the token (you might want to use a more secure storage option)
        await AsyncStorage.setItem('token', token);

        // Navigate to the home screen
        navigation.navigate('BottomTabNavigator');
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Login error:', error.response.data);
          // Handle specific error messages here
          setEmailError(error.response.data.error || 'Login failed');
        } else if (error.request) {
          // Request was made but no response received
          console.error('Login error: No response received from server');
        } else {
          // Something happened in setting up the request
          console.error('Login error:', error.message);
        }
        // Handle error (e.g., show an error message to the user)
      }
    }
  };

  return (
    <View style={[globalStyles.main, styles.main]}>
      <ScrollView style={globalStyles.scroll}>
        <View style={styles.navcnt}>
          <View style={styles.logincnt}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={globalStyles.backarrow}>
              <Image source={require('../assets/backarrow.png')} />
            </TouchableOpacity>
            <Text style={globalStyles.navhedingtext}>Log In</Text>
          </View>
          <Text style={globalStyles.skiptext} onPress={() => navigation.navigate('BottomTabNavigator')} >
            SKIP
          </Text>
        </View>
        <View style={[globalStyles.container, styles.container]}>

          <Text style={styles.signtext}>
            Sign in to continue to your favorite shows and movies.
          </Text>
          <View style={globalStyles.googlefbcnt}>
            <View style={globalStyles.googlecnt}>
              <Image source={require('../assets/googleicon.png')} />
            </View>
            <View style={globalStyles.fbcnt}>
              <Image source={require('../assets/facebookicon.png')} />
            </View>
          </View>
          <View style={styles.formcnt}>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={[
                styles.label,
                isEmailFocused || email ? styles.labelFocused : null,
                emailError ? styles.errorText : null
              ]}>
                {emailError ? emailError : 'Email'}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  emailError && styles.inputError,
                  isEmailFocused && styles.inputFocused
                ]}
                placeholderTextColor={'grey'}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={[
                styles.label,
                isPasswordFocused || password ? styles.labelFocused : null,
                passwordError ? styles.errorText : null
              ]}>
                {passwordError ? passwordError : 'Password'}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  passwordError && styles.inputError,
                  isPasswordFocused && styles.inputFocused
                ]}
                placeholderTextColor={'grey'}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
            </View>

            {/* Login Button */}
            <View style={styles.bottomcnt}>
              <Pinkbtn text="LOGIN" onPress={handleLogin} />

              <View style={styles.dontcnt}>
                <Text style={styles.donttext}>
                  Don't Have an Account?
                </Text>
                <Text style={styles.creattext} onPress={() => navigation.navigate('Signup')}>
                  Create Account
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
  navcnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  logincnt: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  formcnt: {
    flex: 1,
    paddingTop: 25
  },
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
  labelFocused: {
    color: 'white',
  },
  errorText: {
    color: 'red',
  },
  input: {
    borderWidth: 1.2,
    borderColor: '#6C6C6C',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: '#FFF',
  },
  inputFocused: {
    borderColor: '#DD3872',
  },
  inputError: {
    borderColor: 'red',
  },
  signtext: {
    fontSize: 18,
    color: '#878282',
  },
  bottomcnt: {
    marginTop: 20,
    alignItems: 'center',
  },
 
  dontcnt: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  donttext: {
    color: 'rgba(135, 130, 130, 1)',
  },
  creattext: {
    color: '#DD3872',
    marginLeft: 5,
  },
  container: {
    padding: 16,
  },
});

export default LoginScreen;
