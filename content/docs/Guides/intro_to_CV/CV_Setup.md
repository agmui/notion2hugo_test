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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2L3WLAO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCID9Icwbj4sJAljD4Vyldgi3%2B89zNVcewzPnLVornI%2B4uAiEA04QdIXLurAV3W6voWRT0DKSBFj%2B%2BRoNTk7nPt70oF0Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDH00Bpg3G5PEcMlq5CrcA6Ec3FQhsL8eChOvYUlF96uk26cqnWPAY0K%2Be2R2BDxGO4%2FfvHB5RDa2z1LLq5c0312q450GyHyHAGODx8y%2BSkADRmOLHF1CjfrW%2B5DmC2ntdJ%2BDyKXJc3s1WxNQUahfMqmqXKdrM6a8dEK48HrCcHsxkU64eo6qF1Y2byMHYqDumNLCwArRKPF5gZi1MoXN7A6qxBwBtd2obWt%2BhAn02whTwAdA2QRRVPkdcMg4a7rNWQLIrgPGO9x%2B2sY6C3XrHhNcxoVKeM%2FEw6WWXU4SaH5akasDnkfQGgNM%2BtSDN91vuwRDfklzfB5F%2BPEnFOkFMsf8T3qAYiSEijKdt7RWnQiTZBOzr195HOZ5rKODCMAYV5i3trJmJFjUz%2Bf8VqJlj%2Ffy2bZziLyjcM5fJq0aUSYFdinSe%2FZZDuz%2FEa6HyrKYDZTEPXS%2BV%2BVWzB1WLeQmT4cGta8OoEXsONn8v4LnbpH2hL8%2F%2BD1XwVEKhmpziDfZpt5T68XBJoWCpgZP1Mowj3EHT96IpHpj0MOkVlQcFpQuQYbkPy82rOmUiaB%2BvdanlGL7Q5tEGnrg1aDWD98E7AEDfTLtrrTp69%2FjYB%2FnvYXFVVKgvHeJsYMzqkx17G19CnwOusKcQdCgEqULMJfz5r4GOqUBsd8tfcpKTMIeMSDa2vXs1VPzeP6hOFkJHghM2%2B9qt0bLIKYJvWdnm8auL8eT0rrNmKtf75u1s%2FtwuWHL2e08zIUJCZGM0whK1K6N0PIf%2BtJs4MZpcEinlLO9tuBl%2FpU%2FXDkSHgbTD6yXZoDzN%2Be8gAsjiSNBfvlBXP3T4OMcz1Krlvks487zhQ%2FH0LtH9pOnURTzKkeHOtxnCwSnK2Vw5RjcJV7h&X-Amz-Signature=eb958dc3a54c08a9c0176a39b8ccb1cab293299d3bd9244a2338c6dd35f5badf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAPRPFK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDIVXCp%2BTpAnlFrnc6pqgnrOzOjRuPiFOQJARRsMosJ4AiAifAZZJdlEcJ3SFj4DMqQf4iMNHH1U1euJfzZu5qJvMyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM2unTCRn00WG0bY1rKtwDzS%2F6wDMPS994jIpOcyKnedsaQHzIUkUyWu9KkgA4gGWPezxtyFcw77uJwJDzqLsq6It8Qmnk2unjd5QHwnRFy2L%2B18Z5alS%2FpwpyLTrWFFBkCqVY1%2F6XiqQyGu3yiI7dlfoHK%2BNEKrCbRbbGvw93YcT4rvhoF91KaIBsGacRRvlzHWDKXmRd5t0rn18IuJZ4WuYBEQSHMRpx962uixErcUqJ9q8casJJuEDOPBFlBoqtYHKLKmxQ7gGqTGzOpuc1W6he6N954MfQcrVVOLXbFzOsgnMtG9miSiFm35KEvMGp9wpBKQHlsUWfXf9JW9oc%2Fgk2BfipdQD08vnlhBQNrYpsngfpfOrhtGiliZm3wCC8LjaPBYrmniF0KqFZVYg%2Fwfo3Ma8o7OSKs7%2F3GgBi%2BoNm13JzPSwqxcsRU59HDsDT6RBGLwaVOICTEq%2FqsNuzl68IQ9hmovDW1jrs%2FoJY%2F3caTrZihFYkLAyEs8dmEQQJLiLVtD5qJBUTlhMi70imScBahXoSH%2Bb8EHEUxy26%2FyTPRik%2B6G9ZROydj9gYLnXjIcSLrCt93ure4C6CZj5LQDZ157t8jqwZdksFV3KjwEdSedKxlzciLVAZ9fDBsTt%2Bz%2BZuz1uXIvn8RUMwgPPmvgY6pgG99PKYhozot4NrhDZbNDLRGhJLtJ0fnfv%2BIRtu1z1zKD%2FkJL6z3Jyt87zv5stdfZq2ZFf6H9B7OgTAXF%2FebkPb5z%2BRTsOXZ5lFOCHWDPngw37RXMT%2BYNpqY7EFTNFu03OpUIgHf4%2Bx3uZrgM4oZWPxaKNejbhqDBf9w2K0JoxzYNipSwxhNbAIgdgCc3wYe5GPozdY4FvpYGv9EJ9bSEs%2FHKr9KR3x&X-Amz-Signature=4673ece6d0618efb202a3b6361a294aa311cf6d32778578238fda7d62c59922b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
