export default class ListUitls{
    
    static firstPartOfList(array) {
        return array.splice(0, Math.floor(array.length / 2 ))
    }

    static finalPartOfList(array) {
        return array.splice(Math.floor(array.length / 2 ) - 1 , array.length)
    }
}