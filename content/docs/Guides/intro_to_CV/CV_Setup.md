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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBDLB6B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FPdcKB0q7n5DKWxY8m09JMYDCC3kArOVFXO49b1OqYAiB%2FIpJDa%2FUx8xOKWxA0%2BsQ15d5e1ci0Bws5XYZ7EW3t%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM3kgjy2LxB9f%2FKV95KtwDPZPCHiycNdUDvKKj835qodW2TqhqfxSG%2Bf9jKqTQeUJlh4BhZho9Kt8NItfDdjdUh1ptQJKueY4VuqofCnfFW4o%2BIRYpIGF%2BmJLsaoSZm93wsg3cPQu%2FU9zJG9bNmSXMuMNoaOcZE6RxTi0ow%2FD6Kg5If%2F3vE6dnkMuPRBcckauCS%2FJAJ2tqvZp%2Bh5vzf7oO00mxIAe%2FxJHxsWg%2BDXCHdYDivx%2FOiuXdJHqF9%2B356o7eMJ9XNdU3gvtfGyrY0WCAUlj0cPAAZgiT1pioOuRUpoj%2BVA2GhmCwyGhMTrvdYeFiutH%2F%2BWERCLDeIZxY%2Bh8EEsk1odJDbO463lJl3ewr6nDpVJCPjEHy7REdtmQGdW1U4h3FeoBiuaCtGJO4r7q3UJkVuliVLXbLKrLBjXmYYjrpyCxRXDl0gnzD6uBHQJp4mHmYdlQCCBMxM20QRmtBCQB7UCXvLeCRL2GmNhYXT8x2rpcVllqv9k%2FVVOVSTtoEUM3IoxVJFJVCSlcq8MviRs6H3VyQ54%2FLo1vGKrnHUPdOEyVGnK68vooYxh31qu2KBdpC47WW7qjHDrfdOpoqhk0ZYLEpPpetrPPAd4nrO73AFxEEmbZrn4oDMjNoqUId0qjATO%2BTeBfgMZYwnuepvgY6pgGNI8RLt9kg2pb33PHCS4tu%2FmVTuYarS%2Bh9L8Nii%2FW8mohaJmY4aKym3uqZf7gcdidv1TvNXJxf5I5KT4dx5pNnAzlfilVqdnjzIFT%2FotbVpPabhNS9rIGXF0DlTJBx0%2BemnnE7hqtL9GJMTziUVN0dN6GfQ4ww1tw2sirId4nwYPww0G0ppEfm7hWehEVpST%2BFs3j8b0DU2DS%2Bb6LTJyIoypf2Q0NV&X-Amz-Signature=44520d5ea4b8e0979b229434f21cd50b648232e7566393005e70c8d8e2b80f47&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LP4UPNF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8oy586TlTmBcj3GyNGKG1LcguvuEjhfN5Jef5sQm%2BYAiEA1h7uUBr8NcmtZJsUH1xuyS03aAEVkXRt9hJZkSisvoMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCtJ55T9TqgDs01vPSrcA8IWmEdfxPfo%2BM8Y4msyzSWW1Trm5Kgu%2BSkTtGlonQKzsplgEP%2B9ozdpo57nljczIKRrTJswYa6kjjlSgEZHPjm3uTeQk1Q%2BogGVM%2BnBsFbxYrU26tgg3tuXD5McWkTjU9r2ZL8l6M2tBwpnZzd2%2BWc17jt8CwnjOeH3J9pz%2FuN8oxNIaMC%2BUXoBeKI4wSiXQgPaEkBHh%2FqK2ufQ1SMmR4cccINbRJltJ2ixi1MuXSnf7UgbRV9DJgMTtseruC%2BdnxJOrbqvAsN9dsm3KRwn%2BUOfy2WQFsLQlW7s6TGvlGcnl3Ga1iS6Lz6lQH2iBazf2i7KWx9COtLXWBfJkub87IS4%2FyZpFweAMZvT4OsA7K2iesfL5DVFb4WTmU3RAKoWyhdU3B3x3uDo9zrnjew5Lf2ptrxe6WhqrZEYtsQi8EhvaBRRWAUGrHLGNh8FxpS1KJaE3MeMHmDvBm5X3BGre0hABjcTKRpiYhjgkvD3hGfMErlvXYsIZvUs2L%2BuhHDflvvRI5OUVnI7gbg4ZYD8TXsy0fRyWgHVl%2BBHlqp9kVWhKnhHN63wzWPZ%2F5JhZv%2BlipX6%2F4qVjfukHGY%2BZSeeJPGM023H%2FhM1ySA4qelvJuuXNGLXpBmxxmaN2pYvMJ7nqb4GOqUB965uFMW%2Fff1J2iz7xNFn%2BkKa5y4fG8h%2FMYkgLterWWYu3rvmzqP9%2B4tG7%2Ftwom0MiGY3atzmWBjQRm4xys9dkIe8xSXS7xcrNQyQjGQBc6jzKBPKhl3Hlgbj3TdVtnUjcvRepJbwrI%2B3ncht%2FdCW6BGI1ToN3NmnR7i8VPNRoXnoaLotchp9%2F7lb%2B%2BhYAosoAwQbyneiX9ajrTJTrY7cVUNHEWW4&X-Amz-Signature=6a4a690b007b3876f0c07b2959c507fd93c2bec7e05edbc846f286bf22fde6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
