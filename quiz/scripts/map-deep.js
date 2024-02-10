// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    return [...row].sort();
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);

  /*
  Original Matrix (modified): [ [ 3, 2, 99 ], [ 4, 5, 6 ], [ 7, 9, 8 ] ]
New Matrix (unaffected): [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
kyrariedel@Kyra-2 learn-js % node ./quiz/scripts/map-deep.js
Original Matrix (modified): [ [ 3, 2, 1 ], [ 4, 5, 6 ], [ 7, 9, 8 ] ]
New Matrix (unaffected): [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

New matrix is only modified if it is created after the original matrix is modified, 
which is what we want.
*/