"use strict";
import axios from 'axios';


var Odoo = function (config) {
    config = config || {};
    this.host = config.host;
    this.database = config.database;
    this.username = config.username || null;
    this.password = config.password || null;
    this.session_id = config.session_id || null;
    this.context = config.context;
};
Odoo.prototype.authenticate = function (cb) {
    var body = JSON.stringify({
        params: {
            db: this.database,
            login: this.username,
            password: this.password,
        },
    });
    var requestConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Content-Length": body.length,
        },
        data: body,
        withCredentials: false,
        baseURL: this.host,
        url: "/web/session/authenticate",
    };
    axios(requestConfig).then(
        (response) => {
            console.log(response);
            if (response.data.error) {
                this.context = response.data.result.user_context;
                cb(response.data.error, null);
            } else {
                cb(null, response.data.result);
            }
        },
        (error) => {
            cb(error, null);
        }
    );
};

Odoo.prototype.category_list = function (model, params, callback) {
    this._request(
        "/zalo/list_category_product",
        {
            model: model,
            method: "call",
            args: [],
            kwargs: {
                context: this.context,
                domain: params.domain,
                offset: params.offset,
                limit: params.limit,
                order: params.order,
                fields: params.fields,
            },
        },
        callback
    );
};
// Call RPC Controller Generic
Odoo.prototype.rpc_call = function (endpoint, params, callback) {
    this._request(endpoint, params, callback);
};
// Private functions
Odoo.prototype._request = function (path, params, cb) {
    params = params || {};
    var url = this.host + (path || "/") + "";
    var headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    if (this.session_id) {
        headers["cookie"] = "session_id=" + this.session_id + ";";
    }
    var requestConfig = {
        method: "POST",
        headers: headers,
        data: JSON.stringify({
            jsonrpc: "2.0",
            id: new Date().getUTCMilliseconds(),
            method: "call",
            params: params,
        }),
        withCredentials: false,
        baseURL: this.host,
        url: (path || "/") + "",
    };

    axios(requestConfig).then(
        (response) => {
            if (response.data.error) {
                cb(response.data.error, null);
            } else {
                cb(null, response.data.result);
            }
        },
        (err) => {
            cb(err, null);
        }
    );
};

export default Odoo
