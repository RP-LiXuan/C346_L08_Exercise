import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import Boat from "./components/Boat";

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'darkgrey',
        borderColor: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        borderWidth: 5,
        borderRadius: 20,
        marginHorizontal: 50,
        marginTop: 10,
        paddingVertical: 5,
    },
});


class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView>
            <Text></Text>
            <Text style={styles.title}>GetABoat - For Sales</Text>
            <Text></Text>
          <Boat icon_name={"sailboat"} icon_color={"grey"}
                name={"Sea Ray 500 Sundancer"} name_color={"grey"} description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                 poster={require('./img/sea_ray.jpg')}/>
            <Text></Text>
            <Boat icon_name={"sailboat"} icon_color={"#90D5FF"}
                  name={"Four Winns Horizon 180"} name_color={"#90D5FF"} description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                  poster={require('./img/four_winns.jpg')}/>
            <Text></Text>
            <Boat icon_name={"sailboat"} icon_color={"purple"}
                  name={"Flipper 640 ST"} name_color={"powderblue"} description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                  poster={require('./img/flipper.jpg')}/>
            <Text></Text>
            <Boat icon_name={"sailboat"} icon_color={"lightgrey"}
                  name={"Princess V48"} name_color={"lightgrey"} description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                  poster={require('./img/princess.jpg')}/>
            <Text></Text>
            <Boat icon_name={"sailboat"} icon_color={"grey"}
                  name={"Bayliner 175 Bowrider"} name_color={"skyblue"} description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                  poster={require('./img/bayliner.jpg')}/>
            <Text></Text>
            <Boat icon_name={"sailboat"} icon_color={"grey"}
                  name={"Fairline Targa 47"} name_color={"darkgrey"} description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                  poster={require('./img/fairline.jpg')}/>
        </ScrollView>
    );
  };
}

export default AllBoats;
