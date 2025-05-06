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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6SIDIA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9eHKpajglt2TunCRFGYVbRaaUFH2uRTPxNM15tfYjxwIhAJjhN%2BKsNnh2WkdIWFc6OxrxSsol1kpcBMws9G3D2pSSKv8DCDwQABoMNjM3NDIzMTgzODA1IgxR0Hcyia1KANopdZUq3ANMYxjo0k7W2%2BchPtl8vasLTyH1VkaNWm%2Fuxexp3aLF88UxLc9sseFqNKMXCqYswajVfHpzAbwfRGusj4zo3%2FCoOfHbPoNx5pqLWQNrH%2B8k%2FNVvCJbGDqz3bCrofjqffIdbAXyiKmcszETTY%2B81mXc%2FTiA6QQaTI%2BPpGYZ%2BiBcefHH4zwY56LWurw5T58tZ5MrCgBsbaE4c01EqQvZp%2FbPi1ATg6ZXJgChbxgjGzWME%2BOrakZsAQdlkdnDybWcjeyeYCmLy4AmuuTkuNJyHIO88uQoHwx609Sv%2F4AIlELbSnSPT0rD%2BL2YoEnzKc6WCGdC08ZKVDMuN8SzcZ2YB1t5yJm%2BmTun3UlDyH8ApbIPz4zRae74WAeXJR%2FA0i6XfhHZa9swfSYEkDePZ5cTaQ%2F%2BHXGWVrI%2BB%2BJ%2F%2BKVM24KPVSeganZPVzSftJ6NoGYl%2Bg20lWpncbrU8dUfjOrBPkbCw5b4Gjnl8qdiiBFX%2FA5J5AlLPaw2tNXh2QS1zZVJTAHgeTsHJB3R4%2BKh8Zr%2FIR0DnLTNJh8eLp2E4ppO3hHUgWnJMUe6%2FkCs%2FHWJKegvw4GHV8uFxQHSdtqfqXFBO0eVjRhkIHTenzJPSB5p6adDs7BVrb%2FH30LQ5TnB%2BCTCr%2FuXABjqkAYPsfBBlQw58f9EVW%2FNFfl8ybk3BHTAizojfGvg7Ymj1IovTBYiLPpUVm3mB295GwlGdcJsmKDl3ZH7oNxezlDyQJqPQz55898M9TaX64TE0IJcnFr0e8LXlqQ%2F%2BG9rkf9qtMOMCYjjRRzMKDyj1mZTw%2Fc84zaiElLVMSseFEhVYglwUsv9Ea76Waq%2BEiz1v61Cag4NjLz%2B%2BAHhqKdlmRpAxe8Xr&X-Amz-Signature=9857c83d16b418e47c63c3812d28117df4f55d74f27548b0d3fc507091bb4cc0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6D44L3N%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFml8%2Ba0f7n3fkbO9O2guAVbG2hMJIvFnkmHuhd03CbAiEAjofiHhP8q%2BPWOhL5xzoz5QodDsIuC5gz2QVk7E9k8FYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLBjTwbDh3Z5nv5Q9yrcA9fZX0oAdameYgPbpYrzrBVbnd1pUnSC8X%2Fr50ec1RHTdxiEwCCyqRZAeHGkUdTt4Ag9S4%2Fl4HyRoOhHOHgFjx6J8bY8jwzaNiiMa6FcoVZ0DSYeuwRH10TTP%2FObj79ICnXkvuf8leGeiEdPqftA9PPCkiCUmumJB2JfTvLuI3Kph67goMUqA20cpysDZMINrhZ9k8kuHL3UDmGpMbgl8uNsZMkQQ8S8j%2BPbHDPWDVLf5GeCTWGXgEkfsJShtOGI%2FEkGtLcU0sEB0a4uF2JM%2BXDU9YBNcZB%2F21%2Bms%2BttYGoXNEBhearJpJcQORcvbSGhpjDrEdrH0ZahI4lgQE6EiS41vLSryWSpg33JSx3AGyGMismlNandFxgN2HB2jyQxbfsb96ALDAutOyRzOFlhg90lQfH0TlHBTwD6j5CiYQbFai9JcRY2sse6Q2BCZTcmAcc7TwJd9qt2wx2Q5IFvnPgDO8%2F1FW3pht8JdthQeAMYJP%2F%2FGdDXT9bBiLgTGbnXynbeFUqWHhYpFoeRhMUg0ifBZ9njcO6A96ESoSlFYQdM1j%2FGkaR4gQciCGGKtNzEDOqWIuR8q6fp3pfonIN90HOSMpEcvQglyj1hrOuWDf8uwhbDhCRIrG1%2FosPZMJ%2F%2B5cAGOqUBBJJrpHR7lbopgAcyip2%2BR8enI4n8epOAUr2LuDmB%2FSWvYWodd5zXU%2FKbKXs8wRuNEEbyr95LtUTb1lCfDCLdfrE8Hvr7dN1YVKkr357PB6P5IiCtY9Qb2xUkDvo0gUpn2c7X4bTNYyGFcLk6U4m85uwZv%2FFnskOLJJZ0HR%2B6tQsJ0WrHglMSIVvt%2FTZZMDn3pRg84b4DQig9FAMKCw38hAoQGfGm&X-Amz-Signature=860f4f7adf103c8e50221b6321203bcdc2d14cbc4944affa3bd4408311424e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
