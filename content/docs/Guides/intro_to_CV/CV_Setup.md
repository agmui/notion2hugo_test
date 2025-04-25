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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQMZ2C5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0TR4oyYoQkIdkNUCWJ6eiBgqj6%2BpczI%2FbADGyklOuRAiEA2HBctplybnGeO%2BNZa%2BD0wiL0hARzV669fT81PCgV0Xgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJZLK3ecU6mi4omrkCrcA%2FUyyRRBMnLgeuKJ0AQpyd2F37xWy9jYqI%2BH8oUUGqcuB2wjrriJnY3KOOvQnh5ucCBAGMaFTAEcxjO1fQzd6rMOq9FArxCxgNHwB1Uv0ZJfirP210ZNTnMC8XsI3kV2%2Fn1ijkgUvI3NwxFJ1VX0PNPLVzJYs8Z1ORIID3M7iOWyCm4LpMAwgHIfPm9AaIdbeuOH9ekaIVC%2FhdUUpYp5o39o74fXcWogmAdVzO3EoEy1hFosKq87M7ezFFRrJl5sHn7syZbAaYdE8zizf5l97DxXnrSYIJ8iXNfdxcydS5j%2BraXt%2F83gEDjWIkTMKBoTqaGJTE0x6JrBgUrnzX5i%2B96QoQ1NAWQ%2BCaVu9rX%2FBvUZ0vW1jQ9J%2Bhp1aoVvNH%2F6adVBP33Lebzcpj5wf3bTimjs44xoUPpFCMHKUVFHhNstWCtzcs3N9xF%2F%2Bnk169VU7AGuwd%2FX1gtT4u9uIFH6HeWBfsonwe%2FVf0ECSZIEVP7fqxlsjnfIUQq7a7a45PNIt%2FS17ZCNinKf1ZDaXx5EtTK5Jsw0O5fmYdWAjFj0xtddFQzK6bAfsdnyrLkhZvG4nO%2BxWjVHFncrMO48I1f%2BEvvmT64%2FmBTGe3Kwsq6a5vj84jo6QFKp9zxKQSIiMJPmrMAGOqUBGcBV%2B3ahO0nUarYleot31yeiK9axSxUae6G1pSQzqpPrprmCa5QLEsKIPFAt9OKywuwYaELpMzlzwU4qggxhwxq8Kb9Dx6S3FeDJ5f1a9HVLNKZDKBZ1UeoYA3tUMj1LDIHaYs949Me6l2ntkMKBHic0LRExIK9MK3AYXwqjTsAYM7YapmhSWK0b16FrWVRPuowObFsogYgep2s8dQYt3ZJ6bxp1&X-Amz-Signature=6881c110fab2819a0675554aabf82d19d3c54406ce46b40fb580ed0f421ead1f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K655JYL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQMCs8CP8RQjQgBspFLuoABGo2Hl4KjN%2BqerVKmYgf8AiEAxqi%2FeVo4RebRq%2BtSVRs9PeP1um8xA8lkEKPeaKHsekgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDTIGC7JHyOIV1%2B%2BBCrcA9ru1umavHDKEn6Py25TN52v0%2B6qrTbJkk3UU%2B9r2AAjYPRDM2sycdV%2FkSbCXaRwZKwmG1ySim%2BDw6BSk6YsKX037f6GTvVUbHoxUpp34itiUwRz79nWWocZZNs3uCOlZYRTt7YHJy0oESJItqzljGMRSfeoEqHZYkL%2BENWeYJxudQsL9SiPReQye2qPfPrTuKzOZ1QqPc7UmT9mH5whndshmp2yuvSdrS898giSY0361HgThASyzGblrwfGJ7VDKpEPV6WqVUGbeWPyrL9WRIONbyz4AFT3XY8t0%2FeJ5INdt%2BvOqNNbSsI09oP2Vg59cJL6Jymqs9VSewY1OZUhONZejaiVVYYSyWyd1MOR%2FlExMR1ZvxZESQIPAwvzWsjuD%2BDUm4r7mi2DlhxQcwubU8Ls5IJTAs1de5gq4aUnMYs81PcYFHmwrrTRWAVFdtjNqwfXcekfxzfqwhE9bO5Ob7oxqDFJ2qx3KgeMC8HRX62x1XU9qjqvCgmfa4cTs7arHpzcki5WLTIoedrVfHuiLj74rx%2FOg2VgjbKR1yROJb26QU0a2dAKopIhamqvMDkJZ3Nju6OTES%2BCxx76ZZvOgrCLQy%2B40gRrjBZhg1Fh%2FeLQvjn1Vq53X0CXHz6%2BMPDkrMAGOqUBqVuNc09vkKEEi4xEp%2FwVoCXTX9n3H%2FZiLfIGTlA7mQXb8tf4ETqAuzVz3qkzEUnhLRyw%2BQ4N4OC1BZtDqY7oCbENpmY%2BrubgdSbUd0VpWRcqft61A9EqW19uWWviyqgSPAkfs4VYTmx6NzmkhIiJgYe0zGNuiOAXNcvztgNeiwRa6Qqz9AhF%2FjoHSc6s4LH7ZWbAZXwkw4qd1PB1o0YHctCdnWie&X-Amz-Signature=2fba0654f3c629628aa45df13ea6022441040d1d9036f0748ffb0ef85ade4eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
