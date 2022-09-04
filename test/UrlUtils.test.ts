/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import test from "ava";
import { UrlUtils } from "../src/index";

test("SplitPath", (t) => {
    const url = "https://github.com/TeraNovaLP/Pantsu";
    const expected = ["TeraNovaLP", "Pantsu"];

    t.deepEqual(UrlUtils.splitPath(url), expected);
    t.deepEqual(UrlUtils.splitPath(new URL(url)), expected);
});
