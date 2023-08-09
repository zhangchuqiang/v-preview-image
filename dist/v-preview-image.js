(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".preview-wrap[data-v-63358bb9]{position:fixed;top:0;left:0;z-index:99999;background:rgba(0,0,0,.5);-webkit-user-select:none;user-select:none}.preview-wrap li[data-v-63358bb9]{list-style:none}.preview-wrap .preview[data-v-63358bb9]{position:relative;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.preview-wrap .preview-content[data-v-63358bb9]{position:relative;cursor:move;transition:.2s transform;max-height:100vh}.preview-wrap .preview-footer[data-v-63358bb9]{position:absolute;bottom:20px;left:50%;transform:translate(-50%)}.preview-wrap .preview-footer-tools[data-v-63358bb9]{display:flex;justify-content:center}.preview-wrap .preview-footer-tools li[data-v-63358bb9]{margin-right:10px;padding:10px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview-footer-tools li[data-v-63358bb9]:active{filter:brightness(.8)}.preview-wrap .preview-footer-tools li[data-v-63358bb9]:hover{filter:brightness(1.2)}.preview-wrap .preview-footer-tools li>img[data-v-63358bb9]{display:block;width:30px;height:30px}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]{margin-top:20px;max-width:700px;padding-bottom:10px;overflow-x:auto;white-space:nowrap}.preview-wrap .preview-footer-thumbs .thumb-item[data-v-63358bb9]{padding:10px;margin-right:10px;display:inline-block;background:rgba(102,102,102,.7);border-radius:5px;cursor:pointer}.preview-wrap .preview-footer-thumbs .thumb-item img[data-v-63358bb9]{width:60px;height:60px;object-fit:cover}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar{height:10px}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#d2d2d2;cursor:pointer}.preview-wrap .preview-footer-thumbs[data-v-63358bb9]::-webkit-scrollbar-track{border-radius:10px;background:#fff}.preview-wrap .preview .close-icon[data-v-63358bb9]{padding:10px;position:absolute;top:30px;right:30px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview .close-icon>img[data-v-63358bb9]{display:block;width:30px;height:30px}.preview-wrap .preview .close-icon[data-v-63358bb9]:active{filter:brightness(.8)}.preview-wrap .preview .close-icon[data-v-63358bb9]:hover{filter:brightness(1.2)}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as V, reactive as x, watch as N, toRefs as G, unref as i, openBlock as m, createElementBlock as a, createElementVNode as t, normalizeStyle as O, withModifiers as U, createCommentVNode as w, Fragment as T, renderList as J, pushScopeId as W, popScopeId as q, createVNode as z, render as $, createApp as ee } from "vue";
const te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA80lEQVRoQ+3YwQrDMAwD0PrL1355RkoPpaTgYknG4F52yYKelZUw24o/Vjz/1oDsBruBbiA4gT5CwQGGv94NhEcY3EDawBhjn3nN7PxEPDLAFf53hT5QCAngEX4a6gCY4c/jiDiHb3uww1MBivA0gCo8BbAIv5vZwTqq0N+AOjy0gYzwMEBWeAggM3wYkB2eAYBdEbxvrfBbSPnOX6HCgLlpJgICyETAAFkIKCADAQeoERSAEkEDqBBUgAJBB7AREsACAbtyyAA3RM0/tryXs6/rpA18DedZ3wDPlJhrugHmdD17dwOeKTHXdAPM6Xr2Lt/AH0f9gDGCNz2CAAAAAElFTkSuQmCC", Ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2YzYtNcRjHP98/wCBKokzEiNl5yUaZFCJkY2Eh8rJAFmQzFl7CKIqMUKORIgvlvbCQyYLIToOYjZewQAallB49+Z06jblz7+/ec7i3zlOn2zn3d36/5/N8fy/Pc0SDmxrcfwqA/61goUChQI0RKKZQTADNbDTQKqkn5r2h2v4zBcxsPbADmALskbQ7C4jcAcxsLNAFLAkO3wW2SHpa9wBmtgtIIv0T2AsclPQrC+e9j1wUCFF/AEwIjt4EDkny6GdqmQOY2TSgN3jZDxwFngMfgPuSXInMLA+AeUCpSD8DzgGnJH3OgiJzAHfKzLqBtcBl4A0wBpgJTApOu0Idks7XCpEXgO88vsuMADZLOhHApvoO5M+C412SNtYCkQtAcLYd2A+8BuZL6kscNbPVwNlw3yOprVqI3AACxCNgFtAtaV3aSTObATwOzzZJOlkNRN4APpXeBcdWSro4AGI48BBoAZZKuhELkStAUMEPMj/QeiW1DnTQzGYHiOuSltUdQIA4AvSXyn/M7B4wF1gsyQ+9ii13BSrxxMy2A4eBTklbK3knaVMvAMOAr0CfpMkNBxCm2S1gIdAk6VulEHWhQAA4DfhW2yLpRSMCJLtVW0zFVk8KnAHWNLICnsF6Jtt4a8DMxgFvSx12Q62HuphCZubZ6XHggKSdlS5gbxcNYGa+2D5J6owZqFRbM2vySg2YDiySdDum32oALAywQtKVmMEGaxsC4rnSBUmrYvurBmAfkMg8UtKX2EGT9ma2AEgiPkeSZ6ZRFg0QDp0kz/fbZkmvokb9U3ami/92SR2xfVS1BlLR81p3fLiveO6GOb8tpNj+ek1f6apSIAXhU8mnlNs14Kr/Svo4MJpm1gwsBzaEBetN/ipyYlWoCSBMJ194HlEvEd1+AC89swSehI9b7rwfUondAY5JcuiarGaAlBr+dcGvBGQwx7xYuSTJE7dMLDOAFMhEILlGAe9DXexf5b5n4nWqk8wBsnawXH8FQLkI5f1/oUDeES7Xf6FAuQjl/X/DK/AbtZPzMdM3hhkAAAAASUVORK5CYII=", ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA2klEQVRoQ+2SwQnCUBAF36tA67EAQdCjlViHlXhUECzAerSCL1awKxMIwZfrz06yM99a+OOF/7+ywNwFUyAFoIFcISgQj6cAVggBKQAF4vEUwAohIAWgQDyeAlghBKQAFIjH/6fAGOOIdf0AsH3pvN4qMMa4Stp3gBO+c7N9qHjdBV6SVhVs4vO37XXF7C6wkXSStJV0r6DwfCfpIels+1mxWgtUkDnPs8Cc9r/fToEUgAZyhaBAPJ4CWCEEpAAUiMdTACuEgBSAAvF4CmCFEJACUCAeTwGsEAI+mZoVMWVj79AAAAAASUVORK5CYII=", se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0UlEQVRoQ+2ZMUsdQRSFv1OlMZAfkE5bIRgrm2ijYG/aWCRNUEggffQXJBBtBEHbhNSBNFpZxRAQLC38BSnSWB0Z2CeTl6fsvLfzdOJMt+ydM/fcc/fM7qwofKjw/KkEblvBqkBVYMQKDGwh29PAM+AJMDniGqNOPwV+AceSfvaD/UPA9iLwFZgYdeWO518A7yRtxbh/EbC9BnyKAs6A844TSYV7DExFk5Ykfe9dXxGwPQMcAQ+am7OSjlNXyxFvewX43GD/AeYknYTrmMArYKcJei7pS45khsW0/RT40cxf77VSTGAbeA18k7Q87EI559k+AOaBXUkv+xXo3dyUtJEzkWGxbYe83gOHkhbuNwHbq8BDSbFrJRc3BaczBWyHPgwtF8aCpMPkzIFUnEqgV+XUyl2nTirOWBWw/Qh40SS/L+l3P5G7TuAN8KFJ+q2kj5VAV/tAG+mbFgpWG8ZecS3UxlbbFCLGGetDXDyB6kIDJBxrC9ku3kbDRlZdqLrQIDtM9e879zIXEkr5ELlpT0jB6cyF2mxSOWL+ewLFH6sUf7BV9tFi4yzlHu5GH+zlHq9HJMr9wZHDv3Ni1r+UOavbBrsq0KZKOWOqAjmr2wb7Ev2uGk/D5C02AAAAAElFTkSuQmCC", oe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABIklEQVRoQ+1Xu60CMRCcKQBEQgEkRGQUAAkpvVABUAZ1kJEAOcEr4cUveQHki5AuAImT16wtdNIQnneHnY99PqLjP3Z8fojAtx2UA3IgqIAiFBQw3F7VATM7AhiSnIQnbQGoRsDM1gA2zf9uSG5rkBCBNlXlgDNvipAi5IxKW5kipAgpQkEFOhEhM+sBmGZynT3fhQCcM/svJG+pHtcpZGYHAIsUWOH1PcllCtNL4O9xLU6BFV7/JTlKYXoJjAHsUmBv1ufNs9MHvSuSP6k+F4EUyLt13UadqsmBTrwHnG6+lGkPOFXTHtAecEZFX2S5QukUcipW8xQaAPhv5uiTvDpnyiqrRiBrikCxCATEK9IqB4rIGACRAwHxirTKgSIyBkDu/L2YMUQkwrYAAAAASUVORK5CYII=", le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADI0lEQVRoQ+2YW4hOURTHf/+UUqSQIpfIKDN5mygPMilDuUQoUSL3mLwol4mZh5lH5ZpGU6I8KA8ooWTKi2I8CJGI8EDxoDwvrWkfHZrp+/a5zDdT36qv0z7f3uv8/+u/1957bTHKTaMcP3UCtVawrkBdgZwRqE+hdADNbBnwQtLPnIGtenhhCphZB3AKeAV0S7peNYocHYsk0AicB1oCnmuByJsc+CoOLYyAf8nMxgBHgZPAWOB7IHGmIpKMHQolkGAwM1fhCLAqvLsXiDzOiHPIYYUTMDOP/ApgLjAJOAxMDAhaJPUVSaIwAmbmYPcB24AFQ4AcmQTMbCtwDGgKwN8Dz4BvwExgPXBJ0v4io+++citgZj3A7gDsgq9EkgZWHjM7APi7j8BSSZ9HFAEzewT45uW2XdLVVCLPAx4Cs4A9ki4XDT6XAmbm0+FiANUsqf+/XbkX2AnclLSxDPCZCZjZauBOADVHkk+Rv2Zmm4AbwO8wdZ6PNAK3gTXAXkmeA/9YamqdkNRdFvhMCpiZb053gX5JzYOBC+eiRkmbywSflcBZ4BDQJulc2QAr+Y9eRs3sHeArzOThPDYPRSSKgJlNAH4B9yWtrBSd4fg/lsB84C3QK2nXcACs9I1YAr5p+ebVKckLmJpbLIFEgSuSdtQcfexZKJUDfZKSyqumPKIUcKRm9jKcOmdI+lpT9LEKBAJdwHHgoCQ/adbUsijQCniJ6LcPSyT5sprbQk3RELs4RBMIKviVyRagQ1JnXvRm1gYMFP6SojBFdU6Amtli4Elot0p6kJWEmU0NlZu76JLUHuMrE4GggpeQyUmzSdLrmA8HH7NDtebNp5IWxfrITCAASG7jvOlT6XS1OWFmSS752C+SvHaOtlwEAomkePGmJ7aXjrf+L3JC3ynAWmBdePrrdkm+smWy3AQCMAflibg8hcLvf7xS+wQsDCfYBmBc6OMlqCuW6w61EAKp5PYD3obUjdxgUXXgPYNVclkkKJRAish43yOA6cA04AfwwX+S/FmYlUKgMHRVOKoTqCJIpXapK1BqeKtwXlegiiCV2mXUK/AHaODuMa3oHxAAAAAASUVORK5CYII=", ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABS0lEQVRoQ+3YIW8CQRAF4Le/sgKBIKlAICoQCAoCgUBUVDSpqKjgX77myAiyocklO2/IJHMGcyzvm7njZq8h+dGS50cBnt3B6kB1YLACdQkNFnD469WB4RIOLuDWAZKHKUtr7fYZdbgALPy7hT5GIrwARwD7u6qHIVwAU3CSJwC7aIQbwBBnANtIhCvAEBcAb1EId4AhPgBs7hCH1tp0n7gfEoAhPgGs1QgZwBBfAF6VCCnAEN8AViqEHGCIHwBLBSIEYIhfAAtvRBjAEFcAL56IZwOGR44wAMn+EhoOf5t+3Z8sDxYk2d/ELuFDACT7v1G38HIAyf5B5hpeCiDZjxLu4WUAkv0wJwkvAZDMO06TzLuhSb2lJJl7U5/+tYoNanlfbEWMI//9RsgspAQWQFndOWtXB+ZUSXlOdUBZ3TlrVwfmVEl5TvoO/AFnAoAxEk6FgQAAAABJRU5ErkJggg==", ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAABzUlEQVRoQ+3YXSsFURQG4Pf9ay79AET5KqIQUcQFR/kqQhRRRFHyH72amlPr4syxZ/aaOXOOPdcza9az1p6ZNZsYgYMjYEBCtKWLqROpE44VSMvJsZhRof5nJyStABgjORFVvoKLJXUAiORRaPxSnZC0B+AsD/7tDZF0AmA/j98JhZRFZNU5NBVyg0g6B7BrYh+TtPcqbEwpRBZFkjtE0iWAbZPlKcmDWpZTN6gnRNI1gE2T8AXJbNkGH6U74QmRdAdgzWR7RXInOPv8xMqI2KUl6QFA9qbrHjckt8oCsvOjEFUhkp4ALJmE70muVwG4IMpCJL0AWDAJP5JcrQpwQ4RCJL0BmDUJP5NcjgG4Iv6CSPoAMG0SfiW5GAtwRxRBAPwAmDQJv5Oc8wDUgiiA2Hw/Sc54AWpD9IF8kZzyBCREv2r2GEuGazn1mquG6sHuNxgOxSs2ZLJt9ccuBNB9KFo5dpQBGEh7BsAqAAMZ/CgeAzCQwf0UeQAMpPnfU0+AgTS3UVAHwECa2bKRtAHgNr+x256TgdS/eZZPp/MAxr13/wyk3m1M7xHaK170bodXIjFxEiKmep7Xpk54VjMmVupETPU8r02d8KxmTKxfONz8MSXjQ6gAAAAASUVORK5CYII=", d = (A) => (W("data-v-63358bb9"), A = A(), q(), A), ce = ["src", "onClick"], re = ["onClick"], ge = { class: "preview-footer-tools" }, de = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: te }, null, -1)), me = [
  de
], ae = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: Ae }, null, -1)), fe = [
  ae
], pe = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: ne }, null, -1)), Ce = [
  pe
], be = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: se }, null, -1)), Be = [
  be
], we = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: oe }, null, -1)), Ee = [
  we
], ve = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: le }, null, -1)), he = [
  ve
], ke = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: ue }, null, -1)), Se = [
  ke
], Ie = {
  key: 0,
  class: "preview-footer-thumbs"
}, Fe = ["id", "onClick"], De = ["src"], Oe = /* @__PURE__ */ d(() => /* @__PURE__ */ t("img", { src: ie }, null, -1)), Ue = [
  Oe
], Qe = /* @__PURE__ */ V({
  __name: "index",
  setup(A, { expose: o }) {
    const e = x({
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
    }), c = (n) => {
      n === "left" ? e.imgRotate -= 90 : e.imgRotate += 90;
    }, r = (n) => {
      if (e.imgList.length < 2)
        return;
      let s = 0;
      n === "last" && (e.currentIndex === 0 ? s = e.imgList.length - 1 : s = e.currentIndex - 1), n === "next" && (e.currentIndex === e.imgList.length - 1 ? s = 0 : s = e.currentIndex + 1);
      const l = e.imgList[s];
      e.currentImg = e.imgKey ? l[e.imgKey] : l, e.currentIndex = s, f(s);
    }, f = (n) => {
      n = n < 4 ? 0 : n - 4;
      const s = document.querySelector(".preview-footer-thumbs"), l = document.querySelector("#thumb-item-" + n);
      s.scrollLeft = (l == null ? void 0 : l.offsetLeft) || 0;
    }, g = (n, s) => {
      const l = e.imgKey ? n[e.imgKey] : n;
      e.currentImg = l, e.currentIndex = s, f(s);
    }, L = () => {
      e.defaultOptions.enabledMaskClose && (e.show = !1);
    }, R = (n) => {
      e.defaultOptions.enabledMouseZoom && (n.wheelDelta > 0 || n.detail > 0 ? C("add") : (n.wheelDelta < 0 || n.detail < 0) && C("reduce"));
    }, C = (n) => {
      n === "add" && e.imgScale < 4 ? e.imgScale += 0.1 : n === "reduce" && e.imgScale > 0.5 && (e.imgScale -= 0.1);
    }, y = (n) => {
      const { pageX: s, pageY: l } = n;
      e.startPageX = s - e.imgLeft, e.startPageY = l - e.imgTop, document.addEventListener("mousemove", S, !1), document.addEventListener("mouseup", k, !1), n.preventDefault();
    }, h = (n) => {
      n.keyCode === 27 && e.defaultOptions.enabledEscClose && (e.show = !1);
    }, k = () => {
      document.removeEventListener("mousemove", S, !1);
    }, S = (n) => {
      const { pageX: s, pageY: l } = n;
      e.imgTop = l - e.startPageY, e.imgLeft = s - e.startPageX, p(n);
    }, p = (n) => {
      n.preventDefault();
    }, H = () => {
      e.imgList = [], e.currentImg = "", e.currentIndex = 0, e.imgKey = "", e.imgTop = 0, e.imgLeft = 0, e.startPageX = 0, e.startPageY = 0, e.imgScale = 1, e.imgRotate = 0;
    };
    N(
      () => e.show,
      (n) => {
        n ? (document.body.style.overflow = "hidden", document.addEventListener("mousemove", p, !1), document.addEventListener("keydown", h, !1)) : (document.body.style.overflow = "", document.removeEventListener("mousemove", p, !1), document.removeEventListener("mouseup", k, !1), document.removeEventListener("keydown", h, !1), H());
      },
      { immediate: !0 }
    );
    const { defaultOptions: P, show: I, currentImg: _, currentIndex: j, imgList: b, imgKey: F, imgTop: Z, imgLeft: Y, imgScale: D, imgRotate: X } = G(e);
    return o({
      state: e
    }), (n, s) => i(I) ? (m(), a("div", {
      key: 0,
      class: "preview-wrap",
      onMousewheel: R
    }, [
      t("div", {
        class: "preview",
        onClick: L
      }, [
        t("img", {
          class: "preview-content",
          src: i(_),
          style: O({ top: i(Z) + "px", left: i(Y) + "px", transform: `scale(${i(D)}) rotateZ(${i(X)}deg)` }),
          onClick: U(p, ["stop"]),
          onMousedown: y
        }, null, 44, ce),
        t("div", {
          class: "preview-footer",
          onClick: U(p, ["stop"])
        }, [
          t("ul", ge, [
            i(b).length ? (m(), a("li", {
              key: 0,
              onClick: s[0] || (s[0] = (l) => r("last"))
            }, me)) : w("", !0),
            t("li", {
              onClick: s[1] || (s[1] = (l) => c("left"))
            }, fe),
            t("li", {
              onClick: s[2] || (s[2] = (l) => C("reduce"))
            }, Ce),
            t("li", {
              onClick: s[3] || (s[3] = (l) => D.value = 1)
            }, Be),
            t("li", {
              onClick: s[4] || (s[4] = (l) => C("add"))
            }, Ee),
            t("li", {
              onClick: s[5] || (s[5] = (l) => c("right"))
            }, he),
            i(b).length ? (m(), a("li", {
              key: 1,
              onClick: s[6] || (s[6] = (l) => r("next"))
            }, Se)) : w("", !0)
          ]),
          i(b).length ? (m(), a("div", Ie, [
            (m(!0), a(T, null, J(i(b), (l, B) => (m(), a("div", {
              id: "thumb-item-" + B,
              key: B,
              class: "thumb-item",
              style: O({ background: i(j) === B ? i(P).activeColor : "" }),
              onClick: ($e) => g(l, B)
            }, [
              t("img", {
                src: i(F) ? l[i(F)] : l
              }, null, 8, De)
            ], 12, Fe))), 128))
          ])) : w("", !0)
        ], 8, re),
        t("span", {
          class: "close-icon",
          onClick: s[7] || (s[7] = (l) => I.value = !1)
        }, Ue)
      ])
    ], 32)) : w("", !0);
  }
});
const Q = (A, o) => {
  const e = A.__vccOpts || A;
  for (const [c, r] of o)
    e[c] = r;
  return e;
}, Ke = /* @__PURE__ */ Q(Qe, [["__scopeId", "data-v-63358bb9"]]);
let u = null, E = {};
function Me(A, o = {}) {
  M(o) && (E = o), K(), A.config.globalProperties.$preview = v;
}
function K() {
  var c;
  const A = z(Ke), o = document.createElement("div");
  $(A, o), document.body.appendChild(o), u = (c = A.component.exposed) == null ? void 0 : c.state, u.defaultOptions = { ...u.defaultOptions, ...E };
}
function v(A = "", o = [], e = "") {
  if (u === null && K(), u !== null) {
    if (A === "" || A === null || A === void 0)
      throw "Vue3PreviewImage：请传入参数";
    if (typeof A == "number") {
      if (!o || !o.length)
        throw "Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组";
      u.currentImg = e ? o[A][e] : o[A], u.currentIndex = A;
    } else
      u.currentImg = A, o.length || (u.imgList = [A]);
    u.imgList = o, u.imgKey = e, u.show = !0;
  }
}
v.close = () => {
  Le();
};
function Le() {
  u !== null && u.show && (u.show = !1);
}
function Re(A) {
  M(A) && (u !== null ? u.defaultOptions = { ...u.defaultOptions, ...A } : E = A);
}
function M(A) {
  return Object.prototype.toString.call(A) === "[object Object]";
}
const ye = {
  data() {
    return {
      url: "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
      list: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      ],
      list2: [
        { url: "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg" },
        { url: "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg" },
        { url: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" }
      ]
    };
  },
  methods: {
    handleClick() {
      this.$preview(0, this.list);
    }
  },
  setup() {
    return Re({
      enabledEscClose: !1
    }), {
      handleClick2: () => {
        v("https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg");
      }
    };
  }
}, He = { class: "container" }, Pe = /* @__PURE__ */ t("h1", null, "示例：", -1), _e = /* @__PURE__ */ t("br", null, null, -1), je = /* @__PURE__ */ t("br", null, null, -1), Ze = /* @__PURE__ */ t("br", null, null, -1), Ye = /* @__PURE__ */ t("br", null, null, -1), Xe = /* @__PURE__ */ t("br", null, null, -1), Ve = /* @__PURE__ */ t("br", null, null, -1), xe = /* @__PURE__ */ t("br", null, null, -1), Ne = /* @__PURE__ */ t("br", null, null, -1), Ge = /* @__PURE__ */ t("br", null, null, -1), Te = /* @__PURE__ */ t("br", null, null, -1), Je = /* @__PURE__ */ t("br", null, null, -1), We = /* @__PURE__ */ t("br", null, null, -1);
function qe(A, o, e, c, r, f) {
  return m(), a("div", He, [
    Pe,
    t("button", {
      onClick: o[0] || (o[0] = (g) => A.$preview(0, r.list))
    }, "第一个参数可传入索引,第二个参数传入需要预览的图片数组"),
    _e,
    je,
    t("button", {
      onClick: o[1] || (o[1] = (g) => A.$preview(r.url, r.list))
    }, "第一个参数也可传入url"),
    Ze,
    Ye,
    t("button", {
      onClick: o[2] || (o[2] = (g) => A.$preview(r.url))
    }, "也可以只传入url，单张图片预览"),
    Xe,
    Ve,
    t("button", {
      onClick: o[3] || (o[3] = (g) => A.$preview(0, r.list2, "url"))
    }, "如果数组的item是对象的话，则第三个参数要指定图片在对象中的key"),
    xe,
    Ne,
    t("button", {
      onClick: o[4] || (o[4] = (...g) => f.handleClick && f.handleClick(...g))
    }, "也可通过实例调用"),
    Ge,
    Te,
    t("button", {
      onClick: o[5] || (o[5] = (...g) => c.handleClick2 && c.handleClick2(...g))
    }, "使用setup组合式api时引入方法调用"),
    Je,
    We
  ]);
}
const ze = /* @__PURE__ */ Q(ye, [["render", qe]]);
ee(ze).use(Me).mount("#app");
