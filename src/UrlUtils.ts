export default class UrlUtils {
    public static splitPath(url: string | URL) {
        return new URL(url)?.pathname?.split("/")?.filter(Boolean);
    }
}
