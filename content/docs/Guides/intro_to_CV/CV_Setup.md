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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUPKXA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKBRtFQEVlgAV7PZp%2F4zQB%2F8YzPJqAb3Z3%2FR8UaJB1gIgL%2BN14%2F0f2vsgUcn3MDcKlExFhcmEDcG2WRBgR4nWyhQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOJz55X5DSeMvTkF3ircAzbJcNIXk9HR%2BEkJQYCC812FVQyKFO51VKeRcrfZNo0CwPvcW0FPe5Z%2FodGmau6dDYCOA43soABK9lCQZomymhbPQnzHYYQ9BHUzFEXjaqbxvKwCVobt6Ar6waLzQ2oU2Mm3ZeSF%2Fi6YVqGsqUzBLkFivYEB9sGcidLMK7v2cGLkeBxIR2R%2BDGUvXNI4oTVTRkkqAwdNa65kWdK8PQnaso9sxur9WT%2FfC83nBZuKI9oypzWQdE1zdeJMLEDDlX3LUjBJw8xQDpt9EwQax9RIZVLkrrbVqyq3eD7JHrSWPjdsev6hT8KefsMw6r1S3AMaWG0FVoa9YET5lfVTPRJKjR62riyuD62S75JiS3Jf8lRj17hiQC%2F8e8oUvEOuVyvoiddRqckkgaseGN8wviOUVDUBqXcipMEokdwTmRC0w46DzGQ2rI0YKzB5bdTwdHsRs7wtj1f5LgmGXlOK0vDFxg85dkzq6EDip%2Fgzjp2R%2B7h3%2FKwQc8ChURd9Pcic4Xf3r0u6hopuuNIpLtB1pQ4rIe9AzkTB7JjMgcLC796tUQDdCv5h5wQSudP9%2Frbj6RcSs9TH5hmIGiLrqZvUNMQlXlU4YVTEjp9SAUdXSZn6SQu2RTLL59s5um9aYZU0MPTf8cAGOqUBs4G1Uk3zSDXldKUOZ%2FC6lzPv7purUNzPBI7XR9w8%2BDSn9rdHRG7OnkipFyWr1xyoxPD2iPWKYelfFL2vUIqt661P6gW9a%2FmBL0RAp7YqGJa1eDL%2Be0bHXZ5qXucplIv7kpRliTrcJ8DQNeg62y91S5yj2e6XaHaW0SWupFdr9idXwS4qMeF4ut4fz07xrU2h8xmFe2lkCLd45tQMF9YAECARFni5&X-Amz-Signature=0346559c2cc7a14e5bc64c9ab6fb41bb554baf29e79c7b88d0d0875641dadc45&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGNMVRC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHZkE8RqTv0uKONJsciViTMXqi%2F4cgr%2FXJy72b3uaxYAiEA6taO87wmUWNtMeWM3ug85WfY6fP%2BeTnkaSIap2xZxmgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKkwwRkvQl%2BsrvqN8yrcA7uVkfO6hcdlwLnqHJ8SaitoacNJEG2VRsPeeOkeEYkyKDtl0W6XgtvNheWkzmuck121geCGKnhWL%2BiLvEvQ%2FO1oPPwpUlYYR01qzFQ2O%2BENL71ZVCtF5fB1pf%2FhbmjTySg8nZfmCOmiF01hfVowzMkXbNzO10jCuOP6g9xCT9PFr4%2F1gNQp0FzMZm5l3SkchlxH7OBh3vY2sSRbRaZeNn5Id2Ddn3LKhbLXYK1xuN6QKZH1nbrBktv4ZkW5KyT%2BdTRTAEI7%2FPU7jIXiZj6LvhXvRyDDUvNyZszJ2tRH6EAoebsiGTl%2FGCcDgivPWYxTWJ0%2BxUizsFXaeNp0pNjuv3jYkIEBMoDIDG9KI0tgZiNybMf1xqm%2FRO52XayNSdAxsbxZHY94u4vvO3pV7HCq8GB6SVMAKa0mwKl1dOVOcm639WlQ6uQ20N49RdcMYT8FdVzyfaVeyA7yRuIa1PX%2Bv6fyAdFLvOcDA2w16y3qlqLiJ7ZaX0Ru3cV4y4t01WMp%2Bxv3nwUGzumLFqTYxrnQgvFYcJgfmt4ONn579YwySkWSXNQHl%2FAZKND3%2B%2B%2BoOPpR7fkfNImUyAONzcOPu%2FvCXScaJd8slCkeRz%2Fu5pCgiCTy%2F2p953HHpak%2Fe2mQMJLg8cAGOqUBdpOSYZNKJ1GUzajyzT4w6Iyq3fAKWJVkhDWrCIx%2FvzDOKhOtj1n7Zya4FzjVBNgu6gYb%2FH2mjnNMUCDTq%2Fvc0Pirtn9Hito28xyG%2FkmXcLtRar8XHp8KDOdKfsC6%2BJQ9tXfD6ZdWmK%2FkBfRg5hbh90KnsMo7iX1dvk1JFeTQOZXn2cLPJE%2F9lhYk61gByWpzAMiFLui0fTKbxeZzkhfD7z9XP1xq&X-Amz-Signature=a548055c39292e97e29ccbda11471ff9482f420191fb5a2a5661e3c26b97f4b9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
