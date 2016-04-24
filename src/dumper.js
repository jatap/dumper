'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.dumper = dumper;

var _lodash = require('lodash.range');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('util');

var util = _interopRequireWildcard(_util);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function separator(header, marker, color) {
  var total = 78 - header.length;
  var data = '';
  var prefixSpace = 3;

  (0, _lodash2.default)(total).forEach(function (element, index) {
    if (index === prefixSpace) {
      data += ' ' + header + ' ';
    }
    data += marker;
  });

  return _chalk2.default[color](data);
}

function debugFunction(obj) {
  return obj.toString();
}

function debugInspect(obj) {
  return util.inspect(obj, { depth: null });
}

function debug(obj) {
  var header = void 0,
      content = void 0;

  if (obj === null) {
    header = separator("Null", '-', 'cyan');
    content = 'There is no object to debug';
    return [header, content];
  }

  switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
    case 'function':
      header = separator("Function", '-', 'cyan');
      content = debugFunction(obj);
      break;
    case 'string':
      header = separator("String", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'number':
      header = separator("Number", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'boolean':
      header = separator("Boolean", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'undefined':
      header = separator("Undefined", '-', 'cyan');
      content = 'Undefined object has no data to show';
      break;
    default:
      header = separator("inspect", '-', 'cyan');
      content = debugInspect(obj);
      break;
  }

  return [header, content];
}

function dumper(obj) {
  console.log(separator("DEBUG - Init", '*', 'green'));

  var _debug = debug(obj);

  var _debug2 = _slicedToArray(_debug, 2);

  var header = _debug2[0];
  var content = _debug2[1];

  console.log(header);
  console.log(content);
  console.log(separator("DEBUG - End", '*', 'green'));
}