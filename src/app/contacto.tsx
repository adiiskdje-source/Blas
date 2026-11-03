import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../theme';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function sendMessage() {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Completa tus datos', 'Escribe tu nombre y correo para continuar.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Correo no válido', 'Revisa el formato de tu correo electrónico.');
      return;
    }

    Alert.alert('¡Gracias!', `Recibimos tus datos, ${name.trim()}.`);
    setName('');
    setEmail('');
  }

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Contactos</Text>
      <Image
        source={require('../../assets/banner03.png')}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel="Una ruta de la ciudad"
      />

      <View style={styles.form}>
        <TextInput
          accessibilityLabel="Escribe tu nombre"
          autoCapitalize="words"
          onChangeText={setName}
          placeholder="Escribe tu Nombre"
          placeholderTextColor="#444444"
          returnKeyType="next"
          style={styles.input}
          value={name}
        />
        <TextInput
          accessibilityLabel="Escribe tu correo"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Escribe tu Correo"
          placeholderTextColor="#444444"
          returnKeyType="send"
          style={styles.input}
          value={email}
        />
        <Pressable
          accessibilityRole="button"
          onPress={sendMessage}
          style={({ pressed }) => [styles.submitButton, pressed && styles.pressed]}
        >
          <Text style={styles.submitButtonText}>ENVIAR</Text>
        </Pressable>
        <Text style={styles.disclaimer}>
          Demo: el formulario valida los datos, pero aún no los envía a un servidor.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 32,
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 150,
    marginBottom: 14,
  },
  form: {
    width: '100%',
    backgroundColor: '#FFA500',
    padding: 16,
    gap: 12,
  },
  input: {
    minHeight: 48,
    backgroundColor: colors.surface,
    color: colors.ink,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  submitButton: {
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
    borderRadius: 11,
  },
  submitButtonText: {
    color: colors.surface,
    fontSize: 13,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
  disclaimer: {
    color: '#3D2B00',
    fontSize: 11,
    lineHeight: 16,
  },
});
