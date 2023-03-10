import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "../screens/NoteScreens/Notes";
import NoteDetail from "../screens/NoteScreens/NoteDetail";
import AddNote from "../screens/NoteScreens/AddNote";
import colors from "../constants/colors";

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.secondary },
      }}
    >
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ animationEnabled: true, title: "Notes" }}
      />
      <Stack.Screen
        name="NoteDetail"
        component={NoteDetail}
        options={{ animationEnabled: true, title: "Note Details" }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNote}
        options={{ animationEnabled: true, title: "Add Note" }}
      />
    </Stack.Navigator>
  );
};

export default NotesStack;
