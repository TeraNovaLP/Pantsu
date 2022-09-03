/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export default class StringUtils {
    public static equalsIgnoreCase(str1: string, str2: string): boolean {
        return str1?.toLowerCase() == str2?.toLowerCase();
    }

    public static includesIgnoreCase(source: string, includes: string) {
        return source?.toLowerCase()?.includes(includes?.toLowerCase());
    }

    /**
     * Checks if the string could be parsed as JSON.
     */
    public static validJSON(str: string) {
        if (!str) return false;

        try {
            JSON.parse(str);
            return true;
        } catch (error) {
            return false;
        }
    }
}
