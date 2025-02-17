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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDN3KIT7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCgc5SKyn0x76H8jHC4IHENM7f1ItDcbhYkvwsNNArkAgIgIvTP%2B7yi8ouhZp3kfso%2Fom4f%2B7lzBHhuGLyPdeArgNwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCKlHJaR4KrBAhThWyrcA61kd7SzR8RJNi6hauVafPc1GEPQrR8uby%2FyXNJkwtWsSiPtLQThS%2BLoV1gFi8mAvYHiEYCR%2B87aGX62hZCJXNsowx5UyHa4isMAURJUBBlg%2FY3qdGR43luza%2BDWYJFP25A9VZJ%2BTWjjDhI0vvHs7%2Bfub6Cad8gB58RboD9TEsf2xeKbA3%2BWIwDgzKZQsG2rr4FEWlmA5mEdXzaLZftWKfl3FeTOPn2lPuRhF3h%2BbDVIxa%2BYdCV3oICAVOUW7orkeaWuDuzjQlRAZlmY0pppIVVQWNyVM4kxBpKEfhbY%2BjNm05pTv%2BhO%2FgfZfal6oD%2BYRCO00hGCINly28W%2FC68y4VJJsnmhSlQbMRWNzypSm8%2FS93tShMi5LPwCyQs4jR64Rylns13uuLnXDwRu1fEZfgdd4doWY4I2ov%2Fo7zuRXnFysSz%2BzwkMhkbm1I%2BVNVApOxRZFGs9QL1HyEwn%2FxftWOJwWaJdPoys1mWOiT9Oz8C4ynIhAUOvFlh%2Be0wAsoN6qwk6Y8SjHcp0DzuCIPxkQQyhMTFbnIpjILlAxGeAmjYNXJoYZOIA%2BV9Mbu1%2FFNFTuCOQqQBjdRA6%2FdfMvvHqwYpVOaBTV9dVOC5waR%2BAapmZLwJ2yFfAC6mllP3wMPeVzb0GOqUBaY%2Fwj%2Fx79%2Brs9XvMnsEH1ghCR7%2BBfHp6KaYrS2cgb4GIq4jX8gAUKKvI7IEdZ9iAyfsqCTNz%2F3J0BIHj7oOJSTl7jI6T4TSjMvVMV9pDA8lLFx%2BZTdpynEJ1HgXmAzSahpVF3rhZh8GWyhcxUv1PtGoBVcXhtDSkHaMNlVurT02Dh%2BYzDJ6paTYYfYwNA2LMx0oJwYIkzyQskHOjRRHrsPJNl%2B%2Fg&X-Amz-Signature=8cfa9bcf0d3ae30150d6045ff1488aeb93d494e4cb6b53de8242656d9d1b7158&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBS2VO2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDjzQxuZ7%2BB3P1bpH%2FUd%2FsG7wdbLkIo51%2BN2AFVxre30gIhAN4ZwsFEGviWnaQ0Cga8NDvWZiH%2F%2Frx8udFn4Qh7SIRaKv8DCHgQABoMNjM3NDIzMTgzODA1Igw3KAovUs%2Fb4dYcmH0q3APrrFjM9tUpeo8aTQRGAy55tSPkpXnK5YVEtPBOK0VojwJfrDtUAm0Mec6atcqVUnLbTD6WCCbfxrsNxO54NSyyjzGgGzwA4kmVUxXBXGm9NCyHlMEy%2FrwzRw2OQr3FW8gy6utM8RzpZ6705rFYRU%2Fm9XK9wSWuFLnyjFujQzAu6%2FYN4HRfNoks%2Ba4T9VZ%2BuzzFTAvK4z7L9QvYD6cgq36gUaI%2FLqdxOEwJ2HRwaklYRCEvj0Y4I%2B5GIRsj0fmsViY3Vr%2Fi0zHmXWczWWnUIdGXK2El15STdA3PZz2tpdqWLsnBtYeZCdmEwM%2BCscz%2BQ9edW5fYrvNPbAxvt7RWK0anQugFD0WbbI%2BuDvsgThSdKVyzgV1vO5yGs5KR6QV83i9bkZoBeoi52ajyed2eG2CiT5ioWHbVBeT12V%2F%2FxCCXCmY3rajth66iVmnZWG9nVCij5gW%2Fy%2B2V0fjaORrvCpToMlQpvuMw84vh4MSKo15pb%2FNr79knplDqle49ewFXyKQyDomvtHVyNrSan%2BtPuLsnjCWUuHwYyVmB7cJD4JNoZJm%2FIPjm%2F6aM1cLo1yf%2FNvjRHKgun6K8fR1XR7WItjph6FlXb5DhSfdEOyOxPudXP38JKHbnJNVHBmKz5jC0ls29BjqkAc3%2FZWgZQ6Az77Bly11mSn9dRzTPBEYW%2FvkAOdFV8FR%2FdjesY3QRHW92e8FNx8Guf8wrrhKUOdW980TXrss0ogfiuY24XYDEBMJ41zjtdsAvAn8oCBwn31cHaYW6HmYbNxUp%2FYu8IPO8ssfS8dpsXlXh0OzS69j%2BlB3fILHFZRX2VIXrgV9JVuDLpXOVqeZ6kX71NiI%2F3N%2Fr4ngQPVbQNW%2B1hMg8&X-Amz-Signature=aa9aa04b0cecf52852a8617c9870447592ad905266444beb6ce9984e61566def&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
