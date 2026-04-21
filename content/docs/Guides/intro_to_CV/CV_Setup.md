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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOUOVWTR%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICZKBJjy3ycJuKsZhLIn0Tx7NqGQnozJtOryJHiFqyXDAiEAlNYfXV7pOYzvyRfnsTlI4%2BqMcK37v%2FC%2FFXCT3C2zISQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOheUL6Zza3AnBAc5CrcA719CYoZI54%2BTovF%2BrEYnaRVZBcE4sf1ybT4lkxJbnzEgxDF78S32aJITr57Yi44SjZi774xg8YFekppKJifEpoXxuBQM8QRTVDy88oi%2BLuWQtSUiHAyQmssrB8XGgrl3UHu%2B4BXwwicXdSQSbp8sODa%2BWric2u%2Fta2dFZXKFNS87y7I3iAQePd4xHxEetgZW8BExon0MWoy6YDcr%2FCz%2Bg1ok7M%2B0bN9WTcyqHyKW3%2F7MSKNJuxro1SZKVZJUv9CyBI4ELCYNA90YEXP8HUC5oqA7G6o83UyEbOVUH7ojEyQuB4nU5ND28PigXgTi%2Fe%2FS%2FX008m9Iwl26iwSJFP5tMcLSkvNIi3dZY3oqZMQTpmVYiFuckuAlQ%2F8jXezvQ8TinAEFKkU6QaB12MT3N1TTGxJYGWNhSot1Ke5bk%2FPqPtqCJqO5XrDkqV01EIFvEq1Xu6F7BKR0WRRtJr9mpM9JI42Y0KLNURRTE7B9CqGK4rtE3NhftfZ%2Fx2zTkJTKU2zTPvc8CCte5ZRMAT3RhSoDejU5I1dfMdy73i0gVm76a7r1cDXpCsYc2J1XoZC3uVKvtitExyD5%2B8tUQDzOGCarGnf44uvjsJ5TJIvtlrlsAB39ZrffWIAayR1vUqYMPWsm88GOqUBiZkwQVNVVAchQOoiThcbeVuzmssX1iAx1DA9Jjzw9Z5jIYAxH%2FeG2BAVuccm1lYGNq9OKc1jmsiC8UPLIqOw8E0yVwA1F9iJffzsKm6LQA7ecrlPjlKVm912K7FEwytDE90lDhZmco1XoBGVWf1njjzIoz20%2Ft74ZhnIwSC5j0LCn%2BaK1ZjkK%2BgrgnsOMV%2BwW4%2BUjgg7JFORkaZhoaScGFXGE5IB&X-Amz-Signature=2f25b4283a7c0cf0081cf0cf7979b3be5deb8d226ccdb2481988837a3117843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOZWE3S%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFYVtxbbdqOCKN9zpT6YGDziMIUgNqlo8x9Qk29vzVIbAiBbPjgOiNZGBpU4GgBc16HWb3fw6uvIDM6l7kT%2BdTreOyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKp%2F9z3ad8QwhYVZuKtwD%2BTHwfSEgWhKpb7EJO44E2406wwOoCNeBKD71j%2B3r2yovdr0QmjU4v3wWTjvQWmje6ReSGBtSPqCuicttdNqKr4qY%2F0IQ2%2F4OohHexI%2BO7t0SJHUN2IGeVFBHMh4X2S%2Befo3W9rJdyzTsr%2BBRZEUFtIsdlU88ok3tckKK3LIH2v7AJNSO9XjZ3YtxYKCrjXpQagPIFXlHsPk578UYF2yjjpbLV9Jz0Ls2QjQQAVCgZv2R%2FAxdX8qhzcN7fBWj0pwkK6k5qaeiVxdkl5AlgoZmRSl%2F0sFFRYmwctu03qkKu8xX8cJfu%2F94hjLPqa4p2od54pn02I%2FMeYLL26VVCMvIyZ7UTh9Aibg3ol3DEyFFEiCq%2BDgIlLyQKj4TzXh2EdlsdrYMpOQmPRnzLh%2FnQ5mLhSwXXIILizDGOrCQ8xW%2FvYeXlraPCYq6p73T3hq0BX%2FGfJqSt1ciWPyYQPDhM4E0dYWn6RBumxiGQJj93T%2FTUP6LKgc0HE%2BzwuPSOKcv%2Bi3njwz%2Bl4v7ZWgDadnkgnHNxP7bR55M6eLec0hFQ9l%2FxuG4FlZ0Du99hwhZEf6rv7COmn4qLwqJ0NfEC8puJigOjfWhFDaOOX393du47Xa18OguUwSkPH4Bft2vr%2Bkw%2FaqbzwY6pgHXgLRgDTRyiqgNJ%2F0lVnNjL2tUyh9Mz%2BTB4RNx0TN9PrilMNE0nQDX%2Bu%2B0TC%2FxRQQ8NhJ0Fd4IV525Mjj95DJqtJnPqHRRYT07sHru%2FuOX8tLFvIewRzD0DiYPItO473LAuhubgTuO2uF3ze7oz3na%2BHDdzW9Sx9afutjOzg5yJQ7wKf7NVgNhv7b9oL4l%2FfvhQL1MqP6ZbDR1z%2BTmOzGi2DHd8IV2&X-Amz-Signature=d88c5ac55582bc127073669ca7f372423b811d8baaf44208cb66872c33e4fd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
