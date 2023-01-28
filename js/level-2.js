// localStorage.setItem('the count', 0);
document.getElementById('show-count').innerHTML = localStorage.getItem('the count');

const increaseCount = () => {
    const showCount = document.getElementById('show-count');
    let theCount = parseInt(localStorage.getItem('the count'));
    // console.log(typeof theCount, theCount);
    theCount++;
    showCount.innerHTML = theCount;
    localStorage.setItem('the count', theCount);
}