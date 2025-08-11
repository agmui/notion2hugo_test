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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRDMW6B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTI7VTLFUVLPzT5NCzFC4Jm0GmW1JJMKK6u%2Bypm9s5DAIhAMtC0LmmRkEqFOdLj8t44hER1xJsdfccjymZQrlbiJqrKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztpS%2FtL8XzPJUv4ysq3ANhRwkciqtaRhzPH6gf8pENFEY5gFD1k4TkyrBK5gGCzZeEmSh0xscLVcUAb%2FYXr%2FzKTKCVoJfOAuUJCWTtgrMcTcqtxBPYkJBIDK6SU4KroltYociCMpdlWu3csd3sK2JY5AMkquQd7VrFUtQdSrvZHBEd0qq3yoEXWFc8HSY5EZIt4xOeOTVKZvsXPm2%2B5tPtToHlQRZEvj6xxGYlSJ6aydscBoDYs1ezeU1DetOxfLb6oiCdlPEuf8fbnR%2BnPt7tjNmA32CJLU2%2BgydxV3nNN0l2Zr%2FAP8xPkkG42lIiW6Ag9cClR1TvXzZMYoLTMxFluTEJjOsaQRYGjyql72JNzgSTSESbNNOdep52xK314NXuVHs60kV11f%2BAcnBB8sSFrZmbhgDBj9xs8lM%2FUdQH%2BzoyTFRqcFxGfuvdCHpUqfW1BOiPTEIqa9Aa%2BKho7oohBkBZUFXyCRzSdzi%2B%2FnUsuhwhwnCmUcu%2B3y8JgvyXSxJh4ZkRm3b5Tld9blkyAjx1H6FE6c1OOcOXw8xtJKCAWJU6pij08QLSZk14UjkzLjt5JtwoYxqmbwhS9fAZNH4rWhzoWCOVKMklcyT1Pg4fBQVIt9PzkKiu4IODpNElzuTo9miJzM8%2FDdt9ATCx%2BebEBjqkAdieGJt50AaJ7tnOe5x50r75EDxiV09POBMPgyujkYdUe8meR%2FfLvSO4usWSpig6sAKUwL50Ey%2BMNFCAP%2BBr8nWSltnqayF2abD2%2FASIRfYb4yKgH7mdEqHlVyQTbpbOrWvg7ujQQkWEoEHkA1hwEXSUdLF4pVEPL%2FWKpjjo3UT5WOCAOhOOAT0r8tz2LV5f33jd41qeZ5SAZBAe3lHDcJTsACZv&X-Amz-Signature=879095c12e2f9bdd624799dfa4db16e5966f9f015037cb5ccd86fafa40394fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLKPTUV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ2ysE3DbBKcXV2y6fv5DvRHHz%2BdQe1pAvGMSOECKvSQIgGKNAvT3lnpAEzOQh9PobULyU0l%2FknzeKOMhItgDDTBMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0LjMi8kfYD6KftEircAxYs2tjVr5F%2FDdEqgArN0XTr3dBE6ozr14tjK7kNrXuYK5JaWDOzon9v9IjwXJNa%2BpYB685bGzLPWur%2F8UPQUQI7TUnK9RtFAdr5y8qu%2BXszvj%2BbZ9JcpuKKvvIib3vxEe5mfWkch3tiyHt%2FQUqSYH0UF6QXK01rNqw6NmbcixSCcMqKkctyTGtAE15EQHGNAjShn%2FHY8NT63kAqdCgFQRTg2fPSD7dFL4o9OO9jztyKDPotNgT5mpZlpddIcOFV56Iy9FI54rZS%2FhPW1qW2WFfV0OF2mFZ74HYS76udRDfwXJV6PuGBsApH6ErNClMwn5gBit0rVyfCz2TQ36dn3sYx1TuEEw25z8ejJFSBZRjuVyUdkeJxsjw4WJ9uGelbb7tfkPrJEdXekjJprDpmNkIRWDPx0R%2B7%2BBCZeWtHSw9TymZMXF8ClhVcRNp1Ou8KXXsHXglO80BIne6ysuuip6xQ4Y%2BDwfwdMfnse4eEhM7C73BXTVAJfEszCc75wU%2Fa3uMVu5453f3YszZ1VkCpwJQPSH0faBdHgBrwDdDPRe7tLs4LYGuC3fv40n8TrfjEa15NxGxey%2ByrzHdqSk1Rszk64gT%2FWD6ycS%2Be0hAmKf1vj%2FO3mj5IOKIeIPN2MIj55sQGOqUBt7djzacBsFcSHZeCizZkiiHp8TYEO6BHhy047s%2BPW4Sa8ft5%2FD0hBaLUpTSX%2BqrPqI7GEERGuWK13b4s2G9DmGTpTAJuhqugPY7fXja4O3ciwA8Vk4%2FCKO0g2cmmVQ1uUnOckyAVsUFB7kbEBwL33hg%2BR0KfB9RrKnRUNL0YVpn%2FacSSkRnmBKvYs6dzrT0BYUth%2BVsi%2BjLb8NrD%2Fj0Pk7shV0gN&X-Amz-Signature=8277d599ef4c651eb488edfb61fcaa0867f13a62e5fc110c8eab424207f7f2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
