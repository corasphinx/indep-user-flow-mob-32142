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
      <View style={styles.View_577_10635}>
        <View style={styles.View_I577_10635_17_96} />
        <View style={styles.View_I577_10635_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I577_10635_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I577_10635_17_110}
          />
          <View style={styles.View_I577_10635_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I577_10635_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I577_10635_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I577_10635_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I577_10635_17_124} />
        <View style={styles.View_I577_10635_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I577_10635_17_127}
          />
        </View>
      </View>
      <View style={styles.View_577_10636}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I577_10636_17_60}
        />
      </View>
      <View style={styles.View_577_10637}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7e5/66c7/8575b79136f95d8859d3ff826047c8b9"
          }}
          style={styles.ImageBackground_577_10638}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_577_10639}
        />
      </View>
      <View style={styles.View_577_10640}>
        <View style={styles.View_577_10641}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff24/b757/7ae64513156fc0d7ede2931e21901a76"
            }}
            style={styles.ImageBackground_577_10643}
          />
          <View style={styles.View_578_10497}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2236/5ce0/8d0346b9bb850c8ea2c0cd4b14e0cef3"
              }}
              style={styles.ImageBackground_577_10642}
            />
            <View style={styles.View_578_10495}>
              <Text style={styles.Text_578_10495}>17 Jan, 2021 05 : 00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_577_10652}>
          <View style={styles.View_I577_10652_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a8/0081/14212f032638815f7282b260d1a3385f"
              }}
              style={styles.ImageBackground_I577_10652_5_61_2_352}
            />
          </View>
        </View>
        <View style={styles.View_577_10801}>
          <View style={styles.View_I577_10801_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I577_10801_5_61_91_2355}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_577_10653}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10d3/ad96/8be181e1e957631a459ca61177abd35c"
          }}
          style={styles.ImageBackground_578_10496}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c25/0a4f/ce9c43e35c9ef416b243ce14c1696632"
          }}
          style={styles.ImageBackground_578_10493}
        />
      </View>
      <View style={styles.View_578_10498}>
        <View style={styles.View_578_10499}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b76/be5a/042d2ea9016f56691828867c11feb07d"
            }}
            style={styles.ImageBackground_578_10500}
          />
          <View style={styles.View_578_10501}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2236/5ce0/8d0346b9bb850c8ea2c0cd4b14e0cef3"
              }}
              style={styles.ImageBackground_578_10502}
            />
            <View style={styles.View_578_10503}>
              <Text style={styles.Text_578_10503}>17 Jan, 2021 05 : 00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_578_10504}>
          <View style={styles.View_I578_10504_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a8/0081/14212f032638815f7282b260d1a3385f"
              }}
              style={styles.ImageBackground_I578_10504_5_61_2_352}
            />
          </View>
        </View>
        <View style={styles.View_578_10505}>
          <View style={styles.View_I578_10505_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I578_10505_5_61_91_2355}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_578_10506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10d3/ad96/8be181e1e957631a459ca61177abd35c"
          }}
          style={styles.ImageBackground_578_10507}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/160a/cfae/7f458c91ef16e1ea678ca44c4ca15805"
          }}
          style={styles.ImageBackground_578_10508}
        />
      </View>
      <View style={styles.View_578_10520}>
        <View style={styles.View_578_10521}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa81/2c0d/fe4b412737612aa75e8fb2963833e558"
            }}
            style={styles.ImageBackground_578_10522}
          />
          <View style={styles.View_578_10523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2236/5ce0/8d0346b9bb850c8ea2c0cd4b14e0cef3"
              }}
              style={styles.ImageBackground_578_10524}
            />
            <View style={styles.View_578_10525}>
              <Text style={styles.Text_578_10525}>17 Jan, 2021 05 : 00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_578_10526}>
          <View style={styles.View_I578_10526_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a8/0081/14212f032638815f7282b260d1a3385f"
              }}
              style={styles.ImageBackground_I578_10526_5_61_2_352}
            />
          </View>
        </View>
        <View style={styles.View_578_10527}>
          <View style={styles.View_I578_10527_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I578_10527_5_61_91_2355}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_578_10528}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10d3/ad96/8be181e1e957631a459ca61177abd35c"
          }}
          style={styles.ImageBackground_578_10529}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/160a/cfae/7f458c91ef16e1ea678ca44c4ca15805"
          }}
          style={styles.ImageBackground_578_10530}
        />
      </View>
      <View style={styles.View_578_10542}>
        <View style={styles.View_578_10543}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6ac/bdff/d0dcae4e40b45271be5824e8ec67bb72"
            }}
            style={styles.ImageBackground_578_10544}
          />
          <View style={styles.View_578_10545}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2236/5ce0/8d0346b9bb850c8ea2c0cd4b14e0cef3"
              }}
              style={styles.ImageBackground_578_10546}
            />
            <View style={styles.View_578_10547}>
              <Text style={styles.Text_578_10547}>17 Jan, 2021 05 : 00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_578_10548}>
          <View style={styles.View_I578_10548_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a8/0081/14212f032638815f7282b260d1a3385f"
              }}
              style={styles.ImageBackground_I578_10548_5_61_2_352}
            />
          </View>
        </View>
        <View style={styles.View_578_10549}>
          <View style={styles.View_I578_10549_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I578_10549_5_61_91_2355}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_578_10550}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10d3/ad96/8be181e1e957631a459ca61177abd35c"
          }}
          style={styles.ImageBackground_578_10551}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c25/0a4f/ce9c43e35c9ef416b243ce14c1696632"
          }}
          style={styles.ImageBackground_578_10552}
        />
      </View>
      <View style={styles.View_578_10564}>
        <View style={styles.View_578_10565}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f933/adc4/ea8c94a27f739f8324714ed568a4331b"
            }}
            style={styles.ImageBackground_578_10566}
          />
          <View style={styles.View_578_10567}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2236/5ce0/8d0346b9bb850c8ea2c0cd4b14e0cef3"
              }}
              style={styles.ImageBackground_578_10568}
            />
            <View style={styles.View_578_10569}>
              <Text style={styles.Text_578_10569}>17 Jan, 2021 05 : 00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_578_10570}>
          <View style={styles.View_I578_10570_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a8/0081/14212f032638815f7282b260d1a3385f"
              }}
              style={styles.ImageBackground_I578_10570_5_61_2_352}
            />
          </View>
        </View>
        <View style={styles.View_578_10571}>
          <View style={styles.View_I578_10571_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I578_10571_5_61_91_2355}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_578_10572}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c362/5559/89e092645c02a7ad4d4cffa88712d336"
          }}
          style={styles.ImageBackground_578_10573}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/160a/cfae/7f458c91ef16e1ea678ca44c4ca15805"
          }}
          style={styles.ImageBackground_578_10574}
        />
      </View>
      <View style={styles.View_578_10590}>
        <View style={styles.View_I578_10590_2_225}>
          <Text style={styles.Text_I578_10590_2_225}>Add Reminder</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("134%") },
  View_577_10635: {
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
  View_I577_10635_17_96: {
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
  View_I577_10635_17_100: {
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
  ImageBackground_I577_10635_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_10635_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I577_10635_17_114: {
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
  ImageBackground_I577_10635_17_117: {
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
  ImageBackground_I577_10635_17_122: {
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
  ImageBackground_I577_10635_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I577_10635_17_124: {
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
  View_I577_10635_17_126: {
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
  ImageBackground_I577_10635_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_577_10636: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("132%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I577_10636_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10637: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_577_10638: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_577_10639: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_10640: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%")
  },
  View_577_10641: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_577_10643: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_578_10497: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_577_10642: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10495: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_578_10495: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_10652: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I577_10652_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I577_10652_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10801: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I577_10801_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I577_10801_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_577_10653: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_578_10496: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_578_10493: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_578_10498: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%")
  },
  View_578_10499: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_578_10500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_578_10501: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10502: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10503: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_578_10503: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_578_10504: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I578_10504_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10504_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10505: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I578_10505_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10505_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10506: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_578_10507: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_578_10508: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_578_10520: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59%")
  },
  View_578_10521: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_578_10522: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_578_10523: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10524: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10525: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_578_10525: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_578_10526: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I578_10526_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10526_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10527: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I578_10527_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10527_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10528: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_578_10529: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_578_10530: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_578_10542: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("80%")
  },
  View_578_10543: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_578_10544: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_578_10545: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10546: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10547: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_578_10547: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_578_10548: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I578_10548_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10548_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10549: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I578_10549_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10549_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10550: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_578_10551: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_578_10552: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_578_10564: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("101%")
  },
  View_578_10565: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_578_10566: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_578_10567: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10568: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10569: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_578_10569: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_578_10570: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I578_10570_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10570_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_578_10571: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I578_10571_5_61: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I578_10571_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_578_10572: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_578_10573: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_578_10574: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_578_10590: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("122%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I578_10590_2_225: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I578_10590_2_225: {
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
