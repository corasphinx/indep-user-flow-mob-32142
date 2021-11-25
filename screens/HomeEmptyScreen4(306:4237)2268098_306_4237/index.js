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
      <View style={styles.View_306_4244}>
        <View style={styles.View_306_4245} />
        <View style={styles.View_582_11025}>
          <View style={styles.View_582_11026}>
            <View style={styles.View_582_11027}>
              <Text style={styles.Text_582_11027}>Reminders</Text>
            </View>
            <View style={styles.View_582_11028}>
              <Text style={styles.Text_582_11028}>Trips</Text>
            </View>
            <View style={styles.View_582_11029}>
              <Text style={styles.Text_582_11029}>Clients</Text>
            </View>
            <View style={styles.View_582_11030}>
              <Text style={styles.Text_582_11030}>Invoices</Text>
            </View>
            <View style={styles.View_582_11031}>
              <Text style={styles.Text_582_11031}>Transactions</Text>
            </View>
            <View style={styles.View_582_11032}>
              <Text style={styles.Text_582_11032}>Vendors</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_582_11033}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a3/a1a7/6e64ed71df27594826e634e9bd951372"
          }}
          style={styles.ImageBackground_306_4246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74ea/4044/de714e208eb903357567e6117920caa6"
          }}
          style={styles.ImageBackground_306_4247}
        />
        <View style={styles.View_306_4248}>
          <View style={styles.View_I306_4248_2_225}>
            <Text style={styles.Text_I306_4248_2_225}>Add Transaction</Text>
          </View>
        </View>
        <View style={styles.View_306_4249} />
      </View>
      <View style={styles.View_306_4250}>
        <View style={styles.View_I306_4250_17_96} />
        <View style={styles.View_I306_4250_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I306_4250_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I306_4250_17_110}
          />
          <View style={styles.View_I306_4250_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I306_4250_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I306_4250_17_122}
            />
            <View style={styles.View_I306_4250_17_123} />
          </View>
        </View>
        <View style={styles.View_I306_4250_17_124} />
        <View style={styles.View_I306_4250_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I306_4250_17_127}
          />
        </View>
      </View>
      <View style={styles.View_306_4251}>
        <View style={styles.View_306_4252}>
          <View style={styles.View_306_4253}>
            <View style={styles.View_306_4254}>
              <View style={styles.View_306_4255}>
                <Text style={styles.Text_306_4255}>TFC : $ 5,450</Text>
              </View>
              <View style={styles.View_306_4256}>
                <Text style={styles.Text_306_4256}>John Doe</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/9d7f/770ae97ff5b2df02d49578a2b84340e6"
          }}
          style={styles.ImageBackground_306_4257}
        />
        <View style={styles.View_306_4258}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
            }}
            style={styles.ImageBackground_I306_4258_2_192}
          />
        </View>
        <View style={styles.View_306_4259}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c71/c336/dfce38f3dd866b3217e008c43678cc52"
            }}
            style={styles.ImageBackground_I306_4259_2_200}
          />
        </View>
      </View>
      <View style={styles.View_306_4260}>
        <View style={styles.View_306_4261}>
          <Text style={styles.Text_306_4261}>Income</Text>
        </View>
        <View style={styles.View_306_4262}>
          <Text style={styles.Text_306_4262}>Expenses</Text>
        </View>
        <View style={styles.View_306_4263}>
          <Text style={styles.Text_306_4263}>Net Flow</Text>
        </View>
        <View style={styles.View_306_4264}>
          <View style={styles.View_306_4265}>
            <Text style={styles.Text_306_4265}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658f/af21/757971600b545063af187edb548a6f38"
            }}
            style={styles.ImageBackground_306_4266}
          />
        </View>
      </View>
      <View style={styles.View_306_4267}>
        <View style={styles.View_306_4268}>
          <View style={styles.View_306_4269}>
            <Text style={styles.Text_306_4269}>$50</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4270}
        />
        <View style={styles.View_306_4271}>
          <View style={styles.View_306_4272}>
            <Text style={styles.Text_306_4272}>$40</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4273}
        />
        <View style={styles.View_306_4274}>
          <Text style={styles.Text_306_4274}>$30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4275}
        />
        <View style={styles.View_306_4276}>
          <Text style={styles.Text_306_4276}>$20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4277}
        />
        <View style={styles.View_306_4278}>
          <Text style={styles.Text_306_4278}>$10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4279}
        />
        <View style={styles.View_306_4280}>
          <Text style={styles.Text_306_4280}>Jan</Text>
        </View>
        <View style={styles.View_306_4281}>
          <Text style={styles.Text_306_4281}>Feb</Text>
        </View>
        <View style={styles.View_306_4282}>
          <Text style={styles.Text_306_4282}>Mar</Text>
        </View>
        <View style={styles.View_306_4283}>
          <Text style={styles.Text_306_4283}>Apr</Text>
        </View>
        <View style={styles.View_306_4284}>
          <Text style={styles.Text_306_4284}>May</Text>
        </View>
        <View style={styles.View_306_4285}>
          <Text style={styles.Text_306_4285}>Jun</Text>
        </View>
      </View>
      <View style={styles.View_306_4293}>
        <View style={styles.View_I306_4293_70_449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/e921/55f7f58408810880d4bd15efed0eadf7"
            }}
            style={styles.ImageBackground_I306_4293_70_450}
          />
          <View style={styles.View_I306_4293_80_420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/10a6/a21f39a2900119995e073ab48851fd1a"
              }}
              style={styles.ImageBackground_I306_4293_80_420_2_188}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb44/eb99/e507aa3bc2ff07bd567c7093ff8553d3"
            }}
            style={styles.ImageBackground_I306_4293_80_424}
          />
          <View style={styles.View_I306_4293_80_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/7d09/17b59baf44ff30088f2c9742f2980a5f"
              }}
              style={styles.ImageBackground_I306_4293_80_426_2_240}
            />
          </View>
          <View style={styles.View_I306_4293_80_430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c1f/f8b7/95e0526278785e44ef3fb79b7601bb12"
              }}
              style={styles.ImageBackground_I306_4293_80_430_2_337}
            />
          </View>
        </View>
        <View style={styles.View_I306_4293_70_456}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/a50c/138bf09aece5bf54cdd39416d70882f4"
            }}
            style={styles.ImageBackground_I306_4293_70_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9c/5269/e543f224e9d56517cfb5e2184ecd9e02"
            }}
            style={styles.ImageBackground_I306_4293_70_458}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6078/135d/f82fdb6c75c7864b768d613a0c360539"
        }}
        style={styles.ImageBackground_306_4294}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("143%") },
  View_306_4244: {
    width: wp("127%"),
    minWidth: wp("127%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-27%"),
    top: hp("60%")
  },
  View_306_4245: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_582_11025: {
    width: wp("122%"),
    minWidth: wp("122%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_582_11026: {
    width: wp("122%"),
    minWidth: wp("122%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_582_11027: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11027: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11028: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11028: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11029: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11029: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11030: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11030: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11031: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11031: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11032: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_582_11032: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11033: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("4%")
  },
  ImageBackground_306_4246: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("41%")
  },
  ImageBackground_306_4247: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("46%")
  },
  View_306_4248: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I306_4248_2_225: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I306_4248_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4249: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.15000000596046448
  },
  View_306_4250: {
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
  View_I306_4250_17_96: {
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
  View_I306_4250_17_100: {
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
  ImageBackground_I306_4250_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I306_4250_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I306_4250_17_114: {
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
  ImageBackground_I306_4250_17_117: {
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
  ImageBackground_I306_4250_17_122: {
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
  View_I306_4250_17_123: {
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
  View_I306_4250_17_124: {
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
  View_I306_4250_17_126: {
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
  ImageBackground_I306_4250_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_306_4251: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_306_4252: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  View_306_4253: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4254: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4255: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_306_4255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4256: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4256: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4257: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_306_4258: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I306_4258_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4259: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I306_4259_2_200: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4260: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  View_306_4261: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4262: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4262: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4263: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4263: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4264: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%")
  },
  View_306_4265: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4265: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4266: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_306_4267: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%")
  },
  View_306_4268: {
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
  View_306_4269: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4270: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_306_4271: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_306_4272: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_306_4272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4273: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  View_306_4274: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_306_4274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4275: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%")
  },
  View_306_4276: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_306_4276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4277: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("17%")
  },
  View_306_4278: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_306_4278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4279: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%")
  },
  View_306_4280: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4281: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4282: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4283: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4284: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4285: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_306_4285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4293: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("132%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I306_4293_70_449: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I306_4293_70_450: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I306_4293_80_420: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I306_4293_80_420_2_188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I306_4293_80_424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I306_4293_80_426: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I306_4293_80_426_2_240: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I306_4293_80_430: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I306_4293_80_430_2_337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I306_4293_70_456: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("-3%")
  },
  ImageBackground_I306_4293_70_457: {
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
  ImageBackground_I306_4293_70_458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_4294: {
    width: wp("48%"),
    height: hp("24%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
