import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Detail = (navigation) => {
    return (
        <ScrollView>
        <Text style= {{ marginVertical:20}}>Tên Xe</Text>
            <ScrollView horizontal= {true} contentContainerStyle ={styles.container}>
                <View style={styles.item} onPress={() => navigation.navigate('Detail')}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/1.jpg')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/3.jpg')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/5.jpg')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/5.jpg')}
                    />
                </View>
            </ScrollView>
            <View style={{ marginVertical:10}}>
                <Text>Description nhé Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View>

            <View style= {{ flexDirection:"row", justifyContent:'flex-end'}}>
                <TouchableOpacity><Text style = {styles.btnBuy}>Mua</Text></TouchableOpacity>
            </View>
            <Text style = {{ marginVertical:10}}>
                Những sản phẩm tương tự
            </Text>
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail')}>
                    <Image
                        style={styles.img_article}
                        source={require('../../assets/img/1.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img_article}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img_article}
                        source={require('../../assets/img/3.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img_article}
                        source={require('../../assets/img/5.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img_article}
                        source={require('../../assets/img/5.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    img:{
        width:250,
        height:250,
    },
    item:{
        marginRight:10,
    },
    btnBuy:{
        marginTop:20,
        padding:10,
        borderWidth:1,
        width:80,
        borderRadius:20,
        textAlign:"center"
    },
    img_article:{
        width: 150,
        height: 150,
    }
});
export default Detail;