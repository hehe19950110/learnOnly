const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

let currentUrl = "https://www.baidu.com/s?wd="
$$('.search-panel > li').forEach($li => {
  $li.onclick = function() {
    $$('.search-panel > li').forEach($node => $node.classList.remove('active'))
    this.classList.add('active')

    let placeholder = this.dataset.holder
    console.log(placeholder)
    $('.search-input').setAttribute('placeholder',placeholder)

    currentUrl = this.dataset.url
  }
}
)

$('.btn').onclick = function() {
  //location.href = currentUrl + $('.search-input').value
  let $link = document.createElement('a')
  $link.setAttribute('target','_blank')
  $link.setAttribute('href',currentUrl + $('.search-input').value)
  $link.click()
}
