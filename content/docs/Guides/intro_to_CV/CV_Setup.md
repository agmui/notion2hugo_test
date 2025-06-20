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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABFPGDW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi98ZOByRTrHhLEs09f6F%2BjfLy7ev9zkTuCWbfXTMZBQIgKf%2FxJom3F50jUCmURf1DBXRm9ABktEiZMhSXr1LY1zQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoyiuC1itD8gvl8jircA7vxF9uvySvgbfykSZ5whCNKQcw8ys5Gq7A0IVf%2F7krMdVoZXbMDvTxbvMjelPWoKla%2BDXXTAXGtVqEGSgvAlDUVLGhZObRpsQLKtvfV19BdaUgpMwB1o5r8uVvpXTZ2fp2WwLV031VgX18gQaUxVsFwqXyMLltjHZmXoM7HSDY5NXwBbfOkixglr%2BJP16Qv32Of2tv%2FiJ8IZvxLzLEG872N2tgz0nvNr9tu6tExc%2FyeOXw0%2Fueg7inerJPGbcMlkRPS0VX8kUtnLYwqdGpTxWzClLBIVXrPJ23oHiSsaDuA75x3WOH5R7qa%2Fux9CvwOcM%2BJUBJCabhkAli%2FLdK2IG%2BTlJbblcvz4BegG9YPMwl%2BHoODifwqzXVwnZVHOTqssVfTa28LgC1nQXP%2Fjfb0xeNbfFjlJ7TSzqaQu2vjvsh0ctx0LYFS8ZbEoi1LVGSCERJFWEfMtvCOF17zRGylIh77mIj9LR9OG%2Bs0fFuV%2Bu0Ck%2FVzHQe5X3Lk3wb68gyvVvM0ZzpU2KqdYV1wnvMgK7V%2BWtsPtirLx6C20N69QCZwImHEYnUF4z2OIpMR5EdkM74RIVf52Lfx8qWUD%2F7V%2FHKXJJ3u9%2BezMgnAWZ9qTeZrFthKdFp0dEoXRyPIMNrx1MIGOqUBgUlbuPly1aWwJ8Xu0%2BnTeAIvaAjPSr0fXJClE4krZnf7BMRYu5j8kInUV%2FBNO2lqjdE6RmKU%2B3UBRi7Zta55UIGhYlRPmThr5nSN7YXYj01fo1SnkpuO4KfWZOQfBrum2PWFznaOeHrkKyr5uc9PslsyzPoWlbRFrELS5vOZOvwPRrIWc73zk0InZAAm0d4olMfPlVkEUCthTyGcwWXqmJrS%2BD3R&X-Amz-Signature=170ec2fe19a27aa5461b61addeddee23f07e81e6611d8086563cb563f9a9aae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PZAHGX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxRQX7NjnGwFWe%2BFw%2B6BD9LJVYaPRmz4EBoxQAD3KtYAiEA%2BgiX6OY1CUvbI24%2FEDi7%2Fa9sEUCBqXCrlwUE0zVKN9wqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvWM2LjIrCAinizSrcA1YR%2Bu8b%2BLjE82dBDGtlCVFcGJ13dlS964bYjVirDHf4Wk9BvGhcQgj6rwuqw35ZyZe8T0Dy9PlTsBPetqqB5gwpd%2Be%2BD2k3%2Fjx5MLjeJtnW6b%2BycukODV8uxhzB%2FdzYy79ttLadbPhBuTCQTNbGQZELeRkdKHhBW0UKiC75%2FQnEzapN9ud4Ouxs6YxiYiF7z%2BF7taV2Tm75Q5B0W5n7sHtMlnCgCRX4cQ8OCy%2Bj9wqqLeW%2BsR3i%2BYeEJnVKZ4dXC4s7CM9hRHJtPdjaEqQUmZI9CeumJ%2F5NUmm4fw0WAlzsIObqGgSJdQsIK0b95zxbuY7Wjx2bV4ZjnVY2SRdsTI7T2luuKcbNk8x0jMZjODTvIKHcSEPPBy00lznHNIO1nmkRMKX6EXOrWIn7grTKIlET%2FGh2YhgMR2hV4XoUE506MPiBNJOn%2FnuM0IX78sFw%2Bcz0nLfgIjwcs7mrLo5NUmZZX6en2K%2Bbyuid5ZXC5ZUzT8%2FNwZAGHjG0glPPP5pEXg2qMUjhP3eGixlmKbH8JFhpi9AGHcw1Il1oXqmkBgg8uHo65heUyuUqWHXHeDxz2QPYT%2FIWliURYxBXLji%2BmKNqst2IwWjTg4pCAzYSAGmYU4xBWmK%2BurglQsocMLjy1MIGOqUBmQkArz1eHZMmiaSddwn%2B1PQgR%2B%2Fy%2FRP%2BCCpYrEhQDYkhig%2BXVD8KiHzmFAAD8CDf%2BFbOuMT%2FXh5yJj6zrs7qZU1KEBa8Z73Cl7wDaYlJVpJqk%2Fv%2BDdKpf0DBK1h504i3Qbt5kBF%2BU2WGMHcclQLYzBi5Vnc5nxlLwhiOWGmltgeejYRssTyuiNbxwpNg78bmOutSaYD3nfwe%2F%2B8JiUIRJB%2BmBmuG&X-Amz-Signature=3ff1967d6822630dcfe1ee5fd86c31e12e564cfad62fa13b4c35134a8f329537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
