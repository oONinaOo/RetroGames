import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex:6,
        backgroundColor: '#193441'
    },

    inputContainer: {
        flex: 4,
        backgroundColor: '#3E606F'
    },

    inputButton: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: '#91AA9D',
            marginRight: 2.5,
            marginLeft: 2.5,
        },

        inputButtonText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white'
        },

         inputRow: {
             flex: 1,
             flexDirection: 'row',
             justifyContent:'space-between',
             marginBottom: 5,
             marginTop: 5

         }
});

export default Style;