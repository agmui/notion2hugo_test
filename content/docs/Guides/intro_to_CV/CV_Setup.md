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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNBFESJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoKX%2BdTOOBcPCuDbt28wbzFZnAdPGoHO%2B%2FUfM%2F3MDZrAiAtpbWUtdUJGVdeQkMzohHVNQK86KifBeIu%2FZdYN1t9ACr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMhzh0y%2F6i6JZ3rs5HKtwDJ6caygxSixFQBFWFcrSBAfZ%2BA6WlYLfFjjLJn6Q11rOoqbTF%2FDSfd83Ofqt9mSfRuQpGBRxRU%2Bbf7E3lq2wdiJaHIDIfVFXS%2FmiHPe%2B0P1nXgjlCtDyOBkL9wKo6DWZe97G29886MtWkgEppI3BREK3RjRdgGyZFIlzhdiUMgMcLBk9400Q1Ai0rYA%2B3%2BAHIg6ZXN9QlS5UPdf7ucBE9bFB%2FGjtr5bHd6JuZWghgMxViy%2B93VSszHQp1z7L0HNYhFNTuRBeYTSvhXYrKrSMIOfGM%2BJ3tZLB0ZuWj7bDCoul3A0MxWlbnLR7%2BQSNHwZsvibKcDjU2xfr3NEpQ4skPZyiXD9Cz%2BXx2Me53gwUtTltum1i1d7TNOSjufmmolDczDxMxXDB5UxxmKzz401RMsPeZScdhtPDHs4l8LsB0MIWfHKdBTfqRR7Qz2W4tqCGKg7IeaNf%2BvRdfYbZu4JM0HuT1XFROEwiyqNF%2BsAP0mshGziag2SgCmY5XaZUlJTcdNt%2BTfvqVhBwjtxcjYFjZstcox0Ka94NjsA3Qxu6nOi25%2FkmwAzv2tuuEupeBsbMvdXyuMIjKaTrSa3mcCso9k1ddIQdtwdq%2Fxv%2FDstQsTtrZTp3tTbBQgJ6erekwmsbxxAY6pgEDPW2mut%2FSWvDxAnm44pO3j0iWiYez4qgM1zCBRcrd1i0INra77ckYf2RgpzX1BmEoShl%2Bri4V0jlL5S79dhV4lL1Yba0fCo%2Fi94szB9i8PnZ98bgqhLcoTsN5gkMR%2FWBx0wIvjCpxL50WPikF9OFmReKcr%2Fs%2B2IIUdaUezXDBrieCqdz1Nb3Q8rMfk14Q6O3C5A1oLd0mKEZ%2B1AwnoXZM3ygj%2Bz%2BX&X-Amz-Signature=da6b120a4c5d89b6df41a9f77bc49c58e43be69c0befcfe0c698e42e7ffe5fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQJ4D27%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwzSR55VuLFQYPTWJRVC62yttBfLspG27plWtYoR2MCwIhAMEqPvsE2FbGASPTdi5C6xYfQJjBl43jrRY7olF%2F%2BdxgKv8DCCsQABoMNjM3NDIzMTgzODA1IgxJsmwnGXq3g8ti2Xwq3AMSEgEderEbTPRsLHRQoaPqLghUN%2FiWME8X4fa1iCtc03YK6Rtfc9QVgpHEZ2mlbQwNFOg4GlaEpikKcaGwKHk4f71CctXxJhZPjPb56JkTubL7rHDMLAOfzm5Tq6XOVr0EbJnpL8p7LJQL3bIHapHeO1jlc0J7O0%2B7sycGpXL0%2BKiO1tdZkH%2BPsr81jj9NuE2iU1nhZttFdf2V52zGKFuPYSQTu3p1VNky2fypBCwA2%2BgJbgLA9HDDRZvGIcgChPhgxHu%2BExgxF%2Fuv0TDJaLbPpCIsA0rvNWOCIlB3p%2BTYXAUbRm5vPgZ7o3yBOnZDIX2M5SDz2qtVwMW8noUbwDeZIt1WGGFoey1jZPThg0tBbZM%2F1EkY35d5Dscs3wTGKWAyV0NJbd5gUivcweoU4dQKY8LTyor19ZTl3PEH%2FZR7d09geI7u6xPvDrfj4noUWjp1%2BZqnWD%2FtIQt43FX7xehNkvkK4PVLM%2BvHCF4a%2BpQCQ%2FsJSmXEPQBj7ulXlubjvqxOf7vYg4VhM8IoshihK92TPgAvnjo47OCg9jsT0opauFixJV3TfsZJHsPpYsgaLLq4eMk2inEfS%2BnnEqgMUYcCg2TFgigOhlpWFFUCYjDotLpOjFL1CnkxrTqVcDC4xvHEBjqkAfzeuNpzZdN5SGe9R1%2BVOQbfUPHdCW0AhHl6jwboEvybbSe1bL9shI6xglUCawx46P01x%2BO5b7jylNJx3Q1YjvlIiOm05xjqZpRZKTem07UOJgniuhqIU89AjJ63RPxC7hBoEgQYMZm%2BFSbg4d8mpcDHVT3ABihf%2Bz8pDDHTLws%2BOyi9uwGca8zJK%2B9Um8g4JjRf%2FCRwyjn5mJRroT3ig8if7iqb&X-Amz-Signature=e43e29701617347ece2ef7fb8208c975c7379c9781cdeeb0012cefa4d0af1faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
