import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [isCheck, setisCheck] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true); 
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true); 
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  function isStrongPassword(password) {
	const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  
	if (!strongPasswordRegex.test(password)) {
	  Alert.alert('Mật khẩu phải chứa ít nhất 1 ký tự hoa, 1 ký tự số và có độ dài tối thiểu 6 ký tự.');
	  return false;
	}
  
	return true;
  }

  
  const handleSubmit = () => {
    if (!name) {
      Alert.alert('Tên không được để trống');
      return;
    }
    if (!phone || phone.length < 10) {
      Alert.alert('Số điện thoại không được để trống và phải có ít nhất 10 ký tự');
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert('Mật khẩu không được để trống và phải có ít nhất 6 ký tự');
      return;
    }
	if (password !== confirmPassword) {
		Alert.alert('Mật khẩu và xác nhận mật khẩu không khớp');
	  } else if (!agreeToTerms) {
		Alert.alert('Bạn phải đồng ý với Điều khoản sử dụng');
	  } else if (!isStrongPassword(password)) {
		Alert.alert('Mật khẩu phải chứa ít nhất 1 số hoặt 1 ký tự hoa');
	  } else {
		navigation.navigate('Login');
	  }
	  
    if (!agreeToTerms) {
      Alert.alert('Bạn phải đồng ý với Điều khoản sử dụng');
      return;
    }
  };

  useEffect(() => {
    setAgreeToTerms(true);
  }, []);

  	return (
		<ScrollView  style={styles.container}>
			<View style={{flexDirection:"row"}}>
				<Text style={styles.title}>Đăng ký</Text>
			</View>
			
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text style={{color:"rgb(138,138,138)", fontWeight:"600"}}>Họ và tên </Text><Text style={{color:'red'}}>*</Text>
			</View>
			<TextInput
				style={styles.input}
				placeholder="Nhập họ và tên"
				value={name}
				onChangeText={(text) => setName(text)}
			/>
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text  style={{color:"rgb(138,138,138)", fontWeight:"600"}}>Số điện thoại </Text><Text style={{color:'red'}}>*</Text>
			</View>
			<TextInput
				style={styles.input}	
				placeholder="Nhập số điện thoại"
				value={phone}
				keyboardType="phone-pad"
				onChangeText={(text) => setPhone(text)}
			/>
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text style={{color:"rgb(138,138,138)", fontWeight:"600"}}>Mật khẩu </Text><Text style={{color:'red'}}>*</Text>
			</View>
			<View style={{position:"relative"}}>
				<TextInput
					style={styles.input}
					placeholder="Nhập mật khẩu"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={isHidePassword}
				/>
				<FontAwesome name={isHidePassword ? "eye-slash" : "eye"} style={{position:"absolute",right:0, top:10}} size={17} onPress = {()=> setIsHidePassword(!isHidePassword)}/>
			</View>
			<View style={{flexDirection:"row",marginTop:15}}>
				<Text style={{color:"rgb(138,138,138)", fontWeight:"600"}}>Xác nhập mật khẩu </Text><Text style={{color:'red'}}>*</Text>
			</View>
			<View style={{position:"relative"}}>
				<TextInput
					style={styles.input}
					placeholder="Nhập xác nhận mật khẩu"
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
					secureTextEntry={isHideConfirmPassword}
				/>
				<FontAwesome name={isHideConfirmPassword ? "eye-slash" : "eye"} style={{position:"absolute",right:0, top:10}} size={17} onPress = {()=> setIsHideConfirmPassword(!isHideConfirmPassword)}/>
			</View>
			<View style={styles.checkbox}>
				<CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}/>
				<Text style={styles.checkboxText}>Tôi đã đọc và đồng ý với </Text><TouchableOpacity><Text style={styles.checkboxTextBlue}>Điều khoản sử dụng</Text></TouchableOpacity>
			</View>
			<View  style={styles.btnSubmit}>
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>Đăng ký tài khoản</Text>
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
    fontWeight: '600',
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

export default Register;