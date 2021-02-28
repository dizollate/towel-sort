
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let newMassive = [];
    let len = matrix.length;
    for (let i = 0; i < len; i = i+1){
      if (i % 2 == 0){
      	newMassive.push(matrix[i]);
      } else {
      	newMassive.push(matrix[i].reverse());
      }
    }
   return newMassive.flat(len);
}
