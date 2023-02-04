import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 8,
  },

  name: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
  },

  button: {
    backgroundColor: '#E23C44',
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  textButton: {
    fontSize: 32,
    color: '#f2f2f2',
  }
})