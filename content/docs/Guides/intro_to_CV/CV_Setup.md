---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57P3JXL%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCfi7vi7wn3IsxoBXBixyNRocfJD3PsQftn6CO%2BcOmI2AIgeAcA5TbjhtRazpS3r%2BCKq%2FJiUCwKifbM8Leftnf5alMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqNtCwV0ivt%2F%2FNlASrcA5T99XStMqCUIQlny4e86rkUxYWxQ7jaDepXKyVtek0lPK51X6Mp1k5NR%2Bfa%2FXeWr3HSRLm9ABErKEs2irxJVc47jSvrpRiDm8kC9soU17%2FwJS9XDZaRpLGjhiHNOuYERewgsw%2B2%2BJESDmJYOyfBcXstbqtAWIKdAnnFIdvq9n6iu1LIsEV21bE1Ce%2FTVCv0dCQk7%2BflBCFF967Mrrmm5wIhK5ny7PEdEPxrCKa92ju%2Bcedrewt0BYbzkIzfg6LHp9IuWFa70e3kzLaAABY7NOyjUzD6Lri90BeKnQwM7qAdYttQJccpfTMgqtsgU0qzeCcon8ZmEnEVnv8od7VRYbByQ6W3qQs3KKWW1ZrdwlIB4hB8IgFmRKrCIXkZlm8T6y%2FBXE7SQMEI3CQjyjVxLDQVSxzgiaVI2O%2BPUcPf69tB1dxvbgDXIjURU6msPHV1rIvAv13Sw%2FzV85MgjwKVFsj8RnONvR3nLgIHX1OvRtN14GkV6mmlxWnV%2FhWqXWw0uWo5CtG3IQephvHqDpIVQZ%2Bcu%2FSDa52ipF1MMTVhzrmNftm9bTcvWGNvD2wloPHoyFWJKBQqw%2Fzev70RAlImaGzq707N19UXMSBJBqN2JiduQhyHLjRSWoZyvyHUMJnn3MYGOqUBQoHN14VMVUVSTNvQi61G7u91tEY1ysXHKWyWIX4gXZwXaQfVgLu84xROgwtaXhnasBmkZERIy%2B4BuVLifMZjeolFvd3GzmkaDX2UTkoEdABXAIoB%2BqnYhe0r7d8SPmXht52TJDY6XteiUcoZG6nLl3CLat2Z1f2GIMt%2B5b3JSzZFfX5Op0pw5f6KKPVNl%2FSs87OfgthhlhOP715JaqZZvkMZfRyB&X-Amz-Signature=bb97bfd48708b38ddc6fa49c65ecec6199b5ff5de4c11c807236d361a0aeb677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPV5I2FZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCV3zVXJW%2B1KdVUqz%2B8qJJUo2Bn3VLe4oaHm5KDG5G7HwIhAK6j38ngd4AWypuB4W%2BmzpdlwdmFpwZREdZh4vFlOm%2BqKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7JeEylpa3C599t0q3AP1gE6lstTO3WwyTNOqBRzjFQJor4b12PJ1JxAgaONOjgTblCzd3tYGtLaG8LIR9FNcyTsM6EqyPWHH7VGfHoVsTJW94BWBpRGVvIIo3ySVd60SsaWpwgfIfaCKz%2FCQa30C%2FjstIWVlLHc35fT2pjjA%2FiXu5astkju93wwWXNuHlsIjIAnsf6qlS4sVEmVn6g9r%2FsgYYpWMx8C4G9M%2BRcWwQIbUEuj7hsB7Yoh24s3qMywkezYzz5OeihtPqI3qx71IVo9ev2wnNmJk3JSdq2xtm1EGIWYx8wRbxfPqkaVOuMCGteGjWFjNoRBA81EdU76agJh5QoQ7xuAcueMniVpUwZIL5qfFISk6oYTTbM%2FFAiiJiHmzMuWTw5y%2BKiJM%2FioDsXH2fNGXwbBJ26UC53FqfosWXSPBqA7fsL0TTAsW4%2BevgOXfJnnEV7ixkOWy23TtjdNvnZ9YMtVLxV1sGrmcWeQ3LSV851%2Bvm%2BssPGMEqFDS2EvfC6cuhe7RY1r3OhBo4HuWBoCUNALy8%2B0XZrdbpGHIt09pxatj6qZX91XUTf6aMrmVS3DomzJ7u7gF8YX0YfJwt%2FQlbmIN%2FXPXIaAw96%2FRfkXr4LIYmCzh4I%2FXRWKF14sLnK91bDFCbTDa59zGBjqkAX07FsLNek7qShyI2DGcfZqC%2FbP6E%2BjOrugnpj1ls7lZNDDJCP9IED5FxhwgH5yL8yvUNGT67YtEue9xgu2%2BuA1A3glsSzkIuUEFaSkP%2BqzwJEsuu9o%2FrOLML4HFmc3TJolMpZV59btso%2Fef8%2By1TvcgLaSh1wCfZQu9jn8vsCFVMOM1zdSZkQCpyZ8lIrO1y48pMZf5HxwoAEK9HLq7KWMZJWZY&X-Amz-Signature=99887eac131f41394dfee307ca23e8d1c5d16f7bb7715b26e39b904019921390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
