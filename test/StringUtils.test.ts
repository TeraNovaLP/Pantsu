/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import test from "ava";
import { StringUtils } from "../src/index";

test("EqualsIgnoreCase", (t) => {
    t.true(StringUtils.equalsIgnoreCase("Test", "tEsT"));
});

test("IncludesIgnoreCase", (t) => {
    t.true(StringUtils.includesIgnoreCase("Test - Includes", "inCluDeS"));
});

test("ValidJSON", (t) => {
    t.true(StringUtils.validJSON(JSON.stringify({ test: "Test" })));
    t.false(StringUtils.validJSON("Test"));
});
