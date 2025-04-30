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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCVT5BS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCXWs2Kmblw2syKlmBqq4mllzGiRwH%2FQ824IPlp3RSV%2BQIhANAOYqo%2BnSUnWjxKQKRr0Wsj3yO8XsqsmKI3x0huv0sKKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl06SNV%2FjtEVvuz9gq3APliz%2BOKEYtP%2Fg0XY14P9SmFH9vPJ8ZjrkPZCXCMdulF%2FwSe%2B5zljznDUTVx7kmz%2BteCKvMoBXHYyv%2Bf1QzF452f1maSN98VmhfKW2dwPKhqPcXPFPhUgBYjd3SpWfdZw%2FODHUBECClYbBUIV3LGBBW9KcgQysZny2cV8Lu0gtH0Lvz%2F%2BMcZpiz4LdBpVazvF%2BCxNX5Uk1Mx%2FXSSQkNVmdp0E%2FXaX6PuD59Xx6jAd01xW3Ri6L9STO%2BGv0kC1yV2IcJZs75jsCb4YqGClp4WLD4wSxylG%2FEVUe%2BocBvK1UM3XqJtVAd%2FpENguJ3VQz45EAm7y3kmFCAgUoJ6roIj4V%2B3WZV9gn7UOb%2ByYeUldcD%2Fnq6g9SK4HE9bKb%2FRYJwaoM%2FzsVt6xA9gfgtcbam3VdQjABmtxjOP33u8xKpse2Obfw20tFPRmm3g7AAMzH7S8OqrIKQyU1hEHFPbzC%2Bnk8UGHr3lgnFzGf0CxyeeTccUpPvfK8JTrTXoLqliFiWaB%2FCrDmqzOkstVvMYahFkMxbU2BdK6YgXamFcHJk0WstjJvL8QrdwtkvzsKDiDOUyhIQpGrNEOOsOHMQ4ITRRhZj6Tt8jJ8zP4X%2FEB2DBsK6T0Fa2OU1XAunwXGvfjC1ssfABjqkAVUIpmtMicxueTofNSKiaKgoX%2BWSZjRhCgoorjAQShcpN4XA%2BPzrqELfIHewBHp4vE4nq3VsKKMRKuJcFwX3qDtV1TWrgOMdbWYg0AxhqKK3yNTBWobzYX9Ol%2FoAheHy28dtCfqZxHMRQ5UM%2F0LuPv0znEzFSXAyIW%2BvCJnA5xjlEi%2FKBK2iI11AKoNDbdhZF9ixaTzHjVEnvSgwkPySQ3YydnAR&X-Amz-Signature=d545e82f0ee741698621433563edab9c5ac62f71e8745607f61e172152310f78&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJYIHNN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAcSDhRZqk6KYlqaI3yoWTb93QfHnRiIysz%2Fgsp6x6FkAiAHAAczO9tFYSLjPy0R787iz%2FI75RsSuA1tlyiGTzpBVyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlyF0xOWft8vtTitMKtwDl65zE62vel68m31G61nr%2BuiTwpQL6SrEO62y7rVH3UBJN0VZMqSXM57nIwMXgLKxqnE30r4hQPFQ5p6nHjU%2FuUYIWDYog9vxf1bgg7vpw4tXANm8FqlFc37BVgKFZbTUdxCv3wnP4ZHC5bJgayXx7J%2FND9%2FvvD%2FL%2B35Fkg4zd5ukbx6auDO4PBk2um2Om42OUX%2FvRJ8l%2BtvXXoEc7zOiDaZWKGXzl3tX%2FAwRFaiTaqpZqrT%2B337zKL5XZ8aBSJ1u%2FeloViAykQMO2uyadlRGTahW%2FzhStzYoVdZvNJBOlh0vvMoJfjOOs%2FCvovhRx3w2MMrRVkdX7ET9Hro%2BuW8os3dI5Qi38fjzpnJb%2FQo5ynKkOCKBi4X1UAHkfAKhmyFGSWEpcIKlJAKi5mArv70VYRQZP196bymoZcrQQqkbESuuCSjgPmP%2B%2BMUqXxjzOvM59Aqid%2FXuXE7jjQZGPp4jSioXEt9ZIr60AgILZwYacgOpGnfRfE%2FNRi2tmSXaL%2BQq0Ziui9nCxhtyzooKtmdNY0xhqbwJi1j8foFV3K5b8jQYtN4isghfxJYack2DL4oQgfLEtCRCxWO6G1me%2BGuwfbw4wG2wmUIuMjL6fz9v5N3bwWOJ74XPcwNpLx4w27LHwAY6pgHqEAuOIdXCPYsEqZ68gHTkEeb2Qd0uNDC2GUw%2F7%2FDRHR1jSvlTkys2BbJ%2FmZ9%2BRcWIzeWxaT%2FhC72UE1NO%2B0wbk0l0EjwfeSkWP0sNztHZ6fxBN9cpSPscdnCYV15rMjkRT3Sa1330FYaa1RZ6RFizAbhSa9LsqD1oBwYRqQl%2FyesgOrAf%2FOaMuzF%2Bv4ihTU%2Bz%2BZJi2ipjQl02GUwrOuiF%2F24wRRkl&X-Amz-Signature=8930ca5bdb7784ea910ceac17de61090cac79d7fa6b417a53cbc20b3b7a1031c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
