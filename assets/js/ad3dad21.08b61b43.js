"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4556],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(r,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(44996),l=(n(39960),["components"]),s={id:"js-table",title:"Building a Desktop Plugin - Showing a Table",sidebar_label:"Showing a Table"},d=void 0,p={unversionedId:"tutorial/js-table",id:"tutorial/js-table",title:"Building a Desktop Plugin - Showing a Table",description:"Building a Table",source:"@site/../docs/tutorial/js-table.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-table",permalink:"/docs/tutorial/js-table",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-table.mdx",tags:[],version:"current",frontMatter:{id:"js-table",title:"Building a Desktop Plugin - Showing a Table",sidebar_label:"Showing a Table"},sidebar:"main",previous:{title:"Setup",permalink:"/docs/tutorial/js-setup"},next:{title:"Custom UI",permalink:"/docs/tutorial/js-custom"}},u={},m=[{value:"Building a Table",id:"building-a-table",level:2},{value:"Row Types",id:"row-types",level:3},{value:"Columns",id:"columns",level:3},{value:"Configuring the table",id:"configuring-the-table",level:3},{value:"What next?",id:"what-next",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"building-a-table"},"Building a Table"),(0,o.mdx)("p",null,"One of the best ways to understand how your app works is to get access to its underlying data, which are used to display items on screen. An efficient way of achieving this is by showing the data in a table.\nThe data for Sea-mammals has been optimized for easy display in a table, which you can sort, filter and select items for more detailed information."),(0,o.mdx)("img",{alt:"Android Tutorial App",src:(0,r.default)("img/android-tutorial-desktop.png")}),(0,o.mdx)("p",null,"In this section of the tutorial, you'll be editing the ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.tsx")," file that was generated in the previous scaffolding step."),(0,o.mdx)("h3",{id:"row-types"},"Row Types"),(0,o.mdx)("p",null,"Start off by defining what your table rows look like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"type Row = {\n  id: number,\n  title: string,\n  url: string,\n};\n")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"It's important that you have some unique identifier for every row so that you know when something new was added to the table; the 'id' field is sufficient")),(0,o.mdx)("h3",{id:"columns"},"Columns"),(0,o.mdx)("p",null,"Define which columns to show and how to display them:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn} from 'flipper-plugin';\n\nconst columns: DataTableColumn<Row>[] = [\n  {\n    key: 'title',\n    width: 150,\n  },\n  {\n    key: 'url',\n    title: 'URL',\n  },\n];\n")),(0,o.mdx)("p",null,"The keys used here will show up again in the next step when building your rows, so keep them consistent.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"title")," defined for each column will show up as the header at the top of the table and will be default to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"key")," value if omitted."),(0,o.mdx)("p",null,"For the ",(0,o.mdx)("inlineCode",{parentName:"p"},"width"),", you can either choose a fixed number (pixels), a percentage, or leave it out to distribute the remaining available space."),(0,o.mdx)("h3",{id:"configuring-the-table"},"Configuring the table"),(0,o.mdx)("p",null,"You now have a Row type that describes the data you'll be storing and a description of the columns to display. With these components it's a trivial task to get a table showing data, including search / sort and a details view, as shown in the following code snippet:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn, createTablePlugin} from 'flipper-plugin';\n\nmodule.exports = createTablePlugin<Row>({\n  columns,\n  method: 'newRow',\n  key: 'id',\n});\n")),(0,o.mdx)("p",null,"The above code snippet has the following properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"method")," - refers to the method that should be listened to to fill the table with data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"'newRow'")," - refers back to the identifier used with ",(0,o.mdx)("inlineCode",{parentName:"li"},"connection.send")," to send the data to the Flipper desktop application in the previous step."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"key")," - ","[optional]"," - but by setting this property, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"'id'")," field is used as an identifier. As a result, once a ",(0,o.mdx)("inlineCode",{parentName:"li"},"newRow")," message arrives with an existing ",(0,o.mdx)("inlineCode",{parentName:"li"},"id"),", it will overwrite the old entry, rather than appending a new one.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," API supports more options, which are documented in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#createtableplugin"},"Dektop Plugin API")," page."),(0,o.mdx)("p",null,"And that's all there is to it!"),(0,o.mdx)("p",null,"Starting Flipper will now compile your plugin and connect to the native side. It's a good idea to start Flipper from the command line to see any potential errors. The console in the DevTools is a great source of information if something doesn't work as expected, too."),(0,o.mdx)("p",null,"The final result of this step can be seen at ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/seamammals/src/index_table.tsx"},"index_table.tsx"),"."),(0,o.mdx)("h2",{id:"what-next"},"What next?"),(0,o.mdx)("p",null,"You now have an interactive table that you can sort, filter and use to get additional information about the data you see on screen."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," is a high-level abstraction that takes care of both connection management and a standardized UI for the most common scenario."),(0,o.mdx)("p",null,"For many cases, this is all you need. However, sometimes you may want to build something a bit more custom, which is covered in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom"},"Desktop Plugin - Custom UI page")))}h.isMDXComponent=!0}}]);