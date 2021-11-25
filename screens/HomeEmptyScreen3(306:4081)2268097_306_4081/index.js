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
      <View style={styles.View_306_4088}>
        <View style={styles.View_306_4089} />
        <View style={styles.View_582_11016}>
          <View style={styles.View_582_11017}>
            <View style={styles.View_582_11018}>
              <Text style={styles.Text_582_11018}>Reminders</Text>
            </View>
            <View style={styles.View_582_11019}>
              <Text style={styles.Text_582_11019}>Trips</Text>
            </View>
            <View style={styles.View_582_11020}>
              <Text style={styles.Text_582_11020}>Clients</Text>
            </View>
            <View style={styles.View_582_11021}>
              <Text style={styles.Text_582_11021}>Invoices</Text>
            </View>
            <View style={styles.View_582_11022}>
              <Text style={styles.Text_582_11022}>Transactions</Text>
            </View>
            <View style={styles.View_582_11023}>
              <Text style={styles.Text_582_11023}>Vendors</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_582_11024}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ade/911a/b40a4870cf8858239df0fee09fbd91ae"
          }}
          style={styles.ImageBackground_306_4090}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fee7/3034/12c5da132bb941bf5277278398654b23"
          }}
          style={styles.ImageBackground_306_4091}
        />
        <View style={styles.View_306_4092}>
          <View style={styles.View_I306_4092_2_225}>
            <Text style={styles.Text_I306_4092_2_225}>Create an invoice</Text>
          </View>
        </View>
        <View style={styles.View_306_4093} />
      </View>
      <View style={styles.View_306_4094}>
        <View style={styles.View_I306_4094_17_96} />
        <View style={styles.View_I306_4094_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I306_4094_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I306_4094_17_110}
          />
          <View style={styles.View_I306_4094_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I306_4094_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I306_4094_17_122}
            />
            <View style={styles.View_I306_4094_17_123} />
          </View>
        </View>
        <View style={styles.View_I306_4094_17_124} />
        <View style={styles.View_I306_4094_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I306_4094_17_127}
          />
        </View>
      </View>
      <View style={styles.View_306_4095}>
        <View style={styles.View_306_4096}>
          <View style={styles.View_306_4097}>
            <View style={styles.View_306_4098}>
              <View style={styles.View_306_4099}>
                <Text style={styles.Text_306_4099}>TFC : $ 5,450</Text>
              </View>
              <View style={styles.View_306_4100}>
                <Text style={styles.Text_306_4100}>John Doe</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/9d7f/770ae97ff5b2df02d49578a2b84340e6"
          }}
          style={styles.ImageBackground_306_4101}
        />
        <View style={styles.View_306_4102}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
            }}
            style={styles.ImageBackground_I306_4102_2_192}
          />
        </View>
        <View style={styles.View_306_4103}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c71/c336/dfce38f3dd866b3217e008c43678cc52"
            }}
            style={styles.ImageBackground_I306_4103_2_200}
          />
        </View>
      </View>
      <View style={styles.View_306_4104}>
        <View style={styles.View_306_4105}>
          <Text style={styles.Text_306_4105}>Income</Text>
        </View>
        <View style={styles.View_306_4106}>
          <Text style={styles.Text_306_4106}>Expenses</Text>
        </View>
        <View style={styles.View_306_4107}>
          <Text style={styles.Text_306_4107}>Net Flow</Text>
        </View>
        <View style={styles.View_306_4108}>
          <View style={styles.View_306_4109}>
            <Text style={styles.Text_306_4109}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658f/af21/757971600b545063af187edb548a6f38"
            }}
            style={styles.ImageBackground_306_4110}
          />
        </View>
      </View>
      <View style={styles.View_306_4111}>
        <View style={styles.View_306_4112}>
          <View style={styles.View_306_4113}>
            <Text style={styles.Text_306_4113}>$50</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4114}
        />
        <View style={styles.View_306_4115}>
          <View style={styles.View_306_4116}>
            <Text style={styles.Text_306_4116}>$40</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4117}
        />
        <View style={styles.View_306_4118}>
          <Text style={styles.Text_306_4118}>$30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4119}
        />
        <View style={styles.View_306_4120}>
          <Text style={styles.Text_306_4120}>$20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4121}
        />
        <View style={styles.View_306_4122}>
          <Text style={styles.Text_306_4122}>$10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4123}
        />
        <View style={styles.View_306_4124}>
          <Text style={styles.Text_306_4124}>Jan</Text>
        </View>
        <View style={styles.View_306_4125}>
          <Text style={styles.Text_306_4125}>Feb</Text>
        </View>
        <View style={styles.View_306_4126}>
          <Text style={styles.Text_306_4126}>Mar</Text>
        </View>
        <View style={styles.View_306_4127}>
          <Text style={styles.Text_306_4127}>Apr</Text>
        </View>
        <View style={styles.View_306_4128}>
          <Text style={styles.Text_306_4128}>May</Text>
        </View>
        <View style={styles.View_306_4129}>
          <Text style={styles.Text_306_4129}>Jun</Text>
        </View>
      </View>
      <View style={styles.View_306_4137}>
        <View style={styles.View_I306_4137_70_449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/e921/55f7f58408810880d4bd15efed0eadf7"
            }}
            style={styles.ImageBackground_I306_4137_70_450}
          />
          <View style={styles.View_I306_4137_80_420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/10a6/a21f39a2900119995e073ab48851fd1a"
              }}
              style={styles.ImageBackground_I306_4137_80_420_2_188}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb44/eb99/e507aa3bc2ff07bd567c7093ff8553d3"
            }}
            style={styles.ImageBackground_I306_4137_80_424}
          />
          <View style={styles.View_I306_4137_80_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/7d09/17b59baf44ff30088f2c9742f2980a5f"
              }}
              style={styles.ImageBackground_I306_4137_80_426_2_240}
            />
          </View>
          <View style={styles.View_I306_4137_80_430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c1f/f8b7/95e0526278785e44ef3fb79b7601bb12"
              }}
              style={styles.ImageBackground_I306_4137_80_430_2_337}
            />
          </View>
        </View>
        <View style={styles.View_I306_4137_70_456}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/a50c/138bf09aece5bf54cdd39416d70882f4"
            }}
            style={styles.ImageBackground_I306_4137_70_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9c/5269/e543f224e9d56517cfb5e2184ecd9e02"
            }}
            style={styles.ImageBackground_I306_4137_70_458}
          />
        </View>
      </View>
      <View style={styles.View_306_4861}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c7b/54c3/6dd92412bb1849f76dcdbae846df14ef"
          }}
          style={styles.ImageBackground_306_4734}
        />
        <View source={{ uri: "null" }} style={styles.View_306_4779} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a11/2ed2/01d981eeca2008e19f720c4065014383"
          }}
          style={styles.ImageBackground_306_4782}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cffd/d4e7/3180d2111f7016608465c5779e5d5d05"
          }}
          style={styles.ImageBackground_306_4784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9212/e075/3eb0e7bdad72a809455722ef3d2a57c6"
          }}
          style={styles.ImageBackground_306_4815}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("142%") },
  View_306_4088: {
    width: wp("127%"),
    minWidth: wp("127%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%")
  },
  View_306_4089: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_582_11016: {
    width: wp("122%"),
    minWidth: wp("122%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_582_11017: {
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
  View_582_11018: {
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
  Text_582_11018: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11019: {
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
  Text_582_11019: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11020: {
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
  Text_582_11020: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11021: {
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
  Text_582_11021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11022: {
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
  Text_582_11022: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11023: {
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
  Text_582_11023: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11024: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%")
  },
  ImageBackground_306_4090: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("41%")
  },
  ImageBackground_306_4091: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%")
  },
  View_306_4092: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I306_4092_2_225: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I306_4092_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4093: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.15000000596046448
  },
  View_306_4094: {
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
  View_I306_4094_17_96: {
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
  View_I306_4094_17_100: {
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
  ImageBackground_I306_4094_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I306_4094_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I306_4094_17_114: {
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
  ImageBackground_I306_4094_17_117: {
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
  ImageBackground_I306_4094_17_122: {
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
  View_I306_4094_17_123: {
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
  View_I306_4094_17_124: {
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
  View_I306_4094_17_126: {
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
  ImageBackground_I306_4094_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_306_4095: {
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
  View_306_4096: {
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
  View_306_4097: {
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
  View_306_4098: {
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
  View_306_4099: {
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
  Text_306_4099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4100: {
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
  Text_306_4100: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4101: {
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
  View_306_4102: {
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
  ImageBackground_I306_4102_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4103: {
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
  ImageBackground_I306_4103_2_200: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4104: {
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
  View_306_4105: {
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
  Text_306_4105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4106: {
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
  Text_306_4106: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4107: {
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
  Text_306_4107: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4108: {
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
  View_306_4109: {
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
  Text_306_4109: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4110: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_306_4111: {
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
  View_306_4112: {
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
  View_306_4113: {
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
  Text_306_4113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4114: {
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
  View_306_4115: {
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
  View_306_4116: {
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
  Text_306_4116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4117: {
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
  View_306_4118: {
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
  Text_306_4118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4119: {
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
  View_306_4120: {
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
  Text_306_4120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4121: {
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
  View_306_4122: {
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
  Text_306_4122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4123: {
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
  View_306_4124: {
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
  Text_306_4124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4125: {
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
  Text_306_4125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4126: {
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
  Text_306_4126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4127: {
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
  Text_306_4127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4128: {
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
  Text_306_4128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4129: {
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
  Text_306_4129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4137: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I306_4137_70_449: {
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
  ImageBackground_I306_4137_70_450: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I306_4137_80_420: {
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
  ImageBackground_I306_4137_80_420_2_188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I306_4137_80_424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I306_4137_80_426: {
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
  ImageBackground_I306_4137_80_426_2_240: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I306_4137_80_430: {
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
  ImageBackground_I306_4137_80_430_2_337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I306_4137_70_456: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("-3%")
  },
  ImageBackground_I306_4137_70_457: {
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
  ImageBackground_I306_4137_70_458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_306_4861: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("72%")
  },
  ImageBackground_306_4734: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_306_4779: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_306_4782: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%")
  },
  ImageBackground_306_4784: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%")
  },
  ImageBackground_306_4815: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
