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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4EYIQCF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDeUhfVN%2FT7ZkEZ1MohJcXRRgENXMVJQyv%2BP4d140UcpwIhAL0%2FVCwUThm04w%2BMRsERwKQTaygOIBVuqRybak%2BpsB1bKv8DCE4QABoMNjM3NDIzMTgzODA1IgxAHxgB%2Fl%2FLvkhJqAYq3AOzw4uNmFgIawtXjwqFjttAx2I9u8HBRYuBzGejEEiRG6UGRyu0Iz1RkM9mWA%2Fr5yZfC4%2B1gxgEpVDodejAv16ag0ANmaxFWP5ilXuYpcCkVyne2xnPzs%2BcQRqP3yTmVec2c7BCQx4yeVoSFgBQsuwBSUjNs%2BDJq45QZMQ2wNpR4LXUgjMo2LI1Jz3pAgNkAjAETzDp5qSZs%2B6DR9liFc2HkhlDEgEVIzlTlFzEko7Di0bFkvVHHqhr8%2Bl%2FHkEm1YTa47rKJLT6Jv6YowPVr4LJwEpk1%2BQ5e2FVIVTnHswQTQ4rtJmVTTrNroWhYias7Ca4gOEsnCYSQbK1RO%2BNrahKT0T79oyZHnffKxgTnYk1TTpgW6m6zBaBrrWKU4p%2BSbuhZfP9iRRM00GDRgO29CjxuXWUhQxZczqixJxZisrNehISlvDNAuY6J9jADxdodtk9GyH4WrVbz3glbclhg%2BEkZyWR%2BJ12Wpvpr3bxUh2C6fb5Ux2UoyXTFRmGyKWhjPfZuPvW%2FJGKBnnosIWr9Hew9vKrwY9b6cYXrhB%2BKOEuQaNNTeOe1TafhI6cT1U%2FLZCrSkdgdtnNWVFW87XUz8QVmpaT%2FzWSddwoqlGB1tQo3LQkDbM7YmCpVelC2DDhwMTEBjqkAeavKQeZuslMmtzwUpox%2Bz%2FjCeoG9CqvWyglmJoQN7b%2FBj4uKiHy%2FHKa%2FL8fFkBux7lfRxGHywN3TIZdHXFdK3A8O%2Fi925LmLP4R9fjh0hM0uRsh3kPZN9NBaM7mhFTqYjxwJpL1zQpyM%2BMKfdgbd6CQ154IviA7v%2Bkywm%2B9kabvJoaiuTwveiBI46MhQm1sKRB03UOE0o9J0wcjHcmmV%2BeFz5ZK&X-Amz-Signature=5a73a4772f07ef0fb265858990ee1ea11fe978ca1ad046aecdc5c98b189de70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBHNOX5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDr9m0c%2FZ0%2F1xr5ROhxhcOkjNw9nE0fr%2B2W3d8QFVIRxAiAboSV62sCSRCwv1MNI%2FmWx4uR5sy2B7ExvpGxgaU2cMir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM0CLcYndSYYRY8q7tKtwDBpZaIrdMjvnB%2Btxo8JJUNhwmCW4fBYtps1SjqHgfux%2FIfu4VQYXFWa3I8dfk4dMS9zsK01Tj26ySsz4VDC2XeLDz7WBM338rLuBkmZQ7i7ZrJDcYGEl0GKy3iYemp7ryv00rVMp%2F5TTo5n3Y40TYtJhwa%2B91E%2BC4Rq%2BOyK4WyKeigtiWdNNIkcSfO72hGKjx8kGmDkL5D2%2BLEwnB8BH%2Bqub2zLKzoxOD2oHWSRfgCuvzji7lC1QqFutU%2Fi%2Ft3D%2BkbR894o6SBjvsnkoc7nkaxga837PXCwLdefbtIiew0IVSnSYI3WCvI0s8ud7Hf%2B1rg66NtxNnJFdN%2FD17BWA2XcTCcq4tMfTgzFVvD1VIlRdT2k0QNW7iEk4ZEunWIp3r9fa%2FwJps8Bt6j4TDH1OKZjR5uWgXwzwZjMzOUL3kiBg%2FLOg7Bk9hgtngohddFOjG7IEZC3eoQZ6fQ8PBU3UT87mIg%2B9%2BfoxGPUvvk0Xa0mJUQDaQ%2B%2B6iib4qS3ONM%2FTeFF5OmcGDpmQbcFdlSHmhTjay59q7PNEVN6UuIXnBca9XSfHXqFv7LNoRfGMlzjiXLT%2FxFmwaVLvpRPTmbaTyhyWQ9IShb3Mj%2FxWVjHvRQUPPDuVcfe2XHy7NkI8wq8DExAY6pgHzkJMiy07wpoBi%2Fy4Q%2Bx3LbjGkWwCb6QwQVxGu7KAAnn5DqL98yWyRtEQoaEtfxIYozKp5h8nch12NrHCRKuJEjuV6BeJ%2BfNpD%2FUlp2lJqZTzUkQdhr6b54JW0ASr%2F8x5pu%2F6K8pcqZDcNDT5kgTH8hNfrJaLxtHa8zFLtGmPpPl1dy5O0kXu7wkl5okMv6OUshJYxBycP%2FBJf7PaVXPPfJUF0zovg&X-Amz-Signature=9ee946f4dac694519d879ae1ad334632c996f611edf79994781688f91f2009cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
