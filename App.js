import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './Screen/LoginScreen';
import { HomeScreen } from './Screen/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './reduxtk/store';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [localId, setLocalId] = useState("");

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-50}>
      <Provider store={store}>
      <SafeAreaView style={styles.container}>
      {
        isLogin 
        ? <HomeScreen p={{token, localId}}/> 
        : <LoginScreen p={{setToken, setIsLogin, setLocalId}} />
      }
    </SafeAreaView>
    </Provider>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '22%',
    marginBottom: '32%'
  },
});
