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
      <View style={styles.View_351_3903}>
        <View style={styles.View_351_3904} />
        <View style={styles.View_582_11558}>
          <View style={styles.View_582_11559}>
            <View style={styles.View_582_11560}>
              <Text style={styles.Text_582_11560}>Reminders</Text>
            </View>
            <View style={styles.View_582_11561}>
              <Text style={styles.Text_582_11561}>Trips</Text>
            </View>
            <View style={styles.View_582_11562}>
              <Text style={styles.Text_582_11562}>Clients</Text>
            </View>
            <View style={styles.View_582_11563}>
              <Text style={styles.Text_582_11563}>Invoices</Text>
            </View>
            <View style={styles.View_582_11564}>
              <Text style={styles.Text_582_11564}>Transactions</Text>
            </View>
            <View style={styles.View_582_11565}>
              <Text style={styles.Text_582_11565}>Vendors</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_582_11566}
          />
        </View>
        <View style={styles.View_351_3912}>
          <View style={styles.View_I351_3912_70_449}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/e921/55f7f58408810880d4bd15efed0eadf7"
              }}
              style={styles.ImageBackground_I351_3912_70_450}
            />
            <View style={styles.View_I351_3912_80_420}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/10a6/a21f39a2900119995e073ab48851fd1a"
                }}
                style={styles.ImageBackground_I351_3912_80_420_2_188}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb44/eb99/e507aa3bc2ff07bd567c7093ff8553d3"
              }}
              style={styles.ImageBackground_I351_3912_80_424}
            />
            <View style={styles.View_I351_3912_80_426}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/7d09/17b59baf44ff30088f2c9742f2980a5f"
                }}
                style={styles.ImageBackground_I351_3912_80_426_2_240}
              />
            </View>
            <View style={styles.View_I351_3912_80_430}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c1f/f8b7/95e0526278785e44ef3fb79b7601bb12"
                }}
                style={styles.ImageBackground_I351_3912_80_430_2_337}
              />
            </View>
          </View>
          <View style={styles.View_I351_3912_70_456}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/a50c/138bf09aece5bf54cdd39416d70882f4"
              }}
              style={styles.ImageBackground_I351_3912_70_457}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9c/5269/e543f224e9d56517cfb5e2184ecd9e02"
              }}
              style={styles.ImageBackground_I351_3912_70_458}
            />
          </View>
        </View>
        <View style={styles.View_351_3913}>
          <View style={styles.View_I351_3913_2_225}>
            <Text style={styles.Text_I351_3913_2_225}>Create Invoice</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ade/911a/b40a4870cf8858239df0fee09fbd91ae"
          }}
          style={styles.ImageBackground_351_3914}
        />
        <View style={styles.View_351_3915}>
          <View style={styles.View_351_3916}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6b/4c32/52d2617dd654d9ee24471525b327a09a"
              }}
              style={styles.ImageBackground_351_3917}
            />
            <View style={styles.View_351_3918}>
              <Text style={styles.Text_351_3918}>#12FS22 | 12 Jan, 2021</Text>
            </View>
          </View>
          <View style={styles.View_351_3919} />
          <View style={styles.View_351_3920}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d82b/24dd/dc714ee6a707714ab6f1cb895cfc800b"
              }}
              style={styles.ImageBackground_I351_3920_2_291}
            />
          </View>
          <View style={styles.View_351_3921}>
            <View style={styles.View_351_3922}>
              <View style={styles.View_I351_3922_5_51}>
                <Text style={styles.Text_I351_3922_5_51}>Confirm</Text>
              </View>
            </View>
            <View style={styles.View_351_3923}>
              <Text style={styles.Text_351_3923}>$ 25.23</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_351_3924}>
          <View style={styles.View_351_3925}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6b/4c32/52d2617dd654d9ee24471525b327a09a"
              }}
              style={styles.ImageBackground_351_3926}
            />
            <View style={styles.View_351_3927}>
              <Text style={styles.Text_351_3927}>#12FS22 | 12 Jan, 2021</Text>
            </View>
          </View>
          <View style={styles.View_351_3928} />
          <View style={styles.View_351_3929}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d82b/24dd/dc714ee6a707714ab6f1cb895cfc800b"
              }}
              style={styles.ImageBackground_I351_3929_2_291}
            />
          </View>
          <View style={styles.View_351_3930}>
            <View style={styles.View_351_3931}>
              <View style={styles.View_I351_3931_5_51}>
                <Text style={styles.Text_I351_3931_5_51}>Confirm</Text>
              </View>
            </View>
            <View style={styles.View_351_3932}>
              <Text style={styles.Text_351_3932}>$ 25.23</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_351_3933}>
          <View style={styles.View_351_3934}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6b/4c32/52d2617dd654d9ee24471525b327a09a"
              }}
              style={styles.ImageBackground_351_3935}
            />
            <View style={styles.View_351_3936}>
              <Text style={styles.Text_351_3936}>#12FS22 | 12 Jan, 2021</Text>
            </View>
          </View>
          <View style={styles.View_351_3937} />
          <View style={styles.View_351_3938}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d82b/24dd/dc714ee6a707714ab6f1cb895cfc800b"
              }}
              style={styles.ImageBackground_I351_3938_2_291}
            />
          </View>
          <View style={styles.View_351_3939}>
            <View style={styles.View_351_3940}>
              <View style={styles.View_I351_3940_5_51}>
                <Text style={styles.Text_I351_3940_5_51}>Confirm</Text>
              </View>
            </View>
            <View style={styles.View_351_3941}>
              <Text style={styles.Text_351_3941}>$ 25.23</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_351_3942}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_351_3943}
        />
        <View style={styles.View_351_3944} />
      </View>
      <View style={styles.View_351_3945}>
        <View style={styles.View_I351_3945_17_96} />
        <View style={styles.View_I351_3945_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I351_3945_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I351_3945_17_110}
          />
          <View style={styles.View_I351_3945_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I351_3945_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I351_3945_17_122}
            />
            <View style={styles.View_I351_3945_17_123} />
          </View>
        </View>
        <View style={styles.View_I351_3945_17_124} />
        <View style={styles.View_I351_3945_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I351_3945_17_127}
          />
        </View>
      </View>
      <View style={styles.View_351_3946}>
        <View style={styles.View_351_3947}>
          <View style={styles.View_351_3948}>
            <View style={styles.View_351_3949}>
              <View style={styles.View_351_3950}>
                <Text style={styles.Text_351_3950}>TFC : $ 5,450</Text>
              </View>
              <View style={styles.View_351_3951}>
                <Text style={styles.Text_351_3951}>John Doe</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/9d7f/770ae97ff5b2df02d49578a2b84340e6"
          }}
          style={styles.ImageBackground_351_3952}
        />
        <View style={styles.View_351_3953}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
            }}
            style={styles.ImageBackground_I351_3953_2_192}
          />
        </View>
        <View style={styles.View_351_3954}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c71/c336/dfce38f3dd866b3217e008c43678cc52"
            }}
            style={styles.ImageBackground_I351_3954_2_200}
          />
        </View>
      </View>
      <View style={styles.View_351_3955}>
        <View style={styles.View_351_3956}>
          <Text style={styles.Text_351_3956}>Income</Text>
        </View>
        <View style={styles.View_351_3957}>
          <Text style={styles.Text_351_3957}>Expenses</Text>
        </View>
        <View style={styles.View_351_3958}>
          <Text style={styles.Text_351_3958}>Net Flow</Text>
        </View>
        <View style={styles.View_351_3959}>
          <View style={styles.View_351_3960}>
            <Text style={styles.Text_351_3960}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658f/af21/757971600b545063af187edb548a6f38"
            }}
            style={styles.ImageBackground_351_3961}
          />
        </View>
      </View>
      <View style={styles.View_351_3962}>
        <View style={styles.View_351_3963}>
          <View style={styles.View_351_3964}>
            <Text style={styles.Text_351_3964}>$50</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_351_3965}
        />
        <View style={styles.View_351_3966}>
          <View style={styles.View_351_3967}>
            <Text style={styles.Text_351_3967}>$40</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_351_3968}
        />
        <View style={styles.View_351_3969}>
          <Text style={styles.Text_351_3969}>$30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_351_3970}
        />
        <View style={styles.View_351_3971}>
          <Text style={styles.Text_351_3971}>$20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_351_3972}
        />
        <View style={styles.View_351_3973}>
          <Text style={styles.Text_351_3973}>$10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_351_3974}
        />
        <View style={styles.View_351_3975}>
          <Text style={styles.Text_351_3975}>Jan</Text>
        </View>
        <View style={styles.View_351_3976}>
          <Text style={styles.Text_351_3976}>Feb</Text>
        </View>
        <View style={styles.View_351_3977}>
          <Text style={styles.Text_351_3977}>Mar</Text>
        </View>
        <View style={styles.View_351_3978}>
          <Text style={styles.Text_351_3978}>Apr</Text>
        </View>
        <View style={styles.View_351_3979}>
          <Text style={styles.Text_351_3979}>May</Text>
        </View>
        <View style={styles.View_351_3980}>
          <Text style={styles.Text_351_3980}>Jun</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b850/1c6d/557557fa5944b74785bcc818411f0037"
          }}
          style={styles.ImageBackground_351_3981}
        />
        <View style={styles.View_351_3984} />
        <View style={styles.View_351_3985}>
          <Text style={styles.Text_351_3985}>$ 30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
          }}
          style={styles.ImageBackground_351_3986}
        />
      </View>
      <View style={styles.View_351_4072} />
      <View style={styles.View_351_4073}>
        <View style={styles.View_351_4074} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51d/e4a2/56259f983316474e69ab66ecb1354ffa"
          }}
          style={styles.ImageBackground_351_4075}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeca/6a12/efee3c01d82bf8b2df84e23f48aac18a"
          }}
          style={styles.ImageBackground_351_4076}
        />
        <View style={styles.View_351_4077}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f8/7e8d/66d701eeb848653eccfc809aa0c88fad"
            }}
            style={styles.ImageBackground_I351_4077_2_225}
          />
        </View>
        <View style={styles.View_351_4078}>
          <View style={styles.View_I351_4078_2_225}>
            <Text style={styles.Text_I351_4078_2_225}>Yes</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("143%") },
  View_351_3903: {
    width: wp("127%"),
    minWidth: wp("127%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%")
  },
  View_351_3904: {
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
  View_582_11558: {
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
  View_582_11559: {
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
  View_582_11560: {
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
  Text_582_11560: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11561: {
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
  Text_582_11561: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11562: {
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
  Text_582_11562: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11563: {
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
  Text_582_11563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11564: {
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
  Text_582_11564: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11565: {
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
  Text_582_11565: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11566: {
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
  View_351_3912: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I351_3912_70_449: {
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
  ImageBackground_I351_3912_70_450: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I351_3912_80_420: {
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
  ImageBackground_I351_3912_80_420_2_188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I351_3912_80_424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I351_3912_80_426: {
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
  ImageBackground_I351_3912_80_426_2_240: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I351_3912_80_430: {
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
  ImageBackground_I351_3912_80_430_2_337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I351_3912_70_456: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("-3%")
  },
  ImageBackground_I351_3912_70_457: {
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
  ImageBackground_I351_3912_70_458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_351_3913: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I351_3913_2_225: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I351_3913_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3914: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%")
  },
  View_351_3915: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  View_351_3916: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_351_3917: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3918: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_351_3918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3919: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_351_3920: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I351_3920_2_291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_351_3921: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_351_3922: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I351_3922_5_51: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I351_3922_5_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3923: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_351_3923: {
    color: "rgba(255, 47, 47, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3924: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%")
  },
  View_351_3925: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_351_3926: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3927: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_351_3927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3928: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_351_3929: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I351_3929_2_291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_351_3930: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_351_3931: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I351_3931_5_51: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I351_3931_5_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3932: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_351_3932: {
    color: "rgba(255, 47, 47, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3933: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_351_3934: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_351_3935: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3936: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_351_3936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3937: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  View_351_3938: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I351_3938_2_291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_351_3939: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_351_3940: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I351_3940_5_51: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I351_3940_5_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3941: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_351_3941: {
    color: "rgba(255, 47, 47, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3942: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%")
  },
  ImageBackground_351_3943: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("45%")
  },
  View_351_3944: {
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
  View_351_3945: {
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
  View_I351_3945_17_96: {
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
  View_I351_3945_17_100: {
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
  ImageBackground_I351_3945_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I351_3945_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I351_3945_17_114: {
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
  ImageBackground_I351_3945_17_117: {
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
  ImageBackground_I351_3945_17_122: {
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
  View_I351_3945_17_123: {
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
  View_I351_3945_17_124: {
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
  View_I351_3945_17_126: {
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
  ImageBackground_I351_3945_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_351_3946: {
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
  View_351_3947: {
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
  View_351_3948: {
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
  View_351_3949: {
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
  View_351_3950: {
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
  Text_351_3950: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3951: {
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
  Text_351_3951: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3952: {
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
  View_351_3953: {
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
  ImageBackground_I351_3953_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3954: {
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
  ImageBackground_I351_3954_2_200: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_351_3955: {
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
  View_351_3956: {
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
  Text_351_3956: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3957: {
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
  Text_351_3957: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3958: {
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
  Text_351_3958: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3959: {
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
  View_351_3960: {
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
  Text_351_3960: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3961: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_351_3962: {
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
  View_351_3963: {
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
  View_351_3964: {
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
  Text_351_3964: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3965: {
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
  View_351_3966: {
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
  View_351_3967: {
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
  Text_351_3967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3968: {
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
  View_351_3969: {
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
  Text_351_3969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3970: {
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
  View_351_3971: {
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
  Text_351_3971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3972: {
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
  View_351_3973: {
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
  Text_351_3973: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3974: {
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
  View_351_3975: {
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
  Text_351_3975: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3976: {
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
  Text_351_3976: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3977: {
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
  Text_351_3977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3978: {
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
  Text_351_3978: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3979: {
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
  Text_351_3979: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_351_3980: {
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
  Text_351_3980: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3981: {
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
  View_351_3984: {
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
  View_351_3985: {
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
  Text_351_3985: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_351_3986: {
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
  View_351_4072: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_351_4073: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("49%")
  },
  View_351_4074: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_351_4075: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  ImageBackground_351_4076: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%")
  },
  View_351_4077: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I351_4077_2_225: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  View_351_4078: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I351_4078_2_225: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I351_4078_2_225: {
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
