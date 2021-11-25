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
      <View style={styles.View_277_3776}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I277_3776_17_60}
        />
      </View>
      <View style={styles.View_277_3777}>
        <View style={styles.View_I277_3777_2_225}>
          <Text style={styles.Text_I277_3777_2_225}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_277_3778}>
        <View style={styles.View_I277_3778_17_96} />
        <View style={styles.View_I277_3778_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I277_3778_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I277_3778_17_110}
          />
          <View style={styles.View_I277_3778_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I277_3778_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I277_3778_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I277_3778_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I277_3778_17_124} />
        <View style={styles.View_I277_3778_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I277_3778_17_127}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5971/5c2d/3f8d849adc36da7a5fd630067a1a6a6d"
        }}
        style={styles.ImageBackground_277_3780}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad1c/d00c/7ffc192fe8dd9b9f769e61253e4bf1c5"
        }}
        style={styles.ImageBackground_277_3781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f00/2ab9/54436d7ed40547efa7d6f4b8e67fb154"
        }}
        style={styles.ImageBackground_277_3782}
      />
      <View style={styles.View_839_11954}>
        <View style={styles.View_277_3848} />
        <View style={styles.View_277_3849} />
        <View style={styles.View_277_3850} />
        <View style={styles.View_277_3851} />
        <View style={styles.View_839_11953} />
      </View>
      <View style={styles.View_277_3942}>
        <View style={styles.View_277_3852} />
        <View style={styles.View_277_3941}>
          <View style={styles.View_277_3940}>
            <Text style={styles.Text_277_3940}>Creative &amp; Marketing</Text>
          </View>
          <View style={styles.View_277_3872}>
            <View style={styles.View_277_3873}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/124d/3d41/b0104a6b68e33d41a553976f6074f2b7"
                }}
                style={styles.ImageBackground_277_3874}
              />
            </View>
            <View style={styles.View_277_3876}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10ec/e52b/15e5530a423c3ea87c4321e6ed160342"
                }}
                style={styles.ImageBackground_277_3877}
              />
            </View>
            <View style={styles.View_277_3879}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0774/fec9/60c8970a77395f238d09f4ddb6581c51"
                }}
                style={styles.ImageBackground_277_3880}
              />
            </View>
            <View style={styles.View_277_3882}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac9/276f/a831b9f251a62fcf81f6544fed96aa04"
                }}
                style={styles.ImageBackground_277_3883}
              />
            </View>
            <View style={styles.View_277_3885}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac9/276f/a831b9f251a62fcf81f6544fed96aa04"
                }}
                style={styles.ImageBackground_277_3886}
              />
            </View>
            <View style={styles.View_277_3888}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac9/276f/a831b9f251a62fcf81f6544fed96aa04"
                }}
                style={styles.ImageBackground_277_3889}
              />
            </View>
            <View style={styles.View_277_3891}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac9/276f/a831b9f251a62fcf81f6544fed96aa04"
                }}
                style={styles.ImageBackground_277_3892}
              />
            </View>
            <View style={styles.View_277_3894}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac9/276f/a831b9f251a62fcf81f6544fed96aa04"
                }}
                style={styles.ImageBackground_277_3895}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_277_3972}>
        <View style={styles.View_277_3973} />
        <View style={styles.View_277_3974}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c049/7391/cb058c5867a413fb9b5c1f48932e0d73"
            }}
            style={styles.ImageBackground_277_3975}
          />
          <View style={styles.View_277_3853}>
            <View style={styles.View_277_3854}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae95/bfb5/221a691485aa8101cdb1c03ed4469011"
                }}
                style={styles.ImageBackground_277_3855}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_508_8976}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8813/3ee2/07b5e3ad7af2403b4b16f93b8c9791d2"
          }}
          style={styles.ImageBackground_508_8975}
        />
      </View>
      <View style={styles.View_351_3786}>
        <View style={styles.View_351_3787} />
        <View style={styles.View_351_3788}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab96/6c09/cfd80865a02444c402898f5d1037d3bc"
            }}
            style={styles.ImageBackground_351_3789}
          />
          <View style={styles.View_351_3800}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2ab/fb5f/42be33aad5684289aae583de270ca6b8"
              }}
              style={styles.ImageBackground_351_3801}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_277_3943}>
        <View style={styles.View_277_3944} />
        <View style={styles.View_277_3945}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ff/58a3/2846122aba99b502cad04ded15cc76b5"
            }}
            style={styles.ImageBackground_277_3946}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d27/3ba4/b9e004d84073f17459d39b0dddf809e2"
            }}
            style={styles.ImageBackground_305_3521}
          />
        </View>
      </View>
      <View style={styles.View_277_4001}>
        <View style={styles.View_277_4002} />
        <View style={styles.View_277_4003}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c046/def6/7c4fb331e3835b5538de403623f359a9"
            }}
            style={styles.ImageBackground_277_4004}
          />
          <View style={styles.View_277_3858}>
            <View style={styles.View_277_3859}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527b/2e16/98cb985a33c7bd29072e31aebb1318a4"
                }}
                style={styles.ImageBackground_277_3860}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_305_3490}>
        <View style={styles.View_305_3491} />
        <View style={styles.View_305_3492}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/757f/da08/b6398fec1ccb7ebc4423e8a148b4389e"
            }}
            style={styles.ImageBackground_305_3493}
          />
          <View style={styles.View_305_3518}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398a/7512/9dabf170ff8fb7bc7eabe68fcf6ae82d"
              }}
              style={styles.ImageBackground_305_3519}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_510_8982} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147%") },
  View_277_3776: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("145%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I277_3776_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_277_3777: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("130%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I277_3777_2_225: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I277_3777_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_3778: {
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
  View_I277_3778_17_96: {
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
  View_I277_3778_17_100: {
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
  ImageBackground_I277_3778_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I277_3778_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I277_3778_17_114: {
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
  ImageBackground_I277_3778_17_117: {
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
  ImageBackground_I277_3778_17_122: {
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
  ImageBackground_I277_3778_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I277_3778_17_124: {
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
  View_I277_3778_17_126: {
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
  ImageBackground_I277_3778_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_277_3780: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  ImageBackground_277_3781: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%")
  },
  ImageBackground_277_3782: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("139%")
  },
  View_839_11954: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%")
  },
  View_277_3848: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_277_3849: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_277_3850: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_277_3851: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_839_11953: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_277_3942: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%")
  },
  View_277_3852: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 1, 159, 1)",
    borderWidth: 1
  },
  View_277_3941: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%")
  },
  View_277_3940: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_277_3940: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_3872: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_277_3873: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_277_3874: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3876: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_277_3877: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3879: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_277_3880: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3882: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_277_3883: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3885: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_277_3886: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3888: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_277_3889: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3891: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_277_3892: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3894: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_277_3895: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3972: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54%")
  },
  View_277_3973: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_277_3974: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  ImageBackground_277_3975: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_277_3853: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_277_3854: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_277_3855: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_508_8976: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_508_8975: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3786: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("104%")
  },
  View_351_3787: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_351_3788: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%")
  },
  ImageBackground_351_3789: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_351_3800: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_351_3801: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_3943: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("30%")
  },
  View_277_3944: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_277_3945: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  ImageBackground_277_3946: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_305_3521: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_277_4001: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("54%")
  },
  View_277_4002: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_277_4003: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  ImageBackground_277_4004: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_277_3858: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_277_3859: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_277_3860: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_305_3490: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("79%")
  },
  View_305_3491: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_305_3492: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_305_3493: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_305_3518: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_305_3519: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_510_8982: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("94%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
