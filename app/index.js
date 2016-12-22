// 图片地址集合
var imgArr = [
	"http://img2.91.com/uploads/allimg/150319/59-1503191P5570-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191P5190-L.png",
	"http://img1.91.com/uploads/allimg/150303/59-1503031516380-L.png",
	"http://img2.91.com/uploads/allimg/150303/59-1503031514550-L.png",
	"http://manager.91.com/uploads/130827/59-130RG20254Q3.jpg",
	"http://img3.91.com/uploads/allimg/120917/1-12091G020290-L.jpg",
	"http://manager.91.com/uploads/150108/59-15010Q5061E51.png",
	"http://manager.91.com/uploads/150108/59-15010Q50UM40.png",
	"http://manager.91.com/uploads/131114/25-131114154AcP.jpg",
	"http://manager.91.com/uploads/150108/59-15010Q52425X6.png",
	"http://img2.91.com/uploads/allimg/121206/59-1212061532470-L.jpg",
	"http://manager.91.com/uploads/131016/25-131016203UJ33.jpg",
	"http://manager.91.com/uploads/130827/59-130RG20254Q3.jpg",
	"http://img3.91.com/uploads/allimg/120917/1-12091G020290-L.jpg",
	"http://img3.91.com/uploads/allimg/120910/1-1209101019320-L.jpg",
	"http://img3.91.com/uploads/allimg/120910/1-1209101154120-L.jpg",
	"http://img2.91.com/uploads/allimg/120910/1-120910101A30-L.jpg",
	"http://img2.91.com/uploads/allimg/120904/1-120Z41425150-L.jpg",
	"http://manager.91.com/uploads/150108/59-15010Q5061E51.png",
	"http://manager.91.com/uploads/150108/59-15010Q50UM40.png",
	"http://manager.91.com/uploads/131114/25-131114154AcP.jpg",
	"http://manager.91.com/uploads/150108/59-15010Q52425X6.png",
	"http://img1.91.com/uploads/allimg/121206/59-1212061532470-L.jpg",
	"http://manager.91.com/uploads/131016/25-131016203UJ33.jpg",
	"http://img1.91.com/uploads/allimg/150319/59-1503191P4440-L.png",
	"http://img2.91.com/uploads/allimg/150319/59-1503191P4030-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191P3290-L.png",
	"http://img2.91.com/uploads/allimg/150319/59-1503191P2530-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191P2100-L.png",
	"http://img3.91.com/uploads/allimg/150319/59-1503191P1350-L.png",
	"http://img3.91.com/uploads/allimg/150319/59-1503191P0550-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191K5450-L.png",
	"http://img2.91.com/uploads/allimg/150319/59-1503191G4550-L.png",
	"http://img1.91.com/uploads/allimg/150312/59-150312143G70-L.png",
	"http://img3.91.com/uploads/allimg/150304/59-1503041T3240-L.png",
	"http://img1.91.com/uploads/allimg/150407/59-15040GG2090-L.png",
	"http://img2.91.com/uploads/allimg/150407/59-15040GF0110-L.png",
	"http://img1.91.com/uploads/allimg/150407/59-15040GAT00-L.png",
	"http://img1.91.com/uploads/allimg/150407/59-15040GAP00-L.png",
	"http://img3.91.com/uploads/allimg/150331/59-1503311RQ20-L.png",
	"http://img1.91.com/uploads/allimg/150320/59-1503201P3450-L.png",
	"http://img2.91.com/uploads/allimg/150320/59-1503201P2410-L.png",
	"http://img1.91.com/uploads/allimg/150320/59-1503201P1560-L.png",
	"http://img2.91.com/uploads/allimg/150320/59-1503201P0410-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191H1570-L.png",
	"http://img1.91.com/uploads/allimg/150319/59-1503191H1040-L.png",
	"http://img3.91.com/uploads/allimg/150319/59-1503191G9520-L.png",
	"http://img1.91.com/uploads/allimg/150312/59-1503121436060-L.png",
	"http://img2.91.com/uploads/allimg/150312/59-150312142G40-L.png",
	"http://img3.91.com/uploads/allimg/150311/59-150311143R60-L.png",
	"http://img1.91.com/uploads/allimg/150311/59-1503111433290-L.png",
	"http://img1.91.com/uploads/allimg/150311/59-1503111429430-L.png",
	"http://img1.91.com/uploads/allimg/140210/59-1402101624220-L.jpg",
	"http://img2.91.com/uploads/allimg/130815/59-130Q51PG60-L.jpg",
	"http://img3.91.com/uploads/allimg/130725/59-130H51A6120-L.jpg",
	"http://img2.91.com/uploads/allimg/130725/59-130H51A3220-L.jpg",
	"http://img2.91.com/uploads/allimg/130702/59-130F21526310-L.jpg",
	"http://img2.91.com/uploads/allimg/130607/59-13060G610280-L.jpg",
	"http://img1.91.com/uploads/allimg/130516/59-1305161513110-L.jpg",
	"http://img3.91.com/uploads/allimg/130425/59-1304251G6440-L.jpg",
	"http://img1.91.com/uploads/allimg/130225/1-1302251G1320-L.jpg",
	"http://img3.91.com/uploads/allimg/130118/59-13011QH9130-L.jpg",
	"http://img2.91.com/uploads/allimg/121225/59-1212251154440-L.jpg",
	"http://img3.91.com/uploads/allimg/150310/59-1503101G2270-L.png",
	"http://img1.91.com/uploads/allimg/150121/59-1501211GQ70-L.png",
	"http://img3.91.com/uploads/allimg/150121/59-1501211GH50-L.png",
	"http://img2.91.com/uploads/allimg/150121/59-1501211G6280-L.png",
	"http://img3.91.com/uploads/allimg/150310/59-1503101G2270-L.png",
	"http://img1.91.com/uploads/allimg/150121/59-1501211GQ70-L.png",
	"http://img3.91.com/uploads/allimg/150121/59-1501211GH50-L.png",
	"http://img2.91.com/uploads/allimg/150121/59-1501211G6280-L.png",
	"http://img3.91.com/uploads/allimg/150121/59-1501211G5500-L.png",
	"http://img2.91.com/uploads/allimg/150121/59-1501211G5100-L.png",
	"http://img2.91.com/uploads/allimg/140910/59-1409101631430-L.png",
	"http://img3.91.com/uploads/allimg/140910/59-140910162R90-L.png",
	"http://img3.91.com/uploads/allimg/140317/59-14031GG5500-L.jpg",
	"http://img1.91.com/uploads/allimg/140317/59-14031G630090-L.jpg",
	"http://img2.91.com/uploads/allimg/140317/59-14031G62U40-L.jpg",
	"http://img1.91.com/uploads/allimg/140220/59-1402201KH20-L.jpg",
	"http://img2.91.com/uploads/allimg/140220/59-1402201J3070-L.jpg",
	"http://img3.91.com/uploads/allimg/140124/59-1401241RP70-L.jpg",
	"http://img2.91.com/uploads/allimg/140124/59-1401241RH40-L.jpg",
	"http://img1.91.com/uploads/allimg/140124/59-1401241R6170-L.jpg",
	"http://img1.91.com/uploads/allimg/140124/59-1401241R4100-L.jpg",
	"http://img3.91.com/uploads/allimg/140121/59-140121161P20-L.jpg",
	"http://img3.91.com/uploads/allimg/150121/59-1501211G5500-L.png",
	"http://img3.91.com/uploads/allimg/150121/59-1501211G5100-L.png",
	"http://img1.91.com/uploads/allimg/140410/59-1404101HH90-L.jpg",
	"http://img3.91.com/uploads/allimg/140317/59-14031GG5500-L.jpg",
	"http://img1.91.com/uploads/allimg/140317/59-14031G630090-L.jpg",
	"http://img2.91.com/uploads/allimg/140317/59-14031G62U40-L.jpg",
	"http://img1.91.com/uploads/allimg/140220/59-1402201KH20-L.jpg",
	"http://img2.91.com/uploads/allimg/140220/59-1402201J3070-L.jpg",
	"http://img3.91.com/uploads/allimg/140124/59-1401241RP70-L.jpg",
	"http://img2.91.com/uploads/allimg/140124/59-1401241RH40-L.jpg",
	"http://img1.91.com/uploads/allimg/140124/59-1401241R6170-L.jpg",
	"http://img1.91.com/uploads/allimg/140124/59-1401241R4100-L.jpg",
	"http://img3.91.com/uploads/allimg/140121/59-140121161P20-L.jpg",
	"http://img3.91.com/uploads/allimg/150121/59-1501211G5500-L.png",
	"http://img3.91.com/uploads/allimg/150121/59-1501211G5100-L.png"
];

$(function(){
	// 初始化
	waterfall.init({
		box: '#waterfall',
		item: '.waterfall_item',
		columns: 4
	});

	// 加载更多
	$('#btn').on('click', function() {
		var _html = '',
			_btnTop = $(this).offset().top;

		for (var i = imgArr.length - 1; i >= 0; i--) {
			_html += '<div class="waterfall_item" style="top: '+ _btnTop +'px;"><img src="'+ imgArr[i] +'" alt=""></div>'
		}

		$('#waterfall').append(_html);

		waterfall.reload();

		return false;
	});

	// 设置
	$('#set').on('click', function(){
		waterfall.set({
			columns: ~~$.trim($('#col').val()) || 3,
			between: ~~$.trim($('#bwt').val()) || 10
		});

		return false;
	});

});