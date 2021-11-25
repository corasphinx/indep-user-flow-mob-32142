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
      <View style={styles.View_548_10044}>
        <View style={styles.View_I548_10044_17_96} />
        <View style={styles.View_I548_10044_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I548_10044_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I548_10044_17_110}
          />
          <View style={styles.View_I548_10044_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I548_10044_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I548_10044_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I548_10044_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I548_10044_17_124} />
        <View style={styles.View_I548_10044_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I548_10044_17_127}
          />
        </View>
      </View>
      <View style={styles.View_548_10046}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I548_10046_17_60}
        />
      </View>
      <View style={styles.View_548_10047}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7920/176f/6adf2c006987071345d8e54e3e2a5e24"
          }}
          style={styles.ImageBackground_548_10048}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_548_10049}
        />
        <View style={styles.View_548_10227}>
          <View style={styles.View_548_10228} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbb/6083/e8274e4ae84fe9a41dad3d34fc5b1993"
            }}
            style={styles.ImageBackground_548_10229}
          />
          <View style={styles.View_548_10230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf6d/d132/8fdb43e0d45f22c891c7d4ab1df72478"
              }}
              style={styles.ImageBackground_I548_10230_2_192}
            />
          </View>
        </View>
        <View style={styles.View_548_10231}>
          <View style={styles.View_I548_10231_2_227}>
            <Text style={styles.Text_I548_10231_2_227}>Filter</Text>
          </View>
          <View style={styles.View_I548_10231_2_228}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5892/f5c5/82e178f3b1c1ef442b6849061207c000"
              }}
              style={styles.ImageBackground_I548_10231_2_228_110_2166}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_548_10050}>
        <View style={styles.View_548_10169}>
          <View style={styles.View_548_10170}>
            <Text style={styles.Text_548_10170}>Inflow</Text>
          </View>
          <View style={styles.View_548_10171}>
            <Text style={styles.Text_548_10171}>12 Jan | Food</Text>
          </View>
          <View style={styles.View_548_10207}>
            <View style={styles.View_I548_10207_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10207_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12439}>
            <View style={styles.View_I845_12439_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12439_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10172}>
            <Text style={styles.Text_548_10172}>+ $ 25.23</Text>
          </View>
          <View style={styles.View_548_10173}>
            <View style={styles.View_548_10174} />
            <View style={styles.View_548_10175}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b657/6b14/0eca39bb9fbfb9e7102efccbdefe41bc"
                }}
                style={styles.ImageBackground_I548_10175_81_669}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_548_10306}>
          <View style={styles.View_548_10307}>
            <Text style={styles.Text_548_10307}>Inflow</Text>
          </View>
          <View style={styles.View_862_14240}>
            <Text style={styles.Text_862_14240}>Inflow</Text>
          </View>
          <View style={styles.View_548_10308}>
            <Text style={styles.Text_548_10308}>12 Jan | Food</Text>
          </View>
          <View style={styles.View_548_10309}>
            <View style={styles.View_I548_10309_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10309_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12459}>
            <View style={styles.View_I845_12459_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12459_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10310}>
            <Text style={styles.Text_548_10310}>+ $ 25.23</Text>
          </View>
          <View style={styles.View_548_10311}>
            <View style={styles.View_548_10312} />
            <View style={styles.View_548_10313}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b657/6b14/0eca39bb9fbfb9e7102efccbdefe41bc"
                }}
                style={styles.ImageBackground_I548_10313_81_669}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_548_10176}>
          <View style={styles.View_548_10178}>
            <Text style={styles.Text_548_10178}>12 Jan | Subscription</Text>
          </View>
          <View style={styles.View_548_10222}>
            <View style={styles.View_I548_10222_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10222_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12454}>
            <View style={styles.View_I845_12454_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12454_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10179} />
          <View style={styles.View_548_10180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b657/6b14/0eca39bb9fbfb9e7102efccbdefe41bc"
              }}
              style={styles.ImageBackground_I548_10180_81_669}
            />
          </View>
        </View>
        <View style={styles.View_548_10181}>
          <View style={styles.View_548_10182}>
            <Text style={styles.Text_548_10182}>Outflow</Text>
          </View>
          <View style={styles.View_548_10183}>
            <Text style={styles.Text_548_10183}>12 Jan | Offi...</Text>
          </View>
          <View style={styles.View_548_10212}>
            <View style={styles.View_I548_10212_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10212_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12444}>
            <View style={styles.View_I845_12444_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12444_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10184} />
          <View style={styles.View_548_10185}>
            <Text style={styles.Text_548_10185}>- $ 25.23</Text>
          </View>
          <View style={styles.View_862_14234}>
            <Text style={styles.Text_862_14234}>- $ 25.23</Text>
          </View>
          <View style={styles.View_862_14235}>
            <Text style={styles.Text_862_14235}>- $ 25.23</Text>
          </View>
          <View style={styles.View_548_10186}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b5d/b478/1cfb50bce68702fe0b67de50ce0594cd"
              }}
              style={styles.ImageBackground_I548_10186_81_670}
            />
          </View>
        </View>
        <View style={styles.View_548_10314}>
          <View style={styles.View_548_10315}>
            <Text style={styles.Text_548_10315}>Outflow</Text>
          </View>
          <View style={styles.View_548_10316}>
            <Text style={styles.Text_548_10316}>12 Jan | Offi...</Text>
          </View>
          <View style={styles.View_548_10317}>
            <View style={styles.View_I548_10317_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10317_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12464}>
            <View style={styles.View_I845_12464_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12464_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10318} />
          <View style={styles.View_548_10319}>
            <Text style={styles.Text_548_10319}>- $ 25.23</Text>
          </View>
          <View style={styles.View_548_10320}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b5d/b478/1cfb50bce68702fe0b67de50ce0594cd"
              }}
              style={styles.ImageBackground_I548_10320_81_670}
            />
          </View>
        </View>
        <View style={styles.View_548_10187}>
          <View style={styles.View_548_10188}>
            <Text style={styles.Text_548_10188}>Outflow</Text>
          </View>
          <View style={styles.View_548_10189}>
            <Text style={styles.Text_548_10189}>12 Jan | Advertising</Text>
          </View>
          <View style={styles.View_548_10190} />
          <View style={styles.View_548_10217}>
            <View style={styles.View_I548_10217_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10217_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12449}>
            <View style={styles.View_I845_12449_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12449_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10191}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bc9/df0f/d5381ef074e97c7e994c25dc57a4a7fd"
              }}
              style={styles.ImageBackground_I548_10191_81_669}
            />
          </View>
        </View>
        <View style={styles.View_548_10321}>
          <View style={styles.View_548_10322}>
            <Text style={styles.Text_548_10322}>Outflow</Text>
          </View>
          <View style={styles.View_548_10323}>
            <Text style={styles.Text_548_10323}>12 Jan | Advertising</Text>
          </View>
          <View style={styles.View_548_10324} />
          <View style={styles.View_548_10325}>
            <View style={styles.View_I548_10325_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7f/ed3b/f0b1e2ade9c998b18b6aa94b629f10a6"
                }}
                style={styles.ImageBackground_I548_10325_5_61_91_2355}
              />
            </View>
          </View>
          <View style={styles.View_845_12469}>
            <View style={styles.View_I845_12469_5_61}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd12/9e85/6b5bc4987f739a388c311c8fe1a7d7bb"
                }}
                style={styles.ImageBackground_I845_12469_5_61_2_352}
              />
            </View>
          </View>
          <View style={styles.View_548_10326}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bc9/df0f/d5381ef074e97c7e994c25dc57a4a7fd"
              }}
              style={styles.ImageBackground_I548_10326_81_669}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10327}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10328}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/e772/4197a44bda10d60bb3da991976725484"
          }}
          style={styles.ImageBackground_548_10305}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("125%") },
  View_548_10044: {
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
  View_I548_10044_17_96: {
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
  View_I548_10044_17_100: {
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
  ImageBackground_I548_10044_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I548_10044_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I548_10044_17_114: {
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
  ImageBackground_I548_10044_17_117: {
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
  ImageBackground_I548_10044_17_122: {
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
  ImageBackground_I548_10044_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I548_10044_17_124: {
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
  View_I548_10044_17_126: {
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
  ImageBackground_I548_10044_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_548_10046: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I548_10046_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10047: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_548_10048: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_548_10049: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_548_10227: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_548_10228: {
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
  ImageBackground_548_10229: {
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
  View_548_10230: {
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
  ImageBackground_I548_10230_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10231: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I548_10231_2_227: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I548_10231_2_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I548_10231_2_228: {
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
  ImageBackground_I548_10231_2_228_110_2166: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10050: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%")
  },
  View_548_10169: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10170: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_548_10170: {
    color: "rgba(76, 175, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10171: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_548_10171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10207: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10207_5_61: {
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
  ImageBackground_I548_10207_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12439: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12439_5_61: {
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
  ImageBackground_I845_12439_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10172: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_548_10172: {
    color: "rgba(76, 175, 80, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10173: {
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
  View_548_10174: {
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
  View_548_10175: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10175_81_669: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10306: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_548_10307: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_548_10307: {
    color: "rgba(76, 175, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_862_14240: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_862_14240: {
    color: "rgba(76, 175, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10308: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_548_10308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10309: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10309_5_61: {
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
  ImageBackground_I548_10309_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12459: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12459_5_61: {
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
  ImageBackground_I845_12459_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10310: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_548_10310: {
    color: "rgba(76, 175, 80, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10311: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_548_10312: {
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
  View_548_10313: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10313_81_669: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10176: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_548_10178: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_548_10178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10222: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10222_5_61: {
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
  ImageBackground_I548_10222_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12454: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12454_5_61: {
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
  ImageBackground_I845_12454_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10179: {
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
  View_548_10180: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10180_81_669: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10181: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_548_10182: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_548_10182: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10183: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_548_10183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10212_5_61: {
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
  ImageBackground_I548_10212_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12444: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12444_5_61: {
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
  ImageBackground_I845_12444_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10184: {
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
  View_548_10185: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_548_10185: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_862_14234: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_862_14234: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_862_14235: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_862_14235: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10186: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10186_81_670: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10314: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%")
  },
  View_548_10315: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_548_10315: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10316: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_548_10316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10317: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10317_5_61: {
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
  ImageBackground_I548_10317_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12464: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12464_5_61: {
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
  ImageBackground_I845_12464_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10318: {
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
  View_548_10319: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_548_10319: {
    color: "rgba(255, 61, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10320: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10320_81_670: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10187: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_548_10188: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_548_10188: {
    color: "rgba(255, 47, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10189: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_548_10189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10190: {
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
  View_548_10217: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10217_5_61: {
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
  ImageBackground_I548_10217_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12449: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12449_5_61: {
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
  ImageBackground_I845_12449_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10191: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10191_81_669: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_548_10321: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_548_10322: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_548_10322: {
    color: "rgba(255, 47, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10323: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_548_10323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_10324: {
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
  View_548_10325: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 1, 159, 0.15000000596046448)"
  },
  View_I548_10325_5_61: {
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
  ImageBackground_I548_10325_5_61_91_2355: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_845_12469: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 47, 47, 0.15000000596046448)"
  },
  View_I845_12469_5_61: {
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
  ImageBackground_I845_12469_5_61_2_352: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_10326: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I548_10326_81_669: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_548_10192: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_548_10327: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%")
  },
  ImageBackground_548_10193: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  ImageBackground_548_10328: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%")
  },
  ImageBackground_548_10194: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%")
  },
  ImageBackground_548_10305: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
