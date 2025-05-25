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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP34SFW4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCd3TEQ%2Bi11ki06R9H75XO29c%2FjPlBnCiVwil9JvX8QUAIgAfIUPvf4v0cYfH4pNeT0XmzEB9fPI3O%2Fa%2FCbjsBquBkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIedBHgfkZ3bhVPq%2FCrcA0%2FlRCoVor8bIIfgWcDoQws1B4ZusDeVbZpXs1FSDvBsiWYmtpyh4tOlcQNp2GTG%2FmJDFv%2BPWsaHqGtWkCI1xhXOfNZbXm7X3RnKzS%2FQ0aaZRm8YDgKFRx0tq8RMJrcAm3ktD6hjQwltEQWfiFdqJSxOhiDi8NZha5ccG4uNJEiv4%2BczBFRIgK7sQXZRKxeV0ifcGXrYa%2BhFL3bLxQPcGr3nbJ%2FDzrFIlpKNeBmVjyLqXJNaGxx0Oja1F3%2FONfq7Zx3ZafwUmFOCiQUVddFRQdpl4F2hI1ZwKGoAjMibKl3LCXF87NDR%2FVzHJuNmgrjDSAUckWmeAQWDaM7z0FQ1LuB2YPlIjndEmz0UCSDQ4wizblnARFWtSv%2F8%2F%2BwfE4oAJ7kbScV4af0i6AwFgUGU1kgbe0s4aCmpFgkS8vsUHK9PzkhG%2BSG4NyZArRFv6jjRogz2%2FS%2F0fEFyO%2F76ooP6WM0ZZdBmLhUWptX%2FV02t4mm10mcjcvhbZhnJc%2BGAMA382BoeFe2x3M995U02mULR3wNHzc50xYwPKlGlgz3xsC4G4ZBpjqNF89whboMSIjnip68kEs7nert%2FxaDnWRpTdIoJhOEp3z3zbEDY%2BaT7PY4Zg0pgaUUsqrBqq9jXMMHNysEGOqUBGZQH7yXWe3XGxjfS3sWdMaID0s5mnCXfJomHAukn%2BusrvvB2tvhKE8TjZaFsN306pfIHiOHMmERpoAEZFigmdu4EvYtWouc%2B4RoKc7tPLfNTWWlMGyzl00sIZydjcm3eDDNQe%2BJk2XESLlipFi7McZ0yuPtYAnKmCRBBvZwHQAaby4DJviJfmMxyqmeu7DX%2F6Khn9e77PJJ3IOy2cB62coRMD4nL&X-Amz-Signature=99622348bb2ab4de78b03b543b666c32638ff32d4313821660cbe8ac8869e9f6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632MGNVZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDE1f3cWLWYv%2BQwjrMK40CkabPimxjchaV8nXXHHib2owIgDUh6nxuOb00mbVfrF9r460zpflpVupI2C1vYAB0%2F2iwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDDKI1qiY%2BAfqCpP4BSrcAzDtCUc4OoDNSSRg2zTVq3LS6IcRdDZdcq%2BpyfbiJdftxMDttuEg1009R1GEYZ6F7pOC05uh4YhHwgVUc6uYMl0607uspZIJ1P1%2FKZIuGMMIqg%2FZt%2FgXr%2Fa5MADHzOLFMQDZBKA7P8sgiDFUvkSF%2BnkAuDjMcKZVT4ers6LX9HmOAEGytpul4PDf4HdxlRTxKML0%2F6hbYcxKghperQqJksNVTfj6tGCHWiwI93nyAy5wczgrfjQPDCJ82xOGZink5P83FVAwFvjKhr%2B2MBWifVLpFVRw8H3Hzoc2lcEHAxuEQe%2BEZG5bKQgBSzIIJeTBFuy1VA8luUHJoYj%2BS%2B8LzJnpqVJcz6ZbxwLGy%2BhO%2FD9ihIJBo2Lkvr7X0hWcDOLReGIMv9jOFmqe%2FN5UAl4h3vmTG5pMP19gRKpyzDthcFac1BkRL2XAIW%2FKh1YPCldCN5IqyWpJ%2FQGGZgYCtWUYgb4hpIAro0BiRHBBB9yZ2D6wXuix%2BAgyS06CtkMmO1G16tkdPQQXQPw%2FmVOf5jbjSO61gYheKuoiYkzC7x3%2By2X%2Fann3Da75ZB3tKOb1py8r%2BOtakoyMxSQeynKxXZMaV0Z6mGxPCrASUVJEbm%2BOt2xCfbK%2FxL5zBeSz9L7lMPC5ysEGOqUBtwH%2FoVcYFIoC5i%2FGRO9xH8fUJxko4HyFs%2FCOgii3yL6bK3uzvBVL%2B0NAkd%2BjTKjaQRbhuYg3J5WirdTrmSivFLILk%2BPlpSRbY9ZEDP6l%2B4HvvuoUg6T%2BUJfYBjbsOVJUgM9oJWBVP5W3tJR%2Bxp2JJfD80pG8yU7hUTZFsjTDrs8L3JnH%2Bxjw9iREdbFU18KG8i32dec3D0Rftw8u1rq2Z%2B4NLqaf&X-Amz-Signature=c95e8cab9609018c99c4e30dfea22557e1a4a44be2e649a831a236093479dddd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
