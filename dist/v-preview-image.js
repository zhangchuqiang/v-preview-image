(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".preview-wrap[data-v-269cfa50]{position:fixed;top:0;left:0;z-index:99999;background:rgba(0,0,0,.5);-webkit-user-select:none;user-select:none}.preview-wrap li[data-v-269cfa50]{list-style:none}.preview-wrap .preview[data-v-269cfa50]{position:relative;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.preview-wrap .preview-content[data-v-269cfa50]{position:relative;cursor:move;transition:.2s transform;max-height:100vh}.preview-wrap .preview-footer[data-v-269cfa50]{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;flex-direction:column;align-items:center}.preview-wrap .preview-footer-tools[data-v-269cfa50]{display:flex;justify-content:center}.preview-wrap .preview-footer-tools li[data-v-269cfa50]{margin-right:10px}.preview-wrap .preview-footer-thumbs[data-v-269cfa50]{max-width:700px;padding-bottom:10px;overflow-x:auto;white-space:nowrap}.preview-wrap .preview-footer-thumbs .thumb-item[data-v-269cfa50]{padding:10px;margin-right:10px;display:inline-block;background:rgba(102,102,102,.7);border-radius:5px;cursor:pointer}.preview-wrap .preview-footer-thumbs .thumb-item img[data-v-269cfa50]{width:60px;height:60px;object-fit:cover}.preview-wrap .preview-footer-thumbs[data-v-269cfa50]::-webkit-scrollbar{height:10px}.preview-wrap .preview-footer-thumbs[data-v-269cfa50]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.1);background:#aaa;cursor:pointer}.preview-wrap .preview-footer-thumbs[data-v-269cfa50]::-webkit-scrollbar-track{border-radius:10px;background:rgba(255,255,255,.8)}.preview-wrap .preview-footer-indexs[data-v-269cfa50]{margin-top:10px;height:25px;line-height:25px;padding:0 12px;background:rgba(0,0,0,.3);color:#fff;text-align:center;border-radius:13px;font-size:14px}.preview-wrap .preview .close-btn[data-v-269cfa50]{position:absolute;top:30px;right:30px}.preview-wrap .preview .download-btn[data-v-269cfa50]{position:absolute;bottom:30px;right:30px}.icon-btn[data-v-269cfa50]{padding:8px;border-radius:50%;background:rgba(110,110,110,.7);cursor:pointer}.icon-btn[data-v-269cfa50]:hover{filter:brightness(1.3)}.icon-btn>img[data-v-269cfa50]{display:block;width:25px;height:25px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as N, reactive as T, watch as J, toRefs as _, unref as l, openBlock as g, createElementBlock as m, createElementVNode as s, normalizeStyle as K, withModifiers as v, createCommentVNode as B, Fragment as M, renderList as W, toDisplayString as y, pushScopeId as q, popScopeId as j, createVNode as z, render as $ } from "vue";
const ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA80lEQVRoQ+3YwQrDMAwD0PrL1355RkoPpaTgYknG4F52yYKelZUw24o/Vjz/1oDsBruBbiA4gT5CwQGGv94NhEcY3EDawBhjn3nN7PxEPDLAFf53hT5QCAngEX4a6gCY4c/jiDiHb3uww1MBivA0gCo8BbAIv5vZwTqq0N+AOjy0gYzwMEBWeAggM3wYkB2eAYBdEbxvrfBbSPnOX6HCgLlpJgICyETAAFkIKCADAQeoERSAEkEDqBBUgAJBB7AREsACAbtyyAA3RM0/tryXs6/rpA18DedZ3wDPlJhrugHmdD17dwOeKTHXdAPM6Xr2Lt/AH0f9gDGCNz2CAAAAAElFTkSuQmCC", te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2YzYtNcRjHP98/wCBKokzEiNl5yUaZFCJkY2Eh8rJAFmQzFl7CKIqMUKORIgvlvbCQyYLIToOYjZewQAallB49+Z06jblz7+/ec7i3zlOn2zn3d36/5/N8fy/Pc0SDmxrcfwqA/61goUChQI0RKKZQTADNbDTQKqkn5r2h2v4zBcxsPbADmALskbQ7C4jcAcxsLNAFLAkO3wW2SHpa9wBmtgtIIv0T2AsclPQrC+e9j1wUCFF/AEwIjt4EDkny6GdqmQOY2TSgN3jZDxwFngMfgPuSXInMLA+AeUCpSD8DzgGnJH3OgiJzAHfKzLqBtcBl4A0wBpgJTApOu0Idks7XCpEXgO88vsuMADZLOhHApvoO5M+C412SNtYCkQtAcLYd2A+8BuZL6kscNbPVwNlw3yOprVqI3AACxCNgFtAtaV3aSTObATwOzzZJOlkNRN4APpXeBcdWSro4AGI48BBoAZZKuhELkStAUMEPMj/QeiW1DnTQzGYHiOuSltUdQIA4AvSXyn/M7B4wF1gsyQ+9ii13BSrxxMy2A4eBTklbK3knaVMvAMOAr0CfpMkNBxCm2S1gIdAk6VulEHWhQAA4DfhW2yLpRSMCJLtVW0zFVk8KnAHWNLICnsF6Jtt4a8DMxgFvSx12Q62HuphCZubZ6XHggKSdlS5gbxcNYGa+2D5J6owZqFRbM2vySg2YDiySdDum32oALAywQtKVmMEGaxsC4rnSBUmrYvurBmAfkMg8UtKX2EGT9ma2AEgiPkeSZ6ZRFg0QDp0kz/fbZkmvokb9U3ami/92SR2xfVS1BlLR81p3fLiveO6GOb8tpNj+ek1f6apSIAXhU8mnlNs14Kr/Svo4MJpm1gwsBzaEBetN/ipyYlWoCSBMJ194HlEvEd1+AC89swSehI9b7rwfUondAY5JcuiarGaAlBr+dcGvBGQwx7xYuSTJE7dMLDOAFMhEILlGAe9DXexf5b5n4nWqk8wBsnawXH8FQLkI5f1/oUDeES7Xf6FAuQjl/X/DK/AbtZPzMdM3hhkAAAAASUVORK5CYII=", Ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA2klEQVRoQ+2SwQnCUBAF36tA67EAQdCjlViHlXhUECzAerSCL1awKxMIwZfrz06yM99a+OOF/7+ywNwFUyAFoIFcISgQj6cAVggBKQAF4vEUwAohIAWgQDyeAlghBKQAFIjH/6fAGOOIdf0AsH3pvN4qMMa4Stp3gBO+c7N9qHjdBV6SVhVs4vO37XXF7C6wkXSStJV0r6DwfCfpIels+1mxWgtUkDnPs8Cc9r/fToEUgAZyhaBAPJ4CWCEEpAAUiMdTACuEgBSAAvF4CmCFEJACUCAeTwGsEAI+mZoVMWVj79AAAAAASUVORK5CYII=", oe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0UlEQVRoQ+2ZMUsdQRSFv1OlMZAfkE5bIRgrm2ijYG/aWCRNUEggffQXJBBtBEHbhNSBNFpZxRAQLC38BSnSWB0Z2CeTl6fsvLfzdOJMt+ydM/fcc/fM7qwofKjw/KkEblvBqkBVYMQKDGwh29PAM+AJMDniGqNOPwV+AceSfvaD/UPA9iLwFZgYdeWO518A7yRtxbh/EbC9BnyKAs6A844TSYV7DExFk5Ykfe9dXxGwPQMcAQ+am7OSjlNXyxFvewX43GD/AeYknYTrmMArYKcJei7pS45khsW0/RT40cxf77VSTGAbeA18k7Q87EI559k+AOaBXUkv+xXo3dyUtJEzkWGxbYe83gOHkhbuNwHbq8BDSbFrJRc3BaczBWyHPgwtF8aCpMPkzIFUnEqgV+XUyl2nTirOWBWw/Qh40SS/L+l3P5G7TuAN8KFJ+q2kj5VAV/tAG+mbFgpWG8ZecS3UxlbbFCLGGetDXDyB6kIDJBxrC9ku3kbDRlZdqLrQIDtM9e879zIXEkr5ELlpT0jB6cyF2mxSOWL+ewLFH6sUf7BV9tFi4yzlHu5GH+zlHq9HJMr9wZHDv3Ni1r+UOavbBrsq0KZKOWOqAjmr2wb7Ev2uGk/D5C02AAAAAElFTkSuQmCC", ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABIklEQVRoQ+1Xu60CMRCcKQBEQgEkRGQUAAkpvVABUAZ1kJEAOcEr4cUveQHki5AuAImT16wtdNIQnneHnY99PqLjP3Z8fojAtx2UA3IgqIAiFBQw3F7VATM7AhiSnIQnbQGoRsDM1gA2zf9uSG5rkBCBNlXlgDNvipAi5IxKW5kipAgpQkEFOhEhM+sBmGZynT3fhQCcM/svJG+pHtcpZGYHAIsUWOH1PcllCtNL4O9xLU6BFV7/JTlKYXoJjAHsUmBv1ufNs9MHvSuSP6k+F4EUyLt13UadqsmBTrwHnG6+lGkPOFXTHtAecEZFX2S5QukUcipW8xQaAPhv5uiTvDpnyiqrRiBrikCxCATEK9IqB4rIGACRAwHxirTKgSIyBkDu/L2YMUQkwrYAAAAASUVORK5CYII=", se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADI0lEQVRoQ+2YW4hOURTHf/+UUqSQIpfIKDN5mygPMilDuUQoUSL3mLwol4mZh5lH5ZpGU6I8KA8ooWTKi2I8CJGI8EDxoDwvrWkfHZrp+/a5zDdT36qv0z7f3uv8/+u/1957bTHKTaMcP3UCtVawrkBdgZwRqE+hdADNbBnwQtLPnIGtenhhCphZB3AKeAV0S7peNYocHYsk0AicB1oCnmuByJsc+CoOLYyAf8nMxgBHgZPAWOB7IHGmIpKMHQolkGAwM1fhCLAqvLsXiDzOiHPIYYUTMDOP/ApgLjAJOAxMDAhaJPUVSaIwAmbmYPcB24AFQ4AcmQTMbCtwDGgKwN8Dz4BvwExgPXBJ0v4io+++citgZj3A7gDsgq9EkgZWHjM7APi7j8BSSZ9HFAEzewT45uW2XdLVVCLPAx4Cs4A9ki4XDT6XAmbm0+FiANUsqf+/XbkX2AnclLSxDPCZCZjZauBOADVHkk+Rv2Zmm4AbwO8wdZ6PNAK3gTXAXkmeA/9YamqdkNRdFvhMCpiZb053gX5JzYOBC+eiRkmbywSflcBZ4BDQJulc2QAr+Y9eRs3sHeArzOThPDYPRSSKgJlNAH4B9yWtrBSd4fg/lsB84C3QK2nXcACs9I1YAr5p+ebVKckLmJpbLIFEgSuSdtQcfexZKJUDfZKSyqumPKIUcKRm9jKcOmdI+lpT9LEKBAJdwHHgoCQ/adbUsijQCniJ6LcPSyT5sprbQk3RELs4RBMIKviVyRagQ1JnXvRm1gYMFP6SojBFdU6Amtli4Elot0p6kJWEmU0NlZu76JLUHuMrE4GggpeQyUmzSdLrmA8HH7NDtebNp5IWxfrITCAASG7jvOlT6XS1OWFmSS752C+SvHaOtlwEAomkePGmJ7aXjrf+L3JC3ynAWmBdePrrdkm+smWy3AQCMAflibg8hcLvf7xS+wQsDCfYBmBc6OMlqCuW6w61EAKp5PYD3obUjdxgUXXgPYNVclkkKJRAish43yOA6cA04AfwwX+S/FmYlUKgMHRVOKoTqCJIpXapK1BqeKtwXlegiiCV2mXUK/AHaODuMa3oHxAAAAAASUVORK5CYII=", ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABS0lEQVRoQ+3YIW8CQRAF4Le/sgKBIKlAICoQCAoCgUBUVDSpqKjgX77myAiyocklO2/IJHMGcyzvm7njZq8h+dGS50cBnt3B6kB1YLACdQkNFnD469WB4RIOLuDWAZKHKUtr7fYZdbgALPy7hT5GIrwARwD7u6qHIVwAU3CSJwC7aIQbwBBnANtIhCvAEBcAb1EId4AhPgBs7hCH1tp0n7gfEoAhPgGs1QgZwBBfAF6VCCnAEN8AViqEHGCIHwBLBSIEYIhfAAtvRBjAEFcAL56IZwOGR44wAMn+EhoOf5t+3Z8sDxYk2d/ELuFDACT7v1G38HIAyf5B5hpeCiDZjxLu4WUAkv0wJwkvAZDMO06TzLuhSb2lJJl7U5/+tYoNanlfbEWMI//9RsgspAQWQFndOWtXB+ZUSXlOdUBZ3TlrVwfmVEl5TvoO/AFnAoAxEk6FgQAAAABJRU5ErkJggg==", le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAABzUlEQVRoQ+3YXSsFURQG4Pf9ay79AET5KqIQUcQFR/kqQhRRRFHyH72amlPr4syxZ/aaOXOOPdcza9az1p6ZNZsYgYMjYEBCtKWLqROpE44VSMvJsZhRof5nJyStABgjORFVvoKLJXUAiORRaPxSnZC0B+AsD/7tDZF0AmA/j98JhZRFZNU5NBVyg0g6B7BrYh+TtPcqbEwpRBZFkjtE0iWAbZPlKcmDWpZTN6gnRNI1gE2T8AXJbNkGH6U74QmRdAdgzWR7RXInOPv8xMqI2KUl6QFA9qbrHjckt8oCsvOjEFUhkp4ALJmE70muVwG4IMpCJL0AWDAJP5JcrQpwQ4RCJL0BmDUJP5NcjgG4Iv6CSPoAMG0SfiW5GAtwRxRBAPwAmDQJv5Oc8wDUgiiA2Hw/Sc54AWpD9IF8kZzyBCREv2r2GEuGazn1mquG6sHuNxgOxSs2ZLJt9ccuBNB9KFo5dpQBGEh7BsAqAAMZ/CgeAzCQwf0UeQAMpPnfU0+AgTS3UVAHwECa2bKRtAHgNr+x256TgdS/eZZPp/MAxr13/wyk3m1M7xHaK170bodXIjFxEiKmep7Xpk54VjMmVupETPU8r02d8KxmTKxfONz8MSXjQ6gAAAAASUVORK5CYII=", re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACbUlEQVRoQ+2Zy64MURiFv/UKvIOBKSMmvIAhIcQthBCEuAuHOHHiGnchjmuI8xJMGDH1Fgy8wJLqFPlTuqr27u7q45zUnnX3rr3X96/1p3Z2iyU+tMT10wM0OWh7E/BL0qeunO7MAdu7gBel8I1dQXQJcAmYKQFmJF3uwoUeoK6qtnsHUiLXR6iPUEpOGub0Eeoj1EcooQK2NxTTcs4z47zIcvZrbWLba4CvuWeaUQFsF2emi+V+ayV9a6pxCkBR/Y9hkaSD2SgAtmeBc2Gv1lNsK0CxWKUqxVetELkAtueA00H8FUnFeapxJAGUEFeB86lO5ADYvgmcCGvPSrrQJn7QlymT/syxfQ04kwKRCmD7DnAsrDkn6WyqriyA0onrwMk2iBQA2/eBw2GtG5JOpYrPdiA4cQs43gTRBmD7EXAwrHFbUoxREke2AwHiLnCkDqIJwPZTYF949p6ko0mKK5NGBijj9AA4NAyiDsD2PLA7PPNQUoxRFsdYACXEY+BAFWIYgO3XwI4w94mkGKMs8SP3QHWXIZH4extRzi0+rwK2hWefSdqfrXiSEYpr2X4O7IlOhGuVBWBz+G1e0t5xxU/MgdDYL4GdLcJeSSouvSYyxu6BIXF6A2yvUfdWUuyBsSEmDlA29jtga0Xde0mxB8YWP/EIVXriQ8j9gqQtE1HcVRMPE2d79aBK0vcuxHfqQFeCq+t20gPTEt87MM1K1+21fCNU/kXU9ladlgnF27t4y/8zah2w/QNYMS2FLfv8lLQyF+AzsO4/AfgiaX0WQHkkGNzILfZouhFcvk282FVP3b93ILVSXc1b8g78BmlpHUAnh/F/AAAAAElFTkSuQmCC";
function ce(A) {
  let i = "";
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let c = 0; c < A; c++)
    i += e.charAt(Math.floor(Math.random() * e.length));
  return i;
}
function ae(A, i) {
  const e = (d) => {
    var u = d.match(/.*\.(.*)/);
    return u ? u[1] : "";
  }, c = document.createElement("a");
  document.body.appendChild(c), c.href = A, c.download = i || Date.now() + `_${ce(5)}.${e(A)}`, c.target = "_blank", c.click(), document.body.removeChild(c);
}
const a = (A) => (q("data-v-269cfa50"), A = A(), j(), A), ge = ["src", "onClick"], me = ["onClick"], de = { class: "preview-footer-tools" }, ue = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: ee }, null, -1)), we = [
  ue
], fe = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: te }, null, -1)), Be = [
  fe
], Ce = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: Ae }, null, -1)), pe = [
  Ce
], ve = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: oe }, null, -1)), ke = [
  ve
], he = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: ne }, null, -1)), Se = [
  he
], Ee = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: se }, null, -1)), Ie = [
  Ee
], Ue = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: ie }, null, -1)), Qe = [
  Ue
], De = { class: "preview-footer-thumbs" }, be = ["id", "onClick"], Oe = ["src"], Ke = { class: "preview-footer-indexs" }, Me = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: le }, null, -1)), ye = [
  Me
], Le = /* @__PURE__ */ a(() => /* @__PURE__ */ s("img", { src: re }, null, -1)), Fe = [
  Le
], Re = /* @__PURE__ */ N({
  __name: "index",
  setup(A, { expose: i }) {
    const e = T({
      defaultOptions: {
        enabledMaskClose: !0,
        // 开启点击遮罩关闭
        enabledEscClose: !0,
        // 开启esc按键关闭
        enabledMouseZoom: !0,
        // 开启鼠标滚轮缩放
        activeColor: "rgba(239, 84, 78, 0.7)",
        // 预览图中选中图片的背景颜色
        previewStyle: {
          width: "auto",
          height: "auto",
          objectFit: "cover"
        },
        // 预览图样式
        showDownloadBtn: !0
        // 显示下载按钮
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
    }), c = (o) => {
      o === "left" ? e.imgRotate -= 90 : e.imgRotate += 90;
    }, d = (o) => {
      if (e.imgList.length < 2)
        return;
      let t = 0;
      o === "last" && (e.currentIndex === 0 ? t = e.imgList.length - 1 : t = e.currentIndex - 1), o === "next" && (e.currentIndex === e.imgList.length - 1 ? t = 0 : t = e.currentIndex + 1);
      const n = e.imgList[t];
      e.currentImg = e.imgKey ? n[e.imgKey] : n, e.currentIndex = t, u(t);
    }, u = (o) => {
      const t = document.querySelector(".preview-footer-thumbs"), n = document.querySelector("#thumb-item-" + o);
      t.scrollTo({
        left: (n == null ? void 0 : n.offsetLeft) - (t.offsetWidth - n.offsetWidth) / 2,
        behavior: "smooth"
      });
    }, H = (o, t) => {
      const n = e.imgKey ? o[e.imgKey] : o;
      e.currentImg = n, e.currentIndex = t, u(t);
    }, x = () => {
      e.defaultOptions.enabledMaskClose && (e.show = !1);
    }, P = (o) => {
      e.defaultOptions.enabledMouseZoom && (o.wheelDelta > 0 || o.detail > 0 ? C("add") : (o.wheelDelta < 0 || o.detail < 0) && C("reduce"));
    }, C = (o) => {
      o === "add" && e.imgScale < 4 ? e.imgScale += 0.1 : o === "reduce" && e.imgScale > 0.5 && (e.imgScale -= 0.1);
    }, Y = (o) => {
      const { pageX: t, pageY: n } = o;
      e.startPageX = t - e.imgLeft, e.startPageY = n - e.imgTop, document.addEventListener("mousemove", E, !1), document.addEventListener("mouseup", S, !1), o.preventDefault();
    }, h = (o) => {
      o.keyCode === 27 && e.defaultOptions.enabledEscClose && (e.show = !1);
    }, S = () => {
      document.removeEventListener("mousemove", E, !1);
    }, E = (o) => {
      const { pageX: t, pageY: n } = o;
      e.imgTop = n - e.startPageY, e.imgLeft = t - e.startPageX, w(o);
    }, w = (o) => {
      o.preventDefault();
    }, X = () => {
      e.imgList = [], e.currentImg = "", e.currentIndex = 0, e.imgKey = "", e.imgTop = 0, e.imgLeft = 0, e.startPageX = 0, e.startPageY = 0, e.imgScale = 1, e.imgRotate = 0;
    };
    J(
      () => e.show,
      (o) => {
        o ? (document.body.style.overflow = "hidden", document.addEventListener("mousemove", w, !1), document.addEventListener("keydown", h, !1)) : (document.body.style.overflow = "", document.removeEventListener("mousemove", w, !1), document.removeEventListener("mouseup", S, !1), document.removeEventListener("keydown", h, !1), X());
      },
      { immediate: !0 }
    );
    const { defaultOptions: I, show: U, currentImg: Q, currentIndex: D, imgList: f, imgKey: b, imgTop: Z, imgLeft: G, imgScale: O, imgRotate: V } = _(e);
    return i({
      state: e
    }), (o, t) => l(U) ? (g(), m("div", {
      key: 0,
      class: "preview-wrap",
      onMousewheel: P
    }, [
      s("div", {
        class: "preview",
        onClick: x
      }, [
        s("img", {
          class: "preview-content",
          src: l(Q),
          style: K({ top: l(Z) + "px", left: l(G) + "px", transform: `scale(${l(O)}) rotateZ(${l(V)}deg)`, ...l(I).previewStyle }),
          onClick: v(w, ["stop"]),
          onMousedown: Y
        }, null, 44, ge),
        s("div", {
          class: "preview-footer",
          onClick: v(w, ["stop"])
        }, [
          s("ul", de, [
            l(f).length ? (g(), m("li", {
              key: 0,
              class: "icon-btn",
              onClick: t[0] || (t[0] = (n) => d("last"))
            }, we)) : B("", !0),
            s("li", {
              class: "icon-btn",
              onClick: t[1] || (t[1] = (n) => c("left"))
            }, Be),
            s("li", {
              class: "icon-btn",
              onClick: t[2] || (t[2] = (n) => C("reduce"))
            }, pe),
            s("li", {
              class: "icon-btn",
              onClick: t[3] || (t[3] = (n) => O.value = 1)
            }, ke),
            s("li", {
              class: "icon-btn",
              onClick: t[4] || (t[4] = (n) => C("add"))
            }, Se),
            s("li", {
              class: "icon-btn",
              onClick: t[5] || (t[5] = (n) => c("right"))
            }, Ie),
            l(f).length ? (g(), m("li", {
              key: 1,
              class: "icon-btn",
              onClick: t[6] || (t[6] = (n) => d("next"))
            }, Qe)) : B("", !0)
          ]),
          l(f).length ? (g(), m(M, { key: 0 }, [
            s("div", De, [
              (g(!0), m(M, null, W(l(f), (n, p) => (g(), m("div", {
                id: "thumb-item-" + p,
                key: p,
                class: "thumb-item",
                style: K({ background: l(D) === p ? l(I).activeColor : "" }),
                onClick: (Ye) => H(n, p)
              }, [
                s("img", {
                  src: l(b) ? n[l(b)] : n
                }, null, 8, Oe)
              ], 12, be))), 128))
            ]),
            s("div", Ke, y(l(D) + 1) + " / " + y(l(f).length), 1)
          ], 64)) : B("", !0)
        ], 8, me),
        s("span", {
          class: "close-btn icon-btn",
          onClick: t[7] || (t[7] = (n) => U.value = !1)
        }, ye),
        e.defaultOptions.showDownloadBtn ? (g(), m("span", {
          key: 0,
          class: "download-btn icon-btn",
          onClick: t[8] || (t[8] = v((n) => l(ae)(l(Q)), ["stop"]))
        }, Fe)) : B("", !0)
      ])
    ], 32)) : B("", !0);
  }
});
const He = (A, i) => {
  const e = A.__vccOpts || A;
  for (const [c, d] of i)
    e[c] = d;
  return e;
}, xe = /* @__PURE__ */ He(Re, [["__scopeId", "data-v-269cfa50"]]);
let r = null, k = {};
function Ze(A, i = {}) {
  R(i) && (k = i), L(), A.config.globalProperties.$preview = F;
}
function L() {
  var c;
  const A = z(xe), i = document.createElement("div");
  $(A, i), document.body.appendChild(i), r = (c = A.component.exposed) == null ? void 0 : c.state, r.defaultOptions = { ...r.defaultOptions, ...k };
}
function F(A = "", i = [], e = "") {
  if (r === null && L(), r !== null) {
    if (A === "" || A === null || A === void 0)
      throw "Vue3PreviewImage：请传入参数";
    if (typeof A == "number") {
      if (!i || !i.length)
        throw "Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组";
      r.currentImg = e ? i[A][e] : i[A], r.currentIndex = A;
    } else
      r.currentImg = A, i.length || (r.imgList = [A]);
    r.imgList = i, r.imgKey = e, r.show = !0;
  }
}
F.close = () => {
  Pe();
};
function Pe() {
  r !== null && r.show && (r.show = !1);
}
function Ge(A) {
  R(A) && (r !== null ? r.defaultOptions = { ...r.defaultOptions, ...A } : k = A);
}
function R(A) {
  return Object.prototype.toString.call(A) === "[object Object]";
}
export {
  Pe as closePreview,
  Ze as default,
  F as preview,
  Ge as setPreviewDefaultOptions
};
