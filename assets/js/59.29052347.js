(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{547:function(t,s,a){"use strict";a.r(s);var e=a(30),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch-高亮搜索及显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-高亮搜索及显示"}},[t._v("#")]),t._v(" Elasticsearch 高亮搜索及显示")]),t._v(" "),a("p",[t._v("Elasticsearch 的高亮（highlight）可以让您从搜索结果中的一个或多个字段中获取突出显示的摘要，以便向用户显示查询匹配的位置。当您请求突出显示（即高亮）时，响应结果的 highlight 字段中包括高亮的字段和高亮的片段。Elasticsearch 默认会用 "),a("code",[t._v("<em></em>")]),t._v(" 标签标记关键字。")]),t._v(" "),a("h2",{attrs:{id:"_1-高亮参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-高亮参数"}},[t._v("#")]),t._v(" 1. 高亮参数")]),t._v(" "),a("p",[t._v("ES 提供了如下高亮参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boundary_chars")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("包含每个边界字符的字符串。默认为,! ?\\ \\ n。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boundary_max_scan")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("扫描边界字符的距离。默认为 20。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boundary_scanner")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定如何分割突出显示的片段，支持 chars、sentence、word 三种方式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("boundary_scanner_locale")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用来设置搜索和确定单词边界的本地化设置，此参数使用语言标记的形式（“en-US”, “fr-FR”, “ja-JP”）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("encoder")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表示代码段应该是 HTML 编码的:默认(无编码)还是 HTML (HTML-转义代码段文本，然后插入高亮标记)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fields")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定检索高亮显示的字段。可以使用通配符来指定字段。例如，可以指定 comment**来获取以 comment*开头的所有文本和关键字字段的高亮显示。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("force_source")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("根据源高亮显示。默认值为 false。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fragmenter")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定文本应如何在突出显示片段中拆分:支持参数 simple 或者 span。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fragment_offset")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制要开始突出显示的空白。仅在使用 fvh highlighter 时有效。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fragment_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("字符中突出显示的片段的大小。默认为 100。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("highlight_query")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("突出显示搜索查询之外的其他查询的匹配项。这在使用重打分查询时特别有用，因为默认情况下高亮显示不会考虑这些问题。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("matched_fields")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组合多个匹配结果以突出显示单个字段，对于使用不同方式分析同一字符串的多字段。所有的 matched_fields 必须将 term_vector 设置为 with_positions_offsets，但是只有将匹配项组合到的字段才会被加载，因此只有将 store 设置为 yes 才能使该字段受益。只适用于 fvh highlighter。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("no_match_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果没有要突出显示的匹配片段，则希望从字段开头返回的文本量。默认为 0(不返回任何内容)。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("number_of_fragments")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回的片段的最大数量。如果片段的数量设置为 0，则不会返回任何片段。相反，突出显示并返回整个字段内容。当需要突出显示短文本(如标题或地址)，但不需要分段时，使用此配置非常方便。如果 number_of_fragments 为 0，则忽略 fragment_size。默认为 5。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("order")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置为 score 时，按分数对突出显示的片段进行排序。默认情况下，片段将按照它们在字段中出现的顺序输出(order:none)。将此选项设置为 score 将首先输出最相关的片段。每个高亮应用自己的逻辑来计算相关性得分。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("phrase_limit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制文档中所考虑的匹配短语的数量。防止 fvh highlighter 分析太多的短语和消耗太多的内存。提高限制会增加查询时间并消耗更多内存。默认为 256。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("pre_tags")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("与 post_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("post_tags")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("与 pre_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("require_field_match")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认情况下，只突出显示包含查询匹配的字段。将 require_field_match 设置为 false 以突出显示所有字段。默认值为 true。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tags_schema")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置为使用内置标记模式的样式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用的高亮模式，可选项为**"),a("em",[a("code",[t._v("unified")])]),a("strong",[t._v("、")]),a("em",[a("code",[t._v("plain")])]),a("strong",[t._v("或")]),a("em",[a("code",[t._v("fvh")])]),t._v("**。默认为 "),a("em",[a("code",[t._v("unified")])]),t._v("。")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-自定义高亮片段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义高亮片段"}},[t._v("#")]),t._v(" 2. 自定义高亮片段")]),t._v(" "),a("p",[t._v("如果我们想使用自定义标签，在高亮属性中给需要高亮的字段加上 "),a("code",[t._v("pre_tags")]),t._v(" 和 "),a("code",[t._v("post_tags")]),t._v(" 即可。例如，搜索 title 字段中包含关键词 javascript 的书籍并使用自定义 HTML 标签高亮关键词，查询语句如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET /books/_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"highlight"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fields"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre_tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<strong>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post_tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</strong>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-多字段高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-多字段高亮"}},[t._v("#")]),t._v(" 3. 多字段高亮")]),t._v(" "),a("p",[t._v("关于搜索高亮，还需要掌握如何设置多字段搜索高亮。比如，搜索 title 字段的时候，我们期望 description 字段中的关键字也可以高亮，这时候就需要把 "),a("code",[t._v("require_field_match")]),t._v(" 属性的取值设置为 "),a("code",[t._v("fasle")]),t._v("。"),a("code",[t._v("require_field_match")]),t._v(" 的默认值为 "),a("code",[t._v("true")]),t._v("，只会高亮匹配的字段。多字段高亮的查询语句如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET /books/_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"highlight"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require_field_match"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fields"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-高亮性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-高亮性能分析"}},[t._v("#")]),t._v(" 4. 高亮性能分析")]),t._v(" "),a("p",[t._v("Elasticsearch 提供了三种高亮器，分别是"),a("strong",[t._v("默认的 highlighter 高亮器")]),t._v("、"),a("strong",[t._v("postings-highlighter 高亮器")]),t._v("和 "),a("strong",[t._v("fast-vector-highlighter 高亮器")]),t._v("。")]),t._v(" "),a("p",[t._v("默认的 "),a("strong",[t._v("highlighter")]),t._v(" 是最基本的高亮器。highlighter 高亮器实现高亮功能需要对 "),a("code",[t._v("_source")]),t._v(" 中保存的原始文档进行二次分析，其速度在三种高亮器里最慢，优点是不需要额外的存储空间。")]),t._v(" "),a("p",[a("strong",[t._v("postings-highlighter")]),t._v(" 高亮器实现高亮功能不需要二次分析，但是需要在字段的映射中设置 "),a("code",[t._v("index_options")]),t._v(" 参数的取值为 "),a("code",[t._v("offsets")]),t._v("，即保存关键词的偏移量，速度快于默认的 highlighter 高亮器。例如，配置 comment 字段使用 postings-highlighter 高亮器，映射如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PUT /example\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doc"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index_options"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"offsets"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("fast-vector-highlighter")]),t._v(" 高亮器实现高亮功能速度最快，但是需要在字段的映射中设置 "),a("code",[t._v("term_vector")]),t._v(" 参数的取值为 "),a("code",[t._v("with_positions_offsets")]),t._v("，即保存关键词的位置和偏移信息，占用的存储空间最大，是典型的空间换时间的做法。例如，配置 comment 字段使用 fast-vector-highlighter 高亮器，映射如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PUT /example\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doc"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"term_vector"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"with_positions_offsets"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);