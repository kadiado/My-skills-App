import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleSkillOnScreen() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Kadi</Text>
      <TextInput style={styles.textInput} placeholder="Digite um texto" placeholderTextColor="#e1e1e1" onChangeText={setNewSkill} />
      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleSkillOnScreen}>
        <Text style={[styles.textButton]}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 20 }]}>My Skills</Text>

      {mySkills.map((skill) => (
        <TouchableOpacity style={styles.skills}>
          <Text style={[styles.title]}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#e1e1e1",
    fontWeight: "700",
    fontSize: "30",
  },
  textInput: {
    backgroundColor: "#2f2f2f",
    padding: 15,
    marginTop: 20,
    color: "#e1e1e1",
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
  },
  textButton: {
    color: "#e1e1e1",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  skills: {
    backgroundColor: "#2f2f2f",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 50,
    padding: 15,
  },
});
