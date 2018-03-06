# jQuey 和 JS 常用对比

### 获取父级、子级、兄弟元素(包括祖级、孙级等)

> JavaScript

``` js
var a = document.getElementById('dom')

var b = a.childNodes  // 获取a的全部子节点

var c = a.parentNode  // 获取a的父节点

var d = a.nextSibling  // 获取a的下一个兄弟节点

var e = a.previousSilbing  // 获取a的上一个兄弟节点

var f = a.firstChild  // 获取a的第一个子节点

var g = a.lastChild  // 获取a的最后一个子节点

```

> jQuey

``` js
jQuey.parent(expr)  // 找父亲节点

jQuey.parents(expr)  // 找所有祖先元素，不限于父元素

jQuey.children(expr)  // 返回所有子节点，这个方法只会返回直接的孩子节点，不会返回所有的子孙节点

/**
 * 返回下面的所有内容，包括节点和文本。这个方法和children()的区别就在于，包括空白文本，也会被作为一个jQuery对象返回，children()则只会返回节点
 */
jQuey.contents()

jQuey.prev()  // 返回上一个兄弟节点，不是所有的兄弟节点

jQuey.prevAll()  // 返回所有之前的兄弟节点

jQuey.next()  // 返回下一个兄弟节点，不是所有的兄弟节点

jQuey.nextAll()  // 返回所有之后的兄弟节点

jQuey.siblings()  // 返回兄弟姐妹节点，不分前后

/**
 * jQuery.filter()是从初始的jQuery对象集合中筛选出一部分，而jQuery.find()的返回结果，不会有初始集合中的内容，比如$("p"),find("span"),是从p元素开始找,等同于$("p span")
 */
jQuey.find(expr)

```
