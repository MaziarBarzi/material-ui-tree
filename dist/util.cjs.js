"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var getNodeDataByPath=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",n=t.length,a=0,i=e;a<n;)i=i[r][t[a]],a+=1;return i},withChildrenKey=function(e){return function(t,r){return getNodeDataByPath(t,r,e)}};exports.default=getNodeDataByPath,exports.withChildrenKey=withChildrenKey;
