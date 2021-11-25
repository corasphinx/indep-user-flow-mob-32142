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
      <View style={styles.View_306_5654}>
        <View style={styles.View_306_5655} />
        <View style={styles.View_582_11576}>
          <View style={styles.View_582_11577}>
            <View style={styles.View_582_11578}>
              <Text style={styles.Text_582_11578}>Reminders</Text>
            </View>
            <View style={styles.View_582_11579}>
              <Text style={styles.Text_582_11579}>Trips</Text>
            </View>
            <View style={styles.View_582_11580}>
              <Text style={styles.Text_582_11580}>Clients</Text>
            </View>
            <View style={styles.View_582_11581}>
              <Text style={styles.Text_582_11581}>Invoices</Text>
            </View>
            <View style={styles.View_582_11582}>
              <Text style={styles.Text_582_11582}>Transactions</Text>
            </View>
            <View style={styles.View_582_11583}>
              <Text style={styles.Text_582_11583}>Vendors</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_582_11584}
          />
        </View>
        <View style={styles.View_306_6115}>
          <View style={styles.View_I306_6115_2_225}>
            <Text style={styles.Text_I306_6115_2_225}>Add Vendor</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7a/d55c/df220c1701764c9f5360d2ef4c576c33"
          }}
          style={styles.ImageBackground_306_6116}
        />
        <View style={styles.View_306_6117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6b/4c32/52d2617dd654d9ee24471525b327a09a"
            }}
            style={styles.ImageBackground_306_6118}
          />
          <View style={styles.View_306_6119}>
            <Text style={styles.Text_306_6119}>
              Loreum ipsum dollar is dummy rext
            </Text>
          </View>
          <View style={styles.View_306_6120} />
          <View style={styles.View_306_6121}>
            <Text style={styles.Text_306_6121}>DR</Text>
          </View>
        </View>
        <View style={styles.View_306_6122}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a947/4717/4bac517662caf03273837c1188069737"
            }}
            style={styles.ImageBackground_306_6123}
          />
          <View style={styles.View_306_6124}>
            <Text style={styles.Text_306_6124}>
              Loreum ipsum dollar is dummy rext
            </Text>
          </View>
          <View style={styles.View_306_6125} />
          <View style={styles.View_306_6126}>
            <Text style={styles.Text_306_6126}>EH</Text>
          </View>
        </View>
        <View style={styles.View_306_6127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07d1/4446/1e3aca7c733824337abebad2ad9fa511"
            }}
            style={styles.ImageBackground_306_6128}
          />
          <View style={styles.View_306_6129}>
            <Text style={styles.Text_306_6129}>
              Loreum ipsum dollar is dummy rext
            </Text>
          </View>
          <View style={styles.View_306_6130} />
          <View style={styles.View_306_6131}>
            <Text style={styles.Text_306_6131}>MM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_306_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_306_6133}
        />
        <View style={styles.View_306_5659} />
      </View>
      <View style={styles.View_306_5660}>
        <View style={styles.View_I306_5660_17_96} />
        <View style={styles.View_I306_5660_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I306_5660_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I306_5660_17_110}
          />
          <View style={styles.View_I306_5660_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I306_5660_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I306_5660_17_122}
            />
            <View style={styles.View_I306_5660_17_123} />
          </View>
        </View>
        <View style={styles.View_I306_5660_17_124} />
        <View style={styles.View_I306_5660_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I306_5660_17_127}
          />
        </View>
      </View>
      <View style={styles.View_306_5661}>
        <View style={styles.View_306_5662}>
          <View style={styles.View_306_5663}>
            <View style={styles.View_306_5664}>
              <View style={styles.View_306_5665}>
                <Text style={styles.Text_306_5665}>TFC : $ 5,450</Text>
              </View>
              <View style={styles.View_306_5666}>
                <Text style={styles.Text_306_5666}>John Doe</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/9d7f/770ae97ff5b2df02d49578a2b84340e6"
          }}
          style={styles.ImageBackground_306_5667}
        />
        <View style={styles.View_306_5668}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
            }}
            style={styles.ImageBackground_I306_5668_2_192}
          />
        </View>
        <View style={styles.View_306_5669}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c71/c336/dfce38f3dd866b3217e008c43678cc52"
            }}
            style={styles.ImageBackground_I306_5669_2_200}
          />
        </View>
      </View>
      <View style={styles.View_306_5670}>
        <View style={styles.View_306_5671}>
          <Text style={styles.Text_306_5671}>Income</Text>
        </View>
        <View style={styles.View_306_5672}>
          <Text style={styles.Text_306_5672}>Expenses</Text>
        </View>
        <View style={styles.View_306_5673}>
          <Text style={styles.Text_306_5673}>Net Flow</Text>
        </View>
        <View style={styles.View_306_5674}>
          <View style={styles.View_306_5675}>
            <Text style={styles.Text_306_5675}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658f/af21/757971600b545063af187edb548a6f38"
            }}
            style={styles.ImageBackground_306_5676}
          />
        </View>
        <View style={styles.View_582_11453}>
          <View style={styles.View_582_11454}>
            <View style={styles.View_582_11455}>
              <Text style={styles.Text_582_11455}>$50</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
            }}
            style={styles.ImageBackground_582_11456}
          />
          <View style={styles.View_582_11457}>
            <View style={styles.View_582_11458}>
              <Text style={styles.Text_582_11458}>$40</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
            }}
            style={styles.ImageBackground_582_11459}
          />
          <View style={styles.View_582_11460}>
            <Text style={styles.Text_582_11460}>$30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
            }}
            style={styles.ImageBackground_582_11461}
          />
          <View style={styles.View_582_11462}>
            <Text style={styles.Text_582_11462}>$20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
            }}
            style={styles.ImageBackground_582_11463}
          />
          <View style={styles.View_582_11464}>
            <Text style={styles.Text_582_11464}>$10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
            }}
            style={styles.ImageBackground_582_11465}
          />
          <View style={styles.View_582_11466}>
            <Text style={styles.Text_582_11466}>Jan</Text>
          </View>
          <View style={styles.View_582_11467}>
            <Text style={styles.Text_582_11467}>Feb</Text>
          </View>
          <View style={styles.View_582_11468}>
            <Text style={styles.Text_582_11468}>Mar</Text>
          </View>
          <View style={styles.View_582_11469}>
            <Text style={styles.Text_582_11469}>Apr</Text>
          </View>
          <View style={styles.View_582_11470}>
            <Text style={styles.Text_582_11470}>May</Text>
          </View>
          <View style={styles.View_582_11471}>
            <Text style={styles.Text_582_11471}>Jun</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b850/1c6d/557557fa5944b74785bcc818411f0037"
            }}
            style={styles.ImageBackground_582_11472}
          />
          <View style={styles.View_582_11475} />
          <View style={styles.View_582_11476}>
            <Text style={styles.Text_582_11476}>$ 30</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
            }}
            style={styles.ImageBackground_582_11477}
          />
        </View>
      </View>
      <View style={styles.View_306_5703}>
        <View style={styles.View_I306_5703_70_449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/e921/55f7f58408810880d4bd15efed0eadf7"
            }}
            style={styles.ImageBackground_I306_5703_70_450}
          />
          <View style={styles.View_I306_5703_80_420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/10a6/a21f39a2900119995e073ab48851fd1a"
              }}
              style={styles.ImageBackground_I306_5703_80_420_2_188}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb44/eb99/e507aa3bc2ff07bd567c7093ff8553d3"
            }}
            style={styles.ImageBackground_I306_5703_80_424}
          />
          <View style={styles.View_I306_5703_80_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/7d09/17b59baf44ff30088f2c9742f2980a5f"
              }}
              style={styles.ImageBackground_I306_5703_80_426_2_240}
            />
          </View>
          <View style={styles.View_I306_5703_80_430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c1f/f8b7/95e0526278785e44ef3fb79b7601bb12"
              }}
              style={styles.ImageBackground_I306_5703_80_430_2_337}
            />
          </View>
        </View>
        <View style={styles.View_I306_5703_70_456}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/a50c/138bf09aece5bf54cdd39416d70882f4"
            }}
            style={styles.ImageBackground_I306_5703_70_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9c/5269/e543f224e9d56517cfb5e2184ecd9e02"
            }}
            style={styles.ImageBackground_I306_5703_70_458}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("143%") },
  View_306_5654: {
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
  View_306_5655: {
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
  View_582_11576: {
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
  View_582_11577: {
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
  View_582_11578: {
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
  Text_582_11578: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11579: {
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
  Text_582_11579: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11580: {
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
  Text_582_11580: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11581: {
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
  Text_582_11581: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11582: {
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
  Text_582_11582: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11583: {
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
  Text_582_11583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11584: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114%"),
    top: hp("4%")
  },
  View_306_6115: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I306_6115_2_225: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I306_6115_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_6116: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("12%")
  },
  View_306_6117: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("18%")
  },
  ImageBackground_306_6118: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_306_6119: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_306_6119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_6120: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_306_6121: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_306_6121: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_6122: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("32%")
  },
  ImageBackground_306_6123: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_306_6124: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_306_6124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_6125: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_306_6126: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_306_6126: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_6127: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("46%")
  },
  ImageBackground_306_6128: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_306_6129: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_306_6129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_6130: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_306_6131: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_306_6131: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_6132: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("29%")
  },
  ImageBackground_306_6133: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("43%")
  },
  View_306_5659: {
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
  View_306_5660: {
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
  View_I306_5660_17_96: {
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
  View_I306_5660_17_100: {
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
  ImageBackground_I306_5660_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I306_5660_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I306_5660_17_114: {
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
  ImageBackground_I306_5660_17_117: {
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
  ImageBackground_I306_5660_17_122: {
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
  View_I306_5660_17_123: {
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
  View_I306_5660_17_124: {
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
  View_I306_5660_17_126: {
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
  ImageBackground_I306_5660_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_306_5661: {
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
  View_306_5662: {
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
  View_306_5663: {
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
  View_306_5664: {
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
  View_306_5665: {
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
  Text_306_5665: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_5666: {
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
  Text_306_5666: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_5667: {
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
  View_306_5668: {
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
  ImageBackground_I306_5668_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_5669: {
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
  ImageBackground_I306_5669_2_200: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_5670: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  View_306_5671: {
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
  Text_306_5671: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_5672: {
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
  Text_306_5672: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_5673: {
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
  Text_306_5673: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_5674: {
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
  View_306_5675: {
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
  Text_306_5675: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_5676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_582_11453: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_582_11454: {
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
  View_582_11455: {
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
  Text_582_11455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11456: {
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
  View_582_11457: {
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
  View_582_11458: {
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
  Text_582_11458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11459: {
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
  View_582_11460: {
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
  Text_582_11460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11461: {
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
  View_582_11462: {
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
  Text_582_11462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11463: {
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
  View_582_11464: {
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
  Text_582_11464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11465: {
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
  View_582_11466: {
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
  Text_582_11466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11467: {
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
  Text_582_11467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11468: {
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
  Text_582_11468: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11469: {
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
  Text_582_11469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11470: {
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
  Text_582_11470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11471: {
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
  Text_582_11471: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11472: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%")
  },
  View_582_11475: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_582_11476: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_582_11476: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11477: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("11%")
  },
  View_306_5703: {
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
  View_I306_5703_70_449: {
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
  ImageBackground_I306_5703_70_450: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I306_5703_80_420: {
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
  ImageBackground_I306_5703_80_420_2_188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I306_5703_80_424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I306_5703_80_426: {
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
  ImageBackground_I306_5703_80_426_2_240: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I306_5703_80_430: {
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
  ImageBackground_I306_5703_80_430_2_337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I306_5703_70_456: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("-3%")
  },
  ImageBackground_I306_5703_70_457: {
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
  ImageBackground_I306_5703_70_458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
