import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useReducer } from 'react';
import Tasks from './components/Tasks';

const initialState = [];

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { key: Date.now(), description: action.payload }];
        case 'REMOVE_TASK':
            return state.filter(task => task.key !== action.payload);
        default:
            return state;
    }
};

export default function App() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);

    const addTask = (description) => {
        dispatch({ type: 'ADD_TASK', payload: description });
    };

    const removeTask = (key) => {
        dispatch({ type: 'REMOVE_TASK', payload: key });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <Tasks tasks={tasks} add={addTask} remove={removeTask} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    margin: 16
  }
});
