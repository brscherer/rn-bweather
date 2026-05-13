import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export function WeatherHomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.hero}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.eyebrow}>
            Foundation slice
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            Weather app architecture is in place
          </ThemedText>
          <ThemedText style={styles.body}>
            TanStack Query is wired at the app root, and the project now has dedicated feature and
            service boundaries for upcoming weather, search, and location work.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText type="subtitle">Next implementation slices</ThemedText>
          <ThemedText style={styles.cardText}>
            Add the Open-Meteo API layer, location permission flow, and current-weather query
            state.
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
