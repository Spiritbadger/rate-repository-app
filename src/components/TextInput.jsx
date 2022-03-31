import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorInputField: {
    borderColor: '#d73a4a',
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    margin: 5
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = (error ? styles.errorInputField: [style]);

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;