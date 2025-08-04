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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3JIIDR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEWn8uX5Pl3dywlKfHRY519f5O%2B5Cc6PMEXvsKOjwaKSAiBimeQoXgen9BKyXDAb2p9%2BnfrgKQHCsARctIxPJXPV0Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCXvqzJF%2FGrCvmn9AKtwDMS0AvO%2F4kC0b%2FTMXPOiWHzWDnaseXmuqq2SQpXzB9TYzWE2dA8B9BUTY0dCF3Z3hn%2FMg%2BCmuoBALwkJzGfJa%2FmY1h4%2Fi148P7yaqumWsUYY1bsS9B8br%2B3fejzJVJGjXv6vr6IkmScqzuxXKZIXbFAl98rrqhruSd%2FYCQRysGkkfxQ1Ewqm9pEx5viFo1A1Jq4Z%2B%2FpR9D2J6O3HpN%2B2AlGd3CkrmpwB9gHG7ab0Dv71CUXhspdPXaVw3w%2FyLW2JA%2FUMxrSc7jcW9uTNGi65GNx6%2FvezmdvQ2sJcYnM3D6YACVXXVPuYRaV3vM4L%2FIpYIj5C%2BRQu9YwhJszTdrXckCfvo5Q5c2eaB3X6gn6OKTBQ5cyOG%2BjRLyLgEVDOjBWrWmqdaZ4E5%2BSqibnyjWhVJMzxc78kDa2fEpRyYyZnVmKl8GSLddfGjaBMJA22wkAuIkPtOwJ%2Bm11CLJGPGumu91mBt0rTAbtLAyu5zytv9NsdqGqiIJyfPIOUlb0pkgf2ySJEqkJ6EmFdoVFdPNbeLKWkKRKnFAcEerOk6wqoVcfwuxGq0yujXMm69v3Fo8RpmqUYndV66kEtAUeNak6hmUtfm4Qj8ZjZAPL9Jre%2BKABJnFEH7tQQMfxD6gwgwq5LDxAY6pgGaBnRjrmYSL51iuXBPw8jNv5X1I5RK9Ft13%2FS2TI3Wr5coyD9n%2F4mC71VNtH8VSWghxM%2FiRJxXflwF9KXX8Pw8%2BX7XrR9MW9CGQ1H8%2FAAGXL6wqbT9Ef74Odc8QzsJxa%2BcPYWXOGMywi2QQIAz0ehPoIXbMsjAnbfnlQP0CPYyM57hUFYtgzovr199%2FO1leFH6rtSEFjMF9wsoU22bUxHKNNQ%2FMlz1&X-Amz-Signature=0eeb0479df2e935b7e96e412f887a6e6e0cdf40fe8f38ae94d2f27326d2341c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZ76YTY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIGRhwnlGqUjeq9gZaYLjrQ90xaSMpffX%2FbFVUoJu4touAiEAx5g16B2aphBOAbLobhev48Oj39PoDE1EdTDrQzlcwwUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIqs7Bgs%2FTM1hCzY8ircA2G%2B2OIJzRhMVBw71Qa3ZzOZMZm4j7BZPFvY0vN6wUGETKHluzrfQnhhccDrvbtxtu2IryO%2BaWP1mrkkZBkF1HiyQji4HrA%2B5i0G5W6URbQoipO7Y3vcOGYs0Gd8V8h%2BO7P0GzLzS%2BQjijveG8qudsmeEd0W5Um7A2QVP6vgxX0mppNIJC%2BcdTbf2D1RJx%2BvKzgoVdOQocAeiEV%2B4Eh7t6xqKod3BzZFv3rWxUdvgBQBpYkkdPWkom8xwnSc5surpmrhcBE5WkiCRrJ6HSMCLqmZ1PDEjDSI6DhoAlNQSd%2FBsRYjtb4IfzOJpkW2FfP70IvvnCjUZnbbJxUSzy47oGGMWb8sdiyFTrm3nxp%2BlsWh4PZlbjt7TkzQrMEO7a0bPdnyS8cQ0Cbv7ipz%2B%2FWA9LFeSVYKqURJW8TmV%2BfZ8Jt07x0YaG7U3NyqEwpIZoI6qxQYGn%2BFiRJ2bhu2BYeVsR8lNaBKmjkB5kvrzuX%2B7D%2Bdj20C8nmyo7mmCFuWHRQV%2B4B%2Bwhh7tZTKwk7LtWNVcKLUIe9CmW0SbyB3Z1S%2FrU2cdC5%2FPoHsOIlwpFMPdpsPDcxEmqLkUQEO4uTshfkhPs0MYEjC0872pSfLqXt1F3m7WSqMIesdPXbLrPkAMPiRw8QGOqUBVFebPAwNKe%2BbnMpFk6umCyZUr8vNsp3XSnvqqTouiP5IQW3%2FJbO18eUet7bjBL%2FanHSloScxAZHs2d3psn%2FyRztPiQi%2F%2FeotnOh4r8i1bpUCeJqtlsoDFWpeAVhXm0z4%2BDCpRdUgeTp7HhGx9CLNmBitK3hox2s5E3tiRxEpodzjGq1XL%2FJhykXJdAFFt0L1I8A2K5LjlhH54MHXSkmeufxe2VUX&X-Amz-Signature=693089cdc7c872d3f60c1178ee7928a69ec9a7fac6bc9a4c805b40081efc83be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
