/**
 * @file main 
 * @author Siyuan Mei(578146845@qq.com)
 */

const Constants = {
  locale: ['ja_JP', 'en_US', 'zh_CN'],
  localeLocalStorageKey: 'bizplus-locale'
}
let Global = {}

function getQueryStringByName(name) {
  let result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return ''
  }
  return result[1]
}
/**
 * Change locale between Japanese, English and Chinese.
 * 'ja_JP' || 'en_US' || 'zh_CN'
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
 * Render i18n
 *
 */
function renderI18n () { 
  console.log(Global.locale)
  let newLocale = getQueryStringByName('locale')
  if (newLocale !== '') {
    changeLocale(newLocale)
  }
  $.i18n.properties({  
    name: 'strings',
    path: 'https://bizplus.dynami.tech/demo/i18n/static/',
    mode: 'map',  
    language: Global.locale,
    callback: function () {
      try {
        $('[data-i18n-placeholder]').each(function () {
          $(this).attr('placeholder', $.i18n.prop($(this).data('i18n-placeholder')))
        })
        $('[data-i18n-text-left]').each(function () {
          let html = $(this).html()
          let reg = /<(.*)>/
          let htmlValue = reg.exec(html)[0]
          $(this).html($.i18n.prop($(this).data('i18n-text-left')) + '&nbsp;' + htmlValue)
        })
        $('[data-i18n-text-right]').each(function () {
          let html = $(this).html()
          let reg = /<(.*)>/
          let htmlValue = reg.exec(html)[0]
          $(this).html(htmlValue + '&nbsp;' + $.i18n.prop($(this).data('i18n-text-right')))
        })
        $('[data-i18n-text]').each(function () {
          $(this).text($.i18n.prop($(this).data('i18n-text')))
        })
        $('[data-i18n-value]').each(function () {
          $(this).val($.i18n.prop($(this).data('i18n-value')))
        })
      }
      catch (ex){ }
    }  
  })
  /*
  $('.menu-item')[0].innerText = Global.i18n.header.homepage
  $('.menu-item')[1].innerText = Global.i18n.header.information.name
  $('.menu-item').children()[0].innerText = Global.i18n.header.information.company_profile
  $('.menu-item').children()[1].innerText = Global.i18n.header.information.business_philosophy
  */
}

/**
 * Initialize function which called first.
 *
 */
function init () {
  Global.locale = localStorage.getItem(Constants.localeLocalStorageKey) || Constants.locale[0]
  renderI18n()
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


