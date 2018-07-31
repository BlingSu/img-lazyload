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

  let indexNum = 0
  function LazyLoad(selector, option) {
    this.selector = selector
    this.option = option || {}
    this.indexNum = indexNum
    this.init()
  }
  LazyLoad.prototype = {
    init() {
      let _this = this
      _this.checkImages()
      _this.scrollImages()
    },
    isShow(selector) {
      const bound = selector.getBoundingClientRect()
      const clientHeight = window.innerHeight || document.documentElement.clientHeight // in bottom
      return bound.bottom > 0 && bound.top < clientHeight
    },
    loadImage(selector) {
      let image = new Image()
      image.onload = () => {
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
    },
    throttle(fn, time) {
      let timeout,
          start_time = new Date()
      return () => {
        let _this = this,
            arts = arguments,
            current_time = new Date()
        clearTimeout(timeout)

        if (current_time - start_time >= time) {
          fn.apply(_this, args)
          start_time = current_time
        } else {
          timeout = setTimeout(fn, apply)
        }
      }
    },
    scrollImages() {
      let _this = this;
      window.onscroll = () => {
        _this.throttle(
            _this.checkImages(),
            _this.option.time === undefined ? 50 : _this.option.time
          )
      }
      window.onload = () => {
        _this.checkImages()
      }
    },
  }

  return LazyLoad;
}))
