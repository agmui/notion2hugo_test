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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUY5NIU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDE3ZfA2ySSr2IsTT7YaTM6VbU5nwRjFC%2B21nY6EBCe%2FgIgVAv2nG%2FCmKHQ4gDMA2KYgCaGHnUYOxjjUTntsSvzHHQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzpca%2F%2F%2B924YktNJircAwDZyaOtEW5KTg5pwsPZFwUUfQ2ze8YwTYbUY1H%2BSOHDS6oqY4QOfdMpzK3ub50X%2B0gDa4qK6QJyqB5GAlPSug9%2BoDm%2F0Wjqn8VPAaNkvu1MoISKvIHQoEWZv6CcMwYyE%2BoSvSAcy1Djc%2BL0UYhuxmJeOICJ7rMFNyORnW6GnNhwgQ2XURV0Cvs1n3%2BXXtnwMjAouCZSPXdBJ8DRo%2BKXRGLCSYXhhdserUk9Dn5JKjhVBhKPDTO7C%2FvzTBI%2FWG2Jw9lAKFEHv0AyqRpMIhodF0aDK%2BQcrmUlCcxTW539XBb61W7RO%2FS3nBgF0w%2FBPpSbadapy5cFRhiK70aNubAGUADdDUK4CUcMKER1LS6PVl2c1jbyY4nv78qozcHkuPD%2F967A%2FALlEwfKSETyx3U0TjG76HpwGQPdNgULdQvM%2FzowtJmFo%2Fs2FUyxPBos%2FmWl3JMQJdG57%2F9Uv3KRRtmcLSh0GtAj1qJahTaScMmfIky8fTFC7C7%2BiGm9HqqHOX0RHznz4qfNNXFsC4qjDFYwnFoxRBJvJP00KZmpnfxD5fbiMGjcZa2rWGza1OIdmJFelS032BJG%2FWDBwSSrZg7ibj6BCqg3ERe03QabOy2q3GO3qkV0vrwc8cYc2YB8MKfl8b4GOqUBPCcBUWU%2FQhgQe5unZ25grisDOcMnV%2B4dzXCszZuWM6g6Re7iWohSNmfZqStO%2F8ZvwH6kAUcsdsc54kGti%2BMA4dLizPy1Em56KVTTvRzY1Zi2N4Xf7Er969qOqrv14jw61h3Lr5VKl7Gw2QrXAkFgo47NXiToBe%2BZXWE%2F5tae%2Bt5wDhKryfrILLWKkTJRdzIZ5ZU%2BiGnX8DLP4IM4%2B597e%2FvSPkXc&X-Amz-Signature=fd0d65e7d5d4e964be374e9638a32ee0a81758682ef9858cce077ed7b99994bd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJVPLHA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDoAMyhOIU8ED5zg4G8hrpOSFzx3wB4OmdMF49ehGz3tgIhAKkx%2FFoOAWQ5nIluZgfVtfrOiiXN%2F9th2k%2FR3wyQmChfKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKV4Cs%2FrukY2fYd7cq3APLl7GK%2Bv6YVbaiGD%2BZtcgD8xJTIT4jkEi2ZPfEoZLwDoKZhTxqDNgO%2FmqLo7JDkx3T0VFB%2BY2ONc8o3SdnHhnHMCEy%2FreClnZoswohQ%2Fa1f5j38Kv59k4jHGSpZ%2BhLnmx2q4uOxNK3NKRpdDyeIRi1yq5qKuvRRJk0Vyapo7cVVm%2BMwpP0Hog5W%2F%2FViHZsJkXHqR%2BSNonmluGl1jUYJO5%2FhuB124a5w7tRYqp%2BH%2BhNQUkOdPvJ%2FARwaNcWOWLVFl2bfwh3rvhfxtFZfnXlgFLVz78UrT%2B8FtFYEiDYzaVViDsoEhzDd8w2qEZyNQw1YeUVNkxIatc6XzE3P636orD5%2F7TatmOZBSTRePs7ovRqptv5W4mix292n6jtOJx%2FQYzbSVfGxFJkrL7TqyE1lo4aPMwAWJAGUUYbxxrKlBkLZ3jzmJQpIt%2FPF333z2ZkK3QpWg3ar4H9nmqhJo3gtwKBSoznINmgFOsUCmkFWnW84n5rg6woGh1M2QVOg8aqm6M3oQVcHtXaqtfEfZN1qDVpN6cuxrUYoiGsPI5C%2Ft9d0y5GBvdStzknr2aFBu3Fb2sJcd%2FZicy4a3xa1GEtxApWl3CwGZ70vxmCbfoXjbI7C6A403fa%2FAjYW5fS5TDe5fG%2BBjqkATDGW5%2F932VgSNhBYSomq%2BBkZ57erpiODbfjQxoOLBgdZF9ZTUhk%2FIlf1V3X6b1wr7irrSrrxgkiue%2FyFK%2Fm%2B%2BZgP7fmejj1gqOhr8Mu6gxneCPTtgye3eY66NI5edR5Ip011QdbPqKWXFQXcdnZDEC2u%2F8U2zTRTdpSWMqkj%2F7sUkc312H1nSH%2BAgkGjyt979DV2OO6IAL5AyE41aEgqCXh68B0&X-Amz-Signature=dea56a1b8aa04f389ccce2299527ea58322736362bdcc1996fbb35901efef5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
