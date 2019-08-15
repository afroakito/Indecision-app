const isAdult = (age) => {
    if (age > 18) {
        return 'adult';
    } else {
        return 'not an adult';
    }
};

const canDrink = (age) => {
    if (age > 21) {
        return 'You can drink';
    } else {
        return 'You cannot drink';
    }
};

const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };