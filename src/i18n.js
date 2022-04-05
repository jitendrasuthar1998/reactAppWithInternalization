import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { DateTime } from 'luxon'

// detect user language
// pass the i18n instance to react-i18next
// init i18next
i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      // not needed for react as it escapes by default
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React'
          },
          counter_one: 'Changed language just once',
          counter_other: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}'
          }
        }
      },
      de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React'
          },
          counter_one: 'Die Sprache wurde erst ein mal gewechselt',
          counter_other: 'Die Sprache wurde {{count}} mal gewechselt',
          footer: {
            date: 'Heute ist {{date, DATE_HUGE}}'
          }
        }
      },
      hi: {
        translation: {
          description: {
            part1: '<1>src/App.js</1> संपादित करें और पुनः लोड करने के लिए सहेजें',
            part2: 'हिंदी में प्रतिक्रिया जानें।'
          },
          counter_one: 'सिर्फ एक बार भाषा बदली',
          counter_other: 'भाषा पहले ही {{count}} बार बदली जा चुकी है',
          footer: {
            date: 'आज {{date, DATE_HUGE}} है'
          }
        }
      }
    }
  })

// new usage
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
});