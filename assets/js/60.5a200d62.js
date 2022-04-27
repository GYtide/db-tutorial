(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{548:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch-排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-排序"}},[t._v("#")]),t._v(" Elasticsearch 排序")]),t._v(" "),a("p",[t._v("在 Elasticsearch 中，默认排序是"),a("strong",[t._v("按照相关性的评分（_score）"),a("strong",[t._v("进行降序排序，也可以按照")]),t._v("字段的值排序")]),t._v("、"),a("strong",[t._v("多级排序")]),t._v("、"),a("strong",[t._v("多值字段排序、基于 geo（地理位置）排序以及自定义脚本排序")]),t._v("，除此之外，对于相关性的评分也可以用 rescore 二次、三次打分，它可以限定重新打分的窗口大小（window size），并针对作用范围内的文档修改其得分，从而达到精细化控制结果相关性的目的。")]),t._v(" "),a("h2",{attrs:{id:"_1-默认相关性排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认相关性排序"}},[t._v("#")]),t._v(" 1. 默认相关性排序")]),t._v(" "),a("p",[t._v("在 Elasticsearch 中，默认情况下，文档是按照相关性得分倒序排列的，其对应的相关性得分字段用 "),a("code",[t._v("_score")]),t._v(" 来表示，它是浮点数类型，"),a("code",[t._v("_score")]),t._v(" 评分越高，相关性越高。评分模型的选择可以通过 "),a("code",[t._v("similarity")]),t._v(" 参数在映射中指定。")]),t._v(" "),a("p",[t._v("相似度算法可以按字段指定，只需在映射中为不同字段选定即可，如果要修改已有字段的相似度算法，只能通过为数据重新建立索引来达到目的。关于更多 es 相似度算法可以参考 "),a("a",{attrs:{href:"https://www.knowledgedict.com/tutorial/elasticsearch-similarity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 es 相似度算法（相关性得分计算）"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-tf-idf-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-tf-idf-模型"}},[t._v("#")]),t._v(" 1.1. TF-IDF 模型")]),t._v(" "),a("p",[t._v("Elasticsearch 在 5.4 版本以前，text 类型的字段，默认采用基于 tf-idf 的向量空间模型。")]),t._v(" "),a("p",[t._v("在开始计算得分之时，Elasticsearch 使用了被搜索词条的频率以及它有多常见来影响得分。一个简短的解释是，"),a("strong",[t._v("一个词条出现在某个文档中的次数越多，它就越相关；但是，如果该词条出现在不同的文档的次数越多，它就越不相关")]),t._v("。这一点被称为 TF-IDF，TF 是"),a("strong",[t._v("词频")]),t._v("（term frequency），IDF 是"),a("strong",[t._v("逆文档频率")]),t._v("（inverse document frequency）。")]),t._v(" "),a("p",[t._v("考虑给一篇文档打分的首要方式，是统计一个词条在文本中出现的次数。举个例子，如果在用户的区域搜索关于 Elasticsearch 的 get-together，用户希望频繁提及 Elasticsearch 的分组被优先展示出来。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"We will discuss Elasticsearch at the next Big Data group."\n"Tuesday the Elasticsearch team will gather to answer questions about Elasticsearch."\n')])])]),a("p",[t._v("第一个句子提到 Elasticsearch 一次，而第二个句子提到 Elasticsearch 两次，所以包含第二句话的文档应该比包含第一句话的文档拥有更高的得分。如果我们要按照数量来讨论，第一句话的词频（TF）是 1，而第二句话的词频将是 2。")]),t._v(" "),a("p",[t._v("逆文档频率比文档词频稍微复杂一点。这个听上去很酷炫的描述意味着，如果一个分词（通常是单词，但不一定是）在索引的不同文档中出现越多的次数，那么它就越不重要。使用如下例子更容易解释这一点。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"We use Elasticsearch to power the search for our website."\n"The developers like Elasticsearch so far."\n"The scoring of documents is calculated by the scoring formula."\n')])])]),a("p",[t._v("如上述例子，需要理解以下几点：")]),t._v(" "),a("ul",[a("li",[t._v("词条 “Elasticsearch” 的文档频率是 2（因为它出现在两篇文档中）。文档频率的逆源自得分乘以 1/DF，这里 DF 是该词条的文档频率。这就意味着，由于词条拥有更高的文档频率，它的权重就会降低。")]),t._v(" "),a("li",[t._v("词条 “the” 的文档频率是 3，因为它出现在所有的三篇文档中。请注意，尽管 “the” 在最后一篇文档中出现了两次，它的文档频率还是 3。这是因为，逆文档频率只检查一个词条是否出现在某文档中，而不检查它出现多少次。那个应该是词频所关心的事情。")])]),t._v(" "),a("p",[t._v("逆文档频率是一个重要的因素，用于平衡词条的词频。举个例子，考虑有一个用户搜索词条 “the score”，单词 the 几乎出现在每个普通的英语文本中，如果它不被均衡一下，单词 the 的频率要完全淹没单词 score 的频率。逆文档频率 IDF 均衡了 the 这种常见词的相关性影响，所以实际的相关性得分将会对查询的词条有一个更准确的描述。")]),t._v(" "),a("p",[t._v("一旦词频 TF 和逆文档频率 IDF 计算完成，就可以使用 TF-IDF 公式来计算文档的得分。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-bm25-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-bm25-模型"}},[t._v("#")]),t._v(" 1.2. BM25 模型")]),t._v(" "),a("p",[t._v("Elasticsearch 在 5.4 版本之后，针对 text 类型的字段，默认采用的是 BM25 评分模型，而不是基于 tf-idf 的向量空间模型，评分模型的选择可以通过 "),a("code",[t._v("similarity")]),t._v(" 参数在映射中指定。")]),t._v(" "),a("h2",{attrs:{id:"_2-字段的值排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-字段的值排序"}},[t._v("#")]),t._v(" 2. 字段的值排序")]),t._v(" "),a("p",[t._v("在 Elasticsearch 中按照字段的值排序，可以利用 "),a("code",[t._v("sort")]),t._v(" 参数实现。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET books/_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sort"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("返回结果如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"took"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("132")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timed_out"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_shards"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"successful"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipped"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"failed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("749244")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"books"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"book"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8456479"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8456479")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1580.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          ...\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1580.00")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从如上返回结果，可以看出，"),a("code",[t._v("max_score")]),t._v(" 和 "),a("code",[t._v("_score")]),t._v(" 字段都返回 "),a("code",[t._v("null")]),t._v("，返回字段多出 "),a("code",[t._v("sort")]),t._v(" 字段，包含排序字段的分值。计算 _"),a("code",[t._v("score")]),t._v(" 的花销巨大，如果不根据相关性排序，记录 _"),a("code",[t._v("score")]),t._v(" 是没有意义的。如果无论如何都要计算 _"),a("code",[t._v("score")]),t._v("，可以将 "),a("code",[t._v("track_scores")]),t._v(" 参数设置为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_3-多字段排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-多字段排序"}},[t._v("#")]),t._v(" 3. 多字段排序")]),t._v(" "),a("p",[t._v("如果我们想要结合使用 price、date 和 _score 进行查询，并且匹配的结果首先按照价格排序，然后按照日期排序，最后按照相关性排序，具体示例如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET books/_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bool"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"must"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"term"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4868438")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sort"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_score"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("排序条件的顺序是很重要的。结果首先按第一个条件排序，仅当结果集的第一个 "),a("code",[t._v("sort")]),t._v(" 值完全相同时才会按照第二个条件进行排序，以此类推。")]),t._v(" "),a("p",[t._v("多级排序并不一定包含 "),a("code",[t._v("_score")]),t._v("。你可以根据一些不同的字段进行排序，如地理距离或是脚本计算的特定值。")]),t._v(" "),a("h2",{attrs:{id:"_4-多值字段的排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-多值字段的排序"}},[t._v("#")]),t._v(" 4. 多值字段的排序")]),t._v(" "),a("p",[t._v("一种情形是字段有多个值的排序，需要记住这些值并没有固有的顺序；一个多值的字段仅仅是多个值的包装，这时应该选择哪个进行排序呢？")]),t._v(" "),a("p",[t._v("对于数字或日期，你可以将多值字段减为单值，这可以通过使用 "),a("code",[t._v("min")]),t._v("、"),a("code",[t._v("max")]),t._v("、"),a("code",[t._v("avg")]),t._v(" 或是 "),a("code",[t._v("sum")]),t._v(" 排序模式。例如你可以按照每个 date 字段中的最早日期进行排序，通过以下方法：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dates"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-地理位置上的距离排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-地理位置上的距离排序"}},[t._v("#")]),t._v(" 5. 地理位置上的距离排序")]),t._v(" "),a("p",[t._v("es 的地理位置排序使用 "),a("strong",[a("code",[t._v("_geo_distance")])]),t._v(" 来进行距离排序，如下示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sort"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_geo_distance"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es_location_field"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.407526")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.904030")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"order"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unit"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"km"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"distance_type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plane"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ......\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("_geo_distance")]),t._v(" 的选项具体如下：")]),t._v(" "),a("ul",[a("li",[t._v("如上的 "),a("em",[t._v("es_location_field")]),t._v(" 指的是 es 存储经纬度数据的字段名。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("order")])])]),t._v("：指定按距离升序或降序，分别对应 "),a("strong",[a("em",[a("code",[t._v("asc")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("desc")])])]),t._v("。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("unit")])])]),t._v("：计算距离值的单位，默认是 "),a("strong",[a("em",[a("code",[t._v("m")])])]),t._v("，表示米（meters），其它可选项有 "),a("strong",[a("em",[a("code",[t._v("mi")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("cm")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("mm")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("NM")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("km")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("ft")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("yd")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("in")])])]),t._v("。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("mode")])])]),t._v("：针对数组数据（多个值）时，指定的取值模式，可选值有 "),a("strong",[a("em",[a("code",[t._v("min")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("max")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("sum")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("avg")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("median")])])]),t._v("，当排序采用升序时，默认为 "),a("em",[t._v("min")]),t._v("；排序采用降序时，默认为 "),a("em",[t._v("max")]),t._v("。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("distance_type")])])]),t._v("：用来设置如何计算距离，它的可选项有 "),a("strong",[a("em",[a("code",[t._v("sloppy_arc")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("arc")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("plane")])])]),t._v("，默认为 "),a("em",[t._v("sloppy_arc")]),t._v("，"),a("em",[t._v("arc")]),t._v(" 它相对更精确些，但速度会明显下降，"),a("em",[t._v("plane")]),t._v(" 则是计算快，但是长距离计算相对不准确。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("ignore_unmapped")])])]),t._v("：未映射字段时，是否忽略处理，可选项有 "),a("strong",[a("em",[a("code",[t._v("true")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("false")])])]),t._v("；默认为 "),a("em",[t._v("false")]),t._v("，表示如果未映射字段，查询将引发异常；若设置 "),a("em",[t._v("true")]),t._v("，将忽略未映射的字段，并且不匹配此查询的任何文档。")]),t._v(" "),a("li",[a("strong",[a("em",[a("code",[t._v("validation_method")])])]),t._v("：指定检验经纬度数据的方式，可选项有 "),a("strong",[a("em",[a("code",[t._v("IGNORE_MALFORMED")])])]),t._v("、"),a("strong",[a("em",[a("code",[t._v("COERCE")])])]),t._v(" 和 "),a("strong",[a("em",[a("code",[t._v("STRICT")])])]),t._v("；"),a("em",[t._v("IGNORE_MALFORMED")]),t._v(" 表示可接受纬度或经度无效的地理点，即忽略数据；"),a("em",[t._v("COERCE")]),t._v(" 表示另外尝试并推断正确的地理坐标；"),a("em",[t._v("STRICT")]),t._v(" 为默认值，表示遇到不正确的地理坐标直接抛出异常。")])]),t._v(" "),a("h2",{attrs:{id:"_6-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考资料"}},[t._v("#")]),t._v(" 6. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.knowledgedict.com/tutorial/elasticsearch-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch 教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);