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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES43G2J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICD9drUN%2BnnM8R5Gc2ySo9MvQtpQYMEaSORywQSitjsAAiBrnWNRZWt6jtL2XQPOJ8WUgTgIjxoVChYajAlhELb9PSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMRX05sq8W9XrD3QXjKtwDN7w2i%2BI46yuPNPRkLyHho82gZ7JrqitaCpwNh8fbViSKzf7ef7WcgLr6pGlWN0xgb5z7tCVoQ48M8B5IlOgGW684C%2BLUVcevOOnh%2FbbHOrZr9Bo6xi1VypC55Gk99wXoY6iyoYS5APZryCBFwlXszQ%2FuNep1BebAuLOIZXeYbPvl5vHCkS88lerqDz%2BHcR62MWp8vk2aChwjH7U0c70j%2BdB2UmWs%2FIfyEQugHdjhaDir%2BwRcP%2Fa5QyR%2B9zUvCTSrq7yd13UqKZsRRgbGaYb3VMGDTxsSTaB09v%2FXb1nXM98NOo9EXhJijdyszTyvX1%2BryPu4TZx1edFhZ4lm4qIdVUkS0NfxQdkXyzN%2FVEZffhX5690Y92aDWyawcYvw%2FDCYtO%2BLwj4wsW6A0ga925uTu2GmK8TFb9GVWX47hx0%2BWQWX0rnGKO7mjI3LRYSFU9v7sAnXQ9%2FnFXErEbc%2FNcSeIzODRk5ty5d%2BwWYPIluy4%2F2Ff77Poy67EgFX83Yyf1DSBV%2Fm1Hly%2FyrOfYPGj0d549UU%2B8TiGtyMrBH6mW%2Bfv%2B1tswfXt6M8KEagAcdgfun6oGBgw0lKJ3cKupUsQXL2LUgZ%2BeZR0kRYKXE%2Fah8CH%2FLZtSJ5l79yTc3cvd0w9O6lwwY6pgEmw1EW%2FpebuyT4mXGLwGfW7Q4wnNYlK3WVr2cl0mqkibD2I6YG%2Ff6ii13nmAVKdPG0GvNSxl8er6WGDDN2MdcphEB8lUxzKZOwMEBzEcxGfEIhEI0jtW0iJNEJb27BhufmWLrINrkbYYrm1G46BHVk4syNsZ70xCaRYjQWmV1HIP2FdZO0HONOPCOq3KnhBJr7ycQ%2FQ20c7%2Fx18o39QFAbd%2BXRD7iO&X-Amz-Signature=c96b4735a2194e0019f2190dcdb8cc7a8fb42a7d35f9f50c436286d7f3d78f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TW7WLH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGYgS4K7B%2FsdqXNNkQ1zvVShVFW4LgHoFu%2BV7PbrYdkZAiEAiU%2FGSg1ldbxivl1LTpw7mBYWYgHgDUULGPuZWsl%2FUUoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCVCZBR%2FRcmSQuQFoCrcA2xHL0bbD%2Bt9ZuQZRYAgJaK6gWV72vXfQHDCeMOO4Iv2q%2Fxh0llRqJ1GaGpHfVEKZXliba2msDx7cnZBBbTesSLuNcwfI5itd9HyJFtR5hoater3bBrZbtxx1QA9imlcku5uG1G2yuHZW7ZixXOO1rR9NafVPrcfR1d5LGKI%2B3kOtjq%2F4YDRM1aF2WUvDwA4RAAD3TMWL6%2F4EqIHVljkLUgkPIIuxWnCAHCSGLdxyZ71nPvqDByiB3KVsjDLSOExBg8pDAlwfentmwLDpVY7bT4e45RlsDTE8XyIxKui%2FxWFgblOySkNQQYdN%2F80ri6OZr4lD4tZXKw43Ioo79vQtN80Z5w1FVVOApol4iKnxa%2B0%2F4x2nf3aJGAWIWzuzmM9arBwv7u%2FDEua%2Btk2o2frNxnxcRYMegD%2FB%2BzoKovmTP9dFO0WJ86WkGOUpCMoCNygxRELwoM%2FHOlYAsN4rPipNfb%2FQffemmatm0Y%2BqQrG0b5oygvp0JtSVrc5RU7sL3enIpAHCrKx9R6bFFIOFKzt%2FRvgoN7veRonqo6CkORIRh8m0nQSPtyWVnmw9b5bQ%2F3jl3ZuDbr4wq25vMLrpknSac5OUZA85Z7%2B4UNfwDsCMZn6luDu98yIgOXumjZZMKHqpcMGOqUB%2FycyVc%2FzwSXOMV6%2FPJ%2B4%2B9WSubE9359SxRD4Fq1JXbsLgYJ%2FOiCmGcvw8pmxrQA8CIMXv4lQXCvRXXjWx%2FgX%2FGf0X8ss562YT8Gl3TPso3XRyrOo6TCC8hjL4zRViSW2f9pcMJiZg6s2m97UKnP8HYWYGMB5rUjva%2Fq6ZpiV86UBmeIJHgsj7WaY%2BSGuB4mJ4C0xh%2B%2FMRtsZtCZnV1OSt7myMCGs&X-Amz-Signature=dde0e7b50b936d150928ead2344ba0bd483d27a761b8a2a29a903a9508513d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
