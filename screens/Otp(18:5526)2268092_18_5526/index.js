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
      <View style={styles.View_18_5527}>
        <View style={styles.View_I18_5527_17_96} />
        <View style={styles.View_I18_5527_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I18_5527_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I18_5527_17_110}
          />
          <View style={styles.View_I18_5527_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I18_5527_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I18_5527_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I18_5527_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I18_5527_17_124} />
        <View style={styles.View_I18_5527_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I18_5527_17_127}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_18_5528}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a065/95ec/fb2b4fb8932bebbd95a1281823d13208"
        }}
        style={styles.ImageBackground_18_5529}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9235/d5a0/b6b5733142617cf964f136e95cdc73f8"
        }}
        style={styles.ImageBackground_18_5530}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed3b/e504/3b8f3a5ea82cd44ff4ea697ee527a4f2"
        }}
        style={styles.ImageBackground_18_5797}
      />
      <View style={styles.View_18_6387}>
        <View style={styles.View_18_5784}>
          <View style={styles.View_18_5781} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
            }}
            style={styles.ImageBackground_18_5783}
          />
        </View>
        <View style={styles.View_18_5785}>
          <View style={styles.View_18_5786} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
            }}
            style={styles.ImageBackground_18_5787}
          />
        </View>
        <View style={styles.View_18_5788}>
          <View style={styles.View_18_5789} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
            }}
            style={styles.ImageBackground_18_5790}
          />
        </View>
        <View style={styles.View_18_5791}>
          <View style={styles.View_18_5792} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
            }}
            style={styles.ImageBackground_18_5793}
          />
        </View>
      </View>
      <View style={styles.View_18_5743}>
        <View style={styles.View_I18_5743_2_225}>
          <Text style={styles.Text_I18_5743_2_225}>Verify</Text>
        </View>
      </View>
      <View style={styles.View_18_6331}>
        <View style={styles.View_18_6332}>
          <View style={styles.View_18_6333} />
        </View>
        <View style={styles.View_18_6334}>
          <View style={styles.View_18_6335}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bc7/da00/87618fe370b08c3b652eeb7bbf24afc6"
              }}
              style={styles.ImageBackground_18_6336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1d2/d8e6/60f132b754577c19019534de1cd6e1f2"
              }}
              style={styles.ImageBackground_18_6343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_18_6344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_18_6345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_18_6346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
              }}
              style={styles.ImageBackground_18_6347}
            />
          </View>
          <View style={styles.View_18_6348}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b79/c3cc/313de850c7fbbec38c48c634956c39fb"
              }}
              style={styles.ImageBackground_18_6349}
            />
            <View style={styles.View_18_6350}>
              <Text style={styles.Text_18_6350}>0</Text>
            </View>
          </View>
          <View style={styles.View_18_6351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6352}
            />
            <View style={styles.View_18_6353}>
              <Text style={styles.Text_18_6353}>WXYZ</Text>
            </View>
            <View style={styles.View_18_6354}>
              <Text style={styles.Text_18_6354}>9</Text>
            </View>
          </View>
          <View style={styles.View_18_6355}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6356}
            />
            <View style={styles.View_18_6357}>
              <Text style={styles.Text_18_6357}>TUV</Text>
            </View>
            <View style={styles.View_18_6358}>
              <Text style={styles.Text_18_6358}>8</Text>
            </View>
          </View>
          <View style={styles.View_18_6359}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6360}
            />
            <View style={styles.View_18_6361}>
              <Text style={styles.Text_18_6361}>PQRS</Text>
            </View>
            <View style={styles.View_18_6362}>
              <Text style={styles.Text_18_6362}>7</Text>
            </View>
          </View>
          <View style={styles.View_18_6363}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6364}
            />
            <View style={styles.View_18_6365}>
              <Text style={styles.Text_18_6365}>MNO</Text>
            </View>
            <View style={styles.View_18_6366}>
              <Text style={styles.Text_18_6366}>6</Text>
            </View>
          </View>
          <View style={styles.View_18_6367}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6368}
            />
            <View style={styles.View_18_6369}>
              <Text style={styles.Text_18_6369}>JKL</Text>
            </View>
            <View style={styles.View_18_6370}>
              <Text style={styles.Text_18_6370}>5</Text>
            </View>
          </View>
          <View style={styles.View_18_6371}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0aa/96f7/c397e2a70e8edad43e3c22e9641a59a6"
              }}
              style={styles.ImageBackground_18_6372}
            />
            <View style={styles.View_18_6373}>
              <Text style={styles.Text_18_6373}>GHI</Text>
            </View>
            <View style={styles.View_18_6374}>
              <Text style={styles.Text_18_6374}>4</Text>
            </View>
          </View>
          <View style={styles.View_18_6375}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b79/c3cc/313de850c7fbbec38c48c634956c39fb"
              }}
              style={styles.ImageBackground_18_6376}
            />
            <View style={styles.View_18_6377}>
              <Text style={styles.Text_18_6377}>DEF</Text>
            </View>
            <View style={styles.View_18_6378}>
              <Text style={styles.Text_18_6378}>3</Text>
            </View>
          </View>
          <View style={styles.View_18_6379}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b79/c3cc/313de850c7fbbec38c48c634956c39fb"
              }}
              style={styles.ImageBackground_18_6380}
            />
            <View style={styles.View_18_6381}>
              <Text style={styles.Text_18_6381}>ABC</Text>
            </View>
            <View style={styles.View_18_6382}>
              <Text style={styles.Text_18_6382}>2</Text>
            </View>
          </View>
          <View style={styles.View_18_6383}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b79/c3cc/313de850c7fbbec38c48c634956c39fb"
              }}
              style={styles.ImageBackground_18_6384}
            />
            <View style={styles.View_18_6385}>
              <Text style={styles.Text_18_6385}> </Text>
            </View>
            <View style={styles.View_18_6386}>
              <Text style={styles.Text_18_6386}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_18_5744}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I18_5744_17_60}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_18_5527: {
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
  View_I18_5527_17_96: {
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
  View_I18_5527_17_100: {
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
  ImageBackground_I18_5527_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_5527_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I18_5527_17_114: {
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
  ImageBackground_I18_5527_17_117: {
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
  ImageBackground_I18_5527_17_122: {
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
  ImageBackground_I18_5527_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_5527_17_124: {
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
  View_I18_5527_17_126: {
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
  ImageBackground_I18_5527_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_18_5528: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_18_5529: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  ImageBackground_18_5530: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%")
  },
  ImageBackground_18_5797: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%")
  },
  View_18_6387: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("37%")
  },
  View_18_5784: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_5781: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_18_5783: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_18_5785: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  View_18_5786: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_18_5787: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_18_5788: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  View_18_5789: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_18_5790: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_18_5791: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%")
  },
  View_18_5792: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_18_5793: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_18_5743: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I18_5743_2_225: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I18_5743_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_6331: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_18_6332: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_6333: {
    width: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_18_6334: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_18_6335: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_18_6336: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_6343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_6344: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_18_6345: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_6346: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_18_6347: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_18_6348: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6349: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6350: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6351: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6352: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6353: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6354: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6355: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6356: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6357: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6358: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6359: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6360: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6361: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6361: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6362: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6363: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6364: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6365: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6365: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6366: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6366: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6367: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6368: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6369: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6369: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6370: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6371: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6372: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6373: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6374: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6375: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6376: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6377: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6377: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6378: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6378: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6379: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6380: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6381: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6382: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6382: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_6383: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_6384: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_6385: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6385: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_18_6386: {
    flexGrow: 1,
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_6386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_18_5744: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_5744_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
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
