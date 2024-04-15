"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
describe("urlize() returns kebab-case string", () => {
    describe("When it's a perfect string consisting only of alphanumericals and slashes", () => {
        test("it returns same value as the input", () => {
            const string = "2016y-15000-pt-gift";
            const result = (0, string_1.urlize)(string);
            expect(result).toEqual("2016y-15000-pt-gift");
        });
        test("it returns same value as the input", () => {
            const string = "/2016y-15000-pt-gift";
            const result = (0, string_1.urlize)(string);
            expect(result).toEqual("/2016y-15000-pt-gift");
        });
    });
    test("With slash", () => {
        const string = "/Hello Notion  ";
        const result = (0, string_1.urlize)(string);
        expect(result).toEqual("/hello-notion");
    });
    test("Without slash", () => {
        const string = "Hello Notion  ";
        const result = (0, string_1.urlize)(string);
        expect(result).toEqual("/hello-notion");
    });
    test("Without slash", () => {
        const string = "Notion / Hello Notion  ";
        const result = (0, string_1.urlize)(string);
        expect(result).toEqual("/notion/hello-notion");
    });
});
//# sourceMappingURL=string.test.js.map