---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQQF7VY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCe5OMfQC6u2czn43uXlj7mmNW2kbIiKDiz7mv0Wff32wIhAJrC9nP%2BSow4X7tDLNErvIFpTYJ357R4D8vdlbwSkU03Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwvV9JwWhyceol0xTAq3AO55j0ifEsbA8jRFOgxKfPaq558MJffMB0qyfmNk09JvniAnwMQ39G7cXMjNeRr9tmcRbbqzYOaDpOe8Y0G0ecmbauY4yXcjuqL2Y1cDoeG6X%2BXhYberiioEewNrAU3HoJC9YL4rs86iqpq8wYZ8W6jWvSQsKqwzuZjh51A5bXXjywAYJDAS%2F1gaPwHvb60qeUK3mz1KaRkIPYGLxpS9gViR1oqEyU0OCGXsXEkGom%2F5%2F32IJW5vUSKRUZ2EULZx%2Bfbn1AHFAW3qJQ%2BiciPSdFMRIbQapeDjvmzC8Pqfz%2FV4I5EyCNhosKTi7n8H4HW1f231KTNfZ2ppWgOUc6Ty%2Fv5HKd2W5%2F%2BdTdzel8crcnSpsCxhBnQYEigBKmAdBFYi%2BMChADxzp%2B62HdyCT6HkPk63OIy%2BXh85t3IiEiBPflFVPpe4Lp8n6CEtXe8s4Q8svWhp6OHEEjp6W3c2tOjvBLg8FidrHoQZSVimuXq29IhARu2O7pHUb0BqNKeenGhzFfEfBHO1aFJEtPXGvUiBpMntZykif2SmguuZaPfKZNFFUZcqBf6iB%2BGmI8OAl2akwBhGKXnWWGl6D4an8bL4KO9J6Nqmsi9qIT8DE%2FaMFs6iGTsFoSio9PsWADsqjDIsOe%2BBjqkARlFrPZofPKwPir6nRyRZuX9QBds621Q%2B55TB98lm5eG8xgt7GW64vd7r%2FK1r1ZLcsbON%2F2EGuuIwcgfqwzIUzqJbNX%2BPlCdhAvW7KSzxdFzIT1RhaiZ3HNQmPs%2FB0e74kM33oT6dECCC57C49vm9f15KPSNGAyc2HVjDO629EAtfSB5%2BDsSk%2FY83Yf22uWkDN9bzsdSjQ9q%2FsSjhAfHInCehnp1&X-Amz-Signature=524d937a305f996867ff7e87f2da0e30dea0a57476608697075bbb65307b2b39&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPL4RQM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFkXJwXYIdoCy4Xr7h6T0EBkVnHkL%2FJOvQxeVYKBN9fhAiEA3yFJG%2Bu9rPF5QmkOt3pta%2BZWaYThRMmBQv92WBBX9F8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCHJiW6o47v9JDx10SrcA6ayokUxRf3kGs20vIvdDF9tKRgNct28oqm4jPoafx3Eo3Qc3NO%2BzwGTZmg9aHwZqugV6D%2FEdFxah3pWR%2B%2F7DGeK68FkZBI%2BT0FdrNqNThoUjpk1tHCxqgyMctE3Mqp2U6Ubm%2Fzvgk%2F0u0N9BV6JJ1a1%2BCnNx8z1SXxyNiFF1s32eVnW2yT4%2BSq4x0Qh2zcvLdNqVnAPhQ5mlFxvWzXLeofgExaT%2FwiBvpXuah4GDtCrfXttpQ6z12LrQ4vkZhAxU%2FhPCq5MZ0oxA8mOTQsBNzm8H73jjoeaG09p4vOXHCaZZLB8kAmjJ3%2BYcSC2kIxtWUlfIzGMAPG0KmQhATVA1BjI7syU67hY5uQoSKhFpsPtbekIHqMJP3%2BjIzpskR1HXWON44R%2FaTlPvCXXSHF5qKzwJgiZ80wLBdV1oqocSyvnSaCbLo3cDAF%2B6ezBceJ5NHATs5YCzuw%2Fcl31mbbJnoJm0lcaCGzZbUwWhYdH5HoNAtPbWqTdaLjrinl1uwMAHktS2PaVI33xdRZmVTolY7R4krrDZZp30xmezUJLMcKnT2lcAo4u0Y24VG0FvjQsMjc%2F5DFGgC%2BX%2FpDBZuwOAwxPP5z3RKrgOhZWfjkRkbgeQh%2B%2FUsGyPWrNbt%2BRMOaw574GOqUB36AujYo5AMIniEPiyC0LyJizkGuUAieZCkBQSgy6KAwtmSzXgZ1cAlLBulCXnudmpMVzJ1Wp1nd9Y3UCuK7lQMuVYIDmnn%2FkXb6js%2BS3XLMXBnYWt2upPsfYUN37zQcCFI8bWZ2xLg0f%2BUjZ0AbUK0Eo0RZicapLrJ2twKuY7vRT%2B73IqzdxgP1cE36c%2F3qGTGWH8%2F7ivrYpdededgStAngl8ApH&X-Amz-Signature=8c82191becfd44d80ac9beb59a66c6ab08778302e2a0891813562254dd1ceba1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
