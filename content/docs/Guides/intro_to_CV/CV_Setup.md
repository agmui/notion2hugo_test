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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YS6MRF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFciXh0OHeYeJROmC89NzTESvb3l4k4AtgNN7BSFEjmAiBURs28090JTL%2Bvcqio8g2RtOMBq6DVcJSblv44XEd5biqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMII4WWMMYD4GrTp7QKtwDmWjzR6qNujRBST6KtU1mZNKK2FNBDjb3ztTBoMYvbCoXFl8aOEspzWue7dyod1aBk%2B3ywaiMkyyuOix6tKz8mz3rnXZzwcOMIueT17IyKwSjbt4fkOVM%2FmvF2yHH1BPia8apGsPs4nvOOKpCcLylVN234QyuCNVFoVIWu7lePU10oMiKK5x11HDkqJ1fXadDs9Kdtjj0iUueRQnnJmTmqHGlGBTFkFkT6xCs8zONnwy%2FwNQRXL%2FQDxY9DwJpBaKQuwXdELrvtles9UHUMI%2BwGOLasiRLNeDo9KS%2BktoSA0s4BySE6cDTI%2Fh90L0JGQmFrIz5ip79E1fxC%2FFQdN6OWgG%2BnCp6qxQ47%2BUQMX3Jh2KSFpRW%2FG2MEIa%2FxCvNQnfJbqepro6Q53nu%2BIPe6%2BA73Lp37xc2ZUg7XccLR7mUG9hXtlIqfGsO7uyLuOe2b6ehbP7I9CYAdWd3Few55EZD2M6tWRLEOk0gxfytXrDVEtIpA9HqVHeKWTK28gDVtOiRo1DJ1wvtjEIc54z5DRpnB7V%2FxEdL4tj0oUqqTK24cgPHmvg%2BOyANAcjCZ9kBw%2FJ8tWuYPLFtsFeUWsa6qLByAtLQyXKlRcluyVBbGRJxW9sVZJpOdSSI8ZwA4c0wyODmwwY6pgG5oVTQR%2FKyLr170y7NGZqYP6IL4G0UpdP8JXCsbHtEFjtLrshqVkE2vhb94xeydBe%2FT7VJjeqvPuXs629s0lHnfdz8VmFeG9Sl5PyZFnbZoO3pJ1VinU6BJxZOL9rP8IK9nYS06%2F2BBrvZQUWfYoCFQHK20CVAh2ijPgeGtYOtCzbdoiphBMNupH8No4O2yEWut%2B5wnPwMDys%2BDyd7sdjOLdnnjiQo&X-Amz-Signature=011ad6f87db35056d9196e063b13a3a36f484d0b9bf6120695679e1ce4955d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAJRPBH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCrCzfPnbz4UyDS4pWJDcTWzhe%2BUkyt8e1Y%2Fv947HvUygIgPnGBKcxA9%2BQP1Wm4mp%2FsveIwaZInfYVCFdfnziot7ZIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUyv5d5Ua0Xo8VzzircA6VnwN5vIGy2StH6MPfbc3aKMu6LiTxJU9zKnZJs0%2BKttBKRSuihV7kEa6CwKYZ1wzhRFnvoBLdMp%2ByDcLdciSIjYIFYt24vKRshQS3ODiNzkrzytjnTzZ4MasTZnWAwHJEs8ZuoL%2BdRHth%2BHPIRN4pL1bEKrMjh18iyegvB0rhgCUFbMGL6dsMywxPb%2Bv%2FLu4U4l34gYw08oS0GRHRpTmGPCCz33f0MrIE3aIhO2g9bEufi9DRmeErAq9%2F7p7abdFPe0HvTrLWAPGhFh6SRcTMem7pJQKNOlED180mdsJd6OV%2FiIoQfyEX8K4F%2BnyDO4T0gv2xg1PLHgY0PZfhynwKGdo6Ksn8Z8A74gc5AAsNBsvf9eIis1ghYIKBX8Zez0pkDQTICSb%2F%2F07BVjZBwCdi8YD5bcfgd9oC67qW29%2B%2FsUhX9z7R4wYXhxQk7DiPaC51tg57wr8vxhKcJ92oYhzBwNJFsx3JKJDLHszpopM%2BL4eUNnC%2BRl4GYDDEEzk8MqFgHeuppUiP5u6Mq7gvr0d%2BwAruWFElywzCHoRlChts6e3rZ0E93tf3WUVOEQFJzEsWeTEdjQR54ChUT18Xbq3vkJLE8pEpWbDBKNbnW69heV6lyhVy8YbRHhhctMNvg5sMGOqUB7umTsJy%2BR8lXj1FNIoP4tDRjF4wUSDh3D2KS3oegu6kIsm3LRPHm1FG%2FTOEByidRkEyPMXNFhmeAKxonVXuk%2B03Ft1OWJqvMsyOiTscfn3rCaR0PuqPzPjqVuY5pBrm7seaklCLdjwVarO8lxPa1HALeG5Dq%2FCpYboQJmEQKRW5SrwxXvNWXq22wfkf4oVEJtIXGxgF45FArCHoJ3PGdfWxUoNPV&X-Amz-Signature=8eaf88995b9f99825bff248e5e15aae78611dad7867da626a2735c295585e30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
