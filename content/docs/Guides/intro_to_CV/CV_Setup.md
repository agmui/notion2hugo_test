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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHVPTHJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIChgCgk1JxIJWHal4mej1rLmqHFwzhCm59bdmMUoITl7AiAlJ0y%2B3siD1tm5eppAAK%2Fm3swh0IzpiqFqTGkVD17TxCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMqQtNzet6o3mWHHsTKtwDkkmYg9D3CD%2F%2Bv1coFMsTKG7prGhNCsfWDwWH4pfgSyYkCKzWavqdBTmk7gQl3G9z97mdl6mo4byNZrdPLWuYIhSs2mJ4t9VOF2VDRQLm4qDLoQr%2F5%2BUza8%2BY55pQmrpHTsspHJTIzytCSzDu%2FIlnPgH9ImSelhrxRPuRSY8eaU%2B0uoq6YMyeWEl93z0hck5yONDTiWp1BAfdojhpMNYyNDlzs2Dh3M1kuF6v01oDZpBrtJ32R%2BkE8Sbmkn%2F9jr0iBz4BuWjqYHRT2aZvOrmZQN%2BDCpl6m27cRmvSwlwzN0su7m0eBwOtC7hB7J5R43t16UKa3wY3aeGOEw3%2BwouaOeUSzCKy6v%2BYLKbxnvs0v%2BCJk0oZj71KsgvTv9%2FbFvCGDtx7031Bl0mKWbH3KuXpSWRG7agR4oQZrXPg9GJ3kkUUUAVu%2BiqW9POfVYcxMAyIVrwAaV%2Bu2fSmhQ5gnIvHyl2Tz3BOpehxI%2FkWAUAhMJFfm5iQvyuSdy6yBCeOluikZ7oDifYwvfXHe%2FmCTuZSY8fz1ZrFqnmyXqRoSdXi1k4A%2BjHSLli3utAMMS5X7rYBubtNJuekChAMWK73Fs7yhU%2FHuiYEXq6AcwP4AmBhtwuN7ftfu2QkTFHgLssw1PuuvgY6pgG0XTCh2yR2ZT%2FrAD%2Fwb3cnlMAe39Vr%2B2iVVWrEGtLUmgYxOMysWQALAuFyY8lU6dY1JGplbNr5H7BlcVnjEFb2T%2FcbL9kx%2BfNSiLRN%2F1fwtoPnKd6u%2F9%2Bq3VSvOt%2B45NIoQVxwMyQlYXQK4cY7pVR9dvIoV%2FArw8Rl410SkKu4EOcEGaTAm%2BQ7a67r1biNpeFO%2Feak1ODZg%2FQ1htwb4CmQ4jMJlqyz&X-Amz-Signature=42c349453d3d0cc2d1bc14a1c166325b41c920fcbde8da233cd4d29ff89834b4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL464RM7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDDZX%2B3itxqegi8AqgqpMlCTpZ2RBbVakWriaU0mLURmAIhAL760xi0dnYf9r9a%2FGrZzQya%2FmZrgvla%2BOwJg118g0kGKv8DCFUQABoMNjM3NDIzMTgzODA1IgwuGX2lO38KFq6Kz30q3ANn1TfYvN4pwXmhT356KImnEfAs9RmvBcS9NizTtyYMrXnBQqjS5q03BY83mO85zKUKavsYmin3GGeSmS0OcoYgqM%2FF8tuVmze70mvqIPURqa0EexNZUyQeM5dHaPdQTSq3gApfYPpzef%2BvQuJbmaLdLYDoveft1S0EtfXWrjhTVwxjvriEorJblNj%2FMbYwGt1UziIGOlX9uL9EylHYrJr08e%2BLDs2BKXxVmrABsd%2FRbgv39UyGmefqpg7clOQanfiTii5jOfgm79IqOAOTVTxjEUt8jT%2FVOFHf0CBbb1XnZGXjCFNDT4JRh2C7P6oi4FoS4A4ljDWHgarle7ZvQgOoPUBMgk9uzKjIslMEkmPhH2ddHMvioAQJAXDr51CPmi1NHqdqUbtXntC8peuATguKkdESyMmQfshIaHHaGrJNTKQRnQwLdG5CpH5d6wFOBFVmJth2Eaf%2FPHEKmBIJ4qRaTNEhvyLIgS8TNSVrgsCFMVnyop9uiaNoBY1lmkQcMnLSSjDFBc20Ei9iQSueF%2BnbegR9tKsbKqC%2F6Oeluz0x4AZftKw9yi1bdmwegLCnRGC%2FFBWlCdeGJIG2DtllLFh1wzWb%2Fj2bCOxEWllCg2KnCxI3mQ0bb3M4S7N8RTDI%2B66%2BBjqkAe%2FgYqxL4E6I%2FrJaoAsrdiceCogdZyxSZwKu0CLdE%2FBFBsUmNcOx01XPTvzjQSEIa9nWengKemLWzhONIKobt9DtJ%2BCsQw1WdxIn07e1hRFEWG9D6ddA0wgDRO5fkcBHtVuZRc3YznXJDKwCZAv56L9A%2FqdaJM%2Bkx3vsRWHDkmm795z5tuI%2FZPh0U3Z9yzhcin0reFgrN07APkrcDBKQb45ar756&X-Amz-Signature=78c0e99cb3a84a720ec0a953f7a0f9ae8c573d926b96de248a35fb0aee656add&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
