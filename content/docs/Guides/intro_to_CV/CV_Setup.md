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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXMGL64%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYBvJ663pt1mCvKRPLoxmsFcWFMcuIjWwYc2wX0ySqtAiEAsr24LQvGiI0jzymU6Q30cXNz5e5RcgmxU8Hq06GylVEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKCjQNfshzkc6ehZBCrcA3SHjXqpMGOIuA2INzd3gXY1lf6hux%2BtCI4THe%2FPbO6V1i17jw9D92SjkOYyvKAfd6lCXHOXgGlS3QBFju7AHMDrH%2BJOPOQNYrASrTh0u5d3ADlwnji5TsE9BOdf7tDWmmsBbE1a5PktobNVZ%2FEq%2FR4b0PGnJQFle%2B8drCrsvDIDj9K43rO5VWrfBk8liYcwdoaU9Opc1mAXqt%2BRifMez%2FvM%2BkiF5%2BNKP%2F9p6oLzdyKNYxluywvWa6jfA9XtCiGrKPwqjC9PcRZyF7P92iw2belSXc%2BVgEOnp%2BfoY4N9PhftVhE%2BWILqf2SmBxyNLXELXjPIArqZf6Alqc7w%2Fc2XoIya28r5PkgtPSnBZrpcLil6QFEg9a8PjAquqnbeuuGQeq10EKdH%2F%2BVau1eyf5HRPX4XhnCzbGYfm%2B3yBuO6eUL3HozRTz%2BjZoyEEkkUwnzWRKLC8NAxOQJa9GxuQh6VpD0pqkXQKn%2FfWtEnVYXmXOwT7mSTKn8aPqZjFAxtc0oJZiV1Q94IOJ9G96zEnvaxew4z57Nn6PBZiIdzcanNzhAw3BzhrTfCiqZTf1LSn%2FNeaHNESxRPxZyrHXV7rdXmGdlMMmwnoueCmbieaqKK56VHlP3NFLoinxVs0jbDMIvr2cEGOqUBRxGR1QeXxOIizOMOgdgqT%2BMB3%2FFi75Y4xj8hqfsa%2FSMH0p0ezH8wyE8G0wfPqaJcPrSMFbIrDdslfrWXv0XJMcCjoj2HRcB1Tylz0wtUQitgOGYieoLU%2FsAwoSZ0IacJL1l4nT5uvtjkI21HLcoLPFHRX1iGHiP9eISnt8HNw%2FS6CB%2FL%2FxzhUu4pXbtxo5IBhnvPyU9g5Vqqy5%2Bd4vCc0gQZiV1m&X-Amz-Signature=891496fee8280939f41474ce558ad46b75955878671dc92aa609f61dfec945d1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVRLSDN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe0VxYYE4o7yL35JJSxO9R1sU06k%2FznYK0wGiV7gQLzgIhAKxtGp9Ps8kuIIQMzEcE9SWOmKPYM9XtcGlU5Dx6HaEQKv8DCGwQABoMNjM3NDIzMTgzODA1Igy6GIvJSgwNWFS03%2Bcq3AMIn9OqxIlI%2BCZ5NbU06W8%2FTEonxCbwXi1ShzJSNy1QlU1pNGgIG%2BjyxlVd1f0tcVSjfO8LFNP%2BoasT%2FfGdYCBgGcINGrIJiFRyaWcqbsY0N9da63%2BAFB9oiXKlFDq63LHkhpVrgnXkYFFWj3tBqWczMj0iZ0s821lPgAvWycS5NvIYuLmU9AycLBUXCncueoU%2FlOrxeUimdIg0MpQ6L12DXDOQobYB31paje6o8w2rt72oYbJOPOidXmAkUNpIg%2BwIH%2B%2FH9Dd4AwBA0yJ8K%2ByBltvrCaxpkevYYyi%2F7Q97ATv%2BX%2Bxw599sAJ0TKhW6M4FxaAbHM12rEL%2BLiqddef56YYmbyBnpjWOeTy%2BKdL%2FFzs2teyNSGRP3Zo5zNGfauEK8KPzGfWc0j2woT0fGsOASXup903mhY%2FL91DMwWBut5o95bR1oXpEl3wmiW36R2YQeebJP9rg6e1BwiH4Uq%2B9Jx3cb4Gxv4OeykmQaXku1l9zVL6AsSg4tsUUCaSMb6eu%2BVqeLjGj4npD8FnTKg3zWqIQadTTAG5TRfs1amF06aXpYOv6o5gtGBgmROF8x21kbompc%2FzF5d0Ta6IL2b5aNjYb1K5SmJInPE%2FpNqms964pcSbnerX0eT6RjbTDw6tnBBjqkAVMR2Rx63qJYJ3s%2F%2BPU18r4o9uECT8rYH9pU6%2FU1v1t%2FIi%2BBHnEPG4JYmlJZtWD27wh1pm9QsVFtBiSnASCEIJwBrU7nRuSHkX%2BqABWJoi%2FcSFA%2BC8zP7aBPzqUJvu0V8wvBUymecvm1pNPLCKHyO2CHJbHcelhEq7N7uARKkJAArpZ%2BxCAN0Gn%2BbWdnKehzh%2FzT5yl%2FZlzAVFNDfpgplYe27qyF&X-Amz-Signature=db542229da42dc9a7ed6411c4de8443d9aa739d679e910ce4941ef58be17156b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
