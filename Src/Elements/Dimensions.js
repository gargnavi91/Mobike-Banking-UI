import { Dimensions, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;
const normalFONT=2*(heightBaseScale+widthBaseScale)
const scale = SCREEN_WIDTH / 320;
function normalize(size, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const normal = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
const fontscale=(size)=>{
  let finalSize
  finalSize=(size/100)*normalFONT
  return finalSize
  

}
const widthPixel = (size) => {
  return normalize(size, "width");
};

const heightPixel = (size) => {
  return normalize(size, "height");
};

const fontPixel = (size) => {
  return heightPixel(size);
};

const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  normal,
  fontscale
};
