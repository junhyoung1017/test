function factorial(n) {
    if (n==0 || n==1)
        return 1;
    else
        return n*factorial(n-1);
}
function permutation (n,r){
    return factorial(n)/factorial(n-r);
}
function combination(n,r){
    return factorial(n)/(factorial(n-r)*factorial(r));
}
function multiPermutation(n,r){
    return n**r;
}
function multicombination(n,r) {
    return factorial(n+r-1)/(factorial(n-1)*factorial(r));
}
module.exports = {
    permutation,
    combination,
    multiPermutation,
    multicombination
};