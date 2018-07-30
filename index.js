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
    selecotr: '.lazyload'
  }
}))
