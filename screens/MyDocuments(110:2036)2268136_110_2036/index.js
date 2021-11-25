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
      <View style={styles.View_110_2037}>
        <View style={styles.View_I110_2037_17_96} />
        <View style={styles.View_I110_2037_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I110_2037_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I110_2037_17_110}
          />
          <View style={styles.View_I110_2037_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I110_2037_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I110_2037_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I110_2037_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I110_2037_17_124} />
        <View style={styles.View_I110_2037_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I110_2037_17_127}
          />
        </View>
      </View>
      <View style={styles.View_110_2043}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba7/a25b/6fb605b028aacf4888fbab758d7f864a"
          }}
          style={styles.ImageBackground_110_2044}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_110_2045}
        />
      </View>
      <View style={styles.View_110_2150}>
        <View style={styles.View_110_2143} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09e6/78a4/a4932ef46c1e8fe2efa34833f9854c54"
          }}
          style={styles.ImageBackground_110_2144}
        />
        <View style={styles.View_110_2145}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf6d/d132/8fdb43e0d45f22c891c7d4ab1df72478"
            }}
            style={styles.ImageBackground_I110_2145_2_192}
          />
        </View>
      </View>
      <View style={styles.View_110_2128}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02f6/9aff/593798919ee9e44ac4d32cf183e06569"
          }}
          style={styles.ImageBackground_110_2129}
        />
        <View style={styles.View_110_2130}>
          <Text style={styles.Text_110_2130}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_110_2226}
        />
        <View style={styles.View_110_2131} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_110_2134}
        />
      </View>
      <View style={styles.View_110_2228}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9f/39fc/f3ebf340fdc588b9624341a08810cee7"
          }}
          style={styles.ImageBackground_110_2229}
        />
        <View style={styles.View_110_2230}>
          <Text style={styles.Text_110_2230}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa81/a99f/b8300cd971f45cbe298d5df64dcd0dc2"
          }}
          style={styles.ImageBackground_110_2231}
        />
        <View style={styles.View_110_2232} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f1/265e/0f1f7b4f38602070f01f53a07bed1581"
          }}
          style={styles.ImageBackground_110_2233}
        />
      </View>
      <View style={styles.View_110_2238}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d3/33f4/2be0ec0ecd65da65fff31f4c35f92298"
          }}
          style={styles.ImageBackground_110_2239}
        />
        <View style={styles.View_110_2240}>
          <Text style={styles.Text_110_2240}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_110_2241}
        />
        <View style={styles.View_110_2242} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_110_2243}
        />
      </View>
      <View style={styles.View_110_2248}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ae7/4d11/375d766623bd89074232582b0d9e442b"
          }}
          style={styles.ImageBackground_110_2249}
        />
        <View style={styles.View_110_2250}>
          <Text style={styles.Text_110_2250}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_110_2251}
        />
        <View style={styles.View_110_2252} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_110_2253}
        />
      </View>
      <View style={styles.View_110_2258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56b8/6d7b/4eb6bc918f1461abac2ed63b0c9e8d09"
          }}
          style={styles.ImageBackground_110_2259}
        />
        <View style={styles.View_110_2260}>
          <Text style={styles.Text_110_2260}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_110_2261}
        />
        <View style={styles.View_110_2262} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_110_2263}
        />
      </View>
      <View style={styles.View_451_8537}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dbb/5781/c44f0bb9d6b606c542ce33aaf5ef9dcb"
          }}
          style={styles.ImageBackground_451_8538}
        />
        <View style={styles.View_451_8539}>
          <Text style={styles.Text_451_8539}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_451_8540}
        />
        <View style={styles.View_451_8541} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_451_8542}
        />
      </View>
      <View style={styles.View_110_2268}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1803/f683/45b3a5b94327d286cc293d37fa33ba2b"
          }}
          style={styles.ImageBackground_110_2269}
        />
        <View style={styles.View_110_2270}>
          <Text style={styles.Text_110_2270}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_110_2271}
        />
        <View style={styles.View_110_2272} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_110_2273}
        />
      </View>
      <View style={styles.View_148_2415}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe98/9310/42299caea3b013ba41b76a6bb4b96924"
          }}
          style={styles.ImageBackground_I148_2415_17_60}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2133}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2234}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2244}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2254}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2264}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_451_8543}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_110_2274}
      />
      <View style={styles.View_110_2151}>
        <View style={styles.View_I110_2151_2_227}>
          <Text style={styles.Text_I110_2151_2_227}>Filter</Text>
        </View>
        <View style={styles.View_I110_2151_2_228}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5892/f5c5/82e178f3b1c1ef442b6849061207c000"
            }}
            style={styles.ImageBackground_I110_2151_2_228_110_2166}
          />
        </View>
      </View>
      <View style={styles.View_594_10734}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100e/74f4/24978e4e220a9be01ef651f8e7736d33"
          }}
          style={styles.ImageBackground_594_10735}
        />
        <View style={styles.View_594_10736}>
          <Text style={styles.Text_594_10736}>Loreum ipsum dollar is.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/b267/57a26ca205220a576716bb1b8dc20535"
          }}
          style={styles.ImageBackground_594_10737}
        />
        <View style={styles.View_594_10738} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5f/cb07/0393fbc181eaec52253d7da0635ac195"
          }}
          style={styles.ImageBackground_594_10739}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
        }}
        style={styles.ImageBackground_594_10743}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("136%") },
  View_110_2037: {
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
  View_I110_2037_17_96: {
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
  View_I110_2037_17_100: {
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
  ImageBackground_I110_2037_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I110_2037_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I110_2037_17_114: {
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
  ImageBackground_I110_2037_17_117: {
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
  ImageBackground_I110_2037_17_122: {
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
  ImageBackground_I110_2037_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I110_2037_17_124: {
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
  View_I110_2037_17_126: {
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
  ImageBackground_I110_2037_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_110_2043: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_110_2044: {
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
  ImageBackground_110_2045: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_110_2150: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  View_110_2143: {
    width: wp("60%"),
    minWidth: wp("60%"),
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
  ImageBackground_110_2144: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_110_2145: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I110_2145_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_110_2128: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%")
  },
  ImageBackground_110_2129: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_110_2130: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2226: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2131: {
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
  ImageBackground_110_2134: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_110_2228: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54%")
  },
  ImageBackground_110_2229: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_110_2230: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2231: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2232: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 1, 159, 1)",
    opacity: 0.15000000596046448
  },
  ImageBackground_110_2233: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_110_2238: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("68%")
  },
  ImageBackground_110_2239: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_110_2240: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2241: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2242: {
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
  ImageBackground_110_2243: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_110_2248: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81%")
  },
  ImageBackground_110_2249: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_110_2250: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2251: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2252: {
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
  ImageBackground_110_2253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_110_2258: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("94%")
  },
  ImageBackground_110_2259: {
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
  View_110_2260: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2261: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2262: {
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
  ImageBackground_110_2263: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_451_8537: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("106%")
  },
  ImageBackground_451_8538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_451_8539: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_451_8539: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_451_8540: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_451_8541: {
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
  ImageBackground_451_8542: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_110_2268: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("118%")
  },
  ImageBackground_110_2269: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_110_2270: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_110_2270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_2271: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_110_2272: {
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
  ImageBackground_110_2273: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_148_2415: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I148_2415_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_110_2133: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%")
  },
  ImageBackground_110_2234: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("65%")
  },
  ImageBackground_110_2244: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%")
  },
  ImageBackground_110_2254: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("92%")
  },
  ImageBackground_110_2264: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("104%")
  },
  ImageBackground_451_8543: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("116%")
  },
  ImageBackground_110_2274: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("129%")
  },
  View_110_2151: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I110_2151_2_227: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I110_2151_2_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I110_2151_2_228: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I110_2151_2_228_110_2166: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_594_10734: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  ImageBackground_594_10735: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  View_594_10736: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_594_10736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_594_10737: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_594_10738: {
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
  ImageBackground_594_10739: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_594_10743: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
