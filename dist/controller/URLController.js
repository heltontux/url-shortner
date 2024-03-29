"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const URL_1 = require("../database/model/URL");
const shortid_1 = __importDefault(require("shortid"));
const constants_1 = require("../config/constants");
class URLController {
    shorten(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const url = yield URL_1.URLModel.findOne({ originURL });
            if (url) {
                res.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortURL = `${constants_1.config.API_URL}/${hash}`;
            const newURL = yield URL_1.URLModel.create({ hash, shortURL, originURL });
            res.json(newURL);
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = {
                originURL: 'https://cloud.mongodb.com/v2/5f803311a6161b53c60d0f9a#clusters',
                hash: '41Hr3pd2A',
                shortURL: 'http://localhost:5000/41Hr3pd2A',
            };
            res.redirect(url.originURL);
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=URLController.js.map