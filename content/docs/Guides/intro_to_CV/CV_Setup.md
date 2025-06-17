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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLXFUG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMJIPUpPCQk8jBPrxiktdI8PJvQaElTccitlkfb%2BmFlAiBV%2FUgMjxDhvo1xM3d6IsNHCVdhXBSiA2F%2ByCd9TaOzjir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMLxgf7e6R7A7aPJiuKtwDLPo6htYIQVYQ97AHmQD0Qx3OBWLzjLiK%2Fx9GUdwwk1ZyvCcmD3JvrLkvvnynsGuLVMEiUmi41xa1K1Nv8Z3bjbWSb5xS79uy0B9pYpYQGXKt9KnpoIJ2NKUjpy76Yev0HeODWxvY%2BC4B1GtUfWRfK%2FQ8PAX3sM%2FWybCf5mFQsI1bdBlT2vl8gXw1Yjh7st9YkpPZHwhIkvkc9QYhLVYl64tLBB4ePSAejkWtKjj4FIsAJt76Kb4JyHAe7rC5D8zfysvVmw8rS6xOvWpPnWw%2BVFAsG%2BtpVVDXYO72ayqdwo27r7Er8uTiNtCiRFv9B24TrrnLMWsyGhxW%2BvEPmN9q7r1zOnzbw%2BQuQR05SkmSFuVjOyXkv4OjFSGrnszFLpZckxmCmZDW2UqxzTdQxk%2B%2BhTgygrmYaKHgUf4n9jr8EMmYK1ITWEAdKLAYFvuzkZYTlgext5UwUcfj62skUr3UH%2BjLMWzbp2NUBUv%2Fo2W01DfnUeYmxqXQdG4oAETPQOlRKsQvbuJRkeo5DNa3PkwuJunbgnc%2BHMugz5fQVs8zYCKhyZZnRsaA58tcPLDRsm8OHfj8MDhbGpoT3iv79ok2eGlhU37hz4FRj35%2FF8gg98%2F2wCPQK7zxUdbKv0gwiaPHwgY6pgH8jQ3cEjMWTbZT0wLvmtfkcn2php5m3w5V35JX7Tl1khGG27zuJlmc2UUVfq0Eiv5eA1YrhDA%2FZBD%2BCSl1i7C2rueB%2FzyjmfrG2YP9o1it2K4HAkWp1qkuhwua9s4e%2FVWZFZZG7T0aIamVGeiNjI80ZYN%2FOuXxDttpqmfRYRtGOE%2FtFr8PjX3EAvVJ4tDS3EDB1xuKGclWdLh8X2FIjsd5sqEnsviz&X-Amz-Signature=22f5287ca05fc8a99f3b2f77097a7c9d47a02b35848f207d529bc9815d3a711f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUEWPJV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMo5h%2BNKQiWb6%2FjTHy7ZLC448zMA4idDQyLVEwxFtPxgIhAL5PxHcxJFSfRAcjQjCnHZs2U4WwBfogunf5SB2aT3fnKv8DCH0QABoMNjM3NDIzMTgzODA1Igx5CShBPObUcE2ZkTgq3AM1le0hTKtvwBXEQwairFelvHcMVYOTRjyV87KxArm5RwG3gBuylHYba1NNnReS%2BlzuRzaaanWauNreH0oneWEodKno4d8MaXpnO9c3AGltmJX6yVSVIgAN%2BsTfx9Pkmp7akM33hiSnRbXRyvGSLbHKzS%2Bthhf3J%2Bc9g2QSHPspf7CFKMlxGEx1FuSxAXMCG285HnVf2M3ajM7wXiMC2sVe%2Bmv97e32QTdeFGtdUjWIK0ndLUOra%2FrEatoHehHA4aQ9FfVsgdRsgdmDhod0AV0hYXFcC7AaEbCT4k9dV3Lb9gdeEfU2ePg9br3EpyuRXnckTUof3onMVAvpNszcAKEXwuYkvhWJaGKO8ZkDXz5fd9BlWxpCkQTn92NNRHaXG7RA4G6O7lCY6CG%2FXcddX6esrgtb7xZf2M7CunWMLMnbNsKlOSLbyT3Rr3wSVmlelhyKKqIdTfZlJdroRvFxiW%2FtdP%2FjKAn5Ht19cgig9Yq3MXHdcNASfbevtKQ3GLW0T1fl1gFly0CzrBYI1IZ8q4FamU63a7NVJbYrJf4IDYvsKocgZguMaC8egJkILKMC8siJ5mNfL%2BqfVj3cmkZK4VltYv4ZBFdfYtO4%2BMnStltohV6wLYnhGPcJ5Ye1DDDliMfCBjqkAZ1sPJvO4MdBPFYWdmBiu9OQ5q76JnjjxhlQ0yfBjx7P7jINB35q4pLwXlGOUSZZjUoSHYJm7Dw4QtMteA1bCjgHSRoBLD7aI6CV7l1vj9sCUWdcUAdURIb0eCQM0ybEnrMOC4izqhMuV%2FGixoPD7Ld2qL%2BJn6yc8vqEC2eN%2Fuj86g18pkXygsFgENVKbwLALvPRRxAErP6W8dNNn9QxmqH5t8Lb&X-Amz-Signature=7c857b2636319d478c7ba148853ab047f7ae5c0ca9e77f343e569b59d9cdb525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
