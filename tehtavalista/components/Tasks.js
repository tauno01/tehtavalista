import { StyleSheet, View, Text, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'

const Tasks = ({ tasks, add, remove }) => {
    const [description, setDescription] = useState('')

    const save = () => {
        if (description.trim()) {
            add(description)
            setDescription('')
        }
    }

    return (
        <>
            <View style={styles.form}>
                <TextInput 
                    value={description} 
                    onChangeText={text => setDescription(text)} 
                    placeholder='Add task...' 
                />
                <Button title='Save' onPress={save} />
            </View>
            <FlatList 
                data={tasks}
                keyExtractor={(item) => item.key.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => remove(item.key)}>
                        <Text style={styles.task}>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </>
    )
}

export default memo(Tasks)

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  });