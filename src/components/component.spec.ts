import { describe, expect, it } from "vitest";

describe("intellij test runner window", () => {

    it("works", () => {
        expect("A").toEqual("A");
    })

    it("should jump to line with failed expect", () => {
        const someText = "ABC";

        expect(someText).toEqual("DEF");
    })

})