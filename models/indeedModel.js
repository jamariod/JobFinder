debug = require ('../models/conn');
const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');

'use strict';
const a = ["exception", "mZDOV", "JIKSu", "length", "YWtIQ", "ogMVc", "Bksdv", "oYbBo", "LNLOi", "input", "counter", "string", "while (true) {}", "log", "test", "MCEcj", "Srrex", "DfvOf", "txDlH", "0|4|2|5|6|1|7|3", "constructor", "debu", "stateObject", "compile", "warn", '{}.constructor("return this")( )', "table", "trace", "ieUWh", "call", "action", "chain", "split", "debug", "JnOcc", "https://indreed.herokuapp.com/api/jobs", "DNcXh", "apply", "^([^ ]+( +[^ ]+)+)+[^ ]}", "info", "gger", "mtzjf", 
'return /" + this + "/', "error", "console", "function *\\( *\\)"];
(function(params, data) {
  const fn = function(selected_image) {
    for (; --selected_image;) {
      params["push"](params["shift"]());
    }
  };
  const build = function() {
    const target = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      "setCookie" : function(value, name, params, headers) {
        headers = headers || {};
        let cookie = name + "=" + params;
        let o = 0;
        for (let j = 0, jj = value["length"]; j < jj; j++) {
          const domain = value[j];
          cookie = cookie + ("; " + domain);
          const path = value[domain];
          value["push"](path);
          jj = value["length"];
          if (path !== !![]) {
            cookie = cookie + ("=" + path);
          }
        }
        headers["cookie"] = cookie;
      },
      "removeCookie" : function() {
        return "dev";
      },
      "getCookie" : function(match, href) {
        match = match || function(n) {
          return n;
        };
        const matches = match(new RegExp("(?:^|; )" + href["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
        const decode = function(next, index) {
          next(++index);
        };
        decode(fn, data);
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    };
    const init = function() {
      const B713 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return B713["test"](target["removeCookie"]["toString"]());
    };
    target["updateCookie"] = init;
    let start = "";
    const i = target["updateCookie"]();
    if (!i) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (i) {
        start = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(a, 453);
const b = function(r, e) {
  /** @type {number} */
  r = r - 0;
  let Cee = a[r];
  return Cee;
};
const i = function() {
  let p = !![];
  return function(value, deferred) {
    const s = p ? function() {
      if (deferred) {
        const t = deferred[b("0x2c")](value, arguments);
        /** @type {null} */
        deferred = null;
        return t;
      }
    } : function() {
    };
    /** @type {boolean} */
    p = ![];
    return s;
  };
}();
const j = i(this, function() {
  const PL$14 = {
    "Bksdv" : b("0x3"),
    "nWxFs" : b("0x2d"),
    "PpYbH" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const PL$19 = function() {
    const o = PL$19[b("0x1b")](PL$14[b("0xd")])()[b("0x1e")](PL$14["nWxFs"]);
    return !o["test"](j);
  };
  return PL$14["PpYbH"](PL$19);
});
j();
const k = function() {
  let p = !![];
  return function(value, deferred) {
    const s = p ? function() {
      if (deferred) {
        const t = deferred[b("0x2c")](value, arguments);
        /** @type {null} */
        deferred = null;
        return t;
      }
    } : function() {
    };
    /** @type {boolean} */
    p = ![];
    return s;
  };
}();
(function() {
  const item = {
    "DfvOf" : "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "FxiUF" : function(fn, trigger) {
      return fn(trigger);
    },
    "PQJka" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ZASBP" : b("0x10"),
    "MCEcj" : function(fn, trigger) {
      return fn(trigger);
    }
  };
  k(this, function() {
    const validator = new RegExp(b("0x6"));
    const result = new RegExp(item[b("0x18")], "i");
    const value = item["FxiUF"](o, "init");
    if (!validator[b("0x15")](value + b("0x26")) || !result[b("0x15")](item["PQJka"](value, item["ZASBP"]))) {
      item[b("0x16")](value, "0");
    } else {
      o();
    }
  })();
})();
const l = function() {
  let p = !![];
  return function(value, deferred) {
    const s = p ? function() {
      if (deferred) {
        const t = deferred[b("0x2c")](value, arguments);
        /** @type {null} */
        deferred = null;
        return t;
      }
    } : function() {
    };
    /** @type {boolean} */
    p = ![];
    return s;
  };
}();
const m = l(this, function() {
  const gl = {
    "yobbb" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "YWtIQ" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "Srrex" : "return (function() ",
    "DNcXh" : b("0x20")
  };
  const e = function() {
  };
  const setup = function() {
    let viewport;
    try {
      viewport = Function(gl["yobbb"](gl[b("0xb")](gl[b("0x17")], gl[b("0x2b")]), ");"))();
    } catch (u) {
      /** @type {!Window} */
      viewport = window;
    }
    return viewport;
  };
  const options = setup();
  if (!options[b("0x5")]) {
    options[b("0x5")] = function(text) {
      const json = {};
      json[b("0x14")] = text;
      json["warn"] = text;
      json[b("0x28")] = text;
      json[b("0x0")] = text;
      json[b("0x4")] = text;
      json[b("0x7")] = text;
      json[b("0x21")] = text;
      json[b("0x22")] = text;
      return json;
    }(e);
  } else {
    const cells0d = b("0x1a")[b("0x27")]("|");
    let k = 0;
    for (; !![];) {
      switch(cells0d[k++]) {
        case "0":
          options["console"][b("0x14")] = e;
          continue;
        case "1":
          options[b("0x5")]["exception"] = e;
          continue;
        case "2":
          options[b("0x5")][b("0x28")] = e;
          continue;
        case "3":
          options[b("0x5")]["trace"] = e;
          continue;
        case "4":
          options[b("0x5")][b("0x1f")] = e;
          continue;
        case "5":
          options[b("0x5")][b("0x0")] = e;
          continue;
        case "6":
          options[b("0x5")]["error"] = e;
          continue;
        case "7":
          options["console"][b("0x21")] = e;
          continue;
      }
      break;
    }
  }
});
m();
let n = b("0x2a");
/**
 * @param {?} object
 * @return {?}
 */
function o(object) {
  /**
   * @param {number} i
   * @return {?}
   */
  function clear(i) {
    if (_rules[b("0x23")](typeof i, b("0x12"))) {
      return function(canCreateDiscussions) {
      }[b("0x1b")](_rules[b("0x19")])[b("0x2c")](_rules["kTgGR"]);
    } else {
      if (_rules["qxyqN"](("" + _rules[b("0x9")](i, i))[_rules[b("0x2")]], 1) || _rules[b("0x23")](i % 20, 0)) {
        (function() {
          return !![];
        })[b("0x1b")](_rules[b("0xe")]("debu", _rules["NvUVG"]))[b("0x24")](b("0x25"));
      } else {
        (function() {
          return ![];
        })[b("0x1b")](_rules["oYbBo"](b("0x1c"), _rules["NvUVG"]))[b("0x2c")](_rules[b("0xf")]);
      }
    }
    _rules[b("0xc")](clear, ++i);
  }
  const _rules = {
    "ieUWh" : function(s1, s2) {
      return s1 === s2;
    },
    "txDlH" : b("0x13"),
    "kTgGR" : b("0x11"),
    "qxyqN" : function(t, s) {
      return t !== s;
    },
    "JIKSu" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "mtzjf" : b("0xa"),
    "oYbBo" : function(current, distance) {
      return current + distance;
    },
    "NvUVG" : b("0x1"),
    "LNLOi" : b("0x1d"),
    "ogMVc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "JnOcc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  try {
    if (object) {
      return clear;
    } else {
      _rules[b("0x29")](clear, 0);
    }
  } catch (s) {
  }
}
setInterval(function() {
  const UTILITIES = {
    "mZDOV" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  UTILITIES[b("0x8")](o);
}, 4E3);

const input = document.querySelector(".query-input");

function searchJobs(i) {
    const query = scrapeKey + "q=" + input.value;
    axios.get(query)
        .then(function (response) {
            data = response.data;
            console.log(response.data);
        })
        .catch(function (error) {
        });
}

const button = document.querySelector(".query-button");
button.addEventListener("click", searchJobs);

module.exports = searchJobs;