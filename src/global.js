import { StyleSheet,Dimensions, } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isTablet = screenWidth >= 768;

export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#140005',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: isTablet ? 32 : 16,

  },
  backarrow: {
    alignSelf: 'center'
  },
  navhedingtext: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DD3872',
    paddingLeft: 16,
  },
  skiptext: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DD3872'
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  // googlebtn
  googlefbcnt: {
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    gap: 16
  },
  googlecnt: {
    paddingVertical: 16,
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6C6C6C',
  },
  fbcnt: {
    paddingVertical: 16,
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6C6C6C',
  },
  movieheading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical:10
  },
  cinema: {
    color: '#DD3872',
    fontSize: isTablet ? 32 : 28,
    fontWeight: '700',
  },
});
