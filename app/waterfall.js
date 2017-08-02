/*

@mygithub: https://github.com/fredwei

@mysite: www.fredwei.com

@version v1.0.0

@License MIT

*/
(function(win, $){
	var _waterfall = {};

	var _defaults = {
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
		// 渲染后的opacity值
		opacity: 1,
		// 是否支持lazy插件
		lazy: true,
		// 渲染完成后回调
		initcallback: function($box){}
	};

	// 图片加载
	function _imgload(arr, callback) {
		var i = 0;
		var l = arr.length;
		var imgArr = [];

		function loadover(img){
			++i;

			// 图片集合
			imgArr.push({
				mid: i,
				w: img.width,
				h: img.height
			});

			if (i === l) {
				callback(imgArr);
			}else {
				loadimg();
			}
		}

		function loadimg() {
			var img = new Image();
			img.src = arr[i];
			
			if (img.complete) {
				loadover(img);
			}else{
				img.onerror = img.onload = function(){
					loadover(img);
				};
			}			
		};

		loadimg();
	}

	// 响应容器变化
	function _resize(){
		var _resizeTime;

		$(win).on('resize', function(){
			clearTimeout(_resizeTime);

			_resizeTime = setTimeout(function(){
				_waterfall.reload();
			}, 100);
		});
	};

	//获取数字数组的最大值
	function _getMaxValue(arr) {
		var a = arr[0];

		for (var k in arr) {
			if (arr[k] > a) {
				a = arr[k];
			}
		}

		return a;
	}

	//获取数字数组最小值的索引
	function _getMinKey(arr) {
		var a = arr[0];
		var b = 0;

		for (var k in arr) {
			if (arr[k] < a) {
				a = arr[k];
				b = k;
			}
		}

		return b;
	}

	// 数据格式化，四舍五入取整
	function getRound(obj){
		for (var i in obj) {
			obj[i] = Math.round(obj[i]);
		}

		return obj;
	}

	// 计算位置
	function _countPosition(){
		var i = 0,
			_betweenVal = parseFloat(_defaults.between),
			_itemLeftArr = [],
			_itemTopArr = [],
			// 子项位置
			_itemPosition = {
				row: 0,
				col: 0
			};

		// 判断间距是否为百分比
		if(typeof(_defaults.between) == 'string' && _defaults.between.indexOf('%')){
			_betweenVal = (_betweenVal/100)*_defaults.boxWidth;
		}

		// 间距值
		_defaults.betweenVal = _betweenVal;

		// 减去间距，每一项的宽度
		var _itemWidth = (_defaults.boxWidth - (_defaults.betweenVal*(_defaults.columns - 1)))/_defaults.columns;

		// 生成每一列的left值
		for (i = 0; i < _defaults.columns; i++) {
			
			if((i + 1) === _defaults.columns){
				// 最后一列，贴近右侧
				_itemLeftArr.push(_defaults.boxWidth - _itemWidth);
			}else if(i === 0){
				// 第一列
				_itemLeftArr.push(0);
			}else{
				_itemLeftArr.push((_itemWidth + _defaults.betweenVal) * i);
			}

			// 每列的高度，默认为0
			_itemTopArr.push(0);
		}

		// 设置每一项的css
		var $tempItem,
			_tempHeight = 0,
			_tempRoundValue;

		for (i = 0; i < _defaults.itemLen; i++) {
			// 临时值
			$tempItem = _defaults.$item.eq(i);
			
			// 列下标
			_itemPosition.col = _getMinKey(_itemTopArr);

			// 通过图片集合中图片原尺寸计算出高度
			_tempHeight = _itemWidth*_defaults.imgArr[i].h/_defaults.imgArr[i].w;

			// 数值四舍五入取整
			_tempRoundValue = getRound({
				'top': _itemTopArr[_itemPosition.row],
				'left': _itemLeftArr[_itemPosition.col],
				'width': _itemWidth,
				'height': _tempHeight,
				'opacity': _defaults.opacity
			});

			// 设置子项的样式
			$tempItem.css(_tempRoundValue);

			// 更新每列高度数组
			_itemTopArr[_itemPosition.row] += (_tempHeight + _defaults.betweenVal);

			// 获取每列top最小值下标
			_itemPosition.row = _getMinKey(_itemTopArr);
		}

		// 每列top中最大值
		_defaults.$box.css('height', _getMaxValue(_itemTopArr));

		typeof(_defaults.initcallback) === 'function' && _defaults.initcallback(_defaults.$box);
	}

	// 监听图片加载
	_waterfall.imgload = function(box, callback){
		var $box = $(box),
			_arr = [],
			_src = '';

		$box.find(_defaults.itemimg).each(function(){
			_src = _defaults.lazy ? ($(this).attr('data-original') || $(this).attr('src')) : $(this).attr('src');

			_arr.push(_src);
		});

		_imgload(_arr, callback);
	};

	// 初始化参数
	_waterfall.reload = function(){
		_waterfall.imgload(_defaults.box, function(imgArr){
			// 容器
			_defaults.$box = $(_defaults.box);
			_defaults.boxWidth = _defaults.$box.width();

			// 子项
			_defaults.$item = $(_defaults.item);
			_defaults.itemLen = _defaults.$item.length;

			_defaults.imgArr = imgArr;

			_countPosition();
		});
	}

	// 设置参数
	_waterfall.set = function(opts){
		// 允许设置的参数数组集合
		var _d = ['columns', 'between'],
			_isR = false;

		for (var i in opts) {
			if($.inArray(i, _d) > -1){
				_isR = true;
				_defaults[i] = opts[i];
			}
		}

		_isR && _waterfall.reload();
	};

	// 初始化
	_waterfall.init = function(opts){
		_defaults = $.extend(_defaults, opts);

		if(_defaults.isResize){
			_resize();
		}

		_waterfall.reload();
	};


	win.waterfall = _waterfall;

})(window, $);