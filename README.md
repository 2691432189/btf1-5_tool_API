## 感谢 https://api.gametools.network/docs#/ 提供的api



####  1.获取用户详情

```js
/user/getUserInfo?userId=EmiliaAngel&type=5
//userId  用户id(必传)
//type    类型(1/5)
```

####  2.标记为可疑

```js
/user/addSuspicious?userId=EmiliaAngel
//userId  用户id(必传)
```

####  3.标记为确认

```js
/user/addConfirm?userId=EmiliaAngel
//userId  用户id(必传)
```

#### 4.获取用户武器信息

```js
/user/getUserWeapons?userId=EmiliaAngel&type=5
//userId  用户id(必传)
//type    类型(1/5)
```

#### 5.获取用户载具信息

```js
/user/getUserVehicles?userId=EmiliaAngel&type=5
//userId  用户id(必传)
//type    类型(1/5)
```

#### 6.获取用户兵种信息

```js
/user/getUserArms?userId=EmiliaAngel&type=1
//userId  用户id(必传)
//type    类型(1/5)
```