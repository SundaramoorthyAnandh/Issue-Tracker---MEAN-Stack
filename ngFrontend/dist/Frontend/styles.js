(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url('https://fonts.googleapis.com/css?family=Nunito ');\n\nbody {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n}\n\n#banner-text {\n  font-size: 24px;\n  align-content: center;\n  text-align: center;\n  padding: 10px;\n}\n\n/* The snackbar - position it at the bottom and in the middle of the screen */\n\n#snackbar-success {\n  visibility: hidden; /* Hidden by default. Visible on click */\n  min-width: 250px; /* Set a default minimum width */\n  margin-left: -125px; /* Divide value of min-width by 2 */\n  background-color: rgb(50, 168, 111); /* Kinda green background color */\n  color: #fff; /* White text color */\n  text-align: center; /* Centered text */\n  border-radius: 2px; /* Rounded borders */\n  padding: 16px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n}\n\n#snackbar-failure {\n  visibility: hidden; /* Hidden by default. Visible on click */\n  min-width: 250px; /* Set a default minimum width */\n  margin-left: -125px; /* Divide value of min-width by 2 */\n  background-color: rgb(168, 50, 80); /* kinda red background color */\n  color: #fff; /* White text color */\n  text-align: center; /* Centered text */\n  border-radius: 2px; /* Rounded borders */\n  padding: 16px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n}\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar-failure.show,\n#snackbar-success.show {\n  visibility: visible; /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n  from {bottom: 30px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n  from {bottom: 30px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztDQUNmOztBQUVBLDhFQUE4RTs7QUFDL0U7RUFDRSxtQkFBbUIsQ0FBQyx5Q0FBeUM7RUFDN0QsaUJBQWlCLENBQUMsaUNBQWlDO0VBQ25ELG9CQUFvQixDQUFDLG9DQUFvQztFQUN6RCxvQ0FBb0MsQ0FBQyxrQ0FBa0M7RUFDdkUsWUFBWSxDQUFDLHNCQUFzQjtFQUNuQyxtQkFBbUIsQ0FBQyxtQkFBbUI7RUFDdkMsbUJBQW1CLENBQUMscUJBQXFCO0VBQ3pDLGNBQWMsQ0FBQyxhQUFhO0VBQzVCLGdCQUFnQixDQUFDLDhCQUE4QjtFQUMvQyxXQUFXLENBQUMsNkJBQTZCO0VBQ3pDLFVBQVUsQ0FBQyx5QkFBeUI7RUFDcEMsYUFBYSxDQUFDLDBCQUEwQjtDQUN6Qzs7QUFFRDtFQUNFLG1CQUFtQixDQUFDLHlDQUF5QztFQUM3RCxpQkFBaUIsQ0FBQyxpQ0FBaUM7RUFDbkQsb0JBQW9CLENBQUMsb0NBQW9DO0VBQ3pELG1DQUFtQyxDQUFDLGdDQUFnQztFQUNwRSxZQUFZLENBQUMsc0JBQXNCO0VBQ25DLG1CQUFtQixDQUFDLG1CQUFtQjtFQUN2QyxtQkFBbUIsQ0FBQyxxQkFBcUI7RUFDekMsY0FBYyxDQUFDLGFBQWE7RUFDNUIsZ0JBQWdCLENBQUMsOEJBQThCO0VBQy9DLFdBQVcsQ0FBQyw2QkFBNkI7RUFDekMsVUFBVSxDQUFDLHlCQUF5QjtFQUNwQyxhQUFhLENBQUMsMEJBQTBCO0NBQ3pDOztBQUdELCtFQUErRTs7QUFDL0U7O0VBRUUsb0JBQW9CLENBQUMsdUJBQXVCO0VBQzVDO3dEQUNzRDtFQUN0RCxrREFBa0Q7RUFDbEQsMENBQTBDO0NBQzNDOztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUM7RUFDN0IsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDO0NBQy9COztBQUVEO0VBQ0UsTUFBTSxVQUFVLENBQUMsV0FBVyxDQUFDO0VBQzdCLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQztDQUMvQjs7QUFFRDtFQUNFLE1BQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNoQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUM7Q0FDNUI7O0FBRUQ7RUFDRSxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDaEMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDO0NBQzVCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8gJyk7XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Jhbm5lci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuIC8qIFRoZSBzbmFja2JhciAtIHBvc2l0aW9uIGl0IGF0IHRoZSBib3R0b20gYW5kIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiAqL1xuI3NuYWNrYmFyLXN1Y2Nlc3Mge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IC8qIEhpZGRlbiBieSBkZWZhdWx0LiBWaXNpYmxlIG9uIGNsaWNrICovXG4gIG1pbi13aWR0aDogMjUwcHg7IC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuICBtYXJnaW4tbGVmdDogLTEyNXB4OyAvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxNjgsIDExMSk7IC8qIEtpbmRhIGdyZWVuIGJhY2tncm91bmQgY29sb3IgKi9cbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXJlZCB0ZXh0ICovXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgLyogUm91bmRlZCBib3JkZXJzICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIFBhZGRpbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBzY3JlZW4gKi9cbiAgei1pbmRleDogMTsgLyogQWRkIGEgei1pbmRleCBpZiBuZWVkZWQgKi9cbiAgbGVmdDogNTAlOyAvKiBDZW50ZXIgdGhlIHNuYWNrYmFyICovXG4gIGJvdHRvbTogMzBweDsgLyogMzBweCBmcm9tIHRoZSBib3R0b20gKi9cbn1cblxuI3NuYWNrYmFyLWZhaWx1cmUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IC8qIEhpZGRlbiBieSBkZWZhdWx0LiBWaXNpYmxlIG9uIGNsaWNrICovXG4gIG1pbi13aWR0aDogMjUwcHg7IC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuICBtYXJnaW4tbGVmdDogLTEyNXB4OyAvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgNTAsIDgwKTsgLyoga2luZGEgcmVkIGJhY2tncm91bmQgY29sb3IgKi9cbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXJlZCB0ZXh0ICovXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgLyogUm91bmRlZCBib3JkZXJzICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIFBhZGRpbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBzY3JlZW4gKi9cbiAgei1pbmRleDogMTsgLyogQWRkIGEgei1pbmRleCBpZiBuZWVkZWQgKi9cbiAgbGVmdDogNTAlOyAvKiBDZW50ZXIgdGhlIHNuYWNrYmFyICovXG4gIGJvdHRvbTogMzBweDsgLyogMzBweCBmcm9tIHRoZSBib3R0b20gKi9cbn1cblxuXG4vKiBTaG93IHRoZSBzbmFja2JhciB3aGVuIGNsaWNraW5nIG9uIGEgYnV0dG9uIChjbGFzcyBhZGRlZCB3aXRoIEphdmFTY3JpcHQpICovXG4jc25hY2tiYXItZmFpbHVyZS5zaG93LFxuI3NuYWNrYmFyLXN1Y2Nlc3Muc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7IC8qIFNob3cgdGhlIHNuYWNrYmFyICovXG4gIC8qIEFkZCBhbmltYXRpb246IFRha2UgMC41IHNlY29uZHMgdG8gZmFkZSBpbiBhbmQgb3V0IHRoZSBzbmFja2Jhci5cbiAgSG93ZXZlciwgZGVsYXkgdGhlIGZhZGUgb3V0IHByb2Nlc3MgZm9yIDIuNSBzZWNvbmRzICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG4vKiBBbmltYXRpb25zIHRvIGZhZGUgdGhlIHNuYWNrYmFyIGluIGFuZCBvdXQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG59ICJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Js tries\Frontend\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map