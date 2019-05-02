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
 * 'ja-JP' || 'en-US' || 'zh-CN'
 *
 * @param {string} newLocale new locale to change to
 */
function changeLocale (newLocale) {
  if (Constants.locale.indexOf(newLocale) !== -1) {
    if (Global.locale !== newLocale) {
      localStorage.setItem(Constants.localeLocalStorageKey, newLocale)
    } else {
      console.log(`New locale(${newLocale}) is same with thie old one.`)
    }
  } else {
    console.error(`Locale(${newLocale}) is not defined.`)
  }
}

/**
 * Initialize function which called first.
 *
 */
function init () {
  Global.locale = localStorage.getItem(Constants.localeLocalStorageKey) || Constants.locale[0]
  $.getJSON(`https://bizplus.dynami.tech/demo/i18n/static/${Global.locale}.json`, (i18n) => Global.i18n = i18n)
}

init()

// 点击搜索
$('.search-click').click(function() { 
  let clicks = $(this).data('clicks');
  let search_on = $('.search-click .search-on');
  let search_off = $('.search-click .search-off')
  if (clicks) {
     // odd clicks
      $('.search-input').css("display","none")
      console.log("close_search")  
      search_on.css("display","block")
      search_off.css("display","none")
  } else {
     // even clicks
      $('.search-input').css("display","flex");
      console.log("open_search")
      search_on.css("display","none")
      search_off.css("display","block")    
  }
  $(this).data("clicks", !clicks);
});


