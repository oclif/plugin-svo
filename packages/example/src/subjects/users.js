"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svo = require("@oclif/plugin-svo");
const axios_1 = require("axios");
class User {
    constructor(opts) {
        this.id = opts.id;
        this.name = opts.name;
    }
}
exports.User = User;
const view = {
    id: {
        get: row => row.id
    },
    name: {},
};
exports.default = svo.subject({
    verbs: {
        list: svo.list({
            view,
            async fetch() {
                const { data } = await axios_1.default.get('https://jsonplaceholder.typicode.com/users');
                return data.map(d => new User(d));
            }
        })
    },
});
