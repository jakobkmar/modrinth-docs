"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[977],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),h=r,u=m["".concat(d,".").concat(h)]||m[h]||c[h]||a;return t?i.createElement(u,o(o({ref:n},p),{},{components:t})):i.createElement(u,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9280:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={},d="Modpack Format",s={unversionedId:"modpacks/format_definition",id:"modpacks/format_definition",isDocsHomePage:!1,title:"Modpack Format",description:"The Modrinth modpack format is a simple format that lets you store modpacks.",source:"@site/docs/modpacks/format_definition.md",sourceDirName:"modpacks",slug:"/modpacks/format_definition",permalink:"/docs/modpacks/format_definition",editUrl:"https://github.com/modrinth/docs/edit/master/docs/modpacks/format_definition.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Modpacks",permalink:"/docs/modpacks/creating_modpacks"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>formatVersion</code>",id:"formatversion",children:[]},{value:"<code>game</code>",id:"game",children:[]},{value:"<code>versionId</code>",id:"versionid",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>summary</code> (optional)",id:"summary-optional",children:[]},{value:"<code>files</code>",id:"files",children:[]},{value:"<code>dependencies</code>",id:"dependencies",children:[]}]},{value:"Storage",id:"storage",children:[{value:"Overrides",id:"overrides",children:[]},{value:"Server Overrides",id:"server-overrides",children:[]},{value:"Client Overrides",id:"client-overrides",children:[]}]}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modpack-format"},"Modpack Format"),(0,a.kt)("p",null,"The Modrinth modpack format is a simple format that lets you store modpacks."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"formatversion"},(0,a.kt)("inlineCode",{parentName:"h3"},"formatVersion")),(0,a.kt)("p",null,"The version of the format, stored as a number. The current value at the time of writing is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("h3",{id:"game"},(0,a.kt)("inlineCode",{parentName:"h3"},"game")),(0,a.kt)("p",null,"The game of the modpack, stored as a string. The only available type is ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft"),". "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"versionid"},(0,a.kt)("inlineCode",{parentName:"h3"},"versionId")),(0,a.kt)("p",null,"A unique identifier for this specific version of the modpack."),(0,a.kt)("h3",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h3"},"name")),(0,a.kt)("p",null,"Human-readable name of the modpack."),(0,a.kt)("h3",{id:"summary-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"summary")," (optional)"),(0,a.kt)("p",null,"A short description of this modpack."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"files"},(0,a.kt)("inlineCode",{parentName:"h3"},"files")),(0,a.kt)("p",null,"The files array contains a list of files for the modpack that needs to be downloaded. Each item in this array contains the following:"),(0,a.kt)("h4",{id:"path"},(0,a.kt)("inlineCode",{parentName:"h4"},"path")),(0,a.kt)("p",null,"The destination path of this file, relative to the Minecraft instance directory. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"mods/MyMod.jar")," resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},".minecraft/mods/MyMod.jar"),"."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you implement an \"import ZIP\" feature or similar, make sure this field doesn't exit the Minecraft instance directory for security reasons. To do this, make sure it doesn't contain ",(0,a.kt)("inlineCode",{parentName:"p"},"..")," or start with a drive name (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"[A-Z]:/"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[A-Z]:\\"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),")."))),(0,a.kt)("h4",{id:"hashes"},(0,a.kt)("inlineCode",{parentName:"h4"},"hashes")),(0,a.kt)("p",null,"The hashes of the file specified. SHA1 is required, and other hashes are optional, but will usually be ignored. This is formatted as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"hashes": {\n    "sha1": "cc297357ff0031f805a744ca3a1378a112c2ddf4"\n}\n')),(0,a.kt)("h4",{id:"env-optional"},(0,a.kt)("inlineCode",{parentName:"h4"},"env")," (optional)"),(0,a.kt)("p",null,"For files that only exist on a specific environment, this field allows that to be specified. It's an object which contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," value. This uses the Modrinth client/server type specifications. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"env": {\n    "client": "required",\n    "server": "unsupported"\n}\n')),(0,a.kt)("p",null,"In the above example, this is a client-only file. It cannot be installed server side. Both side types can only be the following values: ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"optional"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unsupported"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For optional mods, we recommend showing a dialog to the user that allows them to select which optional files they would like to install."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"server")," refers to the ",(0,a.kt)("em",{parentName:"p"},"dedicated")," server. Even though clients technically have a logical server, if something is marked server only, it should not be installed on the client."),(0,a.kt)("h4",{id:"downloads"},(0,a.kt)("inlineCode",{parentName:"h4"},"downloads")),(0,a.kt)("p",null,"An array containing RFC 3986 compliant URIs where this file may be downloaded. URIs MUST NOT contain unencoded spaces or any other illegal characters according to RFC 3986. Only URIs from the following domains are allowed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cdn.modrinth.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge.forgecdn.net")," (CurseForge)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"github.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"raw.githubusercontent.com"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dependencies"},(0,a.kt)("inlineCode",{parentName:"h3"},"dependencies")),(0,a.kt)("p",null,"This object contains a list of IDs and version numbers that launchers will use in order to know what to install."),(0,a.kt)("p",null,"Available dependency IDs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minecraft")," - The Minecraft game"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"forge")," - The Minecraft Forge mod loader"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fabric-loader")," - The Fabric loader")),(0,a.kt)("p",null,"An example ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    "minecraft": "1.18.1",\n    "fabric-loader": "0.13.1"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("p",null,"When stored on disk, the modpack MUST be in ZIP format (MIME type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-modrinth-modpack+zip"),"), using the ",(0,a.kt)("inlineCode",{parentName:"p"},".mrpack")," extension. The main metadata of the modpack MUST be stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"modrinth.index.json")," in the root of the zip."),(0,a.kt)("h3",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"The zip may also contain a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides"),". Files in this directory will be copied to the root of the Minecraft Instance directory upon installation by the launcher. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my_modpack.mrpack/\n    modrinth.index.json\n    overrides/\n        config/\n            mymod.cfg\n        options.txt\n")),(0,a.kt)("p",null,"When installed, the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," will be copied to the Minecraft Instance directory and end up similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".minecraft/\n    config/\n        mymod.cfg\n    options.txt\n")),(0,a.kt)("h3",{id:"server-overrides"},"Server Overrides"),(0,a.kt)("p",null,"Along with the traditional overrides folder, Modrinth also has a server overrides folder to eliminate the need for server packs.\nServer overrides work in a layer based approach. This means server overrides folder (with the directory name ",(0,a.kt)("inlineCode",{parentName:"p"},"server-overrides"),") will be applied after the ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," folder, overwriting its contents."),(0,a.kt)("p",null,"Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my_modpack.mrpack/\n    modrinth.index.json\n    overrides/\n        config/\n            mymod.cfg\n        options.txt\n    server-overrides/\n        config/\n            mymod.cfg\n            servermod.cfg\n")),(0,a.kt)("p",null,"When installed, the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," will be copied to the Minecraft Instance directory. Then the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"server-overrides")," will be copied and end up similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".minecraft/\n    config/\n        mymod.cfg\n        servermod.cfg\n    options.txt\n")),(0,a.kt)("h3",{id:"client-overrides"},"Client Overrides"),(0,a.kt)("p",null,"Modrinth also has a client overrides folder! The folders name is ",(0,a.kt)("inlineCode",{parentName:"p"},"client-overrides"),". It is functionally equivalent to the server overrides folder (besides only being applied on the client), and works the same with the layer based approach."),(0,a.kt)("p",null,"Both the server and client override folders are optional."))}m.isMDXComponent=!0}}]);