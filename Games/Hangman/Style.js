import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    headerContainer: {
        flex: 0.5,
        backgroundColor: '#efefef'
    },
    displayContainer: {
        flex: 3.5,
        backgroundColor: '#efefef'
    },

    inputContainer: {
        flex: 3,
        backgroundColor: '#d1d1d1'
    },

    wordContainer: {
        flex: 1,
        backgroundColor: '#efefef'
    },

    hintContainer: {
        flex: 1,
        backgroundColor: '#efefef'
    },

    wordText: {

        fontSize: 36,
        fontWeight: 'bold'
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