

//兼容一个元素绑定多个事件问题
function bang(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
    }else{
	 obj.attachEvent('on'+ev,fn);
}
}
//第一个孩子
//function first(obj){
//	var result = obj.firstElementChild||obj.firstChild;
//	if(result&&result.nodeType==1){
//		return result;
//	}else{
//		return null;
//	}
//}
//最后一个孩子
function last(obj){
	var result = obj.lastElementChild||last.firstChild;
	if(result&&result.nodeType==1){
		return result;
	}else{
		return null;
	}
}
function first(obj) {
			//    传入 obj 之后  
			//     标准浏览器中 可以识别第一个属性 获取的是第一个元素节点类型
			//     非标准    不能识别第一个属性 为假 然后走后面  可以识别第二个属性  并且只包含元素节点
			//  如果一个子节点都没有  标准和非标准浏览器都获取不到元素节点  则  firstEle不存在 ，那么返回null
			//  如果里面只有一个文本节点 那么 文本节点也是存在的 是真的  所以要再加一个条件 限制住文本
			var firstEle = obj.firstElementChild || obj.firstChild;
			
			if(firstEle&&firstEle.nodeType==1){
				return firstEle;
			}else {
				return null;
			}
			
		}


