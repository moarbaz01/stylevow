import { RiStarSFill } from "react-icons/ri";
import { TiStarHalfOutline, TiStarFullOutline,TiStarOutline } from "react-icons/ti";

function useRating(rating,size) {
    // Check if number is in decimal or integer
    const isFloat = Number.isInteger(rating);
    let first = null;
    let second = null;
    const stars = []

    // If it is decimal number then do this
    if (isFloat === false) {
        first = Number.parseInt(rating);
        second = rating.toString().split(".")[1]
    }else{
        first = rating
    }

    if (first !== null || second !== null) {
        for (let i = 0; i < first; i++) {
            stars.push(
                <TiStarFullOutline color="red" size={size} />
            )
        }

        if (second !== null) {
            second >= 5 &&
                (
                    stars.push(
                        <TiStarHalfOutline color="red" size={size} />
                    )
                )

        }

        while (stars.length < 5) {
            
            for (let i = 0; i < 5 - stars.length; i++) {
                stars.push(
                    <TiStarOutline color="red" size={size} />
                )
            }
        
    }


    return stars
}
}

export default useRating;