import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { AuthProvider } from './src/context/Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{"Advance api service"}</Text>
      </SafeAreaView>
    </AuthProvider>
  )
}