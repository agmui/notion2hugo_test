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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYQFGUP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCDr2aC7yeSngyiw%2F7YwYMcyE%2BnezASEcwMNUxCy3KUIwIgUi4LXhodzWag45JXQTnZiXlzfLZqolQJKJZSQ%2BQNwJoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOODco3uMG2KI1jQiyrcA5o22Ntg6nM68cbLhLWnbLokEJNyFpEY4fgxuB25g7TAgXnsxYQ%2BAuUy9MHvpHEKThTaBg2SyNOR%2B%2FIjQ24FWWcnnVELUtPjQKfXbgD%2FMaM99oQWbniCSofZFYgLH3g11JH5sIq5dkxNLLGSO2ABEIQxDvvUpWIY49nLU74AyGOn22JOHWCrhevBfGuh1hThsPps9axV6m3MkPkJhp4hG5rsu%2FevhmuBtaRgWkF3L3oFFrqjokH2RVBJgn6DHcPGDPSVU7fK9o8lKJeDJD66Sl%2FhnX2kZV%2FapjzDNIvwptwxxD1ajFZRQyoQgKXEXx1SuJl44OaRa%2FKTDD9O80hXzcfyAjaOmdN4nIosQPOZcxtri%2FyJoP7X%2Bz%2FAEWA9pCv%2BzAQEbVSClbJLFvPUkzJfDl8%2B4vHfM2NgxHzJ4sUvQq5ymE7G3i2VmOS51yzAVb99%2BUeddPPvJIKyp7kSO4KpB4rI0MST17UGWnG%2BeSzvxhbmOYp03LXy8T0UgCgBfKKyUNbXHX2o1ynGGG4duDTArWxmIhknrwlCFY%2FO1T4xlg%2B4sNjACNVcFPzMS1jlwRkJLwHS8%2FJyCEkD8LmyaxkxAQFKi5jFzieQ4Dr%2BXZK8y%2FvyRpTYm2DL4uLgogbiMLb%2B1b0GOqUBQ2R23FjFvkpBRxRlVIpWWK2bJS0rrdlnmjc8SJtOmxLwxu5FH2RmTY2KmgH2CngkWp6Kw7QrTd5Uhrf4jbDJIAnOl77OPosw06fT%2FgPXy3hJCHtUqfFJE1c4DEu8oEL%2FKyJZvzs4nZdy1GFoQmoUzEYPZSKrOD3xVrdBLfkTIUEMyVDnH8gZVoU78JJbMPb%2B79jNIZCDT2yxPo%2BL7msmNWEzGS%2Bo&X-Amz-Signature=bbc377d4d259908c5ae9ea56f9cb896bc756491be991fc05915e29920b8dda96&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGU5V5F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCCxs89Wf1aM8B4kWD0Oy2hBNQS7ZrtBGhld6p%2F7ky8CAIhAOUZ5y7xwg1ikp1TmAgzkzsM2l3apa1%2BgCC79m3QJqiwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZgnZ3SinxdidDD68q3AO%2Bl2FxG54llO8oFvUSm15v1MFlr1qrvZxEBWWit8a9kkkQfeMjMXH2RzTMSKZBqkw%2BpmHOxap9dtyqkHp8LfV3Lpv1wcK5qZYYpT0f03VLlaNlU%2BCPMzZvhpQMvRp7s4PHI4WpB%2B5plnTgaVcLlw0KokQS79VU0ELsglmS5YR0v0KkahPadsKVYfJXemqPmSaMv65686iU2lBRURwpxmnKbp6DP3dUQ2XJ1gE2YxkZe3c7DZbe%2FTSokeH2Zg2r8jJS6ajC1HlfJTgmhtzhnISVdbGNmzXUYp%2FubHrXSQFfXZ%2BxXSsXORG%2B7XGxjQC%2F7%2FRI%2BCEKr8mltYPmYoJlNGusp2vzPkjXbm3SY%2F%2B7VqzsJg5qVemgjCjbMR2SHaUcCba7SkTcfsCbLGrN0c%2FBF3rF7Lijo%2BiYJpoLYCqkLpkVBfNfo5sdRHx25q2wdW%2FzivmsXggYwWUq3F6RZ6OYjKiEoI0yFuwRnKUZrp70dslhCT7WTzOUOw%2FGCkk7B3t8aBRw7nJFZPH4H8wnGdiV%2F%2FfKXt660TUw7KI%2Bds3UbCeC%2B1F7L8RmBglqFFZWJAqUeov6P%2FjtjjZHL2PQ07sWA9vH6pZnx00rkmmuHFqdByaO5YPcGNmTapr9LJOA7TD5%2FtW9BjqkAaGNepIxbZqV3VYj39GbodweNrw83Mi97Ho1zPvBiUWLWMQ2XOUaUfgNEbuPaFy98lgXHO%2FtILq0lrcvghKyLIAqEb4GTNlWiGDOXsIZzHGDiIoMguIY981RbIB%2FMch7kIJi5QAgozR7yo5jD0j73N0ruW6Ov8jK6dpo60FhtdMqzfBRKI2IS6h3Hlu4qTFd%2BtNGm7v%2F8LmkP7WMvPDmSmgVnT2U&X-Amz-Signature=d7a56e3c6b5c6901ca668802eef36279fcca8bad79b51935dbb0c82b5cd24f93&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
