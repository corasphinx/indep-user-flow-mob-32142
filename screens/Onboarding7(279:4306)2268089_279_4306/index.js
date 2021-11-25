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
      <View style={styles.View_279_4307}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I279_4307_17_60}
        />
      </View>
      <View style={styles.View_279_4309}>
        <View style={styles.View_I279_4309_17_96} />
        <View style={styles.View_I279_4309_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I279_4309_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I279_4309_17_110}
          />
          <View style={styles.View_I279_4309_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I279_4309_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I279_4309_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I279_4309_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I279_4309_17_124} />
        <View style={styles.View_I279_4309_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I279_4309_17_127}
          />
        </View>
      </View>
      <View style={styles.View_279_4584}>
        <View style={styles.View_279_4579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a3/0148/188a92313d4500247f0d38746411a12a"
            }}
            style={styles.ImageBackground_279_4376}
          />
          <View source={{ uri: "null" }} style={styles.View_279_4488} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b32/fa6b/758456c72000f39621d5c43532ce0969"
            }}
            style={styles.ImageBackground_279_4491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a85/f182/c7430ecad6bd601c1eae8425d1327731"
            }}
            style={styles.ImageBackground_279_4493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/415c/75b1/10ea3bd52c05e019ecd8333181728667"
            }}
            style={styles.ImageBackground_279_4502}
          />
          <View style={styles.View_279_4507}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4193/7cba/4b4ee7875ac6479fc8567e9b1c801330"
              }}
              style={styles.ImageBackground_279_4508}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c209/9c71/cee1d2f6bb21ae5b7de43354b8096c2b"
              }}
              style={styles.ImageBackground_279_4509}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f2/31c0/4978bb48634720575583fd0524253a3d"
              }}
              style={styles.ImageBackground_279_4510}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37f7/7a53/b2a79f325de4ed0fc1b125e10babc4f3"
              }}
              style={styles.ImageBackground_279_4512}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2719/b754/a1ecad14194dbaa055e219a057992e0e"
              }}
              style={styles.ImageBackground_279_4514}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9231/be74/f627851fbd1904e27cde58dded27575c"
              }}
              style={styles.ImageBackground_279_4515}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/268e/5342/5648ed2c90f19971d27d1f981e352b8e"
              }}
              style={styles.ImageBackground_279_4516}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91eb/5a9e/4b84641c20610d48b9a987fe2868ca69"
              }}
              style={styles.ImageBackground_279_4517}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b8/e1ae/725b4a6f8e3e88aa63575516b0bed90d"
              }}
              style={styles.ImageBackground_279_4518}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0e7/8a9d/a9bfd7af020d12eb5a51c0642fc20294"
              }}
              style={styles.ImageBackground_279_4519}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79c4/4557/ec348308f7509af1357db723b0416b9a"
              }}
              style={styles.ImageBackground_279_4520}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7e/1067/a77de22eed76f266958a15079028b10d"
              }}
              style={styles.ImageBackground_279_4521}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79c4/4557/ec348308f7509af1357db723b0416b9a"
              }}
              style={styles.ImageBackground_279_4522}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8db3/92ee/a166dcbec3b23140860817b581bea06e"
              }}
              style={styles.ImageBackground_279_4523}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd95/015b/1d9ad4d6ac887beb4642fcce056f3cd3"
              }}
              style={styles.ImageBackground_279_4524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e17a/d0c2/76938460f8ca40d6accfae3e2917f4aa"
              }}
              style={styles.ImageBackground_279_4525}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33ea/c639/3cd70c5f66884fdb6dd4cbb801d3b99f"
              }}
              style={styles.ImageBackground_279_4526}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ea6/38de/649fb3a610ae64e46523d3b6e772b29f"
              }}
              style={styles.ImageBackground_279_4527}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c157/dc9e/58f68aaf2b7a5642c0ee33eb058cf137"
              }}
              style={styles.ImageBackground_279_4528}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f202/d6a4/f4eb303999f172a6bfa4fe92cf2b68a7"
              }}
              style={styles.ImageBackground_279_4529}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e4/42a7/36e4eddb9fa6d9bad7da4a8d6ad5d7c7"
              }}
              style={styles.ImageBackground_279_4530}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c800/8abb/a7d14067aadd5ccbd0a432c35e470768"
              }}
              style={styles.ImageBackground_279_4531}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/4dae/d6d596ba7efcbf673c346d78b2449e46"
              }}
              style={styles.ImageBackground_279_4532}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70bc/8b87/00115841584ccb7e58d7e86aef18798e"
              }}
              style={styles.ImageBackground_279_4533}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d61/8ddc/ffa87d3b4888a732259cf6354caecf70"
              }}
              style={styles.ImageBackground_279_4534}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da18/0093/a8889ffb161a6d1a8a52c18cc2f14906"
              }}
              style={styles.ImageBackground_279_4535}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b87/76bc/18d7e7d82eb6a8556164b4ce3a01425e"
              }}
              style={styles.ImageBackground_279_4536}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5d/b217/013713f4e9eaff05ef73b3047f338322"
              }}
              style={styles.ImageBackground_279_4537}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84bf/18b8/5ce1e137d4f8a799b3c044850a48c2ad"
              }}
              style={styles.ImageBackground_279_4538}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5518/2f74/c5601cfc17a5b08992db1ea66e69a478"
              }}
              style={styles.ImageBackground_279_4539}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5882/fba9/bd5a95b067005d34a6f2ae3980060545"
              }}
              style={styles.ImageBackground_279_4540}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d389/1a12/0bf1200431d0c61bc914ea34d39712bf"
              }}
              style={styles.ImageBackground_279_4541}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e8/6702/b7f8233a453aad8be9b24c9b5e262bc3"
              }}
              style={styles.ImageBackground_279_4543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de8f/7535/406755d0326953c7e0856b80d9c339e1"
              }}
              style={styles.ImageBackground_279_4545}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5539/48fd/f80750c4f3df705f87f4df138dab9808"
              }}
              style={styles.ImageBackground_279_4546}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e53/1844/44a0afeba249cc526539afc1ea917581"
              }}
              style={styles.ImageBackground_279_4547}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35e3/2a98/3d2122e2cc19cb38ad98a69e171553f0"
              }}
              style={styles.ImageBackground_279_4548}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0063/1507/1be2153426ec34c384f5c2d3aaeda5dd"
              }}
              style={styles.ImageBackground_279_4549}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd0a/ccd5/08fb048b6e2b71fd7e3159a92fa9c788"
              }}
              style={styles.ImageBackground_279_4550}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfd3/21bc/8cb8068cd7df2cd5c88e28bd8b7fcd39"
              }}
              style={styles.ImageBackground_279_4551}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf55/1521/ff88cb62be465a149f29a2ef777a9518"
              }}
              style={styles.ImageBackground_279_4552}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad4/a02f/ccade3ce8c8775404858df35be724003"
              }}
              style={styles.ImageBackground_279_4553}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f82c/5833/a0fbdf1ef8eb3c44432ae70ce1131ab7"
              }}
              style={styles.ImageBackground_279_4554}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff3a/aa5c/745d710716046653e66881eaba4b61b6"
              }}
              style={styles.ImageBackground_279_4555}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae97/1ffb/69882c86c1b3dbb32ec4ab0bc55d9494"
              }}
              style={styles.ImageBackground_279_4556}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/f1ca/cbfffe92febe4abfb0420e0422a665fe"
              }}
              style={styles.ImageBackground_279_4557}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6d/71a6/ca22847facd0ba5078575d8ea51890cd"
              }}
              style={styles.ImageBackground_279_4558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/563f/1879/a83984aeea78c63af61063505d2638cd"
              }}
              style={styles.ImageBackground_279_4559}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/5e16/cb5a15e4299bdbb6c1543e04c8801535"
              }}
              style={styles.ImageBackground_279_4560}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce4/4491/f4f311384cdbaab2f24105b4e1e2e3b2"
              }}
              style={styles.ImageBackground_279_4561}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f9c/81a6/68defb874a43b52937e141a4164323e2"
              }}
              style={styles.ImageBackground_279_4562}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc98/57e3/df05b64d0ea414a6554dc317986921df"
              }}
              style={styles.ImageBackground_279_4563}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006b/676c/3ee1638da9a1cd235ddb0a59f12817d0"
              }}
              style={styles.ImageBackground_279_4564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98f/1cd9/3b072df86ec43bbb22581aa29354e6ee"
              }}
              style={styles.ImageBackground_279_4565}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/318d/da7f/11661981525fbe16d62aadd27c5b5456"
              }}
              style={styles.ImageBackground_279_4566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68fb/dfdc/3d4518f231f14e65c56afd24430e4d46"
              }}
              style={styles.ImageBackground_279_4567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b10/b00a/e69602ea0cc696c000fe067a005798d9"
              }}
              style={styles.ImageBackground_279_4568}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea05/a4ac/7bdf881064018a6317249a5ef081c835"
              }}
              style={styles.ImageBackground_279_4569}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1678/6fd4/7e87a0fb6556f6baf16151174f1f0759"
              }}
              style={styles.ImageBackground_279_4570}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e7/e01b/aa19f00944d2cad44f1d55f995830c3f"
              }}
              style={styles.ImageBackground_279_4571}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b572/3a70/fefc170ef3bca7aa55a67a1728d8104c"
              }}
              style={styles.ImageBackground_279_4572}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf71/436a/5364d6fce581302fe40f780fec747228"
              }}
              style={styles.ImageBackground_279_4574}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87f5/d6bc/bbdd40d874ee51bddd343977c576072c"
              }}
              style={styles.ImageBackground_279_4576}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2457/d620/79210e085cf79d9a7a5b813ea882c29b"
              }}
              style={styles.ImageBackground_279_4577}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a3/0b78/77e2b4774c5c945054f24a6cdb56d80b"
              }}
              style={styles.ImageBackground_279_4578}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c01c/94b0/3481337a7a552dc513681a57adc2a09b"
          }}
          style={styles.ImageBackground_279_4580}
        />
        <View style={styles.View_279_4582}>
          <View style={styles.View_I279_4582_2_225}>
            <Text style={styles.Text_I279_4582_2_225}>Continue</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_279_4307: {
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
  ImageBackground_I279_4307_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_4309: {
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
  View_I279_4309_17_96: {
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
  View_I279_4309_17_100: {
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
  ImageBackground_I279_4309_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I279_4309_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I279_4309_17_114: {
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
  ImageBackground_I279_4309_17_117: {
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
  ImageBackground_I279_4309_17_122: {
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
  ImageBackground_I279_4309_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I279_4309_17_124: {
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
  View_I279_4309_17_126: {
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
  ImageBackground_I279_4309_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_279_4584: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29%")
  },
  View_279_4579: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_279_4376: {
    width: wp("82%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_279_4488: {
    width: wp("60%"),
    height: hp("29%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4491: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_4493: {
    width: wp("32%"),
    height: hp("28%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_279_4502: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_279_4507: {
    width: wp("46%"),
    height: hp("46%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_279_4508: {
    width: wp("28%"),
    height: hp("17%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_279_4509: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_279_4510: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_279_4512: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_279_4514: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_279_4515: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_279_4516: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_279_4517: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_279_4518: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_279_4519: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_279_4520: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_279_4521: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_279_4522: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_279_4523: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4524: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_279_4525: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_279_4526: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_279_4527: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_279_4528: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4529: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_279_4530: {
    width: wp("9%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_279_4531: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_279_4532: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4533: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_279_4534: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4535: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4536: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4537: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_279_4538: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_279_4539: {
    width: wp("36%"),
    height: hp("18%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_279_4540: {
    width: wp("23%"),
    height: hp("22%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_279_4541: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_279_4543: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_279_4545: {
    width: wp("8%"),
    height: hp("12%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_279_4546: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_4547: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_279_4548: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_279_4549: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_279_4550: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4551: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4552: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_279_4553: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_279_4554: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_279_4555: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_279_4556: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_279_4557: {
    width: wp("21%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_279_4558: {
    width: wp("17%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_279_4559: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_279_4560: {
    width: wp("20%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_279_4561: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_279_4562: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_279_4563: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_279_4564: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4565: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_279_4566: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_279_4567: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_279_4568: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_279_4569: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_279_4570: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_279_4571: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_279_4572: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_279_4574: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_279_4576: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_279_4577: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_279_4578: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_279_4580: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("52%")
  },
  View_279_4582: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I279_4582_2_225: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I279_4582_2_225: {
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
