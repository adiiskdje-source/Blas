import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../theme';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Viajero del Mundo</Text>
      <Text style={styles.description}>
        Transportes Tomy te acompaña a descubrir nuevos lugares. Disfruta el
        camino con un servicio cómodo, seguro y pensado para ti.
      </Text>

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Logo de Transportes Tomy"
      />

      <Link href="/contacto" asChild>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Click Aquí</Text>
          <FontAwesome5 name="arrow-right" size={14} color={colors.surface} />
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 32,
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    alignSelf: 'stretch',
    color: colors.ink,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 12,
  },
  logo: {
    width: 250,
    height: 250,
    maxWidth: '90%',
  },
  button: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    backgroundColor: '#111111',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
