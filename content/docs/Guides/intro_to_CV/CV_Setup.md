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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRTYABU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaBifH0M0%2FwooG8Nx8MBsKz0h%2FWtvJVuG8D2%2FgBS5MBAiBlwTPQ0FWI37kOqv0LTG6Y7pVVDBlWQguAnhyIQXPC3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM8%2BzPXbSfT4GMvInOKtwDYSlUuX%2FLumUVfkkta8wB%2FBusjVTVCRUMnSzQUkToJfAFwReGfp1VwutD%2F%2BrBYIKI8hjfmFm2BVGHPR%2BwHhf7eUC1y%2F2JWJYEBmmdUE%2Fv7F%2FodFrNxRVQLZVVzqzuSps8qLW0CDkg4sLK8F5o4KH8Pa05n9K%2B4i2RjEmNok3Nrv2KHzbZMZBX%2BWvbzKvV0HUZOr1btBgTlbZDtYK9yrRjGvAp3QeIgg4Iw4JYTgb2mk2dV95oRsght8WPFTUnbsIj8YgXjwgpGVgH00%2BIOvx1kRvdqWt0bv3ynlT%2F1p44W%2FtJoJznEkLwGQ6E7IlZmrIA0bgvGUwinVuYuXcpvM3QrMwKclfLgBj7NJFQZ4bxZtZ%2BtgFv%2FZtcLLmYH%2FCiH5Fi3wsFM0AI1NgeIqCweWL99S9404%2FlNZgw0bfNdha59dRJC%2FTSq5I%2FkQIEUu7QvcPX50%2Fu2vnxA4jW%2BZoAJu6f%2BKB7kBGDWdvbAuNYBfLvjaMoPZOqXLpmzMbPfzcgf%2FCXunYEVIAO0rO6UhIsopnUOD2YCBSvjifvTyveoNdgde2O1v648PDmxblf2FlmAA3K9t9I5X1nrHWt67PE54BbVYCmci3Wwhr7poDZxnkr4pxlQvV0YuhfHrd0WI0wkoaUvwY6pgHArXpZ0mOQMj3jKi55ybt3dErrFYL8o9UxglelKEPPA%2Fb%2BBVuEBDBAZcj72zhG1G9EpmZ8Wdj5E6bXqpOwJTJXk%2FDWRFlm29fyo52UVJw9W5F12ZcdZpfcCwygMYJC4xLM74hIX2%2B8SZKHKJSjdEBMsDmtMJ8n56aOh6BYSL4LYcCz%2B%2BP9rhpvZTHuRT1cVmuPAUE%2Fl6Jh13Kj2T8U5cgnkUW0ONJ%2F&X-Amz-Signature=a223cc2030059dbb381119d96d6384cdbe150e90a1cba4136e3059482073b3fc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7BN6ER%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8WbgZ3U4CSKwlTbAExi9c3LhGAuzAFbBSc%2BmAZZ%2FQNQIhAOwolfjeg0yT2zijXeOrEn0D8qyY%2FsVhMY%2BBLafsupt5Kv8DCEEQABoMNjM3NDIzMTgzODA1IgyOu9uC4SI1cDmyNI0q3AOqFJxDzmquQkkJFWXr%2F6LL1aQhkHW4J1rG5xPARV2Q5HvhFJbqFLT9Sx4zbmnZma8CrgGfQ%2FTme4orLnF8y4mcmHdkkLZOA9mrE3QNs1aT6QG41oPq6QfdAWubgSurhCjIckIjWJFiYi13t2KZu0UzSUe3whc%2BQmPJWB%2FB%2BFVaAcsVutqwxFjrJFv1P1Dz2xrwkgKH7MaB2UOHU4AZltrClMRCKyWN4CnDiX0j5XXUc%2B8IP3axkXcNYZ%2BD5euyopJYMOCalfvEOZWkomUeS40pc0eSZi%2F509u175gXUAgTqQH5Uslu5Jt09qMnoJyPICXE85Jw5%2FG7ovOQQWNjZkB0KnSoWc%2FhL65DmCCXh%2F7QgACfqXUbHJb2Zh3mg6EcHZjK2fG%2FDiIwx%2BgF3acOY2Juq3ZW6Zrsj6MvEVWnbT6EwtcMDigtNaY9wVkGFSHp07NoD65qEPQIOyzmOHzaO56X3gKLqFxfKklQu7Ow4dM71Igi1BxZI%2BnjQtJ%2FevuKcPrYMXpxFYEM0gJhV9E81q%2F2AngRDcg7d2rskDoCXqJy%2F9frsI1OQs1MXB0qS99Fdz%2F65CBwNOUUSusEzv%2BQN2656wFdw1%2Fyzt948MxwoUDF9s%2FBMvnE%2FzqEUucKEjCUhpS%2FBjqkAV4VlSNqG9drYip5ZV%2BP%2BknwkBm53Trq9sm4fi%2BUjBCvLnVyG66ncG%2F2lT0cgd%2BHIbL5TpgVmLq%2BWZuBUA1JNtrZS4NInHIGSSQceWT2V0i%2BTxATOnEiiOJtI5EoBfZGS4XrIHtT1ZfFnTh%2FW5duVR13tGFjpx2incJSU%2Fv9wuluk%2FBXQtFmCRdU2K%2FLWtdaH9M%2BMGNrGWKkJFiF0p8HjI5zsgPJ&X-Amz-Signature=f13e348c784fb0ae568d2891701495bc7e234c67df32ab06eb143059cddb977b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
