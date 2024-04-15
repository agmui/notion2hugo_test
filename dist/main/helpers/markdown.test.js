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
Object.defineProperty(exports, "__esModule", { value: true });
const donwload_1 = require("./donwload");
const markdown_1 = require("./markdown");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, donwload_1.saveImageMap)(s3url, "static/pimages/page-object-id/abcdefgh-1234-5678-abcd-123456789012-Untitled.png");
}));
describe("convertS3ImageUrl", () => {
    test("Matchs the AWS url", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, markdown_1.convertS3ImageUrl)(md_one);
        expect(result).toBe(md_one_expected);
    }));
});
const s3url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abcdefgh-1234-5678-abcd-123456789012/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=CREDENTIALCREDENTIALCREDENTIAL0%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=signaturedummyasignaturedummyasignaturedummyasignaturedummyadef3&X-Amz-SignedHeaders=host&x-id=GetObject";
const md_one = `
# Hello notion with s3 image

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abcdefgh-1234-5678-abcd-123456789012/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=CREDENTIALCREDENTIALCREDENTIAL0%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=signaturedummyasignaturedummyasignaturedummyasignaturedummyadef3&X-Amz-SignedHeaders=host&x-id=GetObject)

![Image Title](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abcdefgh-1234-5678-abcd-123456789012/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=CREDENTIALCREDENTIALCREDENTIAL0%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=signaturedummyasignaturedummyasignaturedummyasignaturedummyadef3&X-Amz-SignedHeaders=host&x-id=GetObject)

end of md
`;
const md_one_expected = `
# Hello notion with s3 image

![](/pimages/page-object-id/abcdefgh-1234-5678-abcd-123456789012-Untitled.png)

![Image Title](/pimages/page-object-id/abcdefgh-1234-5678-abcd-123456789012-Untitled.png)

end of md
`;
//# sourceMappingURL=markdown.test.js.map