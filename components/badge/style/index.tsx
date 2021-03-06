import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

const grid = 4;
export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  },
  textCornerWrap: {
    overflow: 'hidden',
  },
  dot: {
    width: 2 * grid,
    height: 2 * grid,
    borderRadius: grid,
    backgroundColor: variables.brand_important,
    position: 'absolute',
    top: -1 * grid,
    right: -1 * grid,
  },
  dotSizelarge: {
    width: 4 * grid,
    height: 4 * grid,
    borderRadius: 2 * grid,
  },
  textDom: {
    paddingVertical: 0.5 * grid,
    paddingHorizontal: 2 * grid,
    backgroundColor: variables.brand_important,
    borderRadius: 4 * variables.radius_sm,
    borderStyle: 'solid',
    position: 'absolute',
    top: -10,
    right: -15,
  },
  textCorner: {
    width: 18 * grid,
    backgroundColor: variables.brand_important,
    transform: [{
      rotate: '45deg',
    }],
    position: 'absolute',
    top: 2 * grid,
  },
  textCornerlarge: {
    width: 26 * grid,
    top: 3 * grid,
  },
  text: {
    color: variables.color_text_base_inverse,
    textAlign: 'center',
  },
});
