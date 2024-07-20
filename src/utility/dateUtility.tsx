export const convertToLocalDateTime = (date: number): string => {
    let localDate = new Date(date);
    // localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset())
    return `${localDate.getFullYear()}-${String(localDate.getMonth()+1).padStart(2, '0')}-${String(localDate.getDate()).padStart(2, '0')}T00:00:00.000Z`
};
