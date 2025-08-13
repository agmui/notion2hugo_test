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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWHDF37%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0X%2BheI9Rb%2BEOoAicOl0w%2BbBc7u5fz3FeQABj85aB1wIgKGdSZ0W%2Bq1o0pdYTN6LxJD0oKNUMDAXMaADsCod8MgIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOu%2B56lXwVaI9gmTkCrcA7DIeqrKpN3zviQmvzoqA5Gr83ONKZSKHjgTybweCKhyT6mV3vtYN%2FWCj8RN6PwFGW2fDxOGcYRCRQhBr2I5w3mSNxgmjFLIdGSWs%2B2x0pJ6JV7%2Bd6kK7PSUNP%2FNePQO6sEsiVq8L70HSAglh7LbnftKHQxL7Tx1AkhO4ERiN%2BUTQcz%2FpD%2BPgyIA3pEbbtxgGQTgSD%2FRI%2Ft5n5eSmlN6LYZ5QkxbN%2BnWQ3aTH2sJEs9NwU65I6hOAUL%2BDMgxwX2hbvbNgLcEimysNRpgBBVwXeyc5RlXXpJVizJNpzJmwXj%2FnkRMooZULvL7GnDwEyn4eRsrFocjFU1O2%2F%2BhhV5JacICOb1AIf56IggVCTm7063mVbWsPOxecBgCqJY%2BvXYNHq9MbBnZSeIAVW98f6WGdPwE19cR6%2BWBdOv9Dhmgve%2FwcYRQXqffYpyrrOiLgWKnCyjmbtevMWkkgAzw4VezuVKDeVKkplsmdXo9mfgjfLjmlQtqAEIQpjCa7eAl3GFAyVS3SIaC9mIQmLBYnVOPq4BQ5T8KYFxQVpI9pMojz2mFivwPs4j%2FLqBLKi04ahdSM3qjaVbfn%2FtCWGYDJhalqJXeJNO8O%2FMRPX%2FmIxMG5dLbRGPgzuQjmmzr4XK5MMCy8sQGOqUBdu2nww21SD17vQJwDoVQAq4AVzNHnXjexsyzXHoYpw7a5rIfwa5ne1SLy3m12TzImqj16PBAAO5ZJOybf3N0AgIHaOeKi0H7F8sW9ntwPaUOYKXuvS%2Fti6OywRPJ%2FdvH5%2FA7IIQ0PGVcx1Tgg3%2FQPeIdkQbDBKZGueGqGQAdWkAyThuNNjarzKYfyeWfbJgZHiRgmY9yzEryVm8ZtvszPBnvw5Lz&X-Amz-Signature=9e519e288332e64baecea8b3118f79bc68f321fda82b6335b27d54b80c3bfb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRHISVW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQPI4EDpWkFLSZTZUPJ%2FA%2FAhHWpL7kVExb7AABCCth2AiEAwIrzXaUc6oh5b8DQItfBXqFCEW0enFM50Axr53YU8wMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOKKljnz%2BQGz12cp3ircA%2FwCLGK3ruczFeqvTNvfFzEB%2FNHEsdbwHvs%2Fpv6gxbIHYe4rj0IvS38YGSVciDrQMH9URGBzA8y7jSmJsssMHDizpbT4EQgItjUdIfvvscqkTTKf9NioM94KRf8dIW%2BVSK%2Fr7VOONJFeSAn2v0IIgodzTjIY6IBmrxrz6VmHlxFAcQrvgBOgNOYT%2BjE5bYdfn8Atj%2Bo9mF6dFQ%2Fl9xN%2Fsr4I9F1YebalWntUWfcywO1JIvEQn1Axqvyx3rr2TCQAmNfWy0ve2BuA%2BtK58qDgU9E9sfcIxfG3mbcy63qp1GGtLFwpt1mNnubq96s5MRGaqe2DT0%2BzTr848o%2B5XwntQWjiLbKJKlNhVByFqXvm69H3ZcFS9OpaNdC%2BzPKcLZH9HOAnPrsM0Kxli5lFfeai%2BPjHtTb69idRTJRo2IRmVngvmeZk1N9KJ63cvGsVFeBiCzIjhwKCOBcvvJIzvJrckBneu%2BJmfp8ZGgwPS4C24WrsPv0NQvUf68Q%2B8F6neSjbq1FCG7wHv%2FjUboG7%2BlmWhuPkzYg%2BOfxGeKuddeg2eCtgT%2BsePZg2ogboh4oDnIIFnzzuxYzMmMgifVV5sKFo%2FEKAbxwt%2Bh19bwVzA3MMtG3bRiNCWgU5oeejTNxUMKW88sQGOqUBvhwFuQDo%2BHDwjsI%2BZc2XeR35TQXiyrwprO%2FWOZxhyTvcya1fnmOk4Au56rXkpVcrxmzope6tYG4rdFLEiE5PNk%2BGscMJLaYWgThMqmIAesRgFkeQFO19zg5RpsrBxPkgG2Ynm9woBUS6Bk5rwJJCXOyac6bph7spIB4NMDrTfEfdnLnAMVSvyX1d8CWphaJfKlzyc2nTX7r2uGu9HY3mHtTZZ6NF&X-Amz-Signature=d5863e47c53b704138d0fbe0215f4efe62885be0add5142025fb74d8736b8a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
