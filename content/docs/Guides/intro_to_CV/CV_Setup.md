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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LZZKBT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDBup35a3VC6v44D8ytxQuwzJ0hSj95o5HvJKIXJntY9wIhAPGvzb%2BKAlkW4MaHEAy2sIo2C3FoosGF9UX79DlQnJzhKv8DCD8QABoMNjM3NDIzMTgzODA1Igz07QqpyGAG3U0YVBQq3AOu%2BRUKRMLExkUTlxQqtS8nHAo1BJsVhhKzYIn06F6IY5jHK2h6awgAlALJRVlK1Rlz8gpk6Hx99QnEAjE5KKfaQCtA%2Bto%2F%2FipM5xzT5W75cwdm9sJyTjo%2FOPBqtHKMr%2F3krf%2B9LsaR1fn5YYsm0lwjDnxK6neNYLGDuXOlLN3MLreUuV2yJBgj%2FqMn5GOvlDgHE1Fdwb4Ld5RkEcEMiflx%2BaVoWoSQRlr1Ya0TAiTHOlUPdaRUEA3XuoJv3P1k9Wu%2BArZtAaIvrInT3LUkV8gcleYHClcStdSZJitDOOSfDIAt5JlHMGmkjCcM7sEflwgSy6ngE5ZyVWWn7fYOIF1Ac4FdQe4i%2BUmnFJq7FaUyNR77aYH%2F2tHar%2B1cv9mcaU%2F6PBUPUyovE5Xl8RRZvoh0sv3MjAdBuZWr8kTTMKJIeBGPCWpm7BUbM7zwUTxYOdtBZRkxB3q4O5yNvr%2BzcqvBTfCccYgBae0X4gbSijUWAFqE%2FJnr1fXm8dsedap4Wys%2FaEdx57juaGN3D3jj0Poqe1AQsNV36BL0WFkL0nQKJYqfV85g2iovRknnjNW6vSeTjsN9WIjWmViL7fIab49jZekCa0opMq6ggbpTJQkoqynjZ1M8KeDl%2FH%2FPBDCj5YTCBjqkAaXOQKmO%2FO8oEGzc%2FFYQ7m9L5Ha1mSxxFM%2F4eTzH4cA%2Fk6iVIIanSr4WRtH9FOoD8AauQHRYFJf2H1I5px7oKgChR%2FVOGNpH5YEEAquamwRH47RlcHCBxLh0lXA%2Byo6N4QmSDPvBS%2FnaYE0WS6fyE11W37r0quNAgzpkwnQ4o%2FPQxR4DeOJb8IOSR0nW%2Bs7gWkdPs4kpGciljrSF6qOdCwuwebIw&X-Amz-Signature=32c58bef3efdcdd485da1e8a3245147ffcd908a34fd62e56bebe7b70ddbd7f09&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAJJWB4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFkpp2oOz%2BDQ8mDi2P6Tc%2FpTwOSrltZbAJP2QM8U0asLAiEA49zbwfQLM62bVzrE4csIq%2B9htSKH6MRsuYuJKqyWAy4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDcEn34kS9cydqYY8CrcAyooxVx6g5aPF24aNPUGjFUd6ks9er69Bd7fHm%2BI8W%2BiFrXxBKb2cPj6SegMqDDh0P7W0D0m7HUWaAkDpW5PJhiyI%2F4%2Bsr2hdLGR5arBBoGlbe6Ag5xce6f3GtOl5zxPUmgJwwDxAnofQOidopyv%2FTISK7Nuc%2F%2BgDjY96GmPQiCTNokDXWmiYQMU1hWrQvnpVYZ%2FyCEgqxpbpQ6dcmMFJbezPQxpFKSEPNuPj7YJH%2Fj%2BmW1OW26%2F%2BrP5mSH24A5JDhXV3Bld8VjdhePMg4ZqgeKnoHGG0snTquU4PiYKr9c0MwwMx5tBjpqu%2F6uS3BtFvSyH1bdOCoRd0x%2FDKa2tF143dzekIliXkNeqt5KtS3WiZBlLCfgBqe%2BUSU0IoYVQvsTUGE1jVN7Dg6CkfAz%2BCgAn5ZG%2BQAYrJ2sE1fz2JAv3DWjPiYkOqA0RjtijKVrUiN6hCYt3Hig3OZlN%2Fl7sp660OvC9b6KXyjnaXl3R0umGlSiK4VYCbJUZUoeCLUcBnXq9McuLybfl%2F7YJBVoX%2BXzh4yYRnZ%2FNTPI5illskDdgRBt9%2BZaBeFAiP14iNG7SZs4JFis82LNf8C7LGl5yQ3a6HlsmufdYk7Vw%2Bcx5qRLVmCyFdKBA3G2TxMJKMMnlhMIGOqUB3bmU2HXJxeeRpjVj4B9UXn0IcFcr8fyE73fvtnXFSGnr5JVAXsEkgVs5WcFNt2kkg5iuXSBCIHD%2FB8WWMmu02VzBn%2FezDtToxgfDJKCIeNkpGH4XjDD9Lc3ttHCiQTMmu07kcFTgLHR52tW%2BySy8oNe71rd2e5uQ1Xvz%2B6KrOb1mWvXt2gk470i%2FnzecRjjgoBpd%2FGqkr10sW4u6BHfFhwDwkJU6&X-Amz-Signature=881a2a21c041fa906d92a7b6da51a3329b01149ccd44f7a0c0d8ca7d622dbd20&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
