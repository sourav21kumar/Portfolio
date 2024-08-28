
const parseDate = (dateString: string) => {
    const [date, month, year] = dateString.split('-').map(Number);
    console.log(date, month, year);
    return new Date(year, month - 1, date);
}
const employementDurationCalculator = (years: number, months: number) => {
    if (years === 0) {
        return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
        return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
}
export const getEmploymentDetails = (startDateString: string, endDateString: string, employmentStatus: boolean, employmentType: string) => {

    const startDate = parseDate(startDateString);
    let endDate;
    endDateString.trim() === '' ? endDate = new Date() : endDate = parseDate(endDateString);

    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    const _employmentType = employmentType !== '' ? employmentType : '';
    const _employmentStatus = !employmentStatus ? 'Present' : startDate.getMonth() + ' ' + startDate.getFullYear() + ' - ' + endDate.getMonth() + ' ' + endDate.getFullYear();
    const _employmentDuration = employementDurationCalculator(years, months);

    return ((_employmentType !== '' && !employmentStatus) ? `${_employmentType} - ${_employmentStatus}` : _employmentStatus) + ' . ' + _employmentDuration;
}