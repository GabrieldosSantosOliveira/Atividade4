import { getLocales } from 'expo-localization';
const locale = getLocales()[0];
export const MoneyFormat = (money: number) => {
  const moneyWithCents = money / 100;
  return new Intl.NumberFormat(locale.languageCode, {
    style: 'currency',
    currency: locale.currencyCode || 'BRL',
  }).format(moneyWithCents);
};
