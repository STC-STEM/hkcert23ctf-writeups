import sha244 from 'sha224';
import sha256 from 'sha256';
import g from 'zxcvbn';

function f(e) {
    return sha244(e).toString('hex')
}

function p(e) {
    return sha256(e).toString('hex')
}

var m = e => {
    for (let t = 2, r = Math.sqrt(e); t <= r; t++)
        if (e % t === 0) return !1;
    return e > 1
}

var conditions = [
// {
//     description: "Your flag must be at least 6 characters.",
//     checker: e => e.length >= 6
// },
// {
//     description: "Your flag must start with <code>hkcert23</code>.",
//     checker: e => e.startsWith("hkcert23")
// },
// {
//     description: "Your flag must include exactly one <code>{</code> and one <code>}</code>.",
//     checker: e => 1 === e.split("").filter((e => "{" === e)).length && 1 === e.split("").filter((e => "}" === e)).length
// },
// {
//     description: "The length of your flag must be a prime.",
//     checker: e => m(e.length)
// },
{
    description: "The digits in your flag must add up to 26.",
    checker: e => 26 === e.split("").filter((e => "0123456789".includes(e))).map((e => parseInt(e))).reduce(((e, t) => e + t), 0)
},
// {
//     description: "The length of your flag must not be greater than the answer to the ultimate question of life, the universe, and everything.",
//     checker: e => e.length <= 42
// },
{
    description: "Your flag must contain at least three underscores.",
    checker: e => e.split("").filter((e => "_" === e)).length >= 3
},
{
    description: "Your flag must not contain the substring <code>flag</code>.",
    checker: e => !e.includes("flag")
},
// {
//     description: "Your flag must fulfil the flag format.",
//     checker: e => e.match(/^hkcert23{.*}$/)
// },
{
    description: "The number of digits in your flag must be a prime.",
    checker: e => m(e.split("").filter((e => "0123456789".includes(e))).length)
},
{
    description: "The number of <code>1</code>'s in your flag must be thrice the number of <code>6</code>'s in your flag.",
    checker: e => e.split("").filter((e => "1" === e)).length === 3 * e.split("").filter((e => "6" === e)).length
},
{
    description: "At most 30% of your flag are digits.",
    checker: e => e.split("").filter((e => "0123456789".includes(e))).length / e.length <= .3
},
{
    description: "Your flag must not contain any characters from <code>fail</code>.",
    checker: e => 0 === e.split("").filter((e => "fail".includes(e))).length
},
{
    description: "Your flag must include at most two distinct vowels.",
    checker: e => e.split("").filter((e => "aeiou".includes(e.toLowerCase()))).filter(((e, t, r) => r.indexOf(e) === t)).length <= 2
},
{
    description: "Your flag must include five characters, not necessarily distinct, from <code>mystiz</code>.",
    checker: e => 5 === e.split("").filter((e => "mystiz".includes(e))).length
},
{
    description: "Your flag must contain exactly 20 distinct characters.",
    checker: e => 20 === e.split("").filter(((e, t, r) => r.indexOf(e) === t)).length
},
// {
//     description: "Your flag must not contain upper-case characters.",
//     checker: e => 0 === e.split("").filter((e => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(e))).length
// },
{
    description: "Your flag must contain the substring <code>y0u</code>.",
    checker: e => e.includes("y0u")
},
{
    description: "Your flag must not contain consecutive double letters.",
    checker: e => e.length > 1 && [...Array(e.length - 1).keys()].every(((t, r) => e[r] !== e[r + 1]))
},
{
    description: "At least 40% of your flag are hexadecimal digits.",
    checker: e => e.split("").filter((e => "0123456789abcdef".includes(e))).length / e.length >= .4
    // checker: e => e.split("").filter((e => "0123456789abcdefABCDEF".includes(e))).length / e.length >= .4
},
{
    description: "Your flag must match the REGEX <code>/[A-Za-z0-9]{9}/</code>.",
    checker: e => e.match(/[A-Za-z0-9]{9}/)
},
{
    description: "The ASCII values of the characters in your flag must sum up to a multiple of 65.",
    checker: e => e.split("").map((e => e.charCodeAt(0))).reduce(((e, t) => e + t), 0) % 65 === 0
},
{
    description: "Every occurrance of <code>n</code> in your flag must immediately followed by a digit.",
    checker: e => e.split("").map(((t, r) => "n" !== t || "0123456789".includes(e[r + 1]))).every((e => e))
},
{
    description: "No characters in your flag can occur more than 6 times.",
    checker: e => 0 === e.length || e.split("").map((t => [e.split("").filter((e => t == e)).length, t])).sort().pop()[0] <= 6
},
{
    description: "Rule 22 should still be satisfied if each of the <code>3</code>s in your flag have been replaced by a <code>@</code>.",
    checker: e => e.replace(/3/g, "@").split("").map((e => e.charCodeAt(0))).reduce(((e, t) => e + t), 0) % 65 === 0
},
{
    description: 'Your flag must reach a strength 4 in <a href="https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation" target="_blank" ref="nofollow">zxcvbn password test</a>.',
    checker: e => 4 === g(e).score
},
{
    description: "Rule 20 should no longer be satisfied if all of the <code>d</code>s in your flag are removed.",
    checker: e => e.replace(/d/g, "").split("").filter((e => "0123456789abcdefABCDEF".includes(e))).length / e.replace(/d/g, "").length < .4
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 8)).startsWith("b08c89")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 14)).startsWith("d0687a")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 12)).startsWith("87b3c7")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 22)).startsWith("8b035b")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 40)).startsWith("8a9de8")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 26)).startsWith("7be965")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 30)).startsWith("bf7eeb")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 36)).startsWith("7ef31a")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 24)).startsWith("40f34c")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 20)).startsWith("b72709")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 38)).startsWith("e3c817")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 28)).startsWith("0b67cb")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 32)).startsWith("f9f48b")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 34)).startsWith("69260f")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 18)).startsWith("c25dd2")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 16)).startsWith("cbe2c9")
},
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 10)).startsWith("ce45fd")
},
{
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 42)).startsWith("e3c817")
}
];

function test_conditions(str) {
    for (const c of conditions) {
        if (!c.checker(str))
            return false
    }
    return true
}

function* chars(template) {
  for(let i = 0; i < template.length; i++) 
    yield template.charAt(i);
}

function* combinations(template, length, previous = "") {
 if(length <= 0) {
    yield previous;
    return;
 }

 for(const char of chars(template))
    yield* combinations(template, length - 1, previous + char);
}


let template = '!"#$%&\'()*+,-./0123456789:;<=>?@[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

// for (let i = 13; i < 43; i++) {
//   if (!m(i))
//     continue;
//   console.log(`testing if length = ${i}`)
//   let count = 0
//   for (const str of combinations(template, i-10)){
//     let flag = `hkcert23{${str}}`
//     if (count % 1000000 == 0)
//       console.log(`length = ${i} testing... ${flag}`);
//     count++;
//     if (test_conditions(flag)) {
//         console.log(flag)
//         process.exit(0)
//     }
//   }
// }



// I dont like waste time on debugging, so I just copy and paste manually



// for (const str of combinations(template, 3)){
//     let flag = `hkcert23{${str}`
    
//     let checker = e => p(e.substr(0, 12)).startsWith("87b3c7")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_${str}`
    
//     let checker = e => p(e.substr(0, 20)).startsWith("b72709")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u5${str}`
    
//     let checker = e => f(e.substr(0, 22)).startsWith("8b035b")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d${str}`
    
//     let checker = e => p(e.substr(0, 24)).startsWith("40f34c")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_t${str}`
    
//     let checker = e => p(e.substr(0, 26)).startsWith("7be965")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_th3${str}`
    
//     let checker = e => f(e.substr(0, 28)).startsWith("0b67cb")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_th3_s${str}`
    
//     let checker = e => f(e.substr(0, 30)).startsWith("bf7eeb")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_th3_s0u${str}`
    
//     let checker = e => p(e.substr(0, 32)).startsWith("f9f48b")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_th3_s0urc${str}`
    
//     let checker = e => f(e.substr(0, 34)).startsWith("69260f")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

// for (const str of combinations(template, 2)){
//     let flag = `hkcert23{h0p3_y0u_u53d_th3_s0urc3m${str}`
    
//     let checker = e => p(e.substr(0, 36)).startsWith("7ef31a")
//     if (checker(flag)) {
//         console.log(flag)
//     }
// }

for (const str of combinations(template, 2)){
    let flag = `hkcert23{h0p3_y0u_u53d_th3_s0urc3m4p${str}`
    
    let checker = e => p(e.substr(0, 38)).startsWith("e3c817")
    if (checker(flag)) {
        console.log(flag)
    }
}