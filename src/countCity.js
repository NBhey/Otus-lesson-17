export function countCity(count){
    if (count.children.length > 4){
        count.children[0].remove();
    }
}