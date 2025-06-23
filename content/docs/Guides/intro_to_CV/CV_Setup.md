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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXNN766%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICocTdkuwenFD53RUfFB2809Zy5j1Ux3TJ8B7BSrsQV1AiEA%2B0PoWcCK54vFpFdAo6%2B9TMoWysMnGaWEVBVTl9ZQn78q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDMbYA%2FQ2fBxrTZ4TCrcAyXa2QJUmQ9SHW%2BsqanzCXapFNBL3f3Hg75HDcORxWNJ9TkYrv7IK8adz5fqwP0ZMalCmgdL2EdgkLfi4Dq1IPrUEY0RwYC53dODyqEZEinN%2BEOBOxwGRWv%2BBGaNf7O8N50X8dKhFqnBnFD%2BM3uTiA%2FkX1%2FDJllJ1hNc%2B8k9cXxZYWld2CGYUEsm5xI59itMfTt3KZEZWywdgowawyD%2F13g7r7EtyT%2FezZkPOPVbopKOmkhoh5wlTaXvM3zO%2FXu%2F9TfBhau03mF69HQpot3dyjTmRd83PkwIuTsdg1Ucdietej7OXiCK4xmn6BIZQkA1RPgi%2BZmmRAfK%2F6x4M5KdwlF1IIMIIRewOFAtGlcUporIeWR9v8wU%2FLZP6R4dLAMWN9Hh4vJI31WKKfIWWz17nqo0oC7O1CJymf%2BkQzjZMvLLIhi3i%2BM0txA%2F3NTLjzL5Jgcj12dMcURIqHslhZ647dF2fJOtPifJuKR%2B71oKfo5P3UqhH6x8BLFDgA6%2FrceXOvyfSfWsNDuP77snV%2Fo2bEbe0dzKJTLhv6fHnCdg8AGkKD2jnd39BTvMXGwDgGZTtFJq5lE2YRNmAYO%2FPaer6Xi2vN1800GMk4DnMAqm9gERemGOBUX6EcllCUNrMJTz5MIGOqUB%2Fu8y4rHqF4sH9n2koobEsO4BzVvEX5PRG6wiOa%2BhnAwPXw9dgeppchlPu9KsFjj7%2BGA2qprcZ096EDH2EtdKTDtHfnvWbTCltg0d6R2Lq7xVvoSj2ORXEDuCdPtYZLCczsucUkAYFxAGZpRfOWKpJIpXJhwdcKOxjhmwovi6ozPWZpRB4gCc8wy%2BngvMvDlr3F1GV6tpP3t3jiOvBjmNwSyACEVu&X-Amz-Signature=3a05b3f4200a35e8d5d9fe866ab033c7d6057ca7ea1b785d258cb0f2ce8bffa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FPNQZBK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCdhZbT6pmvC8YtoSJ6YgMIJ9vyGTG%2FhzIyPoABU7wJPwIgQ1X%2FB747gDafAGyfKCfA18LI2ntWfdk5XuxJ0KCOSWgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCHY%2BAb1v7gGqtggUSrcA0tMpHXMndX8Y8cVLAHo5QOSOg8ajY%2BdIvtlwAD%2FCGqjOnXBsoKuPupjYzUR0UksgjI7ViMpuP%2B1jWfRCeuZcz2JhPYhf6KSkXbe6GyF5riYHQR5dErpTYMPSblByUpwkN2VDbWPOo7rkNtBlzLEqqAJFVo3Fyb47ZsBDqov2rALej%2FHiEtIB%2FcOl4x5IWq0zvez9Ged2bG9q2CkPInt9UyvSBvFfqJ030BnKKRblLb1U05E4jvJ4NTsI3fRN8IuTZgl9eGFPOXPEDnP5sKtnKV3gfjnBbOfFSlPlkB1OFcXJUTtCkNgyISnbUaGo0pbSvzgnWxub4GmDU2ay0tNgPMe4qVHzGDrk5qctpADbaBUCgmemGwse5uXEADseyPu0P1Odd232L%2B9HyBcQNayrgy1yBGciM65YsiI51v4%2BlY%2Bs3Mnm6uu97q9473JHmY87BNY04Gf9i0Z0mMX6uvzZUwDhtZeZvihobm%2BB%2BcNJXLJ2kSlhYQTYqlw68p0AOpgUNOTWE%2FgKQGQw8wlEDnencl6CqRcByEs7rq56twTq8pXERoMGDvu0eX2q5tjEkLlMqUzpcJ9oR8aT8hH3kYnGPjpgoIVT8CFftX%2BiDEvc%2FNcQ6ifu%2B04mguh6hApMIf05MIGOqUBAyK5L2K1xYeGDzsIKbuZEU3zxcLQKBwRkX47eqKtp5ikl30KnHAb9wQvu%2FaRydrMmOnQLuYjarsiQZxtEFpdHs2rFBRuTSJDngoo01%2FMZaPbx6NOfydsLx%2B6OE8TRiJU0oComeetVJuUuP36sZ3LvCrvDx54RUhux0Xx%2F1gqJSbk6b0HU%2BS%2F3EbtPjSwzSkLJ%2B5kOUU6kAKPVjyKjS6GpdXr%2Fn76&X-Amz-Signature=90dcf3bede0a4cdd2eebd25410a8f7659d905f7c5bbf8716fbc69049f02fa10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
