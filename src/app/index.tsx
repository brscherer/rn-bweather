import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.hero}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.eyebrow}>
            React Native Weather App
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            Project scaffold ready
          </ThemedText>
          <ThemedText style={styles.body}>
            This app has been cleaned down to a minimal Expo Router shell. Next slices will add
            app structure, TanStack Query, location, and the Open-Meteo weather flow.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText type="subtitle">Current slice</ThemedText>
          <ThemedText style={styles.cardText}>
            Remove template code and leave a stable baseline for incremental implementation.
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.four,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
  hero: {
    gap: Spacing.three,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 40,
    lineHeight: 44,
  },
  body: {
    maxWidth: 560,
  },
  card: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  cardText: {
    marginTop: Spacing.two,
  },
});
