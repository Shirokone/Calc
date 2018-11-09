import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultbox: {
    flex: 1,
    paddingRight: 10,
    backgroundColor: '#484a4c',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: 0.5,
    borderColor: '#484a4c',
  },
  buttonbox: {
    flex: 4,
  },
  insidebuttonbox: {
    flex: 1,
  },
  numrow:{
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth: 0.5,
    borderColor: '#484a4c',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  resulttext:{
    color: 'white',
    fontSize: 45,
    textAlign: 'right',
  },
});
