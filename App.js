import React from 'react';
import { Platform, StyleSheet, Text, View, Alert, YellowBox, Button, ImageBackground, Dimensions, FlatList, Linking, ActivityIndicator, Image, List, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';


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

// Source: https://medium.com/@prezshaikh/build-a-food-listing-app-with-react-native-1fd64f51bcae


class RestaurantListScreen extends React.Component {


  render() {

    return (
      <View style={{  }}>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}> Here are the restaurants near your area... </Text>

            <View style={{height:130, marginTop: 20}}>

              <ScrollView>

                  <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                      <View style = {{flex:2}}>
                          <Image source={require('/Users/douniamansouri/Desktop/reactTutorialApp/assets/showcase.jpg')} 
                              style = {{flex:1, width: null, height: null, resizeMode: 'cover'}}
                          
                          />

                      </View>

                      <View style={{flex:1, paddingLeft: 10, paddingTop: 10, height: 250}}>

                        <Text> Applebees</Text>
                        <Text> Rating: 3.3 (173 votes) </Text>
                      
                      </View>
                  
                      </View>

              </ScrollView>
            
            </View>
          </View>
          

        </ScrollView>
      </View>
    );
  }
}
  
  

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  RestaurantList: { screen: RestaurantListScreen },
});

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
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
