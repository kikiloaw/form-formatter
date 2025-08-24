import { withDirectives as n, createElementBlock as a, openBlock as d, vModelText as y, normalizeClass as i, createElementVNode as o, createBlock as q, toDisplayString as b, createCommentVNode as O, Fragment as s, renderList as m, vModelRadio as S, vModelCheckbox as v, unref as A, vModelSelect as B, ref as M, onMounted as P, nextTick as z } from "vue";
import D from "fahad-select";
const T = ["required", "disabled"], E = {
  key: 1,
  class: "text-red-500"
}, L = {
  key: 0,
  class: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
}, N = { class: "flex items-center ps-4" }, G = ["id", "value", "name", "required", "disabled"], H = ["for"], J = { key: 1 }, K = { class: "flex items-center ps-4" }, Q = ["id", "value", "name", "required", "disabled"], W = ["for"], X = {
  key: 2,
  class: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
}, Y = { class: "flex items-center ps-4" }, Z = ["value", "id", "required", "disabled"], I = ["for"], p = { key: 3 }, _ = { class: "flex items-center ps-4" }, ee = ["value", "id", "required", "disabled"], re = ["for"], le = {
  key: 4,
  class: "inline-flex items-center me-5 cursor-pointer"
}, de = ["value", "disabled"], ae = { class: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" }, te = ["placeholder", "minlength", "maxlength", "required", "disabled"], ie = ["required", "disabled"], oe = ["required", "disabled"], fe = ["placeholder", "max", "required", "disabled"], ne = ["multiple", "accept", "placeholder", "required", "disabled"], ue = ["placeholder", "minlength", "maxlength", "rows", "required", "disabled"], ge = ["required", "disabled"], be = ["value"], se = {
  key: 9,
  class: "text-red-500"
}, j = {
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
    return (C, l) => e.field.type === "hidden" ? n((d(), a("input", {
      key: 0,
      type: "hidden",
      "onUpdate:modelValue": l[0] || (l[0] = (r) => e.form[e.field.model] = r),
      required: e.field.required,
      disabled: e.field.disabled ?? !1
    }, null, 8, T)), [
      [y, e.form[e.field.model]]
    ]) : e.field.type ? (d(), a("div", {
      key: 2,
      class: i([{
        "flex items-center space-x-3": !e.position,
        "flex-col": e.position,
        "": e.field.type === "text"
        // Optional: Keep if text needs special handling, but recommend removing for consistency
      }, "flex-1 flex"])
    }, [
      o("label", {
        class: i([{ "w-1/4": !e.position, "w-full mb-1": e.position }, "text-sm font-medium text-black dark:text-white"])
      }, b(e.field.label), 3),
      ["radio", "radio-group", "checkbox", "checkbox-group", "toggle"].includes(e.field.type) ? (d(), a("div", {
        key: 0,
        class: i([{ "w-3/4": !e.position, "w-full": e.position }, "bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"])
      }, [
        e.field.type === "radio" ? (d(), a("ul", L, [
          (d(!0), a(s, null, m(e.field.options, (r, t) => (d(), a("li", {
            key: r.value,
            class: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5"
          }, [
            o("div", N, [
              n(o("input", {
                id: `${e.field.model}-${t}`,
                type: "radio",
                value: r.value,
                "onUpdate:modelValue": l[1] || (l[1] = (f) => e.form[e.field.model] = f),
                name: e.field.model,
                class: i(e.color_radio[e.field.color || "default"]),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: l[2] || (l[2] = (f) => e.field.callback ? e.triggerCallback(e.field.callback) : null)
              }, null, 42, G), [
                [S, e.form[e.field.model]]
              ]),
              o("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              }, b(r.text), 9, H)
            ])
          ]))), 128))
        ])) : e.field.type === "radio-group" ? (d(), a("div", J, [
          (d(!0), a(s, null, m(e.field.options, (r, t) => (d(), a("div", {
            key: r.value,
            class: "flex items-center mb-2"
          }, [
            o("div", K, [
              n(o("input", {
                id: `${e.field.model}-${t}`,
                type: "radio",
                value: r.value,
                "onUpdate:modelValue": l[3] || (l[3] = (f) => e.form[e.field.model] = f),
                name: e.field.model,
                class: i(e.color_radio[e.field.color || "default"]),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: l[4] || (l[4] = (f) => e.field.callback ? e.triggerCallback(e.field.callback) : null)
              }, null, 42, Q), [
                [S, e.form[e.field.model]]
              ]),
              o("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              }, b(r.text), 9, W)
            ])
          ]))), 128))
        ])) : e.field.type === "checkbox" ? (d(), a("ul", X, [
          (d(!0), a(s, null, m(e.field.options, (r, t) => (d(), a("li", {
            key: r.value,
            class: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5"
          }, [
            o("div", Y, [
              n(o("input", {
                type: "checkbox",
                value: r.value,
                id: `${e.field.model}-${t}`,
                "onUpdate:modelValue": l[5] || (l[5] = (f) => e.form[e.field.model] = f),
                class: i([e.color_radio[e.field.color || "default"], "rounded-md"]),
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: l[6] || (l[6] = (f) => e.field.callback ? e.triggerCallback(e.field.callback) : null)
              }, null, 42, Z), [
                [v, e.form[e.field.model]]
              ]),
              o("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              }, b(r.text), 9, I)
            ])
          ]))), 128))
        ])) : e.field.type === "checkbox-group" ? (d(), a("div", p, [
          (d(!0), a(s, null, m(e.field.options, (r, t) => (d(), a("div", {
            key: r.value,
            class: "flex items-center mb-"
          }, [
            o("div", _, [
              n(o("input", {
                type: "checkbox",
                value: r.value,
                "onUpdate:modelValue": l[7] || (l[7] = (f) => e.form[e.field.model] = f),
                class: i([e.color_radio[e.field.color || "default"], "rounded-md m-1"]),
                id: `${e.field.model}-${t}`,
                required: e.field.required && t === 0,
                disabled: e.field.disabled ?? !1,
                onChange: l[8] || (l[8] = (f) => e.field.callback ? e.triggerCallback(e.field.callback) : null)
              }, null, 42, ee), [
                [v, e.form[e.field.model]]
              ]),
              o("label", {
                for: `${e.field.model}-${t}`,
                class: "w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              }, b(r.text), 9, re)
            ])
          ]))), 128))
        ])) : e.field.type === "toggle" ? (d(), a("label", le, [
          n(o("input", {
            type: "checkbox",
            class: "sr-only peer",
            "onUpdate:modelValue": l[9] || (l[9] = (r) => e.form[e.field.model] = r),
            value: e.field.value,
            disabled: e.field.disabled ?? !1
          }, null, 8, de), [
            [v, e.form[e.field.model]]
          ]),
          o("div", {
            class: i(e.color[e.field.color || "default"])
          }, null, 2),
          o("span", ae, b(e.field.placeholder), 1)
        ])) : O("", !0)
      ], 2)) : e.field.type === "fahadselect" ? (d(), q(A(D), {
        key: 1,
        ref: (r) => e.setSelectRef(r, e.field.model),
        modelValue: e.form[e.field.model],
        "onUpdate:modelValue": l[10] || (l[10] = (r) => e.form[e.field.model] = r),
        searchRoute: e.field.route,
        onTriggerChange: l[11] || (l[11] = (r) => e.triggerCallback(e.field.callback)),
        param: e.parameters[e.field.model],
        placeholder: e.field.placeholder,
        label: "label",
        multiple: e.field.multiple ?? !1,
        class: i({ "w-3/4": !e.position, "w-full": e.position }),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 8, ["modelValue", "searchRoute", "param", "placeholder", "multiple", "class", "required", "disabled"])) : e.field.type === "text" ? n((d(), a("input", {
        key: 2,
        type: "text",
        "onUpdate:modelValue": l[12] || (l[12] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        minlength: e.field.min,
        maxlength: e.field.max,
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, te)), [
        [y, e.form[e.field.model]]
      ]) : e.field.type === "date" ? n((d(), a("input", {
        key: 3,
        type: "date",
        "onUpdate:modelValue": l[13] || (l[13] = (r) => e.form[e.field.model] = r),
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onfocus: "this.showPicker()"
      }, null, 10, ie)), [
        [y, e.form[e.field.model]]
      ]) : e.field.type === "time" ? n((d(), a("input", {
        key: 4,
        type: "time",
        "onUpdate:modelValue": l[14] || (l[14] = (r) => e.form[e.field.model] = r),
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onfocus: "this.showPicker()"
      }, null, 10, oe)), [
        [y, e.form[e.field.model]]
      ]) : e.field.type === "number" ? n((d(), a("input", {
        key: 5,
        type: "number",
        "onUpdate:modelValue": l[15] || (l[15] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        max: e.field.max,
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, fe)), [
        [y, e.form[e.field.model]]
      ]) : e.field.type === "file" ? (d(), a("input", {
        key: 6,
        type: "file",
        multiple: e.field.multiple,
        accept: e.field.accept,
        onChange: l[16] || (l[16] = (r) => e.handleFileUpload(r, e.field.model)),
        placeholder: e.field.placeholder,
        class: i(["block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 42, ne)) : e.field.type === "textarea" ? n((d(), a("textarea", {
        key: 7,
        "onUpdate:modelValue": l[17] || (l[17] = (r) => e.form[e.field.model] = r),
        placeholder: e.field.placeholder,
        minlength: e.field.min,
        maxlength: e.field.max,
        rows: e.field.rows,
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1
      }, null, 10, ue)), [
        [y, e.form[e.field.model]]
      ]) : e.field.type === "select" ? n((d(), a("select", {
        key: 8,
        "onUpdate:modelValue": l[18] || (l[18] = (r) => e.form[e.field.model] = r),
        class: i(["bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700", { "w-3/4": !e.position, "w-full": e.position }]),
        required: e.field.required,
        disabled: e.field.disabled ?? !1,
        onChange: l[19] || (l[19] = () => e.onChange(e.field.callback)),
        ref: (r) => e.setSelectRef(r, e.field.model)
      }, [
        (d(!0), a(s, null, m(e.field.options, (r) => (d(), a("option", {
          key: r.value,
          value: r.value
        }, b(r.text), 9, be))), 128))
      ], 42, ge)), [
        [B, e.form[e.field.model]]
      ]) : (d(), a("p", se, "Unknown field type: " + b(e.field.type), 1))
    ], 2)) : (d(), a("p", E, "Unknown field type"));
  }
}, ce = {
  __name: "FormFormatter",
  props: {
    sampledata: { type: Array, required: !0 },
    form: { type: Object, required: !0 },
    parameters: { type: Object, default: () => ({}) },
    position: { type: Boolean, default: !1 }
  },
  emits: ["selectRefsReady", "triggerCallback"],
  setup(e, { emit: C }) {
    const l = e, r = {
      default: "w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      red: "w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      green: "w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      purple: "w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      teal: "w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      yellow: "w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed",
      orange: "w-5 h-5 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed"
    }, t = {
      default: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-disabled:cursor-not-allowed",
      red: "relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600 peer-disabled:cursor-not-allowed",
      green: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600 peer-disabled:cursor-not-allowed",
      purple: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-purple-600 peer-disabled:cursor-not-allowed",
      yellow: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400 peer-disabled:cursor-not-allowed",
      teal: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600 peer-disabled:cursor-not-allowed",
      orange: "relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500 dark:peer-checked:bg-orange-500 peer-disabled:cursor-not-allowed"
    }, f = C, $ = M({}), U = (u, k) => {
      u && ($[k] = u);
    };
    P(() => {
      z(() => f("selectRefsReady", $));
    });
    const F = (u) => {
      u && f("triggerCallback", u);
    }, V = (u) => {
      f("triggerCallback", u);
    }, R = (u, k) => {
      const c = u.target.files;
      if (!c.length) return;
      const h = Array.from(c).map((g) => new Promise((w) => {
        const x = new FileReader();
        x.onload = () => w({ name: g.name, size: g.size, type: g.type, content: x.result }), x.readAsDataURL(g);
      }));
      Promise.all(h).then((g) => {
        l.form[k] = g, l.form = { ...l.form }, console.log("Updated form with file data:", l.form);
      });
    };
    return (u, k) => (d(!0), a(s, null, m(e.sampledata, (c, h) => (d(), a(s, { key: h }, [
      Array.isArray(c) ? (d(), a("div", {
        key: 0,
        class: i(`grid grid-cols-${c.length} gap-4`)
      }, [
        (d(!0), a(s, null, m(c, (g, w) => (d(), q(j, {
          key: w,
          field: g,
          form: e.form,
          parameters: e.parameters,
          position: e.position,
          color: t,
          color_radio: r,
          setSelectRef: U,
          triggerCallback: V,
          onChange: F,
          handleFileUpload: R
        }, null, 8, ["field", "form", "parameters", "position"]))), 128))
      ], 2)) : (d(), q(j, {
        key: 1,
        field: c,
        form: e.form,
        parameters: e.parameters,
        position: e.position,
        color: t,
        color_radio: r,
        setSelectRef: U,
        triggerCallback: V,
        onChange: F,
        handleFileUpload: R
      }, null, 8, ["field", "form", "parameters", "position"]))
    ], 64))), 128));
  }
}, me = (e) => {
  e.component("FormFormatter", ce);
};
typeof window < "u" && window.Vue && window.Vue.use({ install: me });
export {
  ce as FormFormatter,
  ce as default,
  me as install
};
