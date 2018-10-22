"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1_1 = require("@example/module-1");
exports.handler = (event, context, callback) => {
    const greeting = module_1_1.hello('A');
    const response = {
        statusCode: 200,
        body: greeting
    };
    callback(null, response);
};
