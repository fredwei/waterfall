# waterfall.js

一个压缩后不到2kb的瀑布流插件
依赖jquery

-------

##兼容
支持ie6+（jquery版本需支持低版本ie）

-------

##使用

###html

class可自定义，块内必须有图片

```html
<div id="waterfall" class="waterfall">
    <div class="waterfall_item"><img src="xx_01.jpg" /></div>
	...
	<div class="waterfall_item"><img src="xx_20.jpg" /></div>
</div>
```

###css

```css
.waterfall{
	position: relative;
}
.waterfall_item{
	position: absolute;
	top: 0;
	left: 0;

	opacity: 0;

	transition: opacity .2s, top .3s, left .3s, width .2s, height .2s;
}
.waterfall_item img{
	display: block;
	width: 100%;
}
```

###js

```javascript
waterfall.init({
	box: '#waterfall',
	item: '.waterfall_item',
	columns: 4
});
```
-------

##接口

###配置项

<table>
    <thead>
    	<tr>
    		<th>参数名</th>
    		<th>类型</th>
    		<th>默认值</th>
    		<th>说明</th>
    	</tr>
    </thead>
    <tbody>
    	<tr>
    		<td>box</td>
    		<td>string</td>
    		<td>'.waterfall'</td>
    		<td>容器class</td>
    	</tr>
    	<tr>
    		<td>item</td>
    		<td>string</td>
    		<td>'.waterfall_item'</td>
    		<td>子项class</td>
    	</tr>
    	<tr>
    		<td>itemimg</td>
    		<td>string</td>
    		<td>'img'</td>
    		<td>子项中的img</td>
    	</tr>
    	<tr>
    		<td>columns</td>
    		<td>number</td>
    		<td>3</td>
    		<td>列数</td>
    	</tr>
    	<tr>
    		<td>between</td>
    		<td>string/number</td>
    		<td>'1%'</td>
    		<td>间距</td>
    	</tr>
    	<tr>
    		<td>isResize</td>
    		<td>boolean</td>
    		<td>true</td>
    		<td>是否响应容器变化</td>
    	</tr>
    	<tr>
    		<td>initcallback</td>
    		<td>function</td>
    		<td>返回容器的jquery对象</td>
    		<td>初始化完成后的回调函数</td>
    	</tr>
    </tbody>
</table>
-------
```javascript
waterfall.init({
	// 容器class
	box: '.waterfall',
	// 子项class
	item: '.waterfall_item',
	// 子项img class
	itemimg: 'img',
	// 列数
	columns: 3,
	// 间距
	between: '1%',
	// 是否响应容器变化
	isResize: true,
	// 渲染完成后回调
	initcallback: function($box){}
});
```
-------

###方法

初始化瀑布流
```javascript
waterfall.init();
```

设置参数
```javascript
waterfall.set({
	columns: 3,
	between: 10
});
```

重置瀑布流
```javascript
waterfall.reload();
```

图片异步加载
```javascript
// 传入容器jquery对象及加载加载完成后的回调方法
waterfall.imgload($box, function(imgArr){
	// 例如，带有图片下标及宽高
	// imgArr[0]
	// { mid: 0, w: 100, h: 200 };
});
```

##版权
可任意使用并修改，请不要去掉头部注释