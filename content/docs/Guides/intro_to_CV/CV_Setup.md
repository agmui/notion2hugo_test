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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLR2I66J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEHTuwnjYUEE%2BVvaZxoZETOsZ9e%2BIFCbbqzTSpUP6bruAiB1p8jVKcLskFgtqEeIsazq%2BoQiQcGUMYvYBiey%2BtwXniqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhZsxXkjy62mDYtiKtwDJyHznmBaiSwKmFhHT6wkPzIsdu8P0ujH7qr2JH3V7IGwu5nBYUtvJUYaPuNiwosTJp2vzG5x0a6NA7l%2BQabRNNOqgtspSpx3BqQVITdAtabjp1MmA%2Bxk8cyZylBR%2Bwup4auqNcxp5qkD4uUuB8i34KF8G50DFMRdNRrrmj8Y8ordwNqXvVK6Ubf8gyB233YRhFDDflvX4eVVvyMFh6Bm7nz4BTYZtHn2kBanUlBRFajtm9XwAXJZFv83zBhJxbMdMbkFWu3UBVB53vY5dsWvXSb9TohubLotVzs1ppI9iyWam85LMidJo%2FENYOTlbyntuswE06TuKEng1MT06QTRQanfT%2BOWdomBTYK0QRCKCfSY9QM297TvPrK%2Bi3FxIGUBXQ%2BXSIVed02wReMnEYixZSWZu0gct6CAUw1qVVGavKOFrn3C5L%2BKQ%2FMd3rMgWlbtV0MuV5Nx2AWuelkIImgqUOJHpEIZPsbk6D01BcWD33oEXNNwf15X8Qp%2FujJDaUY7FzkTHHuyKn2oquVMFihlhdXATg1WnzEGvjDEZTAoihixqY0gLylLme82LE9s0OM5wUWmdxJ2mzJwKClHiYQTjkl6m6xKjz7U0MN7YuD5WQkQ3oZVOpO303UKg74wz5ebvQY6pgExIqLnKDj0el4Nvi2o0NM7oWxlveYkVQmndBaBF33j36njqwSFGrJ2IfujnF584Ckv6GaPeVNUh058u8rpBJ2vS0z916GO0w2IgL4Uu6C5bXrssvRTCf2LqZIZ1xdmd9B49Ac95oQYbXsMVSm6Ipk%2FsUTG2AeOph%2Bl6LlUUqgJFBKTsRmfhm4Q0ThkAwXYhfWH6QyPBY%2F7fgGcAs2XbllXwOhuIJiV&X-Amz-Signature=18fd19e2717886143f734091c604f5581960535d6610a990ce99fb38af671a61&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUV2I2QA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC41TudwTJmLRMrXehdcNZacWBs1111O64MJ0AMPZvcGwIgPdyargiSH91wF1bGUnsxsRrqKnjuGTpnO5vSBf31WSMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FFIKokYal2qMMkyrcA81GhdQ7jIbreHgEgUkxIIjs3SaWqyyP4721RcK8uu0wr%2FWSHQNgBGvdV4crDXLlQvcEqJnWc1qYUCyG%2BNQDR49MYjR2w6LnqCtZ3YUmpZy6Ml6rZzOEINoIU9lT%2BktLDYs%2BF7SiPc2YRemSbYIrK5Vwq%2BI%2BlQQ%2FgB5hp%2FFiH2Zj%2FcQRPjI4botOgpjzFHQRP9f31deJ7zNG4YVrfcccTskUyz08ThZ6E1spUhAOp4GLdi%2BLq4qnCnz7aleQ6EOmRTEbXM%2Fah7akcL6QygTVkkDbL8XGlQabkHp54I37YuZdX0TFicKW0wp%2B3T%2BmRrpxoOSAyri9krQVSbV5HJMSTJMku3ZyvcPnVc0Wy6y77YsthvUDEb7j%2Ft1ZvJ4LCpa7WElSlTm5mcJvQ05%2FOT1ZtRcTJ3LFipvbRyZBclPbWZGlMWHRJjWkuIo0ZIPUhpm6SnRNMgQQD2a7bdcKG4cvsT0cG5oe1GMgkJ0IpJY4NPjDXGyzsw38XCOpuRamJZw4%2Bh%2FKoiUo%2BOBH4cNfKHXYUHIFcv9BFHbJmYQH3fQER%2BmUJB7G1QHdXC1gWvKBQth3sInhPt8knibdczEc06%2FW5GdtoDRBb%2BQZdkjIQSXCxSL3k%2FVekrWPwBWi8cQMMKKXm70GOqUBepIys%2BadnE8XZLsRiooKbb3O2yUndk6pScokV6yYpEOQ1O6nbCy5eLL6%2FwD6QBsGrUqSuOosjr78L2CVE5yvq2IRRlhNwwb51cDUjf8aJt57BAlFIOxG9QvhKJVdivSZKqoZRaMACG9AxSgaGsBlv6h4AyH9y7KGqU4RlK7YV3dIZilSnlLzqGARdlIoJb1Uvbgo3L%2FmH6KFb9lr0xfhCseQNL%2FB&X-Amz-Signature=984bc3aef640d6c33fc02ebced43168974ea0537869c2cfff8204e4aa1f921a8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
