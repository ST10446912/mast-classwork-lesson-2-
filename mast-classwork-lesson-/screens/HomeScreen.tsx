import * as React from 'react';
import { Button, View } from 'react-native';
import {styles} from '../util/styles'
import {RootStackParamList, ScreenProps} from '../util/types'

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}



export default HomeScreen;