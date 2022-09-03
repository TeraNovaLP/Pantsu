import test from "ava";
import { UrlUtils } from "../src/index";

test("SplitPath", (t) => {
    const url = "https://github.com/TeraNovaLP/Pantsu";
    const expected = ["TeraNovaLP", "Pantsu"];

    t.deepEqual(UrlUtils.splitPath(url), expected);
    t.deepEqual(UrlUtils.splitPath(new URL(url)), expected);
});
