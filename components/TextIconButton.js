import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { FONTS, COLORS } from '../constants';

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
         <Text
          style={{
              ...FONTS.body3,
              ...labelStyle
          }}
         >
            {label}
         </Text>
         <Image 
          source={icon}
          style={{
              marginLeft: scale(5),
              width: scale(20),
              height: verticalScale(20),
              tintColor: COLORS.black,
              ...iconStyle
          }}
         />
        </TouchableOpacity>
    );
}

export default TextIconButton;