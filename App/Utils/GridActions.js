export const moveNumbers = (numbers, direction) => {
    switch (direction) {
        case "right":
            for(let i=3; i>=0; i--){
                for(let j=2; j>=0; j--){
                    moveRight(numbers, i, j);
                }
            }
            break;
    
        case "left":
            for(let i=3; i>=0; i--){
                for(let j=1; j<4; j++){
                    moveLeft(numbers, i, j);
                }
            }
            break;
    
        case "down":
            for(let i=2; i>=0; i--){
                for(let j=0; j<4; j++){
                    moveDown(numbers, i, j);
                }
            }
            break;
    
        case "up":
            for(let i=1; i<4; i++){
                for(let j=0; j<4; j++){
                    moveUp(numbers, i, j);
                }
            }
            break;

        default:
            break;
    }

    return numbers;
}

const moveRight = (numbers, row, col) => {
    let movedValue = numbers[row][col];

    for(let j=col; j<4; j++){
        if(numbers[row][j+1] === 0){
            numbers[row][j+1] = numbers[row][j];
            numbers[row][j] = 0;
        }else if(numbers[row][j+1] === movedValue){
            numbers[row][j+1] += numbers[row][j+1];
            numbers[row][j] = 0;
        }
    }
}

const moveLeft = (numbers, row, col) => {
    let movedValue = numbers[row][col];

    for(let j=col; j>=0; j--){
        if(numbers[row][j-1] === 0){
            numbers[row][j-1] = numbers[row][j];
            numbers[row][j] = 0;
        }else if(numbers[row][j-1] === movedValue){
            numbers[row][j-1] += numbers[row][j-1];
            numbers[row][j] = 0;
        }
    }
}

const moveDown = (numbers, row, col) => {
    let movedValue = numbers[row][col];

    for(let i=row; i<3; i++){
        if(numbers[i+1][col] === 0){
            numbers[i+1][col] = numbers[i][col];
            numbers[i][col] = 0;
        }else if(numbers[i+1][col] === movedValue){
            numbers[i+1][col] += numbers[i+1][col];
            numbers[i][col] = 0;
        }
    }
}

const moveUp = (numbers, row, col) => {
    let movedValue = numbers[row][col];

    for(let i=row; i>0; i--){
        if(numbers[i-1][col] === 0){
            numbers[i-1][col] = numbers[i][col];
            numbers[i][col] = 0;
        }else if(numbers[i-1][col] === movedValue){
            numbers[i-1][col] += numbers[i-1][col];
            numbers[i][col] = 0;
        }
    }
}