import * as moment from "moment";

const getMoment = (inputDate?: string): moment.Moment => {
    const date = inputDate ? moment(inputDate, moment.ISO_8601).utc() : moment().utc();
    if (!date.isValid()) {
        throw new Error("Invalid date");
    }
    return date;
};

export default getMoment;