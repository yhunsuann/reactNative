import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}} style={{fontSize:10, marginRight:20, color:"white", backgroundColor:"#00A9FF", paddingTop:6, paddingHorizontal:10, borderRadius:15}}><Text style={{ color:"white"}}>Giỏ hàng</Text></TouchableOpacity>
                <TextInput
                    placeholder="Tìm kiếm"
                    style={{ borderWidth: 1, width: 120, borderRadius: 10, padding: 2, paddingLeft: 10 }}
                />
            </View>
            <View>
                <Text style={{ marginBottom:20 }}>Sản phẩm nổi bật</Text>
            </View>
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail')}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/1.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/2.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/3.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/5.jpg')}
                    />
                    <Text style={styles.name}>Sieu xe 2020</Text>
                    <Text>Gia: <Text>2000$</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image
                        style={styles.img}
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
    container: {
        flex: 1,
        paddingBottom: 30,
        padding: 10,
        backgroundColor: '#fff',
    },
    img: {
        width: 150,
        height: 150,
    },
    item: {
        width: '48%',
        marginBottom: 10,
    },
    name: {
        color: "#00A9FF"
    }
});

export default Home;
