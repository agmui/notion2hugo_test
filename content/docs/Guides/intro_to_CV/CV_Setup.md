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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZI4T2LA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFlclCrcQdahJLmJ2DzEJhSmueSyXH7rHTVWlGh8D%2BLdAiEAkec2zE8lIiYs83h6Y4GnCge42nBR3esM5HR0YYxsrgEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNDsowuYwicwz0wJyrcA6DQHmFCb2sqpTzlG18Bdsw4s6AxYz12i8GzW0%2Fy09dSfnvtOtRYfOoO1kipCj8Z1iiMMELx3oh6gkyXWDtAXuUQrSrajH5d9jC8o%2Ba76fd%2BFtXNqnXtiExmONCyK1pTI6QqD7CrEqYgV6Y9nDtt0VZF1B7sKZBekvTP1cJcWMpbDO3gXNkvXm5qnFsAf3wlGWaKAlNcgp20S5QnubXZ36H7K11GTGkuGH8xDfjJvJhDdrWsHPrY2u0AeGgoRjyPVsJ3njba41qoUDqvxf6lPKHCAwYlcI6nwT1SIrxWstUIG6tmzB5tcbHA9JONIzlIdzrdC7uICJ2GFnXnSw6HEOw89P65DQPlfU0vrfQDbCMic1yvrOdKM5n6bmFqO%2Bf7FXMyPoqKr6BpkSE%2BEZv1hfv4xVGUml5f3yhjsB4E5sA7qcplESZZ6DBPhbD52qR%2BSxFpZJDiQl%2BgkXSkMC4eJ1zpRjG0vEg20ZS2Av9ZZC2TTs4P%2Bys7I%2FzWzhTc0DqUH%2BQGfXpms0C4nV%2BEQJYvV3VTj%2FXDwcIo09Efr%2FO6tmsby7YlyK7vqBcP%2FTyxn1Yd5K%2BJN21mAVW55xN0DiGFZlcKnG%2Bipn06X6Dw%2Bh3rI0CHg8wVvmLm1A%2Bj8WnIMPeXo8QGOqUBotBLs9AqsbZwu4qPBLSnuuLINR0p4MMxXo6q8MI46Bq1UmSoquEXeF%2F5k3KuY0be0lqocrFIsVcG04PCL53un2%2FgPYX2aGdr3rI7BHcigrC%2B%2FFyvWcU5WTF8FX1Uw%2FXfu1K60eu67FB0OvoAimb%2FOCVgUaZGycalxsobk7ayrbU%2B4EKc8LL2KFNM1zFeJSNa0Rpz6qjzFA0Q1zys67zYHutH7UVO&X-Amz-Signature=20bdd611db220ebd7ab8cbe697502edc31f605aa5dcbb5e1a9a18325efec7fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQUJDSW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC68X9B%2Fdai466lAQgfw876SnkMC6k4Y1WDYM9SsjxOvAIgDmNzF%2FgUpcm6P4%2Bcds6JJXlz2Ei3PI3r8vz%2FOnsmGQAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIA21mByT%2BoEl1wqircA7QZ%2BV2w15ICl1cnyXcLmxApwOAOCBvGjvEyOEjJDAP9kVTmeTwt9Cov1O7hVGXrODtFMuov9OB5wg0gp%2F9F6bW6b7a79f9WPcssA53F2ZlWNHr2q2GLQpQTY5oDGmVXyxEZ88sOjy08X2%2Fy2wHXn7thzOGLafwJlryQ7UM5KR7yuakpcl9la6zieu7bIcqDFY1ZbJb6t6KjzWdTU0UB%2BHW%2BpaYQGqIZTSidoFhSCbehHXcUlhUF6OoDGX7DBjt5bF%2BvmC9yJ%2BKIteQryMMLKG3AuSSJ42BO%2F2GjuN56gfTwurCABvRdIRriYFdBenPvphXR3JuqVBzxPR7hQ7%2BnBmnDgKgEGh5Z3ZyMeVt2%2BqBd5ctbuSudiwKWeUAbzMp72RaxNSOZWAAMlb5%2Fjb%2BREW4Y86HhOcnD%2BuC%2BV3W7zJdWBk4SFZrNcQ3enwgbnL0SV7fxTTBhAaaM7iKIB5a3ffmSSTAh%2B7aFOAIQ5jsGrEsLKMu7BWOFUpamJyM%2FsN9tAoqC2cP3b2rZ7GhqIsNKxPJDd2cIxwJV%2BUAi6Mbis3oT024L%2F1Q4%2F9CeRKesAUmXYzKgjMQR4pEU5b0nvJ%2F68kw6JSurfXZywGitJ5RNv0fGWDJvBXKUyKLcD%2FEFMM2Yo8QGOqUBHri2FI6FQ3pcAQoPYY4kreRguCUVNYbSn0fuPojRm9IO1GR2ZQDTB4l3hDoanUOmZ03y6zt6aU5V1Zs4ddtqOc1h3%2FZ7AtZBlLGYknVxD05AjGy5Qm2ukRYVi6dCKgpCNQ0HHP4o0axipwDkmnUKhBpv0%2FLcmxM1hJ3tIc4xIXbxgvSU0OBuDDHiGPROrx1C9jZ5u1qO8iNQeDT3bVctnGgCtunA&X-Amz-Signature=d356863ea8e63237096a5b6d48a646b7e77fa2fea4d8b49d079052b38b21d932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
