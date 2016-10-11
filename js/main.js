/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(300);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(301);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _belle = __webpack_require__(306);

	var _App = __webpack_require__(302);

	var _translate = __webpack_require__(375);

	var _translate2 = _interopRequireDefault(_translate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      input: 'SOS',
	      output: (0, _translate2.default)('SOS')
	    };
	    _this.doTranslate = _this.doTranslate.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _App.mainContainer },
	        _react2.default.createElement(
	          'div',
	          { className: _App.rootBox },
	          _react2.default.createElement(_belle.TextInput, {
	            value: this.state.input,
	            allowNewLine: true,
	            onUpdate: this.doTranslate }),
	          _react2.default.createElement(
	            _belle.Card,
	            { className: _App.outputCard },
	            this.state.output
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          '\xA9 2016 Fahad Hossain. CC-BY-SA-4.0'
	        )
	      );
	    }
	  }, {
	    key: 'doTranslate',
	    value: function doTranslate(_ref) {
	      var value = _ref.value;

	      this.setState({
	        input: value,
	        output: (0, _translate2.default)(value)
	      });
	    }
	  }]);

	  return App;
	}(_react.Component);

		exports.default = App;

/***/ },
/* 302 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainContainer":"_3iVBUfEevB-NT3odh595Cl","rootBox":"_1towmHP1tq0BVr265vmP_L","outputCard":"_3vlBFdzJKa0aZdy7gyaOWi"};

/***/ },
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Button = __webpack_require__(307);

	var _Button2 = _interopRequireDefault(_Button);

	var _Card = __webpack_require__(337);

	var _Card2 = _interopRequireDefault(_Card);

	var _Choice = __webpack_require__(339);

	var _Choice2 = _interopRequireDefault(_Choice);

	var _Option = __webpack_require__(340);

	var _Option2 = _interopRequireDefault(_Option);

	var _Placeholder = __webpack_require__(342);

	var _Placeholder2 = _interopRequireDefault(_Placeholder);

	var _Select = __webpack_require__(344);

	var _Select2 = _interopRequireDefault(_Select);

	var _Separator = __webpack_require__(348);

	var _Separator2 = _interopRequireDefault(_Separator);

	var _TextInput = __webpack_require__(351);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _Rating = __webpack_require__(354);

	var _Rating2 = _interopRequireDefault(_Rating);

	var _ComboBox = __webpack_require__(358);

	var _ComboBox2 = _interopRequireDefault(_ComboBox);

	var _Spinner = __webpack_require__(361);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Toggle = __webpack_require__(363);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _DatePicker = __webpack_require__(366);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	var _actionArea = __webpack_require__(372);

	var _actionArea2 = _interopRequireDefault(_actionArea);

	var _button = __webpack_require__(309);

	var _button2 = _interopRequireDefault(_button);

	var _card = __webpack_require__(338);

	var _card2 = _interopRequireDefault(_card);

	var _placeholder = __webpack_require__(343);

	var _placeholder2 = _interopRequireDefault(_placeholder);

	var _option = __webpack_require__(341);

	var _option2 = _interopRequireDefault(_option);

	var _select = __webpack_require__(345);

	var _select2 = _interopRequireDefault(_select);

	var _separator = __webpack_require__(349);

	var _separator2 = _interopRequireDefault(_separator);

	var _textInput = __webpack_require__(353);

	var _textInput2 = _interopRequireDefault(_textInput);

	var _spinner = __webpack_require__(362);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _toggle = __webpack_require__(364);

	var _toggle2 = _interopRequireDefault(_toggle);

	var _rating = __webpack_require__(355);

	var _rating2 = _interopRequireDefault(_rating);

	var _comboBox = __webpack_require__(359);

	var _comboBox2 = _interopRequireDefault(_comboBox);

	var _datePicker = __webpack_require__(369);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _select3 = __webpack_require__(346);

	var _select4 = _interopRequireDefault(_select3);

	var _button3 = __webpack_require__(336);

	var _button4 = _interopRequireDefault(_button3);

	var _rating3 = __webpack_require__(356);

	var _rating4 = _interopRequireDefault(_rating3);

	var _toggle3 = __webpack_require__(365);

	var _toggle4 = _interopRequireDefault(_toggle3);

	var _i18n = __webpack_require__(368);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _datePicker3 = __webpack_require__(370);

	var _datePicker4 = _interopRequireDefault(_datePicker3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Button: _Button2.default,
	  Card: _Card2.default,
	  Choice: _Choice2.default,
	  Option: _Option2.default,
	  Placeholder: _Placeholder2.default,
	  Select: _Select2.default,
	  Separator: _Separator2.default,
	  TextInput: _TextInput2.default,
	  Rating: _Rating2.default,
	  ComboBox: _ComboBox2.default,
	  Spinner: _Spinner2.default,
	  Toggle: _Toggle2.default,
	  DatePicker: _DatePicker2.default,
	  style: {
	    actionArea: _actionArea2.default,
	    button: _button2.default,
	    card: _card2.default,
	    comboBox: _comboBox2.default,
	    datePicker: _datePicker2.default,
	    option: _option2.default,
	    placeholder: _placeholder2.default,
	    rating: _rating2.default,
	    select: _select2.default,
	    separator: _separator2.default,
	    spinner: _spinner2.default,
	    textInput: _textInput2.default,
	    toggle: _toggle2.default
	  },
	  config: {
	    select: _select4.default,
	    button: _button4.default,
	    rating: _rating4.default,
	    toggle: _toggle4.default,
	    i18n: _i18n2.default,
	    datePicker: _datePicker4.default
	  }
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line no-unused-vars


	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _helpers = __webpack_require__(308);

	var _button = __webpack_require__(309);

	var _button2 = _interopRequireDefault(_button);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _injectStyle = __webpack_require__(311);

	var _button3 = __webpack_require__(336);

	var _button4 = _interopRequireDefault(_button3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var buttonTypes = ['button', 'submit', 'reset']; // eslint-disable-line no-unused-vars

	var buttonPropTypes = {
	  activeStyle: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  className: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  type: _react.PropTypes.oneOf(buttonTypes),
	  style: _react.PropTypes.object,
	  focusStyle: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,
	  onTouchStart: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchCancel: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  preventFocusStyleForTouchAndClick: _react.PropTypes.bool,
	  primary: _react.PropTypes.bool
	};

	/**
	 * Returns an object with properties that are relevant for the button element.
	 *
	 * In case a wrong or no type is defined the type of the child button will be
	 * set to `button`.
	 */
	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(buttonPropTypes));
	}

	/**
	 * Update hover, focus & active style for the speficied styleId.
	 *
	 * @param styleId {string} - a unique id that exists as class attribute in the DOM
	 * @param properties {object} - the components properties optionally containing custom styles
	 */
	function updatePseudoClassStyle(styleId, properties, preventFocusStyleForTouchAndClick) {
	  var baseStyle = properties.primary ? _button2.default.primaryStyle : _button2.default.style;
	  var baseDisabledStyle = properties.primary ? _button2.default.primaryDisabledStyle : _button2.default.disabledStyle;
	  var disabledStyle = _extends({}, baseStyle, properties.style, baseDisabledStyle, properties.disabledStyle);
	  var baseActiveStyle = properties.primary ? _button2.default.primaryActiveStyle : _button2.default.activeStyle;
	  var activeStyle = _extends({}, baseActiveStyle, properties.activeStyle);

	  var focusStyle = void 0;
	  if (preventFocusStyleForTouchAndClick) {
	    focusStyle = { outline: 0 };
	  } else {
	    var baseFocusStyle = properties.primary ? _button2.default.primaryFocusStyle : _button2.default.focusStyle;
	    focusStyle = _extends({}, baseFocusStyle, properties.focusStyle);
	  }

	  var styles = [{
	    id: styleId,
	    style: activeStyle,
	    pseudoClass: 'active'
	  }, {
	    id: styleId,
	    style: disabledStyle,
	    pseudoClass: 'active',
	    disabled: true
	  }, {
	    id: styleId,
	    style: focusStyle,
	    pseudoClass: 'focus'
	  }];

	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * Button component
	 *
	 * The button behaves exactly like a normal html button except:
	 * - Once a user clicks on the button it will loose focus
	 * - By default every button is of type="button" instead of "submit"
	 */

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button(properties) {
	    _classCallCheck(this, Button);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, properties));

	    _this._onFocus = function (event) {
	      _this.focused = true;
	      _this.forceUpdate();

	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    };

	    _this._onBlur = function (event) {
	      _this.focused = false;
	      _this.setState({ isActive: false });

	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    };

	    _this._onMouseDown = function (event) {
	      if (event.button === 0 && !_this.props.disabled) {
	        _this.mouseDownOnButton = true;
	      }

	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    };

	    _this._onTouchStart = function (event) {
	      if (!_this.props.disabled && event.touches.length === 1) {
	        _this.setState({
	          isActive: true,
	          isIgnoringHover: true
	        });
	      }

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    };

	    _this._onTouchEnd = function (event) {
	      _this.setState({
	        isActive: false,
	        isIgnoringHover: true
	      });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    };

	    _this._onTouchCancel = function (event) {
	      _this.setState({
	        isActive: false,
	        isIgnoringHover: true
	      });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    };

	    _this._onMouseEnter = function (event) {
	      if (!_this.state.isIgnoringHover) {
	        _this.setState({
	          isHovered: true,
	          isIgnoringHover: false
	        });
	      }

	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    };

	    _this._onMouseLeave = function (event) {
	      _this.setState({
	        isHovered: false
	      });

	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    };

	    _this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _button4.default.preventFocusStyleForTouchAndClick;

	    _this.state = {
	      childProps: sanitizeChildProps(properties),

	      // used for touch devices like iOS Chrome/Safari where the active
	      // pseudoClass is not supported on touch
	      isActive: false,
	      isHovered: false,

	      // Note: On touch devices mouseEnter is fired while mouseLeave is not.
	      // This would result in a hover effect that keeps active until another
	      // element is focused on. This would result in the same behaviour as using
	      // the :hover pseudo class. To prevent it from happening activating the
	      // hover state is prevented when a touch event has been triggered before.
	      // source: http://stackoverflow.com/a/22444532/837709
	      isIgnoringHover: false
	    };

	    // The focused attribute is used to apply the one-time focus animation.
	    // As it is reset after every render it can't be set inside state as this
	    // would trigger an endless loop.
	    _this.focused = false;

	    // This used to determine if the one-time focus animation should be prevented.
	    _this.mouseDownOnButton = false;
	    return _this;
	  }

	  _createClass(Button, [{
	    key: 'componentWillMount',


	    /**
	     * Generates the style-id & inject the focus & active style.
	     */
	    value: function componentWillMount() {
	      this.styleId = 'style-id' + (0, _helpers.uniqueId)();
	      updatePseudoClassStyle(this.styleId, this.props, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Update the childProps based on the updated properties of the button.
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _button4.default.preventFocusStyleForTouchAndClick;

	      this.setState({
	        childProps: sanitizeChildProps(properties)
	      });
	      (0, _injectStyle.removeStyle)(this.styleId);
	      updatePseudoClassStyle(this.styleId, properties, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Deactivate the focused attribute in order to make sure the focus animation
	     * only runs once when the component is focused on & not after re-rendering
	     * e.g when the user clicks the button.
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.focused = false;
	      this.mouseDownOnButton = false;
	    }

	    /**
	     * Remove a component's associated styles whenever it gets removed from the DOM.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeStyle)(this.styleId);
	    }

	    /**
	     * Activate the focused attribute used to determine when to show the
	     * one-time focus animation and trigger a render.
	     */


	    /**
	     * Deactivate the focused attribute used to determine when to show the
	     * one-time focus animation and trigger a render.
	     */


	    /**
	     * Updates the button to be pressed.
	     */


	    /**
	     * Updates the button to be release.
	     */


	    /**
	     * Updates the button to be release.
	     */


	    /**
	     * As soon as the mouse enters the component the isHovered state is activated.
	     */


	    /**
	     * Deactivate the isHovered state.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var baseStyle = this.props.primary ? _button2.default.primaryStyle : _button2.default.style;
	      var combinedStyle = _extends({}, baseStyle, this.props.style);

	      if (this.state.isHovered) {
	        var baseHoverStyle = this.props.primary ? _button2.default.primaryHoverStyle : _button2.default.hoverStyle;
	        combinedStyle = _extends({}, combinedStyle, baseHoverStyle, this.props.hoverStyle);
	      }

	      if (this.props.disabled) {
	        var baseDisabledStyle = this.props.primary ? _button2.default.primaryDisabledStyle : _button2.default.disabledStyle;
	        combinedStyle = _extends({}, combinedStyle, baseDisabledStyle, this.props.disabledStyle);
	        if (this.state.isHovered) {
	          var baseDisabledHoverStyle = this.props.primary ? _button2.default.primaryDisabledHoverStyle : _button2.default.disabledHoverStyle;
	          combinedStyle = _extends({}, combinedStyle, baseDisabledHoverStyle, this.props.disabledHoverStyle);
	        }
	      } else {
	        if (this.state.isActive) {
	          var baseActiveStyle = this.props.primary ? _button2.default.primaryActiveStyle : _button2.default.activeStyle;
	          combinedStyle = _extends({}, combinedStyle, baseActiveStyle, this.props.activeStyle);
	        } else if (this.focused && !this.state.isActive && !this.mouseDownOnButton && this.preventFocusStyleForTouchAndClick) {
	          var baseFocusStyle = this.props.primary ? _button2.default.primaryFocusStyle : _button2.default.focusStyle;
	          combinedStyle = _extends({}, combinedStyle, baseFocusStyle, this.props.focusStyle);
	        }
	      }

	      return _react2.default.createElement(
	        'button',
	        _extends({
	          style: combinedStyle,
	          className: (0, _unionClassNames2.default)(this.props.className, this.styleId),
	          onTouchStart: this._onTouchStart,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          onFocus: this._onFocus,
	          onBlur: this._onBlur,
	          onMouseDown: this._onMouseDown,
	          onMouseEnter: this._onMouseEnter,
	          onMouseLeave: this._onMouseLeave,
	          disabled: this.props.disabled,
	          type: this.props.type
	        }, this.state.childProps),
	        this.props.children
	      );
	    }
	  }]);

	  return Button;
	}(_react.Component);

	Button.displayName = 'Button';
	Button.propTypes = buttonPropTypes;
	Button.defaultProps = {
	  primary: false,
	  disabled: false,
	  type: 'button'
	};
	exports.default = Button;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.has = has;
	exports.omit = omit;
	exports.filter = filter;
	exports.isArrayLike = isArrayLike;
	exports.keys = keys;
	exports.map = map;
	exports.mapObject = mapObject;
	exports.find = find;
	exports.reverse = reverse;
	exports.shift = shift;
	exports.isEmpty = isEmpty;
	exports.findIndex = findIndex;
	exports.first = first;
	exports.last = last;
	exports.size = size;
	exports.some = some;
	exports.union = union;
	exports.flatten = flatten;
	exports.filterReactChildren = filterReactChildren;
	exports.getArrayForReactChildren = getArrayForReactChildren;
	exports.flattenReactChildren = flattenReactChildren;
	exports.uniqueId = uniqueId;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if the object contain the given key.
	 *
	 * @param {object} obj - object to be inspected
	 * @param {string} key - name of the property
	 */
	function has(obj, key) {
	  return obj !== undefined && obj !== null && Object.prototype.hasOwnProperty.call(obj, key);
	}

	/**
	 * Return a copy of the object, filtered to omit the blacklisted keys (or array of keys).
	 *
	 * @param {object} obj - object the returned object is based on
	 * @param {string|string[]} fields - the key or list of keys of the property to omit
	 */
	function omit(obj, fields) {
	  if (obj) {
	    var result = {};
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key) && (!fields || fields.indexOf(key) < 0)) {
	        result[key] = obj[key];
	      }
	    }

	    return result;
	  }

	  return undefined;
	}

	/**
	 * Looks through each value in the list, returning an array of all the values
	 * that pass a truth test (predicate).
	 *
	 * @param {array} iterable - the iterable object to be filtered
	 * @param {function} predicate - function returning true when provided with an entry as argument
	 * @param {object} [context] - context for the predicate function call
	 */
	function filter(iterable, predicate, context) {
	  if (iterable) {
	    var _ret = function () {
	      var result = [];
	      iterable.forEach(function (obj) {
	        if (predicate && predicate.call(context, obj)) {
	          result.push(obj);
	        }
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  return undefined;
	}

	/**
	 * Returns true if the provided object is an iterable, except for strings for which it will return false.
	 *
	 * @param {object} obj - object to be inspected
	 */
	function isArrayLike(obj) {
	  if (Array.isArray(obj)) return true;
	  if (typeof obj === 'string') return false;
	  var length = obj.length;
	  return typeof length === 'number' && length >= 0;
	}

	/**
	 * Returns all the names of the object's own properties. This will not include properties inherited through prototypes.
	 *
	 * @param {object} obj - object to be used
	 */
	function keys(obj) {
	  var objKeys = [];
	  for (var key in obj) {
	    if (has(obj, key)) objKeys.push(key);
	  }return objKeys;
	}

	/**
	 * Returns a new array of values by mapping each value in list through a transformation function (predicate).
	 *
	 * @param {array} iterable - source iterable
	 * @param {function} predicate - function returning the transformed array entry
	 */
	function map(iterable, predicate) {
	  if (iterable) {
	    var _ret2 = function () {
	      var result = [];
	      iterable.forEach(function (elm, index) {
	        if (predicate) {
	          result[index] = predicate(elm, index);
	        }
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	  }

	  return undefined;
	}

	/**
	 * Returns a new object by mapping each property in an object through a transformation function (predicate).
	 *
	 * @param {object} obj - object to be based upon
	 * @param {function} predicate - function to transform the property
	 */
	function mapObject(obj, predicate) {
	  if (obj) {
	    var _ret3 = function () {
	      var result = [];
	      var objKeys = keys(obj);
	      objKeys.forEach(function (key, index) {
	        if (predicate) {
	          result[index] = predicate(obj[key], key);
	        }
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	  }

	  return undefined;
	}

	/**
	 * Returns the first value that passes a truth test (predicate), or undefined if
	 * no value passes the test. Only works for iterable objects e.g. arrays.
	 *
	 * @param {array} iterable - the iterable object to be searched
	 * @param {function} predicate - function returning true in case of a positive match
	 * @param {object} [context] - context for the predicate function call
	 */
	function find(iterable, predicate, context) {
	  if (iterable) {
	    var result = void 0;
	    for (var index = 0; index < iterable.length; index++) {
	      if (predicate && predicate.call(context, iterable[index])) {
	        result = iterable[index];
	        break;
	      }
	    }

	    return result;
	  }

	  return undefined;
	}

	/**
	 * Reverse the array passed to it.
	 * @param {array} iterable - the array to be reversed.
	 */
	function reverse(iterable) {
	  if (iterable) {
	    var result = [];
	    for (var index = iterable.length - 1; index >= 0; index--) {
	      result.push(iterable[index]);
	    }

	    return result;
	  }

	  return undefined;
	}

	/**
	 * Shifts given array by given number of positions.
	 * @param {array} iterable - the array to be shifted.
	 * @param {array} positions - number of positions shifting is needed.
	 */
	function shift(iterable, positions) {
	  if (iterable) {
	    if (positions && positions > 0) {
	      var result = [];
	      var arrayLength = iterable.length;
	      for (var index = 0; index < iterable.length; index++) {
	        result.push(iterable[(index + positions) % arrayLength]);
	      }

	      return result;
	    }

	    return iterable;
	  }

	  return undefined;
	}

	/**
	 * Returns true if object contains no values (no enumerable own-properties).
	 *
	 * @param {Object} obj - an object
	 */
	function isEmpty(obj) {
	  return !obj || Array.isArray(obj) && obj.length === 0 || Object.keys(obj).length === 0;
	}

	/**
	 * Returns the index of the first value that passes a truth test (predicate), or undefined if
	 * no value passes the test. Only works for iterable objects e.g. arrays.
	 *
	 * @param {array} iterable - the iterable object to be searched
	 * @param {function} predicate - function returning true in case of a positive match
	 * @param {object} [context] - context for the predicate function call
	 */
	function findIndex(iterable, predicate, context) {
	  if (iterable) {
	    var result = void 0;
	    for (var index = 0; index < iterable.length; index++) {
	      if (predicate && predicate.call(context, iterable[index])) {
	        result = index;
	        break;
	      }
	    }

	    return result;
	  }

	  return undefined;
	}

	/**
	 * Returns the first element of an iterable object.
	 *
	 * @param {array} iterable - must be an iterable object
	 */
	function first(iterable) {
	  if (iterable && iterable.length > 0) {
	    return iterable[0];
	  }

	  return undefined;
	}

	/**
	 * Returns the last element of an iterable object.
	 *
	 * @param {array} iterable - must be an iterable object
	 */
	function last(iterable) {
	  if (iterable && iterable.length > 0) {
	    return iterable[iterable.length - 1];
	  }

	  return undefined;
	}

	/**
	 * Return the number of values in the list.
	 *
	 * @param {array} iterable - must be an iterable object
	 */
	function size(iterable) {
	  if (iterable) {
	    return iterable.length;
	  }

	  return 0;
	}

	/**
	 * Returns true if any of the values in the list pass the predicate truth test.
	 *
	 * @param {array} iterable - iterable object to be searched
	 * @param {function} predicate - function returning true in case of a positive match
	 * @param {object} [context] - context for the predicate function call
	 */
	function some(iterable, predicate, context) {
	  if (iterable) {
	    var result = void 0;
	    for (var index = 0; index < iterable.length; index++) {
	      if (predicate && predicate.call(context, iterable[index])) {
	        result = true;
	        break;
	      }
	    }

	    return result;
	  }

	  return undefined;
	}

	/**
	 * Returns the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
	 *
	 * @param {...array} arrs - at least two iterable objects must be provide
	 */
	function union() {
	  for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
	    arrs[_key] = arguments[_key];
	  }

	  if (arrs) {
	    var _ret4 = function () {
	      var result = [];
	      arrs.forEach(function (arr) {
	        if (arr) {
	          arr.forEach(function (obj) {
	            if (result.indexOf(obj) < 0) {
	              result.push(obj);
	            }
	          });
	        }
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
	  }

	  return undefined;
	}

	/**
	 * Recursive function for flattening an iterable.
	 *
	 * @param {object} output - base object to be updated
	 * @param {object} element - input object to be merged into the output
	 */
	function flattenInternal(output, element) {
	  if (element) {
	    element.forEach(function (obj) {
	      if (Array.isArray(obj)) {
	        flattenInternal(output, obj);
	      } else {
	        output.push(obj);
	      }
	    });
	  }
	}

	/**
	 * Flattens a nested array (the nesting can be to any depth).
	 *
	 * @param {...array} arrays - at least one array must be provided
	 */
	function flatten() {
	  for (var _len2 = arguments.length, arrays = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    arrays[_key2] = arguments[_key2];
	  }

	  if (arrays) {
	    var result = [];
	    flattenInternal(result, arrays);
	    return result;
	  }

	  return undefined;
	}

	/**
	 * Looks through a collection of React children elements, filtering them according to the predicate passed.
	 *
	 * @param {Array/Object} children - colleciton of >=1 react elements
	 * @param {function} predicate - function returning true when provided with an entry as argument
	 */
	function filterReactChildren(children, predicate) {
	  var _this = this;

	  if (children) {
	    var _ret5 = function () {
	      var result = [];
	      _react2.default.Children.forEach(children, function (entry) {
	        if (predicate && predicate.call(_this, entry)) {
	          result.push(entry);
	        }
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret5 === 'undefined' ? 'undefined' : _typeof(_ret5)) === "object") return _ret5.v;
	  }

	  return undefined;
	}

	/**
	 * Looks through a collection of React children elements, filtering them according to the predicate passed.
	 *
	 * @param {Array/Object} children - collection of >=1 react elements
	 */
	function getArrayForReactChildren(children) {
	  if (children) {
	    var _ret6 = function () {
	      var result = [];
	      _react2.default.Children.forEach(children, function (entry) {
	        result.push(entry);
	      });
	      return {
	        v: result
	      };
	    }();

	    if ((typeof _ret6 === 'undefined' ? 'undefined' : _typeof(_ret6)) === "object") return _ret6.v;
	  }

	  return undefined;
	}

	function flattenReactChildren(children) {
	  if (!isEmpty(children)) {
	    if (Array.isArray(children)) {
	      return flatten(children);
	    }

	    return getArrayForReactChildren(children);
	  }

	  return undefined;
	}

	function uniqueId() {
	  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

/***/ },
/* 309 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var buttonStyle = {

	  style: {
	    background: '#EEEEEE',
	    border: 0,
	    borderTop: '1px solid #EEEEEE',
	    borderBottom: '1px solid #BDBDBD',
	    borderRadius: 2,
	    boxSizing: 'border-box',
	    color: '#616161',
	    cursor: 'pointer',
	    display: 'inline-block',
	    fontSize: 17,
	    lineHeight: '26px',
	    padding: '8px 14px 6px 14px',
	    textAlign: 'center',
	    textDecoration: 'none',
	    verticalAlign: 'bottom',

	    /* animations */
	    transition: 'background 0.1s, border-top 0.1s, border-bottom 0.1s, color 0.1s',
	    transitionTimingFunction: 'ease-out',

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  hoverStyle: {
	    background: '#F5F5F5',
	    borderTop: '1px solid #F5F5F5',
	    color: '#757575'
	  },

	  focusStyle: {
	    WebkitAnimation: 'belle-button-focus 2s',
	    outline: 0 },

	  // avoid default focus behaviour
	  activeStyle: {
	    background: '#E0E0E0',
	    color: '#424242',
	    borderBottom: '1px solid #E0E0E0',
	    borderTop: '1px solid #BDBDBD'
	  },

	  disabledStyle: {
	    color: '#C5C4C4',
	    cursor: 'not-allowed'
	  },

	  disabledHoverStyle: {
	    color: '#D0D0D0'
	  },

	  primaryStyle: {
	    background: '#53C7F2',
	    border: 0,

	    // boxShadow: '0 1px 0px #3995B7',
	    borderTop: '1px solid #53C7F2',
	    borderBottom: '1px solid #3995B7',

	    borderRadius: 2,
	    boxSizing: 'border-box',
	    color: '#FAFAFA',
	    cursor: 'pointer',
	    display: 'inline-block',
	    fontSize: 17,
	    lineHeight: '26px',
	    padding: '8px 14px 6px 14px',
	    textAlign: 'center',
	    textDecoration: 'none',
	    verticalAlign: 'bottom',

	    /* animations */
	    transition: 'border-top 0.1s, border-bottom 0.1s, color 0.1s',
	    transitionTimingFunction: 'ease-out',

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  primaryHoverStyle: {
	    background: '#82D9F9',
	    borderTop: '1px solid #82D9F9',
	    color: '#FFF'
	  },

	  primaryFocusStyle: {
	    WebkitAnimation: 'belle-button-focus 2s',
	    outline: 0 },

	  // avoid default focus behaviour
	  primaryActiveStyle: {
	    background: '#4DBEE8',
	    borderBottom: '1px solid #4DBEE8',
	    borderTop: '1px solid #3995B7',
	    color: '#F5F5F5'
	  },

	  primaryDisabledStyle: {
	    background: '#98DEF8',
	    color: '#FAFAFA',
	    borderTop: '1px solid #98DEF8',
	    borderBottom: '1px solid #74B4CC',
	    cursor: 'not-allowed'
	  },

	  primaryDisabledHoverStyle: {
	    background: '#A7E4FB',
	    color: '#FFF',
	    borderTop: '1px solid #A7E4FB'
	  }
	};

	exports.default = buttonStyle;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unionClassNames;

	var _helpers = __webpack_require__(308);

	/**
	 * Returns a string containing all classes without duplicates.
	 *
	 * @param existingClassNames {String} - one or multiple classes
	 * @param additionalClassNames {String} - one or multiple classes
	 *
	 * @example
	 * // returns 'style-id-23 button buy-button'
	 * unionClassNames('style-id-23 button', 'button buy-button')
	 *
	 * Originally inspired by https://github.com/rackt/react-autocomplete/blob/master/lib/union-class-names.js
	 */
	function unionClassNames(existingClassNames, additionalClassNames) {
	  if (!existingClassNames && !additionalClassNames) return '';
	  if (!existingClassNames) return additionalClassNames;
	  if (!additionalClassNames) return existingClassNames;
	  return (0, _helpers.union)(existingClassNames.split(' '), additionalClassNames.split(' ')).join(' ');
	}

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.injectStyles = injectStyles;
	exports.removeStyle = removeStyle;
	exports.removeAllStyles = removeAllStyles;

	exports.default = function (styleId, style, pseudoClass, disabled) {
	  injectStyleTag();
	  updateStore(styleId, style, pseudoClass, disabled);
	  updateStyling();
	};

	var _helpers = __webpack_require__(308);

	var _CSSPropertyOperations = __webpack_require__(312);

	var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);

	var _exenv = __webpack_require__(334);

	var _animations = __webpack_require__(335);

	var _animations2 = _interopRequireDefault(_animations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleElement = void 0;
	var styleStorage = {};

	/**
	 * Injects the provided style into the styleStore.
	 */
	function injectStyleTag() {
	  if (!styleElement && _exenv.canUseDOM) {
	    styleElement = document.createElement('style');
	    document.body.appendChild(styleElement);
	    styleElement.setAttribute('class', 'belle-style');
	  }
	}

	/**
	 * Injects the provided style into the styleStore.
	 */
	function updateStore(styleId, style, pseudoClass, disabled) {
	  styleStorage[styleId] = styleStorage[styleId] || {};
	  if (disabled) {
	    styleStorage[styleId].disabledPseudoClasses = styleStorage[styleId].disabledPseudoClasses || {};
	    styleStorage[styleId].disabledPseudoClasses[pseudoClass] = style;
	  } else {
	    styleStorage[styleId].pseudoClasses = styleStorage[styleId].pseudoClasses || {};
	    styleStorage[styleId].pseudoClasses[pseudoClass] = style;
	  }
	}

	/**
	 * Constructs all the stored styles & injects them to the DOM.
	 */
	function createMarkupOnPseudoClass(pseudoClasses, id, disabled) {
	  return (0, _helpers.mapObject)(pseudoClasses, function (style, pseudoClass) {
	    if (style && Object.keys(style).length > 0) {
	      var styleString = _CSSPropertyOperations2.default.createMarkupForStyles(style);
	      var styleWithImportant = styleString.replace(/;/g, ' !important;');

	      return disabled ? '.' + id + '[disabled]:' + pseudoClass + ' {' + styleWithImportant + '}' : '.' + id + ':' + pseudoClass + ' {' + styleWithImportant + '}';
	    }

	    return undefined;
	  });
	}

	function updateStyling() {
	  var styles = (0, _helpers.mapObject)(styleStorage, function (storageEntry, id) {
	    var pseudoClassesArray = [];

	    if (storageEntry.pseudoClasses) {
	      pseudoClassesArray.push(createMarkupOnPseudoClass(storageEntry.pseudoClasses, id, false));
	    }

	    if (storageEntry.disabledPseudoClasses) {
	      pseudoClassesArray.push(createMarkupOnPseudoClass(storageEntry.disabledPseudoClasses, id, true));
	    }

	    return pseudoClassesArray;
	  });
	  if (styleElement) {
	    styleElement.innerHTML = (0, _helpers.flatten)([_animations2.default, styles]).join(' ');
	  }
	}

	/**
	 * Injects a style tag and adds multiple passed styles.
	 *
	 * By using this function someone can make sure the DOM is updated only once.
	 *
	 * @example
	 * ```
	 * const styles = [
	 *   {
	 *     id: 'style-0.0.2',
	 *     style: { color: '#F00' },
	 *     pseudoClass: 'hover'
	 *   }
	 * ];
	 * injectStyles(styles);
	 * ```
	 */
	function injectStyles(styles) {
	  injectStyleTag();
	  styles.forEach(function (style) {
	    updateStore(style.id, style.style, style.pseudoClass, style.disabled);
	  });
	  updateStyling();
	}

	/**
	 * Removes all pseudoClass styles based on the provided styleId.
	 */
	function removeStyle(styleId) {
	  delete styleStorage[styleId];
	  updateStyling();
	}

	/**
	 * Removes all pseudoClass styles based on all provided styleIds.
	 */
	function removeAllStyles(styleIds) {
	  styleIds.forEach(function (styleId) {
	    delete styleStorage[styleId];
	  });
	  updateStyling();
	}

	/**
	 * Injects a style tag and adds the passed style for the provided pseudoClass.
	 */

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 */

	'use strict';

	var CSSProperty = __webpack_require__(313);
	var ExecutionEnvironment = __webpack_require__(314);
	var ReactInstrumentation = __webpack_require__(315);

	var camelizeStyleName = __webpack_require__(328);
	var dangerousStyleValue = __webpack_require__(330);
	var hyphenateStyleName = __webpack_require__(331);
	var memoizeStringOnly = __webpack_require__(333);
	var warning = __webpack_require__(318);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;

	  var warnHyphenatedStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
	  };

	  var warnBadVendoredStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	  };

	  var warnStyleValueWithSemicolon = function (name, value, owner) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	  };

	  var warnStyleValueIsNaN = function (name, value, owner) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	  };

	  var checkRenderMessage = function (owner) {
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' Check the render method of `' + name + '`.';
	      }
	    }
	    return '';
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   * @param {ReactDOMComponent} component
	   */
	  var warnValidStyle = function (name, value, component) {
	    var owner;
	    if (component) {
	      owner = component._currentElement._owner;
	    }
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, owner);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, owner);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, owner);
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      warnStyleValueIsNaN(name, value, owner);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles, component) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue, component);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
	  setValueForStyles: function (node, styles, component) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactInstrumentation.debugTool.onHostOperation(component._debugID, 'update styles', styles);
	    }

	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName], component);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
	      if (styleName === 'float' || styleName === 'cssFloat') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 313 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 314 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */

	'use strict';

	var debugTool = null;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactDebugTool = __webpack_require__(316);
	  debugTool = ReactDebugTool;
	}

	module.exports = { debugTool: debugTool };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */

	'use strict';

	var ReactInvalidSetStateWarningHook = __webpack_require__(317);
	var ReactHostOperationHistoryHook = __webpack_require__(320);
	var ReactComponentTreeHook = __webpack_require__(321);
	var ReactChildrenMutationWarningHook = __webpack_require__(325);
	var ExecutionEnvironment = __webpack_require__(314);

	var performanceNow = __webpack_require__(326);
	var warning = __webpack_require__(318);

	var hooks = [];
	var didHookThrowForEvent = {};

	function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	  try {
	    fn.call(context, arg1, arg2, arg3, arg4, arg5);
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
	    didHookThrowForEvent[event] = true;
	  }
	}

	function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
	  for (var i = 0; i < hooks.length; i++) {
	    var hook = hooks[i];
	    var fn = hook[event];
	    if (fn) {
	      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	    }
	  }
	}

	var isProfiling = false;
	var flushHistory = [];
	var lifeCycleTimerStack = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerNestedFlushDuration = null;
	var currentTimerType = null;

	var lifeCycleTimerHasWarned = false;

	function clearHistory() {
	  ReactComponentTreeHook.purgeUnmountedComponents();
	  ReactHostOperationHistoryHook.clearHistory();
	}

	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeHook.getOwnerID(id);
	    var parentID = ReactComponentTreeHook.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeHook.getDisplayName(id),
	      text: ReactComponentTreeHook.getText(id),
	      updateCount: ReactComponentTreeHook.getUpdateCount(id),
	      childIDs: ReactComponentTreeHook.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeHook.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}

	function resetMeasurements() {
	  var previousStartTime = currentFlushStartTime;
	  var previousMeasurements = currentFlushMeasurements || [];
	  var previousOperations = ReactHostOperationHistoryHook.getHistory();

	  if (currentFlushNesting === 0) {
	    currentFlushStartTime = null;
	    currentFlushMeasurements = null;
	    clearHistory();
	    return;
	  }

	  if (previousMeasurements.length || previousOperations.length) {
	    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	    flushHistory.push({
	      duration: performanceNow() - previousStartTime,
	      measurements: previousMeasurements || [],
	      operations: previousOperations || [],
	      treeSnapshot: getTreeSnapshot(registeredIDs)
	    });
	  }

	  clearHistory();
	  currentFlushStartTime = performanceNow();
	  currentFlushMeasurements = [];
	}

	function checkDebugID(debugID) {
	  var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  if (allowRoot && debugID === 0) {
	    return;
	  }
	  if (!debugID) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
	  }
	}

	function beginLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  currentTimerStartTime = performanceNow();
	  currentTimerNestedFlushDuration = 0;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	function endLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  if (isProfiling) {
	    currentFlushMeasurements.push({
	      timerType: timerType,
	      instanceID: debugID,
	      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	    });
	  }
	  currentTimerStartTime = null;
	  currentTimerNestedFlushDuration = null;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function pauseCurrentLifeCycleTimer() {
	  var currentTimer = {
	    startTime: currentTimerStartTime,
	    nestedFlushStartTime: performanceNow(),
	    debugID: currentTimerDebugID,
	    timerType: currentTimerType
	  };
	  lifeCycleTimerStack.push(currentTimer);
	  currentTimerStartTime = null;
	  currentTimerNestedFlushDuration = null;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function resumeCurrentLifeCycleTimer() {
	  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop();

	  var startTime = _lifeCycleTimerStack$.startTime;
	  var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
	  var debugID = _lifeCycleTimerStack$.debugID;
	  var timerType = _lifeCycleTimerStack$.timerType;

	  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	  currentTimerStartTime = startTime;
	  currentTimerNestedFlushDuration += nestedFlushDuration;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	var ReactDebugTool = {
	  addHook: function (hook) {
	    hooks.push(hook);
	  },
	  removeHook: function (hook) {
	    for (var i = 0; i < hooks.length; i++) {
	      if (hooks[i] === hook) {
	        hooks.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  isProfiling: function () {
	    return isProfiling;
	  },
	  beginProfiling: function () {
	    if (isProfiling) {
	      return;
	    }

	    isProfiling = true;
	    flushHistory.length = 0;
	    resetMeasurements();
	    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	  },
	  endProfiling: function () {
	    if (!isProfiling) {
	      return;
	    }

	    isProfiling = false;
	    resetMeasurements();
	    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	  },
	  getFlushHistory: function () {
	    return flushHistory;
	  },
	  onBeginFlush: function () {
	    currentFlushNesting++;
	    resetMeasurements();
	    pauseCurrentLifeCycleTimer();
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    resetMeasurements();
	    currentFlushNesting--;
	    resumeCurrentLifeCycleTimer();
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    beginLifeCycleTimer(debugID, timerType);
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    endLifeCycleTimer(debugID, timerType);
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onHostOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onHostOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    childDebugIDs.forEach(checkDebugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onBeforeMountComponent: function (debugID, element, parentDebugID) {
	    checkDebugID(debugID);
	    checkDebugID(parentDebugID, true);
	    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUpdateComponent', debugID, element);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onBeforeUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUnmountComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  },
	  onTestEvent: function () {
	    emitEvent('onTestEvent');
	  }
	};

	// TODO remove these when RN/www gets updated
	ReactDebugTool.addDevtool = ReactDebugTool.addHook;
	ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

	ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	ReactDebugTool.addHook(ReactComponentTreeHook);
	ReactDebugTool.addHook(ReactChildrenMutationWarningHook);
	var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	if (/[?&]react_perf\b/.test(url)) {
	  ReactDebugTool.beginProfiling();
	}

	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningHook
	 */

	'use strict';

	var warning = __webpack_require__(318);

	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}

	var ReactInvalidSetStateWarningHook = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};

	module.exports = ReactInvalidSetStateWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(319);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 319 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 320 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactHostOperationHistoryHook
	 */

	'use strict';

	var history = [];

	var ReactHostOperationHistoryHook = {
	  onHostOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactHostOperationHistoryHook._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }

	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};

	module.exports = ReactHostOperationHistoryHook;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(322);

	var ReactCurrentOwner = __webpack_require__(323);

	var invariant = __webpack_require__(324);
	var warning = __webpack_require__(318);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },


	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 322 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildrenMutationWarningHook
	 */

	'use strict';

	var ReactComponentTreeHook = __webpack_require__(321);

	var warning = __webpack_require__(318);

	function handleElement(debugID, element) {
	  if (element == null) {
	    return;
	  }
	  if (element._shadowChildren === undefined) {
	    return;
	  }
	  if (element._shadowChildren === element.props.children) {
	    return;
	  }
	  var isMutated = false;
	  if (Array.isArray(element._shadowChildren)) {
	    if (element._shadowChildren.length === element.props.children.length) {
	      for (var i = 0; i < element._shadowChildren.length; i++) {
	        if (element._shadowChildren[i] !== element.props.children[i]) {
	          isMutated = true;
	        }
	      }
	    } else {
	      isMutated = true;
	    }
	  }
	  if (!Array.isArray(element._shadowChildren) || isMutated) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Component\'s children should not be mutated.%s', ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	  }
	}

	var ReactChildrenMutationWarningHook = {
	  onMountComponent: function (debugID) {
	    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	  },
	  onUpdateComponent: function (debugID) {
	    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	  }
	};

	module.exports = ReactChildrenMutationWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(327);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(314);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(329);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 329 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */

	'use strict';

	var CSSProperty = __webpack_require__(313);
	var warning = __webpack_require__(318);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      // Allow '0' to pass through without warning. 0 is already special and
	      // doesn't require units, so we don't need to warn about it.
	      if (component && value !== '0') {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(332);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 332 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 333 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },
/* 335 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var animations = ['\n@-webkit-keyframes belle-button-focus {\n0% { box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n99% { box-shadow: 0 0 0 8px #fff }\n100% { box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n@-webkit-keyframes belle-toggle-focus {\n0% { box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n99% { box-shadow: 0 0 0 8px #fff }\n100% { box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n@-webkit-keyframes belle-rating-focus {\n0% { background: rgba(140, 224, 255, 0); box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n25% { background: rgba(140, 224, 255, 0.15) }\n99% { background: transparent; box-shadow: 0 0 0 8px #fff }\n100% { background: transparent; box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n\n@keyframes belle-button-focus {\n0% { box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n99% { box-shadow: 0 0 0 8px #fff }\n100% { box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n@keyframes belle-toggle-focus {\n0% { box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n99% { box-shadow: 0 0 0 8px #fff }\n100% { box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n@keyframes belle-rating-focus {\n0% { background: rgba(140, 224, 255, 0); box-shadow: 0 0 0 0 rgba(140, 224, 255, 1); }\n25% { background: rgba(140, 224, 255, 0.15) }\n99% { background: transparent; box-shadow: 0 0 0 8px #fff }\n100% { background: transparent; box-shadow: 0 0 0 0 rgba(0, 131, 180, 0); }\n}\n@-webkit-keyframes belle-spinner-pulse {\n 0%,\n 90%,\n 100% {\n opacity: 0;\n }\n 50% {\n opacity: 1;\n }\n }\n @keyframes belle-spinner-pulse {\n 0%,\n 90%,\n 100% {\n opacity: 0;\n }\n 50% {\n opacity: 1;\n }\n }'];

	exports.default = animations;

/***/ },
/* 336 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var buttonConfig = {
	  preventFocusStyleForTouchAndClick: true
	};

	exports.default = buttonConfig;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _card = __webpack_require__(338);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


	/**
	 * Card component with a light shadow.
	 *
	 * This component will apply any attribute to the div that has been provided as
	 * property & is valid for a div.
	 */

	var Card = function (_Component) {
	  _inherits(Card, _Component);

	  function Card(properties) {
	    _classCallCheck(this, Card);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, properties));

	    var style = properties.style;

	    var childProps = _objectWithoutProperties(properties, ['style']); // eslint-disable-line no-unused-vars


	    _this.childProps = childProps;
	    return _this;
	  }

	  _createClass(Card, [{
	    key: 'componentWillReceiveProps',


	    /**
	     * Update the childProps based on the updated properties passed to the card.
	     */
	    value: function componentWillReceiveProps(properties) {
	      var style = properties.style;

	      var childProps = _objectWithoutProperties(properties, ['style']); // eslint-disable-line no-unused-vars


	      this.childProps = childProps;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var divStyle = _extends({}, _card2.default.style, this.props.style);

	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.childProps, { style: divStyle }),
	        this.props.children
	      );
	    }
	  }]);

	  return Card;
	}(_react.Component);

	Card.displayName = 'Card';
	Card.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  style: _react.PropTypes.object
	};
	exports.default = Card;

/***/ },
/* 338 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cardStyle = {

	  style: {
	    marginBottom: 20,
	    padding: 40,
	    borderRadius: 2,
	    background: '#fff',
	    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
	    boxSizing: 'border-box'
	  }
	};

	exports.default = cardStyle;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Choice component
	 */

	var Choice = function (_Component) {
	  _inherits(Choice, _Component);

	  function Choice() {
	    _classCallCheck(this, Choice);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Choice).apply(this, arguments));
	  }

	  _createClass(Choice, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }]);

	  return Choice;
	}(_react.Component);

	Choice.displayName = 'Choice';
	Choice.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  value: _react.PropTypes.bool.isRequired
	};
	exports.default = Choice;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _helpers = __webpack_require__(308);

	var _option = __webpack_require__(341);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var optionPropTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  style: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  selectStyle: _react.PropTypes.object,
	  disabledSelectStyle: _react.PropTypes.object,
	  _isDisplayedAsSelected: _react.PropTypes.bool,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  identifier: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number])
	};

	/**
	 * Returns an object with properties that are relevant for the wrapping div.
	 */
	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(optionPropTypes));
	}

	/**
	 * Option component.
	 *
	 * This component should be used together with Belle's Select.
	 */

	var Option = function (_Component) {
	  _inherits(Option, _Component);

	  function Option(properties) {
	    _classCallCheck(this, Option);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Option).call(this, properties));

	    _this.state = {
	      childProps: sanitizeChildProps(properties)
	    };
	    return _this;
	  }

	  _createClass(Option, [{
	    key: 'componentWillReceiveProps',


	    /**
	     * Update the childProps based on the updated properties passed to the
	     * Option.
	     */
	    value: function componentWillReceiveProps(properties) {
	      this.setState({ childProps: sanitizeChildProps(properties) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var optionStyle = void 0;

	      if (this.props._isDisplayedAsSelected) {
	        optionStyle = _extends({}, _option2.default.selectStyle, this.props.selectStyle);
	        if (this.context.isDisabled) {
	          optionStyle = _extends({}, optionStyle, _option2.default.disabledSelectStyle, this.props.disabledSelectStyle);
	        }
	      } else {
	        optionStyle = _extends({}, _option2.default.style, this.props.style);
	        if (this.context.isHoveredValue === this.props.value) {
	          optionStyle = _extends({}, optionStyle, _option2.default.hoverStyle, this.props.hoverStyle);
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: optionStyle
	        }, this.state.childProps),
	        this.props.children
	      );
	    }
	  }]);

	  return Option;
	}(_react.Component);

	Option.displayName = 'Option';
	Option.propTypes = optionPropTypes;
	Option.contextTypes = {
	  isDisabled: _react.PropTypes.bool.isRequired,
	  isHoveredValue: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number])
	};
	Option.defaultProps = {
	  _isDisplayedAsSelected: false
	};
	exports.default = Option;

/***/ },
/* 341 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var optionStyle = {
	  style: {
	    boxSizing: 'border-box',
	    color: '#666',
	    cursor: 'pointer',
	    padding: 10,
	    fontSize: 15,
	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the option text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',
	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',
	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  hoverStyle: {
	    background: '#F5F5F5',
	    color: '#444'
	  },

	  selectStyle: {
	    boxSizing: 'border-box',
	    color: '#666',
	    padding: 0,
	    fontSize: 15,
	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',
	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',
	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  disabledSelectStyle: {
	    color: '#9F9F9F',
	    padding: 0
	  }
	};

	exports.default = optionStyle;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _helpers = __webpack_require__(308);

	var _placeholder = __webpack_require__(343);

	var _placeholder2 = _interopRequireDefault(_placeholder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var placeholderPropTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  style: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  _isDisabled: _react.PropTypes.bool
	};

	/**
	 * Returns an object with properties that are relevant for the wrapping div.
	 */
	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(placeholderPropTypes));
	}

	/**
	 * Placeholder component.
	 *
	 * This component should be used together with Belle's Select.
	 */

	var Placeholder = function (_Component) {
	  _inherits(Placeholder, _Component);

	  function Placeholder(properties) {
	    _classCallCheck(this, Placeholder);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Placeholder).call(this, properties));

	    _this.state = {
	      childProps: sanitizeChildProps(properties)
	    };
	    return _this;
	  }

	  _createClass(Placeholder, [{
	    key: 'componentWillReceiveProps',


	    /**
	     * Update the childProps based on the updated properties passed to the
	     * Placeholder.
	     */
	    value: function componentWillReceiveProps(properties) {
	      this.setState({ childProps: sanitizeChildProps(properties) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var computedStyle = _extends({}, _placeholder2.default.style, this.props.style);
	      if (this.props._isDisabled) {
	        computedStyle = _extends({}, computedStyle, _placeholder2.default.disabledStyle, this.props.disabledStyle);
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({ style: computedStyle }, this.state.childProps),
	        this.props.children
	      );
	    }
	  }]);

	  return Placeholder;
	}(_react.Component);

	Placeholder.displayName = 'Placeholder';
	Placeholder.propTypes = placeholderPropTypes;
	Placeholder.defaultProps = {
	  _isDisabled: false
	};
	exports.default = Placeholder;

/***/ },
/* 343 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var placeholderStyle = {
	  style: {
	    boxSizing: 'border-box',
	    color: '#666',
	    cursor: 'pointer',
	    padding: 0,
	    fontSize: 15,
	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',
	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',
	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  disabledStyle: {
	    color: '#9F9F9F',
	    cursor: 'not-allowed'
	  }
	};

	exports.default = placeholderStyle;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(300);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _helpers = __webpack_require__(308);

	var _exenv = __webpack_require__(334);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _injectStyle = __webpack_require__(311);

	var _select = __webpack_require__(345);

	var _select2 = _interopRequireDefault(_select);

	var _select3 = __webpack_require__(346);

	var _select4 = _interopRequireDefault(_select3);

	var _isComponentOfType = __webpack_require__(347);

	var _isComponentOfType2 = _interopRequireDefault(_isComponentOfType);

	var _Option = __webpack_require__(340);

	var _Option2 = _interopRequireDefault(_Option);

	var _Placeholder = __webpack_require__(342);

	var _Placeholder2 = _interopRequireDefault(_Placeholder);

	var _Separator = __webpack_require__(348);

	var _Separator2 = _interopRequireDefault(_Separator);

	var _SelectItem = __webpack_require__(350);

	var _SelectItem2 = _interopRequireDefault(_SelectItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Returns true if the provided property is a Placeholder component from Belle.
	 */
	function isPlaceholder(reactElement) {
	  return (0, _isComponentOfType2.default)(_Placeholder2.default, reactElement);
	}

	/**
	 * Returns true if the provided property is a Option component from Belle.
	 */
	function isOption(reactElement) {
	  return (0, _isComponentOfType2.default)(_Option2.default, reactElement);
	}

	/**
	 * Returns true if the provided property is a Separator component from Belle.
	 */
	function isSeparator(reactElement) {
	  return (0, _isComponentOfType2.default)(_Separator2.default, reactElement);
	}

	/**
	 * Verifies that the children is an array containing only Options & at maximum
	 * one Placeholder.
	 */
	function validateChildrenAreOptionsAndMaximumOnePlaceholder(props, propName, componentName) {
	  var validChildren = (0, _helpers.filterReactChildren)(props[propName], function (node) {
	    return isOption(node) || isSeparator(node) || isPlaceholder(node);
	  });
	  if (_react2.default.Children.count(props[propName]) !== _react2.default.Children.count(validChildren)) {
	    return new Error('Invalid children supplied to `' + componentName + '`, expected an Option, Separator or Placeholder component from Belle.');
	  }

	  var placeholders = (0, _helpers.filterReactChildren)(props[propName], function (node) {
	    return isPlaceholder(node);
	  });
	  if (_react2.default.Children.count(placeholders) > 1) {
	    return new Error('Invalid children supplied to `' + componentName + '`, expected only one Placeholder component.');
	  }

	  return undefined;
	}

	var selectPropTypes = {
	  children: validateChildrenAreOptionsAndMaximumOnePlaceholder,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.instanceOf(Date)]),
	  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number]),
	  onUpdate: _react.PropTypes.func,
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.string.isRequired,
	    requestChange: _react.PropTypes.func.isRequired
	  }),
	  className: _react.PropTypes.string,
	  shouldPositionOptions: _react.PropTypes.bool,
	  positionOptions: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  focusStyle: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  activeStyle: _react.PropTypes.object,
	  wrapperStyle: _react.PropTypes.object,
	  menuStyle: _react.PropTypes.object,
	  caretToOpenStyle: _react.PropTypes.object,
	  caretToCloseStyle: _react.PropTypes.object,
	  wrapperProps: _react.PropTypes.object,
	  menuProps: _react.PropTypes.object,
	  caretProps: _react.PropTypes.object,
	  disabled: _react.PropTypes.bool,
	  disabledStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,
	  disabledCaretToOpenStyle: _react.PropTypes.object,
	  id: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  onTouchCancel: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func
	};

	/**
	 * Update hover style for the speficied styleId.
	 *
	 * @param styleId {string} - a unique id that exists as class attribute in the DOM
	 * @param properties {object} - the components properties optionally containing hoverStyle
	 */
	function updatePseudoClassStyle(styleId, properties) {
	  var hoverStyle = _extends({}, _select2.default.hoverStyle, properties.hoverStyle);
	  var disabledHoverStyle = _extends({}, _select2.default.disabledHoverStyle, properties.disabledHoverStyle);

	  var styles = [{
	    id: styleId,
	    style: hoverStyle,
	    pseudoClass: 'hover'
	  }, {
	    id: styleId,
	    style: disabledHoverStyle,
	    pseudoClass: 'hover',
	    disabled: true
	  }];
	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * Returns true in case there one more element in the list.
	 */
	var hasNext = function hasNext(list, currentIndex) {
	  return currentIndex + 2 <= list.length;
	};

	/**
	 * Returns true in case there is one previous element in the list.
	 */
	var hasPrevious = function hasPrevious(list, currentIndex) {
	  return currentIndex - 1 >= 0;
	};

	/**
	 * Returns an object with properties that are relevant for the wrapping div of
	 * the selected option.
	 */
	function sanitizeSelectedOptionWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(selectPropTypes));
	}

	/**
	 * Returns an object with properties that are relevant for the wrapping div of
	 * the selected option.
	 */
	function sanitizeWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'ref', 'tabIndex', 'onKeyDown', 'onBlur', 'onFocus']);
	}

	/**
	 * Returns an object with properties that are relevant for the wrapping div of
	 * the selected option.
	 */
	function sanitizeMenuProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'ref', 'aria-labelledby', 'role']);
	}

	/**
	 * Returns an object with properties that are relevant for the wrapping div of
	 * the selected option.
	 */
	function sanitizeCaretProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'ref']);
	}

	/**
	 * Select component.
	 *
	 * In its simplest form the select component behaves almost identical to the
	 * native HTML select which the exception that it comes with beautiful styles.
	 *
	 * Example:
	 *
	 *     <Select defaultValue="rome">
	 *       <Option value="vienna">Vienna</Option>
	 *       <Option value="rome">Rome</Option>
	 *     </Select>
	 *
	 * For more advanced examples please see:
	 * nikgraf.github.io/belle/#/component/select
	 *
	 * This component was inpired by:
	 * - Jet Watson: https://github.com/JedWatson/react-select
	 * - Instructure React Team: https://github.com/instructure-react/react-select-box
	 */

	var Select = function (_Component) {
	  _inherits(Select, _Component);

	  /*
	   * Initialize the component based on the provided properties.
	   *
	   * By default the Select is closed & the focused option in case the user opens
	   * it will be the selected option.
	   */

	  function Select(properties) {
	    _classCallCheck(this, Select);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, properties));

	    _this._onTouchStartAtOption = function (event, index) {
	      if (event.touches.length === 1) {
	        _this._touchStartedAt = _this._getValueForIndex(index);

	        // save the scroll position
	        var menuNode = _reactDom2.default.findDOMNode(_this.refs.menu);
	        if (menuNode.scrollHeight > menuNode.offsetHeight) {
	          _this._scrollTopPosition = menuNode.scrollTop;

	          // Note: don't use setState in here as it would prevent the scrolling
	        } else {
	            _this._scrollTopPosition = 0;
	            _this.setState({ focusedOptionValue: _this._touchStartedAt });
	          }

	        // reset interaction
	        _this._scrollActive = false;
	      }
	    };

	    _this._onTouchMoveAtOption = function () {
	      var menuNode = _reactDom2.default.findDOMNode(_this.refs.menu);
	      if (menuNode.scrollTop !== _this._scrollTopPosition) {
	        _this._scrollActive = true;
	      }
	    };

	    _this._onTouchEndAtOption = function (event, index) {
	      if (_this._touchStartedAt && !_this._scrollActive) {
	        var value = _this._getValueForIndex(index);
	        if (_this._touchStartedAt === value) {
	          event.preventDefault();
	          _this._triggerChange(value);
	        }
	      }

	      _this._touchStartedAt = undefined;
	    };

	    _this._onTouchCancelAtOption = function () {
	      _this._touchStartedAt = undefined;
	    };

	    _this._onClickAtOption = function (index) {
	      _this._triggerChange(_this._getValueForIndex(index));
	    };

	    _this._onBlur = function (event) {
	      _this.setState({
	        isOpen: false,
	        isFocused: false
	      });

	      if (_this.props.wrapperProps && _this.props.wrapperProps.onBlur) {
	        _this.props.wrapperProps.onBlur(event);
	      }
	    };

	    _this._onFocus = function (event) {
	      _this.setState({
	        isFocused: true
	      });

	      if (_this.props.wrapperProps && _this.props.wrapperProps.onFocus) {
	        _this.props.wrapperProps.onFocus(event);
	      }
	    };

	    _this._onMouseEnterAtOption = function (index) {
	      _this.setState({
	        focusedOptionValue: _this._getValueForIndex(index)
	      });
	    };

	    _this._onTouchStartToggleMenu = function (event) {
	      if (event.touches.length === 1) {
	        _this.setState({ isTouchedToToggle: true, isActive: true });
	      } else {
	        _this.setState({ isTouchedToToggle: false });
	      }

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    };

	    _this._onTouchEndToggleMenu = function (event) {
	      // In case touch events are used preventDefault is applied to avoid
	      // triggering the click event which would cause trouble for toggling.
	      // In any case calling setState triggers a render. This leads to the fact
	      // that the click event won't be triggered anyways. Nik assumes it's due the
	      // element won't be in the DOM anymore.
	      // This also means the Select's onClick won't be triggered for touchDevices.
	      event.preventDefault();

	      /* To avoid weird behaviour we check before focusing again - no specific use-case found */
	      var wrapperNode = _reactDom2.default.findDOMNode(_this.refs.wrapper);
	      if (document.activeElement !== wrapperNode) {
	        wrapperNode.focus();
	      }

	      if (_this.state.isTouchedToToggle) {
	        if (_this.state.isOpen) {
	          _this.setState({ isOpen: false });
	        } else {
	          _this.setState({ isOpen: true });
	        }
	      }

	      _this.setState({ isTouchedToToggle: false, isActive: false });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    };

	    _this._onTouchCancelToggleMenu = function (event) {
	      _this.setState({ isTouchedToToggle: false, isActive: false });

	      if (_this.props.onTouchCancel) {
	        _this.props.onTouchCancel(event);
	      }
	    };

	    _this._onMouseDown = function (event) {
	      _this.setState({ isActive: true });

	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    };

	    _this._onMouseUp = function (event) {
	      _this.setState({ isActive: false });

	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    };

	    _this._onMouseUpOnDocument = function () {
	      _this.setState({ isActive: false });
	    };

	    _this._onContextMenu = function () {
	      _this.setState({ isActive: false });
	    };

	    _this._onArrowDownKeyDown = function () {
	      if (_this.state.focusedOptionValue !== void 0) {
	        var indexOfFocusedOption = _this._getIndexOfFocusedOption();

	        if (hasNext(_this.options, indexOfFocusedOption)) {
	          _this.setState({
	            focusedOptionValue: _this.options[indexOfFocusedOption + 1].props.value
	          });
	        }
	      } else {
	        _this.setState({
	          focusedOptionValue: (0, _helpers.first)(_this.options).props.value
	        });
	      }
	    };

	    _this._onArrowUpKeyDown = function () {
	      if (_this.state.focusedOptionValue !== void 0) {
	        var indexOfFocusedOption = _this._getIndexOfFocusedOption();

	        if (hasPrevious(_this.options, indexOfFocusedOption)) {
	          _this.setState({
	            focusedOptionValue: _this.options[indexOfFocusedOption - 1].props.value
	          });
	        }
	      } else {
	        _this.setState({
	          focusedOptionValue: (0, _helpers.last)(_this.options).props.value
	        });
	      }
	    };

	    _this._onEnterOrSpaceKeyDown = function () {
	      _this._triggerChange(_this.state.focusedOptionValue);
	    };

	    _this._onKeyDown = function (event) {
	      if (!_this.props.disabled) {
	        if (!(0, _helpers.isEmpty)(_this.options)) {
	          if (!_this.state.isOpen) {
	            if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === ' ') {
	              event.preventDefault();
	              _this.setState({ isOpen: true });
	            }
	          } else {
	            // Updates the state to set focus on the next option
	            // In case no option is active it should jump to the first.
	            // In case it is the last it should stop there.
	            if (event.key === 'ArrowDown') {
	              event.preventDefault();
	              _this._onArrowDownKeyDown();
	            } else if (event.key === 'ArrowUp') {
	              event.preventDefault();
	              _this._onArrowUpKeyDown();
	            } else if (event.key === 'Enter' || event.key === ' ') {
	              event.preventDefault();
	              _this._onEnterOrSpaceKeyDown();
	            }
	          }

	          if (event.key === 'Escape') {
	            event.preventDefault();
	            _this.setState({ isOpen: false });
	          }
	        }
	      }

	      if (_this.props.wrapperProps && _this.props.wrapperProps.onKeyDown) {
	        _this.props.wrapperProps.onKeyDown(event);
	      }
	    };

	    _this._onClickToggleMenu = function (event) {
	      if (!_this.props.disabled) {
	        if (_this.state.isOpen) {
	          _this.setState({ isOpen: false });
	        } else {
	          _this.setState({ isOpen: true });
	        }
	      }

	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    };

	    var selectedValue = void 0;
	    var focusedOptionValue = void 0;

	    if (properties.children) {
	      _this.children = (0, _helpers.flattenReactChildren)(properties.children);
	      _this.options = (0, _helpers.filter)(_this.children, isOption);
	    }

	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      selectedValue = properties.valueLink.value;
	      focusedOptionValue = selectedValue;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      selectedValue = properties.value;
	      focusedOptionValue = selectedValue;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      selectedValue = properties.defaultValue;
	      focusedOptionValue = selectedValue;
	    } else if (!(0, _helpers.isEmpty)(_this.children) && !(0, _helpers.some)(_this.children, isPlaceholder)) {
	      var firstOption = (0, _helpers.first)(_this.options);
	      selectedValue = firstOption ? firstOption.props.value : void 0;
	      focusedOptionValue = selectedValue;
	    } else if (!(0, _helpers.isEmpty)(_this.children)) {
	      var _firstOption = (0, _helpers.first)(_this.options);
	      focusedOptionValue = _firstOption ? _firstOption.props.value : void 0;
	    }

	    _this.state = {
	      isOpen: false,
	      isFocused: false,
	      selectedValue: selectedValue,
	      focusedOptionValue: focusedOptionValue,
	      selectedOptionWrapperProps: sanitizeSelectedOptionWrapperProps(properties),
	      wrapperProps: sanitizeWrapperProps(properties.wrapperProps),
	      menuProps: sanitizeMenuProps(properties.menuProps),
	      caretProps: sanitizeCaretProps(properties.caretProps),
	      isTouchedToToggle: false
	    };
	    return _this;
	  }

	  _createClass(Select, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        isDisabled: this.props.disabled,
	        isHoveredValue: this.state.focusedOptionValue
	      };
	    }

	    /**
	     * Generates the style-id & inject the focus & hover style.
	     */

	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();

	      // Note: To ensure server side rendering creates the same results React's internal
	      // id for this element is leveraged.
	      this.selectedOptionWrapperId = this.props.id ? this.props.id : 'belle-select-id-' + id;
	      this._styleId = 'style-id' + id;
	      updatePseudoClassStyle(this._styleId, this.props);

	      if (_exenv.canUseDOM) {
	        this.mouseUpOnDocumentCallback = this._onMouseUpOnDocument;
	        document.addEventListener('mouseup', this.mouseUpOnDocumentCallback);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      if (properties.children) {
	        this.children = (0, _helpers.flattenReactChildren)(properties.children);
	        this.options = (0, _helpers.filter)(this.children, isOption);
	      }

	      var newState = {
	        selectedOptionWrapperProps: sanitizeSelectedOptionWrapperProps(properties),
	        wrapperProps: sanitizeWrapperProps(properties.wrapperProps),
	        menuProps: sanitizeMenuProps(properties.menuProps),
	        caretProps: sanitizeCaretProps(properties.caretProps)
	      };

	      if ((0, _helpers.has)(properties, 'valueLink')) {
	        newState.selectedValue = properties.valueLink.value;
	        newState.focusedOptionValue = properties.valueLink.value;
	      } else if ((0, _helpers.has)(properties, 'value')) {
	        newState.selectedValue = properties.value;
	        newState.focusedOptionValue = properties.value;
	      }

	      this.setState(newState);
	      (0, _injectStyle.removeStyle)(this._styleId);
	      updatePseudoClassStyle(this._styleId, properties);
	    }

	    /**
	     * In case shouldPositionOptions is active the scrollTop position is stored
	     * to be applied later on. The menu is hidden to make sure it is
	     * not displayed beofre repositioned.
	     */

	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProperties, nextState) {
	      var shouldPositionOptions = (0, _helpers.has)(nextProperties, 'shouldPositionOptions') ? nextProperties.shouldPositionOptions : _select4.default.shouldPositionOptions;

	      if (shouldPositionOptions) {
	        var menuNode = _reactDom2.default.findDOMNode(this.refs.menu);
	        this.cachedMenuScrollTop = menuNode.scrollTop;

	        if (!this.state.isOpen && nextState.isOpen) {
	          menuNode.style.display = 'none';
	        }
	      }
	    }

	    /**
	     * In case shouldPositionOptions is active when opening the menu it is
	     * repositioned & switched to be visible.
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(previousProperties, previousState) {
	      var shouldPositionOptions = (0, _helpers.has)(this.props, 'shouldPositionOptions') ? this.props.shouldPositionOptions : _select4.default.shouldPositionOptions;

	      if (shouldPositionOptions && !this.props.disabled) {
	        var menuNode = _reactDom2.default.findDOMNode(this.refs.menu);

	        // the menu was just opened
	        if (!previousState.isOpen && this.state.isOpen && this.children && this.children.length > 0) {
	          var positionOptions = (0, _helpers.has)(this.props, 'positionOptions') ? this.props.positionOptions : _select4.default.positionOptions;
	          positionOptions(this);

	          // restore the old scrollTop position
	        } else {
	            menuNode.scrollTop = this.cachedMenuScrollTop;
	          }

	        var separators = (0, _helpers.filter)(this.children, isSeparator);
	        var childrenPresent = !(0, _helpers.isEmpty)(this.options) || !(0, _helpers.isEmpty)(separators);
	        if (!previousState.isOpen && this.state.isOpen && childrenPresent) {
	          var menuStyle = _extends({}, _select2.default.menuStyle, this.props.menuStyle);
	          menuNode.style.display = menuStyle.display;
	        }
	      }
	    }

	    /**
	     * Remove a component's associated styles whenever it gets removed from the DOM.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeStyle)(this._styleId);
	      if (_exenv.canUseDOM) {
	        document.removeEventListener('mouseup', this.mouseUpOnDocumentCallback);
	      }
	    }

	    /**
	     * Update the focusedOption based on Option the user is touching.
	     *
	     * Unfortunately updating the focusedOption only works in case the menu
	     * is not scrollable.
	     * If a setState would be triggered during a touch with the intention to
	     * scroll the setState would trigger a re-render & prevent the scrolling.
	     */


	    /**
	     * Identifies if the menu is scrollable.
	     */


	    /**
	     * Triggers a change event after the user touched on an Option.
	     */


	    /**
	     * Triggers a change event after the user touched on an Option.
	     */


	    /**
	     * Triggers a change event after the user clicked on an Option.
	     */


	    /**
	     * In order to inform the user which element in the document is active the
	     * component keeps track of when it's de-selected and depending on that
	     * close the menu.
	     */


	    /**
	     * In order to inform the user which element in the document is active the
	     * component keeps track of when it's de-selected and depending on that
	     * close the menu.
	     */


	    /**
	     * In order to inform the user which Option is active the component keeps
	     * track of when an option is in focus by the user and depending on that
	     * provide a visual indicator.
	     */


	    /**
	     * Initiate the toggle for the menu.
	     */


	    /**
	     * Toggle the menu after a user touched it & resets the pressed state
	     * for to toggle.
	     */


	    /**
	     * Reset the precondition to initialize a toggle of the menu.
	     */


	    /**
	     * Set isActive to true on mouse-down.
	     */


	    /**
	     * Set isActive to false on mouse-up.
	     */


	    /**
	     * Set isActive to false on mouse-up.
	     */


	    /**
	     * Set isActive to false on is context menu opens on select's div.
	     */


	    /**
	     * Update focus for the options for an already open menu.
	     *
	     * The user experience of HTML's native select is good and the goal here is to
	     * achieve the same behaviour.
	     *
	     * - Focus on the first entry in case no options is focused on.
	     * - Switch focus to the next option in case one option already has focus.
	     */


	    /**
	     * Update focus for the options for an already open menu.
	     *
	     * The user experience of HTML's native select is good and the goal here is to
	     * achieve the same behaviour.
	     *
	     * - Focus on the last entry in case no options is focused on.
	     * - Switch focus to the previous option in case one option already has focus.
	     */


	    /**
	     * After the user pressed the `Enter` or `Space` key for an already open
	     * menu the focused option is selected.
	     *
	     * Same as _onClickAtOption this update the state & dispatches a change event.
	     */


	    /**
	     * Manages the keyboard events.
	     *
	     * In case the Select is in focus, but closed ArrowDown, ArrowUp, Enter and
	     * Space will result in opening the menu.
	     *
	     * In case the menu is already open each key press will have
	     * different effects already documented in the related methods.
	     *
	     * Pressing Escape will close the menu.
	     */


	    /**
	     * Toggle the menu after a user clicked on it.
	     */

	  }, {
	    key: '_getIndexOfFocusedOption',


	    /**
	     * Returns the index of the entry with a certain value from the component's
	     * children.
	     *
	     * The index search includes only option components.
	     */
	    value: function _getIndexOfFocusedOption() {
	      var _this2 = this;

	      return (0, _helpers.findIndex)(this.options, function (element) {
	        return element.props.value === _this2.state.focusedOptionValue;
	      });
	    }

	    /**
	     * Returns the value of the child with a certain index.
	     */

	  }, {
	    key: '_getValueForIndex',
	    value: function _getValueForIndex(index) {
	      return this.options[index].props.value;
	    }

	    /**
	     * After an option has been selected the menu gets closed and the
	     * selection processed.
	     *
	     * Depending on the component's properties the value gets updated and the
	     * provided change callback for onUpdate or valueLink is called.
	     */

	  }, {
	    key: '_triggerChange',
	    value: function _triggerChange(value) {
	      if ((0, _helpers.has)(this.props, 'valueLink')) {
	        this.props.valueLink.requestChange(value);
	        this.setState({
	          isOpen: false
	        });
	      } else if ((0, _helpers.has)(this.props, 'value')) {
	        this.setState({
	          isOpen: false
	        });
	      } else {
	        this.setState({
	          focusedOptionValue: value,
	          selectedValue: value,
	          isOpen: false
	        });
	      }

	      if (this.props.onUpdate) {
	        this.props.onUpdate({ value: value });
	      }
	    }
	  }, {
	    key: '_renderChildren',
	    value: function _renderChildren() {
	      var _this3 = this;

	      var optionsIndex = 0;

	      return _react2.default.Children.map(this.children, function (entry, index) {
	        if (isOption(entry)) {
	          // filter out all non-Option Components
	          var localOptionIndex = optionsIndex;
	          var isHovered = entry.props.value === _this3.state.focusedOptionValue;
	          var element = _react2.default.createElement(
	            _SelectItem2.default,
	            {
	              onItemClick: _this3._onClickAtOption,
	              onItemTouchStart: _this3._onTouchStartAtOption,
	              onItemTouchMove: _this3._onTouchMoveAtOption,
	              onItemTouchEnd: _this3._onTouchEndAtOption,
	              onItemTouchCancel: _this3._onTouchCancelAtOption,
	              onItemMouseEnter: _this3._onMouseEnterAtOption,
	              isHovered: isHovered,
	              index: localOptionIndex,
	              key: index
	            },
	            entry
	          );
	          optionsIndex++;

	          return element;
	        } else if (isSeparator(entry)) {
	          return _react2.default.createElement(
	            'li',
	            {
	              key: index,
	              role: 'presentation'
	            },
	            entry
	          );
	        }

	        return null;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var defaultStyle = _extends({}, _select2.default.style, this.props.style);
	      var hoverStyle = _extends({}, defaultStyle, _select2.default.hoverStyle, this.props.hoverStyle);
	      var focusStyle = _extends({}, defaultStyle, _select2.default.focusStyle, this.props.focusStyle);
	      var activeStyle = _extends({}, defaultStyle, _select2.default.activeStyle, this.props.activeStyle);
	      var disabledStyle = _extends({}, defaultStyle, _select2.default.disabledStyle, this.props.disabledStyle);
	      var disabledHoverStyle = _extends({}, disabledStyle, _select2.default.disabledHoverStyle, this.props.disabledHoverStyle);
	      var menuStyle = _extends({}, _select2.default.menuStyle, this.props.menuStyle);
	      var caretToCloseStyle = _extends({}, _select2.default.caretToCloseStyle, this.props.caretToCloseStyle);
	      var caretToOpenStyle = _extends({}, _select2.default.caretToOpenStyle, this.props.caretToOpenStyle);
	      var disabledCaretToOpenStyle = _extends({}, caretToOpenStyle, _select2.default.disabledCaretToOpenStyle, this.props.disabledCaretToOpenStyle);
	      var wrapperStyle = _extends({}, _select2.default.wrapperStyle, this.props.wrapperStyle);

	      var selectedOptionOrPlaceholder = void 0;
	      if (this.state.selectedValue !== void 0) {
	        var selectedEntry = (0, _helpers.find)(this.children, function (entry) {
	          return entry.props.value === _this4.state.selectedValue;
	        });

	        if (selectedEntry) {
	          selectedOptionOrPlaceholder = _react2.default.cloneElement(selectedEntry, {
	            _isDisplayedAsSelected: true
	          });
	        }
	      } else {
	        selectedOptionOrPlaceholder = (0, _helpers.find)(this.children, isPlaceholder);
	      }

	      var separators = (0, _helpers.filter)(this.children, isSeparator);
	      var childrenNotPresent = (0, _helpers.isEmpty)(this.options) && (0, _helpers.isEmpty)(separators);
	      var computedMenuStyle = this.props.disabled || !this.state.isOpen || childrenNotPresent ? { display: 'none' } : menuStyle;
	      var hasCustomTabIndex = this.props.wrapperProps && this.props.wrapperProps.tabIndex;
	      var tabIndex = hasCustomTabIndex ? this.props.wrapperProps.tabIndex : '0';

	      var selectedOptionWrapperStyle = void 0;
	      if (this.props.disabled) {
	        if (this.state.isTouchedToToggle) {
	          selectedOptionWrapperStyle = disabledHoverStyle;
	        } else {
	          selectedOptionWrapperStyle = disabledStyle;
	        }

	        tabIndex = -1;
	      } else {
	        if (this.state.isActive) {
	          selectedOptionWrapperStyle = activeStyle;
	        } else if (this.state.isFocused) {
	          selectedOptionWrapperStyle = focusStyle;
	        } else if (this.state.isTouchedToToggle) {
	          selectedOptionWrapperStyle = hoverStyle;
	        } else {
	          selectedOptionWrapperStyle = defaultStyle;
	        }
	      }

	      var caretStyle = void 0;
	      if (this.props.disabled) {
	        caretStyle = disabledCaretToOpenStyle;
	      } else if (this.state.isOpen) {
	        caretStyle = caretToCloseStyle;
	      } else {
	        caretStyle = caretToOpenStyle;
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: wrapperStyle,
	          tabIndex: tabIndex,
	          onKeyDown: this._onKeyDown,
	          onBlur: this._onBlur,
	          onFocus: this._onFocus,
	          ref: 'wrapper'
	        }, this.state.wrapperProps),
	        _react2.default.createElement(
	          'div',
	          _extends({
	            onClick: this._onClickToggleMenu,
	            onTouchStart: this._onTouchStartToggleMenu,
	            onTouchEnd: this._onTouchEndToggleMenu,
	            onTouchCancel: this._onTouchCancelToggleMenu,
	            onContextMenu: this._onContextMenu,
	            onMouseDown: this._onMouseDown,
	            onMouseUp: this._onMouseUp,
	            style: selectedOptionWrapperStyle,
	            className: (0, _unionClassNames2.default)(this.props.className, this._styleId),
	            ref: 'selectedOptionWrapper',
	            role: 'button',
	            'aria-expanded': this.state.isOpen,
	            id: this.selectedOptionWrapperId
	          }, this.state.selectedOptionWrapperProps),
	          selectedOptionOrPlaceholder,
	          _react2.default.createElement('span', _extends({
	            style: caretStyle
	          }, this.state.caretProps))
	        ),
	        _react2.default.createElement(
	          'ul',
	          _extends({
	            style: computedMenuStyle,
	            role: 'listbox',
	            'aria-labelledby': this.selectedOptionWrapperId,
	            ref: 'menu'
	          }, this.state.menuProps),
	          this._renderChildren()
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react.Component);

	Select.displayName = 'Select';
	Select.propTypes = selectPropTypes;
	Select.childContextTypes = {
	  isDisabled: _react.PropTypes.bool.isRequired,
	  isHoveredValue: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number])
	};
	Select.defaultProps = {
	  disabled: false
	};
	exports.default = Select;

/***/ },
/* 345 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var selectStyle = {
	  style: {
	    borderBottom: '1px solid #CCC',
	    boxSizing: 'border-box',
	    cursor: 'pointer',
	    /*
	    While the Select should have the same padding as TextInput 4px for
	    paddingBottom was chosen as in Chrome the Text is larger by 1px than in
	    the textarea.
	     */
	    padding: '7px 0 4px 0',
	    position: 'relative',

	    /* animations */
	    transition: 'border-bottom 0.2s',
	    transitionTimingFunction: 'ease-out',

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  focusStyle: {
	    borderBottom: '1px solid #6EB8D4'
	  },

	  activeStyle: {
	    borderBottom: '1px solid #6EB8D4'
	  },

	  hoverStyle: {
	    borderBottom: '1px solid #92D6EF'
	  },

	  wrapperStyle: {
	    outline: 0, // to avoid default focus behaviour
	    boxSizing: 'border-box',
	    position: 'relative'
	  },

	  disabledStyle: {
	    borderBottom: '1px dotted #9F9F9F'
	  },

	  disabledHoverStyle: {
	    borderBottom: '1px dotted #92D6EF',
	    cursor: 'not-allowed'
	  },

	  menuStyle: {
	    display: 'block',
	    listStyleType: 'none',
	    background: '#FFF',
	    padding: '6px 0',
	    margin: 0,
	    position: 'absolute',
	    width: '100%',
	    zIndex: 10000,
	    boxSizing: 'border-box',
	    borderRadius: 2,
	    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
	    borderTop: '1px solid #f2f2f2',
	    top: 0,
	    /* Improve scrolling for mobile Safari */
	    WebkitOverflowScrolling: 'touch'
	  },

	  caretToOpenStyle: {
	    height: 0,
	    width: 0,
	    content: '-', // Avoid this warning: was passed a numeric string value for CSS property `content` (value: ` `)
	    position: 'absolute',
	    top: 15,
	    right: 8,
	    borderTop: '6px solid #666',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent'
	  },

	  caretToCloseStyle: {
	    height: 0,
	    width: 0,
	    content: '-', // Avoid this warning: was passed a numeric string value for CSS property `content` (value: ` `)
	    position: 'absolute',
	    top: 15,
	    right: 8,
	    borderBottom: '6px solid #666',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent'
	  },

	  disabledCaretToOpenStyle: {
	    borderTop: '6px solid #9F9F9F'
	  }
	};

	exports.default = selectStyle;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(300);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _isComponentOfType = __webpack_require__(347);

	var _isComponentOfType2 = _interopRequireDefault(_isComponentOfType);

	var _helpers = __webpack_require__(308);

	var _Option = __webpack_require__(340);

	var _Option2 = _interopRequireDefault(_Option);

	var _Separator = __webpack_require__(348);

	var _Separator2 = _interopRequireDefault(_Separator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns the index of the entry with a certain value from the component's
	 * children.
	 *
	 * The index search includes separator & option components.
	 */
	var findIndexOfSelectedOption = function findIndexOfSelectedOption(component) {
	  var filterFunction = function filterFunction(child) {
	    return (0, _isComponentOfType2.default)(_Option2.default, child) || (0, _isComponentOfType2.default)(_Separator2.default, child);
	  };
	  return (0, _helpers.findIndex)((0, _helpers.filterReactChildren)(component.props.children, filterFunction), function (element) {
	    return element.props.value === component.state.selectedValue;
	  });
	};

	var selectConfig = {

	  shouldPositionOptions: true,

	  /**
	   * Repositions to the menu to position the focusedOption right on top
	   * of the selected one.
	   *
	   * @param selectComponent {object} - the Select component itself accessible with `this`
	   */
	  positionOptions: function positionOptions(selectComponent) {
	    var menuNode = _reactDom2.default.findDOMNode(selectComponent.refs.menu);
	    var menuStyle = window.getComputedStyle(menuNode, null);
	    var menuWidth = parseFloat(menuStyle.getPropertyValue('width'));

	    // In case of a placeholder no option is focused on initially
	    var optionIndex = void 0;
	    if (selectComponent.state.selectedValue) {
	      optionIndex = findIndexOfSelectedOption(selectComponent);
	    } else {
	      optionIndex = 0;
	    }

	    var option = menuNode.childNodes[optionIndex];

	    var menuHeight = parseFloat(menuStyle.getPropertyValue('height'));
	    var menuTopBorderWidth = parseFloat(menuStyle.getPropertyValue('border-top-width'));

	    // In order to work with legacy browsers the second paramter for pseudoClass
	    // has to be provided http://caniuse.com/#feat=getcomputedstyle
	    var optionStyle = window.getComputedStyle(option.childNodes[0], null);
	    var optionPaddingTop = parseFloat(optionStyle.getPropertyValue('padding-top'));
	    var optionPaddingLeft = parseFloat(optionStyle.getPropertyValue('padding-top'));

	    var selectedOptionWrapperNode = _reactDom2.default.findDOMNode(selectComponent.refs.selectedOptionWrapper);
	    var selectedOptionWrapperStyle = window.getComputedStyle(selectedOptionWrapperNode, null);
	    var selectedOptionWrapperPaddingTop = parseFloat(selectedOptionWrapperStyle.getPropertyValue('padding-top'));

	    var newTop = option.offsetTop + optionPaddingTop - selectedOptionWrapperPaddingTop + menuTopBorderWidth;
	    var newLeft = option.offsetLeft + optionPaddingLeft;

	    // Top positioning
	    if (menuHeight < menuNode.scrollHeight) {
	      if (newTop + menuHeight > menuNode.scrollHeight) {
	        // In case scrolling is not enough the box needs to be moved more to
	        // the top to match the same position.
	        var maxScrollTop = menuNode.scrollHeight - menuHeight;
	        menuNode.scrollTop = maxScrollTop;
	        menuNode.style.top = '-' + (newTop - maxScrollTop) + 'px';
	      } else {
	        // In case it's the first entry scrolling is not used to respect the
	        // menu's paddingTop.
	        if (optionIndex === 0) {
	          menuNode.scrollTop = 0;
	          menuNode.style.top = '-' + newTop + 'px';
	        } else {
	          menuNode.scrollTop = newTop;
	        }
	      }
	    } else {
	      menuNode.style.top = '-' + newTop + 'px';
	    }

	    // Left positioning
	    menuNode.style.left = '-' + newLeft + 'px';

	    // Increasing the width
	    //
	    // Pro:
	    // - It gives a option in the menu the same width
	    // as in the selectedOptionWrapper.
	    // - There is space to keep the text of the option on the exact same pixel
	    // when opening. The menu is symetric in relation to the
	    // selectedOptionWrapper.
	    //
	    // Con:
	    // - Adding the padding could cause issue with design as it gets wider than
	    // the original field.
	    menuNode.style.width = menuWidth + newLeft * 2 + 'px';
	  }
	};

	exports.default = selectConfig;

/***/ },
/* 347 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isComponentOfType;
	/**
	 * Returns true if the provided element is a component of the provided type.
	 *
	 * @param classType {ReactElement class} - the class of a React Element
	 * @param reactElement {ReactElement} - any React Element (not a real DOM node)
	 *
	 * @example
	 * // Checks if the component is an Autocomplete
	 * isComponentType(Autocomplete, this.props.children[0]);
	 */
	function isComponentOfType(classType, reactElement) {
	  return reactElement && reactElement.type === classType;
	}

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _helpers = __webpack_require__(308);

	var _separator = __webpack_require__(349);

	var _separator2 = _interopRequireDefault(_separator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var separatorPropTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  style: _react.PropTypes.object
	};

	/**
	 * Returns an object with properties that are relevant for the wrapping div.
	 */
	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(separatorPropTypes));
	}

	/**
	 * Separator component.
	 *
	 * This component should be used together with Belle's Select.
	 */

	var Separator = function (_Component) {
	  _inherits(Separator, _Component);

	  function Separator(properties) {
	    _classCallCheck(this, Separator);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Separator).call(this, properties));

	    _this.state = {
	      childProps: sanitizeChildProps(properties)
	    };
	    return _this;
	  }

	  _createClass(Separator, [{
	    key: 'componentWillReceiveProps',


	    /**
	     * Update the childProperties based on the updated properties passed to the
	     * Separator.
	     */
	    value: function componentWillReceiveProps(properties) {
	      this.setState({ childProps: sanitizeChildProps(properties) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var computedStyle = _extends({}, _separator2.default.style, this.props.style);

	      return _react2.default.createElement(
	        'div',
	        _extends({ style: computedStyle }, this.state.childProps),
	        this.props.children
	      );
	    }
	  }]);

	  return Separator;
	}(_react.Component);

	Separator.displayName = 'Separator';
	Separator.propTypes = separatorPropTypes;
	exports.default = Separator;

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var separatorStyle = {
	  style: {
	    boxSizing: 'border-box',
	    color: '#666',
	    fontWeight: 'bold',
	    padding: 10
	  }
	};

	exports.default = separatorStyle;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Belle internal component to wrap an Option in a Select.
	 *
	 * This component exists to avoid binding functions in JSX.
	 */

	var SelectItem = function (_Component) {
	  _inherits(SelectItem, _Component);

	  function SelectItem() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SelectItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SelectItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._onClick = function () {
	      _this.props.onItemClick(_this.props.index);
	    }, _this._onTouchStart = function (event) {
	      _this.props.onItemTouchStart(event, _this.props.index);
	    }, _this._onTouchMove = function () {
	      _this.props.onItemTouchMove();
	    }, _this._onTouchEnd = function (event) {
	      _this.props.onItemTouchEnd(event, _this.props.index);
	    }, _this._onTouchCancel = function () {
	      _this.props.onItemTouchCancel();
	    }, _this._onMouseEnter = function () {
	      _this.props.onItemMouseEnter(_this.props.index);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SelectItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        {
	          onClick: this._onClick,
	          onTouchStart: this._onTouchStart,
	          onTouchMove: this._onTouchMove,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          onMouseEnter: this._onMouseEnter,
	          role: 'option',
	          'aria-selected': this.props.isHovered
	        },
	        this.props.children
	      );
	    }
	  }]);

	  return SelectItem;
	}(_react.Component);

	SelectItem.displayName = 'SelectItem';
	SelectItem.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  isHovered: _react.PropTypes.bool.isRequired,
	  index: _react.PropTypes.number.isRequired,
	  onItemClick: _react.PropTypes.func.isRequired,
	  onItemTouchStart: _react.PropTypes.func.isRequired,
	  onItemTouchMove: _react.PropTypes.func.isRequired,
	  onItemTouchEnd: _react.PropTypes.func.isRequired,
	  onItemTouchCancel: _react.PropTypes.func.isRequired,
	  onItemMouseEnter: _react.PropTypes.func.isRequired
	};
	exports.default = SelectItem;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(300);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _calculateTextareaHeight = __webpack_require__(352);

	var _calculateTextareaHeight2 = _interopRequireDefault(_calculateTextareaHeight);

	var _injectStyle = __webpack_require__(311);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _helpers = __webpack_require__(308);

	var _textInput = __webpack_require__(353);

	var _textInput2 = _interopRequireDefault(_textInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var newLineRegex = /[\r\n]/g;

	var textInputPropTypes = {
	  className: _react.PropTypes.string,
	  minHeight: _react.PropTypes.number,
	  maxHeight: _react.PropTypes.number,
	  minRows: _react.PropTypes.number,
	  maxRows: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  focusStyle: _react.PropTypes.object,
	  allowNewLine: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  disabledStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,
	  onUpdate: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  value: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.string,
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.string.isRequired,
	    requestChange: _react.PropTypes.func.isRequired
	  })
	};

	/**
	 * Returns an object with properties that are relevant for the TextInput's textarea.
	 *
	 * As the height of the textarea needs to be calculated valueLink can not be
	 * passed down to the textarea, but made available through this component.
	 */
	function sanitizeChildProps(properties) {
	  var childProps = (0, _helpers.omit)(properties, Object.keys(textInputPropTypes));
	  if (_typeof(properties.valueLink) === 'object') {
	    childProps.value = properties.valueLink.value;
	  }

	  return childProps;
	}

	/**
	 * Update hover & focus style for the speficied styleId.
	 *
	 * @param styleId {string} - a unique id that exists as class attribute in the DOM
	 * @param properties {object} - the components properties optionally containing hoverStyle & focusStyle
	 */
	function updatePseudoClassStyle(styleId, properties) {
	  var hoverStyle = _extends({}, _textInput2.default.hoverStyle, properties.hoverStyle);
	  var focusStyle = _extends({}, _textInput2.default.focusStyle, properties.focusStyle);
	  var disabledHoverStyle = _extends({}, _textInput2.default.disabledHoverStyle, properties.disabledHoverStyle);

	  var styles = [{
	    id: styleId,
	    style: hoverStyle,
	    pseudoClass: 'hover'
	  }, {
	    id: styleId,
	    style: focusStyle,
	    pseudoClass: 'focus'
	  }, {
	    id: styleId,
	    style: disabledHoverStyle,
	    pseudoClass: 'hover',
	    disabled: true
	  }];
	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * TextInput component with great UX like autogrowing & handling states
	 *
	 * Note on styling: Right now this component doen't allow to change style after
	 * initialisation.
	 *
	 * Note on resizing:
	 * If you fill a textarea only with spaces and the cursor reaches the right end
	 * it won't break the line. This leads to unexpected behaviour for the automatic
	 * resizing.
	 *
	 * This component was highly inspired by the great work from these guys
	 * - Andrey Popp: https://github.com/andreypopp/react-textarea-autosize
	 * - Eugene: https://gist.github.com/eugene1g/5dbaa7d35d0c7d5c2c56
	 */

	var TextInput = function (_Component) {
	  _inherits(TextInput, _Component);

	  function TextInput(properties) {
	    _classCallCheck(this, TextInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).call(this, properties));

	    _this._onKeyDown = function (event) {
	      if (!_this.props.allowNewLine && event.key === 'Enter') {
	        event.preventDefault();
	      }

	      if (_this.props.onKeyDown) {
	        _this.props.onKeyDown(event);
	      }
	    };

	    _this._onChange = function (event) {
	      var value = event.target.value;

	      if (!_this.props.allowNewLine && value.match(newLineRegex) !== null) {
	        value = value.replace(newLineRegex, ' ');
	      }

	      if ((0, _helpers.has)(_this.props, 'valueLink')) {
	        _this.props.valueLink.requestChange(value);
	      } else if ((0, _helpers.has)(_this.props, 'defaultValue')) {
	        _this.setState({
	          inputValue: value
	        });
	      }

	      if (_this.props.onUpdate) {
	        _this.props.onUpdate({ value: value });
	      }

	      _this._triggerResize(value);
	    };

	    var inputValue = void 0;

	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      inputValue = properties.valueLink.value;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      inputValue = properties.value;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      inputValue = properties.defaultValue;
	    }

	    _this.state = {
	      height: 'auto',
	      inputValue: inputValue
	    };
	    _this.textareaProps = sanitizeChildProps(properties);
	    return _this;
	  }

	  _createClass(TextInput, [{
	    key: 'componentWillMount',


	    /**
	     * Generates the style-id & inject the focus & hover style.
	     */
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();
	      this._styleId = 'style-id' + id;
	      updatePseudoClassStyle(this._styleId, this.props);
	    }

	    /**
	     * Right after the component go injected into the DOM it should be resized.
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._triggerResize(this.state.inputValue);
	    }

	    /**
	     * Update the properties passed to the textarea and resize as with the new
	     * properties the height might have changed.
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      var _this2 = this;

	      // Makes sure we have inputValue available when triggering a resize.
	      var newState = {
	        inputValue: this.state.inputValue
	      };
	      if ((0, _helpers.has)(properties, 'valueLink')) {
	        newState.inputValue = properties.valueLink.value;
	      } else if ((0, _helpers.has)(properties, 'value')) {
	        newState.inputValue = properties.value;
	      }

	      this.textareaProps = sanitizeChildProps(properties);
	      (0, _injectStyle.removeStyle)(this._styleId);
	      updatePseudoClassStyle(this._styleId, properties);
	      this.setState(newState, function () {
	        return _this2._triggerResize(newState.inputValue);
	      });
	    }

	    /**
	     * Remove a component's associated styles whenever it gets removed from the DOM.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeStyle)(this._styleId);
	    }

	    /**
	     * Prevent any newline (except allowNewLine is active) and pass the event to
	     * the onKeyDown property.
	     *
	     * This is an optimization to avoid adding a newline char & removing it right
	     * away in the onUpdate callback.
	     */


	    /**
	     * Update the height and calls the provided change callback for onUpdate
	     * or valueLink.
	     *
	     * In addition newline characters are replaced by spaces in the textarea value
	     * in case allowNewLine is set to false and newLine characters could be found.
	     */

	  }, {
	    key: '_triggerResize',


	    /**
	     * Calculate the height and store the new height in the state to trigger a render.
	     */
	    value: function _triggerResize(textareaValue) {
	      var height = (0, _calculateTextareaHeight2.default)(_reactDom2.default.findDOMNode(this), textareaValue, this.props.minRows, this.props.maxRows, this.props.minHeight, this.props.maxHeight);
	      this.setState({ height: height });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var textareaStyle = _extends({}, _textInput2.default.style, this.props.style);

	      if (this.props.disabled) {
	        textareaStyle = _extends({}, textareaStyle, _textInput2.default.disabledStyle, this.props.disabledStyle);
	      }

	      textareaStyle.height = this.state.height;
	      return _react2.default.createElement('textarea', _extends({
	        style: textareaStyle,
	        value: this.state.inputValue,
	        className: (0, _unionClassNames2.default)(this.props.className, this._styleId),
	        onChange: this._onChange,
	        onKeyDown: this._onKeyDown,
	        disabled: this.props.disabled
	      }, this.textareaProps));
	    }
	  }]);

	  return TextInput;
	}(_react.Component);

	TextInput.displayName = 'TextInput';
	TextInput.propTypes = textInputPropTypes;
	TextInput.defaultProps = {
	  allowNewLine: false,
	  disabled: false
	};
	exports.default = TextInput;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateTextareaHeight;

	var _exenv = __webpack_require__(334);

	// our height calculation logic is not compatible with jsdom
	var isNodeTest = typeof process !== 'undefined' && process.env.NODE_ENV === 'test';
	var canUseDOM = _exenv.canUseDOM && !isNodeTest;

	var hiddenTextarea = void 0;
	var computedStyleCache = {};

	// !important is used here to avoid side-effects from global set CSS.
	var hiddenTextareaStyle = '\n  min-height:none !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

	var stylesToCopy = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	/**
	 * Returns an object containing the computed style and the combined vertical
	 * padding size, combined vertical border size and box-sizing value.
	 *
	 * This style is returned as string to be applied as attribute of an element.
	 */
	function calculateStyling(node) {
	  var reactId = node.getAttribute('data-reactid');

	  // calculate the computed style only once it's not in the cache
	  if (!computedStyleCache[reactId]) {
	    (function () {
	      // In order to work with legacy browsers the second paramter for pseudoClass
	      // has to be provided http://caniuse.com/#feat=getcomputedstyle
	      var computedStyle = window.getComputedStyle(node, null);

	      var boxSizing = computedStyle.getPropertyValue('box-sizing') || computedStyle.getPropertyValue('-moz-box-sizing') || computedStyle.getPropertyValue('-webkit-box-sizing');

	      var verticalPaddingSize = 0;
	      verticalPaddingSize = parseFloat(computedStyle.getPropertyValue('padding-bottom')) + parseFloat(computedStyle.getPropertyValue('padding-top'));

	      var verticalBorderSize = 0;
	      verticalBorderSize = parseFloat(computedStyle.getPropertyValue('border-bottom-width')) + parseFloat(computedStyle.getPropertyValue('border-top-width'));

	      var sizingStyle = stylesToCopy.map(function (styleName) {
	        return styleName + ':' + computedStyle.getPropertyValue(styleName) + '  !important';
	      }).join(';');

	      // store the style, vertical padding size, vertical border size and
	      // boxSizing inside the cache
	      computedStyleCache[reactId] = {
	        style: sizingStyle,
	        verticalPaddingSize: verticalPaddingSize,
	        verticalBorderSize: verticalBorderSize,
	        boxSizing: boxSizing
	      };
	    })();
	  }

	  return computedStyleCache[reactId];
	}

	/**
	 * Returns an object containing height of the textare as if all the content
	 * would be visible. The minHeight & maxHeight are in the object as well and are
	 * based on minRows & maxRows.
	 *
	 * In order to improve the performance a hidden textarea is added to the DOM
	 * and used for further caluculations. In addition the styling of each textarea
	 * is cached to improve performance.
	 */
	function calculateTextareaHeight(textareaElement) {
	  var textareaValue = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];
	  var minRows = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	  var maxRows = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	  var minHeight = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
	  var maxHeight = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];

	  // Regarding textareaValue: IE will return a height of 0 in case the textare is empty.
	  // To prevent reducing the size to 0 we simply use a dummy text.
	  if (!canUseDOM) {
	    return 0;
	  }

	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	    hiddenTextarea.setAttribute('class', 'belle-input-helper');
	  }

	  var _calculateStyling = calculateStyling(textareaElement);

	  var style = _calculateStyling.style;
	  var verticalPaddingSize = _calculateStyling.verticalPaddingSize;
	  var verticalBorderSize = _calculateStyling.verticalBorderSize;
	  var boxSizing = _calculateStyling.boxSizing;


	  hiddenTextarea.setAttribute('style', style + ';' + hiddenTextareaStyle);
	  hiddenTextarea.value = textareaValue;

	  var calculatedMinHeight = void 0;
	  var calculatedMaxHeight = void 0;
	  var height = hiddenTextarea.scrollHeight;

	  // for a textarea with border-box, the border width has to be added while
	  // for content-box it's necessary to subtract the padding
	  if (boxSizing === 'border-box') {
	    // border-box: content + padding + border
	    height = height + verticalBorderSize;
	  } else if (boxSizing === 'content-box') {
	    // content-box: content
	    height = height - verticalPaddingSize;
	  }

	  if (minRows !== null && minHeight === null || maxRows !== null && maxHeight === null) {
	    // measure height of a textarea with a single row
	    hiddenTextarea.value = '-';
	    var singleRowHeight = hiddenTextarea.scrollHeight - verticalPaddingSize;

	    if (minRows !== null && minHeight === null) {
	      calculatedMinHeight = singleRowHeight * minRows;
	      if (boxSizing === 'border-box') {
	        calculatedMinHeight = calculatedMinHeight + verticalPaddingSize + verticalBorderSize;
	      }
	    }

	    if (maxRows !== null && maxHeight === null) {
	      calculatedMaxHeight = singleRowHeight * maxRows;
	      if (boxSizing === 'border-box') {
	        calculatedMaxHeight = calculatedMaxHeight + verticalPaddingSize + verticalBorderSize;
	      }
	    }
	  }

	  var finalMinHeight = minHeight || calculatedMinHeight;
	  if (finalMinHeight) {
	    height = Math.max(finalMinHeight, height);
	  }

	  var finalMaxHeight = maxHeight || calculatedMaxHeight;
	  if (finalMaxHeight) {
	    height = Math.min(finalMaxHeight, height);
	  }

	  return height;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var textInputStyle = {
	  style: {
	    /* normalize.css v3.0.1 */
	    font: 'inherit',
	    margin: 0,

	    /* Reset the default borderRadius for Mobile Safari */
	    borderRadius: 0,

	    /* Belle TextInput style */
	    overflow: 'hidden',
	    resize: 'none',
	    width: '100%',
	    fontSize: 15,
	    padding: '7px 0 5px 0',
	    color: '#505050',
	    border: '0 solid #fff',
	    borderBottom: '1px solid #ccc',
	    background: 'none',
	    display: 'block',
	    boxSizing: 'border-box',
	    minHeight: '0px',

	    /* animations */
	    transition: 'border-bottom 0.2s',
	    transitionTimingFunction: 'ease-out'
	  },

	  hoverStyle: {
	    borderBottom: '1px solid #92D6EF'
	  },

	  focusStyle: {
	    outline: 0, // to avoid default focus behaviour
	    borderBottom: '1px solid #6EB8D4'
	  },

	  disabledStyle: {
	    borderBottom: '1px dotted #9F9F9F',
	    color: '#9F9F9F'
	  },

	  disabledHoverStyle: {
	    borderBottom: '1px dotted #92D6EF',
	    color: '#9F9F9F',
	    cursor: 'not-allowed'
	  }
	};

	exports.default = textInputStyle;

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _exenv = __webpack_require__(334);

	var _helpers = __webpack_require__(308);

	var _rating = __webpack_require__(355);

	var _rating2 = _interopRequireDefault(_rating);

	var _injectStyle = __webpack_require__(311);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _rating3 = __webpack_require__(356);

	var _rating4 = _interopRequireDefault(_rating3);

	var _animationFrameManagement = __webpack_require__(357);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ratingPropTypes = {
	  defaultValue: _react.PropTypes.oneOf([1, 2, 3, 4, 5]),
	  value: _react.PropTypes.oneOf([1, 2, 3, 4, 5]),
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.oneOf([1, 2, 3, 4, 5]),
	    requestChange: _react.PropTypes.func.isRequired
	  }),
	  disabled: _react.PropTypes.bool,
	  tabIndex: _react.PropTypes.number,
	  character: _react.PropTypes.string,
	  characterProps: _react.PropTypes.object,
	  preventFocusStyleForTouchAndClick: _react.PropTypes.bool,
	  'aria-label': _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  focusStyle: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,
	  characterStyle: _react.PropTypes.object,
	  activeCharacterStyle: _react.PropTypes.object,
	  hoverCharacterStyle: _react.PropTypes.object,
	  onUpdate: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseMove: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  onTouchMove: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchCancel: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func
	};

	/**
	 * sanitize properties for the wrapping div.
	 */
	function sanitizeWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(ratingPropTypes));
	}

	/**
	 * sanitize properties for the character span.
	 */
	function sanitizeCharacterProps(properties) {
	  return (0, _helpers.omit)(properties, ['data-belle-value', 'style']);
	}

	/**
	 * Injects pseudo classes for styles into the DOM.
	 */
	function updatePseudoClassStyle(ratingWrapperStyleId, properties, preventFocusStyleForTouchAndClick) {
	  var ratingFocusStyle = void 0;
	  if (preventFocusStyleForTouchAndClick) {
	    ratingFocusStyle = { outline: 0 };
	  } else {
	    ratingFocusStyle = _extends({}, _rating2.default.focusStyle, properties.focusStyle);
	  }

	  var styles = [{
	    id: ratingWrapperStyleId,
	    style: ratingFocusStyle,
	    pseudoClass: 'focus'
	  }];
	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * Rating component
	 *
	 * The component leverages 5 characters (by default stars) to allow the user to
	 * to rate.
	 */

	var Rating = function (_Component) {
	  _inherits(Rating, _Component);

	  function Rating(properties) {
	    _classCallCheck(this, Rating);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).call(this, properties));

	    _initialiseProps.call(_this);

	    var value = void 0;

	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      value = properties.valueLink.value;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      value = properties.value;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      value = properties.defaultValue;
	    }

	    _this.state = {
	      value: value,
	      focusedValue: undefined,
	      generalProps: sanitizeWrapperProps(properties),
	      characterProps: sanitizeCharacterProps(properties.characterProps),
	      isFocus: false,
	      isActive: false
	    };

	    _this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _rating4.default.preventFocusStyleForTouchAndClick;
	    return _this;
	  }

	  /**
	   * Setting default prop values.
	   */


	  _createClass(Rating, [{
	    key: 'componentWillMount',


	    /**
	     * Apply pseudo class styling to the wrapper div.
	     */
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();
	      this.ratingWrapperStyleId = 'rating-wrapper-style-id' + id;
	      updatePseudoClassStyle(this.ratingWrapperStyleId, this.props, this.preventFocusStyleForTouchAndClick);

	      if (_exenv.canUseDOM) {
	        this.mouseUpOnDocumentCallback = this._onMouseUpOnDocument;
	        document.addEventListener('mouseup', this.mouseUpOnDocumentCallback);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      var newState = {
	        wrapperProps: sanitizeWrapperProps(properties),
	        characterProps: sanitizeCharacterProps(properties.characterProps)
	      };

	      if (properties.valueLink) {
	        newState.value = properties.valueLink.value;
	      } else if (properties.value) {
	        newState.value = properties.value;
	      }

	      this.setState(newState);

	      this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _rating4.default.preventFocusStyleForTouchAndClick;

	      (0, _injectStyle.removeStyle)(this.ratingWrapperStyleId);
	      updatePseudoClassStyle(this.ratingWrapperStyleId, properties, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Removes pseudo classes from the DOM once component gets removed.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeStyle)(this.ratingWrapperStyleId);
	      if (_exenv.canUseDOM) {
	        document.removeEventListener('mouseup', this.mouseUpOnDocumentCallback);
	      }
	    }

	    /**
	     * As soon as the mouse enters the component the focusedValue is updated based
	     * on the value of the targeted span.
	     */


	    /**
	     * As the mouse moved over the component and enters a new star the focusedValue
	     * is updated based on the value of the targeted span.
	     */


	    /**
	     * Resets the component as the mouse leaves the hover area.
	     */


	    /**
	     * Sets isActive state to true.
	     */


	    /**
	     * Sets isActive state to false.
	     */


	    /**
	     * Change focusValue and sets isActive state to true.
	     */


	    /**
	     * set the focusedValue depending on mouse position
	     */


	    /**
	     * update the component when touch ends
	     */


	    /**
	     * reset the component in case of touch cancel
	     */


	    /**
	     * reset the component on blur
	     */


	    /**
	     * enable focus styling of component when tab is used to focus component
	     */


	    /**
	     * Manages the keyboard events.
	     *
	     * In case the Rating Component is in focus Space, ArrowUp will result in increasing the value and arrow down will result in decreasing the value.
	     * Enter/ space will result in updating the value of the component.
	     *
	     * Pressing Escape will reset the value to last value.
	     *
	     */


	    /**
	     * decrease the value by 1 when arrow down key is pressed
	     */


	    /**
	     * increase value by 1 when arrow up key is pressed
	     */


	    /**
	     * set component value to current focus value
	     */


	    /**
	     * reset component when escape key is pressed
	     * esc key should just reset the component displayed rating without removing hover or focus styles
	     */

	  }, {
	    key: '_getCurrentValue',


	    /**
	     * Returns current value of rating to be displayed on the component
	     */
	    value: function _getCurrentValue() {
	      var value = void 0;
	      if (this.state.focusedValue !== undefined) {
	        value = this.state.focusedValue;
	      } else {
	        value = this.state.value ? this.state.value : 0;
	      }

	      return value;
	    }

	    /**
	     * The function will be passed to requestAnimationFrame for touchMove
	     */

	  }, {
	    key: '_triggerComponentUpdateOnTouchMove',
	    value: function _triggerComponentUpdateOnTouchMove(touches) {
	      var touchedElement = document.elementFromPoint(touches.clientX, touches.clientY);
	      var value = Number(touchedElement.getAttribute('data-belle-value'));
	      if (value && this.state.focusedValue !== value) {
	        this.setState({
	          focusedValue: value
	        });
	      }
	    }

	    /**
	     * update component when component is clicked, touch ends, enter or space key are hit
	     * different update logic will apply depending on whether component has property defaultValue, value or valueLink specified
	     */

	  }, {
	    key: '_triggerComponentUpdate',
	    value: function _triggerComponentUpdate(value) {
	      if ((0, _helpers.has)(this.props, 'valueLink')) {
	        this.props.valueLink.requestChange(value);
	        this.setState({
	          focusedValue: undefined,
	          isActive: false
	        });
	      } else if ((0, _helpers.has)(this.props, 'value')) {
	        this.setState({
	          focusedValue: undefined,
	          isActive: false
	        });
	      } else {
	        this.setState({
	          focusedValue: undefined,
	          isActive: false,
	          value: value
	        });
	      }

	      if (this.props.onUpdate) {
	        this.props.onUpdate({ value: value });
	      }
	    }

	    /**
	     * Returns the HTML function to be rendered by this component.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var currentValue = this._getCurrentValue();
	      var tabIndex = !this.props.disabled ? this.props.tabIndex : -1;

	      var characterStyle = _extends({}, _rating2.default.characterStyle, this.props.characterStyle);

	      if (this.state.isActive) {
	        characterStyle = _extends({}, characterStyle, _rating2.default.activeCharacterStyle, this.props.activeCharacterStyle);
	      } else if (this.state.isHover) {
	        characterStyle = _extends({}, characterStyle, _rating2.default.hoverCharacterStyle, this.props.hoverCharacterStyle);
	      }

	      var wrapperStyle = _extends({}, _rating2.default.style, this.props.style);
	      if (this.props.disabled) {
	        wrapperStyle = _extends({}, wrapperStyle, _rating2.default.disabledStyle, this.props.disabledStyle);
	        if (this.state.isHover) {
	          wrapperStyle = _extends({}, wrapperStyle, _rating2.default.disabledHoverStyle, this.props.disabledHoverStyle);
	        }
	      } else {
	        if (this.state.isFocus && this.preventFocusStyleForTouchAndClick) {
	          wrapperStyle = _extends({}, wrapperStyle, _rating2.default.focusStyle, this.props.focusStyle);
	        }

	        if (this.state.isHover) {
	          wrapperStyle = _extends({}, wrapperStyle, _rating2.default.hoverStyle, this.props.hoverStyle);
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          ref: 'wrapper',
	          style: wrapperStyle,
	          className: (0, _unionClassNames2.default)(this.props.className, this.ratingWrapperStyleId),
	          onKeyDown: this._onKeyDown,
	          onMouseEnter: this._onMouseEnter,
	          onMouseMove: this._onMouseMove,
	          onMouseLeave: this._onMouseLeave,
	          onMouseUp: this._onMouseUp,
	          onMouseDown: this._onMouseDown,
	          onTouchStart: this._onTouchStart,
	          onTouchMove: this._onTouchMove,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          onContextMenu: this._onContextMenu,
	          onBlur: this._onBlur,
	          onFocus: this._onFocus,
	          tabIndex: tabIndex,
	          'aria-label': this.props['aria-label'],
	          'aria-valuemax': 5,
	          'aria-valuemin': 1,
	          'aria-valuenow': this.state.value,
	          'aria-disabled': this.props.disabled
	        }, this.state.wrapperProps),
	        _react2.default.Children.map([1, 2, 3, 4, 5], function (value) {
	          var ratingStyle = currentValue >= value ? characterStyle : {};
	          return _react2.default.createElement(
	            'span',
	            _extends({
	              'data-belle-value': value,
	              style: ratingStyle
	            }, _this2.state.characterProps),
	            _this2.props.character
	          );
	        })
	      );
	    }
	  }]);

	  return Rating;
	}(_react.Component);

	Rating.displayName = 'Rating';
	Rating.propTypes = ratingPropTypes;
	Rating.defaultProps = {
	  disabled: false,
	  tabIndex: 0,
	  character: '★',
	  'aria-label': 'rating'
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this._onMouseEnter = function (event) {
	    // In case the user pressed the mouse and then hovers over the rating and
	    // releases the mousUp should no be trigger. Only when the mouseDown starts
	    // inside.
	    // Activating inside, going out & coming back should still be possible.
	    if (!_this3.state.isActive) {
	      _this3.preventNextMouseUpTriggerUpdate = true;
	    }

	    if (!_this3.props.disabled) {
	      var value = Number(event.target.getAttribute('data-belle-value'));
	      _this3.setState({
	        focusedValue: value,
	        isHover: true
	      });
	    } else {
	      _this3.setState({
	        isHover: true
	      });
	    }

	    if (_this3.props.onMouseEnter) {
	      _this3.props.onMouseEnter(event);
	    }
	  };

	  this._onMouseMove = function (event) {
	    if (!_this3.props.disabled) {
	      var value = Number(event.target.getAttribute('data-belle-value'));
	      if (_this3.state.focusedValue !== value) {
	        _this3.setState({
	          focusedValue: value
	        });
	      }
	    }

	    if (_this3.props.onMouseMove) {
	      _this3.props.onMouseMove(event);
	    }
	  };

	  this._onMouseLeave = function (event) {
	    if (!_this3.props.disabled) {
	      _this3.setState({
	        focusedValue: undefined,
	        isHover: false
	      });
	    } else {
	      _this3.setState({
	        isHover: false
	      });
	    }

	    if (_this3.props.onMouseLeave) {
	      _this3.props.onMouseLeave(event);
	    }
	  };

	  this._onMouseDown = function (event) {
	    if (!_this3.props.disabled && event.button === 0) {
	      _this3.setState({ isActive: true });
	      _this3.preventNextMouseUpTriggerUpdate = false;
	    }

	    if (_this3.props.onMouseDown) {
	      _this3.props.onMouseDown(event);
	    }
	  };

	  this._onMouseUp = function (event) {
	    if (!_this3.props.disabled && !_this3.preventNextMouseUpTriggerUpdate) {
	      var value = Number(event.target.getAttribute('data-belle-value'));
	      _this3._triggerComponentUpdate(value);
	    }

	    if (_this3.props.onMouseUp) {
	      _this3.props.onMouseUp(event);
	    }
	  };

	  this._onMouseUpOnDocument = function () {
	    _this3.setState({ isActive: false });
	  };

	  this._onContextMenu = function () {
	    _this3.setState({ isActive: false });
	  };

	  this._onTouchStart = function (event) {
	    event.preventDefault();

	    if (!_this3.props.disabled && event.touches.length === 1) {
	      var value = Number(event.target.getAttribute('data-belle-value'));
	      _this3.setState({
	        focusedValue: value,
	        isActive: true
	      });
	    }

	    if (_this3.props.onTouchStart) {
	      _this3.props.onTouchStart(event);
	    }
	  };

	  this._onTouchMove = function (event) {
	    if (!_this3.props.disabled && event.touches.length === 1) {
	      var touches = event.touches[0];

	      // the requestAnimationFrame function must be executed in the context of window
	      // see http://stackoverflow.com/a/9678166/837709
	      var animationFrame = _animationFrameManagement.requestAnimationFrame.call(window, _this3._triggerComponentUpdateOnTouchMove.bind(_this3, touches));

	      if (_this3.previousTouchMoveFrame) {
	        // the cancelAnimationFrame function must be executed in the context of window
	        // see http://stackoverflow.com/a/9678166/837709
	        _animationFrameManagement.cancelAnimationFrame.call(window, _this3.previousTouchMoveFrame);
	      }

	      _this3.previousTouchMoveFrame = animationFrame;
	    }

	    if (_this3.props.onTouchMove) {
	      _this3.props.onTouchMove(event);
	    }
	  };

	  this._onTouchEnd = function (event) {
	    if (!_this3.props.disabled) {
	      event.preventDefault();
	      _this3.setState({ isActive: false });
	      var value = _this3.state.focusedValue;
	      _this3._triggerComponentUpdate(value);
	    }

	    if (_this3.props.onTouchEnd) {
	      _this3.props.onTouchEnd(event);
	    }
	  };

	  this._onTouchCancel = function (event) {
	    if (!_this3.props.disabled) {
	      _this3.setState({
	        isActive: false,
	        focusedValue: undefined
	      });
	    }

	    if (_this3.props.onTouchCancel) {
	      _this3.props.onTouchCancel(event);
	    }
	  };

	  this._onBlur = function (event) {
	    if (!_this3.props.disabled) {
	      _this3.setState({
	        focusedValue: undefined,
	        isFocus: false,
	        isActive: false
	      });
	    }

	    if (_this3.props.onBlur) {
	      _this3.props.onBlur(event);
	    }
	  };

	  this._onFocus = function () {
	    if (!_this3.state.isActive && !_this3.props.disabled) {
	      _this3.setState({ isFocus: true });
	    }

	    if (_this3.props.onFocus) {
	      _this3.props.onFocus(event);
	    }
	  };

	  this._onKeyDown = function (event) {
	    if (!_this3.props.disabled) {
	      if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
	        event.preventDefault();
	        _this3._onArrowDownKeyDown();
	      } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
	        event.preventDefault();
	        _this3._onArrowUpKeyDown();
	      } else if (event.key === 'Enter' || event.key === ' ') {
	        event.preventDefault();
	        _this3._onEnterSpaceKeyDown();
	      } else if (event.key === 'Escape') {
	        event.preventDefault();
	        _this3._onEscapeKeyDown();
	      }
	    }

	    if (_this3.props.onKeyDown) {
	      _this3.props.onKeyDown(event);
	    }
	  };

	  this._onArrowDownKeyDown = function () {
	    var newValue = _this3.state.focusedValue !== undefined ? _this3.state.focusedValue : _this3.state.value;
	    newValue = newValue > 0 ? newValue - 1 : 0;
	    _this3.setState({
	      focusedValue: newValue
	    });
	  };

	  this._onArrowUpKeyDown = function () {
	    var newValue = _this3.state.focusedValue !== undefined ? _this3.state.focusedValue : _this3.state.value;
	    if (!newValue) {
	      newValue = 1;
	    } else if (newValue < 5) {
	      newValue = newValue + 1;
	    } else {
	      newValue = 5;
	    }

	    _this3.setState({
	      focusedValue: newValue
	    });
	  };

	  this._onEnterSpaceKeyDown = function () {
	    var newValue = void 0;
	    if (_this3.state.focusedValue !== undefined) {
	      if (_this3.state.focusedValue === 0) {
	        newValue = undefined;
	      } else {
	        newValue = _this3.state.focusedValue;
	      }

	      _this3._triggerComponentUpdate(newValue);
	    }
	  };

	  this._onEscapeKeyDown = function () {
	    _this3.setState({
	      focusedValue: undefined
	    });
	  };
	};

	exports.default = Rating;

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ratingStyle = {
	  style: {
	    position: 'relative',
	    display: 'inline-block',
	    cursor: 'pointer',
	    fontSize: '2.6rem',
	    lineHeight: '2.6rem',
	    color: '#e3e3e3',
	    textShadow: '0px 1px 0px #D2D1D1',

	    /*
	     To avoid any kind of flickering the user won't get feedback
	     for selecting the rating stars
	     */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'none',
	    touchAction: 'none',

	    /*
	     Prevent flickering while tapping on WebKit
	     http://stackoverflow.com/a/3516243/837709
	     */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  disabledStyle: {
	    opacity: 0.6,
	    cursor: 'not-allowed'
	  },

	  focusStyle: {
	    outline: 0,
	    WebkitAnimation: 'belle-rating-focus 2s',
	    borderRadius: 2
	  },

	  hoverStyle: {
	    opacity: 1
	  },

	  disabledHoverStyle: {
	    opacity: 0.6
	  },

	  characterStyle: {
	    color: '#FFCC00',
	    textShadow: '0px 1px 0px #DCB000',
	    top: 0,

	    /* animations */
	    transition: 'color 0.1s',
	    transitionTimingFunction: 'ease-out'
	  },

	  hoverCharacterStyle: {
	    color: '#FFDA46'
	  },

	  activeCharacterStyle: {
	    textShadow: '0px -1px 0px #D6AB00',
	    color: '#F3C200',
	    position: 'relative',
	    top: 1
	  }
	};

	exports.default = ratingStyle;

/***/ },
/* 356 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ratingConfig = {
	  preventFocusStyleForTouchAndClick: true
	};

	exports.default = ratingConfig;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

	var _exenv = __webpack_require__(334);

	var requestAnimationFrame = exports.requestAnimationFrame = void 0; // Inspired by https://gist.github.com/paulirish/1579671

	var cancelAnimationFrame = exports.cancelAnimationFrame = void 0;

	var lastTime = 0;

	if (_exenv.canUseDOM) {
	  exports.requestAnimationFrame = requestAnimationFrame = window.requestAnimationFrame;
	  exports.cancelAnimationFrame = cancelAnimationFrame = window.cancelAnimationFrame;

	  var vendors = ['ms', 'moz', 'webkit', 'o'];
	  for (var index = 0; index < vendors.length && !requestAnimationFrame; ++index) {
	    exports.requestAnimationFrame = requestAnimationFrame = window[vendors[index] + 'RequestAnimationFrame'];
	    exports.cancelAnimationFrame = cancelAnimationFrame = window[vendors[index] + 'CancelAnimationFrame'] || window[vendors[index] + 'CancelRequestAnimationFrame'];
	  }
	}

	if (!requestAnimationFrame) {
	  exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame(callback) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}

	if (!cancelAnimationFrame) {
	  exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame(id) {
	    clearTimeout(id);
	  };
	}

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _injectStyle = __webpack_require__(311);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _helpers = __webpack_require__(308);

	var _comboBox = __webpack_require__(359);

	var _comboBox2 = _interopRequireDefault(_comboBox);

	var _ComboBoxItem = __webpack_require__(360);

	var _ComboBoxItem2 = _interopRequireDefault(_ComboBoxItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var comboBoxPropTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
	  defaultValue: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.string,
	    requestChange: _react.PropTypes.func.isRequired
	  }),
	  placeholder: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  wrapperProps: _react.PropTypes.object,
	  menuProps: _react.PropTypes.object,
	  caretProps: _react.PropTypes.object,
	  onUpdate: _react.PropTypes.func,
	  onInputMatch: _react.PropTypes.func,
	  tabIndex: _react.PropTypes.number,
	  onKeyDown: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  className: _react.PropTypes.string,
	  caretClassName: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  wrapperStyle: _react.PropTypes.object,
	  hintStyle: _react.PropTypes.object,
	  menuStyle: _react.PropTypes.object,
	  focusStyle: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  caretToOpenStyle: _react.PropTypes.object,
	  caretToCloseStyle: _react.PropTypes.object,
	  disabledCaretToOpenStyle: _react.PropTypes.object,
	  maxOptions: _react.PropTypes.number,
	  displayCaret: _react.PropTypes.bool,
	  enableHint: _react.PropTypes.bool,
	  filterFunc: _react.PropTypes.func,
	  'aria-label': _react.PropTypes.string
	};

	/**
	 * Update hover style for the specified styleId.
	 *
	 * @param styleId {string} - a unique id that exists as class attribute in the DOM
	 * @param caretStyleId {string} - unique is assigned as class to caret span
	 * @param properties {object} - the components properties optionally containing hoverStyle
	 */
	function updatePseudoClassStyle(styleId, caretStyleId, properties) {
	  var hoverStyle = _extends({}, _comboBox2.default.hoverStyle, properties.hoverStyle);
	  var focusStyle = _extends({}, _comboBox2.default.focusStyle, properties.focusStyle);
	  var disabledHoverStyle = _extends({}, _comboBox2.default.disabledHoverStyle, properties.disabledHoverStyle);
	  var caretFocusStyle = _extends({}, _comboBox2.default.caretFocusStyle);

	  var styles = [{
	    id: styleId,
	    style: hoverStyle,
	    pseudoClass: 'hover'
	  }, {
	    id: styleId,
	    style: disabledHoverStyle,
	    pseudoClass: 'hover',
	    disabled: true
	  }, {
	    id: styleId,
	    style: focusStyle,
	    pseudoClass: 'focus'
	  }, {
	    id: caretStyleId,
	    style: caretFocusStyle,
	    pseudoClass: 'focus'
	  }];
	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * Returns an object with properties that are relevant for the wrapper div.
	 */
	function sanitizeWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'aria-label', 'aria-disabled']);
	}

	/**
	 * Returns an object with properties that are relevant for the input box.
	 */
	function sanitizeInputProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(comboBoxPropTypes));
	}

	/**
	 * Returns an object with properties that are relevant for the wrapping div of
	 * the selected option.
	 */
	function sanitizeCaretProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'className', 'onClick', 'tabIndex']);
	}

	/**
	 * Returns an object with properties that are relevant for the combo-box menu.
	 */
	function sanitizeMenuProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'ref', 'role']);
	}

	/**
	 * Default function used for filtering options.
	 */
	function filterFunc(inputValue, optionValue) {
	  if (inputValue && optionValue) {
	    return optionValue.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
	  }

	  return false;
	}

	/**
	 * ComboBox React Component.
	 */

	var ComboBox = function (_Component) {
	  _inherits(ComboBox, _Component);

	  function ComboBox(properties) {
	    _classCallCheck(this, ComboBox);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComboBox).call(this, properties));

	    _this._onTouchStartAtOption = function (event, index) {
	      if (!_this.props.disabled && event.touches.length === 1) {
	        _this._touchStartedAt = index;
	        _this.setState({ focusedOptionIndex: index });
	      }
	    };

	    _this._onTouchEndAtOption = function (event, index) {
	      if (!_this.props.disabled && _this._touchStartedAt) {
	        if (_this._touchStartedAt === index) {
	          event.preventDefault();
	          _this._triggerChange(_this._getValueForIndex(index));
	        }

	        _this._touchStartedAt = undefined;
	      }
	    };

	    _this._onTouchCancelAtOption = function () {
	      if (!_this.props.disabled) {
	        _this._touchStartedAt = undefined;
	        _this.setState({ focusedOptionIndex: undefined });
	      }
	    };

	    _this._onBlur = function (event) {
	      if (!_this.props.disabled) {
	        _this.setState({
	          isOpen: false,
	          focusedOptionIndex: undefined
	        });
	      }

	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    };

	    _this._onFocus = function (event) {
	      if (!_this.props.disabled) {
	        _this.setState({
	          isOpen: true
	        });
	      }

	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    };

	    _this._onCaretClick = function () {
	      if (!_this.props.disabled) {
	        var isOpen = !_this.state.isOpen;
	        _this.setState({
	          isOpen: isOpen
	        });
	      }
	    };

	    _this._onMouseEnterAtOption = function (index) {
	      if (!_this.props.disabled) {
	        _this.setState({
	          focusedOptionIndex: index
	        });
	      }
	    };

	    _this._onMouseLeaveAtOption = function () {
	      if (!_this.props.disabled) {
	        _this.setState({
	          focusedOptionIndex: undefined
	        });
	      }
	    };

	    _this._onClickAtOption = function (index) {
	      if (!_this.props.disabled) {
	        _this._triggerChange(_this._getValueForIndex(index));
	      }
	    };

	    _this._onKeyDown = function (event) {
	      if (!_this.props.disabled) {
	        if (!_this.state.isOpen) {
	          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
	            event.preventDefault();
	            _this.setState({
	              isOpen: true
	            });
	          }
	        } else {
	          if (event.key === 'ArrowDown') {
	            event.preventDefault();
	            _this._onArrowDownKeyDown();
	          } else if (event.key === 'ArrowUp') {
	            event.preventDefault();
	            _this._onArrowUpKeyDown();
	          } else if (event.key === 'ArrowRight') {
	            if (_this.props.enableHint) {
	              event.preventDefault();
	              var hint = _this._getHint();
	              if (hint) {
	                _this._userUpdateValue(hint);
	              }
	            }
	          } else if (event.key === 'Enter') {
	            event.preventDefault();
	            _this._onEnterOrTabKeyDown();
	          } else if (event.key === 'Tab') {
	            // event.preventDefault(); should not be called here else tab
	            // will not be able to take user to next component on the page
	            _this._onEnterOrTabKeyDown();
	          } else if (event.key === 'Escape') {
	            event.preventDefault();
	            _this.setState({
	              isOpen: false,
	              focusedOptionIndex: undefined
	            });
	          }
	        }
	      }

	      if (_this.props.onKeyDown) {
	        _this.props.onKeyDown(event);
	      }
	    };

	    _this._onArrowDownKeyDown = function () {
	      var index = 0;
	      if (_this.state.focusedOptionIndex !== undefined && _this.state.focusedOptionIndex + 1 < _this.filteredOptions.length) {
	        index = _this.state.focusedOptionIndex + 1;
	      }

	      _this.setState({
	        focusedOptionIndex: index
	      });
	    };

	    _this._onChange = function (event) {
	      var value = event.target.value;
	      _this._userUpdateValue(value);
	    };

	    var inputValue = void 0;

	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      inputValue = properties.valueLink.value;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      inputValue = properties.value;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      inputValue = properties.defaultValue;
	    }

	    _this.state = {
	      isOpen: false,
	      focusedOptionIndex: undefined,
	      inputValue: inputValue || '',
	      wrapperProps: sanitizeWrapperProps(properties.wrapperProps),
	      inputProps: sanitizeInputProps(properties),
	      caretProps: sanitizeCaretProps(properties.caretProps),
	      menuProps: sanitizeMenuProps(properties.menuProps)
	    };

	    _this.filteredOptions = ComboBox.filterOptions(inputValue, properties);
	    return _this;
	  }

	  _createClass(ComboBox, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var value = void 0;
	      if (typeof this.state.focusedOptionIndex !== 'undefined') {
	        value = this.filteredOptions[this.state.focusedOptionIndex].props.value;
	      }

	      return {
	        isDisabled: this.props.disabled,
	        isHoveredValue: value
	      };
	    }

	    /**
	     * This method will calculate the hint that should be present in comboBox at some point in time. Rules:
	     * 1. If menu is not open hint is undefined
	     * 2. If menu is open but there are no filteredOptions hint is undefined
	     * 3. If if some option is highlighted hint is equal to its value
	     * 4. If no option is highlighted but some value is present in input box hint is equal to value of first filteredOptions
	     * If user has typed some text in input box and there is a hint(according to above calculations), the starting of hint
	     * is replaced by the text input by user ( this is to make sure that case of letters in hint is same as that in input box
	     * value and overlap is perfect.)
	     * todo: simplify logic in method below
	     */

	  }, {
	    key: '_getHint',
	    value: function _getHint() {
	      if (this.state.isOpen) {
	        var filteredOptions = this.filteredOptions;
	        if (filteredOptions && filteredOptions.length > 0) {
	          var hint = void 0;
	          var focusedOptionIndex = this.state.focusedOptionIndex;
	          var inputValue = this.state.inputValue;
	          if (focusedOptionIndex >= 0) {
	            hint = filteredOptions[focusedOptionIndex].props.value;
	          } else if (inputValue && inputValue.length > 0) {
	            hint = filteredOptions[0].props.value;
	          }

	          if (hint) {
	            if (inputValue && inputValue.length > 0) {
	              var position = hint.toLowerCase().indexOf(inputValue.toLowerCase());
	              if (position === 0) {
	                return inputValue + hint.substr(inputValue.length, hint.length - inputValue.length);
	              } else if (position === -1) {
	                return hint;
	              }
	            } else {
	              return hint;
	            }
	          }
	        }
	      }

	      return undefined;
	    }

	    /**
	     * Generates the style-id & inject the focus & hover style.
	     */

	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();
	      this._styleId = 'style-id' + id;
	      this._caretStyleId = 'caretStyle-id' + id;
	      updatePseudoClassStyle(this._styleId, this._caretStyleId, this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      var newState = {
	        wrapperProps: sanitizeWrapperProps(properties.wrapperProps),
	        inputProps: sanitizeInputProps(properties),
	        caretProps: sanitizeCaretProps(properties.caretProps),
	        menuProps: sanitizeMenuProps(properties.menuProps)
	      };

	      if ((0, _helpers.has)(properties, 'valueLink')) {
	        newState.inputValue = properties.valueLink.value || '';
	      } else if ((0, _helpers.has)(properties, 'value')) {
	        newState.inputValue = properties.value || '';
	      }

	      if (newState.inputValue) {
	        newState.filteredOptions = ComboBox.filterOptions(newState.inputValue, properties);
	      }

	      this.setState(newState);

	      (0, _injectStyle.removeAllStyles)([this._styleId, this._caretStyleId]);
	      updatePseudoClassStyle(this._styleId, this._caretStyleId, properties);
	    }

	    /**
	     * Remove a component's associated styles whenever it gets removed from the DOM.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeAllStyles)([this._styleId, this._caretStyleId]);
	    }

	    /**
	     * Update focusedOptionIndex when an option is touched.
	     */


	    /**
	     * Triggers a change event after the user touched on an Option.
	     */


	    /**
	     * Update focusedOptionIndex to undefined on touch cancel.
	     */


	    /**
	     * Closed opened combo-box options and removed focusStyles on blur.
	     */


	    /**
	     * Set focused state when element is focused.
	     */


	    /**
	     * Open/ Close menu when create is clicked.
	     */


	    /**
	     * Update focusedOptionIndex for component when mouse enters an option.
	     */


	    /**
	     * Set focusedOptionIndex to undefined.
	     */


	    /**
	     * Update component value when an option is clicked.
	     */


	    /**
	     * Handle keyDown in input (when input is focused):
	     * 1. ComboBox is closed and ArrowDown/ ArrowUp is pressed -> open the ComboBox
	     * 2. ComboBox is opened and ArrowDown is pressed -> highlight next option
	     * 3. ComboBox is opened and ArrowUp is pressed -> highlight previous option
	     * 4. ComboBox is opened and ArrowRight is pressed -> value of hint is copied over to inputBox
	     * 5. ComboBox is opened and Enter/ Tab is pressed -> update input value to value of option
	     * 6. ComboBox is opened and Esc is pressed -> close ComboBox
	     */


	    /**
	     * Highlight next option when arrowDown key is pressed.
	     * Highlight first option if currently last option is focused.
	     */

	  }, {
	    key: '_onArrowUpKeyDown',


	    /**
	     * Highlight previous option when arrowUp key is pressed.
	     * Highlight last option if currently first option is focused.
	     */
	    value: function _onArrowUpKeyDown() {
	      if (this.filteredOptions.length > 0) {
	        var index = this.filteredOptions.length - 1;
	        if (this.state.focusedOptionIndex) {
	          index = this.state.focusedOptionIndex - 1;
	        }

	        this.setState({
	          focusedOptionIndex: index
	        });
	      }
	    }

	    /**
	     * Update value of Input box to the value of highlighted option.
	     */

	  }, {
	    key: '_onEnterOrTabKeyDown',
	    value: function _onEnterOrTabKeyDown() {
	      if (this.state.focusedOptionIndex >= 0) {
	        this._triggerChange(this.filteredOptions[this.state.focusedOptionIndex].props.value);
	      }
	    }

	    /**
	     * The function will return options (if any) who's value is same as value of the combo-box input.
	     */

	  }, {
	    key: '_findMatch',
	    value: function _findMatch(value) {
	      return (0, _helpers.find)(this.filteredOptions, function (entry) {
	        return entry.props.value === value;
	      });
	    }

	    /**
	     * The function is called when user selects an option. Function will do following:
	     * 1. Close the options
	     * 2. Change value of input depending on whether its has value, defaultValue or valueLink property
	     * 3. Call onUpdate props function
	     */

	  }, {
	    key: '_triggerChange',
	    value: function _triggerChange(value) {
	      if ((0, _helpers.has)(this.props, 'valueLink')) {
	        this.props.valueLink.requestChange(value);
	        this.setState({
	          isOpen: false,
	          focusedOptionIndex: undefined
	        });
	      } else if ((0, _helpers.has)(this.props, 'value')) {
	        this.setState({
	          isOpen: false,
	          focusedOptionIndex: undefined
	        });
	      } else {
	        this.setState({
	          inputValue: value,
	          isOpen: false,
	          focusedOptionIndex: undefined
	        });
	        this.filteredOptions = ComboBox.filterOptions(value, this.props);
	      }

	      var obj = { value: value, isOptionSelection: true, isMatchingOption: true };
	      var matchedOption = this._findMatch(value);
	      obj.identifier = matchedOption ? matchedOption.props.identifier : undefined;

	      if (this.props.onUpdate) {
	        this.props.onUpdate(obj);
	      }
	    }

	    /**
	     * The function is called when user type/ paste value in the input box.
	     */

	  }, {
	    key: '_getValueForIndex',


	    /**
	     * Returns the value of the child with a certain index.
	     */
	    value: function _getValueForIndex(index) {
	      return this.filteredOptions[index].props.value;
	    }

	    /**
	     * The function is called when user inputs a value in the input box. This can be done by:
	     * 1. typing/ pasting value into input box
	     * 2. pressing arrowRight key when there is some hint in the input box
	     *
	     * Function will do following:
	     * 1. Open the options
	     * 2. Change value of input depending on whether its has value, defaultValue or valueLink property
	     * 3. Call onUpdate props function
	     */

	  }, {
	    key: '_userUpdateValue',
	    value: function _userUpdateValue(value) {
	      if ((0, _helpers.has)(this.props, 'valueLink')) {
	        this.props.valueLink.requestChange(value);
	        this.setState({
	          isOpen: true,
	          focusedOptionIndex: undefined
	        });
	      } else if ((0, _helpers.has)(this.props, 'value')) {
	        this.setState({
	          isOpen: true,
	          focusedOptionIndex: undefined
	        });
	      } else {
	        this.setState({
	          inputValue: value,
	          isOpen: true,
	          focusedOptionIndex: undefined
	        });
	        this.filteredOptions = ComboBox.filterOptions(value, this.props);
	      }

	      var obj = { value: value, isOptionSelection: false, isMatchingOption: false };

	      var matchedOption = this._findMatch(value);
	      if (matchedOption) {
	        obj.identifier = matchedOption.props.identifier;
	        obj.isMatchingOption = true;
	      }

	      if (this.props.onUpdate) {
	        this.props.onUpdate(obj);
	      }
	    }

	    /**
	     * Function to filter options using input value.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var inputStyle = _extends({}, _comboBox2.default.style, this.props.style);
	      var hintStyle = _extends({}, _comboBox2.default.hintStyle, this.props.hintStyle);
	      var wrapperStyle = _extends({}, _comboBox2.default.wrapperStyle, this.props.wrapperStyle);
	      var menuStyle = _extends({}, _comboBox2.default.menuStyle, this.props.menuStyle);

	      var hint = this.props.enableHint ? this._getHint() : undefined;
	      var placeHolder = !hint ? this.props.placeholder : undefined;
	      var inputClassName = (0, _unionClassNames2.default)(this.props.className, this._styleId);
	      var tabIndex = this.props.tabIndex ? this.props.tabIndex : '0';

	      if (this.props.disabled) {
	        inputStyle = _extends({}, inputStyle, _comboBox2.default.disabledStyle, this.props.disabledStyle);
	      }

	      // todo: Currently there are no different hover styles for caret, like select they are probably not really needed.
	      var caretStyle = void 0;
	      if (this.props.displayCaret) {
	        if (this.props.disabled) {
	          caretStyle = _extends({}, _comboBox2.default.caretToOpenStyle, this.props.caretToOpenStyle, _comboBox2.default.disabledCaretToOpenStyle, this.props.disabledCaretToOpenStyle);
	        } else if (this.state.isOpen) {
	          caretStyle = _extends({}, _comboBox2.default.caretToCloseStyle, this.props.caretToCloseStyle);
	        } else {
	          caretStyle = _extends({}, _comboBox2.default.caretToOpenStyle, this.props.caretToOpenStyle);
	        }
	      }

	      var computedMenuStyle = this.state.isOpen && !this.props.disabled && this.filteredOptions && this.filteredOptions.length > 0 ? menuStyle : { display: 'none' };

	      // using value for input makes it a controlled component and it will be changed in controlled manner if (1) user enters value, (2) user selects some option
	      // value will be updated depending on whether user has passed value / valueLink / defaultValue as property
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: wrapperStyle,
	          'aria-label': this.props['aria-label'],
	          'aria-disabled': this.props.disabled
	        }, this.state.wrapperProps),
	        _react2.default.createElement('input', {
	          style: hintStyle,
	          value: hint,
	          tabIndex: -1,
	          key: 'style-hint',
	          readOnly: true
	        }),
	        _react2.default.createElement('input', _extends({
	          disabled: this.props.disabled,
	          'aria-disabled': this.props.disabled,
	          value: this.state.inputValue,
	          placeholder: placeHolder,
	          style: inputStyle,
	          className: inputClassName,
	          onChange: this._onChange,
	          tabIndex: tabIndex,
	          onBlur: this._onBlur,
	          onFocus: this._onFocus,
	          onKeyDown: this._onKeyDown,
	          'aria-autocomplete': 'list',
	          key: 'combo-input'
	        }, this.state.inputProps)),
	        _react2.default.createElement('span', _extends({
	          style: caretStyle,
	          className: this._caretStyleId,
	          onClick: this._onCaretClick,
	          tabIndex: -1
	        }, this.state.caretProps)),
	        _react2.default.createElement(
	          'ul',
	          _extends({
	            style: computedMenuStyle,
	            role: 'listbox',
	            'aria-expanded': this.state.isOpen
	          }, this.state.menuProps),
	          _react2.default.Children.map(this.filteredOptions, function (entry, index) {
	            return _react2.default.createElement(
	              _ComboBoxItem2.default,
	              {
	                key: index,
	                index: index,
	                onItemTouchStart: _this2._onTouchStartAtOption,
	                onItemTouchEnd: _this2._onTouchEndAtOption,
	                onItemTouchCancel: _this2._onTouchCancelAtOption,
	                onItemClick: _this2._onClickAtOption,
	                onItemMouseEnter: _this2._onMouseEnterAtOption,
	                onItemMouseLeave: _this2._onMouseLeaveAtOption
	              },
	              entry
	            );
	          })
	        )
	      );
	    }
	  }], [{
	    key: 'filterOptions',
	    value: function filterOptions(inputValue, properties) {
	      /* eslint react/sort-comp:0*/
	      var filteredOptions = [];
	      if (!(0, _helpers.isEmpty)(properties.children)) {
	        if (inputValue) {
	          filteredOptions = (0, _helpers.filterReactChildren)(properties.children, function (entry) {
	            return properties.filterFunc(inputValue, entry.props.value);
	          });
	        } else {
	          filteredOptions = (0, _helpers.getArrayForReactChildren)(properties.children, function (entry) {
	            return entry;
	          });
	        }

	        if (properties.maxOptions) {
	          filteredOptions = filteredOptions.splice(0, properties.maxOptions);
	        }
	      }

	      return filteredOptions;
	    }
	  }]);

	  return ComboBox;
	}(_react.Component);

	ComboBox.displayName = 'ComboBox';
	ComboBox.propTypes = comboBoxPropTypes;
	ComboBox.childContextTypes = {
	  isDisabled: _react.PropTypes.bool.isRequired,
	  isHoveredValue: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.number])
	};
	ComboBox.defaultProps = {
	  disabled: false,
	  displayCaret: false,
	  enableHint: false,
	  'aria-label': 'ComboBox',
	  filterFunc: filterFunc, // TODO rename to filterFunction in 3.0.0
	  tabIndex: 0,
	  children: []
	};
	exports.default = ComboBox;

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var comboBoxStyle = {

	  style: {

	    background: 'transparent',

	    /* normalize.css v3.0.1 */
	    font: 'inherit',
	    margin: 0,

	    /* Reset the default borderRadius for Mobile Safari */
	    borderRadius: 0,

	    /* Belle TextInput style */
	    overflow: 'hidden',
	    resize: 'none',
	    width: '100%',
	    fontSize: 15,
	    paddingTop: '7px',
	    paddingBottom: '4px',
	    paddingLeft: 0,
	    color: '#505050',
	    border: '0 solid #fff',
	    borderBottom: '1px solid #ccc',
	    display: 'block',
	    boxSizing: 'border-box',
	    position: 'relative',

	    /* animations */
	    transition: 'border-bottom 0.2s',
	    transitionTimingFunction: 'ease-out',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  focusStyle: {
	    borderBottom: '1px solid #6EB8D4',
	    outline: 'none'
	  },

	  hoverStyle: {
	    borderBottom: '1px solid #92D6EF'
	  },

	  disabledStyle: {
	    borderBottom: '1px dotted #9F9F9F'
	  },

	  disabledHoverStyle: {
	    borderBottom: '1px dotted #92D6EF',
	    cursor: 'not-allowed'
	  },

	  wrapperStyle: {
	    outline: 0, // to avoid default focus behaviour
	    boxSizing: 'border-box',
	    position: 'relative'
	  },

	  menuStyle: {
	    display: 'block',
	    listStyleType: 'none',
	    background: '#FFF',
	    padding: '6px 0',
	    margin: 0,
	    position: 'absolute',
	    width: '100%',
	    zIndex: 10000,
	    boxSizing: 'border-box',
	    borderRadius: 2,
	    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
	    borderTop: '1px solid #f2f2f2',
	    /* Improve scrolling for mobile Safari */
	    WebkitOverflowScrolling: 'touch'
	  },

	  caretToOpenStyle: {
	    height: 0,
	    width: 0,
	    content: '-', // Avoid this warning: was passed a numeric string value for CSS property `content` (value: ` `)
	    position: 'absolute',
	    top: 15,
	    right: 8,
	    cursor: 'pointer',
	    borderTop: '6px solid #666',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent'
	  },

	  caretToCloseStyle: {
	    height: 0,
	    width: 0,
	    content: '-', // Avoid this warning: was passed a numeric string value for CSS property `content` (value: ` `)
	    position: 'absolute',
	    top: 15,
	    right: 8,
	    cursor: 'pointer',
	    borderBottom: '6px solid #666',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent'
	  },

	  caretFocusStyle: {
	    outline: 0
	  },

	  disabledCaretToOpenStyle: {
	    borderTop: '6px solid #9F9F9F'
	  },

	  hintStyle: {

	    position: 'absolute',
	    top: 0,
	    left: 0,
	    outline: 'none',
	    color: '#ccc',
	    border: 'none',

	    /* normalize.css v3.0.1 */
	    font: 'inherit',
	    margin: 0,

	    /* Reset the default borderRadius for Mobile Safari */
	    borderRadius: 0,

	    /* Belle TextInput style */
	    overflow: 'hidden',
	    resize: 'none',
	    width: '100%',
	    fontSize: 15,
	    paddingTop: 7,
	    paddingBottom: 4,
	    paddingLeft: 0,
	    display: 'block',
	    boxSizing: 'border-box',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	     Prevent flickering while tapping on WebKit
	     http://stackoverflow.com/a/3516243/837709
	     */
	    WebkitTapHighlightColor: 'transparent'
	  }
	};

	exports.default = comboBoxStyle;

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Belle internal component to wrap an Option in a ComboBox.
	 *
	 * This component exists to avoid binding functions in JSX.
	 */

	var ComboBoxItem = function (_Component) {
	  _inherits(ComboBoxItem, _Component);

	  function ComboBoxItem() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ComboBoxItem);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ComboBoxItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._onClick = function () {
	      _this.props.onItemClick(_this.props.index);
	    }, _this._onTouchStart = function (event) {
	      _this.props.onItemTouchStart(event, _this.props.index);
	    }, _this._onTouchEnd = function (event) {
	      _this.props.onItemTouchEnd(event, _this.props.index);
	    }, _this._onTouchCancel = function () {
	      _this.props.onItemTouchCancel();
	    }, _this._onMouseEnter = function () {
	      _this.props.onItemMouseEnter(_this.props.index);
	    }, _this._onMouseLeave = function () {
	      _this.props.onItemMouseLeave();
	    }, _this._onMouseDown = function (event) {
	      event.preventDefault();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ComboBoxItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        {
	          onClick: this._onClick,
	          onMouseEnter: this._onMouseEnter,
	          onMouseLeave: this._onMouseLeave,
	          onMouseDown: this._onMouseDown,
	          onTouchStart: this._onTouchStart,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          role: 'option'
	        },
	        this.props.children
	      );
	    }
	  }]);

	  return ComboBoxItem;
	}(_react.Component);

	ComboBoxItem.displayName = 'ComboBoxItem';
	ComboBoxItem.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  index: _react.PropTypes.number.isRequired,
	  onItemClick: _react.PropTypes.func.isRequired,
	  onItemTouchStart: _react.PropTypes.func.isRequired,
	  onItemTouchEnd: _react.PropTypes.func.isRequired,
	  onItemTouchCancel: _react.PropTypes.func.isRequired,
	  onItemMouseEnter: _react.PropTypes.func.isRequired,
	  onItemMouseLeave: _react.PropTypes.func.isRequired
	};
	exports.default = ComboBoxItem;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _spinner = __webpack_require__(362);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var animationDelay = function animationDelay(delay) {
	  return {
	    MozAnimationDelay: delay,
	    WebkitAnimationDelay: delay,
	    OAnimationDelay: delay,
	    animationDelay: delay
	  };
	};

	/**
	 * Spinner component to be used as loading indicator.
	 */

	var Spinner = function (_Component) {
	  _inherits(Spinner, _Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
	  }

	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var style = _props.style;
	      var characterProps = _props.characterProps;
	      var characterStyle = _props.characterStyle;

	      var childProps = _objectWithoutProperties(_props, ['style', 'characterProps', 'characterStyle']);

	      var computedCharStyle = _extends({}, _spinner2.default.characterStyle, characterStyle);
	      return _react2.default.createElement(
	        'span',
	        _extends({}, childProps, { style: _extends({}, _spinner2.default.style, style) }),
	        _react2.default.createElement(
	          'span',
	          _extends({}, characterProps, { style: computedCharStyle }),
	          '.'
	        ),
	        _react2.default.createElement(
	          'span',
	          _extends({}, characterProps, { style: _extends({}, computedCharStyle, animationDelay('400ms')) }),
	          '.'
	        ),
	        _react2.default.createElement(
	          'span',
	          _extends({}, characterProps, { style: _extends({}, computedCharStyle, animationDelay('800ms')) }),
	          '.'
	        )
	      );
	    }
	  }]);

	  return Spinner;
	}(_react.Component);

	Spinner.displayName = 'Spinner';
	Spinner.propTypes = {
	  characterProps: _react.PropTypes.object,
	  characterStyle: _react.PropTypes.object,
	  style: _react.PropTypes.object
	};
	exports.default = Spinner;

/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var spinnerStyle = {
	  style: {
	    display: 'inline-block',
	    fontSize: 15,
	    textAlign: 'center'
	  },

	  characterStyle: {
	    color: '#666',
	    display: 'inline-block',
	    WebkitAnimation: 'belle-spinner-pulse 2s infinite ease-in-out',
	    OAnimation: 'belle-spinner-pulse 2s infinite ease-in-out',
	    animation: 'belle-spinner-pulse 2s infinite ease-in-out'
	  }
	};

	exports.default = spinnerStyle;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(300);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _injectStyle = __webpack_require__(311);

	var _helpers = __webpack_require__(308);

	var _toggle = __webpack_require__(364);

	var _toggle2 = _interopRequireDefault(_toggle);

	var _toggle3 = __webpack_require__(365);

	var _toggle4 = _interopRequireDefault(_toggle3);

	var _isComponentOfType = __webpack_require__(347);

	var _isComponentOfType2 = _interopRequireDefault(_isComponentOfType);

	var _animationFrameManagement = __webpack_require__(357);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _Choice = __webpack_require__(339);

	var _Choice2 = _interopRequireDefault(_Choice);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Verifies that the children is an array containing only two choices with a
	 * different value.
	 */
	function validateChoices(props, propName, componentName) {
	  var propValue = props[propName];
	  if (!propValue) {
	    return undefined;
	  }

	  if (!Array.isArray(propValue) || propValue.length !== 2) {
	    return new Error('Invalid ' + propName + ' supplied to `' + componentName + '`, expected exactly two Choice components.');
	  }

	  for (var i = 0; i < propValue.length; ++i) {
	    var item = propValue[i];
	    if (!item || !(0, _isComponentOfType2.default)(_Choice2.default, item)) {
	      return new Error('Invalid ' + propName + '[' + i + '] supplied to `' + componentName + '`, expected a Choice component from Belle.');
	    }
	  }

	  if ((0, _helpers.first)(propValue).props.value === (0, _helpers.last)(propValue).props.value) {
	    return new Error('Invalid ' + propName + ' supplied to `' + componentName + '`, expected different value properties for the provided Choice components.');
	  }

	  return undefined;
	}

	var togglePropTypes = {
	  activeHandleStyle: _react.PropTypes.object,
	  children: validateChoices,
	  className: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  disabledHandleStyle: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  firstChoiceProps: _react.PropTypes.object,
	  firstChoiceStyle: _react.PropTypes.shape({
	    width: _react.PropTypes.number
	  }),
	  focusStyle: _react.PropTypes.object,
	  handleProps: _react.PropTypes.shape({
	    onMouseDown: _react.PropTypes.func,
	    onMouseMove: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    onTouchStart: _react.PropTypes.func,
	    onTouchMove: _react.PropTypes.func,
	    onTouchEnd: _react.PropTypes.func,
	    onTouchCancel: _react.PropTypes.func
	  }),
	  handleStyle: _react.PropTypes.shape({
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.number
	  }),
	  hoverHandleStyle: _react.PropTypes.object,
	  onBlur: _react.PropTypes.func,
	  onUpdate: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  secondChoiceProps: _react.PropTypes.object,
	  secondChoiceStyle: _react.PropTypes.shape({
	    width: _react.PropTypes.number
	  }),
	  sliderProps: _react.PropTypes.shape({
	    onClick: _react.PropTypes.func,
	    onTouchStart: _react.PropTypes.func,
	    onTouchMove: _react.PropTypes.func,
	    onTouchEnd: _react.PropTypes.func,
	    onTouchCancel: _react.PropTypes.func
	  }),
	  sliderStyle: _react.PropTypes.object,
	  sliderWrapperProps: _react.PropTypes.object,
	  sliderWrapperStyle: _react.PropTypes.object,
	  style: _react.PropTypes.shape({
	    width: _react.PropTypes.number
	  }),
	  value: _react.PropTypes.bool,
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.bool.isRequired,
	    requestChange: _react.PropTypes.func.isRequired
	  }),
	  wrapperProps: _react.PropTypes.object
	};

	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(togglePropTypes));
	}

	function sanitizeSliderProps(properties) {
	  return (0, _helpers.omit)(properties, ['style', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel']);
	}

	function sanitizeSliderWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, ['ref', 'style']);
	}

	function sanitizeChoiceProps(properties) {
	  return (0, _helpers.omit)(properties, ['ref', 'style']);
	}

	function sanitizeHandleProps(properties) {
	  return (0, _helpers.omit)(properties, ['onMouseDown', 'onMouseMove', 'onMouseUp', 'onMouseLeave', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'ref', 'style']);
	}

	/**
	 * Update focus style for the speficied styleId.
	 *
	 * @param styleId {string} - a unique id that exists as class attribute in the DOM
	 * @param properties {object} - the components properties optionally containing custom styles
	 */
	function updatePseudoClassStyle(styleId, properties, preventFocusStyleForTouchAndClick) {
	  var focusStyle = void 0;
	  if (preventFocusStyleForTouchAndClick) {
	    focusStyle = { outline: 0 };
	  } else {
	    focusStyle = _extends({}, _toggle2.default.focusStyle, properties.focusStyle);
	  }

	  var styles = [{
	    id: styleId,
	    style: focusStyle,
	    pseudoClass: 'focus'
	  }];

	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * Toggle component
	 */

	var Toggle = function (_Component) {
	  _inherits(Toggle, _Component);

	  function Toggle(properties) {
	    _classCallCheck(this, Toggle);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toggle).call(this, properties));

	    _initialiseProps.call(_this);

	    var value = void 0;
	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      value = properties.valueLink.value;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      value = properties.value;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      value = properties.defaultValue;
	    } else {
	      value = false;
	    }

	    _this.state = {
	      firstChoiceProps: sanitizeChoiceProps(properties.firstChoiceProps),
	      childProps: sanitizeChildProps(properties),
	      secondChoiceProps: sanitizeChoiceProps(properties.secondChoiceProps),
	      handleProps: sanitizeHandleProps(properties.handleProps),
	      isActive: false,
	      isDraggingWithMouse: false,
	      isDraggingWithTouch: false,
	      sliderProps: sanitizeSliderProps(properties.sliderProps),
	      sliderWrapperProps: sanitizeSliderWrapperProps(properties.sliderWrapperProps),
	      value: value,
	      wasFocusedWithClickOrTouch: false
	    };

	    _this._touchStartedAtSlider = false;
	    _this._touchEndedNotInSlider = false;

	    _this._preventTouchSwitch = false;

	    _this._mouseDragStart = undefined;
	    _this._mouseDragEnd = undefined;
	    _this._preventMouseSwitch = false;

	    // The isFocused attribute is used to apply the one-time focus animation.
	    // As it is reset after every render it can't be set inside state as this
	    // would trigger an endless loop.
	    _this.isFocused = false;

	    _this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _toggle4.default.preventFocusStyleForTouchAndClick;
	    return _this;
	  }

	  _createClass(Toggle, [{
	    key: 'componentWillMount',


	    /**
	     * Generates the style-id & inject the focus style.
	     */
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();
	      this.styleId = 'style-id' + id;
	      updatePseudoClassStyle(this.styleId, this.props, this.preventFocusStyleForTouchAndClick);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      var newState = {
	        firstChoiceProps: sanitizeChoiceProps(properties.firstChoiceProps),
	        childProps: sanitizeChildProps(properties),
	        secondChoiceProps: sanitizeChoiceProps(properties.secondChoiceProps),
	        handleProps: sanitizeHandleProps(properties.handleProps),
	        sliderProps: sanitizeSliderProps(properties.sliderProps),
	        sliderWrapperProps: sanitizeSliderWrapperProps(properties.sliderWrapperProps)
	      };

	      if ((0, _helpers.has)(properties, 'valueLink')) {
	        newState.value = properties.valueLink.value;
	      } else if ((0, _helpers.has)(properties, 'value')) {
	        newState.value = properties.value;
	      }

	      this.setState(newState);

	      this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _toggle4.default.preventFocusStyleForTouchAndClick;

	      (0, _injectStyle.removeStyle)(this.styleId);
	      updatePseudoClassStyle(this.styleId, properties, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Deactivate the focused attribute in order to make sure the focus animation
	     * only runs once when the component is focused on & not after re-rendering
	     * e.g when the user clicks on the toggle.
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.isFocused = false;
	    }

	    /**
	     * Remove a component's associated styles whenever it gets removed from the DOM.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeStyle)(this.styleId);
	    }

	    /**
	     * Activate the focused attribute used to determine when to show the
	     * one-time focus animation and trigger a render.
	     */


	    /**
	     * Deactivate the focused attribute used to determine when to show the
	     * one-time focus animation and trigger a render.
	     */

	  }, {
	    key: '_onArrowLeftKeyDown',


	    /**
	     * Flip value in case it is false.
	     */
	    value: function _onArrowLeftKeyDown() {
	      if (this.state.value === true) {
	        this._triggerChange(false);
	      }
	    }

	    /**
	     * Flip value in case it is true.
	     */

	  }, {
	    key: '_onArrowRightKeyDown',
	    value: function _onArrowRightKeyDown() {
	      if (this.state.value === false) {
	        this._triggerChange(true);
	      }
	    }

	    /**
	     * Flip value and trigger change.
	     */

	  }, {
	    key: '_onEnterOrSpaceKeyDown',
	    value: function _onEnterOrSpaceKeyDown() {
	      this._triggerChange(!this.state.value);
	    }
	  }, {
	    key: '_getHandleHeight',
	    value: function _getHandleHeight() {
	      return (0, _helpers.has)(this.props.handleStyle, 'height') ? this.props.handleStyle.height : _toggle2.default.handleStyle.height;
	    }
	  }, {
	    key: '_getHandleWidth',
	    value: function _getHandleWidth() {
	      return (0, _helpers.has)(this.props.handleStyle, 'width') ? this.props.handleStyle.width : _toggle2.default.handleStyle.width;
	    }
	  }, {
	    key: '_getSliderOffset',
	    value: function _getSliderOffset() {
	      var firstChoiceWidth = (0, _helpers.has)(this.props.firstChoiceStyle, 'width') ? this.props.firstChoiceStyle.width : _toggle2.default.firstChoiceStyle.width;

	      return firstChoiceWidth - this._getHandleWidth() / 2;
	    }
	  }, {
	    key: '_getToggleWidth',
	    value: function _getToggleWidth() {
	      return (0, _helpers.has)(this.props.style, 'width') ? this.props.style.width : _toggle2.default.style.width;
	    }
	  }, {
	    key: '_triggerChange',
	    value: function _triggerChange(value) {
	      if ((0, _helpers.has)(this.props, 'valueLink')) {
	        this.props.valueLink.requestChange(value);
	        this.setState({
	          isDraggingWithMouse: false,
	          isDraggingWithTouch: false,
	          isActive: false
	        });
	      } else if ((0, _helpers.has)(this.props, 'value')) {
	        this.setState({
	          isDraggingWithMouse: false,
	          isDraggingWithTouch: false,
	          isActive: false
	        });
	      } else {
	        this.setState({
	          value: value,
	          isDraggingWithMouse: false,
	          isDraggingWithTouch: false,
	          isActive: false
	        });
	      }

	      if (this.props.onUpdate) {
	        this.props.onUpdate({ value: value });
	      }
	    }
	  }, {
	    key: '_triggerUpdateComponentOnMouseMove',
	    value: function _triggerUpdateComponentOnMouseMove(pageX) {
	      var difference = pageX - this._mouseDragStart;

	      if (this.state.value && this._mouseDragEnd && difference > this._mouseDragEnd) {
	        this._preventMouseSwitch = true;
	      } else if (!this.state.value && this._mouseDragEnd && difference < this._mouseDragEnd) {
	        this._preventMouseSwitch = true;
	      }

	      this._mouseDragEnd = difference;

	      if (difference < 0 || difference > this._getToggleWidth() - this._getHandleWidth()) return;

	      this.setState({
	        sliderOffset: difference
	      });
	    }
	  }, {
	    key: '_triggerUpdateComponentOnTouchMoveAtSlider',
	    value: function _triggerUpdateComponentOnTouchMoveAtSlider(touch) {
	      var touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
	      var firstChoiceNode = _reactDom2.default.findDOMNode(this.refs.firstChoice);
	      var secondChoiceNode = _reactDom2.default.findDOMNode(this.refs.secondChoice);

	      this._touchEndedNotInSlider = touchedElement !== firstChoiceNode && touchedElement !== secondChoiceNode;
	      if (this.state.isActive && this._touchEndedNotInSlider) {
	        this.setState({ isActive: false });
	      } else if (!this.state.isActive && !this._touchEndedNotInSlider) {
	        this.setState({ isActive: true });
	      }
	    }
	  }, {
	    key: '_triggerUpdateComponentOnTouchMoveAtHandle',
	    value: function _triggerUpdateComponentOnTouchMoveAtHandle(touch) {
	      var sliderWrapperNode = _reactDom2.default.findDOMNode(this.refs.sliderWrapper);
	      var rect = sliderWrapperNode.getBoundingClientRect();
	      var difference = touch.pageX - this._touchDragStart;
	      var horizontalTolerance = this._getHandleWidth() * 2;
	      var verticalTolerance = this._getHandleHeight() * 2;

	      // touch left the allowed handle drag area
	      if (touch.clientX < rect.left - horizontalTolerance || touch.clientX > rect.right + horizontalTolerance || touch.clientY < rect.top - verticalTolerance || touch.clientY > rect.bottom + verticalTolerance) {
	        if (this._preventTouchSwitch) {
	          var value = difference > this._getHandleWidth() / 2;
	          this._triggerChange(value);
	        } else {
	          this._triggerChange(!this.state.value);
	        }
	      } else if (this.state.isDraggingWithTouch) {
	        // is still dragging
	        if (this.state.value && this._touchDragEnd && difference > this._touchDragEnd) {
	          this._preventTouchSwitch = true;
	        } else if (!this.state.value && this._touchDragEnd && difference < this._touchDragEnd) {
	          this._preventTouchSwitch = true;
	        }

	        if (difference < 0 || difference > this._getToggleWidth() - this._getHandleWidth()) return;

	        this._touchDragEnd = difference;
	        this.setState({
	          sliderOffset: difference
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var wrapperStyle = _extends({}, _toggle2.default.style, this.props.style);

	      if (this.isFocused && !this.state.wasFocusedWithClickOrTouch) {
	        wrapperStyle = _extends({}, wrapperStyle, _toggle2.default.focusStyle, this.props.focusStyle);
	      }

	      var computedSliderStyle = void 0;
	      var handleStyle = void 0;

	      var sliderWrapperStyle = _extends({}, _toggle2.default.sliderWrapperStyle, this.props.sliderWrapperStyle);
	      var defaultSliderOffset = this._getSliderOffset();

	      if (this.state.isDraggingWithMouse || this.state.isDraggingWithTouch) {
	        computedSliderStyle = _extends({}, _toggle2.default.sliderStyle, this.props.sliderStyle, {
	          left: this.state.sliderOffset - defaultSliderOffset,
	          transition: 'none'
	        });

	        // right now even when handle is clicked, it momentarily shows this grabbing styles
	        // may be this.state.isDraggingWithMouse should be set to true only after mouse movement starts
	        var activeStyle = _extends({}, _toggle2.default.activeHandleStyle, this.props.handleStyle);
	        handleStyle = _extends({}, _toggle2.default.handleStyle, activeStyle, this.props.activeHandleStyle, {
	          left: this.state.sliderOffset,
	          transition: activeStyle.transition ? activeStyle.transition : 'none'
	        });
	      } else {
	        handleStyle = _extends({}, _toggle2.default.handleStyle, this.props.handleStyle);
	        computedSliderStyle = _extends({}, _toggle2.default.sliderStyle, {
	          left: this.state.value ? 0 : -defaultSliderOffset
	        });

	        if (this.state.isActive) {
	          handleStyle = _extends({}, handleStyle, _toggle2.default.activeHandleStyle, this.props.activeHandleStyle);
	        } else if (this.state.isHovered) {
	          handleStyle = _extends({}, handleStyle, _toggle2.default.hoverHandleStyle, this.props.hoverHandleStyle);
	        }

	        var position = {
	          left: this.state.value ? defaultSliderOffset : 0
	        };
	        handleStyle = _extends({}, handleStyle, position);
	      }

	      var computedTrueChoice = (0, _helpers.first)(this.props.children) ? (0, _helpers.first)(this.props.children) : '✓';
	      var computedFalseChoice = (0, _helpers.last)(this.props.children) ? (0, _helpers.last)(this.props.children) : '✘';

	      var computedTrueChoiceStyle = _extends({}, _toggle2.default.firstChoiceStyle, this.props.firstChoiceStyle);
	      var computedFalseChoiceStyle = _extends({}, _toggle2.default.secondChoiceStyle, this.props.secondChoiceStyle);

	      var hasCustomTabIndex = this.props.wrapperProps && this.props.wrapperProps.tabIndex;
	      var tabIndex = hasCustomTabIndex ? this.props.wrapperProps.tabIndex : '0';
	      if (this.props.disabled) {
	        tabIndex = -1;
	        wrapperStyle = _extends({}, wrapperStyle, _toggle2.default.disabledStyle, this.props.disabledStyle);
	        handleStyle = _extends({}, handleStyle, _toggle2.default.disabledHandleStyle, this.props.disabledHandleStyle);
	      }

	      var role = (0, _helpers.has)(this.state.childProps, 'role') ? this.state.childProps.role : 'checkbox';

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: wrapperStyle,
	          tabIndex: tabIndex,
	          className: (0, _unionClassNames2.default)(this.props.className, this.styleId),
	          onKeyDown: this._onKeyDown,
	          onMouseDown: this._onMouseDownOnWrapper,
	          onMouseUp: this._onMouseUpOnWrapper,
	          onTouchStart: this._onTouchStartOnWrapper,
	          onFocus: this._onFocus,
	          onBlur: this._onBlur,
	          onMouseEnter: this._onMouseEnterAtSliderWrapper,
	          onMouseLeave: this._onMouseLeaveAtSliderWrapper,
	          role: role,
	          'aria-checked': this.state.value
	        }, this.state.childProps),
	        _react2.default.createElement(
	          'div',
	          _extends({
	            style: sliderWrapperStyle,
	            ref: 'sliderWrapper'
	          }, this.state.sliderWrapperProps),
	          _react2.default.createElement(
	            'div',
	            _extends({
	              style: computedSliderStyle,
	              onClick: this._onClickAtSlider,
	              onTouchStart: this._onTouchStartAtSlider,
	              onTouchMove: this._onTouchMoveAtSlider,
	              onTouchEnd: this._onTouchEndAtSlider,
	              onTouchCancel: this._onTouchCancelAtSlider
	            }, this.state.sliderProps),
	            _react2.default.createElement(
	              'div',
	              _extends({
	                ref: 'firstChoice',
	                style: computedTrueChoiceStyle
	              }, this.state.firstChoiceProps),
	              computedTrueChoice
	            ),
	            _react2.default.createElement(
	              'div',
	              _extends({
	                ref: 'secondChoice',
	                style: computedFalseChoiceStyle
	              }, this.state.secondChoiceProps),
	              computedFalseChoice
	            )
	          )
	        ),
	        _react2.default.createElement('div', _extends({
	          ref: 'handle',
	          style: handleStyle,
	          onMouseDown: this._onMouseDownOnHandle,
	          onMouseMove: this._onMouseMoveOnHandle,
	          onMouseUp: this._onMouseUpOnHandle,
	          onMouseLeave: this._onMouseLeaveOnHandle,
	          onTouchStart: this._onTouchStartHandle,
	          onTouchMove: this._onTouchMoveHandle,
	          onTouchEnd: this._onTouchEndHandle,
	          onTouchCancel: this._onTouchCancelHandle
	        }, this.state.handleProps))
	      );
	    }
	  }]);

	  return Toggle;
	}(_react.Component);

	Toggle.displayName = 'Toggle';
	Toggle.propTypes = togglePropTypes;
	Toggle.defaultProps = {
	  disabled: false
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this._onFocus = function (event) {
	    if (!_this2.props.disabled) {
	      _this2.isFocused = true;
	      _this2.forceUpdate();
	    }

	    if (_this2.props.onFocus) {
	      _this2.props.onFocus(event);
	    }
	  };

	  this._onBlur = function (event) {
	    _this2.isFocused = false;
	    _this2.setState({ wasFocusedWithClickOrTouch: false });

	    if (_this2.props.onBlur) {
	      _this2.props.onBlur(event);
	    }
	  };

	  this._onMouseDownOnWrapper = function (event) {
	    if (!_this2.props.disabled) {
	      _this2.setState({ wasFocusedWithClickOrTouch: true, isActive: true });
	    }

	    if (_this2.props.onMouseDown) {
	      _this2.props.onMouseDown(event);
	    }
	  };

	  this._onMouseUpOnWrapper = function (event) {
	    if (!_this2.props.disabled) {
	      _this2.setState({ isActive: false });
	    }

	    if (_this2.props.onMouseUp) {
	      _this2.props.onMouseUp(event);
	    }
	  };

	  this._onTouchStartOnWrapper = function (event) {
	    if (!_this2.props.disabled) {
	      _this2.setState({ wasFocusedWithClickOrTouch: true });
	    }

	    if (_this2.props.onTouchStart) {
	      _this2.props.onTouchStart(event);
	    }
	  };

	  this._onClickAtSlider = function (event) {
	    if (!_this2.props.disabled) {
	      _this2._triggerChange(!_this2.state.value);
	    }

	    if (_this2.props.sliderProps && _this2.props.sliderProps.onClick) {
	      _this2.props.sliderProps.onClick(event);
	    }
	  };

	  this._onMouseDownOnHandle = function (event) {
	    // check for left mouse button pressed
	    if (event.button === 0 && !_this2.props.disabled) {
	      var defaultSliderOffset = _this2._getSliderOffset();
	      _this2._mouseDragStart = event.pageX - (_this2.state.value ? defaultSliderOffset : 0);
	      _this2._preventMouseSwitch = false;

	      _this2.setState({
	        isDraggingWithMouse: true,
	        sliderOffset: _this2.state.value ? defaultSliderOffset : 0
	      });
	    }

	    if (_this2.props.handleProps && _this2.props.handleProps.onMouseDown) {
	      _this2.props.handleProps.onMouseDown(event);
	    }
	  };

	  this._onMouseMoveOnHandle = function (event) {
	    if (_this2.state.isDraggingWithMouse && !_this2.props.disabled) {
	      // the requestAnimationFrame function must be executed in the context of window
	      // see http://stackoverflow.com/a/9678166/837709
	      var animationFrame = _animationFrameManagement.requestAnimationFrame.call(window, _this2._triggerUpdateComponentOnMouseMove.bind(_this2, event.pageX));

	      if (_this2.previousMouseMoveFrame) {
	        // the cancelAnimationFrame function must be executed in the context of window
	        // see http://stackoverflow.com/a/9678166/837709
	        _animationFrameManagement.cancelAnimationFrame.call(window, _this2.previousMouseMoveFrame);
	      }

	      _this2.previousMouseMoveFrame = animationFrame;
	    }

	    if (_this2.props.handleProps && _this2.props.handleProps.onMouseMove) {
	      _this2.props.handleProps.onMouseMove(event);
	    }
	  };

	  this._onMouseUpOnHandle = function (event) {
	    if (!_this2.props.disabled) {
	      if (_this2._mouseDragEnd) {
	        if (!_this2._preventMouseSwitch) {
	          _this2._triggerChange(!_this2.state.value);
	        } else if (_this2._preventMouseSwitch) {
	          var value = _this2._mouseDragEnd > _this2._getHandleWidth() / 2;
	          _this2._triggerChange(value);
	        }
	      } else {
	        _this2._triggerChange(!_this2.state.value);
	      }
	    }

	    _this2._mouseDragStart = undefined;
	    _this2._mouseDragEnd = undefined;
	    _this2._preventMouseSwitch = false;

	    if (_this2.props.handleProps && _this2.props.handleProps.onMouseUp) {
	      _this2.props.handleProps.onMouseUp(event);
	    }
	  };

	  this._onMouseLeaveOnHandle = function (event) {
	    if (!_this2.props.disabled) {
	      if (_this2._mouseDragStart && !_this2._preventMouseSwitch) {
	        _this2._triggerChange(!_this2.state.value);
	      } else if (_this2._mouseDragStart && _this2._preventMouseSwitch) {
	        var value = _this2._mouseDragEnd > _this2._getHandleWidth() / 2;
	        _this2._triggerChange(value);
	      } else {
	        _this2.setState({ isActive: false });
	      }
	    }

	    _this2._mouseDragStart = undefined;
	    _this2._mouseDragEnd = undefined;
	    _this2._preventMouseSwitch = false;

	    if (_this2.props.handleProps && _this2.props.handleProps.onMouseLeave) {
	      _this2.props.handleProps.onMouseLeave(event);
	    }
	  };

	  this._onTouchStartAtSlider = function (event) {
	    if (event.touches.length === 1 && !_this2.props.disabled) {
	      _this2._touchStartedAtSlider = true;
	      _this2.setState({
	        isActive: true
	      });
	    }

	    if (_this2.props.sliderProps && _this2.props.sliderProps.onTouchStart) {
	      _this2.props.sliderProps.onTouchStart(event);
	    }
	  };

	  this._onTouchMoveAtSlider = function (event) {
	    if (event.touches.length === 1 && _this2._touchStartedAtSlider && !_this2.props.disabled) {
	      // the requestAnimationFrame function must be executed in the context of window
	      // see http://stackoverflow.com/a/9678166/837709
	      var animationFrame = _animationFrameManagement.requestAnimationFrame.call(window, _this2._triggerUpdateComponentOnTouchMoveAtSlider.bind(_this2, event.touches[0]));

	      if (_this2.previousTouchMoveAtSliderFrame) {
	        // the cancelAnimationFrame function must be executed in the context of window
	        // see http://stackoverflow.com/a/9678166/837709
	        _animationFrameManagement.cancelAnimationFrame.call(window, _this2.previousTouchMoveAtSliderFrame);
	      }

	      _this2.previousTouchMoveAtSliderFrame = animationFrame;
	    }

	    if (_this2.props.sliderProps && _this2.props.sliderProps.onTouchMove) {
	      _this2.props.sliderProps.onTouchMove(event);
	    }
	  };

	  this._onTouchEndAtSlider = function (event) {
	    // prevent the onClick to happen
	    event.preventDefault();

	    if (_this2._touchStartedAtSlider && !_this2._touchEndedNotInSlider && !_this2.props.disabled) {
	      _this2.setState({
	        isActive: false
	      });
	      _this2._triggerChange(!_this2.state.value);
	    } else {
	      _this2.setState({ isActive: false });
	    }

	    _this2._touchStartedAtSlider = false;
	    _this2._touchEndedNotInSlider = false;

	    if (_this2.props.sliderProps && _this2.props.sliderProps.onTouchEnd) {
	      _this2.props.sliderProps.onTouchEnd(event);
	    }
	  };

	  this._onTouchCancelAtSlider = function (event) {
	    _this2.setState({ isActive: false });
	    _this2._touchStartedAtSlider = false;
	    _this2._touchEndedNotInSlider = false;

	    if (_this2.props.sliderProps && _this2.props.sliderProps.onTouchCancel) {
	      _this2.props.sliderProps.onTouchCancel(event);
	    }
	  };

	  this._onTouchStartHandle = function (event) {
	    event.preventDefault();

	    // check for one touch as multiple could be browser gestures and only one
	    // is relevant for us
	    if (event.touches.length === 1 && !_this2.props.disabled) {
	      _this2._preventTouchSwitch = false;

	      var defaultSliderOffset = _this2._getSliderOffset();
	      _this2.setState({
	        isDraggingWithTouch: true,
	        sliderOffset: _this2.state.value ? defaultSliderOffset : 0
	      });

	      _this2._touchDragStart = event.touches[0].pageX - (_this2.state.value ? defaultSliderOffset : 0);
	    }

	    if (_this2.props.handleProps && _this2.props.handleProps.onTouchStart) {
	      _this2.props.handleProps.onTouchStart(event);
	    }
	  };

	  this._onTouchMoveHandle = function (event) {
	    if (event.touches.length === 1 && _this2.state.isDraggingWithTouch && !_this2.props.disabled) {
	      // the requestAnimationFrame function must be executed in the context of window
	      // see http://stackoverflow.com/a/9678166/837709
	      var animationFrame = _animationFrameManagement.requestAnimationFrame.call(window, _this2._triggerUpdateComponentOnTouchMoveAtHandle.bind(_this2, event.touches[0]));

	      if (_this2.previousTouchMoveAtHandleFrame) {
	        // the cancelAnimationFrame function must be executed in the context of window
	        // see http://stackoverflow.com/a/9678166/837709
	        _animationFrameManagement.cancelAnimationFrame.call(window, _this2.previousTouchMoveAtHandleFrame);
	      }

	      _this2.previousTouchMoveAtHandleFrame = animationFrame;
	    }

	    if (_this2.props.handleProps && _this2.props.handleProps.onTouchMove) {
	      _this2.props.handleProps.onTouchMove(event);
	    }
	  };

	  this._onTouchEndHandle = function (event) {
	    // prevent the onClick to happen
	    event.preventDefault();

	    if (_this2.state.isDraggingWithTouch && !_this2.props.disabled) {
	      // no click & move was involved
	      if (_this2._touchDragEnd) {
	        if (_this2._preventTouchSwitch) {
	          var value = _this2._touchDragEnd > _this2._getHandleWidth() / 2;
	          _this2._triggerChange(value);
	        } else {
	          _this2._triggerChange(!_this2.state.value);
	        }
	      } else {
	        // click like
	        _this2._triggerChange(!_this2.state.value);
	      }
	    } else {
	      _this2.setState({
	        isActive: false,
	        isDraggingWithTouch: false
	      });
	    }

	    _this2._touchDragStart = undefined;
	    _this2._touchDragEnd = undefined;
	    _this2._preventTouchSwitch = false;

	    if (_this2.props.handleProps && _this2.props.handleProps.onTouchEnd) {
	      _this2.props.handleProps.onTouchEnd(event);
	    }
	  };

	  this._onTouchCancelHandle = function (event) {
	    _this2.setState({
	      isDraggingWithTouch: false
	    });
	    _this2._touchDragStart = undefined;
	    _this2._touchDragEnd = undefined;
	    _this2._preventTouchSwitch = false;

	    if (_this2.props.handleProps && _this2.props.handleProps.onTouchCancel) {
	      _this2.props.handleProps.onTouchCancel(event);
	    }
	  };

	  this._onKeyDown = function (event) {
	    if (!_this2.props.disabled) {
	      if (event.key === 'ArrowLeft') {
	        event.preventDefault();
	        _this2._onArrowLeftKeyDown();
	      } else if (event.key === 'ArrowRight') {
	        event.preventDefault();
	        _this2._onArrowRightKeyDown();
	      } else if (event.key === 'Enter' || event.key === ' ') {
	        event.preventDefault();
	        _this2._onEnterOrSpaceKeyDown();
	      }
	    }

	    if (_this2.props.onKeyDown) {
	      _this2.props.onKeyDown(event);
	    }
	  };

	  this._onMouseEnterAtSliderWrapper = function () {
	    _this2.setState({
	      isHovered: true
	    });
	    if (_this2.props.onMouseEnter) {
	      _this2.props.onMouseEnter(event);
	    }
	  };

	  this._onMouseLeaveAtSliderWrapper = function () {
	    _this2.setState({
	      isHovered: false,
	      isActive: false
	    });
	    if (_this2.props.onMouseLeave) {
	      _this2.props.onMouseLeave(event);
	    }
	  };
	};

	exports.default = Toggle;

/***/ },
/* 364 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var toggleStyle = {
	  style: {
	    boxSizing: 'border-box',
	    borderRadius: 32,
	    height: 32,
	    width: 68,
	    WebkitUserSelect: 'none',
	    position: 'relative',
	    cursor: 'pointer',
	    display: 'inline-block'
	  },

	  focusStyle: {
	    WebkitAnimation: 'belle-toggle-focus 2s',
	    outline: 0 },

	  // avoid default focus behaviour
	  disabledStyle: {
	    opacity: 0.6,
	    cursor: 'not-allowed'
	  },

	  sliderStyle: {
	    boxSizing: 'border-box',
	    position: 'relative',

	    // Calculated with 2 * the width of choice area
	    width: 104,
	    transition: 'left 0.1s',
	    transitionTimingFunction: 'ease-in-out',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  sliderWrapperStyle: {
	    boxSizing: 'border-box',
	    overflow: 'hidden',
	    borderRadius: 32,
	    lineHeight: 1,
	    boxShadow: 'inset 0 1px 0px 0px rgba(0,0,0,0.6)'
	  },

	  handleStyle: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    boxSizing: 'border-box',
	    borderRadius: 32,
	    backgroundColor: 'rgb(243, 243, 243)',
	    height: 31,
	    width: 32,
	    cursor: 'pointer',
	    border: '1px solid rgb(220, 220, 220)',
	    boxShadow: '0 1px 0px 0px rgb(185, 185, 185)',

	    /* animations */
	    transition: 'left 0.1s',
	    transitionTimingFunction: 'ease-in-out',

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'none',
	    touchAction: 'none',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  firstChoiceStyle: {
	    display: 'inline-block',
	    boxSizing: 'border-box',
	    height: 32,

	    // Calculated with the width of the whole toggle - half of the width from the handle
	    //
	    // This allows to have a round handle that is position exactly in on top of the
	    // border between the two choice areas.
	    width: 52,
	    lineHeight: '32px',
	    textAlign: 'center',
	    color: '#FFF',
	    backgroundColor: 'rgba(43, 206, 56, 0.8)',
	    textIndent: -10,
	    fontSize: 15,

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  secondChoiceStyle: {
	    display: 'inline-block',
	    boxSizing: 'border-box',
	    height: 32,

	    // Calculated with the width of the whole toggle - half of the width from the handle
	    //
	    // This allows to have a round handle that is position exactly in on top of the
	    // border between the two choice areas.
	    width: 52,
	    lineHeight: '32px',
	    textAlign: 'center',
	    color: '#FFF',
	    backgroundColor: 'rgba(205, 205, 205, 0.8)',
	    textIndent: 10,
	    fontSize: 15,

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  hoverHandleStyle: {
	    backgroundColor: 'rgb(250, 250, 250)'
	  },

	  activeHandleStyle: {
	    height: 32,
	    backgroundColor: 'rgb(246, 246, 246)',
	    boxShadow: '0 0 0 0 rgb(189, 189, 189)'
	  },

	  disabledHandleStyle: {
	    cursor: 'not-allowed'
	  }
	};

	exports.default = toggleStyle;

/***/ },
/* 365 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var toggleConfig = {
	  preventFocusStyleForTouchAndClick: true
	};

	exports.default = toggleConfig;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _injectStyle = __webpack_require__(311);

	var _unionClassNames = __webpack_require__(310);

	var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

	var _helpers = __webpack_require__(308);

	var _dateHelpers = __webpack_require__(367);

	var _datePicker = __webpack_require__(369);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _datePicker3 = __webpack_require__(370);

	var _datePicker4 = _interopRequireDefault(_datePicker3);

	var _ActionArea = __webpack_require__(371);

	var _ActionArea2 = _interopRequireDefault(_ActionArea);

	var _DisabledDay = __webpack_require__(373);

	var _DisabledDay2 = _interopRequireDefault(_DisabledDay);

	var _Day = __webpack_require__(374);

	var _Day2 = _interopRequireDefault(_Day);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var datePickerPropTypes = {
	  // value related props
	  defaultValue: _react.PropTypes.instanceOf(Date),
	  value: _react.PropTypes.instanceOf(Date),
	  valueLink: _react.PropTypes.shape({
	    value: _react.PropTypes.instanceOf(Date),
	    requestChange: _react.PropTypes.func.isRequired
	  }),

	  min: _react.PropTypes.instanceOf(Date),
	  max: _react.PropTypes.instanceOf(Date),

	  // component config related props
	  locale: _react.PropTypes.string,
	  month: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	  defaultMonth: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	  year: _react.PropTypes.number,
	  defaultYear: _react.PropTypes.number,
	  showOtherMonthDate: _react.PropTypes.bool,
	  renderDay: _react.PropTypes.func,
	  tabIndex: _react.PropTypes.number,
	  'aria-label': _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  readOnly: _react.PropTypes.bool,
	  preventFocusStyleForTouchAndClick: _react.PropTypes.bool,

	  // event callbacks for wrapper
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchCancel: _react.PropTypes.func,

	  // callbacks for change of values
	  onUpdate: _react.PropTypes.func,
	  onMonthUpdate: _react.PropTypes.func,

	  // props
	  dayProps: _react.PropTypes.object,
	  navBarProps: _react.PropTypes.object,
	  prevMonthNavProps: _react.PropTypes.object,
	  prevMonthNavIconProps: _react.PropTypes.object,
	  nextMonthNavProps: _react.PropTypes.object,
	  nextMonthNavIconProps: _react.PropTypes.object,
	  monthLabelProps: _react.PropTypes.object,
	  dayLabelProps: _react.PropTypes.object,
	  weekHeaderProps: _react.PropTypes.object,
	  weekGridProps: _react.PropTypes.object,

	  // ClassNames
	  className: _react.PropTypes.string,

	  // wrapper styles
	  style: _react.PropTypes.object,
	  disabledStyle: _react.PropTypes.object,
	  readOnlyStyle: _react.PropTypes.object,
	  hoverStyle: _react.PropTypes.object,
	  activeStyle: _react.PropTypes.object,
	  focusStyle: _react.PropTypes.object,
	  disabledHoverStyle: _react.PropTypes.object,

	  // navbar styles
	  navBarStyle: _react.PropTypes.object,

	  // prevMonthNav styles
	  prevMonthNavStyle: _react.PropTypes.object,
	  prevMonthNavIconStyle: _react.PropTypes.object,
	  hoverPrevMonthNavStyle: _react.PropTypes.object,
	  activePrevMonthNavStyle: _react.PropTypes.object,

	  // nextMonthNav styles
	  nextMonthNavStyle: _react.PropTypes.object,
	  nextMonthNavIconStyle: _react.PropTypes.object,
	  hoverNextMonthNavStyle: _react.PropTypes.object,
	  activeNextMonthNavStyle: _react.PropTypes.object,

	  weekHeaderStyle: _react.PropTypes.object,

	  // monthlbl styles
	  monthLabelStyle: _react.PropTypes.object,

	  // daylbl styles
	  dayLabelStyle: _react.PropTypes.object,
	  disabledDayLabelStyle: _react.PropTypes.object,
	  weekendLabelStyle: _react.PropTypes.object,

	  // day styles
	  dayStyle: _react.PropTypes.object,
	  disabledDayStyle: _react.PropTypes.object,
	  readOnlyDayStyle: _react.PropTypes.object,
	  activeDayStyle: _react.PropTypes.object,
	  focusDayStyle: _react.PropTypes.object,
	  disabledFocusDayStyle: _react.PropTypes.object,
	  todayStyle: _react.PropTypes.object,
	  selectedDayStyle: _react.PropTypes.object,
	  otherMonthDayStyle: _react.PropTypes.object,
	  weekendStyle: _react.PropTypes.object
	};

	/**
	 * Returns an object with properties that are relevant for the wrapping div of the date picker.
	 */
	function sanitizeWrapperProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(datePickerPropTypes));
	}

	/**
	 * Returns an object with properties that are relevant for day span.
	 */
	function sanitizeEmptyDayProps(properties) {
	  return (0, _helpers.omit)(properties, ['key', 'style']);
	}

	/**
	 * Returns an object with properties that are relevant for day span.
	 */
	function sanitizeDisabledDayProps(properties) {
	  return (0, _helpers.omit)(properties, ['key', 'onMouseEnter', 'onMouseLeave', 'style']);
	}

	/**
	 * Returns an object with properties that are relevant for day span.
	 */
	function sanitizeDayProps(properties) {
	  return (0, _helpers.omit)(properties, ['key', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onTouchCancel', 'aria-selected', 'style', 'role']);
	}

	function sanitizeNavBarProps(properties) {
	  return (0, _helpers.omit)(properties, ['style']);
	}

	function sanitizePrevMonthNavProps(properties) {
	  return (0, _helpers.omit)(properties, ['aria-label', 'className', 'onClick', 'style']);
	}

	function sanitizePrevMonthNavIconProps(properties) {
	  return (0, _helpers.omit)(properties, ['style']);
	}

	function sanitizeNextMonthNavProps(properties) {
	  return (0, _helpers.omit)(properties, ['aria-label', 'className', 'onClick', 'style']);
	}

	function sanitizeNextMonthNavIconProps(properties) {
	  return (0, _helpers.omit)(properties, ['style']);
	}

	function sanitizeMonthLabelProps(properties) {
	  return (0, _helpers.omit)(properties, ['id', 'role', 'style']);
	}

	function sanitizeDayLabelProps(properties) {
	  return (0, _helpers.omit)(properties, ['key', 'role', 'style']);
	}

	function sanitizeWeekHeaderProps(properties) {
	  return (0, _helpers.omit)(properties, ['style']);
	}

	function sanitizeWeekGridProps(properties) {
	  return (0, _helpers.omit)(properties, ['role', 'style']);
	}

	/**
	 * Injects pseudo classes for styles into the DOM.
	 */
	function updatePseudoClassStyle(pseudoStyleIds, properties, preventFocusStyleForTouchAndClick) {
	  var styles = [{
	    id: pseudoStyleIds.prevMonthNavStyleId,
	    style: _extends({}, _datePicker2.default.hoverPrevMonthNavStyle, properties.hoverPrevMonthNavStyle),
	    pseudoClass: 'hover'

	  }, {
	    id: pseudoStyleIds.nextMonthNavStyleId,
	    style: _extends({}, _datePicker2.default.hoverNextMonthNavStyle, properties.hoverNextMonthNavStyle),
	    pseudoClass: 'hover'
	  }];
	  var focusStyle = void 0;
	  if (preventFocusStyleForTouchAndClick) {
	    focusStyle = { outline: 0 };
	  } else {
	    focusStyle = _extends({}, _datePicker2.default.focusStyle, properties.focusStyle);
	  }

	  styles.push({
	    id: pseudoStyleIds.styleId,
	    style: focusStyle,
	    pseudoClass: 'focus'
	  });
	  (0, _injectStyle.injectStyles)(styles);
	}

	/**
	 * DatePicker React Component.
	 *
	 * This implementation follows the recommendations proposed here:
	 * http://www.w3.org/TR/wai-aria-practices/#datepicker
	 */

	var DatePicker = function (_Component) {
	  _inherits(DatePicker, _Component);

	  function DatePicker(properties) {
	    _classCallCheck(this, DatePicker);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePicker).call(this, properties));

	    _initialiseProps.call(_this);

	    var selectedDate = void 0;
	    var month = void 0;
	    var year = void 0;

	    if ((0, _helpers.has)(properties, 'valueLink')) {
	      selectedDate = properties.valueLink.value;
	    } else if ((0, _helpers.has)(properties, 'value')) {
	      selectedDate = properties.value;
	    } else if ((0, _helpers.has)(properties, 'defaultValue')) {
	      selectedDate = properties.defaultValue;
	    }

	    if (properties.defaultMonth) {
	      month = properties.defaultMonth - 1;
	    } else if (selectedDate) {
	      month = selectedDate.getMonth();
	    } else {
	      month = (0, _dateHelpers.today)().getMonth();
	    }

	    if (properties.defaultYear) {
	      year = properties.defaultYear;
	    } else if (selectedDate) {
	      year = selectedDate.getFullYear();
	    } else {
	      year = (0, _dateHelpers.today)().getFullYear();
	    }

	    _this.state = {
	      isFocused: false,
	      isActive: false,
	      selectedDate: selectedDate,
	      month: month,
	      year: year
	    };

	    _this.localeData = (0, _dateHelpers.getLocaleData)(properties.locale);
	    _this.wrapperProps = sanitizeWrapperProps(properties);
	    _this.dayProps = sanitizeDayProps(properties.dayProps);
	    _this.disabledDayProps = sanitizeDisabledDayProps(properties.dayProps);
	    _this.emptyDayProps = sanitizeEmptyDayProps(properties.dayProps);
	    _this.navBarProps = sanitizeNavBarProps(properties.navBarProps);
	    _this.prevMonthNavProps = sanitizePrevMonthNavProps(properties.prevMonthNavProps);
	    _this.prevMonthNavIconProps = sanitizePrevMonthNavIconProps(properties.prevMonthNavIconProps);
	    _this.nextMonthNavProps = sanitizeNextMonthNavProps(properties.nextMonthNavProps);
	    _this.nextMonthNavIconProps = sanitizeNextMonthNavIconProps(properties.nextMonthNavIconProps);
	    _this.monthLabelProps = sanitizeMonthLabelProps(properties.monthLabelProps);
	    _this.dayLabelProps = sanitizeDayLabelProps(properties.dayLabelProps);
	    _this.weekHeaderProps = sanitizeWeekHeaderProps(properties.weekHeaderProps);
	    _this.weekGridProps = sanitizeWeekGridProps(properties.weekGridProps);

	    _this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _datePicker4.default.preventFocusStyleForTouchAndClick;
	    return _this;
	  }

	  _createClass(DatePicker, [{
	    key: 'componentWillMount',


	    /**
	     * Generates the style-id based on React's unique DOM node id.
	     * Calls function to inject the pseudo classes into the dom.
	     */
	    value: function componentWillMount() {
	      var id = (0, _helpers.uniqueId)();
	      this.pseudoStyleIds = {};
	      this.pseudoStyleIds.styleId = 'wrapper-style-id' + id;
	      this.pseudoStyleIds.prevMonthNavStyleId = 'prevMonthNav-style-id' + id;
	      this.pseudoStyleIds.nextMonthNavStyleId = 'nextMonthNav-style-id' + id;
	      updatePseudoClassStyle(this.pseudoStyleIds, this.props, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Function will update component state and styles as new props are received.
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(properties) {
	      var newState = {};

	      if ((0, _helpers.has)(properties, 'valueLink')) {
	        newState.selectedDate = properties.valueLink.value;
	      } else if ((0, _helpers.has)(properties, 'value')) {
	        newState.selectedDate = properties.value;
	      }

	      this.setState(newState);

	      this.localeData = (0, _dateHelpers.getLocaleData)(properties.locale);
	      this.wrapperProps = sanitizeWrapperProps(properties);
	      this.dayProps = sanitizeDayProps(properties.dayProps);
	      this.disabledDayProps = sanitizeDisabledDayProps(properties.dayProps);
	      this.emptyDayProps = sanitizeEmptyDayProps(properties.dayProps);
	      this.navBarProps = sanitizeNavBarProps(properties.navBarProps);
	      this.prevMonthNavProps = sanitizePrevMonthNavProps(properties.prevMonthNavProps);
	      this.prevMonthNavIconProps = sanitizePrevMonthNavIconProps(properties.prevMonthNavIconProps);
	      this.nextMonthNavProps = sanitizeNextMonthNavProps(properties.nextMonthNavProps);
	      this.nextMonthNavIconProps = sanitizeNextMonthNavIconProps(properties.nextMonthNavIconProps);
	      this.monthLabelProps = sanitizeMonthLabelProps(properties.monthLabelProps);
	      this.dayLabelProps = sanitizeDayLabelProps(properties.dayLabelProps);
	      this.weekHeaderProps = sanitizeWeekHeaderProps(properties.weekHeaderProps);
	      this.weekGridProps = sanitizeWeekGridProps(properties.weekGridProps);

	      this.preventFocusStyleForTouchAndClick = (0, _helpers.has)(properties, 'preventFocusStyleForTouchAndClick') ? properties.preventFocusStyleForTouchAndClick : _datePicker4.default.preventFocusStyleForTouchAndClick;

	      (0, _injectStyle.removeAllStyles)(Object.keys(this.pseudoStyleIds));
	      updatePseudoClassStyle(this.pseudoStyleIds, properties, this.preventFocusStyleForTouchAndClick);
	    }

	    /**
	     * Removes pseudo classes from the DOM once component gets unmounted.
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _injectStyle.removeAllStyles)(Object.keys(this.pseudoStyleIds));
	    }

	    /**
	     * Callback is called when wrapper is focused, it will conditionally set isFocused.
	     *
	     * In addition this.state.focusedDateKey will be set to current date of whichever month is displayed on date-picker (if this.state.focusedDateKey is undefined).
	     */


	    /**
	     * Callback is called when wrapper is blurred, it will reset isFocused, focusedDateKey.
	     */


	    /**
	      * Callback is called when wrapper receives mouseDown. Conditionally set isActive.
	      */


	    /**
	     * Callback is called when wrapper receives mouseUp. Reset isActive.
	     */


	    /**
	     * Callback is called when touch starts on wrapper. Conditionally sets isActive.
	     */


	    /**
	     * Callback is called when touch ends on wrapper. Reset isActive.
	     */


	    /**
	     * On keyDown on wrapper if date-picker is not disabled and some day is focused:
	     * 1. arrow keys will navigate calendar
	     * 2. enter key will set selectedDate of component
	     * 3. space key will set / unset selectedDate
	     * 4. props.onKeyDown will be called
	     */


	    /**
	     * Function will handle pageUp key down event.
	     */


	    /**
	     * Function will handle pageDown key down event.
	     */


	    /**
	     * Callback is called when some day receives mouseDown.
	     * It will conditionally set this.state.activeDay, this.state.focusedDateKey and call props.onDayMouseDown.
	     *
	     * Note: mouseEvent.button is supported by all browsers are are targeting: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
	     */


	    /**
	     * Callback is called when some day receives mouseUp.
	     * It will reset this.state.activeDay and call props.onDayMouseUp.
	     */


	    /**
	     * Callback is called when some day receives MouseEnter. It will conditionally set this.state.focusedDateKey.
	     */


	    /**
	     * Callback is called when some day receives MouseLeave. It will reset this.state.focusedDateKey.
	     */


	    /**
	     * Callback is called when some day receives touchStart.
	     * It will conditionally set this.state.activeDay and call props.onDayTouchStart.
	     */


	    /**
	     * Callback is called when some day receives touchEnd.
	     * It will reset this.state.activeDay and call props.onDayTouchEnd.
	     */

	  }, {
	    key: '_triggerSelectDate',


	    /**
	     * Depending on whether component is controlled or uncontrolled the function will update this.state.selectedDate.
	     * It will also call props.onUpdate.
	     */
	    value: function _triggerSelectDate(day, month, year) {
	      if (!this.props.disabled && !this.props.readOnly) {
	        var selectedDate = day ? new Date(year, month, day) : undefined;

	        if ((0, _helpers.has)(this.props, 'valueLink')) {
	          this.props.valueLink.requestChange(selectedDate);
	        } else if (!(0, _helpers.has)(this.props, 'value')) {
	          this.setState({
	            selectedDate: selectedDate,
	            month: month,
	            year: year
	          });
	        }

	        if (this.props.onUpdate) {
	          this.props.onUpdate({
	            value: selectedDate
	          });
	        }
	      }
	    }

	    /**
	     * Function will select / deselect date passed to it, it is used in case of 'Space' keyDown on a day.
	     */

	  }, {
	    key: '_triggerToggleDate',
	    value: function _triggerToggleDate(date) {
	      if (!this.props.disabled && !this.props.readOnly) {
	        var day = void 0;
	        var month = void 0;
	        var year = void 0;
	        if (this.state.selectedDate && date && this.state.selectedDate.getDate() === date.getDate() && this.state.selectedDate.getMonth() === date.getMonth() && this.state.selectedDate.getFullYear() === date.getFullYear()) {
	          day = undefined;
	          month = this.state.month;
	          year = this.state.year;
	        } else {
	          day = date.getDate();
	          month = date.getMonth();
	          year = date.getFullYear();
	        }

	        this._triggerSelectDate(day, month, year);
	      }
	    }
	  }, {
	    key: '_focusOnTheFistDayOfTheMonth',
	    value: function _focusOnTheFistDayOfTheMonth() {
	      this.setState({
	        focusedDateKey: this.state.year + '-' + (this.state.month + 1) + '-1'
	      });
	    }
	  }, {
	    key: '_focusOnFallbackDay',
	    value: function _focusOnFallbackDay() {
	      if (this.state.lastHoveredDay) {
	        this.setState({
	          focusedDateKey: this.state.lastHoveredDay
	        });
	      } else {
	        this._focusOnTheFistDayOfTheMonth();
	      }
	    }

	    /**
	     * The function is mainly used when some day is focused and Arrow keys are pressed to navigate to some other day.
	     * days is the number of days by which focused should be moved ahead or behind.
	     */

	  }, {
	    key: '_focusOtherDay',
	    value: function _focusOtherDay(days) {
	      var focusedDate = (0, _dateHelpers.getDateForDateKey)(this.state.focusedDateKey);
	      var currentMonth = focusedDate.getMonth();

	      var nextFocusedDate = (0, _dateHelpers.getDateForDateKey)(this.state.focusedDateKey);
	      nextFocusedDate.setDate(nextFocusedDate.getDate() + days);
	      var nextFocusedDateKey = (0, _dateHelpers.convertDateToDateKey)(nextFocusedDate);
	      var nextMonth = nextFocusedDate.getMonth();

	      if (nextMonth !== currentMonth) {
	        if ((nextMonth < currentMonth || nextMonth === 11 && currentMonth === 0) && !(nextMonth === 0 && currentMonth === 11)) {
	          this._decreaseMonthYear();
	        } else if ((nextMonth > currentMonth || nextMonth === 0 && currentMonth === 11) && !(nextMonth === 11 && currentMonth === 0)) {
	          this._increaseMonthYear();
	        }
	      }

	      this.setState({
	        focusedDateKey: nextFocusedDateKey
	      });
	    }

	    /**
	     * The function will decrease current month in state. It will also call props.onMonthUpdate.
	     */

	  }, {
	    key: '_decreaseMonthYear',
	    value: function _decreaseMonthYear() {
	      var newMonth = void 0;
	      var newYear = void 0;
	      if (this.state.month === 0) {
	        newMonth = 11;
	        newYear = this.state.year - 1;
	      } else {
	        newMonth = this.state.month - 1;
	        newYear = this.state.year;
	      }

	      this.setState({
	        month: newMonth,
	        year: newYear,
	        focusedDateKey: undefined,
	        lastHoveredDay: undefined
	      });
	      if (this.props.onMonthUpdate) {
	        this.props.onMonthUpdate(newMonth + 1, newYear);
	      }
	    }

	    /**
	     * The function will increase current month in state. It will also call props.onMonthUpdate.
	     */

	  }, {
	    key: '_increaseMonthYear',
	    value: function _increaseMonthYear() {
	      var newMonth = void 0;
	      var newYear = void 0;
	      if (this.state.month === 11) {
	        newMonth = 0;
	        newYear = this.state.year + 1;
	      } else {
	        newMonth = this.state.month + 1;
	        newYear = this.state.year;
	      }

	      this.setState({
	        month: newMonth,
	        year: newYear,
	        focusedDateKey: undefined,
	        lastHoveredDay: undefined
	      });
	      if (this.props.onMonthUpdate) {
	        this.props.onMonthUpdate(newMonth + 1, newYear);
	      }
	    }
	  }, {
	    key: '_isWithinMinAndMax',
	    value: function _isWithinMinAndMax(date) {
	      return !(this.props.min && date < this.props.min || this.props.max && date > this.props.max);
	    }
	  }, {
	    key: '_renderPrevMonthNav',
	    value: function _renderPrevMonthNav() {
	      var prevMonthNavStyle = _extends({}, _datePicker2.default.prevMonthNavStyle, this.props.prevMonthNavStyle);

	      var prevMonthNavIconStyle = _extends({}, _datePicker2.default.prevMonthNavIconStyle, this.props.prevMonthNavIconStyle);

	      var className = this.pseudoStyleIds.prevMonthNavStyleId;
	      if (this.props.prevMonthNavProps) {
	        className = (0, _unionClassNames2.default)(this.props.prevMonthNavProps.className, className);
	      }

	      return _react2.default.createElement(
	        _ActionArea2.default,
	        _extends({
	          onUpdate: this._onClickPrevMonth,
	          style: prevMonthNavStyle,
	          className: className,
	          'aria-label': 'Go to previous month'
	        }, this.prevMonthNavProps),
	        _react2.default.createElement('div', _extends({
	          style: prevMonthNavIconStyle
	        }, this.prevMonthNavIconProps))
	      );
	    }
	  }, {
	    key: '_renderNextMonthNav',
	    value: function _renderNextMonthNav() {
	      var nextMonthNavStyle = _extends({}, _datePicker2.default.nextMonthNavStyle, this.props.nextMonthNavStyle);

	      var nextMonthNavIconStyle = _extends({}, _datePicker2.default.nextMonthNavIconStyle, this.props.nextMonthNavIconStyle);

	      var className = this.pseudoStyleIds.nextMonthNavStyleId;
	      if (this.props.nextMonthNavProps) {
	        className = (0, _unionClassNames2.default)(this.props.nextMonthNavProps.className, className);
	      }

	      return _react2.default.createElement(
	        _ActionArea2.default,
	        _extends({
	          onUpdate: this._onClickNextMonth,
	          style: nextMonthNavStyle,
	          className: className,
	          'aria-label': 'Go to next month'
	        }, this.nextMonthNavProps),
	        _react2.default.createElement('div', _extends({
	          style: nextMonthNavIconStyle
	        }, this.nextMonthNavIconProps))
	      );
	    }

	    /**
	     * Function will return jsx for rendering the nav bar for calendar.
	     * Depending on following rules it will apply styles to prevMonthNav and nextMonthNav:
	     * 1. If disabled hide navs
	     * 2. If active apply activeStyles
	     */

	  }, {
	    key: '_renderNavBar',
	    value: function _renderNavBar() {
	      var navBarStyle = _extends({}, _datePicker2.default.navBarStyle, this.props.navBarStyle);
	      var monthLabelStyle = _extends({}, _datePicker2.default.monthLabelStyle, this.props.monthLabelStyle);

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: navBarStyle
	        }, this.navBarProps),
	        this._renderPrevMonthNav(),
	        _react2.default.createElement(
	          'span',
	          _extends({
	            style: monthLabelStyle,
	            role: 'heading'
	            /*
	              This label has an id as suggested in http://www.w3.org/TR/wai-aria-practices/#datepicker
	            */
	            , id: this.state.year + '-' + this.state.month
	          }, this.monthLabelProps),
	          this.localeData.monthNames[this.state.month] + ' ' + this.state.year
	        ),
	        this._renderNextMonthNav()
	      );
	    }

	    /**
	     * Function will return jsx for rendering the week header for calendar.
	     * Disabled styles will be applied for disabled date-picker.
	     * Day headers will be rendered using locale information.
	     */

	  }, {
	    key: '_renderWeekHeader',
	    value: function _renderWeekHeader() {
	      var _this2 = this;

	      var weekHeaderStyle = _extends({}, _datePicker2.default.weekHeaderStyle, this.props.weekHeaderStyle);

	      var dayLabelStyle = _extends({}, _datePicker2.default.dayLabelStyle, this.props.dayLabelStyle);
	      if (this.props.disabled) {
	        dayLabelStyle = _extends({}, dayLabelStyle, _datePicker2.default.disabledDayLabelStyle, this.props.disabledDayLabelStyle);
	      }

	      var weekendLabelStyle = _extends({}, dayLabelStyle, _datePicker2.default.weekendLabelStyle, this.props.weekendLabelStyle);
	      var dayNames = (0, _helpers.shift)(this.localeData.dayNamesMin, this.localeData.firstDay);
	      dayNames = this.localeData.isRTL ? (0, _helpers.reverse)(dayNames) : dayNames;
	      var weekendIndex = (7 - this.localeData.firstDay) % 7 + this.localeData.weekEnd;
	      weekendIndex = this.localeData.isRTL ? 6 - weekendIndex : weekendIndex;

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          style: weekHeaderStyle
	        }, this.weekHeaderProps),
	        (0, _helpers.map)(dayNames, function (dayAbbr, index) {
	          return _react2.default.createElement(
	            'span',
	            _extends({
	              key: 'dayAbbr-' + index,
	              style: index === weekendIndex ? weekendLabelStyle : dayLabelStyle,
	              role: 'columnheader'
	            }, _this2.dayLabelProps),
	            dayAbbr
	          );
	        })
	      );
	    }

	    /**
	     * Function will return jsx for rendering the a day.
	     * It will apply various styles in sequence as below (styles will be additive):
	     * 1. If component is readOnly apply readOnly styles
	     * 2. If component is disabled apply disabled styles
	     *    - If component is disabled and hovered apply disableHover styles
	     * 3. If day is weekend apply weekendStyle
	     * 4. If its day in current month and component is not disabled or readOnly:
	     *    - If its current day apply todayStyle
	     *    - If this is selected day apply selectedDayStyle
	     *    - If component is hovered apply hover styles
	     *    - If component is hovered and active apply hoveredStyles + activeStyles
	     *    - If component is hovered and not active but focused and preventFocusStyleForTouchAndClick apply focus styles
	     * 5. If current day represents other months day in calendar apply otherMonthDayStyle
	     */

	  }, {
	    key: '_renderDay',
	    value: function _renderDay(currentDate, index) {
	      var day = currentDate.getDate();
	      var month = currentDate.getMonth();
	      var year = currentDate.getFullYear();
	      var isOtherMonth = month !== this.state.month;
	      var dateKey = (0, _dateHelpers.convertDateToDateKey)(currentDate);
	      var isDisabledDay = !this._isWithinMinAndMax(currentDate);

	      var ariaSelected = false;

	      var dayStyle = _extends({}, _datePicker2.default.dayStyle, this.props.dayStyle);

	      if (this.props.readOnly) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.readOnlyDayStyle, this.props.readOnlyDayStyle);
	      }

	      if (isOtherMonth) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.otherMonthDayStyle, this.props.otherMonthDayStyle);
	      }

	      if (this.props.disabled || isDisabledDay) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.disabledDayStyle, this.props.disabledDayStyle);
	      }

	      if (currentDate.getDay() === this.localeData.weekEnd) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.weekendStyle, this.props.weekendStyle);
	      }

	      if (day === (0, _dateHelpers.today)().getDate() && month === (0, _dateHelpers.today)().getMonth() && year === (0, _dateHelpers.today)().getFullYear()) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.todayStyle, this.props.todayStyle);
	      }

	      if (this.state.selectedDate && day === this.state.selectedDate.getDate() && currentDate.getMonth() === this.state.selectedDate.getMonth() && currentDate.getFullYear() === this.state.selectedDate.getFullYear()) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.selectedDayStyle, this.props.selectedDayStyle);
	        ariaSelected = true;
	      }

	      if (this.state.focusedDateKey === dateKey) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.focusDayStyle, this.props.focusDayStyle);
	        if (this.props.disabled || isDisabledDay) {
	          dayStyle = _extends({}, dayStyle, _datePicker2.default.disabledFocusDayStyle, this.props.disabledFocusDayStyle);
	        }
	      }

	      if (!this.props.disabled && !this.props.readOnly && this.state.activeDay === dateKey) {
	        dayStyle = _extends({}, dayStyle, _datePicker2.default.activeDayStyle, this.props.activeDayStyle);
	      }

	      var renderedDay = this.props.renderDay ? this.props.renderDay(currentDate) : day;

	      if (!this.props.showOtherMonthDate && isOtherMonth) {
	        return _react2.default.createElement('span', _extends({
	          key: 'day-' + index,
	          style: dayStyle
	        }, this.emptyDayProps));
	      }

	      if (isDisabledDay) {
	        return _react2.default.createElement(
	          _DisabledDay2.default,
	          {
	            key: 'day-' + index,
	            style: dayStyle,
	            dateKey: dateKey,
	            onDayMouseEnter: this._onDayMouseEnter,
	            onDayMouseLeave: this._onDayMouseLeave,
	            disabledDayProps: this.disabledDayProps
	          },
	          renderedDay
	        );
	      }

	      return _react2.default.createElement(
	        _Day2.default,
	        {
	          key: 'day-' + index,
	          dateKey: dateKey,
	          onDayMouseDown: this._onDayMouseDown,
	          onDayMouseUp: this._onDayMouseUp,
	          onDayMouseEnter: this._onDayMouseEnter,
	          onDayMouseLeave: this._onDayMouseLeave,
	          onDayTouchStart: this._onDayTouchStart,
	          onDayTouchEnd: this._onDayTouchEnd,
	          onDayTouchCancel: this._onDayTouchCancel,
	          selected: ariaSelected,
	          style: dayStyle,
	          dayProps: this.dayProps
	        },
	        renderedDay
	      );
	    }

	    /**
	     * Function will render:
	     * - main calendar component
	     * - call methods to render navBar and week header
	     * - get array of weeks in a month and for each day in the week call method to render day
	     *
	     * It will apply styles sequentially according to Wrapper according to following rules:
	     * 1. If component is readOnly apply readOnlyStyle
	     * 2. If component is disabled apply disabledStyle
	     *    - If disabled component is hovered apply disabledHoverStyle
	     * 3. If component is not disabled:
	     *    - If component is hovered apply hover style
	     *    - If component is hovered and active apply hover + active styles
	     *    - If component is hovered and focused but not active and preventFocusStyleForTouchAndClick is true apply focusStyles
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var style = _extends({}, _datePicker2.default.style, this.props.style);
	      if (this.props.readOnly) {
	        style = _extends({}, style, _datePicker2.default.readOnlyStyle, this.props.readOnlyStyle);
	      }

	      if (this.props.disabled) {
	        style = _extends({}, style, _datePicker2.default.disabledStyle, this.props.disabledStyle);
	      }

	      if (this.preventFocusStyleForTouchAndClick && this.state.isFocused) {
	        style = _extends({}, style, _datePicker2.default.focusStyle, this.props.focusStyle);
	      }

	      if (this.state.isActive) {
	        style = _extends({}, style, _datePicker2.default.activeStyle, this.props.activeStyle);
	      }

	      var weekArray = (0, _dateHelpers.getWeekArrayForMonth)(this.state.month, this.state.year, this.localeData.firstDay);

	      var tabIndex = !this.props.disabled ? this.props.tabIndex : false;

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          tabIndex: tabIndex,
	          onFocus: this._onFocus,
	          onBlur: this._onBlur,
	          onKeyDown: this._onKeyDown,
	          onMouseDown: this._onMouseDown,
	          onMouseUp: this._onMouseUp,
	          onTouchStart: this._onTouchStart,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          'aria-label': this.props['aria-label'],
	          'aria-disabled': this.props.disabled,
	          'aria-readonly': this.props.readOnly,
	          style: style,
	          className: (0, _unionClassNames2.default)(this.props.className, this.pseudoStyleIds.styleId)
	        }, this.wrapperProps),
	        this._renderNavBar(),
	        _react2.default.createElement(
	          'div',
	          _extends({
	            role: 'grid',
	            style: _datePicker2.default.weekGridStyle
	          }, this.weekGridProps),
	          this._renderWeekHeader(),
	          (0, _helpers.map)(weekArray, function (week) {
	            var weekDays = _this3.localeData.isRTL ? (0, _helpers.reverse)(week) : week;
	            return (0, _helpers.map)(weekDays, function (day, dayIndex) {
	              return _this3._renderDay(day, dayIndex);
	            });
	          })
	        )
	      );
	    }
	  }]);

	  return DatePicker;
	}(_react.Component);

	DatePicker.displayName = 'DatePicker';
	DatePicker.propTypes = datePickerPropTypes;
	DatePicker.defaultProps = {
	  tabIndex: 0,
	  'aria-label': 'datepicker',
	  disabled: false,
	  readOnly: false,
	  showOtherMonthDate: true
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this4 = this;

	  this._onFocus = function () {
	    if (!_this4.props.disabled) {
	      if (!_this4.state.isActive) {
	        var newState = {
	          isFocused: true
	        };
	        if (!_this4.state.focusedDateKey) {
	          if (_this4.state.selectedDate && _this4.state.selectedDate.getMonth() === _this4.state.month && _this4.state.selectedDate.getFullYear() === _this4.state.year) {
	            newState.focusedDateKey = (0, _dateHelpers.convertDateToDateKey)(_this4.state.selectedDate);
	          } else if (_this4.state.month === (0, _dateHelpers.today)().getMonth() && _this4.state.year === (0, _dateHelpers.today)().getFullYear()) {
	            newState.focusedDateKey = (0, _dateHelpers.getDateKey)((0, _dateHelpers.today)().getFullYear(), (0, _dateHelpers.today)().getMonth() + 1, (0, _dateHelpers.today)().getDate());
	          } else {
	            newState.focusedDateKey = (0, _dateHelpers.getDateKey)(_this4.state.year, _this4.state.month + 1, 1);
	          }
	        }

	        _this4.setState(newState);
	      }
	    }

	    if (_this4.props.onFocus) {
	      _this4.props.onFocus(event);
	    }
	  };

	  this._onBlur = function () {
	    if (!_this4.props.disabled) {
	      _this4.setState({
	        isFocused: false,
	        focusedDateKey: undefined
	      });
	    }

	    if (_this4.props.onBlur) {
	      _this4.props.onBlur(event);
	    }
	  };

	  this._onMouseDown = function (event) {
	    if (!_this4.props.disabled && event.button === 0) {
	      _this4.setState({
	        isActive: true
	      });
	    }

	    if (_this4.props.onMouseDown) {
	      _this4.props.onMouseDown(event);
	    }
	  };

	  this._onMouseUp = function (event) {
	    if (!_this4.props.disabled && event.button === 0) {
	      _this4.setState({
	        isActive: false
	      });
	    }

	    if (_this4.props.onMouseUp) {
	      _this4.props.onMouseUp(event);
	    }
	  };

	  this._onTouchStart = function (event) {
	    if (!_this4.props.disabled && event.touches.length === 1) {
	      _this4.setState({
	        isActive: true
	      });
	    }

	    if (_this4.props.onTouchStart) {
	      _this4.props.onTouchStart(event);
	    }
	  };

	  this._onTouchEnd = function () {
	    if (!_this4.props.disabled) {
	      _this4.setState({
	        isActive: false
	      });
	    }

	    if (_this4.props.onTouchEnd) {
	      _this4.props.onTouchEnd(event);
	    }
	  };

	  this._onTouchCancel = function () {
	    _this4.setState({
	      isActive: false
	    });

	    if (_this4.props.onTouchCancel) {
	      _this4.props.onTouchCancel(event);
	    }
	  };

	  this._onKeyDown = function (event) {
	    if (!_this4.props.disabled) {
	      if (event.key === 'Home') {
	        // Moves to the first day of the current month.
	        event.preventDefault();
	        _this4._focusOnTheFistDayOfTheMonth();
	      } else if (event.key === 'End') {
	        // Moves to the last day of the current month.
	        event.preventDefault();
	        var date = (0, _dateHelpers.getLastDayForMonth)(_this4.state.year, _this4.state.month);
	        _this4.setState({
	          focusedDateKey: (0, _dateHelpers.convertDateToDateKey)(date)
	        });
	      }

	      if (_this4.state.focusedDateKey) {
	        if (event.key === 'ArrowDown') {
	          event.preventDefault();
	          _this4._focusOtherDay(7);
	        } else if (event.key === 'ArrowUp') {
	          event.preventDefault();
	          _this4._focusOtherDay(-7);
	        } else if (event.key === 'ArrowLeft') {
	          event.preventDefault();
	          _this4._focusOtherDay(_this4.localeData.isRTL ? 1 : -1);
	        } else if (event.key === 'ArrowRight') {
	          event.preventDefault();
	          _this4._focusOtherDay(_this4.localeData.isRTL ? -1 : 1);
	        } else if (event.key === 'PageUp') {
	          _this4._onPageUpKeyDown(event);
	        } else if (event.key === 'PageDown') {
	          _this4._onPageDownKeyDown(event);
	        } else if (event.key === 'Enter') {
	          event.preventDefault();
	          var _date = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);
	          if (_this4._isWithinMinAndMax(_date)) {
	            _this4._triggerSelectDate(_date.getDate(), _date.getMonth(), _date.getFullYear());
	          }
	        } else if (event.key === ' ') {
	          event.preventDefault();
	          var _date2 = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);
	          if (_this4._isWithinMinAndMax(_date2)) {
	            _this4._triggerToggleDate(_date2);
	          }
	        }
	      } else {
	        if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
	          event.preventDefault();
	          _this4._focusOnFallbackDay();
	        }
	      }
	    }

	    if (_this4.props.onKeyDown) {
	      _this4.props.onKeyDown(event);
	    }
	  };

	  this._onPageUpKeyDown = function (event) {
	    // Moves to the same date in the previous month.
	    event.preventDefault();

	    // TODO extract this to a helper function and test various edge cases
	    var date = void 0;
	    var lastDayInMonth = (0, _dateHelpers.getLastDayForMonth)(_this4.state.year, _this4.state.month - 1);
	    var focusedDate = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);

	    // jump from March 30 to Feb 29
	    if (focusedDate.getDate() > lastDayInMonth.getDate()) {
	      date = lastDayInMonth;
	    } else {
	      date = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);
	      date.setMonth(date.getMonth() - 1);
	    }

	    _this4.setState({
	      focusedDateKey: (0, _dateHelpers.convertDateToDateKey)(date),
	      month: date.getMonth(),
	      year: date.getFullYear(),
	      lastHoveredDay: undefined
	    });
	  };

	  this._onPageDownKeyDown = function (event) {
	    // Moves to the same date in the next month.
	    event.preventDefault();

	    // TODO extract this to a helper function and test various edge cases
	    var date = void 0;
	    var lastDayInMonth = (0, _dateHelpers.getLastDayForMonth)(_this4.state.year, _this4.state.month + 1);
	    var focusedDate = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);

	    // Use case: Jump from Jan 31 to Feb 29
	    if (focusedDate.getDate() > lastDayInMonth.getDate()) {
	      date = lastDayInMonth;
	    } else {
	      date = (0, _dateHelpers.getDateForDateKey)(_this4.state.focusedDateKey);
	      date.setMonth(date.getMonth() + 1);
	    }

	    _this4.setState({
	      focusedDateKey: (0, _dateHelpers.convertDateToDateKey)(date),
	      month: date.getMonth(),
	      year: date.getFullYear(),
	      lastHoveredDay: undefined
	    });
	  };

	  this._onDayMouseDown = function (dateKey, event) {
	    if (event.button === 0 && !_this4.props.disabled && !_this4.props.readOnly) {
	      _this4.setState({
	        activeDay: dateKey
	      });
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onMouseDown) {
	      _this4.props.dayProps.onMouseDown(event);
	    }
	  };

	  this._onDayMouseUp = function (dateKey, event) {
	    if (event.button === 0 && !_this4.props.disabled && !_this4.props.readOnly && _this4.state.activeDay === dateKey) {
	      var date = (0, _dateHelpers.getDateForDateKey)(dateKey);
	      var day = date.getDate();
	      var month = date.getMonth();
	      var year = date.getFullYear();
	      _this4._triggerSelectDate(day, month, year);
	      _this4.setState({
	        // Note: updating focusedDateKey in mouseEnter normally would be good enough,
	        // but it is necessary to set on mouseUp for the following edge case:
	        // A user moves the cursor over a day. Moves on with the keyboard and
	        // then without moving again just pressing the mouse. In this case
	        // mouseEnter did not get called again.
	        focusedDateKey: dateKey,
	        activeDay: undefined
	      });
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onMouseUp) {
	      _this4.props.dayProps.onMouseUp(event);
	    }
	  };

	  this._onDayMouseEnter = function (dateKey, event) {
	    if (!_this4.props.readOnly) {
	      _this4.setState({
	        focusedDateKey: dateKey
	      });
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onMouseEnter) {
	      _this4.props.dayProps.onMouseEnter(event);
	    }
	  };

	  this._onDayMouseLeave = function (dateKey, event) {
	    if (!_this4.props.readOnly && event.button === 0 && _this4.state.focusedDateKey === dateKey) {
	      _this4.setState({
	        focusedDateKey: undefined,
	        lastHoveredDay: _this4.state.focusedDateKey
	      });
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onMouseLeave) {
	      _this4.props.dayProps.onMouseLeave(event);
	    }
	  };

	  this._onDayTouchStart = function (dateKey, event) {
	    if (!_this4.props.disabled && !_this4.props.readOnly && event.touches.length === 1) {
	      _this4.setState({
	        activeDay: dateKey
	      });
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onTouchStart) {
	      _this4.props.dayProps.onTouchStart(event);
	    }
	  };

	  this._onDayTouchEnd = function (dateKey, event) {
	    if (!_this4.props.disabled && !_this4.props.readOnly) {
	      var date = (0, _dateHelpers.getDateForDateKey)(dateKey);
	      var day = date.getDate();
	      var month = date.getMonth();
	      var year = date.getFullYear();
	      _this4._triggerSelectDate(day, month, year);
	      if (_this4.state.activeDay === dateKey) {
	        _this4.setState({
	          activeDay: undefined
	        });
	      }
	    }

	    if (_this4.props.dayProps && _this4.props.dayProps.onTouchEnd) {
	      _this4.props.dayProps.onTouchEnd(event);
	    }
	  };

	  this._onDayTouchCancel = function (dateKey, event) {
	    _this4.setState({
	      activeDay: undefined
	    });

	    if (_this4.props.dayProps && _this4.props.dayProps.onTouchCancel) {
	      _this4.props.dayProps.onTouchCancel(event);
	    }
	  };

	  this._onClickPrevMonth = function () {
	    _this4._decreaseMonthYear();
	    if (_this4.props.prevMonthNavProps && _this4.props.prevMonthNavProps.onClick) {
	      _this4.props.prevMonthNavProps.onClick(event);
	    }
	  };

	  this._onClickNextMonth = function () {
	    _this4._increaseMonthYear();
	    if (_this4.props.nextMonthNavProps && _this4.props.nextMonthNavProps.onClick) {
	      _this4.props.nextMonthNavProps.onClick(event);
	    }
	  };
	};

	exports.default = DatePicker;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.today = exports.convertDateToDateKey = exports.getDateForDateKey = exports.getDateKey = exports.getLocaleData = exports.getLastDayForMonth = exports.getWeekArrayForMonth = undefined;

	var _i18n = __webpack_require__(368);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The function will take a month and year value and will return an array of weeks for that month.
	 * Each element in this array will be in-turn an array of days in the week.
	 * @param {number} month: the month for which array of weeks is needed
	 * @param {number} year: the year for which array of weeks is needed
	 * @param {number} firstDayOfWeek: first day of the week in the locale
	 * @returns {Array}: Array of weeks in a month, each week is in turn array of days in that week
	 */
	var getWeekArrayForMonth = exports.getWeekArrayForMonth = function getWeekArrayForMonth(month, year, firstDayOfWeek) {
	  var monthDay = new Date(year, month, 1);

	  // Todo: simplify this calculation of first date
	  var firstDate = 1 + firstDayOfWeek - monthDay.getDay();
	  firstDate = firstDate <= 1 ? firstDate : firstDate - 7;
	  monthDay.setDate(firstDate);
	  var lastDate = new Date(year, month + 1, 0);

	  var weekArray = [];
	  while (monthDay <= lastDate) {
	    var newWeek = [];
	    for (var dayCounter = 0; dayCounter < 7; dayCounter++) {
	      var weekDate = new Date(monthDay.getFullYear(), monthDay.getMonth(), monthDay.getDate());
	      newWeek.push(weekDate);
	      monthDay.setDate(monthDay.getDate() + 1);
	    }

	    weekArray.push(newWeek);
	  }

	  return weekArray;
	};

	var getLastDayForMonth = exports.getLastDayForMonth = function getLastDayForMonth(year, month) {
	  return new Date(year, month + 1, 0);
	};

	/**
	 * Function will return locale data for locale. If data is not available in config files it will return default data.
	 * @param locale - locale for which data is needed.
	 * @returns {Object}: Object containing locale data.
	 */
	var getLocaleData = exports.getLocaleData = function getLocaleData(locale) {
	  var localeResult = {};
	  var lData = void 0;
	  if (locale) {
	    lData = _i18n2.default.localeData[locale];
	  }

	  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	  localeResult.monthNames = lData && lData.monthNames ? lData.monthNames : monthNames;
	  localeResult.dayNamesMin = lData && lData.dayNamesMin ? lData.dayNamesMin : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	  localeResult.firstDay = lData && lData.firstDay ? lData.firstDay : 0;
	  localeResult.weekEnd = lData && lData.weekEnd ? lData.weekEnd : 0;
	  localeResult.isRTL = lData && lData.isRTL ? lData.isRTL : false;
	  return localeResult;
	};

	/**
	 * Returns the string representation for a provided year, month & day.
	 *
	 * @param year {number} - any year
	 * @param month {number} - can be between 1 and 12
	 * @param day {number} - can be between 1 and 31 depending on the month
	 * @returns {string}: a string representing the date in the format yyyy-mm-dd
	 */
	var getDateKey = exports.getDateKey = function getDateKey(year, month, day) {
	  return year + '-' + month + '-' + day;
	};

	/**
	 * Returns the date for a date string representation.
	 *
	 * @param year {number} - any year
	 * @param month {number} - can be between 1 and 12
	 * @param day {number} - can be between 1 and 31 depending on the month
	 * @returns {date} - the parse date
	 */
	var getDateForDateKey = exports.getDateForDateKey = function getDateForDateKey(dateKey) {
	  var splittedDate = dateKey.split('-');
	  return new Date(parseInt(splittedDate[0], 10), parseInt(splittedDate[1], 10) - 1, parseInt(splittedDate[2], 10));
	};

	/**
	 * Returns the string representation for a provided date.
	 *
	 * @param date {date} - a valid date
	 * @returns {string}: a string representing the date in the format yyyy-mm-dd
	 */
	var convertDateToDateKey = exports.convertDateToDateKey = function convertDateToDateKey(date) {
	  return getDateKey(date.getFullYear(), date.getMonth() + 1, date.getDate());
	};

	/**
	 * Returns the date of today
	 *
	 * @returns {date}: today's date
	 */
	var today = exports.today = function today() {
	  return new Date();
	};

/***/ },
/* 368 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var i18nConfig = {

	  localeData: {
	    nl: {
	      monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	      dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
	      firstDay: 1,
	      weekEnd: 0,
	      isRTL: false
	    },
	    ar: {
	      monthNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
	      dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
	      firstDay: 6,
	      weekEnd: 5,
	      isRTL: true
	    },
	    he: {
	      monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
	      dayNamesMin: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
	      firstDay: 0,
	      weekEnd: 6,
	      isRTL: true
	    },
	    fr: {
	      monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	      dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	      firstDay: 1,
	      weekEnd: 0,
	      isRTL: false
	    },
	    'zh-CN': {
	      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
	      firstDay: 1,
	      weekEnd: 0,
	      isRTL: false
	    }
	  }

	};

	exports.default = i18nConfig;

/***/ },
/* 369 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var datePickerStyle = {

	  // wrapper of entire component
	  style: {
	    borderRadius: 2,
	    width: 267,
	    fontSize: 14,
	    textAlign: 'center',
	    boxSizing: 'border-box',
	    backgroundColor: 'white',

	    /*
	     To avoid any kind of flickering the user won't get feedback
	     for selecting the button text
	     */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	     Prevent flickering while tapping on WebKit
	     http://stackoverflow.com/a/3516243/837709
	     */
	    WebkitTapHighlightColor: 'transparent',

	    transition: 'color 0.1s',
	    transitionTimingFunction: 'ease-out'
	  },

	  disabledStyle: {},

	  readOnlyStyle: {},

	  hoverStyle: {},

	  focusStyle: {
	    WebkitAnimation: 'belle-button-focus 2s',
	    outline: 0 },

	  // avoid default focus behaviour
	  disabledHoverStyle: {
	    backgroundColor: '#E1E9EC'
	  },

	  // nav-bar at top for month navigation
	  navBarStyle: {
	    height: 38,
	    border: '1px solid #E0E0E0',
	    boxSizing: 'border-box'
	  },

	  // left button in nav-bar to go to previous month
	  prevMonthNavStyle: {
	    float: 'left',
	    marginLeft: -1,
	    paddingLeft: '15px',
	    paddingRight: '19px'
	  },

	  prevMonthNavIconStyle: {
	    width: 0,
	    height: 0,
	    borderTop: '7px solid transparent',
	    borderBottom: '7px solid transparent',
	    borderRight: '12px solid #666',
	    borderRadius: 2
	  },

	  hoverPrevMonthNavStyle: {},

	  activePrevMonthNavStyle: {},

	  // right button in nav-bar to go to previous month
	  nextMonthNavStyle: {
	    float: 'right',
	    marginRight: -1,
	    paddingLeft: '19px',
	    paddingRight: '15px'
	  },

	  nextMonthNavIconStyle: {
	    width: 0,
	    height: 0,
	    borderTop: '7px solid transparent',
	    borderBottom: '7px solid transparent',
	    borderLeft: '12px solid #666',
	    borderRadius: 2
	  },

	  hoverNextMonthNavStyle: {},

	  activeNextMonthNavStyle: {},

	  // styling for month label on top of calendar
	  monthLabelStyle: {
	    fontSize: 15,
	    boxSizing: 'border-box',
	    paddingTop: 7,
	    display: 'inline-block',

	    /*
	     User should be able to copy date.
	     */
	    WebkitUserSelect: 'initial',
	    MozUserSelect: 'initial',
	    MsUserSelect: 'initial',
	    userSelect: 'initial'
	  },

	  // styling for entire grid of week-header and weeks
	  weekGridStyle: {
	    boxSizing: 'border-box',
	    overflow: 'auto',
	    paddingBottom: 1
	  },

	  weekHeaderStyle: {
	    overflow: 'auto',
	    boxSizing: 'border-box',
	    boxShadow: '1px 0 0 0 #E0E0E0 inset, -1px 0 0 0 #E0E0E0 inset'
	  },

	  // styling for week's day label
	  dayLabelStyle: {
	    width: 39,
	    height: 32,
	    marginRight: -1,
	    color: '#666',
	    display: 'block',
	    float: 'left',
	    boxSizing: 'border-box',
	    paddingTop: 5,

	    /*
	     User should be able to copy date.
	     */
	    WebkitUserSelect: 'initial',
	    MozUserSelect: 'initial',
	    MsUserSelect: 'initial',
	    userSelect: 'initial'
	  },

	  disabledDayLabelStyle: {},

	  weekendLabelStyle: {
	    // color: '#8E8071',
	  },

	  // styling for individual day
	  dayStyle: {
	    width: 39,
	    height: 32,
	    borderLeft: '1px solid #E0E0E0',
	    borderRight: '1px solid #E0E0E0',
	    borderTop: '1px solid #E0E0E0',
	    borderBottom: '1px solid #E0E0E0',
	    color: '#716D6D',
	    float: 'left',
	    marginRight: -1,
	    marginBottom: -1,
	    boxSizing: 'border-box',
	    paddingTop: 5,
	    position: 'relative',
	    zIndex: 100,
	    cursor: 'default',

	    /*
	     To avoid any kind of flickering the user won't get feedback
	     for selecting the button text
	     */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	     Prevent flickering while tapping on WebKit
	     http://stackoverflow.com/a/3516243/837709
	     */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  readOnlyDayStyle: {},

	  activeDayStyle: {
	    borderTop: '1px solid #B1B1B1',
	    borderLeft: '1px solid #D0D0D0',
	    borderRight: '1px solid #D0D0D0',
	    borderBottom: '1px solid #D4D4D4',
	    background: '#E0E0E0',
	    zIndex: 200
	  },

	  focusDayStyle: {
	    background: '#EEE',
	    cursor: 'pointer'
	  },

	  disabledDayStyle: {
	    color: '#C1BABA',
	    cursor: 'not-allowed'
	  },

	  disabledFocusDayStyle: {
	    cursor: 'not-allowed'
	  },

	  todayStyle: {
	    color: '#2C87A9'
	  },

	  weekendStyle: {
	    color: '#8E8071'
	  },

	  selectedDayStyle: {
	    borderTop: '1px solid #B1B1B1',
	    borderLeft: '1px solid #D0D0D0',
	    borderRight: '1px solid #D0D0D0',
	    borderBottom: '1px solid #D4D4D4',
	    background: '#E0E0E0',
	    zIndex: 200
	  },

	  otherMonthDayStyle: {
	    color: '#BDBDBD'
	  }
	};

	exports.default = datePickerStyle;

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var datePickerConfig = {
	  preventFocusStyleForTouchAndClick: true
	};

	exports.default = datePickerConfig;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _actionArea = __webpack_require__(372);

	var _actionArea2 = _interopRequireDefault(_actionArea);

	var _helpers = __webpack_require__(308);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var actionAreaPropTypes = {
	  activeStyle: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  hoverStyle: _react.PropTypes.object,
	  onTouchStart: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchCancel: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,

	  // TODO investigate how we solve mouseUp in other compents (like the right click edgecase)
	  onMouseUp: _react.PropTypes.func,
	  onUpdate: _react.PropTypes.func,
	  style: _react.PropTypes.object
	};

	function sanitizeChildProps(properties) {
	  return (0, _helpers.omit)(properties, Object.keys(actionAreaPropTypes));
	}

	/**
	 * ActionArea
	 *
	 * The purpose of this component is to provide a button like behaviour for a
	 * click like interaction within other components. Button can't be used in such
	 * cases as it always will have it's own focus which is not desired in
	 * components like DatePicker e.g. next month button.
	 *
	 * Note: Use the ActionArea's onUpdate instead of onClick as otherwise on iOS9
	 * the ActionArea will trigger onFocus for it's parent with a set tabindex.
	 */

	var ActionArea = function (_Component) {
	  _inherits(ActionArea, _Component);

	  function ActionArea(properties) {
	    _classCallCheck(this, ActionArea);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActionArea).call(this, properties));

	    _this.state = {
	      // Note: On touch devices mouseEnter is fired while mouseLeave is not.
	      // This would result in a hover effect that keeps active until another
	      // element is focused on. This would result in the same behaviour as using
	      // the :hover pseudo class. To prevent it from happening activating the
	      // hover state is prevented when a touch event has been triggered before.
	      // source: http://stackoverflow.com/a/22444532/837709
	      isIgnoringHover: false,
	      isActive: false,
	      isHovered: false
	    };

	    _this._onMouseEnter = function (event) {
	      if (!_this.state.isIgnoringHover) {
	        _this.setState({
	          isHovered: true,
	          isIgnoringHover: false
	        });
	      }

	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    };

	    _this._onMouseLeave = function (event) {
	      _this.setState({
	        isHovered: false
	      });

	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    };

	    _this._onMouseDown = function (event) {
	      if (event.button === 0) {
	        _this.setState({
	          isActive: true
	        });
	      }

	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    };

	    _this._onMouseUp = function (event) {
	      var isActive = _this.state.isActive;
	      if (event.button === 0) {
	        _this.setState({
	          isActive: false
	        });
	      }

	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }

	      if (event.button === 0 && isActive && _this.props.onUpdate) {
	        _this.props.onUpdate({});
	      }
	    };

	    _this._onTouchStart = function (event) {
	      if (event.touches.length === 1) {
	        _this.setState({
	          isActive: true,
	          isIgnoringHover: true
	        });
	      }

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    };

	    _this._onTouchEnd = function () {
	      var isActive = _this.state.isActive;

	      _this.setState({
	        isActive: false,
	        isIgnoringHover: true
	      });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }

	      if (isActive && _this.props.onUpdate) {
	        _this.props.onUpdate({});
	      }
	    };

	    _this._onTouchCancel = function () {
	      _this.setState({
	        isActive: false,
	        isIgnoringHover: true
	      });

	      if (_this.props.onTouchCancel) {
	        _this.props.onTouchCancel(event);
	      }
	    };

	    _this.childProps = sanitizeChildProps(properties);
	    return _this;
	  }

	  _createClass(ActionArea, [{
	    key: 'componentWillReceiveProps',


	    /**
	     * Update the childProps based on the updated properties passed to the card.
	     */
	    value: function componentWillReceiveProps(properties) {
	      this.childProps = sanitizeChildProps(properties);
	    }

	    /**
	     * As soon as the mouse enters the component the isHovered state is activated.
	     *
	     * The state isHovered is not set to true in case onMouseEnter was triggered
	     * by a touch event.
	     */


	    /**
	     * Deactivate the isHovered state.
	     */


	    /**
	     * Activates the active state in case the main mouse button was pressed.
	     */


	    /**
	     * Triggers onUpdate in case the mouse button was pressed on this element.
	     *
	     * In addition the active state is deactivated.
	     */


	    /**
	     * Updates the button to be active and makes sure the next onMouseEnter is
	     * ignored.
	     */


	    /**
	     * Triggers onUpdate in case the touch event started on this element and makes
	     * sure the next onMouseEnter is ignored.
	     */


	    /**
	     * Updates the button to be release and makes sure the next onMouseEnter is
	     * ignored.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var style = _extends({}, _actionArea2.default.style, this.props.style);
	      if (this.state.isHovered) {
	        style = _extends({}, style, _actionArea2.default.hoverStyle, this.props.hoverStyle);
	      }

	      if (this.state.isActive) {
	        style = _extends({}, style, _actionArea2.default.activeStyle, this.props.activeStyle);
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          role: 'button'
	        }, this.childProps, {
	          onMouseDown: this._onMouseDown,
	          onMouseUp: this._onMouseUp,
	          onMouseEnter: this._onMouseEnter,
	          onMouseLeave: this._onMouseLeave,
	          onTouchStart: this._onTouchStart,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          style: style
	        }),
	        this.props.children
	      );
	    }
	  }]);

	  return ActionArea;
	}(_react.Component);

	ActionArea.displayName = 'ActionArea';
	ActionArea.propTypes = actionAreaPropTypes;
	exports.default = ActionArea;

/***/ },
/* 372 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionAreaStyle = {

	  style: {
	    boxSizing: 'border-box',
	    color: '#716D6D',
	    fontSize: 17,
	    paddingTop: '11px',
	    paddingBottom: '11px',
	    paddingLeft: '16px',
	    paddingRight: '16px',
	    marginTop: -1,
	    textAlign: 'center',
	    textDecoration: 'none',
	    width: 48,
	    borderLeft: '1px solid #E0E0E0',
	    borderRight: '1px solid #E0E0E0',
	    borderTop: '1px solid #E0E0E0',
	    borderBottom: '1px solid #E0E0E0',

	    /* animations */
	    transition: 'background 0.1s, border-top 0.1s, border-bottom 0.1s, color 0.1s',
	    transitionTimingFunction: 'ease-out',

	    /*
	    To avoid any kind of flickering the user won't get feedback
	    for selecting the button text
	    */
	    WebkitUserSelect: 'none',
	    MozUserSelect: 'none',
	    MsUserSelect: 'none',
	    userSelect: 'none',

	    /* This button can only be pressed */
	    MsTouchAction: 'manipulation',
	    touchAction: 'manipulation',

	    /*
	    Prevent flickering while tapping on WebKit
	    http://stackoverflow.com/a/3516243/837709
	    */
	    WebkitTapHighlightColor: 'transparent'
	  },

	  hoverStyle: {
	    background: '#EEE',
	    cursor: 'pointer'
	  },

	  activeStyle: {
	    borderTop: '1px solid #B1B1B1',
	    borderLeft: '1px solid #D0D0D0',
	    borderRight: '1px solid #D0D0D0',
	    borderBottom: '1px solid #D4D4D4',
	    background: '#E0E0E0'
	  }
	};

	exports.default = actionAreaStyle;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Belle internal component to wrap a DisabledDay in a DatePicker.
	 *
	 * This component exists to avoid binding functions in JSX.
	 */

	var DisabledDay = function (_Component) {
	  _inherits(DisabledDay, _Component);

	  function DisabledDay() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DisabledDay);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DisabledDay)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._onMouseEnter = function (event) {
	      _this.props.onDayMouseEnter(_this.props.dateKey, event);
	    }, _this._onMouseLeave = function (event) {
	      _this.props.onDayMouseLeave(_this.props.dateKey, event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DisabledDay, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        _extends({
	          style: this.props.style,
	          onMouseEnter: this._onDayMouseEnter,
	          onMouseLeave: this._onDayMouseLeave
	        }, this.props.disabledDayProps),
	        this.props.children
	      );
	    }
	  }]);

	  return DisabledDay;
	}(_react.Component);

	DisabledDay.displayName = 'DisabledDay';
	DisabledDay.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  dateKey: _react.PropTypes.string.isRequired,
	  onDayMouseEnter: _react.PropTypes.func.isRequired,
	  onDayMouseLeave: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object.isRequired,
	  disabledDayProps: _react.PropTypes.any
	};
	exports.default = DisabledDay;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Belle internal component to wrap a Day in a DatePicker.
	 *
	 * This component exists to avoid binding functions in JSX.
	 */

	var Day = function (_Component) {
	  _inherits(Day, _Component);

	  function Day() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Day);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Day)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._onMouseEnter = function (event) {
	      _this.props.onDayMouseEnter(_this.props.dateKey, event);
	    }, _this._onMouseLeave = function (event) {
	      _this.props.onDayMouseLeave(_this.props.dateKey, event);
	    }, _this._onMouseDown = function (event) {
	      _this.props.onDayMouseDown(_this.props.dateKey, event);
	    }, _this._onMouseUp = function (event) {
	      _this.props.onDayMouseUp(_this.props.dateKey, event);
	    }, _this._onTouchStart = function (event) {
	      _this.props.onDayTouchStart(_this.props.dateKey, event);
	    }, _this._onTouchEnd = function (event) {
	      _this.props.onDayTouchEnd(_this.props.dateKey, event);
	    }, _this._onTouchCancel = function (event) {
	      _this.props.onDayTouchCancel(_this.props.dateKey, event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Day, [{
	    key: 'render',
	    value: function render() {
	      var _extends2;

	      return _react2.default.createElement(
	        'span',
	        _extends((_extends2 = {
	          style: this.props.style,
	          onMouseEnter: this._onMouseEnter,
	          onMouseLeave: this._onMouseLeave,
	          onMouseDown: this._onMouseDown,
	          onMouseUp: this._onMouseUp,
	          onTouchStart: this._onTouchStart,
	          onTouchEnd: this._onTouchEnd,
	          onTouchCancel: this._onTouchCancel,
	          'aria-selected': this.props.selected
	        }, _defineProperty(_extends2, 'style', this.props.style), _defineProperty(_extends2, 'role', 'gridcell'), _extends2), this.props.dayProps),
	        this.props.children
	      );
	    }
	  }]);

	  return Day;
	}(_react.Component);

	Day.displayName = 'Day';
	Day.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  dateKey: _react.PropTypes.string.isRequired,
	  onDayMouseEnter: _react.PropTypes.func.isRequired,
	  onDayMouseLeave: _react.PropTypes.func.isRequired,
	  onDayMouseDown: _react.PropTypes.func.isRequired,
	  onDayMouseUp: _react.PropTypes.func.isRequired,
	  onDayTouchStart: _react.PropTypes.func.isRequired,
	  onDayTouchEnd: _react.PropTypes.func.isRequired,
	  onDayTouchCancel: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object.isRequired,
	  dayProps: _react.PropTypes.any,
	  selected: _react.PropTypes.bool.isRequired
	};
	exports.default = Day;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reference = __webpack_require__(376);

	var _reference2 = _interopRequireDefault(_reference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function translateToNato() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	  if (typeof input !== 'string') throw new Error('Need a string to translate.');

	  var lowerInputList = input.toLowerCase().split('');
	  var translatedLetters = lowerInputList.map(function (char) {
	    var character = _reference2.default[char];
	    if (!_reference2.default.hasOwnProperty(char)) character = char;
	    return character;
	  });

	  return translatedLetters.join(' ').replace(/\n\s/g, '\n');
	}

	exports.default = translateToNato;

/***/ },
/* 376 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var letterMaps = {
	  ' ': '[space]',
	  '.': '[dot]',
	  ',': '[comma]',
	  '!': '[exclamation]',
	  'a': 'Alpha',
	  'b': 'Bravo',
	  'c': 'Charlie',
	  'd': 'Delta',
	  'e': 'Echo',
	  'f': 'Foxtrot',
	  'g': 'Golf',
	  'h': 'Hotel',
	  'i': 'India',
	  'j': 'Juliett',
	  'k': 'Kilo',
	  'l': 'Lima',
	  'm': 'Mike',
	  'n': 'November',
	  'o': 'Oscar',
	  'p': 'Peru',
	  'q': 'Quebec',
	  'r': 'Romeo',
	  's': 'Sierra',
	  't': 'Tango',
	  'u': 'Uniform',
	  'v': 'Victor',
	  'w': 'Whiskey',
	  'x': 'Xray',
	  'y': 'Yankee',
	  'z': 'Zulu',
	  '1': 'One',
	  '2': 'Two',
	  '3': 'Three',
	  '4': 'Four',
	  '5': 'Five',
	  '6': 'Six',
	  '7': 'Seven',
	  '8': 'Eight',
	  '9': 'Nine',
	  '0': 'Zero'
	};

		exports.default = letterMaps;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map