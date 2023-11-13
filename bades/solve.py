import requests
import json
import time

host = 'http://chal.hkcert23.pwnable.hk:28231'

def get_flag_cipher_text():
    response = requests.get(host + '/encrypt/flag/').text
    return json.loads(response)['ciphertext']

def to_hex_format(data):
    txt = ''
    for n in data:
        txt += '{:016x}'.format(n)
    return txt

def encrypt_remote(data):
    hex_data = to_hex_format(data)
    response = requests.get(host + f'/encrypt/?m={hex_data}').text
    print(response)
    x = json.loads(response)['ciphertext']
    return split_sections(x)

def split_sections(data):
    return list(map(lambda x: int(x, 16), [data[i:i + 16] for i in range(0, len(data), 16)]))

flag_m = []
flag_ciphertext_hex = split_sections(get_flag_cipher_text())
print(flag_ciphertext_hex)

for i in range(1, len(flag_ciphertext_hex)):
    payload = flag_m + [flag_ciphertext_hex[i-1] ^ flag_ciphertext_hex[i]]
    flag_m.append(encrypt_remote(payload)[i] ^ flag_ciphertext_hex[i-1])



print(bytes.fromhex(to_hex_format(flag_m)).decode('utf-8'))
