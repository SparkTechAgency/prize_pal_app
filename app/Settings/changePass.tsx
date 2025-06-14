import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import tw from "@/lib/tailwind";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const changePass = () => {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const { colorScheme } = useTheme();
  return (
    <KeyboardAvoidingView>
      <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
        <Pressable onPress={() => router.back()} style={tw` `}>
          <View style={tw`flex-row gap-6 justify-center items-center`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Terns and conditions
            </Text>
          </View>
        </Pressable>
        <Text> </Text>
      </View>
      <View style={tw`bg-base-light p-5 dark:bg-base-dark h-full`}>
        <Formik
          initialValues={{
            current_password: "",
            new_password: "",
            confirm_password: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={tw`flex-grow gap-5`}>
              {/* current_password */}
              <View
                style={tw`flex-row justify-between items-center gap-2 border-2 h-12 rounded-full px-3 `}
              >
                <View style={tw`flex-row items-center gap-3`}>
                  <Entypo name="lock" size={24} color="#777777" />
                  <TextInput
                    placeholder="Enter your current password"
                    value={values.current_password}
                    onChangeText={handleChange("current_password")}
                    onBlur={handleBlur("current_password")}
                    secureTextEntry={!showCurrentPassword}
                    errorText={errors.current_password}
                  />
                </View>
                <Entypo
                  name={showCurrentPassword ? "eye" : "eye-with-line"}
                  size={20}
                  color="#777"
                  onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                />
              </View>
              {/*New Password */}
              <View
                style={tw`flex-row items-center justify-between gap-2 border-2 h-12 rounded-full px-3 `}
              >
                <View style={tw`flex-row items-center gap-3`}>
                  <Entypo name="lock" size={24} color="#777777" />
                  <TextInput
                    placeholder="Enter New Password"
                    value={values.new_password}
                    onChangeText={handleChange("new_password")}
                    secureTextEntry={!showNewPassword}
                    onBlur={handleBlur("new_password")}
                    errorText={errors.new_password}
                  />
                </View>
                <Entypo
                  name={showNewPassword ? "eye" : "eye-with-line"}
                  size={20}
                  color="#777"
                  onPress={() => setShowNewPassword(!showNewPassword)}
                />
              </View>
              {/* Confirm New Password */}
              <View
                style={tw`flex-row items-center justify-between gap-2 border-2 h-12 rounded-full px-3 `}
              >
                <View style={tw`flex-row items-center gap-3`}>
                  <Entypo name="lock" size={24} color="#777777" />
                  <TextInput
                    placeholder="Confirm New Password"
                    value={values.confirm_password}
                    onChangeText={handleChange("confirm_password")}
                    onBlur={handleBlur("confirm_password")}
                    secureTextEntry={!showConfirmPassword}
                    errorText={errors.confirm_password}
                  />
                </View>
                <Entypo
                  name={showConfirmPassword ? "eye" : "eye-with-line"}
                  size={20}
                  color="#777"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default changePass;
