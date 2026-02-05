---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FGPEHT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFO2S5Z3tlFOGVW6%2BRqdxWv7ABs7GoX4AjKPvIafVxP%2FAiAek1GZ4H60WpbB%2BL2ENq1NafkeFM%2BjMYoVi1VY%2FA7YnSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMYnY4OKkXPbLWxuOKtwD04duWHcZ4A%2FobmbIOsFdGiv7G70UC44wISDowS4Xkn32t8brgS7rzX%2FJwxnvqXv3ILxYhdNl%2BEic2bwU9qFpQiWSTnHvStRaX6WBq9saNXRrXXXMTnYM0avCz9QdZVULHs%2FfgBzGVEuUZ%2FB%2Fr44UIWmhqPl3hzZ0hb%2BO270iaDZQNDEFucNVx2BcnqF3dG6uIbEEIWsJTyUcOaFvwfBxZEKJ9LhTtcq3vfig3k9xWAhSmom2h9I5yvrF9Ng0vCPAavABUOVpchX2NA6RkI0RxYv%2FKtI8gJZK14XHDFHTwZkEKkamuJoaqbNjxvOcW9wzPj114qB7f0lsMruh6zI%2BDK%2FDrYGCyUuLpeVuItD7CQST3S%2FjDTCmjGkHMXZB7OdZnZV3FIcjrpMMIsEy%2FN%2BQygI0oIoAW03FyBCwe0Tdo%2FHA4G8Sz4PhvGGlmdHyqFewTm4GRR5fxdoD1vgUyu4zB9CHjpS0vwuyX%2Bjsh%2F0lg6vdviTcUc1slQgTiJPiYaD5FJDMb2flNtmMpaMer5d5K6FxaLVIGhR4s0YVFjEFGlkoa%2BpXvTuwKWR9MpO%2FqWYcVb7GlUjKHLrKdLocUroKINQYKC9yunVanjcsc%2BwQGEhHSeEmgPcksfkWGHcwpM%2BPzAY6pgGXCRbWw9wmokcjfMG0C80vujAUjv0M2m3QfhBqPgvV6NqQHt7185B%2FlHAilCYM62UITPmFBrBwrYb6WBO%2FD2EOsHHtyTwMoQcL2QGCJnn3MZkyuGF0q98qzTDUK0hU7U%2BDZ06ledcMbWKiFLhMsd1RK2WfnsEZsFJ0tc8GdOfZy9o8cbG4bi%2BlycU4t1g2xUodHtD0ZspT9hyyZ0D4bxakqEauHFzH&X-Amz-Signature=90a2f39206c384f358ada11a0fd97b7d386038420b143739c8e083b93c552812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VL33N2D%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICV5ZTpwN6CovFf%2Bl3X66Gr7rAsv%2FJiAb4vFNFVnWG1wAiAzBNzGYIQTJ1ixsI3T1Rn%2FgtkEe0wL%2FEivTyTi17Zk1Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMh3EANPOBjN1oBZJ5KtwD72a7UWQVNDi0qzc705r7q3ceLbkLY9EJd8JO8dATtMb6kjaOr%2FQ4%2FQA5DqzClTLP2vymnZ%2B3Qz676B6b2lbjjfwlLG1sc6tx5KALW6FabO1T0O4%2Byx9m7rEAcnMvJMQjqGjyYnGHGPjBe9xL%2BfgZfgxPnQile3%2BwurWiYz1nFbDGTmgHxgKBitwnNaCb1Nsm0UnEfmeB2VyODNB%2FdcFJpAkOp9MsnlvPdMCAIsAMVK083lK72jB%2BsvwBlAG7%2B3Lxb6aaPyaElrB%2FK8Kn5Za1SsMSHbz3L13HnCI%2B3Trnb9PEL0CjU%2BMFcL5ZDNAyrPeTmd807%2B1%2Fu0h4%2FVJY4r%2B2ekiY%2BAYjrh8zycupHfbDzrCURmuw2PERlZLfofGYQIvbIqVzjlsy0unSC5IvMeH0EQWq5RkDszeboVZ2L4ApN9zs4etsBDjqSdv8TkmYtWYjgM%2BTG8DmCJvgI%2FlAoAyO3%2B6vEfmL8%2Bck8Ir1I4EPHykeo3HZkVADyM%2F%2FbJp8FrTll%2FF1YvA48SuwYhcowbB8qY5syX%2F0EQTjIWQIEzzis6zNVkJ%2BAgGynV4ZGJLHXOB0O9D0EPma3eqV9N6y2sr33glVGxnAtRv8WmeifYxyWbx92kZGPjfuJIbnyYkwzM6PzAY6pgHXmfFMNX7hNCwET1TouCaGCt2axLkkWI3Ue9azvkkyfTRPIfu3iyMiBZbOljSrBLtYyc6DM1bPfcKdXH08svZsVTCcnAjFmoIKdmPWL79cxhNtGLfNHE6krDYRV8b0kOaUBYJt9p2U%2FzjKkuVL0TJqL9UzikYpRRVcnJVkOvjcQWaspZvAS3PoaGFWFbgBdp0lkmzL05ABpn6x6okT0rsjUF0fayoc&X-Amz-Signature=456ac93a850616a1f3c50d7a9667f1406124cab599ee781efb61e573c8f0795b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
