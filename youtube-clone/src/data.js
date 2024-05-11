export const API_KEY = 'AIzaSyDnZe9ficlog5R4R8ZJOqlqT7H_-WAFU-Y';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}