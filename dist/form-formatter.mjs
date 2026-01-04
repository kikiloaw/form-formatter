import { onMounted as M, withDirectives as g, createElementBlock as a, openBlock as d, vModelText as w, normalizeClass as n, createElementVNode as u, createBlock as S, toDisplayString as s, createCommentVNode as O, Fragment as m, renderList as h, normalizeStyle as q, vModelDynamic as B, vModelRadio as E, vModelCheckbox as R, unref as P, vModelSelect as T, nextTick as j, ref as z } from "vue";
import D from "fahad-select";
const L = ["required", "disabled"], N = {
  key: 1,
  class: "text-red-500"
}, G = {
  key: 0,
  class: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
}, H = { class: "flex items-center ps-4 gap-4" }, J = ["id", "type", "value", "onUpdate:modelValue", "name", "required", "disabled", "onChange"], K = ["for"], Q = { key: 1 }, W = { class: "flex items-center ps-4 gap-4" }, X = ["id", "value", "onUpdate:modelValue", "name", "required", "disabled", "onChange"], Y = ["for"], Z = {
  key: 2,
  class: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
}, I = { class: "flex items-center ps-4 gap-4" }, p = ["value", "id", "onUpdate:modelValue", "required", "disabled", "onChange"], _ = ["for"], ee = { key: 3 }, re = { class: "flex items-center ps-4 gap-4" }, le = ["value", "onUpdate:modelValue", "id", "required", "disabled", "onChange"], de = ["for"], ae = {
  key: 4,
  class: "inline-flex items-center me-5 cursor-pointer"
}, te = ["value", "disabled"], ie = { class: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" }, oe = ["placeholder", "minlength", "maxlength", "required", "disabled"], fe = ["required", "disabled"], ne = ["required", "disabled"], ue = ["placeholder", "max", "required", "disabled"], ce = ["multiple", "accept", "placeholder", "required", "disabled"], ge = ["placeholder", "minlength", "maxlength", "rows", "required", "disabled"], be = ["required", "disabled"], se = ["value"], me = {
  key: 9,
  class: "text-red-500"
}, A = {
  __name: "FieldRenderer",
  props: {
    field: { type: Object, required: !0 },
    form: { type: Object, required: !0 },
    parameters: { type: Object, default: () => ({}) },
    position: { type: Boolean, default: !1 },
    color: { type: Object, required: !0 },
    color_radio: { type: Object, required: !0 },
    setSelectRef: { type: Function, required: !0 },
    triggerCallback: { type: Function, required: !0 },
    onChange: { type: Function, required: !0 },
    handleFileUpload: { type: Function, required: !0 }
  },
  setup(e) {
    const o = e;
    M(() => {
      ["checkbox", "checkbox-group"].includes(o.field.type) && o.form[o.field.model] === void 0 && (o.form[o.field.model] = []);
    });
    const y = (c, l, r) => {
      const t = Array.isArray(o.form[l.model]);
      let i;
      l.type === "checkbox-group" ? i = l.exclusive !== !1 : i = l.exclusive || !t && o.form[l.model] !== void 0, i && (c.target.checked ? r.model ? l.options.forEach((f) => {
        f.model && f.model !== r.model && (o.form[f.model] = !1);
      }) : t ? j(() => {
        o.form[l.model] = [r.value];
      }) : o.form[l.model] = r.value : r.model || (t ? o.form[l.model] = [] : o.form[l.model] = "")), l.callback && o.triggerCallback(l.callback);
    }, x = (c, l, r) => {
      r.model && (l.type === "radio-group" || l.exclusive) && l.options.forEach((t) => {
        t.model && t.model !== r.model && (o.form[t.model] = !1);
      }), l.callback && o.triggerCallback(l.callback);
    }, C = (c) => {
      const l = o.form[c.model];
      return Array.isArray(l) ? l.includes(c.value) : c.value !== void 0 && c.value !== null ? l == c.value : !!l;
    }, v = (c) => {
      const l = c.color || "default", r = {
        orange: { bg: "#f97316", ring: "#fdba74" },
        // Orange-500, Orange-300
        teal: { bg: "#14b8a6", ring: "#5eead4" },
        // Teal-500, Teal-300 (Cyan-ish)
        purple: { bg: "#9333ea", ring: "#d8b4fe" },
        // Purple-600, Purple-300
        red: { bg: "#dc2626", ring: "#fca5a5" },
        // Red-600, Red-300
        green: { bg: "#16a34a", ring: "#86efac" },
        // Green-600, Green-300
        yellow: { bg: "#facc15", ring: "#fde047" },
        // Yellow-400, Yellow-300
        blue: { bg: "#2563eb", ring: "#93c5fd" },
        // Blue-600, Blue-300
        default: { bg: "#2563eb", ring: "#93c5fd" }
        // Blue default
      };
      if (!r[l] && l !== "default") return {};
      const t = C(c), i = {}, f = r[l] || r.default;
      return i["--tw-ring-color"] = f.ring, t && (i.backgroundColor = f.bg), i;
    };
    return (c, l) => e.field.type === "hidden" ? g((d(), a("input", {
      key: 0,
      type: "hidden",
      "onUpdate:modelValue": l[0] || (l[0] = (r) => e.form[e.field.model] = r),
      required: e.field.required,
      disabled: e.field.disabled ?? !1
    }, null, 8, L)), [
      [w, e.form[e.field.model]]
    ]) : e.field.type ? (d(), a("div", {
      key: 2,
      class: n([{
        "flex items-center space-x-3": !e.position,
        "flex-col": e.position,
        "": e.field.type === "text"
        // Optional: Keep if text needs special handling, but recommend removing for consistency
      }, "flex-1 flex"])
    }, [
      u("label", {
        class: n([{ "w-1/4": !e.position, "w-full mb-1": e.position }, "text-sm font-medium text-black dark:text-white"])
      }, s(e.field.label), 3),
      ["radio", "radio-group", "checkbox", "checkbox-group", "toggle"].includes(e.field.type) ? (d(), a("div", {
        key: 0,
        class: n([{ "w-3/4": !e.position, "w-full": e.position }, "bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"])
      }, [
        e.field.type === "radio" ? (d(), a("ul", G, [
          (d(!0), a(m, null, h(e.field.options, (r, t) => (d(), a("li", {
            key: r.value,
            class: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5"
          }, [
            u("div", H, [
              g(u("input", {
                id: `${e.field.model}-${t}`,
                type: r.model ? "checkbox" : "radio",
                value: r.value,
                "onUpdate:modelValue": (i) => e.form[r.model ?? e.field.model] = i,
                name: e.field.model,
                style: q(r.color === "orange" || e.field.color === "orange" ? "color: #f97316; --tw-ring-color: #f97316;" : r.color === "teal" || e.field.color === "teal" ? "color: #14b8a6; --tw-ring-color: #14b8a6;" : ""),
                class: n([r.model ? "rounded-full" : "", e.color_radio[r.color || e.field.color || "default"]]),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: (i) => x(i, e.field, r)
              }, null, 46, J), [
                [B, e.form[r.model ?? e.field.model]]
              ]),
              u("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              }, s(r.text), 9, K)
            ])
          ]))), 128))
        ])) : e.field.type === "radio-group" ? (d(), a("div", Q, [
          (d(!0), a(m, null, h(e.field.options, (r, t) => (d(), a("div", {
            key: r.value,
            class: "flex items-center mb-2"
          }, [
            u("div", W, [
              g(u("input", {
                id: `${e.field.model}-${t}`,
                type: "radio",
                value: r.value,
                "onUpdate:modelValue": (i) => e.form[r.model ?? e.field.model] = i,
                name: e.field.model,
                class: n(e.color_radio[r.color || e.field.color || "default"]),
                style: q(r.color === "orange" || e.field.color === "orange" ? "color: #f97316; --tw-ring-color: #f97316;" : r.color === "teal" || e.field.color === "teal" ? "color: #14b8a6; --tw-ring-color: #14b8a6;" : ""),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: (i) => x(i, e.field, r)
              }, null, 46, X), [
                [E, e.form[r.model ?? e.field.model]]
              ]),
              u("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              }, s(r.text), 9, Y)
            ])
          ]))), 128))
        ])) : e.field.type === "checkbox" ? (d(), a("ul", Z, [
          (d(!0), a(m, null, h(e.field.options, (r, t) => (d(), a("li", {
            key: r.value,
            class: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5"
          }, [
            u("div", I, [
              g(u("input", {
                type: "checkbox",
                value: r.value,
                id: `${e.field.model}-${t}`,
                "onUpdate:modelValue": (i) => e.form[r.model ?? e.field.model] = i,
                style: q(r.color === "orange" || e.field.color === "orange" ? "color: #f97316; --tw-ring-color: #f97316;" : r.color === "teal" || e.field.color === "teal" ? "color: #14b8a6; --tw-ring-color: #14b8a6;" : ""),
                class: n([e.field.rounded ? `rounded-${e.field.rounded}` : "rounded-md", e.color_radio[r.color || e.field.color || "default"]]),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: (i) => y(i, e.field, r)
              }, null, 46, p), [
                [R, e.form[r.model ?? e.field.model]]
              ]),
              u("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              }, s(r.text), 9, _)
            ])
          ]))), 128))
        ])) : e.field.type === "checkbox-group" ? (d(), a("div", ee, [
          (d(!0), a(m, null, h(e.field.options, (r, t) => (d(), a("div", {
            key: r.value,
            class: "flex items-center mb-2"
          }, [
            u("div", re, [
              g(u("input", {
                type: "checkbox",
                value: r.value,
                "onUpdate:modelValue": (i) => e.form[r.model ?? e.field.model] = i,
                style: q(r.color === "orange" || e.field.color === "orange" ? "color: #f97316; --tw-ring-color: #f97316;" : r.color === "teal" || e.field.color === "teal" ? "color: #14b8a6; --tw-ring-color: #14b8a6;" : ""),
                class: n(["m-1", e.field.rounded ? `rounded-${e.field.rounded}` : "rounded-md", e.color_radio[r.color || e.field.color || "default"]]),
                id: `${e.field.model}-${t}`,
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: (i) => y(i, e.field, r)
              }, null, 46, le), [
                [R, e.form[r.model ?? e.field.model]]
              ]),
              u("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              }, s(r.text), 9, de)
            ])
          ]))), 128))
        ])) : e.field.type === "toggle" ? (d(), a("label", ae, [
          g(u("input", {
            type: "checkbox",
            class: "sr-only peer",
            "onUpdate:modelValue": l[1] || (l[1] = (r) => e.form[e.field.model] = r),
            value: e.field.value,
            disabled: e.field.disabled ?? !1
          }, null, 8, te), [
            [R, e.form[e.field.model]]
          ]),
          u("div", {
            class: n(e.color[e.field.color || "default"]),
            style: q(v(e.field))
          }, null, 6),
          u("span", ie, s(e.field.placeholder), 1)
        ])) : O("", !0)
      ], 2)) : e.field.type === "fahadselect" ? (d(), S(P(D), {
        key: 1,
        ref: (r) => e.setSelectRef(r, e.field.model),
        modelValue: e.form[e.field.model],
        "onUpdate:modelValue": l[2] || (l[2] = (r) => e.form[e.field.model] = r),
        searchRoute: e.field.route,
        onTriggerChange: l[3] || (l[3] = (r) => e.triggerCallback(e.field.callback)),
        param: e.parameters[e.field.model],
        placeholder: e.field.placeholder,
        label: "label",
        multiple: e.field.multiple ?? !1,
        class: n({ "w-3/4": !e.position, "w-full": e.position }),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 8, ["modelValue", "searchRoute", "param", "placeholder", "multiple", "class", "required", "disabled"])) : e.field.type === "text" ? g((d(), a("input", {
        key: 2,
        type: "text",
        "onUpdate:modelValue": l[4] || (l[4] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        minlength: e.field.min,
        maxlength: e.field.max,
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, oe)), [
        [w, e.form[e.field.model]]
      ]) : e.field.type === "date" ? g((d(), a("input", {
        key: 3,
        type: "date",
        "onUpdate:modelValue": l[5] || (l[5] = (r) => e.form[e.field.model] = r),
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onfocus: "this.showPicker()"
      }, null, 10, fe)), [
        [w, e.form[e.field.model]]
      ]) : e.field.type === "time" ? g((d(), a("input", {
        key: 4,
        type: "time",
        "onUpdate:modelValue": l[6] || (l[6] = (r) => e.form[e.field.model] = r),
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onfocus: "this.showPicker()"
      }, null, 10, ne)), [
        [w, e.form[e.field.model]]
      ]) : e.field.type === "number" ? g((d(), a("input", {
        key: 5,
        type: "number",
        "onUpdate:modelValue": l[7] || (l[7] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        max: e.field.max,
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, ue)), [
        [w, e.form[e.field.model]]
      ]) : e.field.type === "file" ? (d(), a("input", {
        key: 6,
        type: "file",
        multiple: e.field.multiple,
        accept: e.field.accept,
        onChange: l[8] || (l[8] = (r) => e.handleFileUpload(r, e.field.model)),
        placeholder: e.field.placeholder,
        class: n(["block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 42, ce)) : e.field.type === "textarea" ? g((d(), a("textarea", {
        key: 7,
        "onUpdate:modelValue": l[9] || (l[9] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        minlength: e.field.min,
        maxlength: e.field.max,
        rows: e.field.rows,
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, ge)), [
        [w, e.form[e.field.model]]
      ]) : e.field.type === "select" ? g((d(), a("select", {
        key: 8,
        "onUpdate:modelValue": l[10] || (l[10] = (r) => e.form[e.field.model] = r),
        class: n(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onChange: l[11] || (l[11] = () => e.onChange(e.field.callback)),
        ref: (r) => e.setSelectRef(r, e.field.model)
      }, [
        (d(!0), a(m, null, h(e.field.options, (r) => (d(), a("option", {
          key: r.value,
          value: r.value
        }, s(r.text), 9, se))), 128))
      ], 42, be)), [
        [T, e.form[e.field.model]]
      ]) : (d(), a("p", me, "Unknown field type: " + s(e.field.type), 1))
    ], 2)) : (d(), a("p", N, "Unknown field type"));
  }
}, ye = {
  __name: "FormFormatter",
  props: {
    sampledata: { type: Array, required: !0 },
    form: { type: Object, required: !0 },
    parameters: { type: Object, default: () => ({}) },
    position: { type: Boolean, default: !1 }
  },
  emits: ["selectRefsReady", "triggerCallback"],
  setup(e, { emit: o }) {
    const y = e, x = {
      default: "w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      red: "w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      green: "w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      purple: "w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      teal: "w-5 h-5 bg-gray-100 border-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      yellow: "w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      orange: "w-5 h-5 bg-gray-100 border-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed"
    }, C = {
      default: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-disabled:cursor-not-allowed",
      red: "relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600 peer-disabled:cursor-not-allowed",
      green: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600 peer-disabled:cursor-not-allowed",
      purple: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-purple-600 peer-disabled:cursor-not-allowed",
      yellow: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400 peer-disabled:cursor-not-allowed",
      teal: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600 dark:peer-checked:bg-cyan-600 peer-disabled:cursor-not-allowed",
      orange: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500 dark:peer-checked:bg-yellow-500 peer-disabled:cursor-not-allowed"
    }, v = o, c = z({}), l = (f, U) => {
      f && (c[U] = f);
    };
    M(() => {
      j(() => v("selectRefsReady", c));
    });
    const r = (f) => {
      f && v("triggerCallback", f);
    }, t = (f) => {
      v("triggerCallback", f);
    }, i = (f, U) => {
      const k = f.target.files;
      if (!k.length) return;
      const V = Array.from(k).map((b) => new Promise(($) => {
        const F = new FileReader();
        F.onload = () => $({ name: b.name, size: b.size, type: b.type, content: F.result }), F.readAsDataURL(b);
      }));
      Promise.all(V).then((b) => {
        y.form[U] = b, y.form = { ...y.form }, console.log("Updated form with file data:", y.form);
      });
    };
    return (f, U) => (d(!0), a(m, null, h(e.sampledata, (k, V) => (d(), a(m, { key: V }, [
      Array.isArray(k) ? (d(), a("div", {
        key: 0,
        class: n(`grid grid-cols-${k.length} gap-4`)
      }, [
        (d(!0), a(m, null, h(k, (b, $) => (d(), S(A, {
          key: $,
          field: b,
          form: e.form,
          parameters: e.parameters,
          position: e.position,
          color: C,
          color_radio: x,
          setSelectRef: l,
          triggerCallback: t,
          onChange: r,
          handleFileUpload: i
        }, null, 8, ["field", "form", "parameters", "position"]))), 128))
      ], 2)) : (d(), S(A, {
        key: 1,
        field: k,
        form: e.form,
        parameters: e.parameters,
        position: e.position,
        color: C,
        color_radio: x,
        setSelectRef: l,
        triggerCallback: t,
        onChange: r,
        handleFileUpload: i
      }, null, 8, ["field", "form", "parameters", "position"]))
    ], 64))), 128));
  }
}, ke = (e) => {
  e.component("FormFormatter", ye);
};
typeof window < "u" && window.Vue && window.Vue.use({ install: ke });
export {
  ye as FormFormatter,
  ye as default,
  ke as install
};
