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
      <View style={styles.View_277_3401}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I277_3401_17_60}
        />
      </View>
      <View style={styles.View_277_3491}>
        <View style={styles.View_I277_3491_2_225}>
          <Text style={styles.Text_I277_3491_2_225}>Let&#39;s get started</Text>
        </View>
      </View>
      <View style={styles.View_277_3403}>
        <View style={styles.View_I277_3403_17_96} />
        <View style={styles.View_I277_3403_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I277_3403_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I277_3403_17_110}
          />
          <View style={styles.View_I277_3403_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I277_3403_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I277_3403_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I277_3403_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I277_3403_17_124} />
        <View style={styles.View_I277_3403_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I277_3403_17_127}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_277_3404}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdcb/3858/e3c97a0e89a3736894094a16f650ea31"
        }}
        style={styles.ImageBackground_277_3405}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d6/158d/6ff1fa6e301b490d8efa95c3b83d1105"
        }}
        style={styles.ImageBackground_277_3406}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bb8/52c6/819c0718d311f328c33e8aab1cc1bc76"
        }}
        style={styles.ImageBackground_277_3493}
      />
      <View style={styles.View_839_11883}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/176f/8d8a/ac8326e795a04b8b88cc8eca55b2a8b2"
          }}
          style={styles.ImageBackground_839_11448}
        />
        <View source={{ uri: "null" }} style={styles.View_839_11487} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0e6/48b9/33af3e6a680ffb3139aef230361e7c69"
          }}
          style={styles.ImageBackground_839_11489}
        />
        <View style={styles.View_839_11491}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b9/adcf/1dfb1b78cd6d7729a4366d262a7defde"
            }}
            style={styles.ImageBackground_839_11492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a74/dc68/a0599762d83bdc98a590654385254f8e"
            }}
            style={styles.ImageBackground_839_11493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fe/c2a4/2cf19d812b897d5c736c9172cfbd6b83"
            }}
            style={styles.ImageBackground_839_11494}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5449/f1f6/d9583787f5ed1865e051adebb2ce4c5e"
            }}
            style={styles.ImageBackground_839_11495}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24f7/adbd/cfdca1ad22ab06911345cfb9f507fde7"
            }}
            style={styles.ImageBackground_839_11496}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf7/0287/70b2b45f33a329133ae6a3ca2bd61ccd"
            }}
            style={styles.ImageBackground_839_11498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
            }}
            style={styles.ImageBackground_839_11500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11504}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950c/9f5f/608acc65f3dae5f6e37d101e2f5031e9"
            }}
            style={styles.ImageBackground_839_11505}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278e/cd0f/b31df5c0555ea738ef3e1e06e9fcffe4"
            }}
            style={styles.ImageBackground_839_11506}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7792/71dd/d887070a7b044cf222c9ae9476ddde7f"
            }}
            style={styles.ImageBackground_839_11507}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b83b/ce10/168e7eb760c538f0e0ad7910e8626a77"
            }}
            style={styles.ImageBackground_839_11508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f835/8870/7aa10f2b00dff1cfff0432d12ef693bf"
            }}
            style={styles.ImageBackground_839_11509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
            }}
            style={styles.ImageBackground_839_11510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f64/8404/e56a626053c990b33bf6b1b69600a2f6"
            }}
            style={styles.ImageBackground_839_11515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daab/c438/207dffb0479d97537637ecd02dc2beed"
            }}
            style={styles.ImageBackground_839_11516}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9852/c78a/f8d31bcd2ac2ae89a43722177b6457fc"
            }}
            style={styles.ImageBackground_839_11518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
            }}
            style={styles.ImageBackground_839_11520}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11523}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950c/9f5f/608acc65f3dae5f6e37d101e2f5031e9"
            }}
            style={styles.ImageBackground_839_11525}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/067c/2c89/2ce8c57628b2080c88230ab5d19c9312"
            }}
            style={styles.ImageBackground_839_11526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7792/71dd/d887070a7b044cf222c9ae9476ddde7f"
            }}
            style={styles.ImageBackground_839_11527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fa7/0f0f/a78beeb7d5f2606f0d065b20e0a3153a"
            }}
            style={styles.ImageBackground_839_11528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f835/8870/7aa10f2b00dff1cfff0432d12ef693bf"
            }}
            style={styles.ImageBackground_839_11529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
            }}
            style={styles.ImageBackground_839_11530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11533}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11534}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4375/51d8/5e0a82e2925924d3c27167a5a1917223"
            }}
            style={styles.ImageBackground_839_11535}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cac/6ede/278440446aeeca629df4ec8c5299413d"
            }}
            style={styles.ImageBackground_839_11536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19d9/5a07/cc6fad709c45fe09fc19e7346c54d255"
            }}
            style={styles.ImageBackground_839_11537}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eef0/efd6/30fc0acbf4ff06d2542200a6aef8a0e4"
            }}
            style={styles.ImageBackground_839_11538}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df39/e158/e8f54e7fd7cc680144476fee2fa97ffa"
            }}
            style={styles.ImageBackground_839_11539}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cc5/79bd/0738c0cd2e642029d3214a7865318283"
            }}
            style={styles.ImageBackground_839_11540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11541}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11542}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec1/3032/d7afcb46c82a89e02963ec681975533c"
            }}
            style={styles.ImageBackground_839_11543}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11544}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11545}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11546}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11547}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11548}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11549}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5402/541c/5e82c85c5b67fcc05699203b9c6e5154"
            }}
            style={styles.ImageBackground_839_11550}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a505/93d3/a399eeef432aed6c9c0780f3b5d7ab9e"
            }}
            style={styles.ImageBackground_839_11551}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ff/780b/229691b65940d186580fbf23022d7128"
            }}
            style={styles.ImageBackground_839_11552}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11553}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ff/780b/229691b65940d186580fbf23022d7128"
            }}
            style={styles.ImageBackground_839_11554}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11555}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7900/876b/d10e5f1ce82953adf05bab51ec352afc"
            }}
            style={styles.ImageBackground_839_11556}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1583/0748/343a1e9d113379bceaeddc51a362fb87"
            }}
            style={styles.ImageBackground_839_11557}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f2c/9cd9/43413990bcc89d6a0234dd66f17d3383"
            }}
            style={styles.ImageBackground_839_11558}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8974/a65f/c3ffe05d9f989718a245ed9b5dd2f26b"
            }}
            style={styles.ImageBackground_839_11559}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b8/1960/b2c0fa73412ef961a9cd07123b35f97f"
            }}
            style={styles.ImageBackground_839_11560}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d75a/915e/ac5df6fe220e20471ec47335a339b887"
            }}
            style={styles.ImageBackground_839_11561}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e578/8c5d/7879352939b4393b193b7aed396cb949"
            }}
            style={styles.ImageBackground_839_11562}
          />
        </View>
        <View style={styles.View_839_11563}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9489/5f4f/8725529a589f5bae44e81e8271e9dfbd"
            }}
            style={styles.ImageBackground_839_11564}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5d4/8806/2cad3bfcb8de2c6ff47effc222165860"
            }}
            style={styles.ImageBackground_839_11565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4838/4549/470c6a27a5704afabf306dc9bd150e57"
            }}
            style={styles.ImageBackground_839_11566}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a2/84c5/0e7cc587e3b317d99f8c82a2b3a7b4a2"
            }}
            style={styles.ImageBackground_839_11567}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f413/6d49/cdd3d6a6b6bd85dbca2bc2d956114c9a"
            }}
            style={styles.ImageBackground_839_11568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c452/e5f3/3166edf192fd14f74fd35beb028926f6"
            }}
            style={styles.ImageBackground_839_11569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5387/eb94/7ce3d9c8c76848bf301c3789211b56d1"
            }}
            style={styles.ImageBackground_839_11570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfee/f082/3d80cf56660a4cb5cd227a544f649326"
            }}
            style={styles.ImageBackground_839_11571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_839_11572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79a/7336/aba2d4146cd0a29e9270100786588a17"
            }}
            style={styles.ImageBackground_839_11573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_839_11574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11575}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ae/f202/f3721ff80a6efd20b14053f7a9ee147c"
            }}
            style={styles.ImageBackground_839_11576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06db/6d52/2e68112b4e94ac014f6a49eb80ce2bff"
            }}
            style={styles.ImageBackground_839_11577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6160/6c86/35308bff9b368d2287806961a1408c74"
            }}
            style={styles.ImageBackground_839_11578}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d38b/e8ca/5a1415926c09177ca01c3798d6ac24be"
            }}
            style={styles.ImageBackground_839_11579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1a/f873/55770b1ccc6b73f8319ac5e63e9f59fe"
            }}
            style={styles.ImageBackground_839_11580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a3d/8aca/24a4fea41dc93c691e3dfc1691fa2c7f"
            }}
            style={styles.ImageBackground_839_11581}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/413a/748d/6c42796594cb331907436e8fe331f10e"
            }}
            style={styles.ImageBackground_839_11583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9a/af68/0c253227ed3667a895860e893e8868f5"
            }}
            style={styles.ImageBackground_839_11584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9a/af68/0c253227ed3667a895860e893e8868f5"
            }}
            style={styles.ImageBackground_839_11585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd4d/ff43/cf79598e9607969cd088fb0e0ce0f85a"
            }}
            style={styles.ImageBackground_839_11586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffb8/5ddb/24b19ed0ceaa6a3365f71b1a7b863a23"
            }}
            style={styles.ImageBackground_839_11587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df2/a241/b5ffcbf956e58dd4c76f19d085fe257c"
            }}
            style={styles.ImageBackground_839_11588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ebd/5bbf/43ac451fe5764b2a2df6f7faf259911d"
            }}
            style={styles.ImageBackground_839_11589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e74d/2d47/7b8c4b7a700a23b668bd43da8374b7fb"
            }}
            style={styles.ImageBackground_839_11590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1455/5a1b/86ca1f6b02e431a1e28e2f1e6d2c0632"
            }}
            style={styles.ImageBackground_839_11591}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1455/5a1b/86ca1f6b02e431a1e28e2f1e6d2c0632"
            }}
            style={styles.ImageBackground_839_11592}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1455/5a1b/86ca1f6b02e431a1e28e2f1e6d2c0632"
            }}
            style={styles.ImageBackground_839_11593}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b064/11c9/5e9152b93e3ec1930f66e84c3423e84d"
            }}
            style={styles.ImageBackground_839_11594}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c7/8b73/efb72ae7506df2ad387e1f42855198d4"
            }}
            style={styles.ImageBackground_839_11595}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab1/bde4/5dc72af008d126bacbd559cf20a4d43b"
            }}
            style={styles.ImageBackground_839_11596}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/400f/055e/cf427323992d180b1ba0c491fda08142"
            }}
            style={styles.ImageBackground_839_11598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f649/4fbe/522fce08a5e66aaa2cfe5d999e767413"
            }}
            style={styles.ImageBackground_839_11599}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e987/7da4/ec62b42f5df8edca1462da4df601fb16"
            }}
            style={styles.ImageBackground_839_11601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40d7/79d9/5c94743ad3bde99ffd15994c2ec37f26"
            }}
            style={styles.ImageBackground_839_11603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11604}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11605}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11607}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950c/9f5f/608acc65f3dae5f6e37d101e2f5031e9"
            }}
            style={styles.ImageBackground_839_11608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/755f/ecf2/ef97b123cbbc6ca3c4326030a2f97212"
            }}
            style={styles.ImageBackground_839_11609}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11610}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b83b/ce10/168e7eb760c538f0e0ad7910e8626a77"
            }}
            style={styles.ImageBackground_839_11611}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f835/8870/7aa10f2b00dff1cfff0432d12ef693bf"
            }}
            style={styles.ImageBackground_839_11612}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
            }}
            style={styles.ImageBackground_839_11613}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11614}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11615}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11616}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11617}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/094b/2232/254dbe2fd19c29e23bf59377f749a9cc"
            }}
            style={styles.ImageBackground_839_11618}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fcd/8547/f967525f5a793bbe627179f3289c4f7c"
            }}
            style={styles.ImageBackground_839_11619}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f3/1889/759c8fd783b2449b41e505d38f9c6d92"
            }}
            style={styles.ImageBackground_839_11620}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11621}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef2/86cb/956e4d1cfc83a96debef1c5a735f9f97"
            }}
            style={styles.ImageBackground_839_11622}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11623}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef2/86cb/956e4d1cfc83a96debef1c5a735f9f97"
            }}
            style={styles.ImageBackground_839_11624}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef2/86cb/956e4d1cfc83a96debef1c5a735f9f97"
            }}
            style={styles.ImageBackground_839_11625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11626}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11627}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11628}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11629}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11630}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11631}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef2/86cb/956e4d1cfc83a96debef1c5a735f9f97"
            }}
            style={styles.ImageBackground_839_11632}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11634}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5486/254b/c46d58ea2735a929b5693327738f2233"
            }}
            style={styles.ImageBackground_839_11635}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11636}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11637}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11638}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11641}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11642}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11643}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11644}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11645}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5486/254b/c46d58ea2735a929b5693327738f2233"
            }}
            style={styles.ImageBackground_839_11646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11647}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_839_11648}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5486/254b/c46d58ea2735a929b5693327738f2233"
            }}
            style={styles.ImageBackground_839_11649}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f3/1889/759c8fd783b2449b41e505d38f9c6d92"
            }}
            style={styles.ImageBackground_839_11650}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f3/1889/759c8fd783b2449b41e505d38f9c6d92"
            }}
            style={styles.ImageBackground_839_11651}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11653}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11654}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11655}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11656}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11657}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11658}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11659}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11660}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11661}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11662}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11663}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11664}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11665}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11667}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11668}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11669}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11670}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11671}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11672}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11673}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/1fac/d586fe70240d74c64978a3ec6a3e6652"
            }}
            style={styles.ImageBackground_839_11674}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5486/254b/c46d58ea2735a929b5693327738f2233"
            }}
            style={styles.ImageBackground_839_11675}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f3/1889/759c8fd783b2449b41e505d38f9c6d92"
            }}
            style={styles.ImageBackground_839_11676}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e89/5c20/7f4496f6cfa9fd5673a2d9ceaef1e287"
            }}
            style={styles.ImageBackground_839_11677}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c082/5a99/c6343fe1f81ce99d4764d3138749c1ea"
            }}
            style={styles.ImageBackground_839_11678}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93a5/6bac/c432d25fc9fad0e501437d97a6a14ffd"
            }}
            style={styles.ImageBackground_839_11679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c5e/bceb/5723f950ac4987ef8a46eac24332f04e"
            }}
            style={styles.ImageBackground_839_11680}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bba/7e16/538f06043bae8adf005e88080c27f22f"
            }}
            style={styles.ImageBackground_839_11681}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1675/f674/ddeaa6e125eab8177daef4ecaa127fc0"
            }}
            style={styles.ImageBackground_839_11682}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44e8/e877/db98e004be0d9579da2da39afc207e29"
            }}
            style={styles.ImageBackground_839_11683}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7239/a68c/518bf73082b32d3a11d93a71fb8fb638"
            }}
            style={styles.ImageBackground_839_11684}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/271a/e5cc/eddc1ff6dc12314c805dffd76c5879a2"
            }}
            style={styles.ImageBackground_839_11685}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e052/b544/487b0a7ae69e89a4a51c1561ba04d263"
            }}
            style={styles.ImageBackground_839_11686}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc48/d21b/2663a094911d3b0cb1c587ef41c82675"
            }}
            style={styles.ImageBackground_839_11687}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c95/5944/4830822decd6b1cc414d4fbb73518772"
            }}
            style={styles.ImageBackground_839_11688}
          />
        </View>
        <View style={styles.View_839_11689}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffe/1c6f/f3c6ab37448fc4fdd31cf8b25e205645"
            }}
            style={styles.ImageBackground_839_11690}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_839_11691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d59/3c9d/fc55fc8a24002053eaa5b0e06f98b507"
            }}
            style={styles.ImageBackground_839_11692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_839_11693}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d59/3c9d/fc55fc8a24002053eaa5b0e06f98b507"
            }}
            style={styles.ImageBackground_839_11694}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4761/3d60/3fc9f44e0da847098f73df8b2260bb31"
            }}
            style={styles.ImageBackground_839_11695}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2b8/1725/debec7ec4904e9fe35b57aa6d2d6c5a8"
            }}
            style={styles.ImageBackground_839_11696}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e92e/93b4/3eceec66e829ab514466758f758acb65"
            }}
            style={styles.ImageBackground_839_11697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4033/0ad9/719920306774c67d21e0d50054e1ae91"
            }}
            style={styles.ImageBackground_839_11698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7693/af39/fa740065b17aedc0e718be540ea94531"
            }}
            style={styles.ImageBackground_839_11699}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da62/65f1/5b23ca50e3564e6b386469321d9e5057"
            }}
            style={styles.ImageBackground_839_11700}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79a/7336/aba2d4146cd0a29e9270100786588a17"
            }}
            style={styles.ImageBackground_839_11701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79a/7336/aba2d4146cd0a29e9270100786588a17"
            }}
            style={styles.ImageBackground_839_11702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a1d/85d4/353592be15874c383a2a11054738ca65"
            }}
            style={styles.ImageBackground_839_11703}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b47e/976b/8d35aab331c4d3668d66872ce148ba87"
            }}
            style={styles.ImageBackground_839_11704}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ee/801f/d6a649467205fee544cf92071949728a"
            }}
            style={styles.ImageBackground_839_11705}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea24/c9ab/cd4e14e883b8a06f83f59aa65491c57f"
            }}
            style={styles.ImageBackground_839_11707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f9/9f94/869ca74333d1bbe7ff376afe44a433ca"
            }}
            style={styles.ImageBackground_839_11708}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11709}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11710}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11711}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11712}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/067c/2c89/2ce8c57628b2080c88230ab5d19c9312"
            }}
            style={styles.ImageBackground_839_11714}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6414/0e20/d8998823b97291e4c13e0a56c70f20e0"
            }}
            style={styles.ImageBackground_839_11715}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffd6/9659/00de0f6e93267fcbe306b3aaaf14500c"
            }}
            style={styles.ImageBackground_839_11716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f835/8870/7aa10f2b00dff1cfff0432d12ef693bf"
            }}
            style={styles.ImageBackground_839_11717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
            }}
            style={styles.ImageBackground_839_11718}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11720}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11721}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/423b/deae/fca9add9ae97b1740e26f20bea780739"
            }}
            style={styles.ImageBackground_839_11723}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d50/b897/dacf9b0246270a50c9e796ed29c26351"
            }}
            style={styles.ImageBackground_839_11724}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45af/6408/978e8c10e0d9d80375380f04305be2f9"
            }}
            style={styles.ImageBackground_839_11726}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cee/53db/e1a9c3b3f2fb3f4097bea5f27836ad8c"
            }}
            style={styles.ImageBackground_839_11727}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99b9/9064/736fc8482bfd2a4a7a5787dcaa3948e2"
            }}
            style={styles.ImageBackground_839_11728}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11729}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_839_11730}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11731}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
            }}
            style={styles.ImageBackground_839_11732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89f/26ea/bf8510bbfa73cc0443acf974c92ce80f"
            }}
            style={styles.ImageBackground_839_11733}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
            }}
            style={styles.ImageBackground_839_11734}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dc9/4eeb/262ee06240fe57248c31e3c537074bcc"
            }}
            style={styles.ImageBackground_839_11735}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a858/ca27/a607359d38ce40d257b472e29621f8b9"
            }}
            style={styles.ImageBackground_839_11736}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a9c/8b0c/94520ef0c6313db203ec527180efbca2"
            }}
            style={styles.ImageBackground_839_11737}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11738}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11739}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_839_11740}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_839_11741}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17dd/390c/74bef487513cfa24c6cc3c9f186cd2d4"
            }}
            style={styles.ImageBackground_839_11742}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6828/3030/2bb7eed671775d9571be8132eaeabfa1"
            }}
            style={styles.ImageBackground_839_11743}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c550/f21e/57de7a3e2575b79004175f74ed1cf306"
            }}
            style={styles.ImageBackground_839_11744}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa2/9cc2/f299c82e5858d08a1e5fc445cc9c4598"
            }}
            style={styles.ImageBackground_839_11745}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f38f/9bb9/436ebbb1f57d590673be0eeb9da78f8a"
            }}
            style={styles.ImageBackground_839_11746}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f4/f342/a1f1eb5d9c96bb5b689684bc5213cf22"
            }}
            style={styles.ImageBackground_839_11747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f19/2e2a/161928c51d5c74b3fbf2ed1ddfe127b4"
            }}
            style={styles.ImageBackground_839_11748}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b6/161e/514bcf26b867b62342b2da954521a21e"
            }}
            style={styles.ImageBackground_839_11749}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/975f/6dba/0dea31d94fb077fdec7452261a7c0028"
            }}
            style={styles.ImageBackground_839_11750}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea76/d05e/b869a7b3dc73a63be9ef122feb3ffe8e"
            }}
            style={styles.ImageBackground_839_11751}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c2/e7ee/1e5cc369695d34ade016e39eb1943bab"
            }}
            style={styles.ImageBackground_839_11752}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10a/e9e1/372796e5403f147cec15a89325c292b2"
            }}
            style={styles.ImageBackground_839_11753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9422/3ea4/73b0ea982c953b78ebed8402590e9f1e"
            }}
            style={styles.ImageBackground_839_11754}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c9/685a/65db20b54b35a584aaf1bc4db2a43983"
            }}
            style={styles.ImageBackground_839_11755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/954b/318e/c5e007d85662faf41a28ec8508c4b162"
            }}
            style={styles.ImageBackground_839_11756}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff17/be7a/f21b4fef9d3ba20db14c7d8fc89e3843"
            }}
            style={styles.ImageBackground_839_11757}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f959/0018/212e5632914e9fea0232f625ad29242f"
            }}
            style={styles.ImageBackground_839_11758}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e14d/81ad/2d92a511862d74ded24b593e25d8ba86"
            }}
            style={styles.ImageBackground_839_11759}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01fd/d8ef/67069278768043f893edbe8227ca26ff"
            }}
            style={styles.ImageBackground_839_11760}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e64/92a7/8b5384b63a02c9583e45c3153bcfe7d1"
            }}
            style={styles.ImageBackground_839_11761}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9c3/dfcc/b6f1da7eb254f88de38f112e6f2f4aab"
            }}
            style={styles.ImageBackground_839_11762}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd9/0364/e919533aa4217554d1efc997bd4f186b"
            }}
            style={styles.ImageBackground_839_11763}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/445e/4562/3f19695ed328afad615adf9b690d9377"
            }}
            style={styles.ImageBackground_839_11764}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cc3/a165/3d8c242bbe3fd913f06a9ae20e41c18d"
            }}
            style={styles.ImageBackground_839_11765}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11767}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2752/41fc/f5ae81dec01f62bab99f44bdd2f382ed"
            }}
            style={styles.ImageBackground_839_11768}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce4/0e98/918031e72f0917a706b955f4f0b55da2"
            }}
            style={styles.ImageBackground_839_11769}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdfa/c01c/48131b01beae1424b6100a0864d31987"
            }}
            style={styles.ImageBackground_839_11770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ca/6159/e874ab86128dc453111972e377144fd4"
            }}
            style={styles.ImageBackground_839_11771}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79c/6f3e/2a1473c412e31a282a0d5260340d8af0"
            }}
            style={styles.ImageBackground_839_11773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1759/795a/99b708eff4b1171576d31a385ca8f507"
            }}
            style={styles.ImageBackground_839_11774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed3/80ed/709ac6aaa23891f16ce12a2571acd039"
            }}
            style={styles.ImageBackground_839_11775}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e26/4037/779b41d768d21095ed16f91a87694b73"
            }}
            style={styles.ImageBackground_839_11776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11777}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5545/ed7d/7187c3e4435d59db53c6725683f22523"
            }}
            style={styles.ImageBackground_839_11779}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5460/7f4b/aca8ec00525eb4d52e6a3e2dddae91fa"
            }}
            style={styles.ImageBackground_839_11781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e80/71b8/cdfb643c39af0210ce89eb17d4243b83"
            }}
            style={styles.ImageBackground_839_11782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5be/2439/d47feef9cc3bb0db6aa88b9212dac5b7"
            }}
            style={styles.ImageBackground_839_11783}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11784}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e26/4037/779b41d768d21095ed16f91a87694b73"
            }}
            style={styles.ImageBackground_839_11786}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11787}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f72/a8f9/b8441a3e0e9bbba7f8dad34ee02b19ab"
            }}
            style={styles.ImageBackground_839_11788}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11789}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768d/27d4/fbf4724179d6eeb77826efcc19c77eb2"
            }}
            style={styles.ImageBackground_839_11790}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d733/ee94/062868b3d0a9b5bd8d95dd3c13dc73d0"
            }}
            style={styles.ImageBackground_839_11791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11792}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a92f/52c6/c99216a6b1b6d41fadef058a4bd7d990"
            }}
            style={styles.ImageBackground_839_11793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d95/89b8/b073911fd8c5286cc82cd297eb6fce73"
            }}
            style={styles.ImageBackground_839_11794}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1759/795a/99b708eff4b1171576d31a385ca8f507"
            }}
            style={styles.ImageBackground_839_11795}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e7e/3607/50358dc17b2c58df50e029fd1143cbf8"
            }}
            style={styles.ImageBackground_839_11796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed53/090b/ae3586fe689a4823a50901f0bfec5d05"
            }}
            style={styles.ImageBackground_839_11797}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed3b/1177/c02fe86a99101255c41596a05eb5552d"
            }}
            style={styles.ImageBackground_839_11798}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9897/5d12/3a28e732e6ddc620cbd5512e3d2b3a22"
            }}
            style={styles.ImageBackground_839_11799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9422/3ea4/73b0ea982c953b78ebed8402590e9f1e"
            }}
            style={styles.ImageBackground_839_11800}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c9/685a/65db20b54b35a584aaf1bc4db2a43983"
            }}
            style={styles.ImageBackground_839_11801}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/954b/318e/c5e007d85662faf41a28ec8508c4b162"
            }}
            style={styles.ImageBackground_839_11802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff17/be7a/f21b4fef9d3ba20db14c7d8fc89e3843"
            }}
            style={styles.ImageBackground_839_11803}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f959/0018/212e5632914e9fea0232f625ad29242f"
            }}
            style={styles.ImageBackground_839_11804}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e14d/81ad/2d92a511862d74ded24b593e25d8ba86"
            }}
            style={styles.ImageBackground_839_11805}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01fd/d8ef/67069278768043f893edbe8227ca26ff"
            }}
            style={styles.ImageBackground_839_11806}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e64/92a7/8b5384b63a02c9583e45c3153bcfe7d1"
            }}
            style={styles.ImageBackground_839_11807}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9c3/dfcc/b6f1da7eb254f88de38f112e6f2f4aab"
            }}
            style={styles.ImageBackground_839_11808}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd9/0364/e919533aa4217554d1efc997bd4f186b"
            }}
            style={styles.ImageBackground_839_11809}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/445e/4562/3f19695ed328afad615adf9b690d9377"
            }}
            style={styles.ImageBackground_839_11810}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cc3/a165/3d8c242bbe3fd913f06a9ae20e41c18d"
            }}
            style={styles.ImageBackground_839_11811}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11812}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2752/41fc/f5ae81dec01f62bab99f44bdd2f382ed"
            }}
            style={styles.ImageBackground_839_11814}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce4/0e98/918031e72f0917a706b955f4f0b55da2"
            }}
            style={styles.ImageBackground_839_11815}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdfa/c01c/48131b01beae1424b6100a0864d31987"
            }}
            style={styles.ImageBackground_839_11816}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ca/6159/e874ab86128dc453111972e377144fd4"
            }}
            style={styles.ImageBackground_839_11817}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11818}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79c/6f3e/2a1473c412e31a282a0d5260340d8af0"
            }}
            style={styles.ImageBackground_839_11819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1759/795a/99b708eff4b1171576d31a385ca8f507"
            }}
            style={styles.ImageBackground_839_11820}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed3/80ed/709ac6aaa23891f16ce12a2571acd039"
            }}
            style={styles.ImageBackground_839_11821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e26/4037/779b41d768d21095ed16f91a87694b73"
            }}
            style={styles.ImageBackground_839_11822}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11823}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5545/ed7d/7187c3e4435d59db53c6725683f22523"
            }}
            style={styles.ImageBackground_839_11825}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11826}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5460/7f4b/aca8ec00525eb4d52e6a3e2dddae91fa"
            }}
            style={styles.ImageBackground_839_11827}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e80/71b8/cdfb643c39af0210ce89eb17d4243b83"
            }}
            style={styles.ImageBackground_839_11828}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5be/2439/d47feef9cc3bb0db6aa88b9212dac5b7"
            }}
            style={styles.ImageBackground_839_11829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386f/52d6/e53865b0b59d49f37e4ab4a31903c461"
            }}
            style={styles.ImageBackground_839_11831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e26/4037/779b41d768d21095ed16f91a87694b73"
            }}
            style={styles.ImageBackground_839_11832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11833}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f72/a8f9/b8441a3e0e9bbba7f8dad34ee02b19ab"
            }}
            style={styles.ImageBackground_839_11834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/447a/9944/e89bb382b4521da70414c0388fb1c698"
            }}
            style={styles.ImageBackground_839_11835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768d/27d4/fbf4724179d6eeb77826efcc19c77eb2"
            }}
            style={styles.ImageBackground_839_11836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d733/ee94/062868b3d0a9b5bd8d95dd3c13dc73d0"
            }}
            style={styles.ImageBackground_839_11837}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/4823/6bcd45408b8d0ee4479b4f0a24e3abb6"
            }}
            style={styles.ImageBackground_839_11838}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a92f/52c6/c99216a6b1b6d41fadef058a4bd7d990"
            }}
            style={styles.ImageBackground_839_11839}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d95/89b8/b073911fd8c5286cc82cd297eb6fce73"
            }}
            style={styles.ImageBackground_839_11840}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1759/795a/99b708eff4b1171576d31a385ca8f507"
            }}
            style={styles.ImageBackground_839_11841}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e7e/3607/50358dc17b2c58df50e029fd1143cbf8"
            }}
            style={styles.ImageBackground_839_11842}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed53/090b/ae3586fe689a4823a50901f0bfec5d05"
            }}
            style={styles.ImageBackground_839_11843}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed3b/1177/c02fe86a99101255c41596a05eb5552d"
            }}
            style={styles.ImageBackground_839_11844}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9897/5d12/3a28e732e6ddc620cbd5512e3d2b3a22"
            }}
            style={styles.ImageBackground_839_11845}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d72/0c0f/b6f109557f18850105e0733575b5486a"
            }}
            style={styles.ImageBackground_839_11846}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30b4/ea7d/1e0451f9ca66be08be9d431f7468d348"
            }}
            style={styles.ImageBackground_839_11847}
          />
        </View>
        <View style={styles.View_839_11848}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db37/9e5e/1f1433afc9f114a3d792e1904dee27bd"
            }}
            style={styles.ImageBackground_839_11849}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/025c/5ddf/8868d15e752b2fd9071560d03c37d976"
            }}
            style={styles.ImageBackground_839_11852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b08/be04/790fda37fa3414a9a7b480776374f962"
            }}
            style={styles.ImageBackground_839_11853}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0acc/695b/3f52c143b591bbda507b63df6d36fe0e"
            }}
            style={styles.ImageBackground_839_11854}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d52c/ddeb/98191cd6b0be8a5fe44f3f512b2ba1ca"
            }}
            style={styles.ImageBackground_839_11855}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e1/9993/9fe3755e045aff40bcf057aa579adb86"
            }}
            style={styles.ImageBackground_839_11856}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ad3/45e7/8e3427e991bf4c3f45898b83e121b4b9"
            }}
            style={styles.ImageBackground_839_11858}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bc/52dc/d3f6052346c463933951d2b84d4b13e4"
            }}
            style={styles.ImageBackground_839_11859}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d62d/bf44/872205426d76b270cbde2dc83f498aa4"
            }}
            style={styles.ImageBackground_839_11860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d01e/5848/d877fd3b17d46f24c311609917caa2b7"
            }}
            style={styles.ImageBackground_839_11861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c49c/99f7/f8bc2e92e17c01b7faea7c95871a82df"
            }}
            style={styles.ImageBackground_839_11862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5183/4cd2/4170ddecd0617254927834ace46e809f"
            }}
            style={styles.ImageBackground_839_11864}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1175/6d6f/3c078cea43eb3c3a117ddf693f072a33"
            }}
            style={styles.ImageBackground_839_11865}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89a4/d068/9fe18966c60295e3d8d86eaa9068c2b5"
            }}
            style={styles.ImageBackground_839_11866}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1025/f7eb/35a944e7414c9780a21afee7a7047468"
            }}
            style={styles.ImageBackground_839_11867}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c3f/e355/efa43eb5c04b3cb085588b7c61d56985"
            }}
            style={styles.ImageBackground_839_11868}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0027/68b0/e8d9af596d640078816ae51085ea3a6f"
            }}
            style={styles.ImageBackground_839_11869}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccd/6107/516137bdb38bf5bc90a96108725fca4d"
          }}
          style={styles.ImageBackground_839_11870}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f54/5b17/3a5ebadf1a59e92841ef530c04c3c28b"
          }}
          style={styles.ImageBackground_839_11873}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_277_3401: {
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
  ImageBackground_I277_3401_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_277_3491: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I277_3491_2_225: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I277_3491_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_3403: {
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
  View_I277_3403_17_96: {
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
  View_I277_3403_17_100: {
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
  ImageBackground_I277_3403_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I277_3403_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I277_3403_17_114: {
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
  ImageBackground_I277_3403_17_117: {
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
  ImageBackground_I277_3403_17_122: {
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
  ImageBackground_I277_3403_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I277_3403_17_124: {
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
  View_I277_3403_17_126: {
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
  ImageBackground_I277_3403_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_277_3404: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_277_3405: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  ImageBackground_277_3406: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%")
  },
  ImageBackground_277_3493: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("114%")
  },
  View_839_11883: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%")
  },
  ImageBackground_839_11448: {
    width: wp("89%"),
    height: hp("28%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_839_11487: {
    width: wp("49%"),
    height: hp("22%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_839_11489: {
    width: wp("81%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_839_11491: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_839_11492: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11493: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11494: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11495: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11496: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11498: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11500: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11501: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11502: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11503: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11504: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11505: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11506: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11507: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11508: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11509: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11510: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11511: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11512: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11513: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11514: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11515: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11516: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11518: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11520: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11521: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11522: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11523: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11524: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11525: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11526: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11527: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11528: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11529: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11530: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11531: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11532: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11533: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11534: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11535: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11536: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11537: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11538: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11539: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11540: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11541: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11542: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11543: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11544: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11545: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11546: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11547: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11548: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11549: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11550: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11551: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11552: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11553: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11554: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11555: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11556: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11557: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11558: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11559: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11560: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11561: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11562: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_839_11563: {
    width: wp("27%"),
    height: hp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_839_11564: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11565: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_839_11566: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_839_11567: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11568: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11569: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11570: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11571: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11572: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11573: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11574: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11575: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11576: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11577: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11578: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11579: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11580: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_839_11581: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_839_11582: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_839_11583: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_839_11584: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11585: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11586: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11587: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11588: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11589: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11590: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11591: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11592: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11593: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11594: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11595: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11596: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11598: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11599: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11601: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11603: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11604: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11605: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11606: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11607: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11608: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11609: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11610: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11611: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11612: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11613: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11614: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11615: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11616: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11617: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11618: {
    width: wp("11%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11619: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11620: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11621: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11622: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11623: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11624: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11625: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11626: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_839_11627: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11628: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11629: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11630: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11631: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11632: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11633: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11634: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11635: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11636: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11637: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11638: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11639: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11640: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11641: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11642: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11643: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11644: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11645: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11646: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11647: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11648: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_839_11649: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_839_11650: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_839_11651: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11652: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11653: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11654: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11655: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11656: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11657: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11658: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11659: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11660: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11661: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11662: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11663: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11664: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11665: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11666: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11667: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11668: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11669: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11670: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11671: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11672: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11673: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11674: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11675: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11676: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11677: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11678: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11679: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11680: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_839_11681: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11682: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11683: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11684: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11685: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11686: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11687: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11688: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_839_11689: {
    width: wp("16%"),
    height: hp("24%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_839_11690: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11691: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11692: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11693: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11694: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11695: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11696: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11697: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11698: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11699: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11700: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11701: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11702: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11703: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11704: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11705: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11707: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11708: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11709: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11710: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11711: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11712: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11713: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11714: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11715: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11716: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11717: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11718: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11719: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11720: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11721: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11722: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11723: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11724: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11726: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11727: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11728: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11729: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11730: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11731: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11732: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11733: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11734: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11735: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11736: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11737: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11738: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11739: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11740: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11741: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11742: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11743: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11744: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11745: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11746: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11747: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11748: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11749: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11750: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11751: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11752: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11753: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11754: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11755: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11756: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11757: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11758: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11759: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11760: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11761: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11762: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11763: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11764: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11765: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11766: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11767: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11768: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11769: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11770: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11771: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11772: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11773: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11774: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11775: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11776: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11777: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11778: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11779: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11780: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11781: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11782: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11783: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11784: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11785: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11786: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11787: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11788: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11789: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11790: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11791: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11792: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11793: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11794: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11795: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11796: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11797: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11798: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11799: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11800: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11801: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11802: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11803: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11804: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_839_11805: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11806: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11807: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11808: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11809: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11810: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11811: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11812: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11813: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11814: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11815: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11816: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11817: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11818: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_839_11819: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11820: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11821: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11822: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11823: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11824: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11825: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11826: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_839_11827: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11828: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11829: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11830: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11831: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11832: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11833: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11834: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11835: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_839_11836: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11837: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_839_11838: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11839: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11840: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_839_11841: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_839_11842: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_839_11843: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_839_11844: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11845: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_839_11846: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_839_11847: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_839_11848: {
    width: wp("65%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_839_11849: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_839_11852: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_839_11853: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_839_11854: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_839_11855: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_839_11856: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_839_11858: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_839_11859: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_839_11860: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_839_11861: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_839_11862: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_839_11864: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_839_11865: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_839_11866: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_839_11867: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_839_11868: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_839_11869: {
    width: wp("65%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_839_11870: {
    width: wp("23%"),
    height: hp("14%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_839_11873: {
    width: wp("67%"),
    height: hp("22%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
