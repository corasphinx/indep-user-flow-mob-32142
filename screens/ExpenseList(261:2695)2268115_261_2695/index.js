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
      <View style={styles.View_261_2696} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58cb/7c75/c080924d37f426e19c853214a279ff6d"
        }}
        style={styles.ImageBackground_261_2714}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae32/123e/bdc8a880b80d535fec9a642e2fa719aa"
        }}
        style={styles.ImageBackground_261_2719}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f1a/55cc/7274a077e5da1dd0d2cbefac7d44e867"
        }}
        style={styles.ImageBackground_261_2730}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3513/ab19/67e125f3c5ab823ed1e660369861f594"
        }}
        style={styles.ImageBackground_261_2735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2683/c24f/c05b4ab15fef47c62684656a77b125b0"
        }}
        style={styles.ImageBackground_261_2720}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2ad/59cf/97aed3f4689367e6ad9a72a8446b7e2d"
        }}
        style={styles.ImageBackground_261_2721}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fd/14f3/2a600b60e9bc71bbe2d3dfd6d14d3cb9"
        }}
        style={styles.ImageBackground_261_2731}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f0e/76b6/6bc7e3fc5d619f5a8ef98c4d0c845daa"
        }}
        style={styles.ImageBackground_261_2722}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d27/0674/b2ea101d7671add918cb41429c4bd22b"
        }}
        style={styles.ImageBackground_261_2723}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19fb/556c/03dbd41779dfb3c867344a905d26de36"
        }}
        style={styles.ImageBackground_261_2732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c51e/35c7/57ac453abb4821773ed808c903e90699"
        }}
        style={styles.ImageBackground_261_2736}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bbd/e16f/ed3bea44d4f4d984b9503788005c75bc"
        }}
        style={styles.ImageBackground_261_2724}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7564/bb49/8b0c2fffae0381a0095f8d386a3b3f6e"
        }}
        style={styles.ImageBackground_261_2725}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a9e/9b6d/a275f9c5677af5ad209a04724cfe91e7"
        }}
        style={styles.ImageBackground_261_2733}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e4/2a67/cafdff85afd52a785af497b937644e6a"
        }}
        style={styles.ImageBackground_261_2726}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9bb/778b/01036887f13327e8571c70227470852d"
        }}
        style={styles.ImageBackground_261_2727}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f1/e2bf/19588214dce70148b145ceb2ffe3956b"
        }}
        style={styles.ImageBackground_261_2728}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c24f/4ea8/1f3972d581441d3c032579a4663d0455"
        }}
        style={styles.ImageBackground_261_2734}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/201f/a036/8c36badace0953ab51aaac59d68414b5"
        }}
        style={styles.ImageBackground_261_2737}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ec/f4f5/dda8b815874185824aecd3f26f205c8c"
        }}
        style={styles.ImageBackground_261_2729}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("121%") },
  View_261_2696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("121%"),
    minHeight: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_261_2714: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_261_2719: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("25%")
  },
  ImageBackground_261_2730: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("93%")
  },
  ImageBackground_261_2735: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("109%")
  },
  ImageBackground_261_2720: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("64%")
  },
  ImageBackground_261_2721: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%")
  },
  ImageBackground_261_2731: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("74%")
  },
  ImageBackground_261_2722: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("44%")
  },
  ImageBackground_261_2723: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%")
  },
  ImageBackground_261_2732: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("99%")
  },
  ImageBackground_261_2736: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("114%")
  },
  ImageBackground_261_2724: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69%")
  },
  ImageBackground_261_2725: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14%")
  },
  ImageBackground_261_2733: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("79%")
  },
  ImageBackground_261_2726: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("49%")
  },
  ImageBackground_261_2727: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%")
  },
  ImageBackground_261_2728: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20%")
  },
  ImageBackground_261_2734: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("88%")
  },
  ImageBackground_261_2737: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("104%")
  },
  ImageBackground_261_2729: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("55%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
