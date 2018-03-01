import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    headerContainer: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    displayContainer: {
        flex: 3,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputContainer: {
        flex: 3,
        backgroundColor: '#e5e5e5'
    },

    wordContainer: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    hintContainer: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',

    },

    wordText: {

        fontSize: 36,
        fontWeight: 'bold'
    },

    hintText: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#595757'
    },

    inputButton: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: '#91AA9D',
            marginRight: 2.5,
            marginLeft: 2.5,
            borderRadius: 10,
            elevation: 3,
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