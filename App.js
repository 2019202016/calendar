import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Linking
} from 'react-native';

//Import library for AddCalendarEvent
import
  * as AddCalendarEvent
from 'react-native-add-calendar-event';

//Import moment.js to deal with time
import moment from 'moment';
import { CalendarList,Calendar } from 'react-native-calendars';

const EVENT_TITLE = 'Lunch';
const TIME_NOW_IN_UTC = moment.utc();

const utcDateToString = (momentInUTC) => {
  let s = moment.utc(momentInUTC)
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

const addToCalendar = (title, startDateUTC) => {
  const eventConfig = {
    title,
    startDate: utcDateToString(startDateUTC),
    endDate: 
    utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    notes: 'tasty!',
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
      titleColor: 'blue',
    },
  };

  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      // handle error such as when user rejected permissions
      alert('Error -> ' + error);
    });
};

const editCalendarEventWithId = (eventId) => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
  };

  AddCalendarEvent.presentEventEditingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      alert('Error -> ' + error);
    });
};

const showCalendarEventWithId = (eventId) => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
    allowsEditing: true,
    allowsCalendarPreview: true,
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
    },
  };

  AddCalendarEvent.presentEventViewingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      alert('Error -> ' + error);
    });
};

const App = () => {
  const [text, setText] = useState('');
  const OpenWeb = () =>{
    Linking.openURL("https://www.google.com/");
  };
const OpenMail = () => {
    Linking.openURL("https://mail.google.com/mail/u/0/#inbox")
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
      onDayLongPress={e=>{
        addToCalendar(EVENT_TITLE, TIME_NOW_IN_UTC);
      }}
    />
     <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="enter event id"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              editCalendarEventWithId(text);
            }}>
            <Text style={styles.buttonTextStyle}>
              Edit Event
            </Text>
          </TouchableOpacity>
          <View style={{margin: 5}} />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              showCalendarEventWithId(text);
            }}>
            <Text style={styles.buttonTextStyle}>
              View Event
            </Text>
          </TouchableOpacity>
          
        </View> 
        <Button onPress={OpenWeb} title="Open Web" style={styles.button} />  
         <Button onPress={OpenMail} title="Open Mail" style={styles.button}/>
      </View>
    </SafeAreaView> 
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 16,
  },
  heading: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'orange',
    margin: 15
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  buttonHalfStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex: 1,
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    minWidth: '100%',
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#ffe6e6',
  },
});
