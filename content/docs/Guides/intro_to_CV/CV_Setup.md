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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFIPWGF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD%2F4oSendDjOqDik50xGeknlWpkydm5lSNTzzzLnZrqEQIgLII8DtcY57fWGw8RvP%2BaX9hb187HhXC1Qta7LsyRT5kq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDG0uTfR67f8sDUZ0pyrcA7ubsclLkS9DfEQhJVLlFGpph%2F8vpmQB9tLfqK7MoJEU%2BWtkRRCCBg93CvjIGBb74UeoFzAeRedzfvUjcBA5ZaejcwctyD%2FzJtWF9%2BB%2FbbtsX1h3ScRS2B80PiVBpWsHH4wzkGLrZ95hbRsHuonXVG0FuaUItHmsIZlrLa0iaeTaYRepLJ8jmnOLB2%2BKOfPohW%2FlnCQshXEkQ%2BGNZ6Fjexk2NsMaHJ80iYR7NH6VdHhiofD4wrZst%2BWQqMKPqTwSqO4L9FiHhCBZ5wemIXb4LqDAaIBdQXDS1L814r9e1Al9MIJq1Bw2H91yw4n5rc3eDgM3Byx0P2cs9Gn%2BV5wd%2FoU9bxAIGY0bdt8%2FaAEUiOArvCWgPPJWUjQFC5j5LSDwKjmcUig%2FnCAmqg9GMDtR0HEj6p%2BHXHZsfS%2Fap0F0IwSBdyQ7JpMx2%2FebTWKTW8gKyB99S8YkRPbHEBhJByJdCnTSLH1bsnAxRRTASRWSYDjKmB93MF87KsVOgnL8tAlyl0Xqi9mDJy2p80u%2FmB7gUYnElLJYbeV0aW0aCGKY5ycj%2BPPUmT8LRKwzX8Dy36H%2BrpnQKEEmfxxjc2yEoDcDZusGyCrD62WYLqlgI3SivnsosEfTLyBLKgJLML4nMM%2B8tMIGOqUBeyvsX2wVwvIHcjnvqtis7Ie11%2BMj6E802BZDfaElpmAmB2zaCVOTfKnQQSMdUKzqNraiN7hHCpAFZNRuHwNEfG43biFVP9Wvd%2FvFxKCXs%2FHOm34EjxqWVHzuSXwa37OUKmWOLBXJx2OMsl6u%2BTwMrnQlBiFeXvJCtpl%2BLG73tqq285VVc%2FHAd3nC4mNvqiJvJkRtFaHuhCDOJM1JiTrgqGZF%2Fbyv&X-Amz-Signature=47fee860812009c2faa1f7a07876c17a7e88adac0fe718d4dfd041a13b32c0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBI5USU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCSzr9E3F4u%2Bq9YDm2riXVvxSw%2BA3z6KzdyoZCjV5l07gIgJ7EwxPdAAfkLcxxzZhFCVPst6LsEd2Mw8G3G1gWjUUwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGXNG4gsKOXObqE5QircA4qFmZzPQeFlIqlNuVf0z0y6jUX3wNKDjvJ6DJsYgFteeyau7ju6sg5sITUwZyt1Zr0lgVoYH54UM3MJIcFDgiindOwnY396gWRGZFJA4%2FHWUC%2FQAE%2BLF9VeGgR5J7eBOfAMcmxyElusqlVbAfFRJnxZQrvHAWNTfpDtybs4MJIH%2BonwRye7GVunrylDg%2FqpkB4yRuUGbqVBUOfc0tDA6lwuLQPRcNQtHJt6b3wcyEpMZCs93jr9nNfH%2FeMTQq7d8%2BQCxOh%2Bz1FfRZV9ntivzXez82uNFxd04MEITzxe4z%2Fh%2FUhBP0LeJWzAyHMzDaQ3dqcdxfSSTNEK2A%2BE4NN95mOr7vpleK8xTrlaqyXMbkMluZuGDSjWfArEr%2FTpKK%2Brpz035R0gWLSE1I7HQduRCruGuyiFjM8Xg02PzhuEJvBGlHPpIl76sKQcQp0svu2MXFgq3Cr3Mt0iRvZ3Utk1QOlWmNSKEXAMme%2BnpsnAc8FYvLfCQA1arU4aPNgAReq6Xti4cxjQ8gWO6A%2FBzKZzoBHzCRqKAWkxxEXFbt7YEZ1bF%2FtFj%2FmekYTkIVkksrMS6KPrZoiyKVdFgP5Ot6buifEoHn8gLfB282dByPISdbkSEaRi%2Fa0hbCqfTm9OMIW8tMIGOqUBw%2BUm1Kpea3ARNvfjejJrmyxNkuIMLk%2F9%2F1osd07rWSmT8PCZ5GpC3wBF3vc9ReKhHrJuPeubzarWdt%2B8erno%2BaN%2BfgaIg1jOEvf1fXGCwmAq67q0depkCescyPey8b%2BNE28d34te%2FzmBVgU5SIyO%2BODXbh5DC3E6%2FFwxG5J1nIrBcU3u%2BkguTe468i7HJGShnDorq%2FeK40MUSbvuIz4lqbFxBPds&X-Amz-Signature=0609a8eac357fe480a12f5e82d90a095afb0002acedc0ad37b80beef92d31522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
