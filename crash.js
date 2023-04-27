window.addEventListener('load', main, false);

function main(event) {
    console.log("extension start")
    var timer = setInterval(getBangList, 1000);
    var mainArray = [];
    
    function getBangList() {
        const fullText = document.querySelector("div.recent-list").innerText;
        const parsedTextArray = fullText.match(/\d+(\.\d+)?(?=x)/g);
        const tempArray = parsedTextArray.map(parseFloat);

        if (tempArray.length !== 0 && mainArray.length === 0) {
            tempArray.every(value => mainArray.push(value));
        }

        if (mainArray.length !== 0 && !isSameArray(mainArray, tempArray)) {
            mainArray.push(tempArray[tempArray.length - 1]);
            console.log(mainArray);
        }
    }

    function isSameArray(arr1, arr2) {
        for (let i=0; i<arr2.length; i++) {
            if (arr1[arr1.length - 1 - i] !== arr2[arr2.length - i - 1]) {
                return false;
            }
        }

        return true;
    }
}
