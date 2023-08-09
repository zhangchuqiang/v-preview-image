(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".preview-wrap[data-v-b8c04cd6]{position:fixed;top:0;left:0;z-index:99999;background:rgba(0,0,0,.5);-webkit-user-select:none;user-select:none}.preview-wrap li[data-v-b8c04cd6]{list-style:none}.preview-wrap .preview[data-v-b8c04cd6]{position:relative;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.preview-wrap .preview-content[data-v-b8c04cd6]{position:relative;cursor:move;transition:.2s transform;max-height:100vh}.preview-wrap .preview-footer[data-v-b8c04cd6]{position:absolute;bottom:20px;left:50%;transform:translate(-50%)}.preview-wrap .preview-footer-tools[data-v-b8c04cd6]{display:flex;justify-content:center}.preview-wrap .preview-footer-tools li[data-v-b8c04cd6]{margin-right:10px;padding:10px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview-footer-tools li[data-v-b8c04cd6]:active{filter:brightness(.8)}.preview-wrap .preview-footer-tools li[data-v-b8c04cd6]:hover{filter:brightness(1.2)}.preview-wrap .preview-footer-tools li>img[data-v-b8c04cd6]{display:block;width:30px;height:30px}.preview-wrap .preview-footer-tools li:hover i[data-v-b8c04cd6]{color:#ef544e}.preview-wrap .preview-footer-thumbs[data-v-b8c04cd6]{margin-top:20px;max-width:700px;overflow-x:auto;white-space:nowrap}.preview-wrap .preview-footer-thumbs .thumb-item[data-v-b8c04cd6]{padding:10px;margin-right:10px;display:inline-block;background:rgba(102,102,102,.7);border-radius:5px;cursor:pointer}.preview-wrap .preview-footer-thumbs .thumb-item img[data-v-b8c04cd6]{width:60px;height:60px;object-fit:cover}.preview-wrap .preview-footer-thumbs[data-v-b8c04cd6]::-webkit-scrollbar{height:10px}.preview-wrap .preview-footer-thumbs[data-v-b8c04cd6]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#d2d2d2;cursor:pointer}.preview-wrap .preview-footer-thumbs[data-v-b8c04cd6]::-webkit-scrollbar-track{border-radius:10px;background:#fff}.preview-wrap .preview .close-icon[data-v-b8c04cd6]{padding:10px;position:absolute;top:30px;right:30px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.preview-wrap .preview .close-icon>img[data-v-b8c04cd6]{display:block;width:30px;height:30px}.preview-wrap .preview .close-icon[data-v-b8c04cd6]:active{filter:brightness(.8)}.preview-wrap .preview .close-icon[data-v-b8c04cd6]:hover{filter:brightness(1.2)}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as X, reactive as V, watch as x, toRefs as N, unref as u, openBlock as d, createElementBlock as a, createElementVNode as t, normalizeStyle as F, withModifiers as D, createCommentVNode as w, Fragment as G, renderList as T, pushScopeId as J, popScopeId as W, createVNode as q, render as z, createApp as $ } from "vue";
const ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA80lEQVRoQ+3YwQrDMAwD0PrL1355RkoPpaTgYknG4F52yYKelZUw24o/Vjz/1oDsBruBbiA4gT5CwQGGv94NhEcY3EDawBhjn3nN7PxEPDLAFf53hT5QCAngEX4a6gCY4c/jiDiHb3uww1MBivA0gCo8BbAIv5vZwTqq0N+AOjy0gYzwMEBWeAggM3wYkB2eAYBdEbxvrfBbSPnOX6HCgLlpJgICyETAAFkIKCADAQeoERSAEkEDqBBUgAJBB7AREsACAbtyyAA3RM0/tryXs6/rpA18DedZ3wDPlJhrugHmdD17dwOeKTHXdAPM6Xr2Lt/AH0f9gDGCNz2CAAAAAElFTkSuQmCC", te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2YzYtNcRjHP98/wCBKokzEiNl5yUaZFCJkY2Eh8rJAFmQzFl7CKIqMUKORIgvlvbCQyYLIToOYjZewQAallB49+Z06jblz7+/ec7i3zlOn2zn3d36/5/N8fy/Pc0SDmxrcfwqA/61goUChQI0RKKZQTADNbDTQKqkn5r2h2v4zBcxsPbADmALskbQ7C4jcAcxsLNAFLAkO3wW2SHpa9wBmtgtIIv0T2AsclPQrC+e9j1wUCFF/AEwIjt4EDkny6GdqmQOY2TSgN3jZDxwFngMfgPuSXInMLA+AeUCpSD8DzgGnJH3OgiJzAHfKzLqBtcBl4A0wBpgJTApOu0Idks7XCpEXgO88vsuMADZLOhHApvoO5M+C412SNtYCkQtAcLYd2A+8BuZL6kscNbPVwNlw3yOprVqI3AACxCNgFtAtaV3aSTObATwOzzZJOlkNRN4APpXeBcdWSro4AGI48BBoAZZKuhELkStAUMEPMj/QeiW1DnTQzGYHiOuSltUdQIA4AvSXyn/M7B4wF1gsyQ+9ii13BSrxxMy2A4eBTklbK3knaVMvAMOAr0CfpMkNBxCm2S1gIdAk6VulEHWhQAA4DfhW2yLpRSMCJLtVW0zFVk8KnAHWNLICnsF6Jtt4a8DMxgFvSx12Q62HuphCZubZ6XHggKSdlS5gbxcNYGa+2D5J6owZqFRbM2vySg2YDiySdDum32oALAywQtKVmMEGaxsC4rnSBUmrYvurBmAfkMg8UtKX2EGT9ma2AEgiPkeSZ6ZRFg0QDp0kz/fbZkmvokb9U3ami/92SR2xfVS1BlLR81p3fLiveO6GOb8tpNj+ek1f6apSIAXhU8mnlNs14Kr/Svo4MJpm1gwsBzaEBetN/ipyYlWoCSBMJ194HlEvEd1+AC89swSehI9b7rwfUondAY5JcuiarGaAlBr+dcGvBGQwx7xYuSTJE7dMLDOAFMhEILlGAe9DXexf5b5n4nWqk8wBsnawXH8FQLkI5f1/oUDeES7Xf6FAuQjl/X/DK/AbtZPzMdM3hhkAAAAASUVORK5CYII=", Ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA2klEQVRoQ+2SwQnCUBAF36tA67EAQdCjlViHlXhUECzAerSCL1awKxMIwZfrz06yM99a+OOF/7+ywNwFUyAFoIFcISgQj6cAVggBKQAF4vEUwAohIAWgQDyeAlghBKQAFIjH/6fAGOOIdf0AsH3pvN4qMMa4Stp3gBO+c7N9qHjdBV6SVhVs4vO37XXF7C6wkXSStJV0r6DwfCfpIels+1mxWgtUkDnPs8Cc9r/fToEUgAZyhaBAPJ4CWCEEpAAUiMdTACuEgBSAAvF4CmCFEJACUCAeTwGsEAI+mZoVMWVj79AAAAAASUVORK5CYII=", ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0UlEQVRoQ+2ZMUsdQRSFv1OlMZAfkE5bIRgrm2ijYG/aWCRNUEggffQXJBBtBEHbhNSBNFpZxRAQLC38BSnSWB0Z2CeTl6fsvLfzdOJMt+ydM/fcc/fM7qwofKjw/KkEblvBqkBVYMQKDGwh29PAM+AJMDniGqNOPwV+AceSfvaD/UPA9iLwFZgYdeWO518A7yRtxbh/EbC9BnyKAs6A844TSYV7DExFk5Ykfe9dXxGwPQMcAQ+am7OSjlNXyxFvewX43GD/AeYknYTrmMArYKcJei7pS45khsW0/RT40cxf77VSTGAbeA18k7Q87EI559k+AOaBXUkv+xXo3dyUtJEzkWGxbYe83gOHkhbuNwHbq8BDSbFrJRc3BaczBWyHPgwtF8aCpMPkzIFUnEqgV+XUyl2nTirOWBWw/Qh40SS/L+l3P5G7TuAN8KFJ+q2kj5VAV/tAG+mbFgpWG8ZecS3UxlbbFCLGGetDXDyB6kIDJBxrC9ku3kbDRlZdqLrQIDtM9e879zIXEkr5ELlpT0jB6cyF2mxSOWL+ewLFH6sUf7BV9tFi4yzlHu5GH+zlHq9HJMr9wZHDv3Ni1r+UOavbBrsq0KZKOWOqAjmr2wb7Ev2uGk/D5C02AAAAAElFTkSuQmCC", oe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABIklEQVRoQ+1Xu60CMRCcKQBEQgEkRGQUAAkpvVABUAZ1kJEAOcEr4cUveQHki5AuAImT16wtdNIQnneHnY99PqLjP3Z8fojAtx2UA3IgqIAiFBQw3F7VATM7AhiSnIQnbQGoRsDM1gA2zf9uSG5rkBCBNlXlgDNvipAi5IxKW5kipAgpQkEFOhEhM+sBmGZynT3fhQCcM/svJG+pHtcpZGYHAIsUWOH1PcllCtNL4O9xLU6BFV7/JTlKYXoJjAHsUmBv1ufNs9MHvSuSP6k+F4EUyLt13UadqsmBTrwHnG6+lGkPOFXTHtAecEZFX2S5QukUcipW8xQaAPhv5uiTvDpnyiqrRiBrikCxCATEK9IqB4rIGACRAwHxirTKgSIyBkDu/L2YMUQkwrYAAAAASUVORK5CYII=", se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADI0lEQVRoQ+2YW4hOURTHf/+UUqSQIpfIKDN5mygPMilDuUQoUSL3mLwol4mZh5lH5ZpGU6I8KA8ooWTKi2I8CJGI8EDxoDwvrWkfHZrp+/a5zDdT36qv0z7f3uv8/+u/1957bTHKTaMcP3UCtVawrkBdgZwRqE+hdADNbBnwQtLPnIGtenhhCphZB3AKeAV0S7peNYocHYsk0AicB1oCnmuByJsc+CoOLYyAf8nMxgBHgZPAWOB7IHGmIpKMHQolkGAwM1fhCLAqvLsXiDzOiHPIYYUTMDOP/ApgLjAJOAxMDAhaJPUVSaIwAmbmYPcB24AFQ4AcmQTMbCtwDGgKwN8Dz4BvwExgPXBJ0v4io+++citgZj3A7gDsgq9EkgZWHjM7APi7j8BSSZ9HFAEzewT45uW2XdLVVCLPAx4Cs4A9ki4XDT6XAmbm0+FiANUsqf+/XbkX2AnclLSxDPCZCZjZauBOADVHkk+Rv2Zmm4AbwO8wdZ6PNAK3gTXAXkmeA/9YamqdkNRdFvhMCpiZb053gX5JzYOBC+eiRkmbywSflcBZ4BDQJulc2QAr+Y9eRs3sHeArzOThPDYPRSSKgJlNAH4B9yWtrBSd4fg/lsB84C3QK2nXcACs9I1YAr5p+ebVKckLmJpbLIFEgSuSdtQcfexZKJUDfZKSyqumPKIUcKRm9jKcOmdI+lpT9LEKBAJdwHHgoCQ/adbUsijQCniJ6LcPSyT5sprbQk3RELs4RBMIKviVyRagQ1JnXvRm1gYMFP6SojBFdU6Amtli4Elot0p6kJWEmU0NlZu76JLUHuMrE4GggpeQyUmzSdLrmA8HH7NDtebNp5IWxfrITCAASG7jvOlT6XS1OWFmSS752C+SvHaOtlwEAomkePGmJ7aXjrf+L3JC3ynAWmBdePrrdkm+smWy3AQCMAflibg8hcLvf7xS+wQsDCfYBmBc6OMlqCuW6w61EAKp5PYD3obUjdxgUXXgPYNVclkkKJRAish43yOA6cA04AfwwX+S/FmYlUKgMHRVOKoTqCJIpXapK1BqeKtwXlegiiCV2mXUK/AHaODuMa3oHxAAAAAASUVORK5CYII=", le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABS0lEQVRoQ+3YIW8CQRAF4Le/sgKBIKlAICoQCAoCgUBUVDSpqKjgX77myAiyocklO2/IJHMGcyzvm7njZq8h+dGS50cBnt3B6kB1YLACdQkNFnD469WB4RIOLuDWAZKHKUtr7fYZdbgALPy7hT5GIrwARwD7u6qHIVwAU3CSJwC7aIQbwBBnANtIhCvAEBcAb1EId4AhPgBs7hCH1tp0n7gfEoAhPgGs1QgZwBBfAF6VCCnAEN8AViqEHGCIHwBLBSIEYIhfAAtvRBjAEFcAL56IZwOGR44wAMn+EhoOf5t+3Z8sDxYk2d/ELuFDACT7v1G38HIAyf5B5hpeCiDZjxLu4WUAkv0wJwkvAZDMO06TzLuhSb2lJJl7U5/+tYoNanlfbEWMI//9RsgspAQWQFndOWtXB+ZUSXlOdUBZ3TlrVwfmVEl5TvoO/AFnAoAxEk6FgQAAAABJRU5ErkJggg==", ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAABzUlEQVRoQ+3YXSsFURQG4Pf9ay79AET5KqIQUcQFR/kqQhRRRFHyH72amlPr4syxZ/aaOXOOPdcza9az1p6ZNZsYgYMjYEBCtKWLqROpE44VSMvJsZhRof5nJyStABgjORFVvoKLJXUAiORRaPxSnZC0B+AsD/7tDZF0AmA/j98JhZRFZNU5NBVyg0g6B7BrYh+TtPcqbEwpRBZFkjtE0iWAbZPlKcmDWpZTN6gnRNI1gE2T8AXJbNkGH6U74QmRdAdgzWR7RXInOPv8xMqI2KUl6QFA9qbrHjckt8oCsvOjEFUhkp4ALJmE70muVwG4IMpCJL0AWDAJP5JcrQpwQ4RCJL0BmDUJP5NcjgG4Iv6CSPoAMG0SfiW5GAtwRxRBAPwAmDQJv5Oc8wDUgiiA2Hw/Sc54AWpD9IF8kZzyBCREv2r2GEuGazn1mquG6sHuNxgOxSs2ZLJt9ccuBNB9KFo5dpQBGEh7BsAqAAMZ/CgeAzCQwf0UeQAMpPnfU0+AgTS3UVAHwECa2bKRtAHgNr+x256TgdS/eZZPp/MAxr13/wyk3m1M7xHaK170bodXIjFxEiKmep7Xpk54VjMmVupETPU8r02d8KxmTKxfONz8MSXjQ6gAAAAASUVORK5CYII=", m = (o) => (J("data-v-b8c04cd6"), o = o(), W(), o), ie = ["src", "onClick"], ce = ["onClick"], re = { class: "preview-footer-tools" }, ge = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: ee }, null, -1)), me = [
  ge
], de = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: te }, null, -1)), ae = [
  de
], fe = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: Ae }, null, -1)), pe = [
  fe
], Ce = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: ne }, null, -1)), be = [
  Ce
], Be = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: oe }, null, -1)), we = [
  Be
], Ee = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: se }, null, -1)), ve = [
  Ee
], ke = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: le }, null, -1)), he = [
  ke
], Se = {
  key: 0,
  class: "preview-footer-thumbs"
}, Ie = ["id", "onClick"], Fe = ["src"], De = /* @__PURE__ */ m(() => /* @__PURE__ */ t("img", { src: ue }, null, -1)), Ue = [
  De
], Qe = /* @__PURE__ */ X({
  __name: "index",
  setup(o, { expose: s }) {
    const e = V({
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
    }), g = () => {
      e.imgList = [], e.currentImg = "", e.currentIndex = 0, e.imgKey = "", e.imgTop = 0, e.imgLeft = 0, e.startPageX = 0, e.startPageY = 0, e.imgScale = 1, e.imgRotate = 0;
    }, c = (A) => {
      A === "left" ? e.imgRotate -= 90 : e.imgRotate += 90;
    }, f = (A) => {
      if (e.imgList.length < 2)
        return;
      let n = 0;
      A === "last" && (e.currentIndex === 0 ? n = e.imgList.length - 1 : n = e.currentIndex - 1), A === "next" && (e.currentIndex === e.imgList.length - 1 ? n = 0 : n = e.currentIndex + 1);
      const l = e.imgList[n];
      e.currentImg = e.imgKey ? l[e.imgKey] : l, e.currentIndex = n, r(n);
    }, r = (A) => {
      A = A < 4 ? 0 : A - 4;
      const n = document.querySelector(".preview-footer-thumbs"), l = document.querySelector("#thumb-item-" + A);
      n.scrollLeft = (l == null ? void 0 : l.offsetLeft) || 0;
    }, M = (A, n) => {
      const l = e.imgKey ? A[e.imgKey] : A;
      e.currentImg = l, e.currentIndex = n, r(n);
    }, L = () => {
      e.defaultOptions.enabledMaskClose && (e.show = !1);
    }, R = (A) => {
      e.defaultOptions.enabledMouseZoom && (A.wheelDelta > 0 || A.detail > 0 ? C(1) : (A.wheelDelta < 0 || A.detail < 0) && C(2));
    }, C = (A = 1) => {
      A === 1 && e.imgScale < 4 ? e.imgScale += 0.1 : A === 2 && e.imgScale > 0.5 && (e.imgScale -= 0.1);
    }, y = (A) => {
      const { pageX: n, pageY: l } = A;
      e.startPageX = n - e.imgLeft, e.startPageY = l - e.imgTop, document.addEventListener("mousemove", k, !1), document.addEventListener("mouseup", v, !1), A.preventDefault();
    }, E = (A) => {
      A.keyCode === 27 && e.defaultOptions.enabledEscClose && (e.show = !1);
    }, v = () => {
      document.removeEventListener("mousemove", k, !1);
    }, k = (A) => {
      const { pageX: n, pageY: l } = A;
      e.imgTop = l - e.startPageY, e.imgLeft = n - e.startPageX, p(A);
    }, p = (A) => {
      A.preventDefault();
    };
    x(
      () => e.show,
      (A) => {
        A ? (document.body.style.overflow = "hidden", document.addEventListener("mousemove", p, !1), document.addEventListener("keydown", E, !1)) : (document.body.style.overflow = "", document.removeEventListener("mousemove", p, !1), document.removeEventListener("mouseup", v, !1), document.removeEventListener("keydown", E, !1), g());
      },
      { immediate: !0 }
    );
    const { defaultOptions: H, show: h, currentImg: _, currentIndex: j, imgList: b, imgKey: S, imgTop: Z, imgLeft: P, imgScale: I, imgRotate: Y } = N(e);
    return s({
      state: e
    }), (A, n) => u(h) ? (d(), a("div", {
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
          src: u(_),
          style: F({ top: u(Z) + "px", left: u(P) + "px", transform: `scale(${u(I)}) rotateZ(${u(Y)}deg)` }),
          onClick: D(p, ["stop"]),
          onMousedown: y
        }, null, 44, ie),
        t("div", {
          class: "preview-footer",
          onClick: D(p, ["stop"])
        }, [
          t("ul", re, [
            u(b).length ? (d(), a("li", {
              key: 0,
              onClick: n[0] || (n[0] = (l) => f("last"))
            }, me)) : w("", !0),
            t("li", {
              onClick: n[1] || (n[1] = (l) => c("left"))
            }, ae),
            t("li", {
              onClick: n[2] || (n[2] = (l) => C(2))
            }, pe),
            t("li", {
              onClick: n[3] || (n[3] = (l) => I.value = 1)
            }, be),
            t("li", {
              onClick: n[4] || (n[4] = (l) => C(1))
            }, we),
            t("li", {
              onClick: n[5] || (n[5] = (l) => c("right"))
            }, ve),
            u(b).length ? (d(), a("li", {
              key: 1,
              onClick: n[6] || (n[6] = (l) => f("next"))
            }, he)) : w("", !0)
          ]),
          u(b).length ? (d(), a("div", Se, [
            (d(!0), a(G, null, T(u(b), (l, B) => (d(), a("div", {
              id: "thumb-item-" + B,
              key: B,
              class: "thumb-item",
              style: F({ background: u(j) === B ? u(H).activeColor : "" }),
              onClick: (qe) => M(l, B)
            }, [
              t("img", {
                src: u(S) ? l[u(S)] : l
              }, null, 8, Fe)
            ], 12, Ie))), 128))
          ])) : w("", !0)
        ], 8, ce),
        t("span", {
          class: "close-icon",
          onClick: n[7] || (n[7] = (l) => h.value = !1)
        }, Ue)
      ])
    ], 32)) : w("", !0);
  }
});
const U = (o, s) => {
  const e = o.__vccOpts || o;
  for (const [g, c] of s)
    e[g] = c;
  return e;
}, Oe = /* @__PURE__ */ U(Qe, [["__scopeId", "data-v-b8c04cd6"]]);
let i = null, Q = {};
function Ke(o, s = {}) {
  Me(s) && (Q = s), O(), o.config.globalProperties.$preview = K;
}
function O() {
  var g;
  const o = q(Oe), s = document.createElement("div");
  z(o, s), document.body.appendChild(s), i = (g = o.component.exposed) == null ? void 0 : g.state, i.defaultOptions = { ...i.defaultOptions, ...Q };
}
function K(o = "", s = [], e = "") {
  if (i === null && O(), i !== null) {
    if (o === "" || o === null || o === void 0)
      throw "Vue3PreviewImage：请传入参数";
    if (typeof o == "number") {
      if (!s || !s.length)
        throw "Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组";
      i.currentImg = e ? s[o][e] : s[o], i.currentIndex = o;
    } else
      i.currentImg = o, s.length || (i.imgList = [o]);
    i.imgList = s, i.imgKey = e, i.show = !0;
  }
}
function Me(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const Le = {
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
    return {
      handleClick2: () => {
        K("https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg");
      }
    };
  }
}, Re = { class: "container" }, ye = /* @__PURE__ */ t("h1", null, "示例：", -1), He = /* @__PURE__ */ t("br", null, null, -1), _e = /* @__PURE__ */ t("br", null, null, -1), je = /* @__PURE__ */ t("br", null, null, -1), Ze = /* @__PURE__ */ t("br", null, null, -1), Pe = /* @__PURE__ */ t("br", null, null, -1), Ye = /* @__PURE__ */ t("br", null, null, -1), Xe = /* @__PURE__ */ t("br", null, null, -1), Ve = /* @__PURE__ */ t("br", null, null, -1), xe = /* @__PURE__ */ t("br", null, null, -1), Ne = /* @__PURE__ */ t("br", null, null, -1), Ge = /* @__PURE__ */ t("br", null, null, -1), Te = /* @__PURE__ */ t("br", null, null, -1);
function Je(o, s, e, g, c, f) {
  return d(), a("div", Re, [
    ye,
    t("button", {
      onClick: s[0] || (s[0] = (r) => o.$preview(0, c.list))
    }, "第一个参数可传入索引,第二个参数传入需要预览的图片数组"),
    He,
    _e,
    t("button", {
      onClick: s[1] || (s[1] = (r) => o.$preview(c.url, c.list))
    }, "第一个参数也可传入url"),
    je,
    Ze,
    t("button", {
      onClick: s[2] || (s[2] = (r) => o.$preview(c.url))
    }, "也可以只传入url，单张图片预览"),
    Pe,
    Ye,
    t("button", {
      onClick: s[3] || (s[3] = (r) => o.$preview(0, c.list2, "url"))
    }, "如果数组的item是对象的话，则第三个参数要指定图片在对象中的key"),
    Xe,
    Ve,
    t("button", {
      onClick: s[4] || (s[4] = (...r) => f.handleClick && f.handleClick(...r))
    }, "也可通过实例调用"),
    xe,
    Ne,
    t("button", {
      onClick: s[5] || (s[5] = (...r) => g.handleClick2 && g.handleClick2(...r))
    }, "使用setup组合式api时引入方法调用"),
    Ge,
    Te
  ]);
}
const We = /* @__PURE__ */ U(Le, [["render", Je]]);
$(We).use(Ke).mount("#app");
