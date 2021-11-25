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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ea/eafb/6ae4e227adf52ce4d251fcfb1340297e"
        }}
        style={styles.ImageBackground_15_11}
      />
      <View style={styles.View_18_542}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cae/5753/f449f0db79aea33d91c5def237c93774"
          }}
          style={styles.ImageBackground_18_135}
        />
        <View source={{ uri: "null" }} style={styles.View_18_153} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a04/66e6/3e7ac4656e253a6134857014ffbe7880"
          }}
          style={styles.ImageBackground_18_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aacb/890c/592e3543f24b0648a783a4a6dfd022a0"
          }}
          style={styles.ImageBackground_18_157}
        />
        <View style={styles.View_18_255}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad2/4262/9581139d4594aeddcf49c205747d09f3"
            }}
            style={styles.ImageBackground_18_256}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14f0/6ce8/f741bb53dd675f366dc9c2b0f9c9342d"
            }}
            style={styles.ImageBackground_18_257}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b70f/0db2/4ecfc889407e6de69097a72a39c1a13c"
            }}
            style={styles.ImageBackground_18_259}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e221/e8f4/820039127bda225bb26aaa023a9d99d8"
            }}
            style={styles.ImageBackground_18_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cc7/bf83/5d767826c2b032034c90a9557675dc1f"
            }}
            style={styles.ImageBackground_18_262}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8335/dd7b/796d1e45334ad22b0e2e6c8457777c54"
            }}
            style={styles.ImageBackground_18_263}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f6c/b176/a4b41d805a1adc5003223d3e9ed04c02"
            }}
            style={styles.ImageBackground_18_265}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6515/3a1f/94ee3be4d4c831380cc0e72c21bcc60d"
            }}
            style={styles.ImageBackground_18_266}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb95/3138/01de223afe672c3095df67dcc4d1249e"
            }}
            style={styles.ImageBackground_18_267}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14df/cf6b/bb0b84270704b5fd2ea516e432c440e3"
            }}
            style={styles.ImageBackground_18_268}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d1f/4b4d/21b1482111324e5fa0da7527fd51a264"
            }}
            style={styles.ImageBackground_18_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ac/9e8b/3bbf7d245a90b9d50d02557e5eefca6f"
            }}
            style={styles.ImageBackground_18_272}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a0/a885/796f141d9a00edb4291d575767bbd74f"
            }}
            style={styles.ImageBackground_18_273}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a0/a885/796f141d9a00edb4291d575767bbd74f"
            }}
            style={styles.ImageBackground_18_275}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c918/4aed/12250b15375f3eabd86e84d78f5c75e3"
            }}
            style={styles.ImageBackground_18_277}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd27/bc56/90b25cd33581cbfdf0781427828e0bda"
            }}
            style={styles.ImageBackground_18_279}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8489/4180/5eb5d5927a3051217ef43aa7290afa77"
            }}
            style={styles.ImageBackground_18_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7726/39be/734fc91e442a67b342614a8f0a8fafd5"
            }}
            style={styles.ImageBackground_18_281}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3824/2192/c98e9956895c8616bab0d3421c9ec259"
            }}
            style={styles.ImageBackground_18_282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/56c4/6eec2fc844e59917bb5e114e2b0c3327"
            }}
            style={styles.ImageBackground_18_284}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc47/1187/5926aa8b278d2fe9ae6e0ecb7fdb014b"
            }}
            style={styles.ImageBackground_18_285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b6/9491/642174fd8c6fc993df8d5718181eaefb"
            }}
            style={styles.ImageBackground_18_286}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7060/1aa2/bc4b63d6b206f63a9805d7c9b745e98d"
            }}
            style={styles.ImageBackground_18_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c772/a2fc/755689cb96c6c4aeafea1a29ac3e4959"
            }}
            style={styles.ImageBackground_18_288}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad3d/6f66/6bc45c551a220d4896143d8cf41a8725"
            }}
            style={styles.ImageBackground_18_289}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef03/f85f/a811b614e7b14fab728cc70e2e733adc"
            }}
            style={styles.ImageBackground_18_290}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e8/a500/92aa0aa8db1474175b28506f4bf84bcb"
            }}
            style={styles.ImageBackground_18_291}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d4d/9f00/a7c8384d254a8d8263970c7bb20d4e7f"
            }}
            style={styles.ImageBackground_18_292}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3935/d730/ccb69cc7e0b3242fe4f8cb315d39899e"
            }}
            style={styles.ImageBackground_18_293}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e68/4d66/52eded43aa2ee80fba88d1cd12461953"
            }}
            style={styles.ImageBackground_18_294}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b138/e8f2/4542d6b7b9d97b04e2805beb175876f1"
            }}
            style={styles.ImageBackground_18_295}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f42/e7dd/f3bba65bf70f83c1fedc67bebd7fe665"
            }}
            style={styles.ImageBackground_18_296}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eca/a871/2eb7d62dc2787fa1011009e5de5119a8"
            }}
            style={styles.ImageBackground_18_297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a3/9663/66b97b40cda703afe03cb29af4889eac"
            }}
            style={styles.ImageBackground_18_298}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a731/9c08/600d6452aedf49f975db79b0dbd359c7"
            }}
            style={styles.ImageBackground_18_299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f16/cd9b/a81735f83baa6f8b0841a58a93a34591"
            }}
            style={styles.ImageBackground_18_300}
          />
          <View source={{ uri: "null" }} style={styles.View_18_302} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d3/8827/f81753c738914734d5605d81c0e1bdf1"
            }}
            style={styles.ImageBackground_18_304}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d3/8827/f81753c738914734d5605d81c0e1bdf1"
            }}
            style={styles.ImageBackground_18_305}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a515/8a2a/7035c0f04ac42dc2b83dd29228b529d4"
            }}
            style={styles.ImageBackground_18_306}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/138a/6740/10f7dad16b8700143eb1e849391ffe09"
            }}
            style={styles.ImageBackground_18_307}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5522/39b0/5d9188340da45a244f9ba3e017b20cf7"
            }}
            style={styles.ImageBackground_18_308}
          />
        </View>
        <View style={styles.View_18_309}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12c/a651/b17e43e1b302dd7b7f87f2065dd27efb"
            }}
            style={styles.ImageBackground_18_310}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab1/e67c/40b2822a0ee64500d514364d6594dc5b"
            }}
            style={styles.ImageBackground_18_311}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e85d/1ed8/59626fef52e6319a1cb0e5fcb908c066"
            }}
            style={styles.ImageBackground_18_312}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/230e/c6b6/4372637973d52f4e60e70d5ef7ee1447"
            }}
            style={styles.ImageBackground_18_313}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b935/9da9/ea8ee9e1fc6b7cc02e6caf6936c8764b"
            }}
            style={styles.ImageBackground_18_316}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_317}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_318}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_319}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_320}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_321}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_322}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a39/2cff/a71e2cc8c2a5ec42832a484e1114d9c9"
            }}
            style={styles.ImageBackground_18_334}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_335}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_336}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_337}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_338}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_339}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_340}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_341}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_343}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_344}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_345}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_346}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_347}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_348}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_349}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_350}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_351}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b8d/5e1c/451b45405587ee411c85975506eada30"
            }}
            style={styles.ImageBackground_18_352}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_353}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_354}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_355}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_356}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_357}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_358}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_359}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_360}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_361}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_362}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_363}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_364}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_365}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_366}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_367}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_368}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_369}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a39/2cff/a71e2cc8c2a5ec42832a484e1114d9c9"
            }}
            style={styles.ImageBackground_18_370}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_371}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_372}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_373}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_374}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_375}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_376}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_377}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_378}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_379}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_381}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_382}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_383}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_384}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_385}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_386}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a39/2cff/a71e2cc8c2a5ec42832a484e1114d9c9"
            }}
            style={styles.ImageBackground_18_388}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_389}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_390}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_392}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_393}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_394}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_395}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_396}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_397}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_398}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_404}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_405}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a39/2cff/a71e2cc8c2a5ec42832a484e1114d9c9"
            }}
            style={styles.ImageBackground_18_406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_407}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_408}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_411}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_412}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_413}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_414}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_415}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_416}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_417}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_418}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_419}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_420}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_422}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_423}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b8d/5e1c/451b45405587ee411c85975506eada30"
            }}
            style={styles.ImageBackground_18_424}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc17/3e84/3c0310f09566f1f8cd946bbd352f3bf6"
            }}
            style={styles.ImageBackground_18_425}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_427}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_432}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_433}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_434}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_435}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_436}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/8151/3039ae2157a596d87779b553a2bcca16"
            }}
            style={styles.ImageBackground_18_441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a39/2cff/a71e2cc8c2a5ec42832a484e1114d9c9"
            }}
            style={styles.ImageBackground_18_442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9371/fc9b/312a196d912436e92853d242c70a7098"
            }}
            style={styles.ImageBackground_18_443}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0c/ae78/b87bb0fd8fec17f50563b86b61adcd73"
            }}
            style={styles.ImageBackground_18_445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9371/fc9b/312a196d912436e92853d242c70a7098"
            }}
            style={styles.ImageBackground_18_447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9371/fc9b/312a196d912436e92853d242c70a7098"
            }}
            style={styles.ImageBackground_18_449}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9371/fc9b/312a196d912436e92853d242c70a7098"
            }}
            style={styles.ImageBackground_18_451}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9371/fc9b/312a196d912436e92853d242c70a7098"
            }}
            style={styles.ImageBackground_18_453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c03/83c1/99d054d0e73ef308c625442a93fe06fe"
            }}
            style={styles.ImageBackground_18_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c03/83c1/99d054d0e73ef308c625442a93fe06fe"
            }}
            style={styles.ImageBackground_18_456}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea9/9008/24eab0dc702011d2d49dde973312070a"
            }}
            style={styles.ImageBackground_18_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea9/9008/24eab0dc702011d2d49dde973312070a"
            }}
            style={styles.ImageBackground_18_458}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b777/3f46/9735cc2386e226f965b86f4a60d14016"
            }}
            style={styles.ImageBackground_18_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b777/3f46/9735cc2386e226f965b86f4a60d14016"
            }}
            style={styles.ImageBackground_18_460}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d068/7897/827fa9cfd6022b2f7cd1f8b300af1599"
            }}
            style={styles.ImageBackground_18_461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd5/e199/f95f02a80c694166909b20744c8bd8c5"
            }}
            style={styles.ImageBackground_18_462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed7/a905/9b352c3953ba1579c5306bdd6e8d934b"
            }}
            style={styles.ImageBackground_18_463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c38a/d541/4f06fd3e1fe110db3c20e61f305f70a8"
            }}
            style={styles.ImageBackground_18_464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae70/6e38/881be7ffe21f978ac360961a00d6e2ae"
            }}
            style={styles.ImageBackground_18_465}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8691/a418/bebdc7d32ce526fed6ec50e3675f4e2b"
            }}
            style={styles.ImageBackground_18_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc0/e7e0/6e1c8deba053c9ced9bace018dc8db27"
            }}
            style={styles.ImageBackground_18_467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61f6/f91d/121ee0fa20fae1e34f64fa77bf743d0f"
            }}
            style={styles.ImageBackground_18_468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d1f/9447/a933ef552d8ba95ed9d9a5bd24b58ce5"
            }}
            style={styles.ImageBackground_18_470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d492/87a0/963946134b77df09e786830160cdb2ad"
            }}
            style={styles.ImageBackground_18_471}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c99/1824/bc5dd9afed59c388fdb0fbf00851d669"
            }}
            style={styles.ImageBackground_18_472}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee37/a48c/3e465af2d7a33336fbdeb3811a360a84"
            }}
            style={styles.ImageBackground_18_473}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c99/1824/bc5dd9afed59c388fdb0fbf00851d669"
            }}
            style={styles.ImageBackground_18_474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee37/a48c/3e465af2d7a33336fbdeb3811a360a84"
            }}
            style={styles.ImageBackground_18_475}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2449/8175/fa6daeb935199d874fab89eb22d771eb"
            }}
            style={styles.ImageBackground_18_476}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4780/8fae/21668d5bbb1b616f85b3822bbcbe0255"
            }}
            style={styles.ImageBackground_18_477}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/755e/5a3e/1606be65d36a21fbcca76f0c277242ee"
            }}
            style={styles.ImageBackground_18_478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bcc/f1a0/ba0a13d5bfebc52347f214916ffdcb39"
            }}
            style={styles.ImageBackground_18_479}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038a/2124/01ebf193d8328df795756060459b95d1"
            }}
            style={styles.ImageBackground_18_480}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08ef/edba/85f4d3fb719a6169dede8380370ddb8a"
            }}
            style={styles.ImageBackground_18_481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed00/f959/fbf567222f92399893bb2b9ef8a674cc"
            }}
            style={styles.ImageBackground_18_482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d00c/0e74/cb6ce2e5bdc2b332b79ba52650b0826f"
            }}
            style={styles.ImageBackground_18_483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4e5/0693/430f6aa6f115b27cf64a381236016c39"
            }}
            style={styles.ImageBackground_18_484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c128/ae9b/f8ce3ad5bca1766789c0742038a094da"
            }}
            style={styles.ImageBackground_18_485}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d406/f692/ea46135a5cbdf62b27a7083ba3b41842"
            }}
            style={styles.ImageBackground_18_486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d775/c046/c7ffc60b0bbf7aaaf21c9ff5cf032271"
            }}
            style={styles.ImageBackground_18_487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7447/dc9d/43f849e43dcc9d76dc13be4094633447"
            }}
            style={styles.ImageBackground_18_488}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a7/487f/9f6caf0018d97fe9c5301592ceb7e0e3"
            }}
            style={styles.ImageBackground_18_489}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/140f/7345/576097e90ce8c9e4091c1c2dad5de903"
            }}
            style={styles.ImageBackground_18_490}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4586/719d/d75e4a1ce2026dfabd24f6ad7d3ff11c"
            }}
            style={styles.ImageBackground_18_491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d6/d967/6a1d7dd952ad698fbfb2d67b355e7cae"
            }}
            style={styles.ImageBackground_18_492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a589/8436/428a04b34b894ca1a0220074602df9ea"
            }}
            style={styles.ImageBackground_18_493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6028/f943/5e7ea958d704b0a0c007faacd3a63804"
            }}
            style={styles.ImageBackground_18_494}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04f/d69f/b59f220e2951a773b19b3c53fada3ed1"
            }}
            style={styles.ImageBackground_18_495}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e55/18c9/e116092c731a67f648957d927a2b131b"
            }}
            style={styles.ImageBackground_18_496}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2992/380e/e02dff9dae044493d821103e7287393a"
            }}
            style={styles.ImageBackground_18_497}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43f0/f8e5/813a7ec09399af7194e028c549032692"
            }}
            style={styles.ImageBackground_18_498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/636a/bac5/5e8a36e81c37ef11d3c74d40b815bc7a"
            }}
            style={styles.ImageBackground_18_499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faae/8f53/f10d96934b2b736d83dbad158f3af451"
            }}
            style={styles.ImageBackground_18_500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/9b2a/20d546525ac5d60f4b6c7242e0ceb43b"
            }}
            style={styles.ImageBackground_18_501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0324/da19/8910030371ef2a50f1d427dfe6d67932"
            }}
            style={styles.ImageBackground_18_502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48da/39ef/7acfb7c8175948e7b46fd3b77ec91317"
            }}
            style={styles.ImageBackground_18_503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8572/3ae0/1c4a940bedaf29751032d1f2226a2994"
            }}
            style={styles.ImageBackground_18_504}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d6/cbb2/58ad92461e6d888c115a559f24c3286c"
            }}
            style={styles.ImageBackground_18_505}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a1d/5107/428a9c5f67fc44f4b014bb64a38dc071"
            }}
            style={styles.ImageBackground_18_506}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a1d/85d4/353592be15874c383a2a11054738ca65"
            }}
            style={styles.ImageBackground_18_507}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a23/b50c/1761617a7f8d7c1c99b33a1e4db6b97f"
            }}
            style={styles.ImageBackground_18_508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d4b/3101/cababe07d30069b5cbad5e6a8f295de7"
            }}
            style={styles.ImageBackground_18_509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754c/7cb9/a23b17abbdf33c0a687de0a113f5546a"
            }}
            style={styles.ImageBackground_18_510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9061/c9f7/1d45becfcd4d33acdd03540342080ac6"
            }}
            style={styles.ImageBackground_18_511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ccc/7173/0eba3a3f2239eb6e1b0fc9d5391f4f5d"
            }}
            style={styles.ImageBackground_18_512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0180/d5d2/95b1450e737349af374529b23113dbe6"
            }}
            style={styles.ImageBackground_18_513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02a4/6efe/66d8595ed2e20745de206af08c4590f5"
            }}
            style={styles.ImageBackground_18_514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a2/4a95/433df6656d153019663f71bf7511a3d6"
            }}
            style={styles.ImageBackground_18_515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4768/aba3/d6a0ca6531c6ad7274e62c9f6ef464a9"
            }}
            style={styles.ImageBackground_18_516}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf2f/e4b0/8bc1c9ce32a2f41ee0862bc7cfcaff1f"
            }}
            style={styles.ImageBackground_18_517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0d0/2285/5e8164eaf4c4b21b91d4b79637dfdd77"
            }}
            style={styles.ImageBackground_18_518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78db/fa1a/10085086c2f7cc158874c0669ef185af"
            }}
            style={styles.ImageBackground_18_519}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/878d/45de/cb77e7d88a92d08907ea075372387bd5"
            }}
            style={styles.ImageBackground_18_520}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d9b/11c9/3116c4792d64a3e9d321ce07ef528d37"
            }}
            style={styles.ImageBackground_18_521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9654/e5bc/809d4da00e94fdff041b622cdc262d13"
            }}
            style={styles.ImageBackground_18_522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d57/0c98/18f864b55c7ba242dc941f36c6bc6085"
            }}
            style={styles.ImageBackground_18_523}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/d1e0/6216ccca0f403456980e9d54d860f012"
            }}
            style={styles.ImageBackground_18_524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9c/0daf/ae13c8e212c93654d8f1118875ee21ce"
            }}
            style={styles.ImageBackground_18_526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62b3/9dfe/a7632af715615fc34807eed9c55380a0"
            }}
            style={styles.ImageBackground_18_527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b371/42b2/e18809751bd9271362b3d98b2f8a3d0b"
            }}
            style={styles.ImageBackground_18_528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6422/acf2/deef7089943275d8c0668a38741ca6d6"
            }}
            style={styles.ImageBackground_18_529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/216a/01e3/eb2b33ed1d0e28b038fda69c744879b4"
            }}
            style={styles.ImageBackground_18_530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62b2/83a1/31b115efb0d3e308011026a3a459378c"
            }}
            style={styles.ImageBackground_18_531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/948b/457c/3ab1ffe860a2fa56669cb690dea806b9"
            }}
            style={styles.ImageBackground_18_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27b9/d424/dd6eee88d09b12d8c9dd1311250673e3"
            }}
            style={styles.ImageBackground_18_534}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/642d/2fc3/bc5976a1613c0944a3fc89e3f865a6fe"
            }}
            style={styles.ImageBackground_18_535}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b134/189b/b4e12852b494bca754d825c584ceee17"
            }}
            style={styles.ImageBackground_18_536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d1a/25c8/584a35e917ceb9987501cf432d60bc67"
            }}
            style={styles.ImageBackground_18_537}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e7/e919/613bcbf6048124b420e5b3969cb917f7"
            }}
            style={styles.ImageBackground_18_538}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/997b/abda/7c165c690597a0c9b044ac5326a81230"
            }}
            style={styles.ImageBackground_18_539}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c3/8c61/fb42787a8612aef1b260833bc7f93098"
            }}
            style={styles.ImageBackground_18_540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd7/c36a/57cd69a892998a77dfe1278723c34f37"
            }}
            style={styles.ImageBackground_18_541}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba55/6339/65fbf6415a43c73cf09f5c08bd2ab30d"
        }}
        style={styles.ImageBackground_148_2318}
      />
      <View style={styles.View_18_601} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb8/53e4/a6e829af380252b3a9c5cdababaa218a"
        }}
        style={styles.ImageBackground_18_543}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dac/5f80/98ec4d9b0056f0a3b24b66fc3b4f455a"
        }}
        style={styles.ImageBackground_18_545}
      />
      <View style={styles.View_18_546}>
        <View style={styles.View_I18_546_2_225}>
          <Text style={styles.Text_I18_546_2_225}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_18_558}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83b3/b402/866d1eeda7ac818c25ccdcf336906c57"
          }}
          style={styles.ImageBackground_I18_558_2_230}
        />
      </View>
      <View style={styles.View_18_565}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac1/a2cb/2f5ea274cdb1a93b34fb4339594bf4a0"
          }}
          style={styles.ImageBackground_I18_565_2_230}
        />
      </View>
      <View style={styles.View_18_548}>
        <View style={styles.View_I18_548_2_225}>
          <Text style={styles.Text_I18_548_2_225}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_18_557}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3433/5957/933ac8c1d8ef40eac86f20143783ee0f"
          }}
          style={styles.ImageBackground_18_550}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d41/6fe1/e21de7f28063387c023e1023e04bffc9"
          }}
          style={styles.ImageBackground_18_555}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d41/6fe1/e21de7f28063387c023e1023e04bffc9"
          }}
          style={styles.ImageBackground_18_556}
        />
      </View>
      <View style={styles.View_18_570}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfb2/45ec/a9b82a20708ba0d574eec6558e388be4"
          }}
          style={styles.ImageBackground_I18_570_17_60}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 1, 159, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_15_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_542: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22%")
  },
  ImageBackground_18_135: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_153: {
    width: wp("60%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_18_155: {
    width: wp("65%"),
    height: hp("0%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_157: {
    width: wp("26%"),
    height: hp("30%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_18_255: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_256: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_257: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_259: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_260: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_262: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_263: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_265: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_266: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_267: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_268: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_270: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_272: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_273: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_275: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_277: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_279: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_280: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_281: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_282: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_285: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_286: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_287: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_18_288: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_289: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_290: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_291: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_292: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_293: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_294: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_295: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_296: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_18_297: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_298: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_299: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_300: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_18_302: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_304: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_18_305: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_306: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_307: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_308: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_18_309: {
    width: wp("36%"),
    height: hp("29%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_18_310: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_311: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_312: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_313: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_316: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_317: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_318: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_319: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_320: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_321: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_322: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_323: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_324: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_325: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_326: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_327: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_328: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_329: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_330: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_331: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_332: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_333: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_334: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_335: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_336: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_337: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_338: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_339: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_340: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_341: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_342: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_343: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_344: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_345: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_346: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_347: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_348: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_349: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_350: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_351: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_352: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_353: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_354: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_355: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_356: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_357: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_358: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_359: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_360: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_361: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_362: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_363: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_364: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_365: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_366: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_367: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_368: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_369: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_370: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_371: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_372: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_373: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_374: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_375: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_376: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_377: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_378: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_379: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_380: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_381: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_382: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_383: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_385: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_386: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_387: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_388: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_389: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_390: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_391: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_392: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_393: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_394: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_395: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_396: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_397: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_398: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_399: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_400: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_401: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_402: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_403: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_404: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_18_405: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_406: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_407: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_408: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_409: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_410: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_411: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_412: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_413: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_414: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_415: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_416: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_417: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_418: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_419: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_420: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_421: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_422: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_18_423: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_424: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_425: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_426: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_427: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_428: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_429: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_430: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_431: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_432: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_433: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_434: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_435: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_436: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_437: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_438: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_439: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_440: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_441: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_442: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_443: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_445: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_447: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_449: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_451: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_453: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_455: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_456: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_457: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_458: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_459: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_460: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_461: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_462: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_463: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_464: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_465: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_466: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_467: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_18_468: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_470: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_471: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_472: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_473: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_474: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_475: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_476: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_477: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_478: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_479: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_480: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_481: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_482: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_18_483: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_484: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_485: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_486: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_487: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_488: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_489: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_490: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_491: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_492: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_18_493: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_494: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_495: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_18_496: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_497: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_498: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_499: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_500: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_501: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_502: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_503: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_18_504: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_18_505: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_18_506: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_18_507: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_18_508: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_18_509: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_18_510: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_18_511: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_18_512: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_18_513: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_18_514: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_18_515: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_18_516: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_18_517: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_518: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_18_519: {
    width: wp("22%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_520: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_521: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_522: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_523: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_524: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_526: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_18_527: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_18_528: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_18_529: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_18_530: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_531: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_532: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_18_534: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_18_535: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_18_536: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_537: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_18_538: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_539: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_18_540: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_18_541: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_148_2318: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%")
  },
  View_18_601: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_18_543: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("68%")
  },
  ImageBackground_18_545: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("75%")
  },
  View_18_546: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 1, 159, 1)"
  },
  View_I18_546_2_225: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I18_546_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_558: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_558_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_18_565: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_565_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_18_548: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("93%"),
    backgroundColor: "rgba(255, 47, 47, 1)"
  },
  View_I18_548_2_225: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I18_548_2_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_557: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("102%")
  },
  ImageBackground_18_550: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_18_555: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_18_556: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("2%")
  },
  View_18_570: {
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
  ImageBackground_I18_570_17_60: {
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
