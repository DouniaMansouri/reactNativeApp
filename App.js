import React from 'react';
import { Platform, StyleSheet, Text, View, Alert, YellowBox, Button, ImageBackground, Dimensions, FlatList, Linking, ActivityIndicator, Image, List, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import Category from '/Users/douniamansouri/Desktop/reactTutorialApp/screens/components/Explore/Category';
import AlertExample from './alert_example.js';
import { Col, Row, Grid } from "react-native-easy-grid";

class HomeScreen extends React.Component {

 

  
  render() {
    
    let data = [{
      value: 'Ottawa',
    }, {
      value: 'Montreal',
    }, {
      value: 'Toronto',
    }];

    let donnee = [{
      value: 'Breakfeast',
    }, {
      value: 'Lunch',
    }, {
      value: 'Dinner',
    }]; 
    const resizeMode = 'center';
    return (
       
<View style ={styles.container}>



<ImageBackground source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/food.jpg')} style={[styles.fixed, styles.container]}/>
        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 0, paddingTop: 0, alignItems: 'center'}}> Welcome to Eatify! </Text>

              

                  <Dropdown
                  label='Select your city'
                  
                  data={data}
                  />
                  <Dropdown
                  label='Select your meal type'
                  data={donnee}
                  />
                  <Button
                    title="Search"
                    color="white"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => this.props.navigation.navigate('RestaurantList')}
                  />

                  
    
   
</View>
   
      
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
 }


// Source: https://medium.com/@prezshaikh/build-a-food-listing-app-with-react-native-1fd64f51bcae


class RestaurantListScreen extends React.Component {

  static navigationOptions = {
    title: 'Restaurant List',
  };

  render() {

    return (
      <View style={{  }}>
      
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
          
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}> Here are the restaurants near your area... </Text>

            <View style={{height:400, marginTop: 20}}>
           
              <ScrollView
                  horizontal = {true}
                  showsHorizontalScrollIndicator={false}

              >
                  <Category
                  imageUri = {require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/showcase.jpg')}
                  name = "Applebees"
                  address = "Address: 155 Kingston Rd E, Ajax, ON L1S 7J4"
                  type = "Cuisine type: Casual dining"
                  price = "Price: $5-$40"
                  hours = "Hours: 11:00a.m.-10:00p.m."
                  rating = "Rating: 3 stars"
                  />
                  <Category
                  imageUri = {require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/red_lobster.png')}
                  name = "Red Lobster"
                  address = "Adress: 1595 Merivale Rd, Nepean, ON K2G 3J4"
                  type = "Cuisine type: Seafood"
                  price = "Price: $10-$60"
                  hours = "Hours: 11:00a.m.-10:00p.m."
                  rating = "Rating: 4 stars"
                  />
                  <Category
                  imageUri = {require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/red_robin.png')}
                  name = "Red Robin"
                  address = "Address: 800 Tolmie Ave, Victoria, British Columbia V8X 3W4"
                  type = "Cuisine type: Casual dining"
                  price = "Price: $5-$40"
                  hours = "Hours: 11:00a.m.-10:00p.m."
                  rating = "Rating: 4 stars"
                  />
                  <Category
                  imageUri = {require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/FoodBackground.jpg')}
                  name = "Veggies"
                  address = "Address: 800 Tolmie Ave, Victoria, British Columbia V8X 3W4"
                  type = "Cuisine type: Casual dining"
                  price = "Price: $5-$40"
                  hours = "Hours 12:00p.m.-10:00p.m."
                  rating = "Rating: 5 stars"
                  />

              </ScrollView>
            
            </View>
          </View>
          

        </ScrollView>
        <Button
                    title="View Menu"
                    color="black"
                    onPress={() => this.props.navigation.navigate('Menu')}
        />

      </View>
    );
  }
}

class MenuScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    return (
<Grid>


<Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}> What would you like to eat today? </Text>


        <Row size={1}>
       
              <View style={{ flex: 1, marginTop: 40, marginLeft: 10 }}>
                    <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/thai.jpg')}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <Text>Spicy Thai Red Curry Noodle Soup</Text>
                    <Text>Price: 11$</Text>
                 
                </View>

                <View style={{ flex: 1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                        
                  <AlertExample />
                 
               </View>

      
        </Row>
        <Row size={1}>
        <View style={{ flex: 1, marginTop: 40, marginLeft: 10 }}>
                    <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/sandwich.jpg')}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <Text> Hot Chicken Sandwich</Text>
                    <Text>Price: 15$</Text>
                 
                </View>

                <View style={{ flex: 1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <AlertExample />
                 
               </View>
        </Row>
        <Row size={1}>
        <View style={{ flex: 1, marginTop: 40, marginLeft: 10}}>
                    <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/wings.jpg')}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <Text>Crispy Baked Buffalo Wings</Text>
                    <Text>Price: 8$</Text>
                 
                </View>

                <View style={{ flex:1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <AlertExample />
                 
          </View>
        </Row>

        <Row size={1}>
        <View style={{ flex: 1, marginTop: 40, marginLeft: 10}}>
                    <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/taco.jpg')}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <Text>Chicken and Avocado Tacos with Creamy Cilantro Sauce</Text>
                    <Text>Price: 12$</Text>
                 
                </View>

                <View style={{ flex:1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                    <AlertExample />
                 
          </View>
        </Row>

        <Button
              title="Go to cart"
              color="black"
              onPress={() => this.props.navigation.navigate('Order')}
        />
 
</Grid>

  
    );
   }
  }
  
 class OrderScreen extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { count: 0, count1: 0, count2: 0, price: 0, price1: 0, price2: 0, total: 0 }
    }
  
    onPressPlus = () => {
      this.setState({
        count: this.state.count+1,
        price: this.state.price + 11,
        total: this.state.total + 11
      })
    }

    onPressMinus = () => {
      this.setState({
        count: this.state.count-1,
        price: this.state.price - 11,
        total: this.state.total - 11
      })
    }

    onPressPlus1 = () => {
      this.setState({
        count1: this.state.count1+1,
        price1: this.state.price1 + 12,
        total: this.state.total + 12
      })
    }

    onPressMinus1 = () => {
      this.setState({
        count1: this.state.count1-1,
        price1: this.state.price1 - 12, 
        total: this.state.total - 12
      })
    }

    onPressPlus2 = () => {
      this.setState({
        count2: this.state.count2+1,
        price2: this.state.price2 + 13,
        total: this.state.total + 13
        
      })
    }

    onPressMinus2 = () => {
      this.setState({
        count2: this.state.count2-1,
        price2: this.state.price2 - 13,
        total: this.state.total - 13

      })
    }
  
    static navigationOptions = {
      title: 'Cart',
    };
  
    render() {
      return (
  <Grid> 
          <Row size={1}>
         
                <View style={{ flex: 1, marginTop: 40, marginLeft: 10 }}>
                      <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/thai.jpg')}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                      />
                  </View>
                  
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                      <Text>Spicy Thai Red Curry Noodle Soup</Text>
                      <Text> Price: { this.state.price } $ </Text>
                   
                  </View>
  
                  <View style={{ flex: 1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                          
                              <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressPlus}
                              >
                                <Text> + </Text>
                              </TouchableOpacity>

                            <View style={[styles.countContainer]}>
                                    <Text style={[styles.countText]}>
                                        { this.state.count !== -1 ? this.state.count: null }
                                    </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressMinus}
                              >
                                <Text> - </Text>
                              </TouchableOpacity>
                   
                 </View>
  
        
          </Row>
          
          <Row size={1}>
          <View style={{ flex: 1, marginTop: 40, marginLeft: 10}}>
                      <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/taco.jpg')}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                      />
                  </View>
  
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                      <Text>Chicken and Avocado Tacos with Creamy Cilantro Sauce</Text>
                      <Text>Price: { this.state.price1 } $</Text>
                   
                  </View>
  
                  <View style={{ flex:1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                               <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressPlus1}
                              >
                                <Text> + </Text>
                              </TouchableOpacity>

                            <View style={[styles.countContainer]}>
                                    <Text style={[styles.countText]}>
                                        { this.state.count1 !== -1 ? this.state.count1: null }
                                    </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressMinus1}
                              >
                                <Text> - </Text>
                            </TouchableOpacity>
                   
            </View>
          </Row>

          <Row size={1}>
          <View style={{ flex: 1, marginTop: 40, marginLeft: 10}}>
                      <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/sandwich.jpg')}
                          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                      />
                  </View>
  
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 50, height: 300, width: 300 }}>
                      <Text>Hot Chicken Sandwich</Text>
                      <Text>Price: { this.state.price2 } $</Text>
                   
                  </View>
  
                  <View style={{ flex:1, paddingRight: 10, paddingTop: 50, height: 300, width: 300 }}>
                               <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressPlus2}
                              >
                                <Text> + </Text>
                              </TouchableOpacity>

                            <View style={[styles.countContainer]}>
                                    <Text style={[styles.countText]}>
                                        { this.state.count2 !== -1 ? this.state.count2: null }
                                    </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressMinus2}
                              >
                                <Text> - </Text>
                              </TouchableOpacity>
                   
            </View>
          </Row>

          <Row size={1}>

            

                    <View style={{ flex: 1, marginTop: 20, marginLeft: 10}}>
                        <Text style = {{paddingTop: 10, fontSize: 24, fontWeight: "500"}}> Total </Text>
                    </View>

                    <View style={{ flex:1, paddingRight: 10, paddingTop: 40, height: 300, width: 300 }}> 
                        <Text> {this.state.total} $ </Text>
                    </View>

             
          </Row>
  
          <Button
                title="Pay now"
                color="black"
                onPress={() => this.props.navigation.navigate('Pay')}
          />
   
  </Grid>
  
    
      );
     }
    }

class PayScreen extends React.Component {

  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}> Order Information </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your name"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Address"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="City"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Country"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Zip"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone number"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Card Type (debit, credit or cash)"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}> Card information (unless paying cash) </Text>
      

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name on card"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Credit card number"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Expiry month"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Expiry year"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="CVV"
          maxLength={20}
          onBlur={Keyboard.dismiss}
        />
      </View>

      <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}> Summary </Text>
      <Text style={{fontSize: 15, fontWeight: '400', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}>Amount of food: 4 items </Text>
      <Text style={{fontSize: 15, fontWeight: '400', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}>Total: 45$ </Text>
 

      <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => this.props.navigation.navigate('Final')}

              >
                <Text style={styles.saveButtonText}>Save</Text>

              </TouchableOpacity>
      </View>
    </ScrollView>
    );
  }

}

class FinalScreen extends React.Component {
  render(){
    return (
      <View>
        <ImageBackground source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/food.jpg')} style={[styles.fixed, styles.container]}/>
          <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 0, paddingTop: 10, alignItems: 'center'}}> Thanks for ordering with Eatify! </Text>
      </View> 
    );
  }
}


  


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  RestaurantList: { screen: RestaurantListScreen },
  Menu : {screen: MenuScreen},
  Order : {screen: OrderScreen},
  Pay: {screen: PayScreen},
  Final: {screen: FinalScreen }

}

);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: 100
    },
    fixed: {
      position: "absolute", 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0


    },

    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      height: 35,
      marginBottom: 10
    },
    view: {
      paddingTop: 30,
     },
     text: {
      flex: 1,
      fontSize: 40,
      textAlign: 'center'
     },
     separator: {
      flex: 1, 
      borderWidth: 1, 
      borderColor: 'black'
     },
     button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: 'black'
    }, 
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'black',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }

});




export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    
  },
  {
  
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
    },
  }
));
