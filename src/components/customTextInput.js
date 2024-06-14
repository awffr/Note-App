import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
    const styles = StyleSheet.create({
        inputContainer: {
          marginBottom: 20,
        },
        label: {
          fontSize: 14,
          color: '#007BFF',
          marginBottom: 5,
          fontWeight: '600',
        },
        input: {
          borderWidth: 1,
          borderColor: '#007BFF',
          borderRadius: 5,
          padding: 10,
          fontSize: 16,
          color: '#333',
        },
        textArea: {
          height: 100,
        },
      })

  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  )
}

export default CustomTextInput