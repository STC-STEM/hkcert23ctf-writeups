# The Flag Game

go to the `source map` in `devtools` <br/>
and download `app.38bf3c86.js`

beautify and remove non-ascii characters in the file
- https://beautifier.io/
- https://pteo.paranoiaworks.mobi/diacriticsremover/

by analysing the file, we can see there are a lot of `checkers`

<details>
<summary>checkers</summary>

```js
{
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 8)).startsWith("b08c89")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 14)).startsWith("d0687a")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 12)).startsWith("87b3c7")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 22)).startsWith("8b035b")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 40)).startsWith("8a9de8")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 26)).startsWith("7be965")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 30)).startsWith("bf7eeb")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 36)).startsWith("7ef31a")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 24)).startsWith("40f34c")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 20)).startsWith("b72709")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 38)).startsWith("e3c817")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 28)).startsWith("0b67cb")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 32)).startsWith("f9f48b")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 34)).startsWith("69260f")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 18)).startsWith("c25dd2")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 16)).startsWith("cbe2c9")
}, {
    description: "Your flag must be .",
    checker: e => f(e.substr(0, 10)).startsWith("ce45fd")
}, {
    description: "Your flag must be .",
    checker: e => p(e.substr(0, 42)).startsWith("e3c817")
}
```

</details>

and from the definitions above the `checker` parts <br/>
it can be easily seen that the definition of
- `f` is `sha224`
- `p` is `sha256`

<details>
<summary>definitions</summary>

```js
const {
    sha224: f,
    sha256: p
} = r(9946), g = r(9820), m = e => {
    for (let t = 2, r = Math.sqrt(e); t <= r; t++)
        if (e % t === 0) return !1;
    return e > 1
}
```

</details>

going back to the `checkers`, we can see that they...
- hash `n` characters
- check if the hash start with `xxxxxx` <br/>
where `n` ranges from `8` to `42` as multiples of `2`

since the intervals of `n` is not a very large number <br/>
we can write a script to test possible flag sections for each checker <br/>
look into `solve.js` for more details

flag: hkcert23{h0p3_y0u_u53d_th3_s0urc3m4p}
