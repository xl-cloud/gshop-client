/*
* 包含n个接口请求的函数的模块
* 函数的返回值:promise对象
* */

import ajax from './ajax'

//1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

//2.获取食品分类列表
export const reqFoodsTypes = () => ajax(`/index_category`)

//3.根据经纬度获取商铺列表
export const reqShops = (latitude,longitude) => ajax(`/shops`,{latitude,longitude})
