import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../global';
import Pinkbtn from './components/pinkbtn';
import Lightbtn from './components/lightpinkbtn';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import API_URL from './config';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);


  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSignup = async () => {
    let valid = true;

    // Validate name
    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

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
        console.log('Signup request:', { name, email, password });
        console.log('API URL:', API_URL);

        const response = await axios.post(`${API_URL}/api/auth/signup`, {
          name,
          email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log('Signup success:', response.data);
        // Handle success (e.g., navigate to another screen)
      } catch (error) {
        console.error('Signup error:', error.response ? error.response.data : error.message);
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
            <Text style={globalStyles.navhedingtext}>Sign Up</Text>
          </View>
          <Text style={globalStyles.skiptext} onPress={() => navigation.navigate('BottomTabNavigator')} >
            SKIP
          </Text>
        </View>
        <View style={[globalStyles.container, styles.container]}>
          <View style={styles.formcnt}>
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

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={[
                styles.label,
                isNameFocused || name ? styles.labelFocused : null,
                nameError ? styles.errorText : null
              ]}>
                {nameError ? nameError : 'Name'}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  nameError && styles.inputError,
                  isNameFocused && styles.inputFocused
                ]}
                placeholderTextColor={'grey'}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
            </View>

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
                ]} placeholderTextColor={'grey'}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </View>

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
                ]} placeholderTextColor={'grey'}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
            </View>

            {/* Signup Button */}
            <View style={styles.bottomcnt}>
              <Pinkbtn text="CREATE ACCOUNT" onPress={handleSignup} />
              <Lightbtn text="Testing" onPress={() => navigation.navigate('Getstartedscreen')} />
              <View style={styles.dontcnt}>
                <Text style={styles.donttext}>
                  Already Have an Account?
                </Text>
                <Text style={styles.creattext} onPress={() => navigation.goBack()}>
                  Log In
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
  formcnt: {},
  main: {
    flex: 1,
    backgroundColor: 'black',
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

  iconcnt: {
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    padding: 10,
  },
  cnt: {
    justifyContent: 'center',
    alignItems: 'center',
  },  formcnt: {
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

export default Signup;
