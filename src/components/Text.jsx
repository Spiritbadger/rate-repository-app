import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorLanguage: {
    color: theme.colors.language,
  },
  colorappBar: {
    color: theme.colors.appBar,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5
  },
  fontSizeAppBar: {
    fontSize: theme.fontSizes.appbar,
    padding: theme.paddings.medium
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  backGroundLanguage: {
    backgroundColor: theme.backGroundColors.language,
    alignSelf: 'flex-start',
    padding: theme.paddings.medium,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: theme.edges.softEdges
  }
});

const Text = ({ color, fontSize, fontWeight, background, style, ...props }) => {
  const textStyle = [
    styles.text,
    styles.language,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'language' && styles.colorLanguage,
    color === 'appBar' && styles.colorappBar,
    background === 'language' && styles.backGroundLanguage,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'appBar' && styles.fontSizeAppBar,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;