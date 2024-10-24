import * as React from 'react';
import { Button, View } from 'react-native';
import {styles} from '../util/styles'
import {RootStackParamList, ScreenProps} from '../util/types'

function NotificationsScreen({ navigation }: ScreenProps<'Notifications'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default NotificationsScreen;