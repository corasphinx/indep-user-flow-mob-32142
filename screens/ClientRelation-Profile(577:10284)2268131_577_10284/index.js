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
      <View style={styles.View_577_10285}>
        <View style={styles.View_I577_10285_17_96} />
        <View style={styles.View_I577_10285_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I577_10285_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I577_10285_17_110}
          />
          <View style={styles.View_I577_10285_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I577_10285_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I577_10285_17_122}
            />
            <View style={styles.View_I577_10285_17_123} />
          </View>
        </View>
        <View style={styles.View_I577_10285_17_124} />
        <View style={styles.View_I577_10285_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I577_10285_17_127}
          />
        </View>
      </View>
      <View style={styles.View_577_10286}>
        <View style={styles.View_I577_10286_2_225}>
          <Text style={styles.Text_I577_10286_2_225}>Add Client</Text>
        </View>
      </View>
      <View style={styles.View_577_10287}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I577_10287_17_60}
        />
      </View>
      <View style={styles.View_577_10288}>
        <View style={styles.View_577_10289}>
          <Text style={styles.Text_577_10289}>Client Details</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7285/075c/e7be176c1dbcb69fd3d7bef79df3d1d2"
          }}
          style={styles.ImageBackground_577_10290}
        />
      </View>
      <View style={styles.View_577_10439} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6b/4c32/52d2617dd654d9ee24471525b327a09a"
        }}
        style={styles.ImageBackground_577_10448}
      />
      <View style={styles.View_577_10513}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I577_10513_17_60}
        />
      </View>
      <View style={styles.View_582_10582}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_577_10450}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_577_10502}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_577_10503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_577_10505}
        />
        <View style={styles.View_577_10507}>
          <View style={styles.View_577_10508} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b9c/260a/31baed27ae826db81634f835a5609422"
            }}
            style={styles.ImageBackground_577_10509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ade1/0cba/a6606e2944049d1bb3a041bdb23e2ec8"
            }}
            style={styles.ImageBackground_577_10510}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/c98f/e8f51f95fe8c4b5e1d5946577acba467"
          }}
          style={styles.ImageBackground_577_10500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cde/1c08/344707fa3a7d4cb71237ed2e2c03bb32"
          }}
          style={styles.ImageBackground_577_10501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea7e/824e/54cb5f88eace43d2ccf2f7a8423b16ab"
          }}
          style={styles.ImageBackground_577_10504}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cde/1c08/344707fa3a7d4cb71237ed2e2c03bb32"
          }}
          style={styles.ImageBackground_577_10506}
        />
      </View>
      <View style={styles.View_577_10511}>
        <View style={styles.View_I577_10511_2_225}>
          <Text style={styles.Text_I577_10511_2_225}>Add Note</Text>
        </View>
      </View>
      <View style={styles.View_845_12432}>
        <View style={styles.View_I845_12432_2_225}>
          <Text style={styles.Text_I845_12432_2_225}>Add Reminder</Text>
        </View>
      </View>
      <View style={styles.View_845_12434}>
        <View style={styles.View_I845_12434_2_225}>
          <Text style={styles.Text_I845_12434_2_225}>Create Invoice</Text>
        </View>
      </View>
      <View style={styles.View_577_10471}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acec/71c7/d0593f75ff1ac2f61794a08c069615b3"
          }}
          style={styles.ImageBackground_577_10472}
        />
        <View style={styles.View_577_10473}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/581b/bcc5/10bbf647d1ea3ffe4eb0cec6c8546c78"
            }}
            style={styles.ImageBackground_I577_10473_405_5692}
          />
        </View>
      </View>
      <View style={styles.View_577_10477}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/626d/a7a2/16c96a2d54d670c644e6677d477e4ca4"
          }}
          style={styles.ImageBackground_577_10478}
        />
        <View style={styles.View_577_10479}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a65/963e/f656e26eaa58b801b02341943af88d23"
            }}
            style={styles.ImageBackground_I577_10479_70_684}
          />
        </View>
      </View>
      <View style={styles.View_577_10498}>
        <View style={styles.View_577_10457}>
          <View style={styles.View_I577_10457_5_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315b/b659/a0ef0bdfa61c23c413a7d8854bb0b670"
              }}
              style={styles.ImageBackground_I577_10457_5_58_405_5646}
            />
          </View>
          <View style={styles.View_I577_10457_5_57}>
            <Text style={styles.Text_I577_10457_5_57}>Email</Text>
          </View>
        </View>
        <View style={styles.View_577_10488}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d3e/b6e3/7bec879f52a6932aeb08bbd85f522a07"
            }}
            style={styles.ImageBackground_577_10489}
          />
          <View style={styles.View_577_10490}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc80/67a5/578fb3a0fd95c7f554d6b34a018eab03"
              }}
              style={styles.ImageBackground_I577_10490_405_5646}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_577_10499}>
        <View style={styles.View_577_10451}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f53/52c6/2f1c9ff7de7f8aadef2fd648a1898999"
            }}
            style={styles.ImageBackground_I577_10451_5_58}
          />
          <View style={styles.View_I577_10451_5_57}>
            <Text style={styles.Text_I577_10451_5_57}>Call</Text>
          </View>
        </View>
        <View style={styles.View_582_10583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a1/c7e5/b385079d727ece22a86c0dd09c3aa668"
            }}
            style={styles.ImageBackground_I582_10583_5_58}
          />
          <View style={styles.View_I582_10583_5_57}>
            <Text style={styles.Text_I582_10583_5_57}>Chat</Text>
          </View>
        </View>
        <View style={styles.View_577_10491}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7838/6392/b233a72370a61977270d244b82a24cc3"
            }}
            style={styles.ImageBackground_577_10492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9be/5f11/6435a9bc2ed2b9391b8a7edb4c81b3c2"
            }}
            style={styles.ImageBackground_577_10493}
          />
        </View>
      </View>
      <View style={styles.View_577_10440}>
        <View style={styles.View_577_10441} />
        <View style={styles.View_577_10447}>
          <Text style={styles.Text_577_10447}>EP</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("162%") },
  View_577_10285: {
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
  View_I577_10285_17_96: {
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
  View_I577_10285_17_100: {
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
  ImageBackground_I577_10285_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_10285_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I577_10285_17_114: {
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
  ImageBackground_I577_10285_17_117: {
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
  ImageBackground_I577_10285_17_122: {
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
  View_I577_10285_17_123: {
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
  View_I577_10285_17_124: {
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
  View_I577_10285_17_126: {
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
  ImageBackground_I577_10285_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_577_10286: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I577_10286_2_225: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I577_10286_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_10287: {
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
  ImageBackground_I577_10287_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10288: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_577_10289: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_577_10289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_577_10290: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_10439: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("151%"),
    minHeight: hp("151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_577_10448: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("33%")
  },
  View_577_10513: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("160%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I577_10513_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_582_10582: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69%")
  },
  ImageBackground_577_10450: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_577_10502: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  ImageBackground_577_10503: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  ImageBackground_577_10505: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%")
  },
  View_577_10507: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_577_10508: {
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
  ImageBackground_577_10509: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_577_10510: {
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
  ImageBackground_577_10500: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_577_10501: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  ImageBackground_577_10504: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  ImageBackground_577_10506: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  View_577_10511: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("134%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I577_10511_2_225: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I577_10511_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_845_12432: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("142%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I845_12432_2_225: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I845_12432_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_845_12434: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("151%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I845_12434_2_225: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I845_12434_2_225: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_10471: {
    width: wp("53%"),
    height: hp("4%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_577_10472: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_577_10473: {
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
  ImageBackground_I577_10473_405_5692: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10477: {
    width: wp("81%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_577_10478: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_577_10479: {
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
  ImageBackground_I577_10479_70_684: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10498: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%")
  },
  View_577_10457: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I577_10457_5_58: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I577_10457_5_58_405_5646: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I577_10457_5_57: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I577_10457_5_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_10488: {
    width: wp("59%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_577_10489: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_577_10490: {
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
  ImageBackground_I577_10490_405_5646: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_10499: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("48%")
  },
  View_577_10451: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  ImageBackground_I577_10451_5_58: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I577_10451_5_57: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I577_10451_5_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_10583: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  ImageBackground_I582_10583_5_58: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I582_10583_5_57: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I582_10583_5_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_10491: {
    width: wp("38%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_577_10492: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_577_10493: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_10440: {
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
  View_577_10441: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 219, 255, 1)"
  },
  View_577_10447: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_577_10447: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 29,
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
