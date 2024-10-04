import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

const TAMANHO_FONTE_MINIMO = 12;
const TAMANHO_FONTE_MAXIMO = 32;

export default function App() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(16);

  const alternarModo = useCallback(() => {
    setModoEscuro((prevModoEscuro) => !prevModoEscuro);
  }, []);

  const aumentarFonte = useCallback(() => {
    setTamanhoFonte((prevTamanho) =>
      prevTamanho < TAMANHO_FONTE_MAXIMO ? prevTamanho + 2 : prevTamanho
    );
  }, []);

  const diminuirFonte = useCallback(() => {
    setTamanhoFonte((prevTamanho) =>
      prevTamanho > TAMANHO_FONTE_MINIMO ? prevTamanho - 2 : prevTamanho
    );
  }, []);

  const corTexto = modoEscuro ? '#fff' : '#000';
  const corFundo = modoEscuro ? '#333' : '#fff';

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: corTexto }]}>Modo Escuro</Text>
        <Switch value={modoEscuro} onValueChange={alternarModo} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Aumentar Fonte" onPress={aumentarFonte} />
        <Button title="Diminuir Fonte" onPress={diminuirFonte} />
      </View>

      <Text style={[styles.sampleText, { fontSize: tamanhoFonte, color: corTexto }]}>
        Este é um texto de exemplo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sampleText: {
    textAlign: 'center',
  },
});
