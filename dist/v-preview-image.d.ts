import { App } from 'vue';
import { CSSProperties } from 'vue';

/**
 * 关闭预览
 */
export declare function closePreview(): void;

/**
 * 默认配置
 */
declare interface DefaultOptions {
    /**
     * 开启点击遮罩关闭
     * 默认true
     */
    enabledMaskClose: boolean;
    /**
     * 开启esc按键关闭
     * 默认true
     */
    enabledEscClose: boolean;
    /**
     * 开启鼠标滚轮缩放
     * 默认true
     */
    enabledMouseZoom: boolean;
    /**
     * 预览图中选中图片的背景颜色
     * 默认rgba(239, 84, 78, 0.7)
     */
    activeColor: string;
    /**
     * 预览图的样式 可设置宽高
     */
    previewStyle: CSSProperties;
    /**
     * 显示下载按钮
     */
    showDownloadBtn: boolean;
}

/**
 * 通过use调用时挂载到vue实例
 * @param {Object} App
 * @param {Object} options
 */
declare function install(App: App, options?: {}): void;
export default install;

/**
 * @param {String|Number} current 当前预览的图片索引或者url
 * @param {Array} list 需要预览的图片数组 非必传 如果不传的话 current必须为url 不能为索引
 * @param {String} key 如果list里面的item是图片的url 则不需要，如果是对象的话，需传图片的在对象中的key。
 */
export declare function preview(current?: string | number, list?: any[], key?: string): void;

export declare namespace preview {
    var close: () => void;
}

/**
 * 设置预览默认配置
 */
export declare function setPreviewDefaultOptions(options: Partial<DefaultOptions>): void;

export { }
