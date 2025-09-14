export const maxTiles = 10;

export function generateGamePath(maxTiles){
    let pathArray = [0];

    for (let i = 0; i < maxTiles; i++) {
        const tileType = Math.random() < 0.7 ? 0 : 1;
        pathArray.push(tileType);

        if(tileType === 1){
            break
        }
    }

    return pathArray;
}