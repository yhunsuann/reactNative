import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
import React, { useState, useEffect } from 'react';

const Cart = (navigation) => {
    const [isCheck, setisCheck] = useState(false);
    return (
        <ScrollView>
            <ScrollView>
                <View style= {{ flexDirection:"row", marginTop:20, justifyContent: 'space-around'}}>
                    <CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginTop:30}}/>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <View>
                        <Text style={styles.name}>Sieu xe 2020</Text>
                        <Text>Số lượng :<Text>1</Text></Text>
                        <Text>Tổng tiền : <Text>2000</Text></Text>
                    </View>
                </View>
                <View style= {{ flexDirection:"row", marginTop:20, justifyContent: 'space-around'}}>
                    <CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginTop:30}}/>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <View>
                        <Text style={styles.name}>Sieu xe 2020</Text>
                        <Text>Số lượng :<Text>1</Text></Text>
                        <Text>Tổng tiền : <Text>2000</Text></Text>
                    </View>
                </View>
                <View style= {{ flexDirection:"row", marginTop:20, justifyContent: 'space-around'}}>
                    <CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginTop:30}}/>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <View>
                        <Text style={styles.name}>Sieu xe 2020</Text>
                        <Text>Số lượng :<Text>1</Text></Text>
                        <Text>Tổng tiền : <Text>2000</Text></Text>
                    </View>
                </View>
                <View style= {{ flexDirection:"row", marginTop:20, justifyContent: 'space-around'}}>
                    <CheckBox isChecked={isCheck} onClick={()=> setisCheck(!isCheck)} checkBoxColor='blue' checkedCheckBoxColor='blue' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginTop:30}}/>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <View>
                        <Text style={styles.name}>Sieu xe 2020</Text>
                        <Text>Số lượng :<Text>1</Text></Text>
                        <Text>Tổng tiền : <Text>2000</Text></Text>
                    </View>
                </View>       
                <View style= {{ flexDirection:"row", justifyContent:'flex-end', marginTop:20}}>
                    <Text style = {{ marginTop:30, marginRight:20}}>Tổng tiền:<Text>200000$</Text></Text>
                    <TouchableOpacity><Text style = {styles.btnBuy}>Thanh toán</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
    },
    item:{
        marginRight:10,
    },
    btnBuy:{
        marginTop:20,
        padding:10,
        borderWidth:1,
        width:100,
        borderRadius:20,
        textAlign:"center"
    },
    img_article:{
        width: 150,
        height: 150,
    }
});
export default Cart;