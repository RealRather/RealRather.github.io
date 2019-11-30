import moment from 'moment';

const getFullDate = time => time
    ? moment(time).format(`YYYY-MM-DD`)
    : moment().format(`YYYY-MM-DD`);

const subtractDays = (time, daysToSubtract) => moment(time).subtract(daysToSubtract, `days`).format(`YYYY-MM-DD`);

const sortDate = dates => dates.sort((date1, date2) => new Date(date2) - new Date(date1));

const getDiff = (elem1 , elem2) => (Number(elem2) - Number(elem1));

const transformDateFormat = date => moment(date).format(`DD-MM-YYYY`);

export {
    getFullDate,
    subtractDays,
    sortDate,
    getDiff,
    transformDateFormat
}
