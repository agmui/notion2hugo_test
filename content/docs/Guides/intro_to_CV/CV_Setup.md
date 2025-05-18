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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJYUJJ2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjQgqeBrCyjHPitagB1V1sLNICOabA0uS9ty555zqKSAiEA579ojpGIQsNsTJyEelfd92DG9N9%2FmECNxZV%2FyW%2Fq9Gsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEpq557W07gYe1nDmSrcA5NsFYheWeQlgMzDkvngQcztO21iz48pbMPAhHqZRZU%2FQ8GucKuJftYTIcPKNAJbHGw0Daqnt4tRzGIBk5b8v0CWM77fxm05Avcu%2BzxMNIelnZ8zNqMR98mxN8EeITSKf6NG5PCnquZpWa1Ote9cz9NLnXWVv64GmasMGcec4M7c9sImuBiXdpypxP0jTT1Pq1sTMXPLz9TD20ew%2BdF0NpY3nfIupN%2B0yGluhw27cbrh7uVCZMfGtfjGrMhqLdhd1sVjf2U3RLUKxNzEuTBRLWnKrT41YYOGp5YMkHBSWhdWi%2B2tKh%2BkCdIHNSX24CFkTpX4y55%2BX21sTZRjcmbsnBa%2FAAMLmtxvb9cRjUe4vGW838jdCdiNjEgxIF9tcYvUVEZ%2BJkf9oeTCaYRN6arzpVEpaCdq8fR%2FTbvfe4vO29rHPkMPUNOS34iHnYHocP75E7k3woz8cXuHnELTZV3wOounpn87Fw7ZilEvUdk04RD%2B%2FPxxxGQ%2FsRilS4ET7Ez5rMF%2Bc0uCkDBpjLgx6YPJtZ0Vr7zgPlFHIKmA40KyZeocdakD09m%2FCTSAYuURuBiRHNc6W1vYtTDbctihIFLYIF3V8U4qZVb1JS%2BrpeVc8vbH9iEFuWi%2B6vRI0BV3MPPKpsEGOqUBHrUsD1gKHMjs91nXe9rilOufM291zsIV6uzog0Cx5fpiwmlGy6m%2BQWuJnmkxZEPZl5ddXqTNInLhpWASPRPWgUq83h3TEfkeqHuKBR2xfLbu9a%2F1s8lAGbRKpi5UQIQsNaZPwJG%2B63dh5l1A8K7S5dLqTSLtlKxzCaC0DpSgmab6IvSVVx933BOvFdfX%2FVcBz6976YckXtj%2FBz6cjNqYfbEURoet&X-Amz-Signature=32194cd7bd68dc45d52f77097a35f7536e7b7e0aa451665960eeddb745fffc3a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4YSVZZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoTELj%2BwdwUFrXsht0bS9bUkERlLAk1TmbLg1MP59ktAiEAsj8FZC7z5unaTEvRPflPS8lZP6R%2BFXpikmzDuuULHO8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKSqx9ZoJHCZJtC8mSrcA92fKfiZ%2BD48iH6UjVMUalJbTn00WUS9U9oIDcsTQLn7uFYQL5SzC4EGSOiJjXRo%2F06HwXEglNnlYoIyIvIyqlPNsvhVtR1E80arer6gnQy4gjqsa0iZQGY%2FEUkVt5%2FWqhAkEkhNNvEAAvMx1OQodSSpIa4MXxwhFj%2FmQCcrSFTiC%2FJ4PnCsKPGU0sXR%2Bc0IK%2Fwumy13%2F2EvTs%2BOf5QYWXawUogAP31S23zJSXC3F%2FtYURHMHLzICt9kphi7DqDyWAyv6hkHTautyUJSt%2B4Vag5UrOlg4vqVTbtXN2M5qerVVN0wf9hjArS1s6YtaBdGclB8O5Ee624IquEwiqijlt8FCK3jbWJDIDcdYRCFtZouqEt%2BetUh6B6qCxdeXx04Xk2v4QgNrY2Sq5vjbfMs3iVuLVeXQaYd433mPttwUq4vilp4VI9HecnIyFcsZlsKFvHruwAil%2BGMrzg65Migl6pJkxrYyixxbTS54bRy%2BCca1bB6GwEo9%2BmrUZapvGYmGuAVW3rBppS%2BpUL7hpszRrsn%2Bu28c6cgE8DcFLoUjPA5VlIbqZp%2FU04jUlxf9HRa1HYpmGlGSO30bczyKFALqsDERXr60kFHDPi952ngJArAOOLeze3%2FnLhALGl7MLKUp8EGOqUBSTnFgLL0NlsPnb7owt89w43IZd3vs%2FkmDe8vp8kK8yA%2FPP9I36HXzWXGY0p2ou3uo8YEGmC0DJb8j1bAyCcqtFfPG5kjPuS%2Fj%2F%2F9sCBArJCUzmGlvLzyXsThcspjyaTAUlbGf7trAk3Klnyhw6HK3C0w07kfxD4q%2BRaSa1uwr0ceFbmEXHhGIFNlT6ZGQBDpz1BtlckIbQiiyhtGhohoIxXl74aX&X-Amz-Signature=119085dea83d71691543d1b857f83b89bf43861631cce415df297b6c2544e51e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
