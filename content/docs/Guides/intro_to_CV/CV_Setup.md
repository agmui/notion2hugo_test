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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLWF7NB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCkwW3PK%2FbgehJO0tRwPEafRE0L5a%2FWXLbGhEa1z5VYwgIgO5m5VaEUj02fHsFiJo5Oun%2FQGvxU6SjixVPXDLDKNogq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDB%2F2gsYqxqay0AaE2SrcA2G%2F5rGs5gpt4AW5dkTtdT1HITfn2Mmo1UPdAWaQG%2F77UIC%2Bgev3A0m%2BhtBs%2BWIZjRLMlCmXKe3mb6itBB5TGOMRrmSAx5GTUxmsD4ujb3t5xtdJfC%2FRwzG0o4%2B4Uyp38NjUXjeL1zypikx5gt8CDoGw3POuU9H34s3JpKGcpyVo8oslMrWVlQU7YYKe49oj4C8xMVMKxFlh7nTnwltHUyqQQRsmZbaYDDzZ%2B0BI3zN%2B3axOgpiFKj5EJ61TxJjRLj6gCHSdT95ghRQ6Klrvl84iv8N33JGQpe1SnXqHNXo3kRF2L7IQl8iw1dsUyVb%2B1cjL5Q0pRvHM4Ly5F%2B4JMi7GWBecTOeI7gHtQiq14PqUGgMJgUxjLsEyavbr%2FaBD%2BYQZomtQv4LyYvOIHmU2R%2F15n6r6YiaE1H9Gz2VZwZQTjuFclIhcw%2BOikFDqk6FoHn87tUO0pKnIXiUYcrVPok%2FZ0Hbtozf9pQCSDX72VcI%2B2cEB3KAXCBR2gNfRJnVcGwPgT0x0ejVsK%2Ff%2FDuSmF7CWsmqUC9MBewnbTEdHPE5LSNvJuYo9DZla7gk%2Bsmto4f8wCOQeiIyspEHn0y%2BZsidOkdVMnuOT8ue9J5M5mOnS3DpfieJK743WjGWGMNjrlMEGOqUBnvpAf%2BKccEjbL92%2Ft9JEk7MM7K8LniafuOjZetunc%2Fq4dhjWXk9ouCvitvU2WMF1Tz6sh8WkHi6W9%2BrXMWkWneYeYGBtiV3eGy8yBfO3AMBaS43OBBK8CAiV32YUrSmH2qJZZI%2FBLoLewEuvpnn9PTVf0u4TfF97%2B9v%2BKHcWesno7F9sC09IX1Bp86GjFzOxmbYrBZXQhGrrlcnw0%2FOpWrM62i%2Bj&X-Amz-Signature=ce892ba2a32510917a21404041ac214c9b1db70b482e78833c7958891b43744d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGHPLHT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIKDtdKxsc4KsvpP%2Fj77WhhfWtlaqXh3NZYFml7XgnjgIgcL0XQ71iGvsPGRNx2nqAoM9N4ZfM7ITjBtG3jO1Oymoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGX%2FCdUQlD1giktpJSrcA6UJjIEmaD0ZIx0%2FNMryUKMfT9SQi8uNK%2F3hZllYkprImgVcxAcFVayZ9WhfyksuJdcH8fbMt6YEDyw8v79NZDB7zie5v2L0ZlLF3OEn3WI5zOTS%2BJrywSnBEOze9zBvqdGHW3wsYkxh%2FTqs4YQEQqfMK7DwBVUxAB%2Fe4djVDrNEymt3k94RxGE1R7y37AVHhS54CTq%2FGlXRje5uyh7JIJhee1mRWzZdBR1X83ws6eprwNfI41hgMRO5%2BGZ%2FNmDcZjHjbx8HKC04X5KWYFeCy3oBozeKUw24y3cQoCJ3bXZ5AUStFtDdKcSl8u90caay%2FYx8HjkYS2ScQSs44gBkFS8mOvnmuKN6DttyzU%2FTIBUxHhY28Wa3lmOoCKz7%2FW6kXR2XkXRAJ0N6iwKPVwV0XEjTKynoPUe1NO1bRAkl55%2FCLoForKhWrLDmkps6sSJju7XpCgyw1dxE12U2adXE8FRjLtdM4IjVveW67wTgetDDcM3npLSsRxwQ8AyiUjW6LmBhFuNfcAnRn1dRfnscgsniEMBO56%2FiAabyNOPdXAFjGyNwe7Gr9zPsY3ynqJu3IxgAgvHSofTwqoPAiiZtxreSGsSj%2F8gFpWsKXKcfeaAux0neA9LraNy7FpFJMK7rlMEGOqUBvn%2B1XPAofmCOAOXb8iT%2FMHMNiNvdE2bkE%2Bf1lkkVEf532c0l10kYGDeKfTnwEp61E4DvpavIWmAOhOCbSt%2FgxjnXLtqOPVEALEcKKueCtDEkk6pBod2M33ScmfIS7eOmVzSWZhrUnlOV1Ff3SjKsBgCkIX0zt3yqTluL6lQ%2FWCP1iD21ZlY%2FrJFaDXWkiS%2Fte55CindfvuIhTkSbNgOnbGcwnyqB&X-Amz-Signature=0803d16807205d8ceda531a72fb57f983d1749ba12f358f4f61165bd8d14a4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
