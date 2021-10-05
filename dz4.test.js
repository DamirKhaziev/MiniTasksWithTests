import {wallpaperVolume, room} from "./dz4";

test("wallPaperVolume", () => {
        const result = wallpaperVolume(room)
        expect(result).toBe(18)
    }
)