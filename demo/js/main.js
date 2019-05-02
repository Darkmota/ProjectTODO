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
 * Render i18n
 *
 */
function renderI18n () {
  $.i18n.properties({  
      name: 'strings',    //属性文件名     命名格式： 文件名_国家代号.properties
      path: 'https://bizplus.dynami.tech/demo/i18n/static/',   //注意这里路径是你属性文件的所在文件夹
      mode: 'map',  
      language: Global.locale,     //这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
      callback: function () {  
        $("[i]").each(function () {  
          console.log($(this).data("locale"))
          $(this).html($.i18n.prop($(this).data("locale")))
        })
      }  
  });  
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
  $.getJSON(`https://bizplus.dynami.tech/demo/i18n/static/${Global.locale}.json`, (i18n) => {
    Global.i18n = i18n
    renderI18n()
  })
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


