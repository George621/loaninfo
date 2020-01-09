/*
自定义Promise函数模块IIFE
*/
(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  /*
  Promise: 构造函数
  excutor: 执行器函数
  */
  function Promise(excutor) {
    // 将当前Promise对象保存起来
    const self = this
    self.status = PENDING // 给 promise指定初始状态 pending
    self.data = undefinded   // 指定储存结果数据当属性
    self.callbacks = []     // 每个元素当结构{ onResolved(){}, onRejected(){}}

    function resolve(value) {
      // 如果当前状态不是pending 直接结束
      if (self.status !== PENDING) {
        return
      }

      // 将状态改为 resolved
      self.status = RESOLVED
      // 保存value数据
      self.data = value
      // 如果有待执行当callback函数，立即一部执行回调函数
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入队列执行所有成功回调，成功或者失败的回调函数永远异步执行
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        }, 0)
      }
    }
    function reject(reason) {
      // 如果当前状态不是pending 直接结束
      if (self.status !== PENDING) {
        return
      }
      // 将状态改为 rejected
      self.status = REJECTED
      // 保存 value数据
      self.data = reason
      // 如果有代执行当callback函数，立即一部执行回调函数onRejected
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入队列执行所有成功回调
          self.callbacks.froEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        }, 0)
      }
    }

    // 立即同步执行excutor
    try {
      excutor(resolve, reject)
    } catch (error) { // 如果执行器抛出异常，promise状态改为rejected
      reject(error)
    }
  }
  /*
  Promsie原型对象的then()
  指定成功失败的回调函数
  返回一个新的promise对象
  */
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this

    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
      if (self.status === PENDING) { // 如果是pengding状态，保存回调函数
        self.callbacks.push({
          onResolved(value){onResolved(self.data)}, // 执行的结果影响下一个promsie
          onRejected(reason){onRejected(self.data)}
        })
      } else if (self.status === RESOLVED) {
        setTimeout(() => {
          /*
          1.如果执行抛出异常， return的promise 就会失败， reason就是error
          2.如果回调函数执行返回非promise,return 的promise 就是成功，value 就是返回的值
          3.如果回调函数执行返回是promise,return 的promise 就是根据这个promise的结果
          */
          try {
            const result = onResolved(self.data)
            if (result instanceof Promise) {
              // 3.如果回调函数执行返回是promise,return 的promise 就是根据这个promise的结果
              // result.then(
              //   value => resolve(value), // 当result 成功时，让return 的promsie 也成功，
              //   reason => reject(reason)// 当result 失败时，让return 的promsie 也失败
              // )
              result.then(resolve, reject)
            } else {
              // 2.如果回调函数执行返回非promise,return 的promise 就是成功，value 就是返回的值
              resolve(value)
            }
          } catch (error) {
            reject(error)
          }
        })
      } else {
        setTimeout(() => {
          /*
          1.如果执行抛出异常， return的promise 就会失败， reason就是error
          2.如果回调函数执行返回非promise,return 的promise 就是成功，value 就是返回的值
          3.如果回调函数执行返回是promise,return 的promise 就是根据这个promise的结果
          */
          try {
            const result = onRejected(self.data)
            if (result instanceof Promise) {
              // 3.如果回调函数执行返回是promise,return 的promise 就是根据这个promise的结果
              // result.then(
              //   value => resolve(value), // 当result 成功时，让return 的promsie 也成功，
              //   reason => reject(reason)// 当result 失败时，让return 的promsie 也失败
              // )
              result.then(resolve, reject)
            } else {
              // 2.如果回调函数执行返回非promise,return 的promise 就是成功，value 就是返回的值
              resolve(value)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
  /*
    Promsie原型对象的catch()
    指定失败的回调函数
    返回一个新的promise对象
  */
  Promise.prototype.catch = function (onRejected) {

  }
  /*
    Promsie原型对象的resolve()
    指定成功的回调函数
    Promsie原型对象的reject()
    指定失败的回调函数
  */
  Promise.resolve = function (value) {

  }
  Promise.reject = function (reason) {

  }
  /*
    Promsie原型对象的all()
    只有当所有promise都成功才成功，否则失败
  */
  Promise.all = function (promises) {

  }
  /*
    Promsie原型对象的race()
    返回一个promise，其结果由第一个完成当promise决定
  */
  Promise.race = function (promises) {

  }

  window.Promise = Promise
})(window)