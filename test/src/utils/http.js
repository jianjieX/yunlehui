/**
 * 封装请求
 *
 * @date 2019-08-15
 * @author chenyongzheng
 */

// 引入axios
import axios from 'axios';

// 引入Vue
import Vue from 'vue';

// 引入elementUI Message模块
import {Message} from 'element-ui';

/**
 * Http
 * @type {{ajaxPut(*=, *=): Promise<any>, handleError(*=): void, ajaxDelete(*, *): Promise<any>, ajaxGet(*=, *=): Promise<any>, ajaxPost(*=, *=): Promise<any>}}
 */
const Http = {

  /**
   * get
   *
   * @param url
   * @param params
   * @param urlNum
   * @returns {Promise<any>}
   */
  ajaxGet(url, params, urlNum) {

    return new Promise((resolve, reject) => {

      axios.get(url, {params: params}).then((result) => {

        let tempResult = result.data.data;
        if(JSON.stringify(tempResult)!=='true'){
          tempResult.temp_Msg = result.data.msg;
          tempResult.temp_Status = result.data.status;
        }
        resolve(tempResult);
      }).catch((error) => {

        this.handleError(error);
        reject(error);
      });
    });
  },
  /**
   * post
   *
   * @param url
   * @param params
   * @param urlNum
   * @returns {Promise<any>}
   */
  ajaxPost(url, params, urlNum) {

    url = `${this.changeUrl(urlNum)}${url}`;

    return new Promise((resolve, reject) => {

      axios.post(url, params).then(result => {

        let tempResult = result.data.data;
        tempResult.temp_Msg = result.data.msg;
        tempResult.temp_Status = result.data.status;

        resolve(tempResult);
      }).catch((error) => {

        this.handleError(error);
        reject(error);
      });
    });
  },

  /**
   * put
   *
   * @param url
   * @param params
   * @param urlNum
   * @returns {Promise<any>}
   */
  ajaxPut(url, params, urlNum) {

    url = `${this.changeUrl(urlNum)}${url}`;

    return new Promise((resolve, reject) => {

      axios.put(url, params).then(result => {

        let tempResult = result.data.data;
        tempResult.temp_Msg = result.data.msg;
        tempResult.temp_Status = result.data.status;

        resolve(tempResult);
      }).catch((error) => {

        this.handleError(error);
        reject(error);
      });
    });
  },

  /**
   * delete
   *
   * @param url
   * @param params
   * @param urlNum
   * @returns {Promise<any>}
   */
  ajaxDelete(url, params, urlNum) {
    return new Promise((resolve, reject) => {

      axios.delete(url, {data: params}).then(result => {

        let tempResult = result.data.data;
        tempResult.temp_Msg = result.data.msg;
        tempResult.temp_Status = result.data.status;

        resolve(tempResult);
      }).catch((error) => {

        this.handleError(error);
        reject(error);
      });
    });
  },

  /**
   * 处理异常
   *
   * @param msg
   */
  handleError(msg) {

    Message({
      message: msg,
      type: 'error',
      duration: 3 * 1000
    });
  },

  /**
   * 选择url
   *
   * @param urlNum
   * @returns {string}
   */
  changeUrl(urlNum) {

    if (!urlNum) {

      return 'saas-server';
    }

    switch (urlNum) {
      case 1:
        return 'cloudclub-server';
    }

  }
};

// 挂在原型链
Vue.prototype.$http = Http;
