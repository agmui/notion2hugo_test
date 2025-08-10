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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOHIB5QQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxAmCvp0xECCEl1GQN0DjJZQf%2Bee8sBvy4bTPQhwRCkAiA3OV8TcXajiJX6vSL29TrX8MCSnkPcu8pTFBvPLGkYzyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkQcjTR%2FpUr8uZL3AKtwD2aymoLsfcUQtOOX5e1skX2leWEEVzc5qFWgdy0EoRtLmO7tpWJMMR2GIBx71UwDAgwWGrurokZ1KCM5deZyzviWQZk2ABLiHkKeglAgGNGZ27%2B13cede2v1TlV%2BSLJJ%2BYdzz9d5Ph44go3YMXZdz0vSwdw6voHfZbor1ulwKHZ6ZN7GeDLDYjlOA3weBhnq7TDTMGxk8hfvKFlLULcXv%2BFzu5oc9TMhevo8sOMmVzRDDBjGYcaKI5N2DDHFZfCuENi1Vo4JaWNnjuTxHr%2F3llNmRruhBpkFPaksSQ0D0e0W1RPaAw9NjZTCZMmSXcY07x6I0Q5SlMVj690W7BSDGIBN8kd5Tw8V%2BMGFGPOh%2Fsq9LM5De1KX8yMpFJcU73rCAILDbM1FQG6%2BTllvntigcCHuNgQeA9qAhJmJBaDvyVVWQSqaHiZV%2BdIL%2Bslz1XoGF4kQrQGrbi5sP6uuISYplsaZAXqls1lI8Tm0ZuZIHWXZ9P%2FqOLDtksFXnyVCCwdcbkjciRFMiWpDxFTzAxBrRfWV3AzHjNNfa8ABHJzqJzGgMsykojeRueDVd2mXIY%2FSCqLfZYAz4xK5KPb9LBfg2%2FU2PY%2BvZW2MKejtg14RupnmjFnmzVaYM%2F9TRKBowoLPfxAY6pgFda2uIc8EJXYA4XHbXgX8Zr%2FPXcyJKvU5QjPn1n%2FqHeZo%2BSIwBqD0zVPSyYhwfGZFNg3KtawdeR5qOM3FCiUoEDlCOymrDeYitNO6gguv%2FdTzum3oF8I0sSpiNAr7T8yuvYNZlhd%2FEjiUrTFtdp2mg2jMsxo%2FUwF24AbJBDZgDGkvssgwvA%2FqQ7fbQtc7Hewsyu4h7C%2BJiwIZsSJ%2B0a8G2P0DadZLS&X-Amz-Signature=a84fcac5632dce2fbbc2ba9652d9a7b172ccab71f8e7ac63fef240468f526ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG6JBWR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTpSEYQxm6WpHuFUV%2Ffg%2BezY13jIBNiUs3AWD7T1xjmwIgQuV%2BcMXEeKgeoAuZUOKbQVVKB9cAzbnJmwvL7dnrVssqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyEyaFOKY6iItPyIircA34lld79R6dfvxcdQ1%2FN2wvpLp%2FkEPddLRX9O%2BesGCb7%2BCjcAuNu%2Bh9Y9VMWQeCP8EqgSbBHCQdkpHsfRmbwWI6qmpwJUFrcQ6DfA%2FHAPTtN5qhtp2pR3mudXxdCxBQQrii8be2GUb9ONwWfaJNgNBoxeMYOf2XmxZQa%2F87F6AiwMTSDxCyNAoQmVyhnWGveof3scejgvFTrZzC352DtpWP98JU6tfubVYdkpCzXvPFuLTE47hWbkuNDysM2rMdF0Ib3p7ySAo58jv46BDcM99n5i9M8iB3vnImRoVYkDecHq2qCgZRTkbJGqEF3Lzd752POMC2I5oDc8gLXDhhlA9wdie2gZ7FXxxHd0IBLUaZ9E5FNfuaI8mX8oSJtj2pMOjJn9GZqeIR%2FdhqpbHslkLsbssS07R%2FQ9bnfWSoqUnniIuZl28NLjKDG3shAER9rE7tETCcGHQ5neP%2BIbfyf5EutMGQa2VLNgbGYqiDVVb3Ya0M8606uC83PKmJfvOuExDK5g6EVRMmo2pCJsotZ36ukW0fiQTFKEcDBBhPErWffoMflqUtCLaIx4CcIProJzGrEIyTMlfNcttErVkr77VnHowLZ9mr0pRiQYW7oINk%2BGo7wwIUjDiQSU2WXMMGy38QGOqUB4lskwkdw0TfPcmWbRNXLGpv%2BwnVg5BHJ4kSIyfX%2F4%2BnJy2X%2F%2FQpQQwAyW9FPxnx83E2FSaGQJ6cbsv4GcU43UWvB%2BJf9UzNZY12nrp67NG4yJUQVNTGhWYAx1zZ%2BhrWsGhviMNkW%2F8ojGfV7Lgj%2Fpq7l0gczLudSoypyZ0Aidxmd1BeLFoQokgsrGz8uRIOTUvV3U33Y1sdi9RVXsboqa%2BoEPMNk&X-Amz-Signature=678115286bfc5aba62a477b50a1a4a3b786c0119b002b6f64f8d2d696f3aec2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
