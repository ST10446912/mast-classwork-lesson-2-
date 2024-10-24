
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the parameter list for your stack navigator
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
  Settings: undefined;
};

// Define the type for the navigation prop in each screen
export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};
