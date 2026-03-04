function factorial(n) {

    if (n === 0) return 1

    let f = 1

    for (let i = 1; i <= n; i++) f *= i

    return f

}


function choose(n, k) {

    return factorial(n) / (factorial(k) * factorial(n - k))

}


function binomial(n, k, p) {

    return choose(n, k) * (p ** k) * ((1 - p) ** (n - k))

}


function poisson(lambda, k) {

    return (Math.exp(-lambda) * (lambda ** k)) / factorial(k)

}


function zscore(x, mu, sigma) {

    return (x - mu) / sigma

}