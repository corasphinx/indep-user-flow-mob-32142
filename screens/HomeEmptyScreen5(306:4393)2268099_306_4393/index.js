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
      <View style={styles.View_306_4400}>
        <View style={styles.View_306_4401} />
        <View style={styles.View_582_11034}>
          <View style={styles.View_582_11035}>
            <View style={styles.View_582_11036}>
              <Text style={styles.Text_582_11036}>Reminders</Text>
            </View>
            <View style={styles.View_582_11037}>
              <Text style={styles.Text_582_11037}>Trips</Text>
            </View>
            <View style={styles.View_582_11038}>
              <Text style={styles.Text_582_11038}>Clients</Text>
            </View>
            <View style={styles.View_582_11039}>
              <Text style={styles.Text_582_11039}>Invoices</Text>
            </View>
            <View style={styles.View_582_11040}>
              <Text style={styles.Text_582_11040}>Transactions</Text>
            </View>
            <View style={styles.View_582_11041}>
              <Text style={styles.Text_582_11041}>Vendors</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_582_11042}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7a/d55c/df220c1701764c9f5360d2ef4c576c33"
          }}
          style={styles.ImageBackground_306_4402}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/674d/054c/b0235649ee5e7d1c640c3f5b8893c902"
          }}
          style={styles.ImageBackground_306_4403}
        />
        <View style={styles.View_306_4404}>
          <View style={styles.View_I306_4404_2_225}>
            <Text style={styles.Text_I306_4404_2_225}>Add Vendor</Text>
          </View>
        </View>
        <View style={styles.View_306_4405} />
      </View>
      <View style={styles.View_306_4406}>
        <View style={styles.View_I306_4406_17_96} />
        <View style={styles.View_I306_4406_17_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/872f/13044cae67c9978d1959c04caf03c14c"
            }}
            style={styles.ImageBackground_I306_4406_17_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afc/4d9a/98fb6aea2f183fcefd22fd3487e29d68"
            }}
            style={styles.ImageBackground_I306_4406_17_110}
          />
          <View style={styles.View_I306_4406_17_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb52/4234/ddd234cc14e2e4c1d99e1c364a86e93c"
              }}
              style={styles.ImageBackground_I306_4406_17_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/1799/c252934c4182bdba44d78f2837bc7102"
              }}
              style={styles.ImageBackground_I306_4406_17_122}
            />
            <View style={styles.View_I306_4406_17_123} />
          </View>
        </View>
        <View style={styles.View_I306_4406_17_124} />
        <View style={styles.View_I306_4406_17_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec21/4575/f62c5ea14e122e1a4b0a7c57358e3b3a"
            }}
            style={styles.ImageBackground_I306_4406_17_127}
          />
        </View>
      </View>
      <View style={styles.View_306_4407}>
        <View style={styles.View_306_4408}>
          <View style={styles.View_306_4409}>
            <View style={styles.View_306_4410}>
              <View style={styles.View_306_4411}>
                <Text style={styles.Text_306_4411}>TFC : $ 5,450</Text>
              </View>
              <View style={styles.View_306_4412}>
                <Text style={styles.Text_306_4412}>John Doe</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/9d7f/770ae97ff5b2df02d49578a2b84340e6"
          }}
          style={styles.ImageBackground_306_4413}
        />
        <View style={styles.View_306_4414}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d039/09fa/3fb8097d6de03ed3a7f60cca678dd032"
            }}
            style={styles.ImageBackground_I306_4414_2_192}
          />
        </View>
        <View style={styles.View_306_4415}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c71/c336/dfce38f3dd866b3217e008c43678cc52"
            }}
            style={styles.ImageBackground_I306_4415_2_200}
          />
        </View>
      </View>
      <View style={styles.View_306_4416}>
        <View style={styles.View_306_4417}>
          <Text style={styles.Text_306_4417}>Income</Text>
        </View>
        <View style={styles.View_306_4418}>
          <Text style={styles.Text_306_4418}>Expenses</Text>
        </View>
        <View style={styles.View_306_4419}>
          <Text style={styles.Text_306_4419}>Net Flow</Text>
        </View>
        <View style={styles.View_306_4420}>
          <View style={styles.View_306_4421}>
            <Text style={styles.Text_306_4421}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658f/af21/757971600b545063af187edb548a6f38"
            }}
            style={styles.ImageBackground_306_4422}
          />
        </View>
      </View>
      <View style={styles.View_306_4423}>
        <View style={styles.View_306_4424}>
          <View style={styles.View_306_4425}>
            <Text style={styles.Text_306_4425}>$50</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4426}
        />
        <View style={styles.View_306_4427}>
          <View style={styles.View_306_4428}>
            <Text style={styles.Text_306_4428}>$40</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4429}
        />
        <View style={styles.View_306_4430}>
          <Text style={styles.Text_306_4430}>$30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4431}
        />
        <View style={styles.View_306_4432}>
          <Text style={styles.Text_306_4432}>$20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4433}
        />
        <View style={styles.View_306_4434}>
          <Text style={styles.Text_306_4434}>$10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe3/bdc3/adc4c96dc1fb55b04fe715e673b064ba"
          }}
          style={styles.ImageBackground_306_4435}
        />
        <View style={styles.View_306_4436}>
          <Text style={styles.Text_306_4436}>Jan</Text>
        </View>
        <View style={styles.View_306_4437}>
          <Text style={styles.Text_306_4437}>Feb</Text>
        </View>
        <View style={styles.View_306_4438}>
          <Text style={styles.Text_306_4438}>Mar</Text>
        </View>
        <View style={styles.View_306_4439}>
          <Text style={styles.Text_306_4439}>Apr</Text>
        </View>
        <View style={styles.View_306_4440}>
          <Text style={styles.Text_306_4440}>May</Text>
        </View>
        <View style={styles.View_306_4441}>
          <Text style={styles.Text_306_4441}>Jun</Text>
        </View>
      </View>
      <View style={styles.View_306_4449}>
        <View style={styles.View_I306_4449_70_449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1a/e921/55f7f58408810880d4bd15efed0eadf7"
            }}
            style={styles.ImageBackground_I306_4449_70_450}
          />
          <View style={styles.View_I306_4449_80_420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/10a6/a21f39a2900119995e073ab48851fd1a"
              }}
              style={styles.ImageBackground_I306_4449_80_420_2_188}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb44/eb99/e507aa3bc2ff07bd567c7093ff8553d3"
            }}
            style={styles.ImageBackground_I306_4449_80_424}
          />
          <View style={styles.View_I306_4449_80_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b8/7d09/17b59baf44ff30088f2c9742f2980a5f"
              }}
              style={styles.ImageBackground_I306_4449_80_426_2_240}
            />
          </View>
          <View style={styles.View_I306_4449_80_430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c1f/f8b7/95e0526278785e44ef3fb79b7601bb12"
              }}
              style={styles.ImageBackground_I306_4449_80_430_2_337}
            />
          </View>
        </View>
        <View style={styles.View_I306_4449_70_456}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/a50c/138bf09aece5bf54cdd39416d70882f4"
            }}
            style={styles.ImageBackground_I306_4449_70_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9c/5269/e543f224e9d56517cfb5e2184ecd9e02"
            }}
            style={styles.ImageBackground_I306_4449_70_458}
          />
        </View>
      </View>
      <View style={styles.View_306_5614}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d906/77b7/a3ed6ec3f116a3e7f9166f6c414c3dd9"
          }}
          style={styles.ImageBackground_306_5315}
        />
        <View source={{ uri: "null" }} style={styles.View_306_5363} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/721f/1932/826e4bfc1ff29880f54ae0ea4e91d809"
          }}
          style={styles.ImageBackground_306_5366}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba5f/9147/063d929fda7a5ed696c8761b1b09a1dc"
          }}
          style={styles.ImageBackground_306_5403}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39f/d296/59cf23870a1f4491c5b84f56cd097b6c"
          }}
          style={styles.ImageBackground_306_5411}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae31/e847/3f95e1494668b386169e605e14fa47b4"
          }}
          style={styles.ImageBackground_306_5416}
        />
        <View style={styles.View_306_5418}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/305b/9803/87340c8a026552c3beb5aea6d19f49bb"
            }}
            style={styles.ImageBackground_306_5419}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae2/6286/d042ee0b0a7407807066d80006398ba2"
            }}
            style={styles.ImageBackground_306_5420}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d59/3c9d/fc55fc8a24002053eaa5b0e06f98b507"
            }}
            style={styles.ImageBackground_306_5422}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5423}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d59/3c9d/fc55fc8a24002053eaa5b0e06f98b507"
            }}
            style={styles.ImageBackground_306_5424}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917a/f7d3/398f3dec85ac51b7ab9a2e7e5a256967"
            }}
            style={styles.ImageBackground_306_5425}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8831/988a/3d334d0f311298d2dfe76ba7ea6e7ad2"
            }}
            style={styles.ImageBackground_306_5426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5b/b785/0662c5bdc7d40803d6f712c94073f069"
            }}
            style={styles.ImageBackground_306_5427}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdcb/5917/7cd874581414b7e6ae63378a366eec9b"
            }}
            style={styles.ImageBackground_306_5428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5ab/6ef9/10f6a94b5033a5effb9d88b2354632bc"
            }}
            style={styles.ImageBackground_306_5429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00c1/aab2/ae6dae6b704f2fc602c00941d03cc5b2"
            }}
            style={styles.ImageBackground_306_5430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c44/0bd2/614cfb1c467b55a3f1ed12eb7dc4c08b"
            }}
            style={styles.ImageBackground_306_5431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/981b/01da/3291471ee1794853b70cab89e16132ae"
            }}
            style={styles.ImageBackground_306_5432}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25cd/9a21/2fd2a70d9eff0bf132680b77b6cb435f"
            }}
            style={styles.ImageBackground_306_5433}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4232/464e/625e062e6578de52f6c0914ee97d585c"
            }}
            style={styles.ImageBackground_306_5434}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50fe/f0ed/94cd97fc953c53f6c4f4e495fa3629ca"
            }}
            style={styles.ImageBackground_306_5435}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c541/755d/bb9c7d60a35b9c6e0eba59286fdffc25"
            }}
            style={styles.ImageBackground_306_5436}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2231/56b3/45ab3dc375504c944abfd98206388508"
            }}
            style={styles.ImageBackground_306_5437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd58/a4e5/a35f7c9c7afcc435482957dbdffefbbb"
            }}
            style={styles.ImageBackground_306_5438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d66/a5b3/f91d62f37bf322ed2981205423de4221"
            }}
            style={styles.ImageBackground_306_5439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebec/dbca/f3ca753303a912ec5fbbae02dca82474"
            }}
            style={styles.ImageBackground_306_5440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/6d0a/731c4a166178aac71fc023fd94606b5b"
            }}
            style={styles.ImageBackground_306_5441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51c/a01c/1fb7e154220079ec2ad32d47ebf076e0"
            }}
            style={styles.ImageBackground_306_5442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9bb/b32b/c2c46c956943f7206f8e6b7fc2add5d7"
            }}
            style={styles.ImageBackground_306_5443}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07eb/9bb0/5ddc01933c6ee9225d59c48a87caa2ed"
            }}
            style={styles.ImageBackground_306_5444}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5717/48b7/b71f4ae4dcdc8c424f7fe81a3e5af368"
            }}
            style={styles.ImageBackground_306_5447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a3/fe7f/ae16d05d455b9b0a40df046d2ccac58a"
            }}
            style={styles.ImageBackground_306_5448}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2935/0e27/baab87477b8dcbc466006540422883e2"
            }}
            style={styles.ImageBackground_306_5449}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7079/6eba/48ea3e0f5777c64cba84f9ee06b679f3"
            }}
            style={styles.ImageBackground_306_5450}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1f6/c901/bebfd244170ae6d33348e8480ec4f13c"
            }}
            style={styles.ImageBackground_306_5451}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e450/ee96/cfd2d75d5f213e9026f5d2e9d3b3f658"
            }}
            style={styles.ImageBackground_306_5452}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb45/d85c/20f24e703449aa6419e9f2eb6d06857c"
            }}
            style={styles.ImageBackground_306_5453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c9/6d14/03281038fdf5c31acc6eb41222fddd0b"
            }}
            style={styles.ImageBackground_306_5454}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5717/48b7/b71f4ae4dcdc8c424f7fe81a3e5af368"
            }}
            style={styles.ImageBackground_306_5455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a075/d9db/9aef4b42d74f229e1fad9e2e7b50fdf2"
            }}
            style={styles.ImageBackground_306_5456}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f616/9ed8/a210ff0145267c993ed2b776072e61bb"
            }}
            style={styles.ImageBackground_306_5457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54e7/445a/7e051d6f5b1a5fc72c2c3ddbdbf3e7fd"
            }}
            style={styles.ImageBackground_306_5458}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8634/c424/d20d0a415b45e1505f1cdd6141f7f21b"
            }}
            style={styles.ImageBackground_306_5459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c1/b319/4c8071ee622e88dfe858cee13618866b"
            }}
            style={styles.ImageBackground_306_5460}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf00/b066/0517543798ba1d16a95995aa3cfd5727"
            }}
            style={styles.ImageBackground_306_5461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a120/26ee/64a4f8dbc3b36ad54a72a2bc28c999a5"
            }}
            style={styles.ImageBackground_306_5462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9900/bec1/4546a92658bf1594597fb95a59c0ea54"
            }}
            style={styles.ImageBackground_306_5463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c235/0e88/170c0f314155cfd4309e4f83026472bc"
            }}
            style={styles.ImageBackground_306_5464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70f7/1ac5/226338585be946bb4fe894e5fc56c513"
            }}
            style={styles.ImageBackground_306_5465}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/806a/75c3/c435415f1fe18b871c8211560fd30a93"
            }}
            style={styles.ImageBackground_306_5466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b484/d007/e3df1229db9c2cb7e16651c8a1a69b4e"
            }}
            style={styles.ImageBackground_306_5467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/c8e4/b4411c47bf4afae7157bf34bb6296dc7"
            }}
            style={styles.ImageBackground_306_5468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aae/0439/a745da1bf00d7b9ca2cb38c72eaecc63"
            }}
            style={styles.ImageBackground_306_5469}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b45/4e1e/a8ba86b697243a0ce95048aaf0b8fa61"
            }}
            style={styles.ImageBackground_306_5470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d26/9bd7/0d3846df8298394611d604ee6d6ce8b1"
            }}
            style={styles.ImageBackground_306_5472}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c88/f25d/0a291f78f0cc946daf2bfa94d906932e"
            }}
            style={styles.ImageBackground_306_5473}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e8/c544/dabd3e1eb4605341d0196aebdefbfad9"
            }}
            style={styles.ImageBackground_306_5474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba9/11e6/81185d38ab5a5c1072d37223a4324d62"
            }}
            style={styles.ImageBackground_306_5475}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f249/cf8d/24a39785c912ab6d62b6905791946a37"
            }}
            style={styles.ImageBackground_306_5476}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa5/a174/c3dee1311bf1b2b48e6fc2c58f9529f7"
            }}
            style={styles.ImageBackground_306_5477}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2572/4356/9a7210370b03e941cc0ccf6b514ba2d5"
            }}
            style={styles.ImageBackground_306_5479}
          />
        </View>
        <View style={styles.View_306_5480}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0821/805f/c361d299d4f2c9056e97926304c35eb8"
            }}
            style={styles.ImageBackground_306_5481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6406/bcdc/d23bab2a150f2df9bba0dd3cc839e2f3"
            }}
            style={styles.ImageBackground_306_5482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2231/56b3/45ab3dc375504c944abfd98206388508"
            }}
            style={styles.ImageBackground_306_5483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd58/a4e5/a35f7c9c7afcc435482957dbdffefbbb"
            }}
            style={styles.ImageBackground_306_5484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00d/32e2/bc47570d2a7f8117fc41455ecb44da70"
            }}
            style={styles.ImageBackground_306_5485}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa52/f22d/c099705d7aafec3a617033707646f08a"
            }}
            style={styles.ImageBackground_306_5486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109f/6d0a/731c4a166178aac71fc023fd94606b5b"
            }}
            style={styles.ImageBackground_306_5487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51c/a01c/1fb7e154220079ec2ad32d47ebf076e0"
            }}
            style={styles.ImageBackground_306_5488}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbdb/6efc/69c3ced757f9e313190b86904948ad49"
            }}
            style={styles.ImageBackground_306_5489}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f17d/2fc3/1a66e4f13473d3dc16b97fb557137264"
            }}
            style={styles.ImageBackground_306_5490}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c767/30f6/8d6770dabd6bd0761044b61849898062"
            }}
            style={styles.ImageBackground_306_5491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c560/8cf2/07057f3139b159ec2cace790d5835392"
            }}
            style={styles.ImageBackground_306_5492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f0/33d4/dc871a47f980a1f95a6222ccf16b6339"
            }}
            style={styles.ImageBackground_306_5493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4936/6842/c4bb81f9466848de0665e1bd488e676e"
            }}
            style={styles.ImageBackground_306_5494}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bb8/d99b/0b2656f90c124515c82e763ba3ea437c"
            }}
            style={styles.ImageBackground_306_5496}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a1/b15f/52e77213e2d21251cbc93a10ee8d9904"
            }}
            style={styles.ImageBackground_306_5497}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/f37c/0e9c9f22a3c1d55174a2205c316aee15"
            }}
            style={styles.ImageBackground_306_5499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7845/6294/bede85ac36ce5a88f58fb7e05886267a"
            }}
            style={styles.ImageBackground_306_5500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f2/2569/ac4b00a7ba6697125f2544b2525e2284"
            }}
            style={styles.ImageBackground_306_5501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d771/cecd/225bd300c997533ec5295167b1d98a7d"
            }}
            style={styles.ImageBackground_306_5502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7710/bca8/fdddeae8d97cbaf0ea66641b5847247e"
            }}
            style={styles.ImageBackground_306_5503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5504}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c1/b319/4c8071ee622e88dfe858cee13618866b"
            }}
            style={styles.ImageBackground_306_5505}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5506}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c1/b319/4c8071ee622e88dfe858cee13618866b"
            }}
            style={styles.ImageBackground_306_5507}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a3/70f7/0468254e1e4926738e2c9cf3686d8ecb"
            }}
            style={styles.ImageBackground_306_5508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c7b/de8d/2f2a6c473894be39ebff864da7b58fbb"
            }}
            style={styles.ImageBackground_306_5509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3479/e17d/f9b61a4cd226b8aa9034d2084b1201ab"
            }}
            style={styles.ImageBackground_306_5510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b361/f972/4ae22ba45d00f452c5155eb806efc2ec"
            }}
            style={styles.ImageBackground_306_5511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02eb/5659/0f0821b989b7b035860eab1df6884067"
            }}
            style={styles.ImageBackground_306_5512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35c5/505a/25d723cab8e9baf4c37ca93116169ae2"
            }}
            style={styles.ImageBackground_306_5513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/749c/748a/075e8931ae6fae4d57bb2ddeaaaa532f"
            }}
            style={styles.ImageBackground_306_5514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3202/0861/379218b1863a7bb155d56c14d68e5377"
            }}
            style={styles.ImageBackground_306_5515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d0/8d6c/6ca7da8f12e82f0d0fee859f714f129b"
            }}
            style={styles.ImageBackground_306_5516}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e231/47ff/abb4d80ddd49da8b9461b6efc50cf3f6"
            }}
            style={styles.ImageBackground_306_5517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502b/9736/ccb5c35bd29d9da22af24259b0537845"
            }}
            style={styles.ImageBackground_306_5518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a520/6a0a/4964600ff01d519cc8a6a44b81c6fe95"
            }}
            style={styles.ImageBackground_306_5519}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd43/3ce0/9375b6b27dc2edfbc5eb2680756c6bd0"
            }}
            style={styles.ImageBackground_306_5520}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048d/e6a8/d81631998a3d6cf96cc1253567398bbc"
            }}
            style={styles.ImageBackground_306_5521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b904/fed3/1c2952a6b6125bc1a1b63ecd56d6f330"
            }}
            style={styles.ImageBackground_306_5522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5717/48b7/b71f4ae4dcdc8c424f7fe81a3e5af368"
            }}
            style={styles.ImageBackground_306_5523}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/043c/4c3f/a4d6ba13a82c8045518b9e374dcd30e6"
            }}
            style={styles.ImageBackground_306_5524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e348/1acb/bdc7320ffeb5c4a4c630ba90896685d6"
            }}
            style={styles.ImageBackground_306_5525}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4333/b965/44008c65e80ec4867b592f90c4998b81"
            }}
            style={styles.ImageBackground_306_5526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cab/e6db/60a6cf5ff50caf39556025c4fe6dddbd"
            }}
            style={styles.ImageBackground_306_5527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d733/ee94/062868b3d0a9b5bd8d95dd3c13dc73d0"
            }}
            style={styles.ImageBackground_306_5528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/8fb1/4d52a5303753d6501b2c296560d137e5"
            }}
            style={styles.ImageBackground_306_5529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/236b/b9ca/48e62cef8d34974b174e118eeb3cd3b3"
            }}
            style={styles.ImageBackground_306_5530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9213/8a8e/4b5ffe44441a6a4e952825864a195dbe"
            }}
            style={styles.ImageBackground_306_5531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ce7/8132/0508ec7755d71999d90b3fdd7ebda734"
            }}
            style={styles.ImageBackground_306_5532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4516/d922/bb250f9c635430ccc8e5bb4604a07283"
            }}
            style={styles.ImageBackground_306_5533}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a7/1901/3ac0de65cd43b1c54418715e9dd1222c"
            }}
            style={styles.ImageBackground_306_5534}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f40/5334/10eb09292efcd85d1bf607993edd2ddc"
            }}
            style={styles.ImageBackground_306_5535}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4426/4839/57cbfb4063e4b50682830a8b6d1f371e"
            }}
            style={styles.ImageBackground_306_5536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6961/f946/12793375f45a63c1faa6edddbd748cfd"
            }}
            style={styles.ImageBackground_306_5537}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/8e53/218c14a02dcc2f518d8f7430b6be649d"
            }}
            style={styles.ImageBackground_306_5539}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a23/b50c/1761617a7f8d7c1c99b33a1e4db6b97f"
            }}
            style={styles.ImageBackground_306_5541}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7792/71dd/d887070a7b044cf222c9ae9476ddde7f"
            }}
            style={styles.ImageBackground_306_5542}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/122a/bce6/1f82e0c367305c4f247298506120e301"
            }}
            style={styles.ImageBackground_306_5543}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2df/1c8a/a7e20c54a3c910cfe803afbdda449552"
            }}
            style={styles.ImageBackground_306_5544}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb4/08d9/5526e44ff75fb9c313eb55e358637f0b"
            }}
            style={styles.ImageBackground_306_5545}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c923/a957/53f4175aa874ca4f21043cfe785a272b"
            }}
            style={styles.ImageBackground_306_5546}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adbe/eaa8/27fd3b43ca1161de1bf745d26bf06724"
            }}
            style={styles.ImageBackground_306_5547}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3f/2b4d/4e52c1fcf0dfc028e91b3f7c7880caa4"
            }}
            style={styles.ImageBackground_306_5548}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4654/2aa1/f96fe6af1afc037dd6c91736fece58d3"
            }}
            style={styles.ImageBackground_306_5549}
          />
        </View>
        <View style={styles.View_306_5550}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700e/e402/2eec52405d8b3cbd853f386b62fe899a"
            }}
            style={styles.ImageBackground_306_5551}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5717/48b7/b71f4ae4dcdc8c424f7fe81a3e5af368"
            }}
            style={styles.ImageBackground_306_5552}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65ee/a494/9fbfaf00840ef6241d477b222c4c94ee"
            }}
            style={styles.ImageBackground_306_5553}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c261/0863/c089e0a8ee01fed67ffdb734074ca29f"
            }}
            style={styles.ImageBackground_306_5555}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ba/36ec/00e54c67631d4bf04e90c13d14e13f3e"
            }}
            style={styles.ImageBackground_306_5556}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00fd/9b6a/d6662d05bda14c4775454c4ffb3228f4"
            }}
            style={styles.ImageBackground_306_5557}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c261/0863/c089e0a8ee01fed67ffdb734074ca29f"
            }}
            style={styles.ImageBackground_306_5558}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4eb/a693/01188ccd7c00289c1c3ac6955b2ec1d5"
            }}
            style={styles.ImageBackground_306_5559}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5717/48b7/b71f4ae4dcdc8c424f7fe81a3e5af368"
            }}
            style={styles.ImageBackground_306_5560}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c211/bac2/c8c0b45fcd538251a369f544e7e60195"
            }}
            style={styles.ImageBackground_306_5561}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8387/1f85/0333096e426b8837fee715b1b9f57a97"
            }}
            style={styles.ImageBackground_306_5563}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00fd/9b6a/d6662d05bda14c4775454c4ffb3228f4"
            }}
            style={styles.ImageBackground_306_5564}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cab/e6db/60a6cf5ff50caf39556025c4fe6dddbd"
            }}
            style={styles.ImageBackground_306_5565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e450/ee96/cfd2d75d5f213e9026f5d2e9d3b3f658"
            }}
            style={styles.ImageBackground_306_5566}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758b/29a9/ff64bb04d62a91e9cabe3cb20a0714a9"
            }}
            style={styles.ImageBackground_306_5567}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b2b/6334/2826170eca422cac4c5e8b50c35d7df7"
            }}
            style={styles.ImageBackground_306_5568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b64/5516/1b0edde9d45be126209c3eef15b38083"
            }}
            style={styles.ImageBackground_306_5569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/540d/5d7a/04b2f11c2d80d24c8ee359cc1f2a7641"
            }}
            style={styles.ImageBackground_306_5570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc9/b423/dc6e6cfc94d3751c0d05c42ec17e313d"
            }}
            style={styles.ImageBackground_306_5571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26e5/6556/136cdbd64be2a63610fb300b763ad48e"
            }}
            style={styles.ImageBackground_306_5572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c388/2461/ccb3ec96d809ef488ce47096ce8d4694"
            }}
            style={styles.ImageBackground_306_5573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5486/254b/c46d58ea2735a929b5693327738f2233"
            }}
            style={styles.ImageBackground_306_5574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b87/0122/8d547127b7aeb3d85b45f0bedbc08cf4"
            }}
            style={styles.ImageBackground_306_5575}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de02/aedf/6872d9b0c4a13b8b54345daad264b463"
            }}
            style={styles.ImageBackground_306_5576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b87/0122/8d547127b7aeb3d85b45f0bedbc08cf4"
            }}
            style={styles.ImageBackground_306_5577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e952/927e/a8fb98e0a3800d136ef7cfb036a71a3c"
            }}
            style={styles.ImageBackground_306_5578}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f91/33a8/ceca761b450093aaa2d59a4ae29fdbef"
            }}
            style={styles.ImageBackground_306_5579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ce/15cc/94b180ff2c750e533cc4cb13a1b2c373"
            }}
            style={styles.ImageBackground_306_5580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/0f62/e20af8597a75cb2de00535cbdbc187bd"
            }}
            style={styles.ImageBackground_306_5581}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c1/b319/4c8071ee622e88dfe858cee13618866b"
            }}
            style={styles.ImageBackground_306_5583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db98/ccdf/2f2788ed88d6c8c387a50c112b270197"
            }}
            style={styles.ImageBackground_306_5584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9c1/b319/4c8071ee622e88dfe858cee13618866b"
            }}
            style={styles.ImageBackground_306_5585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea2c/827e/0314f4cd3dd7178c3e79203d57ca07d4"
            }}
            style={styles.ImageBackground_306_5586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be32/375c/635bf350eb26a8fe8130e268208fa04c"
            }}
            style={styles.ImageBackground_306_5587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0495/372d/2a3282c6a24d5c7384f33eeeef971562"
            }}
            style={styles.ImageBackground_306_5588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21f4/99e6/048a007218233448eb2a8979bcaa9280"
            }}
            style={styles.ImageBackground_306_5589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2683/947f/784a82b996a4112b5a7e3c52c51ebdd9"
            }}
            style={styles.ImageBackground_306_5590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d602/0503/425b6dbab6a5d05aea2f1df2f9899eae"
            }}
            style={styles.ImageBackground_306_5591}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b048/f564/86c485d3023ce4de194c6dde3c394d24"
            }}
            style={styles.ImageBackground_306_5592}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43f/e9ba/e01a9c5115253c1e1aee98199aadb52c"
            }}
            style={styles.ImageBackground_306_5593}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9499/6805/c990dc10e941e037e7bb9d70b35985fb"
            }}
            style={styles.ImageBackground_306_5594}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49cf/2d77/daf74369dbeb248598e4c3ea1aff0514"
            }}
            style={styles.ImageBackground_306_5595}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0086/6f18/9d7e8f2d57414993f7216204bfdb970a"
            }}
            style={styles.ImageBackground_306_5596}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcf/9048/9b777f4b23cb9112e015154e6d6c7e3c"
            }}
            style={styles.ImageBackground_306_5597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/904a/c640/52007e2ba4120f3b7b29aa14c662df8d"
            }}
            style={styles.ImageBackground_306_5598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b98/0b07/b212624527408a7322c6005ae7a08ee9"
            }}
            style={styles.ImageBackground_306_5599}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b772/6b75/372c48abc47e397285ef7e860de6f0a3"
            }}
            style={styles.ImageBackground_306_5600}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b67/695c/0f101f670d37cf16180998f9362f72a7"
            }}
            style={styles.ImageBackground_306_5601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6a6/f118/3b42d8f7c742ca4e72f610348f6c7c24"
            }}
            style={styles.ImageBackground_306_5602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad15/a0eb/e6545cf0ce929f7e07da5cbfdd416a05"
            }}
            style={styles.ImageBackground_306_5604}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9120/6fd3/43f0c60b287cdd52ff697c94d45bb488"
            }}
            style={styles.ImageBackground_306_5605}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8145/4513/d4c5db37844ad33b6a99a6cdfe7d1e86"
            }}
            style={styles.ImageBackground_306_5606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d82/27fe/44e0a7516d952437ee5a041e5d13f7b5"
            }}
            style={styles.ImageBackground_306_5607}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e63f/0da3/e85ecbd2fcb4650326ccd68c99c6e45c"
            }}
            style={styles.ImageBackground_306_5608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b629/97d0/35640c22b21ce92ee6780e7d6ca420bb"
            }}
            style={styles.ImageBackground_306_5609}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_306_5610}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc1/85da/482a0ae884f3db637b35a6c2f2a26f18"
            }}
            style={styles.ImageBackground_306_5611}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79f/d83c/e74e55d3b42c4cf4febea8add1371531"
            }}
            style={styles.ImageBackground_306_5612}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78d/80b3/8d10cf11e4bf4d2c6af83480150b9aeb"
            }}
            style={styles.ImageBackground_306_5613}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("143%") },
  View_306_4400: {
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
  View_306_4401: {
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
  View_582_11034: {
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
  View_582_11035: {
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
  View_582_11036: {
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
  Text_582_11036: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11037: {
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
  Text_582_11037: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11038: {
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
  Text_582_11038: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11039: {
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
  Text_582_11039: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11040: {
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
  Text_582_11040: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_11041: {
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
  Text_582_11041: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_582_11042: {
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
  ImageBackground_306_4402: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("41%")
  },
  ImageBackground_306_4403: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("46%")
  },
  View_306_4404: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I306_4404_2_225: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I306_4404_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4405: {
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
  View_306_4406: {
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
  View_I306_4406_17_96: {
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
  View_I306_4406_17_100: {
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
  ImageBackground_I306_4406_17_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I306_4406_17_110: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I306_4406_17_114: {
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
  ImageBackground_I306_4406_17_117: {
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
  ImageBackground_I306_4406_17_122: {
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
  View_I306_4406_17_123: {
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
  View_I306_4406_17_124: {
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
  View_I306_4406_17_126: {
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
  ImageBackground_I306_4406_17_127: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_306_4407: {
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
  View_306_4408: {
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
  View_306_4409: {
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
  View_306_4410: {
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
  View_306_4411: {
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
  Text_306_4411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4412: {
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
  Text_306_4412: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4413: {
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
  View_306_4414: {
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
  ImageBackground_I306_4414_2_192: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4415: {
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
  ImageBackground_I306_4415_2_200: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_306_4416: {
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
  View_306_4417: {
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
  Text_306_4417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4418: {
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
  Text_306_4418: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4419: {
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
  Text_306_4419: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4420: {
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
  View_306_4421: {
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
  Text_306_4421: {
    color: "rgba(250, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4422: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_306_4423: {
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
  View_306_4424: {
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
  View_306_4425: {
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
  Text_306_4425: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4426: {
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
  View_306_4427: {
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
  View_306_4428: {
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
  Text_306_4428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4429: {
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
  View_306_4430: {
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
  Text_306_4430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4431: {
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
  View_306_4432: {
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
  Text_306_4432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4433: {
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
  View_306_4434: {
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
  Text_306_4434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_306_4435: {
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
  View_306_4436: {
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
  Text_306_4436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4437: {
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
  Text_306_4437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4438: {
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
  Text_306_4438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4439: {
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
  Text_306_4439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4440: {
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
  Text_306_4440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4441: {
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
  Text_306_4441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_4449: {
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
  View_I306_4449_70_449: {
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
  ImageBackground_I306_4449_70_450: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I306_4449_80_420: {
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
  ImageBackground_I306_4449_80_420_2_188: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I306_4449_80_424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I306_4449_80_426: {
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
  ImageBackground_I306_4449_80_426_2_240: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I306_4449_80_430: {
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
  ImageBackground_I306_4449_80_430_2_337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I306_4449_70_456: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("-3%")
  },
  ImageBackground_I306_4449_70_457: {
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
  ImageBackground_I306_4449_70_458: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_306_5614: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  ImageBackground_306_5315: {
    width: wp("55%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_306_5363: {
    width: wp("32%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5366: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_306_5403: {
    width: wp("13%"),
    height: hp("13%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5411: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_306_5416: {
    width: wp("67%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_306_5418: {
    width: wp("21%"),
    height: hp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_306_5419: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5420: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5421: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5422: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5423: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_306_5424: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_306_5425: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5426: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_306_5427: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_306_5428: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5429: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5430: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5431: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5432: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5433: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5434: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5435: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_306_5436: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_306_5437: {
    width: wp("11%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5438: {
    width: wp("8%"),
    height: hp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5439: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_306_5440: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_306_5441: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5442: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5443: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5444: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5447: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5448: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5449: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5450: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5451: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5452: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5453: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5454: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5455: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5456: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5457: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5458: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5459: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5460: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5461: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5462: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5463: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5464: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5465: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5466: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5467: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5468: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5469: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5470: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5472: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_306_5473: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_306_5474: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5475: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_306_5476: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_306_5477: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_306_5479: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_306_5480: {
    width: wp("14%"),
    height: hp("17%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_306_5481: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5482: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5483: {
    width: wp("11%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5484: {
    width: wp("8%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5485: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5486: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5487: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5488: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5489: {
    width: wp("11%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5490: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5491: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5492: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5493: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5494: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5496: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_306_5497: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5499: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5500: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5501: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5502: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5503: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5504: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5505: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5506: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5507: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5508: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5509: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5510: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5511: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5512: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5513: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5514: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5515: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5516: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5517: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5518: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5519: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5520: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5521: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5522: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5523: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5524: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5525: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5526: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5527: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5528: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5529: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5530: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5531: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5532: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5533: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5534: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5535: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5536: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5537: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5539: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5541: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5542: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_306_5543: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5544: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_306_5545: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5546: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_306_5547: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5548: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5549: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_306_5550: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5551: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5552: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5553: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5555: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5556: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5557: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5558: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5559: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5560: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5561: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5563: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5564: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5565: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5566: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5567: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5568: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5569: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5570: {
    width: wp("2%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5571: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5572: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5573: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5574: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5575: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5576: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5577: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5578: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5579: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5580: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5581: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5582: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5583: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5584: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5585: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5586: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5587: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5588: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_306_5589: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5590: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5591: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_306_5592: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5593: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5594: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5595: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5596: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5597: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5598: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_306_5599: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5600: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5601: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_306_5602: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_306_5604: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5605: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_306_5606: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_306_5607: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5608: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5609: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5610: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_306_5611: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_306_5612: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_306_5613: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
