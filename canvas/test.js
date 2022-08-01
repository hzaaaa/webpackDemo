//第一步：获取canvas元素
var canvasDom = document.getElementById('canvasId');
//第二步：获取上下文
if (canvasDom.getContext) {
  //判断浏览器是否支持canvas
  //context是画布，getContext获取绘图上下文对象，也有名为WebGL的3d上下文
  var context = canvasDom.getContext('2d');
  context.fillStyle = '#000000'; //填充颜色
  context.fillRect(10, 10, 70, 70); //填充矩形，xy宽高(像素)
  context.lineWidth = 20; //边框宽度
  context.lineCap = 'butt'; //线条末端形状，butt平头，round圆头，square方头，
  context.lineJoin = 'bevel'; //线条交叉方式，round圆交，bevel斜交，miter斜接
  context.strokeStyle = 'red'; //描边颜色
  context.strokeRect(50, 50, 50, 50); //描边矩形
  context.clearRect(50, 50, 20, 20); //清除一块矩形区域

  // context.arc(200, 100, 20, 0, 2 * Math.PI, false); //绘制圆参数：圆心坐标，半径，起始角度，是否顺时针。

  context.beginPath(); //创建路径
  context.strokeStyle = 'blue'; //描边颜色
  // context.arc()
  //arcTo绘制圆弧
  // context.arc(100, 100, 30, 0, 1 * Math.PI, false); //绘制圆参数：圆心坐标，半径，起始角度，是否顺时针。
  context.moveTo(200, 100); //移动绘图游标
  context.lineTo(200, 15); //绘制直线，从游标位置惠子直线到参数，
  context.lineTo(300, 15); //绘制直线，从游标位置惠子直线到参数，

  context.closePath();
  context.stroke(); //用strokeStyle描边
  // context.closePath();
  context.beginPath(); //创建路径
  context.strokeStyle = 'green'; //描边颜色
  context.moveTo(300, 100); //移动绘图游标
  context.lineTo(300, 15); //绘制直线，从游标位置惠子直线到参数，
  context.lineTo(250, 15); //绘制直线，从游标位置惠子直线到参数，
  //bezierCurveTo绘制曲线，quadraticCurveTo绘制二次曲线，reac绘制矩形，
  // context.fillStyle = 'rgba(0,0,0,1)';
  // context.stroke(); //用strokeStyle描边
  // context.fill(); //用fillStyle填充
  context.stroke(); //用strokeStyle描边
  context.closePath();
  context.stroke(); //用strokeStyle描边
  // context.font = 'bold 14px Arial'; //设置文本样式，大小，字体
  // context.textAlign = 'center'; //文本对齐方式，start、end
  // context.textBaseline = 'middle'; //上下对齐方式，top、middle、bottom
  // context.rotate(Math.PI / 12); //旋转角度，scale缩放比例，
  // context.fillText('文本', 200, 100); //fillText使用fillStyle，strokeText使用strokeStyle
  // context.globalAlpha = 0.5; //设置全局透明度
  // //context.save();                   //保存当前状态
  // context.translate(200, 200); //坐标平移，
  // context.rotate(-Math.PI / 12); //旋转角度，scale缩放比例，
  // //transform矩阵变换，setTransform先恢复默认再矩阵变换
  // context.rotate(Math.PI / 4); //旋转角度，scale缩放比例，
  // context.scale(0.5, 0.5);
  // // context.fillText('文本', 200, 50);
  // context.zIndex = 1;
  // context.fillRect(-35, -35, 70, 70); //描边矩形
  // context.translate(0, 50); //坐标平移，
  // context.rotate(Math.PI / 4); //旋转角度，scale缩放比例，
  // context.fillRect(-35, -35, 70, 70); //描边矩形

  // var gnt = context.createRadialGradient(200, 300, 50, 200, 200, 200);
  // gnt.addColorStop(1, 'red');
  // gnt.addColorStop(0, 'green');
  // context.fillStyle = gnt;
  // context.fillRect(0, 0, 800, 600);

  // context.rotate(-Math.PI / 2); //旋转角度，scale缩放比例，
}
