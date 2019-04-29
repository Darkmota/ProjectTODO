/**
 * @file main 
 * @author Siyuan Mei(578146845@qq.com)
 */

const Constants = {
  locale: ['ja-JP', 'en-US', 'zh-CN'],
  localeLocalStorageKey: 'bizplus-locale'
}
let Global = {}

/**
 * Change locale between Japanese, English and Chinese.
 * 'jp' || 'cn' || 'en'
 *
 * @param {string} newLocale new locale to change to
 */
function changeLocale (newLocale) {
  if (Constants.locale.indexOf(newLocale) !== -1) {
    if (Global.locale !== newLocale) {
      localStorage.setItem(Constants.localeLocalStorageKey, newLocale)
    }
  }
}

/**
 * Initialize function which called first.
 *
 */
function init () {
  Global.locale = localStorage.getItem(Constants.localeLocalStorageKey) || Constants.locale[0]
  $.getJSON(`./i18n/static/${Global.locale}.json`, (i18n) => Global.i18n = i18n)
}

init()
