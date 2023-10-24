import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert  } from 'react-native';
import CheckBox from 'react-native-check-box';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import API from "../API/API";

const Login = ({navigation}) => {
	const [input, setinput] = useState({
		email:"",
		password:"",
	});
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true); 
  const [isCheck, setisCheck] = useState(false);

  function handelInput(name, value){
      setinput(prevState => ({...prevState, [name]: value}));
  }

	function handleSubmit(e){
		e.preventDefault();
		let errSubmit={};
		let flag=true;
		if(input.email==""){
			Alert.alert('Vui Long Nhap emaail');
			errSubmit.name="";
		}
		if(input.password==""){
			Alert.alert('vui long nhap PassWord');
		}

		if(input.email == "admin" && input.password == "123"){
			navigation.navigate("Home");
		}
	}

  	return (
		<ScrollView  style={styles.container}>
			<Text style={styles.title}>Đăng nhập</Text>
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text value={input.email}  style={{color:"rgb(177,177,150)"}}>Email hoặc User name </Text><Text style={{color:'red'}}>*</Text>
			</View>
      <TextInput
            style={styles.input}
            placeholder="Email"
            value={input.email}
            onChangeText={(text) => handelInput('email', text)}
        />
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text value={input.password} style={{color:"rgb(177,177,150)"}}>Nhập mật khẩu </Text><Text style={{color:'red'}}>*</Text>
			</View>
			<View style={{position:"relative"}}>
			<TextInput
            style={styles.input}
            placeholder="Password"
            value={input.password}
            onChangeText={(text) => handelInput('password', text)}
            secureTextEntry={isHideConfirmPassword}
        />
				<FontAwesome name={isHideConfirmPassword ? "eye-slash" : "eye"} style={{position:"absolute",right:0, top:10}} size={17} onPress = {()=> setIsHideConfirmPassword(!isHideConfirmPassword)}/>
			</View>
			<View style={styles.checkbox}>
				<CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue'/>
        <Text style={styles.checkboxText}>Ghi nhớ mật khẩu </Text><TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={styles.checkboxTextBlue}>Đăng ký tài khoản</Text></TouchableOpacity>
			</View>
			<View  style={styles.btnSubmit}>
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>Đăng nhập</Text>
				</TouchableOpacity>
			</View>
    	</ScrollView>
  	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingBottom:30,
    padding:10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
	marginTop:20
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontStyle: 'italic',

  },
  checkbox: {
	flexDirection:'row',
    margin: 10,
  },
  checkboxText: {
    fontSize: 13,
	color:"rgb(177,177,177)",
	marginTop:2
  },
  checkboxTextBlue: {
    fontSize: 13,
	color:"blue",
	textDecorationLine:"underline",
	marginTop:2
  },
  listItem:{
	paddingLeft:20
  },
  btnSubmit:{
	marginTop:10,
	marginBottom:50
  },

  btn:{
	backgroundColor:'red'
  },
  btn: {
    backgroundColor: '#3BCCBB',
    padding: 10,
    borderRadius: 8,
  },
  btnText: {
    color: 'white', 
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Login;