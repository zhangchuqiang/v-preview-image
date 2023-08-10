(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".preview-wrap[data-v-63358bb9]{position:fixed;top:0;left:0;z-index:99999;background:rgba(0,0,0,.5);-webkit-user-select:none;user-select:none}.preview-wrap li[data-v-63358bb9]{list-style:none}.preview-wrap .preview[data-v-63358bb9]{position:relative;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.preview-wrap .preview-content[data-v-63358bb9]{position:relative;cursor:move;transition:.2s transform;max-height:100vh}.preview-wrap .preview-footer[data-v-63358bb9]{position:absolute;bottom:20px;left:50%;transform:translate(-50%)}.preview-wrap .preview-footer-tools[data-v-63358bb9]{display:flex;justify-content:center}.preview-wrap .preview-footer-tools li[data-v-63358bb9]{margin-right:10px;padding:10px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview-footer-tools li[data-v-63358bb9]:active{filter:brightness(.8)}.preview-wrap .preview-footer-tools li[data-v-63358bb9]:hover{filter:brightness(1.2)}.preview-wrap .preview-footer-tools li>img[data-v-63358bb9]{display:block;width:30px;height:30px}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]{margin-top:20px;max-width:700px;padding-bottom:10px;overflow-x:auto;white-space:nowrap}.preview-wrap .preview-footer-thumbs .thumb-item[data-v-63358bb9]{padding:10px;margin-right:10px;display:inline-block;background:rgba(102,102,102,.7);border-radius:5px;cursor:pointer}.preview-wrap .preview-footer-thumbs .thumb-item img[data-v-63358bb9]{width:60px;height:60px;object-fit:cover}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar{height:10px}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#d2d2d2;cursor:pointer}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar-track{border-radius:10px;background:#fff}.preview-wrap .preview .close-icon[data-v-63358bb9]{padding:10px;position:absolute;top:30px;right:30px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview .close-icon>img[data-v-63358bb9]{display:block;width:30px;height:30px}.preview-wrap .preview .close-icon[data-v-63358bb9]:active{filter:brightness(.8)}.preview-wrap .preview .close-icon[data-v-63358bb9]:hover{filter:brightness(1.2)}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as V, reactive as N, watch as G, toRefs as T, unref as r, openBlock as a, createElementBlock as m, createElementVNode as s, normalizeStyle as U, withModifiers as Q, createCommentVNode as B, Fragment as J, renderList as _, pushScopeId as j, popScopeId as W, createVNode as q, render as z } from "vue";
const $ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA80lEQVRoQ+3YwQrDMAwD0PrL1355RkoPpaTgYknG4F52yYKelZUw24o/Vjz/1oDsBruBbiA4gT5CwQGGv94NhEcY3EDawBhjn3nN7PxEPDLAFf53hT5QCAngEX4a6gCY4c/jiDiHb3uww1MBivA0gCo8BbAIv5vZwTqq0N+AOjy0gYzwMEBWeAggM3wYkB2eAYBdEbxvrfBbSPnOX6HCgLlpJgICyETAAFkIKCADAQeoERSAEkEDqBBUgAJBB7AREsACAbtyyAA3RM0/tryXs6/rpA18DedZ3wDPlJhrugHmdD17dwOeKTHXdAPM6Xr2Lt/AH0f9gDGCNz2CAAAAAElFTkSuQmCC", ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2YzYtNcRjHP98/wCBKokzEiNl5yUaZFCJkY2Eh8rJAFmQzFl7CKIqMUKORIgvlvbCQyYLIToOYjZewQAallB49+Z06jblz7+/ec7i3zlOn2zn3d36/5/N8fy/Pc0SDmxrcfwqA/61goUChQI0RKKZQTADNbDTQKqkn5r2h2v4zBcxsPbADmALskbQ7C4jcAcxsLNAFLAkO3wW2SHpa9wBmtgtIIv0T2AsclPQrC+e9j1wUCFF/AEwIjt4EDkny6GdqmQOY2TSgN3jZDxwFngMfgPuSXInMLA+AeUCpSD8DzgGnJH3OgiJzAHfKzLqBtcBl4A0wBpgJTApOu0Idks7XCpEXgO88vsuMADZLOhHApvoO5M+C412SNtYCkQtAcLYd2A+8BuZL6kscNbPVwNlw3yOprVqI3AACxCNgFtAtaV3aSTObATwOzzZJOlkNRN4APpXeBcdWSro4AGI48BBoAZZKuhELkStAUMEPMj/QeiW1DnTQzGYHiOuSltUdQIA4AvSXyn/M7B4wF1gsyQ+9ii13BSrxxMy2A4eBTklbK3knaVMvAMOAr0CfpMkNBxCm2S1gIdAk6VulEHWhQAA4DfhW2yLpRSMCJLtVW0zFVk8KnAHWNLICnsF6Jtt4a8DMxgFvSx12Q62HuphCZubZ6XHggKSdlS5gbxcNYGa+2D5J6owZqFRbM2vySg2YDiySdDum32oALAywQtKVmMEGaxsC4rnSBUmrYvurBmAfkMg8UtKX2EGT9ma2AEgiPkeSZ6ZRFg0QDp0kz/fbZkmvokb9U3ami/92SR2xfVS1BlLR81p3fLiveO6GOb8tpNj+ek1f6apSIAXhU8mnlNs14Kr/Svo4MJpm1gwsBzaEBetN/ipyYlWoCSBMJ194HlEvEd1+AC89swSehI9b7rwfUondAY5JcuiarGaAlBr+dcGvBGQwx7xYuSTJE7dMLDOAFMhEILlGAe9DXexf5b5n4nWqk8wBsnawXH8FQLkI5f1/oUDeES7Xf6FAuQjl/X/DK/AbtZPzMdM3hhkAAAAASUVORK5CYII=", Ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA2klEQVRoQ+2SwQnCUBAF36tA67EAQdCjlViHlXhUECzAerSCL1awKxMIwZfrz06yM99a+OOF/7+ywNwFUyAFoIFcISgQj6cAVggBKQAF4vEUwAohIAWgQDyeAlghBKQAFIjH/6fAGOOIdf0AsH3pvN4qMMa4Stp3gBO+c7N9qHjdBV6SVhVs4vO37XXF7C6wkXSStJV0r6DwfCfpIels+1mxWgtUkDnPs8Cc9r/fToEUgAZyhaBAPJ4CWCEEpAAUiMdTACuEgBSAAvF4CmCFEJACUCAeTwGsEAI+mZoVMWVj79AAAAAASUVORK5CYII=", te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0UlEQVRoQ+2ZMUsdQRSFv1OlMZAfkE5bIRgrm2ijYG/aWCRNUEggffQXJBBtBEHbhNSBNFpZxRAQLC38BSnSWB0Z2CeTl6fsvLfzdOJMt+ydM/fcc/fM7qwofKjw/KkEblvBqkBVYMQKDGwh29PAM+AJMDniGqNOPwV+AceSfvaD/UPA9iLwFZgYdeWO518A7yRtxbh/EbC9BnyKAs6A844TSYV7DExFk5Ykfe9dXxGwPQMcAQ+am7OSjlNXyxFvewX43GD/AeYknYTrmMArYKcJei7pS45khsW0/RT40cxf77VSTGAbeA18k7Q87EI559k+AOaBXUkv+xXo3dyUtJEzkWGxbYe83gOHkhbuNwHbq8BDSbFrJRc3BaczBWyHPgwtF8aCpMPkzIFUnEqgV+XUyl2nTirOWBWw/Qh40SS/L+l3P5G7TuAN8KFJ+q2kj5VAV/tAG+mbFgpWG8ZecS3UxlbbFCLGGetDXDyB6kIDJBxrC9ku3kbDRlZdqLrQIDtM9e879zIXEkr5ELlpT0jB6cyF2mxSOWL+ewLFH6sUf7BV9tFi4yzlHu5GH+zlHq9HJMr9wZHDv3Ni1r+UOavbBrsq0KZKOWOqAjmr2wb7Ev2uGk/D5C02AAAAAElFTkSuQmCC", oe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABIklEQVRoQ+1Xu60CMRCcKQBEQgEkRGQUAAkpvVABUAZ1kJEAOcEr4cUveQHki5AuAImT16wtdNIQnneHnY99PqLjP3Z8fojAtx2UA3IgqIAiFBQw3F7VATM7AhiSnIQnbQGoRsDM1gA2zf9uSG5rkBCBNlXlgDNvipAi5IxKW5kipAgpQkEFOhEhM+sBmGZynT3fhQCcM/svJG+pHtcpZGYHAIsUWOH1PcllCtNL4O9xLU6BFV7/JTlKYXoJjAHsUmBv1ufNs9MHvSuSP6k+F4EUyLt13UadqsmBTrwHnG6+lGkPOFXTHtAecEZFX2S5QukUcipW8xQaAPhv5uiTvDpnyiqrRiBrikCxCATEK9IqB4rIGACRAwHxirTKgSIyBkDu/L2YMUQkwrYAAAAASUVORK5CYII=", ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADI0lEQVRoQ+2YW4hOURTHf/+UUqSQIpfIKDN5mygPMilDuUQoUSL3mLwol4mZh5lH5ZpGU6I8KA8ooWTKi2I8CJGI8EDxoDwvrWkfHZrp+/a5zDdT36qv0z7f3uv8/+u/1957bTHKTaMcP3UCtVawrkBdgZwRqE+hdADNbBnwQtLPnIGtenhhCphZB3AKeAV0S7peNYocHYsk0AicB1oCnmuByJsc+CoOLYyAf8nMxgBHgZPAWOB7IHGmIpKMHQolkGAwM1fhCLAqvLsXiDzOiHPIYYUTMDOP/ApgLjAJOAxMDAhaJPUVSaIwAmbmYPcB24AFQ4AcmQTMbCtwDGgKwN8Dz4BvwExgPXBJ0v4io+++citgZj3A7gDsgq9EkgZWHjM7APi7j8BSSZ9HFAEzewT45uW2XdLVVCLPAx4Cs4A9ki4XDT6XAmbm0+FiANUsqf+/XbkX2AnclLSxDPCZCZjZauBOADVHkk+Rv2Zmm4AbwO8wdZ6PNAK3gTXAXkmeA/9YamqdkNRdFvhMCpiZb053gX5JzYOBC+eiRkmbywSflcBZ4BDQJulc2QAr+Y9eRs3sHeArzOThPDYPRSSKgJlNAH4B9yWtrBSd4fg/lsB84C3QK2nXcACs9I1YAr5p+ebVKckLmJpbLIFEgSuSdtQcfexZKJUDfZKSyqumPKIUcKRm9jKcOmdI+lpT9LEKBAJdwHHgoCQ/adbUsijQCniJ6LcPSyT5sprbQk3RELs4RBMIKviVyRagQ1JnXvRm1gYMFP6SojBFdU6Amtli4Elot0p6kJWEmU0NlZu76JLUHuMrE4GggpeQyUmzSdLrmA8HH7NDtebNp5IWxfrITCAASG7jvOlT6XS1OWFmSS752C+SvHaOtlwEAomkePGmJ7aXjrf+L3JC3ynAWmBdePrrdkm+smWy3AQCMAflibg8hcLvf7xS+wQsDCfYBmBc6OMlqCuW6w61EAKp5PYD3obUjdxgUXXgPYNVclkkKJRAish43yOA6cA04AfwwX+S/FmYlUKgMHRVOKoTqCJIpXapK1BqeKtwXlegiiCV2mXUK/AHaODuMa3oHxAAAAAASUVORK5CYII=", se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABS0lEQVRoQ+3YIW8CQRAF4Le/sgKBIKlAICoQCAoCgUBUVDSpqKjgX77myAiyocklO2/IJHMGcyzvm7njZq8h+dGS50cBnt3B6kB1YLACdQkNFnD469WB4RIOLuDWAZKHKUtr7fYZdbgALPy7hT5GIrwARwD7u6qHIVwAU3CSJwC7aIQbwBBnANtIhCvAEBcAb1EId4AhPgBs7hCH1tp0n7gfEoAhPgGs1QgZwBBfAF6VCCnAEN8AViqEHGCIHwBLBSIEYIhfAAtvRBjAEFcAL56IZwOGR44wAMn+EhoOf5t+3Z8sDxYk2d/ELuFDACT7v1G38HIAyf5B5hpeCiDZjxLu4WUAkv0wJwkvAZDMO06TzLuhSb2lJJl7U5/+tYoNanlfbEWMI//9RsgspAQWQFndOWtXB+ZUSXlOdUBZ3TlrVwfmVEl5TvoO/AFnAoAxEk6FgQAAAABJRU5ErkJggg==", ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAABzUlEQVRoQ+3YXSsFURQG4Pf9ay79AET5KqIQUcQFR/kqQhRRRFHyH72amlPr4syxZ/aaOXOOPdcza9az1p6ZNZsYgYMjYEBCtKWLqROpE44VSMvJsZhRof5nJyStABgjORFVvoKLJXUAiORRaPxSnZC0B+AsD/7tDZF0AmA/j98JhZRFZNU5NBVyg0g6B7BrYh+TtPcqbEwpRBZFkjtE0iWAbZPlKcmDWpZTN6gnRNI1gE2T8AXJbNkGH6U74QmRdAdgzWR7RXInOPv8xMqI2KUl6QFA9qbrHjckt8oCsvOjEFUhkp4ALJmE70muVwG4IMpCJL0AWDAJP5JcrQpwQ4RCJL0BmDUJP5NcjgG4Iv6CSPoAMG0SfiW5GAtwRxRBAPwAmDQJv5Oc8wDUgiiA2Hw/Sc54AWpD9IF8kZzyBCREv2r2GEuGazn1mquG6sHuNxgOxSs2ZLJt9ccuBNB9KFo5dpQBGEh7BsAqAAMZ/CgeAzCQwf0UeQAMpPnfU0+AgTS3UVAHwECa2bKRtAHgNr+x256TgdS/eZZPp/MAxr13/wyk3m1M7xHaK170bodXIjFxEiKmep7Xpk54VjMmVupETPU8r02d8KxmTKxfONz8MSXjQ6gAAAAASUVORK5CYII=", g = (o) => (j("data-v-63358bb9"), o = o(), W(), o), le = ["src", "onClick"], re = ["onClick"], ge = { class: "preview-footer-tools" }, ce = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: $ }, null, -1)), ae = [
  ce
], me = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: ee }, null, -1)), de = [
  me
], ue = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: Ae }, null, -1)), Ce = [
  ue
], fe = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: te }, null, -1)), we = [
  fe
], Be = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: oe }, null, -1)), pe = [
  Be
], ve = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: ne }, null, -1)), ke = [
  ve
], Se = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: se }, null, -1)), Ee = [
  Se
], Ie = {
  key: 0,
  class: "preview-footer-thumbs"
}, he = ["id", "onClick"], Oe = ["src"], Ue = /* @__PURE__ */ g(() => /* @__PURE__ */ s("img", { src: ie }, null, -1)), Qe = [
  Ue
], De = /* @__PURE__ */ V({
  __name: "index",
  setup(o, { expose: l }) {
    const e = N({
      defaultOptions: {
        enabledMaskClose: !0,
        // 开启点击遮罩关闭
        enabledEscClose: !0,
        // 开启esc按键关闭
        enabledMouseZoom: !0,
        // 开启鼠标滚轮缩放
        activeColor: "rgba(239, 84, 78, 0.7)"
        // 预览图中选中图片的背景颜色
      },
      // 默认配置
      show: !1,
      // 是否显示预览
      currentImg: "",
      // 当前预览图片的url
      currentIndex: 0,
      //当前预览图片的索引
      imgList: [],
      // 需要预览的图片数组
      imgKey: "",
      // 图片所在的数据的key
      imgTop: 0,
      // 图片定位置top
      imgLeft: 0,
      // 图片定位置left
      startPageX: 0,
      // 按下鼠标时当前鼠标所在位置x
      startPageY: 0,
      // 按下鼠标时当前鼠标所在位置y
      imgScale: 1,
      // 图片缩放
      imgRotate: 0
      // 图片旋转
    }), c = (A) => {
      A === "left" ? e.imgRotate -= 90 : e.imgRotate += 90;
    }, u = (A) => {
      if (e.imgList.length < 2)
        return;
      let t = 0;
      A === "last" && (e.currentIndex === 0 ? t = e.imgList.length - 1 : t = e.currentIndex - 1), A === "next" && (e.currentIndex === e.imgList.length - 1 ? t = 0 : t = e.currentIndex + 1);
      const n = e.imgList[t];
      e.currentImg = e.imgKey ? n[e.imgKey] : n, e.currentIndex = t, v(t);
    }, v = (A) => {
      A = A < 4 ? 0 : A - 4;
      const t = document.querySelector(".preview-footer-thumbs"), n = document.querySelector("#thumb-item-" + A);
      t.scrollLeft = (n == null ? void 0 : n.offsetLeft) || 0;
    }, M = (A, t) => {
      const n = e.imgKey ? A[e.imgKey] : A;
      e.currentImg = n, e.currentIndex = t, v(t);
    }, L = () => {
      e.defaultOptions.enabledMaskClose && (e.show = !1);
    }, R = (A) => {
      e.defaultOptions.enabledMouseZoom && (A.wheelDelta > 0 || A.detail > 0 ? C("add") : (A.wheelDelta < 0 || A.detail < 0) && C("reduce"));
    }, C = (A) => {
      A === "add" && e.imgScale < 4 ? e.imgScale += 0.1 : A === "reduce" && e.imgScale > 0.5 && (e.imgScale -= 0.1);
    }, y = (A) => {
      const { pageX: t, pageY: n } = A;
      e.startPageX = t - e.imgLeft, e.startPageY = n - e.imgTop, document.addEventListener("mousemove", E, !1), document.addEventListener("mouseup", S, !1), A.preventDefault();
    }, k = (A) => {
      A.keyCode === 27 && e.defaultOptions.enabledEscClose && (e.show = !1);
    }, S = () => {
      document.removeEventListener("mousemove", E, !1);
    }, E = (A) => {
      const { pageX: t, pageY: n } = A;
      e.imgTop = n - e.startPageY, e.imgLeft = t - e.startPageX, d(A);
    }, d = (A) => {
      A.preventDefault();
    }, H = () => {
      e.imgList = [], e.currentImg = "", e.currentIndex = 0, e.imgKey = "", e.imgTop = 0, e.imgLeft = 0, e.startPageX = 0, e.startPageY = 0, e.imgScale = 1, e.imgRotate = 0;
    };
    G(
      () => e.show,
      (A) => {
        A ? (document.body.style.overflow = "hidden", document.addEventListener("mousemove", d, !1), document.addEventListener("keydown", k, !1)) : (document.body.style.overflow = "", document.removeEventListener("mousemove", d, !1), document.removeEventListener("mouseup", S, !1), document.removeEventListener("keydown", k, !1), H());
      },
      { immediate: !0 }
    );
    const { defaultOptions: P, show: I, currentImg: Z, currentIndex: Y, imgList: f, imgKey: h, imgTop: F, imgLeft: x, imgScale: O, imgRotate: X } = T(e);
    return l({
      state: e
    }), (A, t) => r(I) ? (a(), m("div", {
      key: 0,
      class: "preview-wrap",
      onMousewheel: R
    }, [
      s("div", {
        class: "preview",
        onClick: L
      }, [
        s("img", {
          class: "preview-content",
          src: r(Z),
          style: U({ top: r(F) + "px", left: r(x) + "px", transform: `scale(${r(O)}) rotateZ(${r(X)}deg)` }),
          onClick: Q(d, ["stop"]),
          onMousedown: y
        }, null, 44, le),
        s("div", {
          class: "preview-footer",
          onClick: Q(d, ["stop"])
        }, [
          s("ul", ge, [
            r(f).length ? (a(), m("li", {
              key: 0,
              onClick: t[0] || (t[0] = (n) => u("last"))
            }, ae)) : B("", !0),
            s("li", {
              onClick: t[1] || (t[1] = (n) => c("left"))
            }, de),
            s("li", {
              onClick: t[2] || (t[2] = (n) => C("reduce"))
            }, Ce),
            s("li", {
              onClick: t[3] || (t[3] = (n) => O.value = 1)
            }, we),
            s("li", {
              onClick: t[4] || (t[4] = (n) => C("add"))
            }, pe),
            s("li", {
              onClick: t[5] || (t[5] = (n) => c("right"))
            }, ke),
            r(f).length ? (a(), m("li", {
              key: 1,
              onClick: t[6] || (t[6] = (n) => u("next"))
            }, Ee)) : B("", !0)
          ]),
          r(f).length ? (a(), m("div", Ie, [
            (a(!0), m(J, null, _(r(f), (n, w) => (a(), m("div", {
              id: "thumb-item-" + w,
              key: w,
              class: "thumb-item",
              style: U({ background: r(Y) === w ? r(P).activeColor : "" }),
              onClick: (Le) => M(n, w)
            }, [
              s("img", {
                src: r(h) ? n[r(h)] : n
              }, null, 8, Oe)
            ], 12, he))), 128))
          ])) : B("", !0)
        ], 8, re),
        s("span", {
          class: "close-icon",
          onClick: t[7] || (t[7] = (n) => I.value = !1)
        }, Qe)
      ])
    ], 32)) : B("", !0);
  }
});
const be = (o, l) => {
  const e = o.__vccOpts || o;
  for (const [c, u] of l)
    e[c] = u;
  return e;
}, Ke = /* @__PURE__ */ be(De, [["__scopeId", "data-v-63358bb9"]]);
let i = null, p = {};
function ye(o, l = {}) {
  K(l) && (p = l), D(), o.config.globalProperties.$preview = b;
}
function D() {
  var c;
  const o = q(Ke), l = document.createElement("div");
  z(o, l), document.body.appendChild(l), i = (c = o.component.exposed) == null ? void 0 : c.state, i.defaultOptions = { ...i.defaultOptions, ...p };
}
function b(o = "", l = [], e = "") {
  if (i === null && D(), i !== null) {
    if (o === "" || o === null || o === void 0)
      throw "Vue3PreviewImage：请传入参数";
    if (typeof o == "number") {
      if (!l || !l.length)
        throw "Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组";
      i.currentImg = e ? l[o][e] : l[o], i.currentIndex = o;
    } else
      i.currentImg = o, l.length || (i.imgList = [o]);
    i.imgList = l, i.imgKey = e, i.show = !0;
  }
}
b.close = () => {
  Me();
};
function Me() {
  i !== null && i.show && (i.show = !1);
}
function He(o) {
  K(o) && (i !== null ? i.defaultOptions = { ...i.defaultOptions, ...o } : p = o);
}
function K(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
export {
  Me as closePreview,
  ye as default,
  b as preview,
  He as setPreviewDefaultOptions
};
