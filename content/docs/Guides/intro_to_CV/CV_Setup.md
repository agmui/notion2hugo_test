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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7PKAYR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCID509gqRqvOFl%2FycY7DPrb9MbnU8z9hEI4rmwDJCWEQqAiEA3s0F5mfdwM7dkhbCO2AoxOI0PE%2B1yKyVjBGi1zKJC48q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAdHpRCNiXxNjhMSjCrcA18iLyFnrBPBBeUs3ewMdB60vkSnuOGZc7VCibgfee4%2FJWmP1EBNJoRVMURlAvisJK9eFphwK%2Bt3CqF%2BtGaCTRO6vZScAjhPbCKdhAtWzW919yqeyUN8ncChYSOW6QZO2JIfdpEE6muiySHMcyl61vWTXUWg87JyXE8%2FUu12c%2Bh1LfF7F0ouMR1%2FT2FcVwWUoo%2Bqx6CAazP6J%2Bhu1LUYvsTM7JlzKSvNAXyA0k589e%2Fq8uvkhp5Kby8q1nzFfst50EoQdK%2Fd1b29pJGzJGRhpIpaFvEO2PqFDYtB5bqHi7VScAqc1312az7rkRi8woNrDZi7GwxlcG3LpVHLqYZDch3ft0IFg0cQ2KQaf0un%2FC%2BND7biDuals18Ssh9b0k0kRnWSfydFJXQZSCe3Vaf%2FoGtzv2DWxTZDJl%2FJSwKpiIOVX8jHM9vpVgiUE1kKThUizftt%2FPchfiKqBHNOm1fzBlDHEtiOZ3pwBoPHItMl3OCtcTGy0rT3FnKU%2FpBnYNqpShtbiqMT%2F1gQupQMSmyp3pAXS3VcC0tfzhpikghIhIkOQ9J9NprubBjmzJU8IpJDjhn1gNZkTwjnpK8bjLu2DCEpWtaFjFamCwmP5S25bOvMhUMXnmewi0tcwtlmMLzLpMMGOqUBSGw7JR7lSWadSTgSmzlRH9R5vfY%2FVbLFz3LbfjpN3NG%2BbPHlKxtp4lijqsmSoyZhFM4cX5T3P2JxYW5i7pE8ValyBIu5XtrKRKxByz5pNOcONtZ7S5PydjJpAlEewNlOpwyDBqrb4Su6BFCDAS0iHWiSpOaSNxOZ9Q%2BuvQarAajJ73H4oK5KxE7P6E0pOdPtXDfGtJ91lv6X3u0JwE6PSw3ONiQD&X-Amz-Signature=6eb2ffc9d476920a4fe3a4836ae7d3d5ed48d52a5dc3693f3fce2775eba2ec93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GNIBLP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICoSaiRF%2Bvc9H%2BcVeh7fLioqekSs4YfEt1kcVyOJLb1rAiEAogQDUrPUpifYC602T4MuI6TsXZbZV9AV1ZQIeHfOVDoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBrja0lsqTIkz%2FqZBCrcA1VkKUAtQF%2FxYGmI35RUAB%2Ft9qaFfNj11X14VoNRix6MjuSsz5Wt8tqXEgTQQ9bKwhGktPd5ZkBq2GS0b6YflrqYHAV4YkBGCCk1DL44dDxu4ZkzJ6kdr29Bbs%2B6OlCKNB4VkJ1iuh1H8VP%2BJYILrd4KvBN8VfguvfKfH9QolzouEP4h8u02wOFFhC8Ugl%2BeHmkZT655gH7BVjEuflS9tZmcN6TDtRUL9QtVpXTHpe25pml5wg4GVCG4jX2YmUlUb%2BKkZ%2Fg1ET671fIp54mQCthIvFwR0b366v23167vPnwe%2BvEvcAUdSviL6dFPDCQ1rUPTvBJpj9%2BuSvjC3fHXs5Ps6UiKFkQxXKqcTddKk1KsoJIeMYwy0yQYppFfEq6fRA%2BHyC4p%2F8iEVEyV5%2FH32dfEsjP5Ozi%2BSWghzer7ICV2BMuXDHGdZtLpETspyj2YdTGJZzOCsWnvMO7b1Gix%2FGndW%2FrPS%2FR7sHPby5dWzVOSekrr3%2BEWpJrDowbW9j3pHY7KWvbS2MSjTs8QOielS%2FuXoL0sVpx6PzK7%2FlPPenMjUfaPU6fIyWSyXSUENU2GECrcIs5eNs1U0kBRBrHp%2B0ervu8sTn5xuprTHhIcmWy0VqNovGkm3KpOGuJ8MLnCpMMGOqUBRTPh5CG0MtBlqOY4l2gzADj00YQ%2BdMZTt%2FV93nkwa6aZYQWGuLgyVye4GSAE%2B7TeHRmXiOFpwoXks5fNMROv0Uz%2FJ4GIPuPv7QxXrkcIfUEODILoQN3Pcpqh8%2FmqqH7h%2BeC3M8lzRtqA7Z3AVPCwZRERGU4NFUNCjV%2FiJPDN31RDO4H4DtCJcVEWYICbzMnF%2BH8fwYz2YQJQ8ZJxlsAEqCEM6amE&X-Amz-Signature=31024a526c7ca3628f9f2ce9edf7d62b0a017aecf72d5440106fced4b80f1047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
