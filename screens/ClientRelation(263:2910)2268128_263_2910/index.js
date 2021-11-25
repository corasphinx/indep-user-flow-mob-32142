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
      <View style={styles.View_263_2911}>
        <View style={styles.View_I263_2911_17_96} />
        <View style={styles.View_I263_2911_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I263_2911_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I263_2911_17_110}
          />
          <View style={styles.View_I263_2911_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I263_2911_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I263_2911_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I263_2911_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I263_2911_17_124} />
        <View style={styles.View_I263_2911_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I263_2911_17_127}
          />
        </View>
      </View>
      <View style={styles.View_263_2916}>
        <View style={styles.View_I263_2916_2_225}>
          <Text style={styles.Text_I263_2916_2_225}>Add Client</Text>
        </View>
      </View>
      <View style={styles.View_263_2917}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I263_2917_17_60}
        />
      </View>
      <View style={styles.View_263_2918}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c7/310f/c3b92884e2e75acea1e94fc5c11505a9"
          }}
          style={styles.ImageBackground_263_2919}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_263_2920}
        />
      </View>
      <View style={styles.View_263_3004}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec0f/93c5/9e2016c177c45edd03ba063b3189e45f"
          }}
          style={styles.ImageBackground_263_3005}
        />
        <View style={styles.View_263_3006}>
          <Text style={styles.Text_263_3006}>(217) 555-0113</Text>
        </View>
        <View style={styles.View_263_3007} />
        <View style={styles.View_263_3008}>
          <Text style={styles.Text_263_3008}>EP</Text>
        </View>
        <View style={styles.View_263_3014}>
          <View style={styles.View_I263_3014_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3014_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3031}>
          <View style={styles.View_I263_3031_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3031_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3039}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f8/3274/dd131cc011230e06da579fc8b25e312b"
          }}
          style={styles.ImageBackground_263_3040}
        />
        <View style={styles.View_263_3041}>
          <Text style={styles.Text_263_3041}>(303) 555-0105</Text>
        </View>
        <View style={styles.View_263_3042} />
        <View style={styles.View_263_3043}>
          <Text style={styles.Text_263_3043}>GH</Text>
        </View>
        <View style={styles.View_263_3044}>
          <View style={styles.View_I263_3044_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3044_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3045}>
          <View style={styles.View_I263_3045_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3045_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3055}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c29f/8a39/bda04abb648b929c4ed1ab015ebf33c2"
          }}
          style={styles.ImageBackground_263_3056}
        />
        <View style={styles.View_263_3057}>
          <Text style={styles.Text_263_3057}>(603) 555-0123</Text>
        </View>
        <View style={styles.View_263_3058} />
        <View style={styles.View_263_3059}>
          <Text style={styles.Text_263_3059}>TW</Text>
        </View>
        <View style={styles.View_263_3060}>
          <View style={styles.View_I263_3060_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3060_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3061}>
          <View style={styles.View_I263_3061_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3061_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3071}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b444/e14f/7a139dcbbdd715052f649d03775cb582"
          }}
          style={styles.ImageBackground_263_3072}
        />
        <View style={styles.View_263_3073}>
          <Text style={styles.Text_263_3073}>(405) 555-0128</Text>
        </View>
        <View style={styles.View_263_3074} />
        <View style={styles.View_263_3075}>
          <Text style={styles.Text_263_3075}>LA</Text>
        </View>
        <View style={styles.View_263_3076}>
          <View style={styles.View_I263_3076_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3076_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3077}>
          <View style={styles.View_I263_3077_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3077_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3087}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2233/7ddf/9fbd47bb047904c7da9128d18efe40a0"
          }}
          style={styles.ImageBackground_263_3088}
        />
        <View style={styles.View_263_3089}>
          <Text style={styles.Text_263_3089}>(308) 555-0121</Text>
        </View>
        <View style={styles.View_263_3090} />
        <View style={styles.View_263_3091}>
          <Text style={styles.Text_263_3091}>DR</Text>
        </View>
        <View style={styles.View_263_3092}>
          <View style={styles.View_I263_3092_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3092_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3093}>
          <View style={styles.View_I263_3093_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3093_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68cb/5e7f/29fa755dec473d17168d7bf28904a8c7"
          }}
          style={styles.ImageBackground_263_3104}
        />
        <View style={styles.View_263_3105}>
          <Text style={styles.Text_263_3105}>(671) 555-0110</Text>
        </View>
        <View style={styles.View_263_3106} />
        <View style={styles.View_263_3107}>
          <Text style={styles.Text_263_3107}>DS</Text>
        </View>
        <View style={styles.View_263_3108}>
          <View style={styles.View_I263_3108_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3108_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3109}>
          <View style={styles.View_I263_3109_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3109_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_263_3119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f19e/e923/947f301db7d90422c40c587d339eb84f"
          }}
          style={styles.ImageBackground_263_3120}
        />
        <View style={styles.View_263_3121}>
          <Text style={styles.Text_263_3121}>(808) 555-0111</Text>
        </View>
        <View style={styles.View_263_3122} />
        <View style={styles.View_263_3123}>
          <Text style={styles.Text_263_3123}>JJ</Text>
        </View>
        <View style={styles.View_263_3124}>
          <View style={styles.View_I263_3124_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d8/eef0/b1c08bbd9659adbe9f6aa9df4e8bf345"
              }}
              style={styles.ImageBackground_I263_3124_5_61_91_2355}
            />
          </View>
        </View>
        <View style={styles.View_263_3125}>
          <View style={styles.View_I263_3125_5_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/e040/7676a89f95a068b12b242d3a4a6e087c"
              }}
              style={styles.ImageBackground_I263_3125_5_61_18_1095}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3009}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3046}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3062}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3078}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3094}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_263_3110}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_263_2911: {
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
  View_I263_2911_17_96: {
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
  View_I263_2911_17_100: {
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
  ImageBackground_I263_2911_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I263_2911_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I263_2911_17_114: {
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
  ImageBackground_I263_2911_17_117: {
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
  ImageBackground_I263_2911_17_122: {
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
  ImageBackground_I263_2911_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I263_2911_17_124: {
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
  View_I263_2911_17_126: {
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
  ImageBackground_I263_2911_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_263_2916: {
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
  View_I263_2916_2_225: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I263_2916_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_2917: {
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
  ImageBackground_I263_2917_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_2918: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_263_2919: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_263_2920: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_263_3004: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  ImageBackground_263_3005: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_263_3006: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3006: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3007: {
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
  View_263_3008: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_263_3008: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3014: {
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
  View_I263_3014_5_61: {
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
  ImageBackground_I263_3014_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3031: {
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
  View_I263_3031_5_61: {
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
  ImageBackground_I263_3031_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3039: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%")
  },
  ImageBackground_263_3040: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_263_3041: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3042: {
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
  View_263_3043: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_263_3043: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3044: {
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
  View_I263_3044_5_61: {
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
  ImageBackground_I263_3044_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3045: {
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
  View_I263_3045_5_61: {
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
  ImageBackground_I263_3045_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3055: {
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
  ImageBackground_263_3056: {
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
  View_263_3057: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3057: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3058: {
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
  View_263_3059: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_263_3059: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3060: {
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
  View_I263_3060_5_61: {
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
  ImageBackground_I263_3060_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3061: {
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
  View_I263_3061_5_61: {
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
  ImageBackground_I263_3061_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3071: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%")
  },
  ImageBackground_263_3072: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_263_3073: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3074: {
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
  View_263_3075: {
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
  Text_263_3075: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3076: {
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
  View_I263_3076_5_61: {
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
  ImageBackground_I263_3076_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3077: {
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
  View_I263_3077_5_61: {
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
  ImageBackground_I263_3077_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3087: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("73%")
  },
  ImageBackground_263_3088: {
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
  View_263_3089: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3089: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3090: {
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
  View_263_3091: {
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
  Text_263_3091: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3092: {
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
  View_I263_3092_5_61: {
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
  ImageBackground_I263_3092_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3093: {
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
  View_I263_3093_5_61: {
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
  ImageBackground_I263_3093_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3103: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("87%")
  },
  ImageBackground_263_3104: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_263_3105: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3106: {
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
  View_263_3107: {
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
  Text_263_3107: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3108: {
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
  View_I263_3108_5_61: {
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
  ImageBackground_I263_3108_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3109: {
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
  View_I263_3109_5_61: {
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
  ImageBackground_I263_3109_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3119: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("101%")
  },
  ImageBackground_263_3120: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_263_3121: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_263_3121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3122: {
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
  View_263_3123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_263_3123: {
    color: "rgba(0, 1, 159, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_263_3124: {
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
  View_I263_3124_5_61: {
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
  ImageBackground_I263_3124_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_263_3125: {
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
  View_I263_3125_5_61: {
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
  ImageBackground_I263_3125_5_61_18_1095: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_263_3009: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%")
  },
  ImageBackground_263_3046: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%")
  },
  ImageBackground_263_3062: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%")
  },
  ImageBackground_263_3078: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("71%")
  },
  ImageBackground_263_3094: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("85%")
  },
  ImageBackground_263_3110: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("98%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
