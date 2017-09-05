import {assert} from "chai";
import getMoment from "../../imports/utils/getMoment";

describe("getMoment", () => {

    it("Should return a valid moment object with no input params", () => {
        const date = getMoment();
        assert.isOk(date.isValid());
    });

    it("Should return a valid moment object with valid input param", () => {
        const date = getMoment("2017-09-04T07:00:00.000Z").toISOString();
        assert.equal(date, "2017-09-04T07:00:00.000Z");
    });

    it("Should throw with and invalid input param", () => {
        assert.throws(() => getMoment("invalid"));
    });

});
