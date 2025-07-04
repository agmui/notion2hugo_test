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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQQGW22%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBoarQvhcRnHDk%2FFjV74WBFcHsnCD1Iel92CLSsSOcpcAiACwH5ptRTWgLdC9jLggHXdYD5RZGbejfQNxrDVam1FHSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMpur9LIsK0zpMiYQvKtwDge9H%2FsMRq2Uy8N5rVMuKOGrge4fgk%2BCsZYDhx0JpVZSa%2BhAPiVu81kj7VqUQo2O0g3zgViAysXOb9yrGuaktyFLNdMq9NHqoev143t%2FZPFSHx38C%2FLhGdtDPj%2BIp6GMbeEvRZTYSatqNNirx05etP94IdoAf4qcVDOYYKQmr9JwAa9nM3ig9AWXIbt4zRpRCGVG0jU0Mki1icwJ1zsxFust6Reg4qtxfqvU5rE%2FUQbebfQKb0QdqkNeB7bwquBIyaTSrIOZ7%2FaVypZJXYg0TQkKSK4568JjgwGLsETjKG%2BwnsfyMACtyKWzl34Ca50JTSr8iNcW99nxgScTRwovr2ESDybh3DYS5Keqp7pABbaASC3DUI77ZUxqnLq0XhEdVE2SowSQIjxBabuP5BCaurfP7IrFcelhLgAGVuBB%2FuTAZFB1K81zJNiKWlG%2Fw5lgnSvxKFNoYtGToR4%2B2kY%2BkYGW1BS1%2FjTPxL8MsjxdJ4%2FKJg6%2FYmN5G2aCV7vt%2BqaiobBqtR68ivahzQvE75Odw%2BEFwQd%2FAaumaPaZpPRfI%2F4qpRFdIgqo1fgboTTaeDKqghZLsb8jRD2Zy0Gzy5NaMfRgDvJsiPdz0kGN2OENKPGM9aLBDoUNTcLRPq5sw4pufwwY6pgHO2Y3oYnA7OHun8rtZ7NaTp%2FRjAhKIyZYST72y0rmz1C%2Fyrb3vqmnm%2BLqB5NJxcpELpsxxxJLv0GEulHu5nTh7LyO8KKwVtF%2Fh%2F2stPuyquy5MN%2BTpoz1EaJaGPoYra%2FIKLNW8a6nd56wm536IGSb49x921LLBdPrh1QRd4GcCumnU66%2FH6HY2rSTlh4eB1W1YY%2BDAboc8zkXp83p1Ly6HRhvXzXFq&X-Amz-Signature=83fe7a9ef74859ab882679bf0cf5ca94d264ca9d53c0c05d986c2d631bfaaf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKBGVNL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICoNOFBpMFMYCqMXqwG6%2B3mIQq%2FMZfLcTtTFxYBHqYg1AiEAnXsuErTnOwIqcCAy6PM7Rx1MVdzfR%2B3UQnQf%2BNGxXy8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOsDlWGBdgjlCQAJFyrcA3sfGkIiirR6k%2FIlc%2FWn%2BdlAB6C1y4Yh25Tf9PnckoSNRnj2CH6%2B0Jr%2B0mWmq3F7SEzIGiwjPQNGIpEcrA5iHfPj5AbTKyEkN49GBdT7Giua7PX49NNFvL8BQ9HuVt8nir7l2cU6mt1KnhgJGaNvytgf6KeG7Z%2BBWWBLY9lphjOoEnBKKu%2FA17NYrZAn2pzidUm4pFQ7fBxCQFqjzstaSdXSUcYakD0Jcw%2FQlbrlZS4egu%2Bve%2FOXj5U03l6Vzy4C0DX1JwF2nHNwmuogCRMhhvx3jUlGzyqmummuas72lAoYbvwW45Nd3dl17fV1Eo7xjeWyXF0Dc0%2BrAJ56ObY2WkkFGbuPfbDG8kx79XiJv8Ur0%2BQd70Z%2F4gJsjJsSq0jPHGY2AFInPmKkORoPm20vUnqvtRdh6DEDmswRRzQqaGmAOr9AbBmC2a%2BBDjZfGZzevqC057OWWLXXcyWznpvzjATCKYrd74SJ5kde2xRU6YO49uidC5lfV2orMe4uk0bZqAtmSJNC3DxwKduILFyDm%2BT1qsfWwl0mKuqa7ZSVAvH%2FTcrLjXIsXq10Zikw%2BMP4AdqDEu880vbBQH1Nyq82diI8%2B6b7F0vg4kkK4HROQzS2NepzOka8YpnOvvJMML6bn8MGOqUBLn5hTuEY2C4KR3JaD%2FjcBL7YPXBEbnRXRFhxeMEPD61vPtxLBwjCSukg9O9LjYljPnHJvgMuvTvCca8Uc%2BwyE%2F%2FG4JfJuFrzqoQI%2FxsfgpH5XLM4G%2BtRnMrphgcEXc5uuDAXlOe8roKQamVe1einzhdJkBiDZTtURXx0spDJGsbl0UPSAjVbSae4F5mZX6ODR6KwXoKDshhYM8YLLa1zzsylJOXx&X-Amz-Signature=8f06e77180d6277549a300ddeae1368bfe13866026746fc0cd4205adf6d19087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
