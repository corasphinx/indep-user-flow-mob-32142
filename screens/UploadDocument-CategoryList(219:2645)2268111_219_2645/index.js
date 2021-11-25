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
      <View style={styles.View_219_2646}>
        <View style={styles.View_I219_2646_17_96} />
        <View style={styles.View_I219_2646_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I219_2646_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I219_2646_17_110}
          />
          <View style={styles.View_I219_2646_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I219_2646_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I219_2646_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I219_2646_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I219_2646_17_124} />
        <View style={styles.View_I219_2646_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I219_2646_17_127}
          />
        </View>
      </View>
      <View style={styles.View_219_2647}>
        <View style={styles.View_219_2648} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb84/982f/682ab68ce2d016c2d79da6585ad49fe3"
          }}
          style={styles.ImageBackground_219_2649}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_219_2650}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d5f/fa6a/57495e17ff3475030f17b5f2503139c1"
          }}
          style={styles.ImageBackground_219_2651}
        />
      </View>
      <View style={styles.View_219_2652}>
        <View style={styles.View_219_2653} />
        <View style={styles.View_219_2654}>
          <Text style={styles.Text_219_2654}>Enter Note</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8429/82a4/095fc68c70920ec6b58054e997bcef96"
          }}
          style={styles.ImageBackground_219_2655}
        />
      </View>
      <View style={styles.View_219_2656}>
        <View style={styles.View_219_2657} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0311/f53f/e6b92154daded1409cbc7bb4b5a45953"
          }}
          style={styles.ImageBackground_219_2658}
        />
        <View style={styles.View_219_2659}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ee5/3acf/6ef104ff810045c8ab61b3a5563369d7"
            }}
            style={styles.ImageBackground_219_2660}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa68/059a/d6a1bfba7bd16648ebfc963813e5697b"
            }}
            style={styles.ImageBackground_219_2661}
          />
        </View>
      </View>
      <View style={styles.View_219_2667}>
        <View style={styles.View_219_2668} />
        <View style={styles.View_219_2669}>
          <Text style={styles.Text_219_2669}>Name your record</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5b5/eb7a/b97c57fa2cd9b36f88c7aa550b49e90a"
          }}
          style={styles.ImageBackground_219_2671}
        />
      </View>
      <View style={styles.View_219_2672}>
        <View style={styles.View_I219_2672_2_225}>
          <Text style={styles.Text_I219_2672_2_225}>Upload Document</Text>
        </View>
      </View>
      <View style={styles.View_219_2673}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I219_2673_17_60}
        />
      </View>
      <View style={styles.View_219_2674}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b26/61bd/d13751b02d40927870416b70c5330fe8"
          }}
          style={styles.ImageBackground_219_2675}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_219_2676}
        />
      </View>
      <View style={styles.View_219_2721}>
        <View style={styles.View_219_2722} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f28/f9e7/d50be7c534e4d912eb8f5713fb1c0583"
          }}
          style={styles.ImageBackground_219_2723}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b727/3415/16e080fb3459e63e7d62344b288b2f1a"
          }}
          style={styles.ImageBackground_219_2727}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe78/9d70/7cf38d0d493f8eaff40eb940f74eb854"
          }}
          style={styles.ImageBackground_219_2724}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eb6/172d/b10fcb2ddc552e8f177ee313b74895b3"
          }}
          style={styles.ImageBackground_219_2728}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0917/b2f0/c60b151f987d31cad76133c451dd1677"
          }}
          style={styles.ImageBackground_219_2725}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a813/0c4f/962ed9ff84e83d4cb16eec04f3412d0e"
          }}
          style={styles.ImageBackground_219_2729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86ae/e118/ebf3893345a977b2bcfec3091c1c6269"
          }}
          style={styles.ImageBackground_219_2726}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("152%") },
  View_219_2646: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I219_2646_17_96: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I219_2646_17_100: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I219_2646_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I219_2646_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I219_2646_17_114: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I219_2646_17_117: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I219_2646_17_122: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I219_2646_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I219_2646_17_124: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I219_2646_17_126: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I219_2646_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_219_2647: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%")
  },
  View_219_2648: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_219_2649: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_219_2650: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_219_2651: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_2652: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("121%")
  },
  View_219_2653: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_219_2654: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_219_2654: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_2655: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_2656: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  View_219_2657: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_219_2658: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_2659: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%")
  },
  ImageBackground_219_2660: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_219_2661: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_219_2667: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("45%")
  },
  View_219_2668: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_219_2669: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_219_2669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_2671: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_2672: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("140%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I219_2672_2_225: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I219_2672_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_2673: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I219_2673_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_2674: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_219_2675: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_219_2676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_2721: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_219_2722: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_219_2723: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_219_2727: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%")
  },
  ImageBackground_219_2724: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_219_2728: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%")
  },
  ImageBackground_219_2725: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  ImageBackground_219_2729: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%")
  },
  ImageBackground_219_2726: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
