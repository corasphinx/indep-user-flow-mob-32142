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
      <View style={styles.View_18_1813}>
        <View style={styles.View_I18_1813_17_96} />
        <View style={styles.View_I18_1813_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I18_1813_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I18_1813_17_110}
          />
          <View style={styles.View_I18_1813_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I18_1813_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I18_1813_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I18_1813_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I18_1813_17_124} />
        <View style={styles.View_I18_1813_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I18_1813_17_127}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_18_1814}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e38d/3b97/f0d96475c51c9ad1cd24e66b7a534565"
        }}
        style={styles.ImageBackground_18_1815}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e54/d417/d3f3fe212c9c35b2d41f27a21633c18a"
        }}
        style={styles.ImageBackground_18_1816}
      />
      <View style={styles.View_18_5318}>
        <View source={{ uri: "null" }} style={styles.View_18_5319} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc13/269b/aa2648f037360c436c6771844fb696dc"
          }}
          style={styles.ImageBackground_18_5322}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b26/213c/ee72ecfe3cfaa4d94cf6c64dde17028f"
          }}
          style={styles.ImageBackground_18_5359}
        />
        <View style={styles.View_18_5388}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d36/374b/845188acd7033bf55b2902d7b64d907b"
            }}
            style={styles.ImageBackground_18_5389}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d62/457c/45bf6e94eb5c51c9bcf622526b5184a8"
            }}
            style={styles.ImageBackground_18_5390}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c617/48ef/5b15b51009647c8b639f2fe06014494c"
            }}
            style={styles.ImageBackground_18_5392}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac18/6114/9cd5a316ea0e44d434312ffb2e5a7d25"
            }}
            style={styles.ImageBackground_18_5393}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7766/85ee/fe2e19c241936858df85604d724f81dc"
            }}
            style={styles.ImageBackground_18_5394}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ef/949e/67eb713682e82b8d64564753f97f7c61"
            }}
            style={styles.ImageBackground_18_5396}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a13/6142/288c740180d61e66f1987186ac155546"
            }}
            style={styles.ImageBackground_18_5397}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8824/0dfd/f85453e778a1587b794b793067e7e376"
            }}
            style={styles.ImageBackground_18_5398}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ba/6ad0/d3833474e0e79c6df0a0b41fb102b572"
            }}
            style={styles.ImageBackground_18_5399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b5/1344/d0ec992341f11295ab70d9c7a6722799"
            }}
            style={styles.ImageBackground_18_5400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ee/8f84/d2754a882b59c3bfad5e48d30a1f879e"
            }}
            style={styles.ImageBackground_18_5401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ddd/7892/3e1a8711eb8368ba70b273d74a8f8a8b"
            }}
            style={styles.ImageBackground_18_5402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3f/f724/bb0b7eaced6d1b52ed05158e9f05639f"
            }}
            style={styles.ImageBackground_18_5403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94e0/c3e6/28368d3c7719bcc92bf1d1eb134c69f6"
            }}
            style={styles.ImageBackground_18_5404}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6792/78e3/1c7dd73a72700955792b3b808f5e640c"
            }}
            style={styles.ImageBackground_18_5405}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdb3/d094/3bc647c1dd30af52649f986853f831ca"
            }}
            style={styles.ImageBackground_18_5406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59d/59e5/b58fc6b612ac3bcd988cfd2f18592fdd"
            }}
            style={styles.ImageBackground_18_5407}
          />
          <View style={styles.View_18_5408}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a5/2a3a/b7441f5730f3b8a6b7bf860c50f82021"
              }}
              style={styles.ImageBackground_18_5409}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f712/23b1/622b958f5db7fa12fe0c31f64a66b0db"
              }}
              style={styles.ImageBackground_18_5410}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d0/41fd/524ac9a408aa7264e8688301a7498eb2"
              }}
              style={styles.ImageBackground_18_5411}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bac/1094/6c5908b917cde9ba13440b5c4a48ee1d"
              }}
              style={styles.ImageBackground_18_5412}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df39/5bf6/f0c0fe1404ea8898d23b18ca6eca678d"
            }}
            style={styles.ImageBackground_18_5414}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4696/635d/ed4270e7b4fd1d0c60f1404cbe615495"
            }}
            style={styles.ImageBackground_18_5415}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e46/54cb/e322681c528b69fcef35cf64cca17736"
            }}
            style={styles.ImageBackground_18_5416}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a046/50e6/82b2dc6d66e1c155f07780f3834e0c96"
            }}
            style={styles.ImageBackground_18_5417}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6d/0db3/75fd62984a28263dbd6488d5d37e2ccb"
            }}
            style={styles.ImageBackground_18_5420}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/473a/75dc/75a06c9e3f911514540ea0796ebc162f"
            }}
            style={styles.ImageBackground_18_5421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4bf/e8a7/e825499c41a1a08817f489cf2e1f3306"
            }}
            style={styles.ImageBackground_18_5422}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d49b/f741/49707095c164c3366e33ab9621681c11"
            }}
            style={styles.ImageBackground_18_5424}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8aa/e172/136372306a3bca00712a935a0c69f13c"
            }}
            style={styles.ImageBackground_18_5425}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b50/2cbf/eb2194b869be146b432595b922557c09"
            }}
            style={styles.ImageBackground_18_5426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa2/41c8/0541fdf5914b9916aaf82101a976178c"
            }}
            style={styles.ImageBackground_18_5428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60cc/80d2/100415e6782437c06051c697e862654d"
            }}
            style={styles.ImageBackground_18_5429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04cf/7af4/4127b2d261c04051a6e69e9aa0dd58ca"
            }}
            style={styles.ImageBackground_18_5430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ee1/e5cc/6412e0a951f1723535fb15420fd9f9ee"
            }}
            style={styles.ImageBackground_18_5431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/5094/90e0cd169c72d46b7b35ca278bca6b12"
            }}
            style={styles.ImageBackground_18_5433}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a517/86f2/30e6a7c8ef2d6972bf89f5fdad3e3641"
            }}
            style={styles.ImageBackground_18_5434}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd86/a124/d71fac105d7b41157746f4560d626f8f"
            }}
            style={styles.ImageBackground_18_5435}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5806/6a1d/9c5bf08b8ad1d076e842ff0b81c94547"
            }}
            style={styles.ImageBackground_18_5437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e3/f2a3/a4765826269e8c62178555458ddb9d40"
            }}
            style={styles.ImageBackground_18_5438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a21/dbb1/d053fb2a188edd52a956991bec45f87c"
            }}
            style={styles.ImageBackground_18_5439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68de/c5f7/57a72767053da441cb3bbd7a0859648e"
            }}
            style={styles.ImageBackground_18_5442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd97/be46/636e691127a104d5bb06b3f994bf1f11"
            }}
            style={styles.ImageBackground_18_5443}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9219/e498/d95a97027e80e789945c5a0d351cb72a"
            }}
            style={styles.ImageBackground_18_5444}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d662/f4c4/b6fbbdcb67459e975b866dfc9301ca46"
            }}
            style={styles.ImageBackground_18_5447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b481/9a6f/ccee215298ad216396fddd6754129114"
            }}
            style={styles.ImageBackground_18_5448}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6082/972c/c8d081716666e0120fb4018a82fbe7fd"
            }}
            style={styles.ImageBackground_18_5449}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9081/a7a0/804ad319529fa74f2b6f69728e059e93"
            }}
            style={styles.ImageBackground_18_5452}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3bf/d6fe/38665d4791887c5fc0a4e9c282477047"
            }}
            style={styles.ImageBackground_18_5453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1de/25c3/0c0c6fa3164b6ff8692d450a97e6651d"
            }}
            style={styles.ImageBackground_18_5454}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4135/14a8/31339a5a8ace7b273c13c81c2ef18ae1"
            }}
            style={styles.ImageBackground_18_5457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6238/d39b/bbb24d83a2b38a3ec014840cffef32d9"
            }}
            style={styles.ImageBackground_18_5458}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fd0/fbbf/f9b5285ed71564e6940ab7bd937f32e6"
            }}
            style={styles.ImageBackground_18_5459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c0e/ea7a/4323c8919d5e3e405406824c507c6847"
            }}
            style={styles.ImageBackground_18_5461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9d1/8bc9/3c95b525061e046de194cd81952a75c6"
            }}
            style={styles.ImageBackground_18_5462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38bf/fed9/dd6ebe69c2cd00f6b0f09888568b2784"
            }}
            style={styles.ImageBackground_18_5463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0913/2ca0/0a7a18acd740a176b41961f8dbf6ed59"
            }}
            style={styles.ImageBackground_18_5464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c9/260a/3ccc2680042894639fb0e2c94593f2ac"
            }}
            style={styles.ImageBackground_18_5465}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e912/d73c/fb86d8b3ee0bb3426c27f812787e32ed"
            }}
            style={styles.ImageBackground_18_5466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffd/ca66/f48e901aa691e9a469e8d5fc86e920e8"
            }}
            style={styles.ImageBackground_18_5467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb9/7eae/7ca97c5584904746601c6dccc7143ea4"
            }}
            style={styles.ImageBackground_18_5468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99de/d22e/88ea2c42b07c1145247613e81fb9838e"
            }}
            style={styles.ImageBackground_18_5471}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6b/dbe1/ef33735107adaedee59c9b60be600d21"
            }}
            style={styles.ImageBackground_18_5472}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7e6/f55f/ba80b11c7d3f34c21e11ced5f6f8cba5"
            }}
            style={styles.ImageBackground_18_5473}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a020/018e/471f8e137ef4ef3b6f6e5b0aef80a09c"
            }}
            style={styles.ImageBackground_18_5476}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74bc/ca78/d90975d7c5474331645c619cf1ad37a8"
            }}
            style={styles.ImageBackground_18_5477}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/877c/611f4c2f1b6343c71e36d564630c7e8d"
            }}
            style={styles.ImageBackground_18_5478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a2/7391/0c6f68a334773eaaaf4f3a90d7532efa"
            }}
            style={styles.ImageBackground_18_5479}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21d9/ac0e/804d459a4bd56675eb3a527ee17cf14f"
            }}
            style={styles.ImageBackground_18_5480}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63f5/e227/b1305a6f3582600809564dcee9a1f868"
            }}
            style={styles.ImageBackground_18_5481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff4a/71ec/98278bcab0326673df0f3b39896c9f19"
            }}
            style={styles.ImageBackground_18_5482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b7a/67f7/2fdeef876124f9e1f3e43a41419188a8"
            }}
            style={styles.ImageBackground_18_5483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c237/2e14/685d7ddbe83405c743007c64a852e8be"
            }}
            style={styles.ImageBackground_18_5484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d11/c27a/60136d52ab85d2c95e8a5edf47568382"
            }}
            style={styles.ImageBackground_18_5485}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8150/2c72/0e6a08d0c0a0044ddf6271f3b820e843"
            }}
            style={styles.ImageBackground_18_5486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fdd/a693/3ba56ebe1cc7fdc135ba9d60328ae40d"
            }}
            style={styles.ImageBackground_18_5487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51f5/7841/4adec2727804d2ecf65d431eaeb7647f"
            }}
            style={styles.ImageBackground_18_5488}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2843/dd97/7b2a545970625ab5cfe068e8da4476d8"
            }}
            style={styles.ImageBackground_18_5489}
          />
        </View>
        <View style={styles.View_18_5490}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6320/6c23/3ee7d095f58246c2bbfdabadd78e08a6"
            }}
            style={styles.ImageBackground_18_5491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f13/8e30/ca7782bd6790cdf156eab67ff6b050b9"
            }}
            style={styles.ImageBackground_18_5492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fa4/436a/aa75d6756287d7361a52e5168e3fec53"
            }}
            style={styles.ImageBackground_18_5495}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/597c/7f6c/176855e1532a801fdc3452441481ce76"
            }}
            style={styles.ImageBackground_18_5496}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c3/becb/167e174901db58741ec9a07dcf49efb3"
            }}
            style={styles.ImageBackground_18_5497}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f7d/4bf5/138c6e8dbb7e309d1409df804e7894d8"
            }}
            style={styles.ImageBackground_18_5499}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e3/68df/de9c620b77798b46d0cae11ea0e45d90"
          }}
          style={styles.ImageBackground_18_5500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a1f/0ef8/40852c1febf506be92680507b0dc4012"
          }}
          style={styles.ImageBackground_18_5506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b07/7b1b/61d0164beba1d8dbc577850417f21879"
          }}
          style={styles.ImageBackground_18_5508}
        />
      </View>
      <View style={styles.View_18_1817}>
        <View style={styles.View_18_1818} />
        <View style={styles.View_18_1819}>
          <Text style={styles.Text_18_1819}>Enter Your Email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/261a/e2a8/0d314c03d9f1cc1352761846cca08281"
          }}
          style={styles.ImageBackground_18_1820}
        />
      </View>
      <View style={styles.View_18_1828}>
        <View style={styles.View_I18_1828_2_225}>
          <Text style={styles.Text_I18_1828_2_225}>Submit</Text>
        </View>
      </View>
      <View style={styles.View_18_5316}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I18_5316_17_60}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_18_1813: {
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
  View_I18_1813_17_96: {
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
  View_I18_1813_17_100: {
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
  ImageBackground_I18_1813_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_1813_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I18_1813_17_114: {
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
  ImageBackground_I18_1813_17_117: {
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
  ImageBackground_I18_1813_17_122: {
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
  ImageBackground_I18_1813_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_1813_17_124: {
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
  View_I18_1813_17_126: {
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
  ImageBackground_I18_1813_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_18_1814: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_18_1815: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  ImageBackground_18_1816: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%")
  },
  View_18_5318: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("37%")
  },
  View_18_5319: {
    width: wp("64%"),
    height: hp("27%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5322: {
    width: wp("15%"),
    height: hp("18%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_18_5359: {
    width: wp("10%"),
    height: hp("18%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_18_5388: {
    width: wp("45%"),
    height: hp("19%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_5389: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5390: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5392: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5393: {
    width: wp("19%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5394: {
    width: wp("14%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5396: {
    width: wp("19%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5397: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_18_5398: {
    width: wp("17%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_5399: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_5400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_18_5401: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5402: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_18_5403: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_5404: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5405: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_5406: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5407: {
    width: wp("26%"),
    height: hp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_5408: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_5409: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_5410: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5411: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_5412: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5414: {
    width: wp("26%"),
    height: hp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5415: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_18_5416: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5417: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5420: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5421: {
    width: wp("13%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_5422: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_5424: {
    width: wp("13%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_5425: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_5426: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5428: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_5429: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_5430: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5431: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_5433: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5434: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_5435: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5437: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_5438: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_18_5439: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_18_5442: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_18_5443: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_18_5444: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_18_5447: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_18_5448: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_18_5449: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_18_5452: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_18_5453: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_18_5454: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_18_5457: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_18_5458: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_5459: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_5461: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_5462: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_5463: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_18_5464: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5465: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5466: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5467: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5468: {
    width: wp("13%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_18_5471: {
    width: wp("15%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_5472: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5473: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5476: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_5477: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5478: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_5479: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5480: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5481: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_5482: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5483: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_5484: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_18_5485: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_5486: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5487: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_5488: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_5489: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_18_5490: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_5491: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_5492: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_5495: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_5496: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5497: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5499: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5500: {
    width: wp("18%"),
    height: hp("6%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_18_5506: {
    width: wp("64%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_5508: {
    width: wp("34%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_18_1817: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("78%")
  },
  View_18_1818: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_18_1819: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_18_1819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_1820: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_1828: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I18_1828_2_225: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I18_1828_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_5316: {
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
  ImageBackground_I18_5316_17_60: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
