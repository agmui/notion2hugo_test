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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2IFFDN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIEimSQS3TYtaTPE0TW4vZm3wUox%2B08kN7gQ9XXRwzSubAiEAuTSycHAqQIBg1Ljf1BZj%2FS3bwZKmbiuVWEN4bVf1NuUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHApiFGOy5Cm8UjK5yrcA5Jj5%2BHvXSnPSY4k1sXzyhp23yxipXmcGXrAbF%2F4daSraWBQ82K2oYB%2BEzoLaIO0ebQckjp%2BUbS7TdCFQtCcX3y0YTAYhT2cANEfhNRnMxBehj5DCgYFjJjDoZ8oErLG3O7jr5zFwwOwTvLXODKN57ACpS81Agv2PivESEq8fTXNRbFyfsu7myns%2F1GflDSW9OOEB%2BdpGGXz6KEvnNq1dt98NMIvJRnqQZUe%2FckAV9%2FPcwLxfPe%2B5NsB%2BVjvUxakyms26zJQpJ1vY8K7a8iAVWXNN1fIrMF4XQxJBcQs1QpiGsoXBy4W7N8nQQsLvVMPOTT0qtvgvZ5k9g0%2Fa9HaQawiA7SLPVVUQdG2ZEPC7I%2FZ5S%2BGhEQ7cTJImim5oShrOkZtapD6yy71Fx58Eb8iDzsaVDQ1xrglzlf0b099vU67YWWuuTfWDRBJGfSyPkcSEBWYHEv1HNvrgd8FE4TTsEPksnPBY5JcFktG%2Fkwq7jc5RE%2F2fEMaHpS3q5KVTWfiLQEOJhZw1Z9CFaKMSqoZywaoPcPQIRiekPVzQlqlsboa33TiWAiBrUHBdBVhgWfWXHKqrzVmRwHKxQ9DN3Ea83XRPFPLVhFb3ddqn5Ix9TzQqi4ljhe6tOGyVHDFMNXI4cMGOqUBLgMRU7R21b8OVwIoQiF%2BH8Dj4ofPnt7cOOn2EW%2BdTaJGoVXGwo%2FsxvF3%2F1NO4daBvdYawt6vtZSo9dRISYPDSGAtZ%2BGOCzNN24CZfUKshXmUpqtkQXoh5TL8nqdRM2XhwvCpR0ohCFmOs3SkEgm2tzEXsLfN3obo8Z4Lm3WhpLAKYpSu6OVJR%2FBZhEaEMsjAhaOyhJUvADwtpYYHbaB4ODPI4iP6&X-Amz-Signature=00e22e960fe443954ad1115fc504b1b5c731ac13536d57822e834bbedaf5ae6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664XI6BVF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCIS8j02xnEQ3Jbmp9JhHTIODYhyLaPA0AfH9oE1r8IGQIgSqq3Oz4PRYXLWQrThlsNL%2FTe0bWRiqaVVH6IwMQrWWEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDI8b8HDw0IYqLff6OCrcA0cu7cdC99av6Gw5yjeL9TXZCa7Zm5YnlEkZhXFHoeAM7EPKr1YGnXNqClxCsVviTLo3%2B5nDtBcRGPhXKmUo%2BrdLuT2G63TT6%2BOkC%2FTonh%2Box%2BLJgKiYialqqL1p6W0vJwjUQ4GkcTud6B6wMN46cm6JAIIPetTFvBj1aTXZ%2F42eKu%2FmQsJno8NlpQuL%2BTnSZNz6B1Bt8lNWiZOIFBHLERku%2Ft9QnH7e1kds96HPSKJfhgorAIRNC%2F6wjEUahE%2Bx5%2F0wLo04ruQaD6PmL4kvHYJCV%2BuBbvAex4cYjn3RkxH%2FqfSYWXiFOgDavRWy80dqMDBDDqwm%2B8EHDSd4wAen3X9EECyXhvhUt1RUG%2Fwlsmp0KMs3N%2FxUu5fmRXvFvMhBWXy4CtO71Q84%2FTaUbPNakcFpZ4jheSq%2F90esD0JevrpMmkqVNWi03Jm%2FP3IMdBuLvsmYjz%2BbeicgYwcn1%2FUORcGworaU76nRjp6cwEQKyBXHiowi4o8Al5X6mvCHLhwyEvh7yNSTv4YuIH%2FdpX6305RUk6kUX3EMMfzyLld9MAPbS2TbBLO2HO7wrZSy0gA8uK6ZwYQrMIci6YUwHpl4d%2FXr4fdc%2FQMUncG8WPLVgfXvh5jNb6OY%2F7%2Bo7HEZMNHI4cMGOqUBIzfC6OAHK0%2BU47wGHTLcpI4VV90ABb3zPdG0ckFkAOayv8VFyejcMkzOqXT7Qf7W%2BBEzNSG0vOlsTjcJ2tSz7JkJkE3%2Fj76Qe7CCIYM6Oz2F6LkH%2FQ2zqJJOIoQ7NSANIDcDVY3g1n4cmmEZeifu41zfMhxrOg5QANSy1Lfw424USI69aj1DX3MCBc5%2BmTfZETvQmORfy7UgXVFHR7JSduFdJxWH&X-Amz-Signature=bb1264fcc7d412b6f7e5a58a32a10885df15a5888a6002643581ad8a448fd970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
