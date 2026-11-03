import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

const aboutText =
  'En Transportes Tomy brindamos servicio turístico y de personal, conectando personas con sus destinos con dedicación, responsabilidad y comodidad.';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Nosotros</Text>
      <Text style={styles.description}>{aboutText}</Text>

      <Image
        source={require('../../assets/banner02.png')}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel="Vista de la ciudad y áreas verdes"
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

      <Text style={styles.description}>{aboutText}</Text>
      <View style={styles.note}>
        <FontAwesome5 name="map-marker-alt" size={17} color={colors.primary} />
        <Text style={styles.noteText}>
          Cada viaje es una nueva oportunidad para llegar más lejos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 20,
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
  image: {
    width: '100%',
    height: 205,
    borderRadius: 4,
    marginBottom: 10,
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
    marginBottom: 16,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
  note: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  noteText: {
    flex: 1,
    color: colors.ink,
    fontSize: 13,
    lineHeight: 19,
  },
});
