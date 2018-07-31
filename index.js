;(function(ele, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(ele)
  } else if (typeof define === 'function' && define.amd) {
    define([], factory(ele))
  } else {
    ele.LazyLoad = factory(ele)
  }
}(typeof global !== 'undefined' ? global : this.window || this.global, function(ele) {
  'use strict'
  const defaultOption = {
    src: 'data-src',
    selector: '.lazyload'
  }
  let indexNum = 0
  function LazyLoad(selector, option) {
    this.selector = selector
    this.option = option || {}
    this.indexNum = indexNum
    this.init()
  }
  LazyLoad.prototype = {
    init: function() {
      window.onload = function() {
        this.checkImages()
      }
    },
    isShow: function(selector) {
      const bound = selector.getBoundingClientRect()
      const clientHeight = window.innerHeight || document.documentElement.clientHeight // in bottom
      console.log(bound, clientHeight)
      return bound.bottom > 0 && bound.top < clientHeight
    },
    loadImage: function(selector) {
      let image = new Image()
      image.onload = function() {
        selector.src = image.src
      }
      image.src = selector.dataset.src
      selector.dataset.src = ''
    },
    checkImages() {
      const images = document.querySelectorAll(this.selector)
      for (let i = this.indexNum; i < images.length; i++) {
        if (this.isShow(images[i])) {
          this.loadImage(images[i])
          this.indexNum = i
        }
      }
    }
  }

  return LazyLoad;
}))
