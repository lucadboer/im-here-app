import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    marginTop: 48,
    fontSize: 32,
    color: '#f2f2f2',
    fontWeight: 'bold',
  },

  guests: {
    marginTop: 16,
    fontSize: 16,
    color: '#9ca3af'
  },

  form: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
  },

  input: {
    marginRight: 8,
    flex: 1,
    height: 56,
    padding: 16,

    backgroundColor: '#e5e7eb',

    borderRadius: 8,
  },

  button: {
    backgroundColor: '#8257E5',
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },

  textButton: {
    fontSize: 24,
    color: '#f2f2f2',
  }

});
