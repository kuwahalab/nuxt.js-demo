(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t){t.exports=JSON.parse('[{"id":1,"title":"タイトル","category":"カテゴリ","tags":["タグ1","タグ2"],"content":"本文","createdAt":"2019-07-07","publishedDate":"2019-07-08","slug":"test1"},{"id":2,"title":"タイトル2","category":"カテゴリ2","tags":["タグ1","タグ2","タグ3"],"content":"本文2","createdAt":"2019-07-08","publishedDate":"2019-09-08","slug":"test2"}]')},173:function(t,e,n){var content=n(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("36873827",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";var r=n(173);n.n(r).a},175:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".container{margin:0 auto;min-height:50vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:50px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:21px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},176:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},category:{type:String,required:!0},tags:{type:Array,required:!0},createdAt:{type:String,required:!0},publishedDate:{type:String,required:!0},slug:{type:String,required:!0}}},l=n(19),c={components:{Card:Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"card"},[n("nuxt-link",{staticClass:"post-link",attrs:{to:{name:"posts-slug",params:{slug:t.slug}}}},[n("h2",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),n("div",{staticClass:"tags"},t._l(t.tags,function(e,i){return n("span",{key:i,staticClass:"tag"},[t._v(t._s(e))])}),0)],1)},[],!1,null,"3871cecc",null).exports},props:{posts:{type:Array,required:!0}}},o=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-list"},this._l(this.posts,function(t){return e("card",{key:t.id,staticClass:"card",attrs:{title:t.title,category:t.category,tags:t.tags,"created-at":t.createdAt,"published-date":t.publishedDate,slug:t.slug}})}),1)},[],!1,null,"2e2c73a3",null).exports,d=n(172),f={components:{CardList:o},data:function(){return{posts:d}}},h=(n(174),Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v("\n      Demo\n    ")]),t._v(" "),n("h2",{staticClass:"subtitle"}),t._v(" "),n("h3",[t._v("新着記事一覧")]),t._v(" "),n("card-list",{staticClass:"contents",attrs:{posts:t.posts}}),t._v(" "),t._m(0)],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://google.com",target:"_blank"}},[this._v("\n        Google\n      ")])])}],!1,null,null,null));e.default=h.exports}}]);