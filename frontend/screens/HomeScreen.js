import * as React from 'react';
import { Image, Platform, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import styles from '../styles/styles'

import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

import t from 'tcomb-form-native'; // 0.6.9

var customStylesheet = require('../styles/bootstrap')

// override globally the default stylesheet


var CList = t.enums({
  I: 'Italy',
  C: 'China',
  S: 'South Korea',
  J: 'Japan',
  O: 'Other country'

});

const Form = t.form.Form;


const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const MyInfo = t.struct({
  yourAge:t.Num,
  doYouHaveFever:t.Boolean,
  doYouHaveShortnessOfBreath: t.Boolean,
  doYouHaveDryCough: t.Boolean,
  haveYouYouHadContactWithSomeoneWhoTestedPositive:t.Boolean,
  countriesVisitedLast_14Days:CList
});

var options = {
  stylesheet: customStylesheet,
  // fields: {
  //   yourAge: {
  //     auto: 'placeholders'
  //   }
  // }
};

class HomeScreen extends React.Component {

  onPress = function () {
    // call getValue() to get the values of the form
    //var value = this.refs.form.getValue();

    console.log('Submit pressed')
    alert('Submit pressed')
    // if (value) { // if validation fails, value will be null
    //   console.log(value); // value here is an instance of Person
    // }
  }

  render = function() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
              require('../assets/images/logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.form}>
            <Form ref="form" type={MyInfo} style={styles.form} options={options}/> 
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </View>


        </ScrollView>

      </View>
    );
  }

}


HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}


function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}



export default HomeScreen;