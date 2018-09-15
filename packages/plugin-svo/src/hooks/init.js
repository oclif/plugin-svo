"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const hook = async function (opts) {
    const { id, argv } = opts;
    if (id && id.startsWith('@')) {
        try {
            const subjectRoot = path.join(this.config.root, 'src/subjects');
            const subjectName = id.split('@')[1].split(':')[0];
            const subject = require(path.join(subjectRoot, subjectName)).default;
            await subject.run(id, argv);
        }
        catch (err) {
            this.error(err);
        }
        this.exit(0);
    }
};
exports.default = hook;
