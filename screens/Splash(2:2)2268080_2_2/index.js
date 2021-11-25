import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/757e/85f384f6b34a25c7618f95f791a1d4fd"
        }}
        style={styles.ImageBackground_8_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0dc/1e32/f0e37aaa2afc3148c4f89545043f5eb5"
        }}
        style={styles.ImageBackground_219_2641}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_8_13: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_219_2641: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("48%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
