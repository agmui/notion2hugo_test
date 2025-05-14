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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHBEQIC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICh7bCNdPu2L1yMXr%2Bwa4KbiJb7RrdG3rvPRhJBO%2FHLGAiEAwERmygFTO9b9Gxq6wpzYcc1ckWVv7Qovz35pDxDFWt0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2Kt%2Bx55buFsg5sGyrcA9G%2FCVmRIre69hvX%2Fmr%2F8wNNO9EmYrafOpu%2BsAF9JYbMW5CEJ7AfR5wnKHAMi3jUilCnFkHSa73bK9N9hSoh9%2FmoOnjGJqjxxyP4z7Zg6HHc8RKvsY%2F9hbg1AAtP%2FoPGv5Ua1k2cAkGABphcbw4MYq3zdZ0bgiZ7MgEPJ1zJ84Mqxe5h29ObGT8Lk24pUAU1PnMtEDGi7k3HbMCDbtFY4UMoMnWc49qMnknxiVTSrj64NZowcxyedDYZBWxIhZI1jZxAlMrI8VxMFZ%2FddgbvZ1q31Mdk4KgwdXg8Nbda1hA0XURQP674FqLiPBeka%2B6jsqrRsd2KYu5YKSVmRZqLuk265rVugBZ5OjcrCSjDuIVtsTqdgfhheBA2uOslJ04Ov5HICEFHUL2o0FgSChDcjNw3RdFeeQFZOPl2GsEZC7JjBoqmsfVGGzVnfNT3lMK%2Fji0BFyRpTZt3kUatM%2FENXzFBcOWpKJH%2FnSsCLuGgncdEO1toEJOjAw%2FOzw8%2FFB60ZBvLENw6ZwK%2Bq8bH8qBqzH8WLU4ohuswSm6YY1vplZk%2BE5AobJB1RJBYFAdZ462S1jxVHmi9wSeLJscIj0p3M02a6gKpLrxaaUA9E9XUoWrEAUCMZkGpwES0u98TMOagkMEGOqUBGMmJz5udPLkRSIpMTxg3PpqXS9pdW8%2By9gQd3lMFqGk8pGSPjksxns6RH9z9y%2B4L8mLU0QP9nJS%2BeEXtoMXYuQntEdx%2FP4cCcgeHXmHMkgCpnYjQ8xu7Sj%2FWtHbRbrrvmxVhdaUcgXyrR%2FofbwjhR50H0zMXSm8WvOgMHa4Ytq8D5ZhgyHyZtuxdEb4WYP0iC%2BSCZfqrfyRs9iuYfSA8rW1SUhz%2F&X-Amz-Signature=bc2b8e503d52d43c6bfb43a50c9b75eb25b1ef0a149cf26c9c8fbac6644411d6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMYYSY2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDi%2Fnnr%2F19uhhxGg4ZqIN2CsosGUPLTSvd4F5l50Z%2BKHAiEA%2BILWt6nruKQNzG6MYBipQJgEJQtfGpOrNvKf9ih%2F%2FC4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClvfsWfjd209lA7mCrcAxo2G%2FNwuoY0mCVo1kbj84suHvZbkpFtxxPeuN4Dge%2F83h6BWnsKG%2FvnmN%2BqhP12GwbwXm3tfcEwkb1UR9%2FfxYo3Zx4X5njDx4eXp5pDjeBo1wD3GF91iBiQY5AowDo%2Fq8ylnk0d1YpDpY1lNTd9Z07shGV1WB%2Flgj8O%2FjcFXESf1aHF2AjrHY%2B5ByLQMfrjyzKXZUmLzCQ0vppngZ31cPU7T6KMglLDBaskHmvcjDWefjQbGnczUZgey6WgA5h5wNVHFbyAg52hdRN0Jwkjh5vIIK0CIFtrgKm7XDHd%2BkLApJO%2BdQVhuPTdATj9gaKYWUw3uddndXPA0rf5SfcQu4vyPjamYsgB50NhN%2BgwgZOEILOJDlbEZzfInV89JgZOiC4dWMyc1kXUBBD17PsJwn6J0xzmDLC2%2B2s9mKWewmLIo7X9o6zyQ85zN%2B6mhuKkC4ACv%2BlChPpkF9sz15MzPs8bztZBZUeaQHu6f4%2FeqAO04Qiip%2BLIIMJ2Djde7ABevO8QLG6QRP00aa%2Fy7pVCLVH9GWD%2B%2F5FDEBhhSiNE3Ujmn4NeUVyhg7i6Yj6Q%2FGFdrcSNEXGuTYVffjBCO5UuC%2FHEKHWJXIs%2F0a5m%2BBWYntc3mwmqVkfsWhVGpmI8MPagkMEGOqUBYO4NuvSU1npGFuWyZmpu4y%2FaNIGdH%2BXcGfaFuVnpBnCcUdTsr3ISvtnCtT%2BSHg5kLg9MAtDthmdjG%2BQVVeYf%2BkufMpCBuaYBtxqN5oS29oWrw0Ke24Q94YK81H02xkJfSoQrid69BEL787g67CrlDQMtEjXmj%2B9isZoyA%2FwlBws7WwfT25qZ%2B7hW0bwQUdMiTeOBZMGIOPDyvJjxXn4ehBGq6cvY&X-Amz-Signature=2c497693fb999362d0a4da47bf7c111bcee41ee61437b26cd99241c7cd0df135&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
