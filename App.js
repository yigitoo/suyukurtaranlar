import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';
import data from './data';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const stackSize = 4;
const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000'
};
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type='slide-bottom'
      durationMs={ANIMATION_DURATION}
      interpolation='easeIn'
    />
    <Transition.Together>
      <Transition.In
        type='fade'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type='slide-bottom'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation='easeOut'
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
    </View>
  );
};

const CardDetails = ({ index }) => (
  <View key={data[index].id} style={{ alignItems: 'center' }}>
    <Text style={[styles.text, styles.heading]} numberOfLines={2}>
      {data[index].name}
    </Text>
    <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
  </View>
);

export default function App() {
  const [index, setIndex] = React.useState(1);
  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name='crop-square'
        size={width}
        color={colors.blue}
        style={{
          opacity: 0.05,
          transform: [{ rotate: '45deg' }, { scale: 1.6 }],
          position: 'absolute',
          left: -15,
          top: 30
        }}
      />
      <StatusBar hidden={true} />
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          infinite
          backgroundColor={'transparent'}
          onSwiped={onSwiped}
          onTapCard={() => swiperRef.current.swipeLeft()}
          cardVerticalMargin={50}
          stackSize={stackSize}
          stackScale={10}
          stackSeparation={14}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.blue,
                  borderColor: colors.blue,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        />
      </View>
      <View>
        <ProgressBarAnimated
              width={Dimensions.get('screen').width - 30}
              value={50}
              backgroundColorOnComplete="#6CC644"
            />
      </View>
      <View style={styles.bottomContainer}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        >
          <CardDetails index={index} />
        </Transitioning.View>
        <View style={styles.bottomContainerButtons}>
          <Icon.Button
            name='alpha-x-circle'
            size={94}
            backgroundColor='transparent'
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <Icon.Button
            name='check-circle'
            size={94}
            backgroundColor='transparent'
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEC32C"
  },
  swiperContainer: {
    flex: 0.55
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly'
  },
  bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain'
  },
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    backgroundColor: 'transparent'
  },
  text: { fontFamily: 'Courier' },
  heading: { fontSize: 24, marginBottom: 10, color: colors.black },
  price: { color: colors.red, fontSize: 32, fontWeight: '500' },
});
