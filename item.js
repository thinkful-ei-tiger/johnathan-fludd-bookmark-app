function validateName(name) {
    if (name === "") throw new Error('Name must not be blank')
}

function create(name, starRating, description = '') {

    return { id: cuid(), name, starRating, description }
}


function validateStarRating(starRating) {
    if (Number.isNaN(starRating) || starRating < 1 || starRating > 5)
        throw new Error('Rating must be a number between 1 and 5');







}


export default {
    validateName,
    create,
    validateStarRating
};