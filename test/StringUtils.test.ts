import test from "ava";
import { StringUtils } from "../src/index";

test("EqualsIgnoreCase", (t) => {
    t.true(StringUtils.equalsIgnoreCase("Test", "tEsT"));
});

test("IncludesIgnoreCase", (t) => {
    t.true(StringUtils.includesIgnoreCase("Test - Includes", "inCluDeS"));
});
