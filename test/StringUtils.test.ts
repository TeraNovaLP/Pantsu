import test from "ava";
import { StringUtils } from "../src/index";

test("EqualsIgnoreCase", (t) => {
    t.true(StringUtils.equalsIgnoreCase("Test", "tEsT"));
});
