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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVDVCWD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ7GVgaZFvU1ZCLQts2RzqetygoEVw5xHMFcCnYyG3eAiEApKfW3teWMecNFoFxzYTQoLPvlr17lXC8ZkAbNWc9%2F7cq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDB8RhYvJXCqJgkAeQCrcA2MbbaAcaKmQMzDs4nFK7I%2F0oIObwt85KnKuxDDLSzC05FDrld79s8tmjRu1b0gNI1LMgCeYzbvEKN%2BFeMdapujfrMLz%2BM2Brscj47U4kNSSF8k79MFm4mmwly2%2F%2FfSeUTq%2FIbphnqOptiwP2lo3h5tueMx4%2Flojao65ustuNLtviEVE5pOF3ep83X6UZzlAjBgGCvNSmxwBEYXZnCNLJFHAQt8ZxS19jDSs3838jMKrRiCvEliIvo%2BtXQolFoJS%2FWzPxP6Njlj1wlSwtJ7Z0DwTrVh3gqxRgie5pyD9c5DdxRGo97fkeuZiuqJkPm3K9pLHA91f1PX8RTXa7rrV15r10fyLlnckz2yW%2Bdme5m7pfDuIBKrJwgOgC0J93wkp8gcAzmz9bFOTXV%2ByDNu9cjDYjVVbJnM7PMATff8GtkwFqa1hGmeJ7LoramhLR4oaTuV3FybyAbd9iXvc8jS6DOvbC%2B6WdkykcA4u%2BthjrARJMLDoyMEt7LfMLzVN5tGoPghMX6YSGDXV6cUQhzkWgJwgKjn01QMqmqcPaXPfsBeGdioXQOIfsdlO37ZLC0SNwRVO3l2efMPrWHzimgNuY6V3WelL3bPbOkMqkEL%2FCcJQUNo45gSsoKrFVicDMPeu9sQGOqUBDqo24avXdMVIbFmS5IEZwT5PowNDOzQemeB6%2BjW3%2Bzg20RumJLj8FEG%2F3qaPmjW95hZSmolh4LOPBmmm3wJZzlEuFRzVbsmsZlZlxXPim89wje%2FMU65srbCwejlRUy3S83jq48gsiUwDVLTkHayzCqKaK%2B%2BC2hieoZ3FE55HmcK202G9lKNfLqJ7LpwW2n%2FosVI8Z3gSyCK7JbTUQyIwUeXQpFk4&X-Amz-Signature=5713f6b80d10aaa92d10d2d73e96c4aee72db9778acf0a1c484b24bb27821c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWGTIWL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQR5Daj1E11oBNPGFzcx9lMt1FSDr0oeWMLHGI8B0z5AiEA%2FCCJob5L8EfJSMOtdcwt6ZW1i38zHq0y0FcKpa%2BvcGUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPKTCsaBWFr5Drj9DircAzOe2RPs1xt6xas8E69WoA5xlPcTiw%2BIAGouAccRnjcAMWxHeWyHq0dSbXwC8vOMDr52XKCwdGLcfO9AUM6w5Q24CPZ3JQwcV9D%2Bi8G7fVajqtFryfSHUlML21Gf5vbuRvLP5Dk1Z4x2la1zX1kgUMyIRu4LM48pjOlyesWI1wvdFvwS6r%2Bwfoa%2BjdvxbqS3CC2J56ZNl30Di2F3ZhBvK5Xf6dsdSONES%2BUj5sEDcG03I00VeT74HMVheuNhTPkYsqFUchffNUyrIj188p49Nt8J%2FPvNW3fzw1sFVvnaxOqME%2BcoQfkBvp9NU8G8E4F%2Fyeb8KzwS%2FOONRBNEpaQFfDuWsgN9MZZI%2F%2BYFgMwHayqEy%2BV3SvJDJBgQApFoHVOK9w3abzG3xBDs%2FzloLeDtmIqjZpnm2H7xGX9Ork4Pmfc6pgZz0gGMo%2FDofPpdmyoxdoOsoelnTDn%2B7ehMadGUoZEX7pEteUaGvTBFHRzBbJ9ppoy2ziMFOyWW9ATQAWHOprvUFXX38oLsK1oR0S%2FCw61tndLBX20Pu3wuvJfxWRLOAu90luLORBx4VRQ6EjSmHn6yCgDWMyStxuqWomPJgkjq8tzDuqVkdO2HWK80HVv6RaP7t5kNuEDcsRBtMKOv9sQGOqUBsJuoUYcC52zTfKgWgbC5w555OefJan4%2B2hi%2FnuEKdfCjnokRKR%2BLm8M%2BTMLmrFz5D7QolESCQ4BmYnNvI2w8zqLaOVpWg9N3IWz0b0%2F%2BNIswnF8g%2Bok6U16DnSbMqb3dUkprb4R%2Fe9SjaI%2BEkNfNHZ5tczxtb2UxDTWBGEfkBT%2FeJCHrP7UwVuhj2tEOloU4ZMvYid8GC88Rm3x01Lw8eCNkP9si&X-Amz-Signature=ccf722870310d5edcd08b3881701abcbe4bdc31c4c04607f55b5bb26f3ef5fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
