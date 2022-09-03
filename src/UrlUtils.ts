/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export default class UrlUtils {
    /**
     * Splits the URL path into its segments.
     * @returns Array with path parts.
     */
    public static splitPath(url: string | URL) {
        return new URL(url)?.pathname?.split("/")?.filter(Boolean);
    }
}
