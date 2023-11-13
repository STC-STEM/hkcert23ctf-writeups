# ISA Intrusion

https://hackmd.io/@blackb6a/hkcert-ctf-2023-i-en-a58d115f39feab46#ISA-%E4%B8%96%E7%95%8C%E8%88%87%E6%88%91%E6%9C%89%E9%97%9C%EF%BC%9F--ISA-Intrusion-Reverse <br/>
the guide is already very clear

remove the below code sector and run the assembly code

```
ADD R1, 1;
LT R1, 100000;
JNZ -35;
```

and go to `ffffff88` in `Memory View` <br/>
the flag is lying right here

flag: hkcert23{s0m3t1m3_i7s_e4si3r_70_dyn4m1c_r3v_ju5t_p4tch&l0ok_4t_m3mory} <br/>
~~wow a really long flag~~
