import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import DashboardButton from './DashboardButton';
import Colors from '../../constants/Colors';
import i18n from '../../translationService';
import { selectUser } from '../../store/userSlice';
import { useAppSelector } from '../../hooks';

export default function Dashboard() {
  const colorScheme = useColorScheme();
  const user = useAppSelector(selectUser);

  return (
    <View style={styles.dashboard}>
      <Text
        style={{
          color: Colors[colorScheme ?? 'light'].text,
          ...styles.subtitle,
        }}
      >
        {i18n.t('home_lira_shapira_currency_you_have')}
      </Text>
      <View style={styles.amountDisplay}>
        <Text
          style={{
            color: Colors[colorScheme ?? 'light'].text,
            ...styles.title,
          }}
        >
          {user.accountBalance}
        </Text>
        <Text style={{ color: Colors[colorScheme ?? 'light'].text }}>
          {i18n.t('home_lira_shapira_currency_shorthand')}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.labeledButton}>
          <DashboardButton
            route="/Deposit"
            iconName="leaf-circle-outline"
            iconLibrary="MaterialCommunityIcons"
          />
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
              opacity: 0.5,
            }}
          >
            {i18n.t('deposit')}
          </Text>
        </View>
        <View style={styles.labeledButton}>
          <DashboardButton
            iconName="hand-coin-outline"
            iconLibrary="MaterialCommunityIcons"
          />
          <Text
            style={{
              opacity: 0.5,
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
            }}
          >
            {i18n.t('dashboard_dashboard_buttons_request')}
          </Text>
        </View>
        <View style={styles.labeledButton}>
          <DashboardButton
            route="/Send"
            iconName="paper-plane"
            iconLibrary="FontAwesome"
          />
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
            }}
          >
            {i18n.t('dashboard_dashboard_buttons_send')}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dashboard: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  amountDisplay: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    width: '100%',
  },
  labeledButton: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
});
