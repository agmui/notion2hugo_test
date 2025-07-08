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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BKJPLIW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCydBkHOBo4ySlDGeetc2%2BX3Ng%2FAdFszeJbvdF%2F2SzNwQIhAOhVrsQwuMkQ3j%2FSqyGCzfHN2AVXk997gR61t9jOmUj5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKg%2FT%2B6HYo8Oz8WxMq3AMTdKYN250M1ATYpYEmpLg7LDDG6paHN51v9ECa2bn30tJUCtVMHzKtvinc2IxrgDanZWVcK01EmI5p3vnRpjXvO9INDyanMggwF61ZkYTJDUdfQ5koo1b8OhWEwgUSHJ%2FfNUIG1nwLwJ4Em1u%2BFRm%2BQCQ1Ew%2BcLtVCdFnQw57jkn4pnXVjMBkx4hSOjqAMu7r4FpCDMt6tqjXw30cKupbvldIHpLdPCLlCUmCv2aONSGxWAH7rwCWtBETCFgbLXmTw5L0uJ1oGy8U2AgJ9QqHl89Xh4qH1S3Gg59SYi1TGNxSlECItkLQJGyAEUKYyfrzZTYJzVshVTQJ%2BGqwz1PI83%2BzLJaZyfA2tgMxbExqTTw%2BVW%2BDZbP8l1wwz%2BNdAzyVcPZLUBtpohZAE8wX52DKrqmU5uQLrKxBf4V387K1fsB0IgK5Dkv7ctKTdDGN2HU7aiFP3SGXCLiEpmjXMFB9p6%2BtUdQTkx1USiTy%2BQCYAb%2B52AHleiMJ9RAP%2BM1Pz6yHyC5ATPkNiB7v0TMtq4cfiQvQfDCcGrsPLvHZ9%2FS4VaEaEh4%2FwEfb71rV9Zor8QWkUcujfePtLZCtZJUpVohdtc7pzpgD279aC6StDmyIG%2BCAnSPSz936nY7oQ9TDMhLLDBjqkAZtHJyZ9WqT58BysYH23cPG9HEiYlW%2F6wnndxra9%2FYAry%2FIJOh0guulXATMIlRrGiVacFvsh5R2v9vT0xlqSRafPXxJ7biws8vuT8Zm9ooBIn%2BhrFVl%2FJrtbl8EED04d8lv5TXVQXcs5tNyOaQ0gm2P0vahwN2yY1YKTSK%2FsKzTJ9jizWmgMWqkYrcLZZE%2BuwXfYbEOjQojnTkozCwZN4BMyLyqS&X-Amz-Signature=d1133645fdb8acdb130b3e68dad131c0fced1b09a44e7becd6b12b7873d6d728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJTYSJN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBcKeh1903DEb4PlTaIaaJnbIIf6ylLrwAZ5ZO8t1VtwIhAIgqmAMuTyfmaMkwrXM657Yc0eVnrgIa9X4l83VFoTN7KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKKHiQwyIRhosAEmMq3ANyGBj7XK2eaf09n7zMHgPsYSVFDxh4QgM1sHe3E%2BVw%2BY9jb8iCpAZuTS%2F%2F2dkoI%2F6%2FcOj6%2FklS1K2LFj1okd%2FKjFvmKXw4kcr4EA1L%2BDDfUqC46tJesCUxwgYCNK7nD7fyyTtJWj5sRCrqpztB6mOO2Yh2VqU5tWYkbgs%2BCNIz9TpnKM7krMB62Egzpegz8Iy%2BpLTUWeAwTqPD2PjKZVUZ%2FJhVMHQPyLX%2B8loG7Cj8jk1F%2FCFD5dw3PBWnGXQJ%2FyCZQbEbJmNTpNU3SuiEHinTuO%2FCO7JPyw7aD6ReFoeR5gblYaNPnaWT08cWBaIo8vR1wB7uQjNd66%2BTbPXNs7jP%2FQAQJ5N71mH6SyyFMhbbgw%2BtXMz%2ByKJ5ThFvNGOq4bhNarN54GEvhTSQMmfd4dNinTcsj7S5ehHIGN2gpLGfbh%2Bd%2BvM57Cv%2FeQMLtQiRGDhXtZQFlcHHnND9XjTw6nz8XEwtiOWSgDoyQksmxKaDiiQ0FlVdIbULUbU2BDDlwRPLMjXebN%2FbPGE8plBXO2t7NVySf9MGl9xMoPIMABjmcyLdMREqQlamyC9nM61H6Co1ry8MC1i06VD5somrgkwROjMSGj5T2523vPLQZOaI23lDrcyF1EtSKAx8sTCHhLLDBjqkAfJQ2d%2BNUfP8rrsVLToC33xr6yPuxUXF0TR7m9AG11%2F4XIFdy2Ry1Cd5pMHQTsdBBrS6%2Bg8VJ94K5%2F0Mv3ToVQtqaccgv3jQf4HjkpvODZtEsvwRqQ6Rl3C6aT1Dm4agd0pzVL%2FINe25GNjYSJLml7JFVcdtkNf8j%2B0e77dZY9yr1ldmt2mycSxV1TKyHDmoOasz0QjcddZgZZLdKSADzDcgWYuZ&X-Amz-Signature=cd9c1e69fb1fdc2ab2c02059284f885ed187c0cb868c299e7c20db2c5db9b583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
