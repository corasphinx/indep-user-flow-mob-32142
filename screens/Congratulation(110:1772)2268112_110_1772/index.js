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
      <View style={styles.View_110_1773}>
        <View style={styles.View_I110_1773_17_96} />
        <View style={styles.View_I110_1773_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/77ad/56a9cba0464f08dcf691b4f8736b4e78"
            }}
            style={styles.ImageBackground_I110_1773_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/78ae/ac6c388da814d56f4f98301026bb194e"
            }}
            style={styles.ImageBackground_I110_1773_17_110}
          />
          <View style={styles.View_I110_1773_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68a/d9f4/c580a4c378fe8c24758a3c22a70abde7"
              }}
              style={styles.ImageBackground_I110_1773_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/2888/2b8a7d1d61acaa585521e8d3190b6d02"
              }}
              style={styles.ImageBackground_I110_1773_17_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c8/e922/6669b862f12710f875739b94bdd23ba6"
              }}
              style={styles.ImageBackground_I110_1773_17_123}
            />
          </View>
        </View>
        <View style={styles.View_I110_1773_17_124} />
        <View style={styles.View_I110_1773_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a9/97e1/d8c3afb79752bd1fa050e0cc78aa1857"
            }}
            style={styles.ImageBackground_I110_1773_17_127}
          />
        </View>
      </View>
      <View style={styles.View_110_1783}>
        <View style={styles.View_110_1784} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0311/f53f/e6b92154daded1409cbc7bb4b5a45953"
          }}
          style={styles.ImageBackground_110_1785}
        />
        <View style={styles.View_110_1786}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ee5/3acf/6ef104ff810045c8ab61b3a5563369d7"
            }}
            style={styles.ImageBackground_110_1787}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa68/059a/d6a1bfba7bd16648ebfc963813e5697b"
            }}
            style={styles.ImageBackground_110_1788}
          />
        </View>
      </View>
      <View style={styles.View_110_1794}>
        <View style={styles.View_I110_1794_2_225}>
          <Text style={styles.Text_I110_1794_2_225}>Upload Document</Text>
        </View>
      </View>
      <View style={styles.View_160_1905}>
        <View style={styles.View_160_1906} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb84/982f/682ab68ce2d016c2d79da6585ad49fe3"
          }}
          style={styles.ImageBackground_160_1907}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ca/ec84/513e7a4af649902614b951518246a640"
          }}
          style={styles.ImageBackground_160_1908}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d5f/fa6a/57495e17ff3475030f17b5f2503139c1"
          }}
          style={styles.ImageBackground_160_1909}
        />
      </View>
      <View style={styles.View_160_1910}>
        <View style={styles.View_160_1911} />
        <View style={styles.View_160_1912}>
          <Text style={styles.Text_160_1912}>Enter Note</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8429/82a4/095fc68c70920ec6b58054e997bcef96"
          }}
          style={styles.ImageBackground_160_1913}
        />
      </View>
      <View style={styles.View_160_1919}>
        <View style={styles.View_160_1920} />
        <View style={styles.View_160_1921}>
          <Text style={styles.Text_160_1921}>Name your record</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5b5/eb7a/b97c57fa2cd9b36f88c7aa550b49e90a"
          }}
          style={styles.ImageBackground_160_1923}
        />
      </View>
      <View style={styles.View_110_1795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b26/61bd/d13751b02d40927870416b70c5330fe8"
          }}
          style={styles.ImageBackground_110_1796}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
          }}
          style={styles.ImageBackground_110_1797}
        />
      </View>
      <View style={styles.View_110_1841} />
      <View style={styles.View_110_1842}>
        <View style={styles.View_110_1843} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f95b/bc8c/4aa9a4176c498d4b6e812f05f5704707"
          }}
          style={styles.ImageBackground_110_2031}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837c/285b/dc01bcea3b8fde9405d34e9c77784d36"
          }}
          style={styles.ImageBackground_110_2032}
        />
        <View style={styles.View_110_2034}>
          <View style={styles.View_I110_2034_2_225}>
            <Text style={styles.Text_I110_2034_2_225}>Close</Text>
          </View>
        </View>
        <View style={styles.View_110_2030}>
          <View source={{ uri: "null" }} style={styles.View_110_1862} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c898/004c/d6c1613f8fa066e07e6b4346c1125a06"
            }}
            style={styles.ImageBackground_110_1871}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593c/7eb4/f38b66bd04c1a444fc6ca4bb996458b8"
            }}
            style={styles.ImageBackground_110_1874}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f5/d541/72ed8db9026db84a0583cb294f2bf03e"
            }}
            style={styles.ImageBackground_110_1876}
          />
          <View style={styles.View_110_1906}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4dd/5c09/42a1b766681fc2cf9f7d9084899068f4"
              }}
              style={styles.ImageBackground_110_1907}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d808/03c4/064617369db82118bb7a7f1f419a4652"
              }}
              style={styles.ImageBackground_110_1908}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955a/6bcc/b7828067fc4549b13b683b07235917dc"
              }}
              style={styles.ImageBackground_110_1910}
            />
            <View source={{ uri: "null" }} style={styles.View_110_1911} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0e5/079b/701d202d56b6210f5367540c67371260"
              }}
              style={styles.ImageBackground_110_1913}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cc7/dc95/4bcfe79844a6875c7c1d1ea8e90b626e"
              }}
              style={styles.ImageBackground_110_1914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99bf/6a03/d1f74459a2d583852dd84fc3ed5bc2d4"
              }}
              style={styles.ImageBackground_110_1915}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c159/d1c7/7c5d7604f9c16194efa28e1896045b77"
              }}
              style={styles.ImageBackground_110_1916}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e6/1668/a8bba522947b1dfc01efe78e359ec2c7"
              }}
              style={styles.ImageBackground_110_1917}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a61/240a/6165676beb17aa1bd317fd31c3653c64"
              }}
              style={styles.ImageBackground_110_1918}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b9a/57cf/af6b0ede5ca2b46750252a017191e401"
              }}
              style={styles.ImageBackground_110_1920}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b1/1bab/a018d2f661d544a828fee77cdf95f419"
              }}
              style={styles.ImageBackground_110_1921}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffcb/49fb/bfd25e649c3766dceb7a1e736515265b"
              }}
              style={styles.ImageBackground_110_1922}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eb7/c0f7/b223efc18ec9fe917880257dc05e1126"
              }}
              style={styles.ImageBackground_110_1923}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eed/3410/0849cef6fcdcbcd432add8cd840cffcc"
              }}
              style={styles.ImageBackground_110_1924}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f5/a893/2b3f48e87babd9a0e5e433e9587d1154"
              }}
              style={styles.ImageBackground_110_1925}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d2/05cf/1bbb1a9772bff76cdd62bb20987a5aff"
              }}
              style={styles.ImageBackground_110_1926}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/996f/3a6c/340e985fea8b62ebf1aebb7055ed5d4c"
              }}
              style={styles.ImageBackground_110_1928}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2293/0c9b/627c8f4cb399a2cc37f9ea8ea9ae0e7b"
              }}
              style={styles.ImageBackground_110_1929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2293/0c9b/627c8f4cb399a2cc37f9ea8ea9ae0e7b"
              }}
              style={styles.ImageBackground_110_1930}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f16/8342/d11ef50a8c45938c852ac1373ba39245"
              }}
              style={styles.ImageBackground_110_1931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a242/041d/a7a353b43b1d65653d3541aed4a6bfa4"
              }}
              style={styles.ImageBackground_110_1932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e92/ed90/a32fe959cd31c40a7b1fb36bb2815342"
              }}
              style={styles.ImageBackground_110_1933}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f715/8346/ab2a2dbd554d4400444efa9481cd988e"
              }}
              style={styles.ImageBackground_110_1934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/734a/d947/dab4c1e14766b806e4a8f7f69b089b28"
              }}
              style={styles.ImageBackground_110_1935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f47b/2b17/03810300849d85aff240a146c2a39857"
              }}
              style={styles.ImageBackground_110_1936}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a228/181d/ee177b3635fc4905f8ed4db843eae5ad"
              }}
              style={styles.ImageBackground_110_1937}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9f/a408/34d667afc7da604de6d69aec7247b658"
              }}
              style={styles.ImageBackground_110_1938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f8/0d77/fe13a128825e666cb42b258fdb38a573"
              }}
              style={styles.ImageBackground_110_1939}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7580/7b54/9c2fa52b38520ed699f5cb2a6c925696"
              }}
              style={styles.ImageBackground_110_1941}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5768/f515/dc50b9d6de577c4fca1010be7d68e7d0"
              }}
              style={styles.ImageBackground_110_1942}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee6/4db2/44f97e02add133e5489d755bf9bc6417"
              }}
              style={styles.ImageBackground_110_1943}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c25d/5da6/da10f101c04f5c976ae1f823ddbc0850"
              }}
              style={styles.ImageBackground_110_1945}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b91/d50a/6ac98e1c2f256aa7b4859be5e7880714"
              }}
              style={styles.ImageBackground_110_1946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7e8/24e6/c5740a3578cdaff7105aa78b8060fb37"
              }}
              style={styles.ImageBackground_110_1947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77ec/f765/60b2ebf51cfd043ade54afca7c65f4b4"
              }}
              style={styles.ImageBackground_110_1948}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603e/21dd/ffa1c1f8c99998e5f490163795d91aa1"
              }}
              style={styles.ImageBackground_110_1950}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a258/9bae/91d9a44bb576abcc430b7068281a5b03"
              }}
              style={styles.ImageBackground_110_1951}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d9c/c233/b08a13b60e953155d31d75cf30df2db8"
              }}
              style={styles.ImageBackground_110_1952}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/002e/5cc2/cde52bf69098ff35895dadab8adfce36"
              }}
              style={styles.ImageBackground_110_1953}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a258/9bae/91d9a44bb576abcc430b7068281a5b03"
              }}
              style={styles.ImageBackground_110_1955}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8eca/4e78/6ccfaf2a55f12edbb51a48fdf7e61a7f"
              }}
              style={styles.ImageBackground_110_1957}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3981/d447/e75f7f0e5599d752fd4ae839740b9fda"
              }}
              style={styles.ImageBackground_110_2033}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e38/4e87/8e029c0b4661b95b9a1443a994bd39f1"
              }}
              style={styles.ImageBackground_110_1958}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0945/4dc6/8c69c6897721d5527bf58c9856585ae4"
              }}
              style={styles.ImageBackground_110_1961}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b5f/b962/b8b7e6f38efec684c1f9ad16eca5670f"
              }}
              style={styles.ImageBackground_110_1962}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d01e/0602/64a85f82d7f790fa92cff37297a6e4b8"
              }}
              style={styles.ImageBackground_110_1963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f7f/182a/adb5961f2d0f1f232e8f6f7bbae65ef5"
              }}
              style={styles.ImageBackground_110_1964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/230d/b554/73691d318ebeba36bcd6f70d45209369"
              }}
              style={styles.ImageBackground_110_1965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b97a/eaf0/dd8e4b72398d5357f630b056f9ffd235"
              }}
              style={styles.ImageBackground_110_1966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/055b/400a/710f6cca9574f6f6b306da2c80e2b64f"
              }}
              style={styles.ImageBackground_110_1967}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8f/a721/5ca2d905cb6c431fb1dc3859f568f207"
              }}
              style={styles.ImageBackground_110_1968}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/605a/e9ea/f6c16dfd08bac8d59e3113c3eeb0ef95"
              }}
              style={styles.ImageBackground_110_1969}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d05b/0f01/eee45534d30e9a8d26264870b3d1a43b"
              }}
              style={styles.ImageBackground_110_1970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bd/f1d8/29d880814b6ce0eb98cd2d263a0d05ef"
              }}
              style={styles.ImageBackground_110_1971}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3348/5df2/45f8f99756fb8de7ad28b9c28fe9e085"
              }}
              style={styles.ImageBackground_110_1972}
            />
          </View>
          <View style={styles.View_110_1973}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9ae/3d46/fecfcd9945ce2af2e437f3f23c91f8af"
              }}
              style={styles.ImageBackground_110_1974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eb2/0b76/03008171e9c27489e4b07352c1570bc3"
              }}
              style={styles.ImageBackground_110_1975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90aa/d7c8/91b74acdbacbdf8bb11a346b8edb5460"
              }}
              style={styles.ImageBackground_110_1976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a9/23c0/c4d07b341b0f84212a45731187c0f8d7"
              }}
              style={styles.ImageBackground_110_1977}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5461/bae4/09d41b2ab9239f38df0a23795b67273a"
              }}
              style={styles.ImageBackground_110_1980}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0362/9c06/8c569b0714a0a15a491c68cba9249436"
              }}
              style={styles.ImageBackground_110_1981}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7faf/bb27/a49ccb412e51e77ffe2bc9d8b592bd71"
              }}
              style={styles.ImageBackground_110_1983}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba13/4093/d654d7a24a8134ebe5d8ae066cb4c870"
              }}
              style={styles.ImageBackground_110_1984}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df03/d77a/5fd87b86d38fc8e00f2bb3fbe52720e0"
              }}
              style={styles.ImageBackground_110_1985}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f107/2df1/f21cd5eac1ea846234cfc24afef88277"
              }}
              style={styles.ImageBackground_110_1987}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5923/5dcd/ce007703eed590b68f8dcc9a601d41f4"
              }}
              style={styles.ImageBackground_110_1988}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc64/fffc/f452f3f637ab0aabaaa967a2adf501a9"
              }}
              style={styles.ImageBackground_110_1989}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c3/1a01/d118caac0e906d821434ef3c9491e190"
              }}
              style={styles.ImageBackground_110_1991}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf84/3c54/4bf089656ffb59c06859e0c9342e4a1d"
              }}
              style={styles.ImageBackground_110_1992}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801d/5ab5/9bc8b9af6874840972926a0d5680eec5"
              }}
              style={styles.ImageBackground_110_1993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d75a/915e/ac5df6fe220e20471ec47335a339b887"
              }}
              style={styles.ImageBackground_110_1994}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4914/da90/899c20dac0769a88aefaa1064d8b8022"
              }}
              style={styles.ImageBackground_110_1995}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2599/b3c4/e8dd2fddef86ad5a501684582820aa1a"
              }}
              style={styles.ImageBackground_110_1997}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d46/886f/3c8976ca4f99da20cf9949d7fd592f13"
              }}
              style={styles.ImageBackground_110_1998}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0128/1d30/56c9b29395087e98ecb7eba698b2a8f7"
              }}
              style={styles.ImageBackground_110_2001}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa7d/4a14/febc9d70dc35b9ee5a6463f1ffde31be"
              }}
              style={styles.ImageBackground_110_2002}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e43/ee88/9024013ca02309e671d6896dd0bd6aa8"
              }}
              style={styles.ImageBackground_110_2003}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/643f/6f74/25cb956a9c58341dfdd2a905811ef0b0"
              }}
              style={styles.ImageBackground_110_2004}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3267/41da/f7a47436c6677e485a988ea0b7d3c091"
              }}
              style={styles.ImageBackground_110_2005}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2221/caa9/9ca4677603bd581b81b833ed18f2c640"
              }}
              style={styles.ImageBackground_110_2006}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f75/ff24/1f2c651ce86c9499ce2cf56f1bbcdfb5"
              }}
              style={styles.ImageBackground_110_2007}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cf4/4901/fa0b1a04bb516b4b5a98b8dfd5bf90c7"
              }}
              style={styles.ImageBackground_110_2008}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8829/b481/e7693a07140f8c7bb438a2e188aeb23f"
              }}
              style={styles.ImageBackground_110_2009}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a955/d6ef/dae0964d389ca30deb07c3c0c3e47ef9"
              }}
              style={styles.ImageBackground_110_2012}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f16/e62a/cbc7fb3626bbebfe715b95abd35722e1"
              }}
              style={styles.ImageBackground_110_2013}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7bf/5931/dc2c672aecc9d3f3d64ac90679ad00e9"
              }}
              style={styles.ImageBackground_110_2014}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4337/9b85/50f4f82c729e917e34581c21f6e46b86"
              }}
              style={styles.ImageBackground_110_2015}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e4/e89a/e0d8a6e0792ed0de070971e5ca9d0c86"
              }}
              style={styles.ImageBackground_110_2017}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8449/f5e2/0936ff473b63cdd088adff0585fa2748"
              }}
              style={styles.ImageBackground_110_2018}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ef/cea8/e6ddf84b74cbf70e7f7714bf5fca2c4c"
              }}
              style={styles.ImageBackground_110_2019}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0082/1658/9e82285e9084d7645617e1ff5aa55f8d"
              }}
              style={styles.ImageBackground_110_2020}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e78/e72c/176fc3c127a48d44a7f77da801ad9e6c"
              }}
              style={styles.ImageBackground_110_2021}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe7/1df1/32d82050a456d2b4d6ee285e918b744a"
              }}
              style={styles.ImageBackground_110_2022}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeda/c98f/b3459851e688ebcb8e634b3dc01d39ee"
              }}
              style={styles.ImageBackground_110_2023}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1292/b910/16f0f575b50390ef10f4e23f9c91643a"
              }}
              style={styles.ImageBackground_110_2024}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c982/8da7/fca88146f4895a48436920aea4531698"
              }}
              style={styles.ImageBackground_110_2025}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f687/211b/217e690beca87f178244af2e1f26ff48"
              }}
              style={styles.ImageBackground_110_2026}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b117/2dd9/b331f21864e62249b408289feed9c70b"
              }}
              style={styles.ImageBackground_110_2027}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa54/c199/ebadf3b8a952e2a163fa80ae93c705a7"
              }}
              style={styles.ImageBackground_110_2028}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2b/b9b1/ca24c7807848a79398fc7b7c2ae2cdb3"
              }}
              style={styles.ImageBackground_110_2029}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_110_1773: {
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
  View_I110_1773_17_96: {
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
  View_I110_1773_17_100: {
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
  ImageBackground_I110_1773_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I110_1773_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I110_1773_17_114: {
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
  ImageBackground_I110_1773_17_117: {
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
  ImageBackground_I110_1773_17_122: {
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
  ImageBackground_I110_1773_17_123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I110_1773_17_124: {
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
  View_I110_1773_17_126: {
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
  ImageBackground_I110_1773_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_110_1783: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  View_110_1784: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_110_1785: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_110_1786: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%")
  },
  ImageBackground_110_1787: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_110_1788: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_110_1794: {
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
  View_I110_1794_2_225: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I110_1794_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1905: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%")
  },
  View_160_1906: {
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
  ImageBackground_160_1907: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  ImageBackground_160_1908: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_160_1909: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_160_1910: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%")
  },
  View_160_1911: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_160_1912: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_160_1912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_1913: {
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
  View_160_1919: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("45%")
  },
  View_160_1920: {
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
  View_160_1921: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_160_1921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_1923: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_110_1795: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  ImageBackground_110_1796: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_110_1797: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_110_1841: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5
  },
  View_110_1842: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("27%")
  },
  View_110_1843: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_110_2031: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%")
  },
  ImageBackground_110_2032: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("47%")
  },
  View_110_2034: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I110_2034_2_225: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I110_2034_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_2030: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_110_1862: {
    width: wp("64%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1871: {
    width: wp("68%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1874: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_110_1876: {
    width: wp("16%"),
    height: hp("17%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_110_1906: {
    width: wp("50%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_110_1907: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_110_1908: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1910: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_110_1911: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1913: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1914: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1915: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1916: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1917: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1918: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1920: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1921: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1922: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1923: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1924: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1925: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1926: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1928: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1929: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1930: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1931: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1932: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_110_1933: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1934: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1935: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1936: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1937: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1938: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_110_1939: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1941: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_110_1942: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1943: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1945: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1946: {
    width: wp("48%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1947: {
    width: wp("45%"),
    height: hp("16%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1948: {
    width: wp("45%"),
    height: hp("16%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1950: {
    width: wp("45%"),
    height: hp("16%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1951: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1952: {
    width: wp("45%"),
    height: hp("16%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1953: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_110_1955: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1957: {
    width: wp("47%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_2033: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%")
  },
  ImageBackground_110_1958: {
    width: wp("45%"),
    height: hp("12%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1961: {
    width: wp("47%"),
    height: hp("17%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1962: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1963: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1964: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_110_1965: {
    width: wp("0%"),
    height: hp("13%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_110_1966: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_110_1967: {
    width: wp("15%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_110_1968: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_1969: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1970: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1971: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_110_1972: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_110_1973: {
    width: wp("11%"),
    height: hp("19%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_110_1974: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1975: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1976: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1977: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_1980: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1981: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1983: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_1984: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_1985: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_1987: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_1988: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_1989: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1991: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_1992: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1993: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1994: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_1995: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_1997: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_1998: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2001: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_110_2002: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_110_2003: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2004: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2005: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_2006: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_2007: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_110_2008: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_2009: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_2012: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_110_2013: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_2014: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_2015: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2017: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_110_2018: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_2019: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2020: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_110_2021: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_2022: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_2023: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_110_2024: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_2025: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_110_2026: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_110_2027: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_2028: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_110_2029: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
