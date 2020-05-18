// PROBABLY THE CLEANEST WAY TO MOCK A FUNCTION
// AND LET JEST DO ITS MAGIC
export const getWinner = jest.fn((p1, p2) => p2)
