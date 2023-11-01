/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  let e = "transitionend",
    t = (e) =>
      null == e
        ? `${e}`
        : {}.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    i = (e) => {
      do e += Math.floor(1e6 * Math.random());
      while (document.getElementById(e));
      return e;
    },
    n = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    s = (e) => {
      let t = n(e);
      return t && document.querySelector(t) ? t : null;
    },
    r = (e) => {
      let t = n(e);
      return t ? document.querySelector(t) : null;
    },
    o = (e) => {
      if (!e) return 0;
      let { transitionDuration: t, transitionDelay: i } =
          window.getComputedStyle(e),
        n = Number.parseFloat(t),
        s = Number.parseFloat(i);
      return n || s
        ? ((t = t.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    a = (t) => {
      t.dispatchEvent(new Event(e));
    },
    l = (e) =>
      !!e &&
      "object" == typeof e &&
      (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    c = (e) =>
      l(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? document.querySelector(e)
        : null,
    h = (e, i, n) => {
      Object.keys(n).forEach((s) => {
        let r = n[s],
          o = i[s],
          a = o && l(o) ? "element" : t(o);
        if (!RegExp(r).test(a))
          throw TypeError(
            `${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${r}".`
          );
      });
    },
    d = (e) =>
      !!l(e) &&
      0 !== e.getClientRects().length &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    f = (e) =>
      !!(
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        e.classList.contains("disabled")
      ) ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    u = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
        ? u(e.parentNode)
        : null;
    },
    p = () => {},
    g = (e) => {
      e.offsetHeight;
    },
    m = () => {
      let { jQuery: e } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    v = [],
    b = (e) => {
      "loading" === document.readyState
        ? (v.length ||
            document.addEventListener("DOMContentLoaded", () => {
              v.forEach((e) => e());
            }),
          v.push(e))
        : e();
    },
    y = () => "rtl" === document.documentElement.dir,
    E = (e) => {
      b(() => {
        let t = m();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      });
    },
    w = (e) => {
      "function" == typeof e && e();
    },
    $ = (t, i, n = !0) => {
      if (!n) {
        w(t);
        return;
      }
      let s = o(i) + 5,
        r = !1,
        l = ({ target: n }) => {
          n === i && ((r = !0), i.removeEventListener(e, l), w(t));
        };
      i.addEventListener(e, l),
        setTimeout(() => {
          r || a(i);
        }, s);
    },
    A = (e, t, i, n) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!i && n ? e.length - 1 : 0];
      let r = e.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + r) % r),
        e[Math.max(0, Math.min(s, r - 1))]
      );
    },
    C = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    k = /::\d+$/,
    L = {},
    O = 1,
    x = { mouseenter: "mouseover", mouseleave: "mouseout" },
    D = /^(mouseenter|mouseleave)/i,
    S = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function N(e, t) {
    return (t && `${t}::${O++}`) || e.uidEvent || O++;
  }
  function I(e) {
    let t = N(e);
    return (e.uidEvent = t), (L[t] = L[t] || {}), L[t];
  }
  function _(e, t, i = null) {
    let n = Object.keys(e);
    for (let s = 0, r = n.length; s < r; s++) {
      let o = e[n[s]];
      if (o.originalHandler === t && o.delegationSelector === i) return o;
    }
    return null;
  }
  function P(e, t, i) {
    let n = "string" == typeof t,
      s = B(e);
    return S.has(s) || (s = e), [n, n ? i : t, s];
  }
  function M(e, t, i, n, s) {
    var r, o, a, l, c;
    if ("string" != typeof t || !e) return;
    if ((i || ((i = n), (n = null)), D.test(t))) {
      let h = (e) =>
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        };
      n ? (n = h(n)) : (i = h(i));
    }
    let [d, f, u] = P(t, i, n),
      p = I(e),
      g = p[u] || (p[u] = {}),
      m = _(g, f, d ? i : null);
    if (m) {
      m.oneOff = m.oneOff && s;
      return;
    }
    let v = N(f, t.replace(C, "")),
      b = d
        ? ((r = e),
          (o = i),
          (a = n),
          function e(t) {
            let i = r.querySelectorAll(o);
            for (let { target: n } = t; n && n !== this; n = n.parentNode)
              for (let s = i.length; s--; )
                if (i[s] === n)
                  return (
                    (t.delegateTarget = n),
                    e.oneOff && j.off(r, t.type, o, a),
                    a.apply(n, [t])
                  );
            return null;
          })
        : ((l = e),
          (c = i),
          function e(t) {
            return (
              (t.delegateTarget = l),
              e.oneOff && j.off(l, t.type, c),
              c.apply(l, [t])
            );
          });
    (b.delegationSelector = d ? i : null),
      (b.originalHandler = f),
      (b.oneOff = s),
      (b.uidEvent = v),
      (g[v] = b),
      e.addEventListener(u, b, d);
  }
  function H(e, t, i, n, s) {
    let r = _(t[i], n, s);
    r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
  }
  function B(e) {
    return x[(e = e.replace(T, ""))] || e;
  }
  let j = {
      on(e, t, i, n) {
        M(e, t, i, n, !1);
      },
      one(e, t, i, n) {
        M(e, t, i, n, !0);
      },
      off(e, t, i, n) {
        if ("string" != typeof t || !e) return;
        let [s, r, o] = P(t, i, n),
          a = o !== t,
          l = I(e),
          c = t.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          H(e, l, o, r, s ? i : null);
          return;
        }
        c &&
          Object.keys(l).forEach((i) => {
            var n, s, r, o;
            let a;
            (n = e),
              (s = l),
              (r = i),
              (o = t.slice(1)),
              Object.keys((a = s[r] || {})).forEach((e) => {
                if (e.includes(o)) {
                  let t = a[e];
                  H(n, s, r, t.originalHandler, t.delegationSelector);
                }
              });
          });
        let h = l[o] || {};
        Object.keys(h).forEach((i) => {
          let n = i.replace(k, "");
          if (!a || t.includes(n)) {
            let s = h[i];
            H(e, l, o, s.originalHandler, s.delegationSelector);
          }
        });
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        let n = m(),
          s = B(t),
          r = S.has(s),
          o,
          a = !0,
          l = !0,
          c = !1,
          h = null;
        return (
          t !== s &&
            n &&
            ((o = n.Event(t, i)),
            n(e).trigger(o),
            (a = !o.isPropagationStopped()),
            (l = !o.isImmediatePropagationStopped()),
            (c = o.isDefaultPrevented())),
          r
            ? (h = document.createEvent("HTMLEvents")).initEvent(s, a, !0)
            : (h = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(h, e, { get: () => i[e] });
            }),
          c && h.preventDefault(),
          l && e.dispatchEvent(h),
          h.defaultPrevented && void 0 !== o && o.preventDefault(),
          h
        );
      },
    },
    W = new Map(),
    R = {
      set(e, t, i) {
        W.has(e) || W.set(e, new Map());
        let n = W.get(e);
        if (!n.has(t) && 0 !== n.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
          return;
        }
        n.set(t, i);
      },
      get: (e, t) => (W.has(e) && W.get(e).get(t)) || null,
      remove(e, t) {
        if (!W.has(e)) return;
        let i = W.get(e);
        i.delete(t), 0 === i.size && W.delete(e);
      },
    };
  class z {
    constructor(e) {
      if (!(e = c(e))) return;
      (this._element = e),
        R.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      $(e, t, i);
    }
    static getInstance(e) {
      return R.get(c(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  let q = (e, t = "hide") => {
      let i = `click.dismiss${e.EVENT_KEY}`,
        n = e.NAME;
      j.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), f(this))
        )
          return;
        let s = r(this) || this.closest(`.${n}`);
        e.getOrCreateInstance(s)[t]();
      });
    },
    F = ".bs.alert",
    U = `close${F}`,
    V = `closed${F}`;
  class K extends z {
    static get NAME() {
      return "alert";
    }
    close() {
      if (j.trigger(this._element, U).defaultPrevented) return;
      this._element.classList.remove("show");
      let e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, V), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = K.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  q(K, "close"), E(K);
  let X = '[data-bs-toggle="button"]';
  class Y extends z {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = Y.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function Q(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString()
          ? Number(e)
          : "" === e || "null" === e
          ? null
          : e))
    );
  }
  function G(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  j.on(document, "click.bs.button.data-api", X, (e) => {
    e.preventDefault();
    let t = e.target.closest(X);
    Y.getOrCreateInstance(t).toggle();
  }),
    E(Y);
  let Z = {
      setDataAttribute(e, t, i) {
        e.setAttribute(`data-bs-${G(t)}`, i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${G(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        let t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = Q(
                e.dataset[i]
              );
            }),
          t
        );
      },
      getDataAttribute: (e, t) => Q(e.getAttribute(`data-bs-${G(t)}`)),
      offset(e) {
        let t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    J = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(t) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, e).filter((e) => !f(e) && d(e));
      },
    },
    ee = "carousel",
    et = ".bs.carousel",
    ei = ".data-api",
    en = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    es = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    er = "next",
    eo = "prev",
    ea = "left",
    el = "right",
    ec = { ArrowLeft: el, ArrowRight: ea },
    eh = `slide${et}`,
    ed = `slid${et}`,
    ef = `keydown${et}`,
    eu = `mouseenter${et}`,
    ep = `mouseleave${et}`,
    eg = `touchstart${et}`,
    em = `touchmove${et}`,
    e8 = `touchend${et}`,
    ev = `pointerdown${et}`,
    eb = `pointerup${et}`,
    ey = `dragstart${et}`,
    eE = `load${et}${ei}`,
    ew = `click${et}${ei}`,
    e$ = "active",
    eA = ".active.carousel-item";
  class eC extends z {
    constructor(e, t) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = J.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return en;
    }
    static get NAME() {
      return ee;
    }
    next() {
      this._slide(er);
    }
    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }
    prev() {
      this._slide(eo);
    }
    pause(e) {
      e || (this._isPaused = !0),
        J.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (a(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = J.findOne(eA, this._element);
      let t = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1) && !(e < 0)) {
        if (this._isSliding) {
          j.one(this._element, ed, () => this.to(e));
          return;
        }
        if (t === e) {
          this.pause(), this.cycle();
          return;
        }
        this._slide(e > t ? er : eo, this._items[e]);
      }
    }
    _getConfig(e) {
      return (
        h(
          ee,
          (e = {
            ...en,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          es
        ),
        e
      );
    }
    _handleSwipe() {
      let e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      let t = e / this.touchDeltaX;
      (this.touchDeltaX = 0), t && this._slide(t > 0 ? el : ea);
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, ef, (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (j.on(this._element, eu, (e) => this.pause(e)),
          j.on(this._element, ep, (e) => this.cycle(e))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      let e = (e) =>
          this._pointerEvent &&
          ("pen" === e.pointerType || "touch" === e.pointerType),
        t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (e) => this.cycle(e),
                500 + this._config.interval
              )));
        };
      J.find(".carousel-item img", this._element).forEach((e) => {
        j.on(e, ey, (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (j.on(this._element, ev, (e) => t(e)),
            j.on(this._element, eb, (e) => n(e)),
            this._element.classList.add("pointer-event"))
          : (j.on(this._element, eg, (e) => t(e)),
            j.on(this._element, em, (e) => i(e)),
            j.on(this._element, e8, (e) => n(e)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = ec[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? J.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(e, t) {
      return A(this._items, t, e === er, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      let i = this._getItemIndex(e),
        n = this._getItemIndex(J.findOne(eA, this._element));
      return j.trigger(this._element, eh, {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        let t = J.findOne(".active", this._indicatorsElement);
        t.classList.remove(e$), t.removeAttribute("aria-current");
        let i = J.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            i[n].classList.add(e$), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      let e = this._activeElement || J.findOne(eA, this._element);
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, t) {
      let i = this._directionToOrder(e),
        n = J.findOne(eA, this._element),
        s = this._getItemIndex(n),
        r = t || this._getItemByOrder(i, n),
        o = this._getItemIndex(r),
        a = Boolean(this._interval),
        l = i === er,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (r && r.classList.contains(e$)) {
        this._isSliding = !1;
        return;
      }
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, d).defaultPrevented || !n || !r) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      let f = () => {
        j.trigger(this._element, ed, {
          relatedTarget: r,
          direction: d,
          from: s,
          to: o,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(h), g(r), n.classList.add(c), r.classList.add(c);
        let u = () => {
          r.classList.remove(c, h),
            r.classList.add(e$),
            n.classList.remove(e$, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(u, n, !0);
      } else n.classList.remove(e$), r.classList.add(e$), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [el, ea].includes(e)
        ? y()
          ? e === ea
            ? eo
            : er
          : e === ea
          ? er
          : eo
        : e;
    }
    _orderToDirection(e) {
      return [er, eo].includes(e)
        ? y()
          ? e === eo
            ? ea
            : el
          : e === eo
          ? el
          : ea
        : e;
    }
    static carouselInterface(e, t) {
      let i = eC.getOrCreateInstance(e, t),
        { _config: n } = i;
      "object" == typeof t && (n = { ...n, ...t });
      let s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        eC.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      let t = r(this);
      if (!t || !t.classList.contains("carousel")) return;
      let i = { ...Z.getDataAttributes(t), ...Z.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        eC.carouselInterface(t, i),
        n && eC.getInstance(t).to(n),
        e.preventDefault();
    }
  }
  j.on(
    document,
    ew,
    "[data-bs-slide], [data-bs-slide-to]",
    eC.dataApiClickHandler
  ),
    j.on(window, eE, () => {
      let e = J.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        eC.carouselInterface(e[t], eC.getInstance(e[t]));
    }),
    E(eC);
  let eT = "collapse",
    ek = "bs.collapse",
    eL = `.${ek}`,
    eO = { toggle: !0, parent: null },
    ex = { toggle: "boolean", parent: "(null|element)" },
    e9 = `show${eL}`,
    eD = `shown${eL}`,
    eS = `hide${eL}`,
    eN = `hidden${eL}`,
    eI = `click${eL}.data-api`,
    e_ = "show",
    eP = "collapse",
    eM = "collapsing",
    eH = "collapsed",
    eB = `:scope .${eP} .${eP}`,
    ej = '[data-bs-toggle="collapse"]';
  class eW extends z {
    constructor(e, t) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(t)),
        (this._triggerArray = []);
      let i = J.find(ej);
      for (let n = 0, r = i.length; n < r; n++) {
        let o = i[n],
          a = s(o),
          l = J.find(a).filter((e) => e === this._element);
        null !== a &&
          l.length &&
          ((this._selector = a), this._triggerArray.push(o));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return eO;
    }
    static get NAME() {
      return eT;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [],
        t;
      if (this._config.parent) {
        let i = J.find(eB, this._config.parent);
        e = J.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !i.includes(e));
      }
      let n = J.findOne(this._selector);
      if (e.length) {
        let s = e.find((e) => n !== e);
        if ((t = s ? eW.getInstance(s) : null) && t._isTransitioning) return;
      }
      if (j.trigger(this._element, e9).defaultPrevented) return;
      e.forEach((e) => {
        n !== e && eW.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || R.set(e, ek, null);
      });
      let r = this._getDimension();
      this._element.classList.remove(eP),
        this._element.classList.add(eM),
        (this._element.style[r] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      let o = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(eM),
            this._element.classList.add(eP, e_),
            (this._element.style[r] = ""),
            j.trigger(this._element, eD);
        },
        a = `scroll${r[0].toUpperCase() + r.slice(1)}`;
      this._queueCallback(o, this._element, !0),
        (this._element.style[r] = `${this._element[a]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, eS).defaultPrevented) return;
      let e = this._getDimension();
      (this._element.style[e] = `${
        this._element.getBoundingClientRect()[e]
      }px`),
        g(this._element),
        this._element.classList.add(eM),
        this._element.classList.remove(eP, e_);
      let t = this._triggerArray.length;
      for (let i = 0; i < t; i++) {
        let n = this._triggerArray[i],
          s = r(n);
        s && !this._isShown(s) && this._addAriaAndCollapsedClass([n], !1);
      }
      this._isTransitioning = !0;
      let o = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(eM),
          this._element.classList.add(eP),
          j.trigger(this._element, eN);
      };
      (this._element.style[e] = ""), this._queueCallback(o, this._element, !0);
    }
    _isShown(e = this._element) {
      return e.classList.contains(e_);
    }
    _getConfig(e) {
      return (
        ((e = { ...eO, ...Z.getDataAttributes(this._element), ...e }).toggle =
          Boolean(e.toggle)),
        (e.parent = c(e.parent)),
        h(eT, e, ex),
        e
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      let e = J.find(eB, this._config.parent);
      J.find(ej, this._config.parent)
        .filter((t) => !e.includes(t))
        .forEach((e) => {
          let t = r(e);
          t && this._addAriaAndCollapsedClass([e], this._isShown(t));
        });
    }
    _addAriaAndCollapsedClass(e, t) {
      e.length &&
        e.forEach((e) => {
          t ? e.classList.remove(eH) : e.classList.add(eH),
            e.setAttribute("aria-expanded", t);
        });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        let i = eW.getOrCreateInstance(this, t);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  }
  j.on(document, eI, ej, function (e) {
    ("A" === e.target.tagName ||
      (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault();
    let t = s(this);
    J.find(t).forEach((e) => {
      eW.getOrCreateInstance(e, { toggle: !1 }).toggle();
    });
  }),
    E(eW);
  var eR = "bottom",
    ez = "right",
    eq = "left",
    eF = "auto",
    eU = ["top", eR, ez, eq],
    eV = "start",
    eK = "clippingParents",
    eX = "viewport",
    eY = "popper",
    e0 = "reference",
    eQ = eU.reduce(function (e, t) {
      return e.concat([t + "-" + eV, t + "-end"]);
    }, []),
    e1 = [].concat(eU, [eF]).reduce(function (e, t) {
      return e.concat([t, t + "-" + eV, t + "-end"]);
    }, []),
    e3 = "beforeRead",
    e2 = "read",
    e4 = "afterRead",
    eG = "beforeMain",
    eZ = "main",
    e6 = "afterMain",
    eJ = "beforeWrite",
    e5 = "write",
    e7 = "afterWrite",
    te = [e3, e2, e4, eG, eZ, e6, eJ, e5, e7];
  function tt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function ti(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function tn(e) {
    var t = ti(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function ts(e) {
    var t = ti(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function tr(e) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var t = ti(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  let to = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function e(t) {
      var i = t.state;
      Object.keys(i.elements).forEach(function (e) {
        var t = i.styles[e] || {},
          n = i.attributes[e] || {},
          s = i.elements[e];
        ts(s) &&
          tt(s) &&
          (Object.assign(s.style, t),
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            !1 === t
              ? s.removeAttribute(e)
              : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function e(t) {
      var i = t.state,
        n = {
          popper: {
            position: i.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(i.elements.popper.style, n.popper),
        (i.styles = n),
        i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
        function () {
          Object.keys(i.elements).forEach(function (e) {
            var t = i.elements[e],
              s = i.attributes[e] || {},
              r = Object.keys(
                i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            ts(t) &&
              tt(t) &&
              (Object.assign(t.style, r),
              Object.keys(s).forEach(function (e) {
                t.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function ta(e) {
    return e.split("-")[0];
  }
  function tl(e, t) {
    var i = e.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function tc(e) {
    var t = tl(e),
      i = e.offsetWidth,
      n = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - i) && (i = t.width),
      1 >= Math.abs(t.height - n) && (n = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
    );
  }
  function th(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && tr(i)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function td(e) {
    return ti(e).getComputedStyle(e);
  }
  function tf(e) {
    return ["table", "td", "th"].indexOf(tt(e)) >= 0;
  }
  function tu(e) {
    return (
      (tn(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function tp(e) {
    return "html" === tt(e)
      ? e
      : e.assignedSlot || e.parentNode || (tr(e) ? e.host : null) || tu(e);
  }
  function tg(e) {
    return ts(e) && "fixed" !== td(e).position ? e.offsetParent : null;
  }
  function tm(e) {
    for (var t = ti(e), i = tg(e); i && tf(i) && "static" === td(i).position; )
      i = tg(i);
    return i &&
      ("html" === tt(i) || ("body" === tt(i) && "static" === td(i).position))
      ? t
      : i ||
          (function e(t) {
            var i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ts(t) &&
              "fixed" === td(t).position
            )
              return null;
            for (
              var n = tp(t);
              ts(n) && 0 > ["html", "body"].indexOf(tt(n));

            ) {
              var s = td(n);
              if (
                "none" !== s.transform ||
                "none" !== s.perspective ||
                "paint" === s.contain ||
                -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                (i && "filter" === s.willChange) ||
                (i && s.filter && "none" !== s.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  function t8(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  var tv = Math.max,
    tb = Math.min,
    ty = Math.round;
  function tE(e, t, i) {
    return tv(e, tb(t, i));
  }
  function tw() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function t$(e) {
    return Object.assign({}, tw(), e);
  }
  function tA(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  let tC = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i,
        n = t.state,
        s = t.name,
        r = t.options,
        o = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        l = ta(n.placement),
        c = t8(l),
        h = [eq, ez].indexOf(l) >= 0 ? "height" : "width";
      if (o && a) {
        var d,
          f,
          u =
            ((d = r.padding),
            (f = n),
            t$(
              "number" !=
                typeof (d =
                  "function" == typeof d
                    ? d(Object.assign({}, f.rects, { placement: f.placement }))
                    : d)
                ? d
                : tA(d, eU)
            )),
          p = tc(o),
          g =
            n.rects.reference[h] +
            n.rects.reference[c] -
            a[c] -
            n.rects.popper[h],
          m = a[c] - n.rects.reference[c],
          v = tm(o),
          b = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          y = u["y" === c ? "top" : eq],
          E = b - p[h] - u["y" === c ? eR : ez],
          w = b / 2 - p[h] / 2 + (g / 2 - m / 2),
          $ = tE(y, w, E),
          A = c;
        n.modifiersData[s] = (((i = {})[A] = $), (i.centerOffset = $ - w), i);
      }
    },
    effect: function e(t) {
      var i = t.state,
        n = t.options.element,
        s = void 0 === n ? "[data-popper-arrow]" : n;
      null != s &&
        ("string" != typeof s || (s = i.elements.popper.querySelector(s))) &&
        th(i.elements.popper, s) &&
        (i.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function tT(e) {
    return e.split("-")[1];
  }
  var tk = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tL(e) {
    var t,
      i,
      n,
      s,
      r,
      o,
      a = e.popper,
      l = e.popperRect,
      c = e.placement,
      h = e.variation,
      d = e.offsets,
      f = e.position,
      u = e.gpuAcceleration,
      p = e.adaptive,
      g = e.roundOffsets,
      m =
        !0 === g
          ? ((s = (n = d).x),
            (r = n.y),
            {
              x: ty(ty(s * (o = window.devicePixelRatio || 1)) / o) || 0,
              y: ty(ty(r * o) / o) || 0,
            })
          : "function" == typeof g
          ? g(d)
          : d,
      v = m.x,
      b = void 0 === v ? 0 : v,
      y = m.y,
      E = void 0 === y ? 0 : y,
      w = d.hasOwnProperty("x"),
      $ = d.hasOwnProperty("y"),
      A = eq,
      C = "top",
      T = window;
    if (p) {
      var k = tm(a),
        L = "clientHeight",
        O = "clientWidth";
      k === ti(a) &&
        ((k = tu(a)),
        "static" !== td(k).position &&
          "absolute" === f &&
          ((L = "scrollHeight"), (O = "scrollWidth"))),
        ("top" === c || ((c === eq || c === ez) && "end" === h)) &&
          ((C = eR), (E -= k[L] - l.height), (E *= u ? 1 : -1)),
        (c === eq || (("top" === c || c === eR) && "end" === h)) &&
          ((A = ez), (b -= k[O] - l.width), (b *= u ? 1 : -1));
    }
    var x = Object.assign({ position: f }, p && tk);
    return u
      ? Object.assign(
          {},
          x,
          (((i = {})[C] = $ ? "0" : ""),
          (i[A] = w ? "0" : ""),
          (i.transform =
            1 >= (T.devicePixelRatio || 1)
              ? "translate(" + b + "px, " + E + "px)"
              : "translate3d(" + b + "px, " + E + "px, 0)"),
          i)
        )
      : Object.assign(
          {},
          x,
          (((t = {})[C] = $ ? E + "px" : ""),
          (t[A] = w ? b + "px" : ""),
          (t.transform = ""),
          t)
        );
  }
  let tO = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = n.gpuAcceleration,
        r = n.adaptive,
        o = n.roundOffsets,
        a = void 0 === o || o,
        l = {
          placement: ta(i.placement),
          variation: tT(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: void 0 === s || s,
        };
      null != i.modifiersData.popperOffsets &&
        (i.styles.popper = Object.assign(
          {},
          i.styles.popper,
          tL(
            Object.assign({}, l, {
              offsets: i.modifiersData.popperOffsets,
              position: i.options.strategy,
              adaptive: void 0 === r || r,
              roundOffsets: a,
            })
          )
        )),
        null != i.modifiersData.arrow &&
          (i.styles.arrow = Object.assign(
            {},
            i.styles.arrow,
            tL(
              Object.assign({}, l, {
                offsets: i.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a,
              })
            )
          )),
        (i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement,
        }));
    },
    data: {},
  };
  var tx = { passive: !0 };
  let t9 = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function e() {},
    effect: function e(t) {
      var i = t.state,
        n = t.instance,
        s = t.options,
        r = s.scroll,
        o = void 0 === r || r,
        a = s.resize,
        l = void 0 === a || a,
        c = ti(i.elements.popper),
        h = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return (
        o &&
          h.forEach(function (e) {
            e.addEventListener("scroll", n.update, tx);
          }),
        l && c.addEventListener("resize", n.update, tx),
        function () {
          o &&
            h.forEach(function (e) {
              e.removeEventListener("scroll", n.update, tx);
            }),
            l && c.removeEventListener("resize", n.update, tx);
        }
      );
    },
    data: {},
  };
  var tD = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function tS(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return tD[e];
    });
  }
  var tN = { start: "end", end: "start" };
  function tI(e) {
    return e.replace(/start|end/g, function (e) {
      return tN[e];
    });
  }
  function t_(e) {
    var t = ti(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function tP(e) {
    return tl(tu(e)).left + t_(e).scrollLeft;
  }
  function tM(e) {
    var t = td(e),
      i = t.overflow,
      n = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function tH(e, t) {
    void 0 === t && (t = []);
    var i,
      n = (function e(t) {
        return ["html", "body", "#document"].indexOf(tt(t)) >= 0
          ? t.ownerDocument.body
          : ts(t) && tM(t)
          ? t
          : e(tp(t));
      })(e),
      s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
      r = ti(n),
      o = s ? [r].concat(r.visualViewport || [], tM(n) ? n : []) : n,
      a = t.concat(o);
    return s ? a : a.concat(tH(tp(o)));
  }
  function tB(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function tj(e, t) {
    var i, n, s, r, o, a, l, c, h, d, f, u, p, g, m, v, b, y, E;
    return t === eX
      ? tB(
          ((n = ti((i = e))),
          (s = tu(i)),
          (r = n.visualViewport),
          (o = s.clientWidth),
          (a = s.clientHeight),
          (l = 0),
          (c = 0),
          r &&
            ((o = r.width),
            (a = r.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              ((l = r.offsetLeft), (c = r.offsetTop))),
          { width: o, height: a, x: l + tP(i), y: c })
        )
      : ts(t)
      ? (((d = tl((h = t))).top = d.top + h.clientTop),
        (d.left = d.left + h.clientLeft),
        (d.bottom = d.top + h.clientHeight),
        (d.right = d.left + h.clientWidth),
        (d.width = h.clientWidth),
        (d.height = h.clientHeight),
        (d.x = d.left),
        (d.y = d.top),
        d)
      : tB(
          ((f = tu(e)),
          (p = tu(f)),
          (g = t_(f)),
          (m = null == (u = f.ownerDocument) ? void 0 : u.body),
          (v = tv(
            p.scrollWidth,
            p.clientWidth,
            m ? m.scrollWidth : 0,
            m ? m.clientWidth : 0
          )),
          (b = tv(
            p.scrollHeight,
            p.clientHeight,
            m ? m.scrollHeight : 0,
            m ? m.clientHeight : 0
          )),
          (y = -g.scrollLeft + tP(f)),
          (E = -g.scrollTop),
          "rtl" === td(m || p).direction &&
            (y += tv(p.clientWidth, m ? m.clientWidth : 0) - v),
          { width: v, height: b, x: y, y: E })
        );
  }
  function tW(e) {
    var t,
      i = e.reference,
      n = e.element,
      s = e.placement,
      r = s ? ta(s) : null,
      o = s ? tT(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (r) {
      case "top":
        t = { x: a, y: i.y - n.height };
        break;
      case eR:
        t = { x: a, y: i.y + i.height };
        break;
      case ez:
        t = { x: i.x + i.width, y: l };
        break;
      case eq:
        t = { x: i.x - n.width, y: l };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var c = r ? t8(r) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (o) {
        case eV:
          t[c] = t[c] - (i[h] / 2 - n[h] / 2);
          break;
        case "end":
          t[c] = t[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return t;
  }
  function tR(e, t) {
    void 0 === t && (t = {});
    var i,
      n,
      s,
      r,
      o,
      a,
      l,
      c,
      h,
      d = t,
      f = d.placement,
      u = void 0 === f ? e.placement : f,
      p = d.boundary,
      g = d.rootBoundary,
      m = d.elementContext,
      v = void 0 === m ? eY : m,
      b = d.altBoundary,
      y = d.padding,
      E = void 0 === y ? 0 : y,
      w = t$("number" != typeof E ? E : tA(E, eU)),
      $ = e.rects.popper,
      A = e.elements[void 0 !== b && b ? (v === eY ? e0 : eY) : v],
      C =
        ((i = tn(A) ? A : A.contextElement || tu(e.elements.popper)),
        (n = void 0 === p ? eK : p),
        (s = void 0 === g ? eX : g),
        (c = (l = [].concat(
          "clippingParents" === n
            ? ((r = i),
              (o = tH(tp(r))),
              (a =
                ["absolute", "fixed"].indexOf(td(r).position) >= 0 && ts(r)
                  ? tm(r)
                  : r),
              tn(a)
                ? o.filter(function (e) {
                    return tn(e) && th(e, a) && "body" !== tt(e);
                  })
                : [])
            : [].concat(n),
          [s]
        ))[0]),
        ((h = l.reduce(function (e, t) {
          var n = tj(i, t);
          return (
            (e.top = tv(n.top, e.top)),
            (e.right = tb(n.right, e.right)),
            (e.bottom = tb(n.bottom, e.bottom)),
            (e.left = tv(n.left, e.left)),
            e
          );
        }, tj(i, c))).width = h.right - h.left),
        (h.height = h.bottom - h.top),
        (h.x = h.left),
        (h.y = h.top),
        h),
      T = tl(e.elements.reference),
      k = tW({ reference: T, element: $, strategy: "absolute", placement: u }),
      L = tB(Object.assign({}, $, k)),
      O = v === eY ? L : T,
      x = {
        top: C.top - O.top + w.top,
        bottom: O.bottom - C.bottom + w.bottom,
        left: C.left - O.left + w.left,
        right: O.right - C.right + w.right,
      },
      D = e.modifiersData.offset;
    if (v === eY && D) {
      var S = D[u];
      Object.keys(x).forEach(function (e) {
        var t = [ez, eR].indexOf(e) >= 0 ? 1 : -1,
          i = ["top", eR].indexOf(e) >= 0 ? "y" : "x";
        x[e] += S[i] * t;
      });
    }
    return x;
  }
  let tz = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = t.name;
      if (!i.modifiersData[s]._skip) {
        for (
          var r = n.mainAxis,
            o = void 0 === r || r,
            a = n.altAxis,
            l = void 0 === a || a,
            c = n.fallbackPlacements,
            h = n.padding,
            d = n.boundary,
            f = n.rootBoundary,
            u = n.altBoundary,
            p = n.flipVariations,
            g = void 0 === p || p,
            m = n.allowedAutoPlacements,
            v = i.options.placement,
            b = ta(v),
            y = [v]
              .concat(
                c ||
                  (b !== v && g
                    ? (function e(t) {
                        if (ta(t) === eF) return [];
                        var i = tS(t);
                        return [tI(t), i, tI(i)];
                      })(v)
                    : [tS(v)])
              )
              .reduce(function (e, t) {
                var n, s, r, o, a, l, c, u, p, v, b, y, E, w;
                return e.concat(
                  ta(t) === eF
                    ? ((n = i),
                      (o = (r = s =
                        {
                          placement: t,
                          boundary: d,
                          rootBoundary: f,
                          padding: h,
                          flipVariations: g,
                          allowedAutoPlacements: m,
                        }).placement),
                      (a = r.boundary),
                      (l = r.rootBoundary),
                      (c = r.padding),
                      (u = r.flipVariations),
                      (v = void 0 === (p = r.allowedAutoPlacements) ? e1 : p),
                      0 ===
                        (E = (y = (b = tT(o))
                          ? u
                            ? eQ
                            : eQ.filter(function (e) {
                                return tT(e) === b;
                              })
                          : eU).filter(function (e) {
                          return v.indexOf(e) >= 0;
                        })).length && (E = y),
                      Object.keys(
                        (w = E.reduce(function (e, t) {
                          return (
                            (e[t] = tR(n, {
                              placement: t,
                              boundary: a,
                              rootBoundary: l,
                              padding: c,
                            })[ta(t)]),
                            e
                          );
                        }, {}))
                      ).sort(function (e, t) {
                        return w[e] - w[t];
                      }))
                    : t
                );
              }, []),
            E = i.rects.reference,
            w = i.rects.popper,
            $ = new Map(),
            A = !0,
            C = y[0],
            T = 0;
          T < y.length;
          T++
        ) {
          var k = y[T],
            L = ta(k),
            O = tT(k) === eV,
            x = ["top", eR].indexOf(L) >= 0,
            D = x ? "width" : "height",
            S = tR(i, {
              placement: k,
              boundary: d,
              rootBoundary: f,
              altBoundary: u,
              padding: h,
            }),
            N = x ? (O ? ez : eq) : O ? eR : "top";
          E[D] > w[D] && (N = tS(N));
          var I = tS(N),
            _ = [];
          if (
            (o && _.push(S[L] <= 0),
            l && _.push(S[N] <= 0, S[I] <= 0),
            _.every(function (e) {
              return e;
            }))
          ) {
            (C = k), (A = !1);
            break;
          }
          $.set(k, _);
        }
        if (A)
          for (
            var P = g ? 3 : 1,
              M = function e(t) {
                var i = y.find(function (e) {
                  var i = $.get(e);
                  if (i)
                    return i.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (i) return (C = i), "break";
              },
              H = P;
            H > 0 && "break" !== M(H);
            H--
          );
        i.placement !== C &&
          ((i.modifiersData[s]._skip = !0), (i.placement = C), (i.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function tq(e, t, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function tF(e) {
    return ["top", ez, eR, eq].some(function (t) {
      return e[t] >= 0;
    });
  }
  let tU = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function e(t) {
        var i = t.state,
          n = t.name,
          s = i.rects.reference,
          r = i.rects.popper,
          o = i.modifiersData.preventOverflow,
          a = tR(i, { elementContext: "reference" }),
          l = tR(i, { altBoundary: !0 }),
          c = tq(a, s),
          h = tq(l, r, o),
          d = tF(c),
          f = tF(h);
        (i.modifiersData[n] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: h,
          isReferenceHidden: d,
          hasPopperEscaped: f,
        }),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": f,
          }));
      },
    },
    tV = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function e(t) {
        var i = t.state,
          n = t.options,
          s = t.name,
          r = n.offset,
          o = void 0 === r ? [0, 0] : r,
          a = e1.reduce(function (e, t) {
            var n, s, r, a, l, c, h, d;
            return (
              (e[t] =
                ((n = t),
                (s = i.rects),
                (r = o),
                (l = [eq, "top"].indexOf((a = ta(n))) >= 0 ? -1 : 1),
                (h = (c =
                  "function" == typeof r
                    ? r(Object.assign({}, s, { placement: n }))
                    : r)[0]),
                (d = c[1]),
                (h = h || 0),
                (d = (d || 0) * l),
                [eq, ez].indexOf(a) >= 0 ? { x: d, y: h } : { x: h, y: d })),
              e
            );
          }, {}),
          l = a[i.placement],
          c = l.x,
          h = l.y;
        null != i.modifiersData.popperOffsets &&
          ((i.modifiersData.popperOffsets.x += c),
          (i.modifiersData.popperOffsets.y += h)),
          (i.modifiersData[s] = a);
      },
    },
    tK = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function e(t) {
        var i = t.state,
          n = t.name;
        i.modifiersData[n] = tW({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement,
        });
      },
      data: {},
    },
    tX = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function e(t) {
        var i,
          n = t.state,
          s = t.options,
          r = t.name,
          o = s.mainAxis,
          a = void 0 === o || o,
          l = s.altAxis,
          c = void 0 !== l && l,
          h = s.boundary,
          d = s.rootBoundary,
          f = s.altBoundary,
          u = s.padding,
          p = s.tether,
          g = void 0 === p || p,
          m = s.tetherOffset,
          v = void 0 === m ? 0 : m,
          b = tR(n, {
            boundary: h,
            rootBoundary: d,
            padding: u,
            altBoundary: f,
          }),
          y = ta(n.placement),
          E = tT(n.placement),
          w = !E,
          $ = t8(y),
          A = "x" === (i = $) ? "y" : "x",
          C = n.modifiersData.popperOffsets,
          T = n.rects.reference,
          k = n.rects.popper,
          L =
            "function" == typeof v
              ? v(Object.assign({}, n.rects, { placement: n.placement }))
              : v,
          O = { x: 0, y: 0 };
        if (C) {
          if (a || c) {
            var x = "y" === $ ? "top" : eq,
              D = "y" === $ ? eR : ez,
              S = "y" === $ ? "height" : "width",
              N = C[$],
              I = C[$] + b[x],
              _ = C[$] - b[D],
              P = g ? -k[S] / 2 : 0,
              M = E === eV ? T[S] : k[S],
              H = E === eV ? -k[S] : -T[S],
              B = n.elements.arrow,
              j = g && B ? tc(B) : { width: 0, height: 0 },
              W = n.modifiersData["arrow#persistent"]
                ? n.modifiersData["arrow#persistent"].padding
                : tw(),
              R = W[x],
              z = W[D],
              q = tE(0, T[S], j[S]),
              F = w ? T[S] / 2 - P - q - R - L : M - q - R - L,
              U = w ? -T[S] / 2 + P + q + z + L : H + q + z + L,
              V = n.elements.arrow && tm(n.elements.arrow),
              K = V ? ("y" === $ ? V.clientTop || 0 : V.clientLeft || 0) : 0,
              X = n.modifiersData.offset
                ? n.modifiersData.offset[n.placement][$]
                : 0,
              Y = C[$] + F - X - K,
              Q = C[$] + U - X;
            if (a) {
              var G = tE(g ? tb(I, Y) : I, N, g ? tv(_, Q) : _);
              (C[$] = G), (O[$] = G - N);
            }
            if (c) {
              var Z = C[A],
                J = Z + b["x" === $ ? "top" : eq],
                ee = Z - b["x" === $ ? eR : ez],
                et = tE(g ? tb(J, Y) : J, Z, g ? tv(ee, Q) : ee);
              (C[A] = et), (O[A] = et - Z);
            }
          }
          n.modifiersData[r] = O;
        }
      },
      requiresIfExists: ["offset"],
    };
  var tY = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function t0() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function tQ(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = t.defaultOptions,
      r = void 0 === s ? tY : s;
    return function e(t, i, s) {
      void 0 === s && (s = r);
      var o,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, tY, r),
          modifiersData: {},
          elements: { reference: t, popper: i },
          attributes: {},
          styles: {},
        },
        c = [],
        h = !1,
        d = {
          state: l,
          setOptions: function e(s) {
            var o,
              a,
              h,
              u,
              p,
              g,
              m,
              v,
              b = "function" == typeof s ? s(l.options) : s;
            f(),
              (l.options = Object.assign({}, r, l.options, b)),
              (l.scrollParents = {
                reference: tn(t)
                  ? tH(t)
                  : t.contextElement
                  ? tH(t.contextElement)
                  : [],
                popper: tH(i),
              });
            var y =
              ((v =
                ((u = h =
                  Object.keys(
                    (a = (o = [].concat(n, l.options.modifiers)).reduce(
                      function (e, t) {
                        var i = e[t.name];
                        return (
                          (e[t.name] = i
                            ? Object.assign({}, i, t, {
                                options: Object.assign(
                                  {},
                                  i.options,
                                  t.options
                                ),
                                data: Object.assign({}, i.data, t.data),
                              })
                            : t),
                          e
                        );
                      },
                      {}
                    ))
                  ).map(function (e) {
                    return a[e];
                  })),
                (p = new Map()),
                (g = new Set()),
                (m = []),
                u.forEach(function (e) {
                  p.set(e.name, e);
                }),
                u.forEach(function (e) {
                  g.has(e.name) ||
                    (function e(t) {
                      g.add(t.name),
                        []
                          .concat(t.requires || [], t.requiresIfExists || [])
                          .forEach(function (t) {
                            if (!g.has(t)) {
                              var i = p.get(t);
                              i && e(i);
                            }
                          }),
                        m.push(t);
                    })(e);
                }),
                m)),
              te.reduce(function (e, t) {
                return e.concat(
                  v.filter(function (e) {
                    return e.phase === t;
                  })
                );
              }, []));
            return (
              (l.orderedModifiers = y.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  n = e.effect;
                if ("function" == typeof n) {
                  var s = n({
                      state: l,
                      name: t,
                      instance: d,
                      options: void 0 === i ? {} : i,
                    }),
                    r = function e() {};
                  c.push(s || r);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function e() {
            if (!h) {
              var t,
                i,
                n,
                s,
                r,
                o,
                a,
                c,
                f,
                u,
                p,
                g,
                m,
                v = l.elements,
                b = v.reference,
                y = v.popper;
              if (t0(b, y)) {
                (l.rects = {
                  reference:
                    ((n = b),
                    (s = tm(y)),
                    (r = "fixed" === l.options.strategy),
                    (o = ts(s)),
                    ts(s) &&
                      ((f =
                        (c = (a = s).getBoundingClientRect()).width /
                          a.offsetWidth || 1),
                      c.height,
                      a.offsetHeight),
                    (u = tu(s)),
                    (p = tl(n)),
                    (g = { scrollLeft: 0, scrollTop: 0 }),
                    (m = { x: 0, y: 0 }),
                    (o || (!o && !r)) &&
                      (("body" !== tt(s) || tM(u)) &&
                        (g =
                          (t = s) !== ti(t) && ts(t)
                            ? {
                                scrollLeft: (i = t).scrollLeft,
                                scrollTop: i.scrollTop,
                              }
                            : t_(t)),
                      ts(s)
                        ? ((m = tl(s)),
                          (m.x += s.clientLeft),
                          (m.y += s.clientTop))
                        : u && (m.x = tP(u))),
                    {
                      x: p.left + g.scrollLeft - m.x,
                      y: p.top + g.scrollTop - m.y,
                      width: p.width,
                      height: p.height,
                    }),
                  popper: tc(y),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var E = 0; E < l.orderedModifiers.length; E++) {
                  if (!0 === l.reset) {
                    (l.reset = !1), (E = -1);
                    continue;
                  }
                  var w = l.orderedModifiers[E],
                    $ = w.fn,
                    A = w.options,
                    C = void 0 === A ? {} : A,
                    T = w.name;
                  "function" == typeof $ &&
                    (l =
                      $({ state: l, options: C, name: T, instance: d }) || l);
                }
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                d.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(o());
                    });
                  })),
                a
              );
            }),
          destroy: function e() {
            f(), (h = !0);
          },
        };
      if (!t0(t, i)) return d;
      function f() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        d.setOptions(s).then(function (e) {
          !h && s.onFirstUpdate && s.onFirstUpdate(e);
        }),
        d
      );
    };
  }
  var t1 = tQ(),
    t3 = tQ({ defaultModifiers: [t9, tK, tO, to] }),
    t2 = tQ({ defaultModifiers: [t9, tK, tO, to, tV, tz, tX, tC, tU] });
  let t4 = Object.freeze({
      __proto__: null,
      popperGenerator: tQ,
      detectOverflow: tR,
      createPopperBase: t1,
      createPopper: t2,
      createPopperLite: t3,
      top: "top",
      bottom: eR,
      right: ez,
      left: eq,
      auto: eF,
      basePlacements: eU,
      start: eV,
      end: "end",
      clippingParents: eK,
      viewport: eX,
      popper: eY,
      reference: e0,
      variationPlacements: eQ,
      placements: e1,
      beforeRead: e3,
      read: e2,
      afterRead: e4,
      beforeMain: eG,
      main: eZ,
      afterMain: e6,
      beforeWrite: eJ,
      write: e5,
      afterWrite: e7,
      modifierPhases: te,
      applyStyles: to,
      arrow: tC,
      computeStyles: tO,
      eventListeners: t9,
      flip: tz,
      hide: tU,
      offset: tV,
      popperOffsets: tK,
      preventOverflow: tX,
    }),
    tG = "dropdown",
    tZ = ".bs.dropdown",
    t6 = ".data-api",
    tJ = "Escape",
    t5 = "Space",
    t7 = "ArrowUp",
    ie = "ArrowDown",
    it = RegExp(`${t7}|${ie}|${tJ}`),
    ii = `hide${tZ}`,
    is = `hidden${tZ}`,
    ir = `show${tZ}`,
    io = `shown${tZ}`,
    ia = `click${tZ}${t6}`,
    il = `keydown${tZ}${t6}`,
    ic = `keyup${tZ}${t6}`,
    ih = "show",
    id = '[data-bs-toggle="dropdown"]',
    iu = ".dropdown-menu",
    ip = y() ? "top-end" : "top-start",
    ig = y() ? "top-start" : "top-end",
    im = y() ? "bottom-end" : "bottom-start",
    i8 = y() ? "bottom-start" : "bottom-end",
    iv = y() ? "left-start" : "right-start",
    ib = y() ? "right-start" : "left-start",
    iy = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    iE = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class iw extends z {
    constructor(e, t) {
      super(e),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return iy;
    }
    static get DefaultType() {
      return iE;
    }
    static get NAME() {
      return tG;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (f(this._element) || this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element };
      if (j.trigger(this._element, ir, e).defaultPrevented) return;
      let t = iw.getParentFromElement(this._element);
      this._inNavbar
        ? Z.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(t),
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((e) => j.on(e, "mouseover", p)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(ih),
        this._element.classList.add(ih),
        j.trigger(this._element, io, e);
    }
    hide() {
      if (f(this._element) || !this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(e) {
      j.trigger(this._element, ii, e).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((e) => j.off(e, "mouseover", p)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(ih),
        this._element.classList.remove(ih),
        this._element.setAttribute("aria-expanded", "false"),
        Z.removeDataAttribute(this._menu, "popper"),
        j.trigger(this._element, is, e));
    }
    _getConfig(e) {
      if (
        (h(
          tG,
          (e = {
            ...this.constructor.Default,
            ...Z.getDataAttributes(this._element),
            ...e,
          }),
          this.constructor.DefaultType
        ),
        "object" == typeof e.reference &&
          !l(e.reference) &&
          "function" != typeof e.reference.getBoundingClientRect)
      )
        throw TypeError(
          `${tG.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return e;
    }
    _createPopper(e) {
      if (void 0 === t4)
        throw TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = e)
        : l(this._config.reference)
        ? (t = c(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      let i = this._getPopperConfig(),
        n = i.modifiers.find(
          (e) => "applyStyles" === e.name && !1 === e.enabled
        );
      (this._popper = t2(t, this._menu, i)),
        n && Z.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(e = this._element) {
      return e.classList.contains(ih);
    }
    _getMenuElement() {
      return J.next(this._element, iu)[0];
    }
    _getPlacement() {
      let e = this._element.parentNode;
      if (e.classList.contains("dropend")) return iv;
      if (e.classList.contains("dropstart")) return ib;
      let t =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? (t ? ig : ip) : t ? i8 : im;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _getPopperConfig() {
      let e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: e, target: t }) {
      let i = J.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(d);
      i.length && A(i, t, e === ie, !i.includes(t)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = iw.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
        return;
      let t = J.find(id);
      for (let i = 0, n = t.length; i < n; i++) {
        let s = iw.getInstance(t[i]);
        if (!s || !1 === s._config.autoClose || !s._isShown()) continue;
        let r = { relatedTarget: s._element };
        if (e) {
          let o = e.composedPath(),
            a = o.includes(s._menu);
          if (
            o.includes(s._element) ||
            ("inside" === s._config.autoClose && !a) ||
            ("outside" === s._config.autoClose && a) ||
            (s._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          "click" === e.type && (r.clickEvent = e);
        }
        s._completeHide(r);
      }
    }
    static getParentFromElement(e) {
      return r(e) || e.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? e.key === t5 ||
            (e.key !== tJ &&
              ((e.key !== ie && e.key !== t7) || e.target.closest(iu)))
          : !it.test(e.key)
      )
        return;
      let t = this.classList.contains(ih);
      if (
        (!t && e.key === tJ) ||
        (e.preventDefault(), e.stopPropagation(), f(this))
      )
        return;
      let i = this.matches(id) ? this : J.prev(this, id)[0],
        n = iw.getOrCreateInstance(i);
      if (e.key === tJ) {
        n.hide();
        return;
      }
      if (e.key === t7 || e.key === ie) {
        t || n.show(), n._selectMenuItem(e);
        return;
      }
      (t && e.key !== t5) || iw.clearMenus();
    }
  }
  j.on(document, il, id, iw.dataApiKeydownHandler),
    j.on(document, il, iu, iw.dataApiKeydownHandler),
    j.on(document, ia, iw.clearMenus),
    j.on(document, ic, iw.clearMenus),
    j.on(document, ia, id, function (e) {
      e.preventDefault(), iw.getOrCreateInstance(this).toggle();
    }),
    E(iw);
  let i$ = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    iA = ".sticky-top";
  class iC {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      let e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
        this._setElementAttributes(i$, "paddingRight", (t) => t + e),
        this._setElementAttributes(iA, "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      let n = this.getWidth(),
        s = (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + n)
            return;
          this._saveInitialAttribute(e, t);
          let s = window.getComputedStyle(e)[t];
          e.style[t] = `${i(Number.parseFloat(s))}px`;
        };
      this._applyManipulationCallback(e, s);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(i$, "paddingRight"),
        this._resetElementAttributes(iA, "marginRight");
    }
    _saveInitialAttribute(e, t) {
      let i = e.style[t];
      i && Z.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      let i = (e) => {
        let i = Z.getDataAttribute(e, t);
        void 0 === i
          ? e.style.removeProperty(t)
          : (Z.removeDataAttribute(e, t), (e.style[t] = i));
      };
      this._applyManipulationCallback(e, i);
    }
    _applyManipulationCallback(e, t) {
      l(e) ? t(e) : J.find(e, this._element).forEach(t);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  let iT = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    ik = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    iL = "backdrop",
    iO = "show",
    ix = `mousedown.bs.${iL}`;
  class i9 {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(e) {
      if (!this._config.isVisible) {
        w(e);
        return;
      }
      this._append(),
        this._config.isAnimated && g(this._getElement()),
        this._getElement().classList.add(iO),
        this._emulateAnimation(() => {
          w(e);
        });
    }
    hide(e) {
      if (!this._config.isVisible) {
        w(e);
        return;
      }
      this._getElement().classList.remove(iO),
        this._emulateAnimation(() => {
          this.dispose(), w(e);
        });
    }
    _getElement() {
      if (!this._element) {
        let e = document.createElement("div");
        (e.className = this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _getConfig(e) {
      return (
        ((e = { ...iT, ...("object" == typeof e ? e : {}) }).rootElement = c(
          e.rootElement
        )),
        h(iL, e, ik),
        e
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        j.on(this._getElement(), ix, () => {
          w(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, ix),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(e) {
      $(e, this._getElement(), this._config.isAnimated);
    }
  }
  let iD = { trapElement: null, autofocus: !0 },
    iS = { trapElement: "element", autofocus: "boolean" },
    iN = ".bs.focustrap",
    iI = `focusin${iN}`,
    i_ = `keydown.tab${iN}`,
    iP = "backward";
  class iM {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      let { trapElement: e, autofocus: t } = this._config;
      this._isActive ||
        (t && e.focus(),
        j.off(document, iN),
        j.on(document, iI, (e) => this._handleFocusin(e)),
        j.on(document, i_, (e) => this._handleKeydown(e)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, iN));
    }
    _handleFocusin(e) {
      let { target: t } = e,
        { trapElement: i } = this._config;
      if (t === document || t === i || i.contains(t)) return;
      let n = J.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === iP
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key &&
        (this._lastTabNavDirection = e.shiftKey ? iP : "forward");
    }
    _getConfig(e) {
      return (
        h("focustrap", (e = { ...iD, ...("object" == typeof e ? e : {}) }), iS),
        e
      );
    }
  }
  let iH = "modal",
    iB = ".bs.modal",
    ij = "Escape",
    iW = { backdrop: !0, keyboard: !0, focus: !0 },
    iR = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    iz = `hide${iB}`,
    iq = `hidePrevented${iB}`,
    iF = `hidden${iB}`,
    iU = `show${iB}`,
    iV = `shown${iB}`,
    iK = `resize${iB}`,
    iX = `click.dismiss${iB}`,
    iY = `keydown.dismiss${iB}`,
    i0 = `mouseup.dismiss${iB}`,
    iQ = `mousedown.dismiss${iB}`,
    i1 = `click${iB}.data-api`,
    i3 = "modal-open",
    i2 = "show",
    i4 = "modal-static";
  class iG extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._dialog = J.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new iC());
    }
    static get Default() {
      return iW;
    }
    static get NAME() {
      return iH;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (!this._isShown && !this._isTransitioning)
        j.trigger(this._element, iU, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(i3),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          j.on(this._dialog, iQ, () => {
            j.one(this._element, i0, (e) => {
              e.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(e)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, iz).defaultPrevented) return;
      this._isShown = !1;
      let e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(i2),
        j.off(this._element, iX),
        j.off(this._dialog, iQ),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((e) => j.off(e, iB)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new i9({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new iM({ trapElement: this._element });
    }
    _getConfig(e) {
      return (
        h(
          iH,
          (e = {
            ...iW,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          iR
        ),
        e
      );
    }
    _showElement(e) {
      let t = this._isAnimated(),
        i = J.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        t && g(this._element),
        this._element.classList.add(i2);
      let n = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          j.trigger(this._element, iV, { relatedTarget: e });
      };
      this._queueCallback(n, this._dialog, t);
    }
    _setEscapeEvent() {
      this._isShown
        ? j.on(this._element, iY, (e) => {
            this._config.keyboard && e.key === ij
              ? (e.preventDefault(), this.hide())
              : this._config.keyboard ||
                e.key !== ij ||
                this._triggerBackdropTransition();
          })
        : j.off(this._element, iY);
    }
    _setResizeEvent() {
      this._isShown
        ? j.on(window, iK, () => this._adjustDialog())
        : j.off(window, iK);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(i3),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, iF);
        });
    }
    _showBackdrop(e) {
      j.on(this._element, iX, (e) => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = !1;
          return;
        }
        e.target === e.currentTarget &&
          (!0 === this._config.backdrop
            ? this.hide()
            : "static" === this._config.backdrop &&
              this._triggerBackdropTransition());
      }),
        this._backdrop.show(e);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, iq).defaultPrevented) return;
      let { classList: e, scrollHeight: t, style: i } = this._element,
        n = t > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        e.contains(i4) ||
        (n || (i.overflowY = "hidden"),
        e.add(i4),
        this._queueCallback(() => {
          e.remove(i4),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        i = t > 0;
      ((!i && e && !y()) || (i && !e && y())) &&
        (this._element.style.paddingLeft = `${t}px`),
        ((i && !e && !y()) || (!i && e && y())) &&
          (this._element.style.paddingRight = `${t}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, t) {
      return this.each(function () {
        let i = iG.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  }
  j.on(document, i1, '[data-bs-toggle="modal"]', function (e) {
    let t = r(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      j.one(t, iU, (e) => {
        e.defaultPrevented ||
          j.one(t, iF, () => {
            d(this) && this.focus();
          });
      });
    let i = J.findOne(".modal.show");
    i && iG.getInstance(i).hide();
    iG.getOrCreateInstance(t).toggle(this);
  }),
    q(iG),
    E(iG);
  let iZ = "offcanvas",
    i6 = ".bs.offcanvas",
    iJ = ".data-api",
    i5 = `load${i6}${iJ}`,
    i7 = { backdrop: !0, keyboard: !0, scroll: !1 },
    ne = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    nt = "show",
    ni = ".offcanvas.show",
    nn = `show${i6}`,
    ns = `shown${i6}`,
    nr = `hide${i6}`,
    no = `hidden${i6}`,
    na = `click${i6}${iJ}`,
    nl = `keydown.dismiss${i6}`;
  class nc extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return iZ;
    }
    static get Default() {
      return i7;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown) return;
      if (j.trigger(this._element, nn, { relatedTarget: e }).defaultPrevented)
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new iC().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(nt);
      let t = () => {
        this._config.scroll || this._focustrap.activate(),
          j.trigger(this._element, ns, { relatedTarget: e });
      };
      this._queueCallback(t, this._element, !0);
    }
    hide() {
      if (!this._isShown) return;
      if (j.trigger(this._element, nr).defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(nt),
        this._backdrop.hide();
      let e = () => {
        this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._element.style.visibility = "hidden"),
          this._config.scroll || new iC().reset(),
          j.trigger(this._element, no);
      };
      this._queueCallback(e, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(e) {
      return (
        h(
          iZ,
          (e = {
            ...i7,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          ne
        ),
        e
      );
    }
    _initializeBackDrop() {
      return new i9({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new iM({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, nl, (e) => {
        this._config.keyboard && "Escape" === e.key && this.hide();
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nc.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  j.on(document, na, '[data-bs-toggle="offcanvas"]', function (e) {
    let t = r(this);
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), f(this)))
      return;
    j.one(t, no, () => {
      d(this) && this.focus();
    });
    let i = J.findOne(ni);
    i && i !== t && nc.getInstance(i).hide();
    nc.getOrCreateInstance(t).toggle(this);
  }),
    j.on(window, i5, () =>
      J.find(ni).forEach((e) => nc.getOrCreateInstance(e).show())
    ),
    q(nc),
    E(nc);
  let nh = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    nd = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    nf =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    nu = (e, t) => {
      let i = e.nodeName.toLowerCase();
      if (t.includes(i))
        return (
          !nh.has(i) || Boolean(nd.test(e.nodeValue) || nf.test(e.nodeValue))
        );
      let n = t.filter((e) => e instanceof RegExp);
      for (let s = 0, r = n.length; s < r; s++) if (n[s].test(i)) return !0;
      return !1;
    };
  function np(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    let n = new window.DOMParser().parseFromString(e, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let r = 0, o = s.length; r < o; r++) {
      let a = s[r],
        l = a.nodeName.toLowerCase();
      if (!Object.keys(t).includes(l)) {
        a.remove();
        continue;
      }
      let c = [].concat(...a.attributes),
        h = [].concat(t["*"] || [], t[l] || []);
      c.forEach((e) => {
        nu(e, h) || a.removeAttribute(e.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  let ng = "tooltip",
    nm = ".bs.tooltip",
    n8 = new Set(["sanitize", "allowList", "sanitizeFn"]),
    nv = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    nb = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: y() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: y() ? "right" : "left",
    },
    ny = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    nE = {
      HIDE: `hide${nm}`,
      HIDDEN: `hidden${nm}`,
      SHOW: `show${nm}`,
      SHOWN: `shown${nm}`,
      INSERTED: `inserted${nm}`,
      CLICK: `click${nm}`,
      FOCUSIN: `focusin${nm}`,
      FOCUSOUT: `focusout${nm}`,
      MOUSEENTER: `mouseenter${nm}`,
      MOUSELEAVE: `mouseleave${nm}`,
    },
    nw = "fade",
    n$ = "show",
    nA = "show",
    nC = ".tooltip-inner",
    nT = ".modal",
    nk = "hide.bs.modal",
    nL = "hover",
    nO = "focus";
  class nx extends z {
    constructor(e, t) {
      if (void 0 === t4)
        throw TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return ny;
    }
    static get NAME() {
      return ng;
    }
    static get Event() {
      return nE;
    }
    static get DefaultType() {
      return nv;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(e) {
      if (this._isEnabled) {
        if (e) {
          let t = this._initializeOnDelegatedTarget(e);
          (t._activeTrigger.click = !t._activeTrigger.click),
            t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
        } else {
          if (this.getTipElement().classList.contains(n$)) {
            this._leave(null, this);
            return;
          }
          this._enter(null, this);
        }
      }
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(nT), nk, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw Error("Please use show on visible elements");
      if (!(this.isWithContent() && this._isEnabled)) return;
      let e = j.trigger(this._element, this.constructor.Event.SHOW),
        t = u(this._element),
        n =
          null === t
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : t.contains(this._element);
      if (e.defaultPrevented || !n) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(nC).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      let s = this.getTipElement(),
        r = i(this.constructor.NAME);
      s.setAttribute("id", r),
        this._element.setAttribute("aria-describedby", r),
        this._config.animation && s.classList.add(nw);
      let o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, s, this._element)
            : this._config.placement,
        a = this._getAttachment(o);
      this._addAttachmentClass(a);
      let { container: l } = this._config;
      R.set(s, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.append(s),
          j.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = t2(this._element, s, this._getPopperConfig(a))),
        s.classList.add(n$);
      let c = this._resolvePossibleFunction(this._config.customClass);
      c && s.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((e) => {
            j.on(e, "mouseover", p);
          });
      let h = () => {
          let e = this._hoverState;
          (this._hoverState = null),
            j.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === e && this._leave(null, this);
        },
        d = this.tip.classList.contains(nw);
      this._queueCallback(h, this.tip, d);
    }
    hide() {
      if (!this._popper) return;
      let e = this.getTipElement(),
        t = () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== nA && e.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            j.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        };
      if (
        j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      e.classList.remove(n$),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((e) => j.off(e, "mouseover", p)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger[nO] = !1),
        (this._activeTrigger[nL] = !1);
      let i = this.tip.classList.contains(nw);
      this._queueCallback(t, this.tip, i), (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      let e = document.createElement("div");
      e.innerHTML = this._config.template;
      let t = e.children[0];
      return (
        this.setContent(t), t.classList.remove(nw, n$), (this.tip = t), this.tip
      );
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), nC);
    }
    _sanitizeAndSetContent(e, t, i) {
      let n = J.findOne(i, e);
      if (!t && n) {
        n.remove();
        return;
      }
      this.setElementContent(n, t);
    }
    setElementContent(e, t) {
      if (null !== e) {
        if (l(t)) {
          (t = c(t)),
            this._config.html
              ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t))
              : (e.textContent = t.textContent);
          return;
        }
        this._config.html
          ? (this._config.sanitize &&
              (t = np(t, this._config.allowList, this._config.sanitizeFn)),
            (e.innerHTML = t))
          : (e.textContent = t);
      }
    }
    getTitle() {
      let e =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(e);
    }
    updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
    _initializeOnDelegatedTarget(e, t) {
      return (
        t ||
        this.constructor.getOrCreateInstance(
          e.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e;
    }
    _getPopperConfig(e) {
      let t = {
        placement: e,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (e) => this._handlePopperPlacementChange(e),
          },
        ],
        onFirstUpdate: (e) => {
          e.options.placement !== e.placement &&
            this._handlePopperPlacementChange(e);
        },
      };
      return {
        ...t,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(t)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
      );
    }
    _getAttachment(e) {
      return nb[e.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e) => {
        if ("click" === e)
          j.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (e) => this.toggle(e)
          );
        else if ("manual" !== e) {
          let t =
              e === nL
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              e === nL
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          j.on(this._element, t, this._config.selector, (e) => this._enter(e)),
            j.on(this._element, i, this._config.selector, (e) =>
              this._leave(e)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        j.on(this._element.closest(nT), nk, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      let e = this._element.getAttribute("title"),
        t = typeof this._element.getAttribute("data-bs-original-title");
      (e || "string" !== t) &&
        (this._element.setAttribute("data-bs-original-title", e || ""),
        !e ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", e),
        this._element.setAttribute("title", ""));
    }
    _enter(e, t) {
      if (
        ((t = this._initializeOnDelegatedTarget(e, t)),
        e && (t._activeTrigger["focusin" === e.type ? nO : nL] = !0),
        t.getTipElement().classList.contains(n$) || t._hoverState === nA)
      ) {
        t._hoverState = nA;
        return;
      }
      if (
        (clearTimeout(t._timeout),
        (t._hoverState = nA),
        !t._config.delay || !t._config.delay.show)
      ) {
        t.show();
        return;
      }
      t._timeout = setTimeout(() => {
        t._hoverState === nA && t.show();
      }, t._config.delay.show);
    }
    _leave(e, t) {
      if (
        ((t = this._initializeOnDelegatedTarget(e, t)),
        e &&
          (t._activeTrigger["focusout" === e.type ? nO : nL] =
            t._element.contains(e.relatedTarget)),
        !t._isWithActiveTrigger())
      ) {
        if (
          (clearTimeout(t._timeout),
          (t._hoverState = "out"),
          !t._config.delay || !t._config.delay.hide)
        ) {
          t.hide();
          return;
        }
        t._timeout = setTimeout(() => {
          "out" === t._hoverState && t.hide();
        }, t._config.delay.hide);
      }
    }
    _isWithActiveTrigger() {
      for (let e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
      return !1;
    }
    _getConfig(e) {
      let t = Z.getDataAttributes(this._element);
      return (
        Object.keys(t).forEach((e) => {
          n8.has(e) && delete t[e];
        }),
        ((e = {
          ...this.constructor.Default,
          ...t,
          ...("object" == typeof e && e ? e : {}),
        }).container = !1 === e.container ? document.body : c(e.container)),
        "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        h(ng, e, this.constructor.DefaultType),
        e.sanitize && (e.template = np(e.template, e.allowList, e.sanitizeFn)),
        e
      );
    }
    _getDelegateConfig() {
      let e = {};
      for (let t in this._config)
        this.constructor.Default[t] !== this._config[t] &&
          (e[t] = this._config[t]);
      return e;
    }
    _cleanTipClass() {
      let e = this.getTipElement(),
        t = RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = e.getAttribute("class").match(t);
      null !== i &&
        i.length > 0 &&
        i.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(e) {
      let { state: t } = e;
      t &&
        ((this.tip = t.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(t.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nx.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  E(nx);
  let n9 = ".bs.popover",
    nD = {
      ...nx.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    nS = { ...nx.DefaultType, content: "(string|element|function)" },
    nN = {
      HIDE: `hide${n9}`,
      HIDDEN: `hidden${n9}`,
      SHOW: `show${n9}`,
      SHOWN: `shown${n9}`,
      INSERTED: `inserted${n9}`,
      CLICK: `click${n9}`,
      FOCUSIN: `focusin${n9}`,
      FOCUSOUT: `focusout${n9}`,
      MOUSEENTER: `mouseenter${n9}`,
      MOUSELEAVE: `mouseleave${n9}`,
    };
  class nI extends nx {
    static get Default() {
      return nD;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return nN;
    }
    static get DefaultType() {
      return nS;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nI.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  E(nI);
  let n_ = "scrollspy",
    nP = ".bs.scrollspy",
    nM = { offset: 10, method: "auto", target: "" },
    nH = { offset: "number", method: "string", target: "(string|element)" },
    nB = `activate${nP}`,
    nj = `scroll${nP}`,
    nW = `load${nP}.data-api`,
    nR = "dropdown-item",
    nz = "active",
    nq = ".nav-link",
    nF = ".list-group-item",
    nU = `${nq}, ${nF}, .${nR}`,
    nV = "position";
  class nK extends z {
    constructor(e, t) {
      super(e),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        j.on(this._scrollElement, nj, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return nM;
    }
    static get NAME() {
      return n_;
    }
    refresh() {
      let e =
          this._scrollElement === this._scrollElement.window ? "offset" : nV,
        t = "auto" === this._config.method ? e : this._config.method,
        i = t === nV ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      J.find(nU, this._config.target)
        .map((e) => {
          let n = s(e),
            r = n ? J.findOne(n) : null;
          if (r) {
            let o = r.getBoundingClientRect();
            if (o.width || o.height) return [Z[t](r).top + i, n];
          }
          return null;
        })
        .filter((e) => e)
        .sort((e, t) => e[0] - t[0])
        .forEach((e) => {
          this._offsets.push(e[0]), this._targets.push(e[1]);
        });
    }
    dispose() {
      j.off(this._scrollElement, nP), super.dispose();
    }
    _getConfig(e) {
      return (
        ((e = {
          ...nM,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof e && e ? e : {}),
        }).target = c(e.target) || document.documentElement),
        h(n_, e, nH),
        e
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      let e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        i = this._config.offset + t - this._getOffsetHeight();
      if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
        let n = this._targets[this._targets.length - 1];
        this._activeTarget !== n && this._activate(n);
        return;
      }
      if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
        (this._activeTarget = null), this._clear();
        return;
      }
      for (let s = this._offsets.length; s--; )
        this._activeTarget !== this._targets[s] &&
          e >= this._offsets[s] &&
          (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]) &&
          this._activate(this._targets[s]);
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      let t = nU
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        i = J.findOne(t.join(","), this._config.target);
      i.classList.add(nz),
        i.classList.contains(nR)
          ? J.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              nz
            )
          : J.parents(i, ".nav, .list-group").forEach((e) => {
              J.prev(e, `${nq}, ${nF}`).forEach((e) => e.classList.add(nz)),
                J.prev(e, ".nav-item").forEach((e) => {
                  J.children(e, nq).forEach((e) => e.classList.add(nz));
                });
            }),
        j.trigger(this._scrollElement, nB, { relatedTarget: e });
    }
    _clear() {
      J.find(nU, this._config.target)
        .filter((e) => e.classList.contains(nz))
        .forEach((e) => e.classList.remove(nz));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nK.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  j.on(window, nW, () => {
    J.find('[data-bs-spy="scroll"]').forEach((e) => new nK(e));
  }),
    E(nK);
  let nX = ".bs.tab",
    nY = `hide${nX}`,
    n0 = `hidden${nX}`,
    nQ = `show${nX}`,
    n1 = `shown${nX}`,
    n3 = `click${nX}.data-api`,
    n2 = "active",
    n4 = "fade",
    nG = "show",
    nZ = ".active",
    n6 = ":scope > li > .active";
  class nJ extends z {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(n2)
      )
        return;
      let e,
        t = r(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        let n = "UL" === i.nodeName || "OL" === i.nodeName ? n6 : nZ;
        e = (e = J.find(n, i))[e.length - 1];
      }
      let s = e ? j.trigger(e, nY, { relatedTarget: this._element }) : null;
      if (
        j.trigger(this._element, nQ, { relatedTarget: e }).defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      let o = () => {
        j.trigger(e, n0, { relatedTarget: this._element }),
          j.trigger(this._element, n1, { relatedTarget: e });
      };
      t ? this._activate(t, t.parentNode, o) : o();
    }
    _activate(e, t, i) {
      let n = (
          t && ("UL" === t.nodeName || "OL" === t.nodeName)
            ? J.find(n6, t)
            : J.children(t, nZ)
        )[0],
        s = i && n && n.classList.contains(n4),
        r = () => this._transitionComplete(e, n, i);
      n && s ? (n.classList.remove(nG), this._queueCallback(r, e, !0)) : r();
    }
    _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove(n2);
        let n = J.findOne(":scope > .dropdown-menu .active", t.parentNode);
        n && n.classList.remove(n2),
          "tab" === t.getAttribute("role") &&
            t.setAttribute("aria-selected", !1);
      }
      e.classList.add(n2),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        g(e),
        e.classList.contains(n4) && e.classList.add(nG);
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        let r = e.closest(".dropdown");
        r && J.find(".dropdown-toggle", r).forEach((e) => e.classList.add(n2)),
          e.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nJ.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  j.on(
    document,
    n3,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (e) {
      if (
        (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !f(this))
      )
        nJ.getOrCreateInstance(this).show();
    }
  ),
    E(nJ);
  let n5 = "toast",
    n7 = ".bs.toast",
    se = `mouseover${n7}`,
    st = `mouseout${n7}`,
    si = `focusin${n7}`,
    sn = `focusout${n7}`,
    ss = `hide${n7}`,
    sr = `hidden${n7}`,
    so = `show${n7}`,
    sa = `shown${n7}`,
    sl = "hide",
    sc = "show",
    sh = "showing",
    sd = { animation: "boolean", autohide: "boolean", delay: "number" },
    sf = { animation: !0, autohide: !0, delay: 5e3 };
  class su extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return sd;
    }
    static get Default() {
      return sf;
    }
    static get NAME() {
      return n5;
    }
    show() {
      if (j.trigger(this._element, so).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      let e = () => {
        this._element.classList.remove(sh),
          j.trigger(this._element, sa),
          this._maybeScheduleHide();
      };
      this._element.classList.remove(sl),
        g(this._element),
        this._element.classList.add(sc),
        this._element.classList.add(sh),
        this._queueCallback(e, this._element, this._config.animation);
    }
    hide() {
      if (!this._element.classList.contains(sc)) return;
      if (j.trigger(this._element, ss).defaultPrevented) return;
      let e = () => {
        this._element.classList.add(sl),
          this._element.classList.remove(sh),
          this._element.classList.remove(sc),
          j.trigger(this._element, sr);
      };
      this._element.classList.add(sh),
        this._queueCallback(e, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(sc) &&
          this._element.classList.remove(sc),
        super.dispose();
    }
    _getConfig(e) {
      return (
        h(
          n5,
          (e = {
            ...sf,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          this.constructor.DefaultType
        ),
        e
      );
    }
    _maybeScheduleHide() {
      !this._config.autohide ||
        this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t) {
        this._clearTimeout();
        return;
      }
      let i = e.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, se, (e) => this._onInteraction(e, !0)),
        j.on(this._element, st, (e) => this._onInteraction(e, !1)),
        j.on(this._element, si, (e) => this._onInteraction(e, !0)),
        j.on(this._element, sn, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = su.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  return (
    q(su),
    E(su),
    {
      Alert: K,
      Button: Y,
      Carousel: eC,
      Collapse: eW,
      Dropdown: iw,
      Modal: iG,
      Offcanvas: nc,
      Popover: nI,
      ScrollSpy: nK,
      Tab: nJ,
      Toast: su,
      Tooltip: nx,
    }
  );
});
