import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button, TouchableOpacity} from 'react-native';

import {finishPage} from './styles';

import {useSelector, useDispatch} from 'react-redux'

const Finish = (props) => {
  const userScore = useSelector(global => global.score);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>     

        <View style={finishPage.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Intro")
              dispatch({type: 'SET_RESET'});
            }}>
            <Text style={finishPage.buttonText}>Game Again</Text>
          </TouchableOpacity>
        </View>
    </View>

    </SafeAreaView>
  );
};

export {Finish};