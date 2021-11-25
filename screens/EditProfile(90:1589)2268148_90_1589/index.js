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
      <View style={styles.View_90_1590}>
        <View style={styles.View_I90_1590_17_96} />
        <View style={styles.View_I90_1590_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I90_1590_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I90_1590_17_110}
          />
          <View style={styles.View_I90_1590_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I90_1590_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I90_1590_17_122}
            />
            <View style={styles.View_I90_1590_17_123} />
          </View>
        </View>
        <View style={styles.View_I90_1590_17_124} />
        <View style={styles.View_I90_1590_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I90_1590_17_127}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7285/075c/e7be176c1dbcb69fd3d7bef79df3d1d2"
        }}
        style={styles.ImageBackground_90_1591}
      />
      <View style={styles.View_90_1684}>
        <Text style={styles.Text_90_1684}>Edit Profile</Text>
      </View>
      <View style={styles.View_90_1592} />
      <View style={styles.View_269_3808}>
        <View style={styles.View_269_3809} />
        <View style={styles.View_269_3810}>
          <Text style={styles.Text_269_3810}>Enter Address</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa6/2c5b/7aead4902eabfea49304469d1ff9f89e"
          }}
          style={styles.ImageBackground_269_3811}
        />
      </View>
      <View style={styles.View_269_3864}>
        <View style={styles.View_269_3865} />
        <View style={styles.View_269_3866}>
          <Text style={styles.Text_269_3866}>Enter Address</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce8/bd5e/d133ad2606d1d8002dee0f592c328608"
          }}
          style={styles.ImageBackground_269_3867}
        />
      </View>
      <View style={styles.View_269_3874}>
        <View style={styles.View_269_3875} />
        <View style={styles.View_269_3876}>
          <Text style={styles.Text_269_3876}>Enter Text</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ae/92fc/9c60bdadd1a541a544006caccd4a7132"
          }}
          style={styles.ImageBackground_269_3877}
        />
      </View>
      <View style={styles.View_269_3858}>
        <View style={styles.View_269_3859} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b312/f2f5/a802329f3d75f887dde27fd8ca85bfe2"
          }}
          style={styles.ImageBackground_269_3860}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_269_3861}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4e/34f8/dbdea7f828fca2e3d331a1d5d9e728d4"
          }}
          style={styles.ImageBackground_269_3862}
        />
      </View>
      <View style={styles.View_269_3847}>
        <View style={styles.View_269_3848} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f088/c483/46c58e3b4aa9052bfcab128bf00b8e52"
          }}
          style={styles.ImageBackground_269_3849}
        />
        <View style={styles.View_269_3850}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/0d7a/7037d18e8ec7e81543bb5109709a6718"
            }}
            style={styles.ImageBackground_I269_3850_2_163}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a95/c9a3/679ff733eabb8bfc56b04292d8c501d0"
          }}
          style={styles.ImageBackground_269_3851}
        />
      </View>
      <View style={styles.View_269_3836}>
        <View style={styles.View_269_3837} />
        <View style={styles.View_269_3838}>
          <Text style={styles.Text_269_3838}>| Enter Phone Number</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d1/8733/de03e8bb2050472ef92b102af9415ab6"
          }}
          style={styles.ImageBackground_269_3839}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b027/d272/090a3740b2ecda63840710dbe703a915"
          }}
          style={styles.ImageBackground_269_3840}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf7/5181/d07c41a514766e88494ef969d1b5c8bc"
          }}
          style={styles.ImageBackground_269_3841}
        />
      </View>
      <View style={styles.View_90_1662}>
        <View style={styles.View_90_1663} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c5/ddaa/8d403871bae01ce3ef2d07b88b7f46e8"
          }}
          style={styles.ImageBackground_90_1664}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6944/eb1d/dcc1054119e5e22dddc3747eb9e73d74"
          }}
          style={styles.ImageBackground_90_1665}
        />
      </View>
      <View style={styles.View_90_1666}>
        <View style={styles.View_90_1667} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0fc/21f5/4594df02dbca0f152f738774dda7947a"
          }}
          style={styles.ImageBackground_90_1668}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/261a/e2a8/0d314c03d9f1cc1352761846cca08281"
          }}
          style={styles.ImageBackground_90_1669}
        />
      </View>
      <View style={styles.View_269_3807}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f478/9d2d/612269ed6955f9ac7d5d95d2366ab3ad"
          }}
          style={styles.ImageBackground_126_1636}
        />
        <View style={styles.View_126_1637}>
          <View style={styles.View_126_1638} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d0/1d27/2e57ee17e0c73e791ec1f37c6c0013e9"
            }}
            style={styles.ImageBackground_126_1639}
          />
          <View style={styles.View_126_1640}>
            <View style={styles.View_I126_1640_2_230}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca1/c356/4cb6ab58bce3f10308cebdb56135c155"
                }}
                style={styles.ImageBackground_I126_1640_2_230_2_352}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_127_1645}>
          <View style={styles.View_127_1646} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/102f/46cc/80a2f3bcf539b0db45bfbcef94bac5c6"
            }}
            style={styles.ImageBackground_127_1647}
          />
          <View style={styles.View_127_1648}>
            <View style={styles.View_I127_1648_2_230}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca1/c356/4cb6ab58bce3f10308cebdb56135c155"
                }}
                style={styles.ImageBackground_I127_1648_2_230_2_352}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_126_1641}>
          <View style={styles.View_126_1642} />
          <View style={styles.View_126_1643}>
            <Text style={styles.Text_126_1643}>Add Business Name</Text>
          </View>
          <View style={styles.View_126_1644}>
            <View style={styles.View_I126_1644_2_230}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6022/605f/c365f738566929c52b3bb1f5e6994747"
                }}
                style={styles.ImageBackground_I126_1644_2_230_2_204}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_90_1615}>
        <View style={styles.View_I90_1615_2_225}>
          <Text style={styles.Text_I90_1615_2_225}>Save Changes</Text>
        </View>
      </View>
      <View style={styles.View_148_2431}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I148_2431_17_60}
        />
      </View>
      <View style={styles.View_577_10438}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ba6/2db5/f101749ab327684cf8d36c4c321f1f58"
          }}
          style={styles.ImageBackground_90_1593}
        />
        <View style={styles.View_90_1670} />
        <View style={styles.View_90_1680}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be6/e7eb/b55cfe222e487b1a75dbff373a39e153"
            }}
            style={styles.ImageBackground_I90_1680_90_1678}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("189%") },
  View_90_1590: {
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
  View_I90_1590_17_96: {
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
  View_I90_1590_17_100: {
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
  ImageBackground_I90_1590_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I90_1590_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I90_1590_17_114: {
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
  ImageBackground_I90_1590_17_117: {
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
  ImageBackground_I90_1590_17_122: {
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
  View_I90_1590_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I90_1590_17_124: {
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
  View_I90_1590_17_126: {
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
  ImageBackground_I90_1590_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_90_1591: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_90_1684: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_90_1684: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_90_1592: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("177%"),
    minHeight: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_269_3808: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("101%")
  },
  View_269_3809: {
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
  View_269_3810: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_269_3810: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_269_3811: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_269_3864: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("114%")
  },
  View_269_3865: {
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
  View_269_3866: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_269_3866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_269_3867: {
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
  View_269_3874: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("128%")
  },
  View_269_3875: {
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
  View_269_3876: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_269_3876: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_269_3877: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_269_3858: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%")
  },
  View_269_3859: {
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
  ImageBackground_269_3860: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_269_3861: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_269_3862: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_269_3847: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%")
  },
  View_269_3848: {
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
  ImageBackground_269_3849: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  View_269_3850: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I269_3850_2_163: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_269_3851: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_269_3836: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%")
  },
  View_269_3837: {
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
  View_269_3838: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_269_3838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_269_3839: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_269_3840: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_269_3841: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_90_1662: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%")
  },
  View_90_1663: {
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
  ImageBackground_90_1664: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_90_1665: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_90_1666: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("48%")
  },
  View_90_1667: {
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
  ImageBackground_90_1668: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_90_1669: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_269_3807: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("145%")
  },
  ImageBackground_126_1636: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_1637: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_126_1638: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_126_1639: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_126_1640: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I126_1640_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I126_1640_2_230_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_127_1645: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_127_1646: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_127_1647: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_127_1648: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I127_1648_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I127_1648_2_230_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_1641: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_126_1642: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_126_1643: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_126_1643: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_126_1644: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I126_1644_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I126_1644_2_230_2_204: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_90_1615: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("178%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I90_1615_2_225: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I90_1615_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2431: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("187%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I148_2431_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10438: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("17%")
  },
  ImageBackground_90_1593: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_90_1670: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_90_1680: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I90_1680_90_1678: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
