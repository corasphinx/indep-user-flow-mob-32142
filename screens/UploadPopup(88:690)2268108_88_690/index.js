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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea72/a00a/5009dcf49c5c4d9c1253a41ae4028409"
        }}
        style={styles.ImageBackground_845_11988}
      />
      <View style={styles.View_89_751} />
      <View style={styles.View_89_770}>
        <View style={styles.View_89_752} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb4/945a/3f3809578a8a97d099bfcea9f4a1399f"
          }}
          style={styles.ImageBackground_89_753}
        />
        <View style={styles.View_89_759}>
          <View style={styles.View_89_754}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed0b/6bcc/7c883a7a57a3d4bd016cc856b6ae722b"
              }}
              style={styles.ImageBackground_I89_754_2_175}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ca/db90/be626614abfa893c875f8a72cdf560b8"
            }}
            style={styles.ImageBackground_89_758}
          />
        </View>
        <View style={styles.View_89_760}>
          <View style={styles.View_89_761}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e33b/0206/2666958113aa52ef44e0fe50fe0b4501"
              }}
              style={styles.ImageBackground_I89_761_2_179}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd74/50e1/b411555a3ed9577ce6f15cb974d9679e"
            }}
            style={styles.ImageBackground_89_762}
          />
        </View>
        <View style={styles.View_89_766}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd76/1980/96a18d3c7180e25d688ba08783ea2dbe"
            }}
            style={styles.ImageBackground_I89_766_2_225}
          />
        </View>
        <View style={styles.View_89_768}>
          <View style={styles.View_I89_768_2_225}>
            <Text style={styles.Text_I89_768_2_225}>Continue</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_845_11988: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_89_751: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_89_770: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("43%")
  },
  View_89_752: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_89_753: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_89_759: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%")
  },
  View_89_754: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I89_754_2_175: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_89_758: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_89_760: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%")
  },
  View_89_761: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I89_761_2_179: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_89_762: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_89_766: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I89_766_2_225: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  View_89_768: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I89_768_2_225: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I89_768_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
