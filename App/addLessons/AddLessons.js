import React, {Component} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';

const AddLessons = ({navigation}) => {
    return (
        <View style={{flex:1}}>
          <View style={styles.inputs}>
            <Text>
              Lesson Title
            </Text>
            <TextInput placeholder='exp: Chapitre 4: Communication entre applications'/>
            <Text>
              Date to revise
            </Text>
            <View style={styles.dateCard}>
              <View style={styles.date}>
                <Text>
                  Month
                </Text>
                <TextInput style={styles.dateInput} placeholder='exp:04'/>
              </View>
              <View style={styles.date}>
                <Text>
                  Day
                </Text>
                <TextInput style={styles.dateInput} placeholder='exp:05'/>
              </View>
            </View>
          </View>
          <Button title='navigate' onPress={()=>navigation.navigate('Home')} />
        </View>
    )
  }

export default AddLessons;