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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWZPXWO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAYKCjaO1kVyo%2FGE5H079drNNLc2nYO%2BCE6J9mOMHY%2FdAiB0n%2BpyNMLKCRm1E9aArtlHjrT5EDxy3NHWgg9mKvMt0ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM1W8LEJc6CWILPLjzKtwD3hisBCKXf3rlfPjrPnmoyzivGP2ojJzo2D2Lcgumm9LguPv9Wea55tLfSWrwBf%2FviaM5PkUphIc6AR0A2K4kpIQvo4xkwSjQKZliSjGFPluQL%2BgIzW8RMxXVxIDyWt%2FINIoCPmr3zpGKH%2BV11SUwKYXZguAhSZp5pNCZxIHB2ams%2Bqh2INJ5pRp2omzkKgsmHDl7YCP3Ti3z7T9Gy%2FmPl81EqVvxbMG1MHfw9thhxzZNMgjR414zgcEhaLJSqINTRGGvsoze9nkLcycbhi2XdKMjeMf4VTV1HftuRIPQco1LXGoLh%2FPsYRcK6JPG9CPVzuc2uybhXOpDUtTYRrgjZSPY%2BEScmTMRChYu3fAbWtjc2J%2Fisuk8WIJFy7VL3upIfs8HJXN4yi09hZIBn%2FBgAnl%2BzsbgDC%2F187g7w6xP5JoOZvsSDXynpy5cHzFJuWWCKgEd9JY3kW0aFpcKkdKZ1iUCXVIWa3LwCFJZX29I1YPXb%2FS7THA1jRoWrrn0RVaLvnl%2FpQ1QIy4G8fqoEk%2BXYKCMVs88H4aBxlghgg8aK5DX0Qi9w0klbarcy34PlCJuWkEztSL%2FGvLQGo7peBOCsD1gSfEtSuf8cNZNL0vGlk%2FXHkHjLpm8KU%2BtlLMwhsfCvQY6pgH2tNyrJQLKQNWptARMckqF0WMe%2FsGfXEspT9JGMe4dSNeKXY7nOAVRuFg607SH6lk9Xhk9iV3MSRliom5utbefjLkr2TNYEYsIluu5NCGF6iPlMCTGXK%2BxX2h%2FYizK%2BlDpK8xEWWd2eKKDDgCkR4HPX54MCH4VynoGsVdUAiswRmBC7APBpgscfu%2BAm50C62Vd3cEtPH4N4wt%2B9F48Jrct%2BzLQ%2Fmrm&X-Amz-Signature=6fd377e47d1d4decf82553d61e8edd2c3b4d1131984f2b467e83b94b8576d421&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276FUAOD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDfFUqdeZIq8vHZ3rr4FSo3GpNywPK1RRKMQl10Ic00yAiALIVzWF%2F%2F9ck81QcOmCP4QPpDJ9JqqiPGUx2j28s5u6yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B2oxOyTolQH4iBP9KtwDorBMGkOmbC0ixDPi5HJf%2Fdi%2Fr62Nq1Tj3s3vt2UGk%2BHXTequXvrU4xMLlohx7AzilarTd9WIXJaJ%2BBoYC%2FNy8iyFsBXLblKtO8Zbil8YknibcDcwiZfN78c%2BqB1vWHU%2FxUP59Mv5VJmMlPsPYLwV34vVwiA5orjSBeVW6zj94z4qBh3h3gZjtkFxNZlWh39cMxtd9XpuDzUqJAC7r41MPW5OmG%2FZlllHBI%2FTAhLj7J6jMgUoJZy0fofctKHIYqfLaYHwqlxy8l8iJoYX0eYG3S7WtkJo5T%2B%2BBOmQ7zOYQ8q3Vp5H0PyMLqgse76UkWpGmyCPzvUZltAnrHEu2SDD67jcEMv%2FMAXU8mEyRWc6Hd0O6fpWyPBxxn7QCcttdR%2FXTrF8cny1yrj3D429uxuPs8uq%2BqwI8XV1D5dJxC12sXvCEJcdV4%2FuHh7XrCgD3Plu3hld97kjHFwwgS%2FLaQ8UM%2B91zfShHv89VZZL%2FHdV70Q%2F5SW3K4%2F4sh1hM%2FbDxmgfy8BK2KDNpz1fL7UXH3Hkd%2BaaUtVy2PDKGB0Y32TygoX%2BpNE69RrdSzMwSiSYm4aA7wlxw%2FwqB7Vx3hnOb8%2B7zDEstSZShY7f9u235kbBloAvi2BkB0NCc%2FOWgjow58XCvQY6pgG9Y%2BY8z5z4a%2BaQDCKZT3h2PkQIkbHdrjaTZ9DVJQMECFsxTmkykxOUO47fw8hbkFoLp29GkpxIm5YCV5qVagVLJWM%2FT3Tz%2BbvsGf35UjGmUKpoNchmH7NNZlOOIRvWpYMpONpUJDTiMtNeGJMZRn0Cn4ZObYFP3P5R9bvUiRN5NTaJAAcb6R0byN7ubHjSux%2FAhBqfFiTUWaU5o%2BuvGk410spv7qE3&X-Amz-Signature=7b652e6c3077bf5c74a004df323c8e0609c851802d7d383cbf812a133db84a44&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
