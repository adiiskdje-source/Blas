import { FontAwesome5 } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from '../theme';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.ink,
          headerTitleStyle: { fontWeight: '600' },
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.ink,
          drawerActiveBackgroundColor: colors.accent,
          drawerLabelStyle: { fontSize: 14 },
          drawerItemStyle: { borderRadius: 24, marginHorizontal: 8 },
          drawerStyle: { backgroundColor: colors.surface },
          sceneStyle: { backgroundColor: '#F1F1F1' },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Inicio',
            drawerLabel: 'Inicio',
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="nosotros"
          options={{
            title: 'Nosotros',
            drawerLabel: 'Nosotros',
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="envelope" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="contacto"
          options={{
            title: 'Contactos',
            drawerLabel: 'Contactos',
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
