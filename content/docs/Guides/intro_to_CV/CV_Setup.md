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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4UGMQH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDZxrAajcEcm1ehnLZZpb6h7nYOpG5cSeVVeICFSnUqTAiEA4NzStWl2n%2FFof6Bc%2FfEoCVBe3v2KVqvDnSCwHebt9PIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLoZi25Ay0GsZKth2CrcA23tTvT0QQWqzfvn%2BTG%2BnBGU6bz8snEAciwDHLxGzwgFEA2dClVVHXICSb907tHrgEJegKEKbTKZim3YflHZ%2Bhgkkfdk2Sez4TPXqHFMF2JIl1qu2I6SfgXfyz0At5q%2Fie%2FVqD4sHLQhU11VW3J4HZfIVMc21b4KW278wplMlaY9LXpNJWUtco51ubSWMARnOpxiVxcE%2BwOwIYUiwSQunFytR4u2%2B32hDPeSdHZBYguGqv34yR1fD3lSD%2BqwRQekjUvfz6td3OtnFCs58FYT%2BE%2Bq7F26OCit6komHRS%2F5G%2BbO9fhHe3PqY3WI%2B1X8pX8GBeJwekyfR28a0q%2Bj5TQj7VABHY76sBQCar3tgHsKcSxbli2vw0SbDzKpPXrREqWM7DVLxLs9X%2Bz9PQdstILa3JzzfGp7%2FonIGfLlhdVKeD6sGUV0LaLCnfpUnok6CZKsX1FLL0MtcB8fFj%2BxfNQmNDSebN%2Bg0DKbryjcihQadcmYOey4l%2FInMvz0GFdT2vWRsBZKRIE4ts7hv1aVPzWjs82TVvS7GTjkUG5b28a3%2BI08anris%2BAQgccnidpIpyqohtx%2Bkvs2518Nh4K4VBi2CKOajoJxBiu%2Bt9SIA6NQuhr4KjhF%2Ft4SyUO7VvpML6uo8MGOqUBIARrMUuHfDQ6JrSYG8SV8HexY7Mvqatmnp5U80N5AbKdvS2S285IVNVHhO128nVQLEg1cmQHdg5j4A2Od4P14nh9DVFx4una%2BIlGbNpJkkRU7SYk0EtaNi6aXEN3zEVn0HVp6Y19%2FPv96uVbqgZDtI23EOmU1AiqXdKAO9AN7Bt4TK%2BXkX4IeInTp9p0QchFEMuhslykWogKE0GyHPiEctDxXRt7&X-Amz-Signature=f874063c91d772f0d9eea0c4916edf2417da5283380d8c3b759c1d7505cda003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJXU22Y5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIEZdxRg5XOMRy%2Fso5jXSPZockO%2BgEJtQLK5G5IMQtqCEAiBRR%2Fa1oWGcDwH1%2BZR0pRVV2MKNNYlKFru7nepFJuICxyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM6mbKr2cXP6KXir6MKtwDiVGryAJT1CoyC%2BP3RFVOg3g5%2FpOsi0W%2F64jQrTVymjbmU8iCDTfb5qXlTbFyGGg81mo2Owauw1V8BJRkczmESNzIcEqwINa2DlVRvuDxB28sNLPR%2Fy8gnEwLmW33TIDMmlrO6gPw9qiDQlpM4dU6uL4C0K%2BAAaNx091rFsSmcpeNV98IAxHMyOMT1HduFeQtj7pYv5kO1aOOfry3dtAYfxRKgDsf03Hjejy%2BAiJw6IskuuMzwU8dautTZZiF9CZYwhuRPbm2Zpcfu%2FcmqayC9oWSsFs8jn5CEgfrGqdmlMYqH6WU1YVAswFoycjTKOdOgvgfPbqe%2BaHC6PoNOBCI7V91LMRrulWFsskk8eSeaUY2sUWwmQc3cdVuVOssK05FZuFyt7huXETqCECBzXTLVrh7RxhBs8gWfB2rCTFtNmSFEkJnPAHodreaXaoOxB4JnKI5lueA%2Bc216ExelNmmJiSx5Y2KxvrRTySysaicNNxki24oUOOPYi%2FotwQunsdeRkZ1%2BmF8ElpAeIpbvyDTSRW9hk%2B1a%2FK5pVCL%2BTpfYvFZXACKKNrEJd6C91ZIvUdTHB6%2BI2%2Bx1WnS0QDOHJaJbxd9PIUo%2FrQxYNsnKFj3NRWgxV%2BM4IO9CKnCzjMwpqCjwwY6pgHk5zL%2B4jorDkBokT5lDxSBh2eHCm6eXwLAtiAWpq4%2BiQLnVo4Q5%2BjOWNqL%2BPifWqjZgjRnyxCscYMWgRwNMXj3UZquwqni2w9QRTdMHDSalnVabQXEUJYL%2Bj4%2Fu4mFR6SAj3XPWG%2BwSGmKqiLy%2BXrQkrAvBUE4mF8RLFn7W86v%2BeTGiM8LfqOKyfSlSe%2B31FkTMSMkmVJjg7zxgtWQ82DR3l62zgHa&X-Amz-Signature=f897bc9e5a6ff8bd6e69d4396aa575b325e9b683802091510886dfa12e3ec716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
