function factorial(n) {

    if (n === 0) return 1

    let f = 1

    for (let i = 1; i <= n; i++)
        f *= i

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


/* normal distribution CDF approximation */

function normalCDF(z) {

    let t = 1 / (1 + 0.2316419 * Math.abs(z))
    let d = 0.3989423 * Math.exp(-z * z / 2)

    let prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))

    if (z > 0) prob = 1 - prob

    return prob

}