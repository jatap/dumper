/**
 * Dumper module.
 * @module dumper
 * @todo Refactor module to OOP.
 * @author Julio Antúnez Tarín <julio.antunez.tarin@gmail.com>
 * @license MIT
 */

import range from 'lodash.range';
import * as util from 'util';
import chalk from 'chalk';

/**
 * @function separator
 * @param {string} header - Header to show.
 * @param {string} char - Char to repeat.
 * @param {string} color - Color.
 * @returns {String} Separator line.
 * @version 1.0.11
 * @since 0.0.1
 * @see debug
 * @description Add a separator line.
 * @summary Separator line.
 */
function separator(header, marker, color) {
  /**
   * Total number of markers to print.
   * @type {number}
   * @static
   */
  let total       = 78 - header.length;

  /**
   * Content of the line to print.
   * @type {string}
   * @static
   */
  let data        = '';

  /**
   * Number or prefix markers before print header.
   * @type {number}
   * @static
   */
  let prefixSpace = 3;

  range(total).forEach(function(element, index) {
    if (index === prefixSpace) {
      data += ` ${header} `;
    }
    data += marker;
  });

  return chalk[color](data);
}

/**
 * @function debugFunction
 * @param {Function} ob - Function to show.
 * @returns {String} Functiom info.
 * @version 1.0.11
 * @since 0.0.1
 * @see debug
 * @description Show function information.
 * @summary Function info.
 */
function debugFunction(obj) {
  return obj.toString();
}

/**
 * @function debugInspect
 * @param {*} ob - Object to show.
 * @returns {String} Object info.
 * @version 1.0.11
 * @since 0.0.1
 * @see debug
 * @description Show object information.
 * @summary Object info.
 */
function debugInspect(obj) {
  return util.inspect(obj, { depth: null });
}

/**
 * @function debug
 * @param {*} ob - Function or object to show.
 * @returns {Array} Function/Object info.
 * @version 1.0.11
 * @since 0.0.1
 * @see debugFunction
 * @see debugInspect
 * @description Show function/object information.
 * @summary Function/Object info.
 */
function debug(obj) {
  let header, content;

  if (obj === null) {
    header  = separator("Null", '-', 'cyan');
    content = 'There is no object to debug';
    return [header, content];
  }

  switch (typeof obj) {
    case 'function':
      header  = separator("Function", '-', 'cyan');
      content = debugFunction(obj);
      break;
    case 'string':
      header  = separator("String", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'number':
      header  = separator("Number", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'boolean':
      header  = separator("Boolean", '-', 'cyan');
      content = debugInspect(obj);
      break;
    case 'undefined':
      header  = separator("Undefined", '-', 'cyan');
      content = 'Undefined object has no data to show';
      break;
    default:
      header  = separator("inspect", '-', 'cyan');
      content = debugInspect(obj);
      break;
  }

  return [header, content];
}

/**
 * @param {*} ob - Function or object to show.
 * @version 1.0.11
 * @since 0.0.1
 * @description Create a nice dump for a requested param.
 * @summary Var dump requested argument.
 */
export function dumper(obj) {
  console.log(separator("DEBUG - Init", '*', 'green'));
  let [header, content] = debug(obj);
  console.log(header);
  console.log(content);
  console.log(separator("DEBUG - End", '*', 'green'));
}
