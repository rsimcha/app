import { View, StyleSheet, Text, useColorScheme } from 'react-native';
import { Transaction } from '../../types/Transaction';
import { User } from '../../types/User';
import TransactionItem from './TransactionItem';
import i18n from '../../translationService';
import Colors from '../../constants/Colors';

interface TransactionsListProps {
  currentUser: User;
}

export default function TransactionsList({
  currentUser,
}: TransactionsListProps) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.transactionList}>
      {currentUser.transactions.length ? (
        currentUser.transactions.map((transaction: Transaction, i) => (
          <View
            key={`${i}${transaction.createdAt}`}
            style={styles.transactionItem}
          >
            <TransactionItem
              transaction={transaction}
              income={transaction.recipientId === currentUser.id}
            />
          </View>
        )).reverse()
      ) : (
        <Text
        style={{ fontSize: 24, color: Colors[colorScheme ?? 'light'].text }}
        >{i18n.t('transactions_list_no_activities')}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  transactionList: {
    paddingVertical: 8,
    width: '100%',
    // height: '50%',
    overflow: 'scroll',
  },
  transactionItem: {
    display: 'flex',
    gap: 5,
    textAlign: 'center',
    width: '90%',
    paddingHorizontal: 4,
  },
});
