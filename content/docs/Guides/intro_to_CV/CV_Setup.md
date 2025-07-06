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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNBYCIA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIH%2BOTUAqXUdb%2FvPldEtXsM284CkAnTE2DbttHWQspaQ9AiEA7qfL7pkmOonbXDVVEX1nO%2FoGdjT%2FVaEhnDtk0eBkPRMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNbTicgJMOja%2FR0XHSrcA1Rj4BqoD9SZkgbhRmwy9E7mcgIXsyfoxomE79qGmgmJfcmYwqAtAzC6uWPY9R2Klf9qF5BVTICV6ET1xdvWKnscddobL6OJKmjkV13kxg8AwlMQEsaypuKsaim45vW2oMGv7%2B2shNfZ4OgLr48y%2BfF7RhfyIaZ7zMGQJNBStNKnylSMvJCntZS6In18Cz2qixQCX5%2FxlvmdXYcvCJI%2FGRRMoGaPAjQ5X9DF%2Ft6CvGJ%2BX1%2BW9iGTNhtyWfKw1HnKVT6RxxPTdmYVfOFsFqSljP99GPK1TVbe08BsPbP1ysfXXVzHfUjNbqIAeszLzqcUfmzJQt3EZMEBtcZQsAUgRRSDfhmByPAfeZ1mbNnXn8cMx%2BcVq21d%2BiIW4gNkWUUpwHkEHF8IS2RmmISa%2FcqMazl0Rd13sEhTMEoFkcN8HKacUSULCcpmSDX5u0Ma8%2F426ifuJTCFz2bMnSgZqZvu62XSVWziikq%2FFQfcxEsqzwdrWti%2Fq35AX1FCxjv9fwVLZQXLs276RCbTd3Mx2GH1A8DWqaxrrku%2BSemhkQKNTcpIFw2wDD%2FyPWYgrZVlZDU9fOijEj%2B4myPBbKhriTS7ogWrEIiXRvpGMM%2BIbMKL%2BOdJp79FtsU5YBYtVqDNMM2Qp8MGOqUB2U2QML%2BFIdNb8bXWd1wahDq%2FKxeZgbpePsOJ1VenWSRGtYJPwrsRK7MIkrpx7EldvhBQTuFuVfeuQ1Vnd2AzUtiHffLF4vMVq3PFvsz8Vv9l9mj1H9OYZoo1r5eLeTnA4762HyHsJYyf8m29gr%2FB4yJEEd%2B%2Bx6uGRXeBC1NLshaz%2Fo6uVmGhi8y%2FiCQTLG4ZNjLL5ZmJ9RWQGyTYp2CM3FDoG4nB&X-Amz-Signature=4e3bfaad798953df74e1ea6b727cb204e129042001b6b241acacc5a0b89c3d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVQJBWX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIG918X6mRGNEmLztDx0fU%2FfXymvdYXhdxoIq7uRg1MctAiBuHnDJsAYQYiJ%2BX5x2GjGtAaBmcOTV1iuXdL0NBjaQnSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMmubFHels8ehu8GBJKtwDCNeWKkvs6R2aD%2BO8Di1U%2Fk4kP3DtaXq0%2B1Ijj8l%2FNI1OUtV%2FFj3C3vOL%2Frjax3nWK7g3Bt16%2Ftcda42gpLoKcx7TSde5hiTorK3f5MtAIBlki2fkSdYmKAcZ%2FKIRwXB7TWvNm1ybUh14AaXE988YpEsb8fgQeomVERB%2FRoSLt0Wm18hWNh4x%2FLU17c7w2Ott3Re8iGjGKP1GsJGJxIbH1PodHO%2BH%2BwciQ1eoNsEB0adIkNd7EiA1NrvYkIkcCmc27KF3ZbO%2BH0F82M%2Bytvm5Q919dIcJaqFoGrl7enEOi4bC%2FhrJ7LAHmaqk1LU97lEjbmTXcd1cDNQqkIEDneiNijX9qsalXPsO95DcZBSdtP0DQIqOaNGwMOIjFAe7nZchL5jNqjlcGEYT6VbDVnVVEi%2Bzz8mymTuUFSiUc1Nggh3LeLVjJbdOArdCgKN98qyQ%2FCDPQG8Nu4tvWRdgYt%2BJz3gql%2FapLZF1H3dToUNuBcJtr6JS9ifaJitfCpXld4Aeim%2FB3yaEPVmWrWa4DQxf9swkjpescD2qo7kDRzG6dGdN69Vdiy4%2Be%2B1xS7h7ssYEkVfMo5r8SHMkAtFfSeoEc2F7ZLtw9mu%2FjiUqOgZ3%2BOU%2BzdgbvwoAPIts2iow65unwwY6pgEpLPJ%2FX85NNLJXP%2BGeniOy3Ldv9mqJhOC7aVIlNw3hsgBbWKIEMSzTc2vz%2BSzIdmqdCaPwI%2BQeZ5NOvxiX7itojW3J2SMStE1V55ZxM1TgcQOoTMCr687gs6ZaJZSjkvvdningGoW0zoFTWxyDroEmcbjfN084i2nWpY%2F%2BvbEwVgpH9wtmFUiZ8dmqPJVHHvFBbwtu8VoK71e%2BIL7OylMrC38UdEKW&X-Amz-Signature=f24632c9464d8b2f94f6d9e1225a40bfb1c0f4f724093fb282ca68ca2d0dbbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
