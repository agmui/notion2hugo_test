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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QK2V2OU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCsJrSroQIvL4x4KLEsKiB3g2HhRqXhzTga8L3EgoemigIgIRTSt95PnW9DN13AuGq7gxWoB2Ee6xIE2uLh2jLpTegq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDL5vm3j1lHfprY3iHyrcA7%2F4lZ4enfHVitzITxAOxmeEKUR4KLTrTKbBaXgxhykeviVD%2BCf5i9xc1WXfoHtPW24JIKSz0OyfNW1SozN8AKdAZyuttc1oa7UXetmHxyvRsGcvo5mJp7htm3lEWC57XBlZ5a5jweInSqVcD91eCyUUratuIcGhPlVV2IVyrGCtW3L7HP%2BCAV0Kxpm1oKC1kZH0S3t1ddloS%2FCgnaTJrWL5UmugVVa2qi%2Fknx48DI6Op6APysZ46loScNcUr%2Bd7sjzZpVQI%2FTRQmPF%2FZCm8hZc9QXj8fBejbrs1Wa4PnJDR7%2FCvmbIt8nO16aspySjKQsdzG04W%2BBh8qMgraJGcaSYFOvyL4HFWIh0pfk8d714uv4DpBaK876GwxWeF41v4qq3b3QCJ9ShTPOECBTmP2TypizHo1wahPkEKSPveDWYmk8ZFW5y9S02RZbwD0BnNe596YcU6ckJ7m%2FkvY2HQ4nPVTc5qD6xX5zF%2B1cvkQtGgWkBJp2k21VNU1TpW43alPJR243t4AVb21%2Fx0AvfLSMpqkWlFnYoTUp6N5eHzbyHSNx6dDnHkT59CNbDJwcpm2P%2BeagfRLuWlGufTMlQERc8M07pS42IZyW3AemlpJb%2F9LE2XN%2BfjiZ64FH9xMPnSpMMGOqUBR53maVIdkGOxwPkfJIgFrrEAFG7FevkKQDJJhzFmmGp8n%2FYKtYVbY7AXKCIdoMkI26vPupsRZLrZTYP73WFxCvvM77H0PNUime7EpLTbvZZJTuMTxwlBbnlszV4AhYD%2Fh5%2Bj42COYP26NryJgN8HTSbEq%2FDrD57jZ1WKcqvlHMpmcPNjuf7Wl04LfEEes4vTokKuTq4yqHT8lBT3pFCtjkkFEmVf&X-Amz-Signature=d05436e754635aaf31e7ec22d915b79a77c4cc4e40ac26d12d258844c4fd6466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4XQSQV3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFbZbGlgzO0z34tN09sztLJJY60eJP%2FpboYYGZg8%2BwEJAiEAsuY9bhv5CAFDzck5Mz%2FiRQ6NOklb0vsjgB8rhPnza8Mq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBqsqzhFeBTSFzyBmCrcA30fgPsaMELmf9ViHqIMQ2qydjX57yre%2FEPFTUEnpEzQxcmiqdscT7ggkOKp6rt5dy529PrNWwXZmcA4Uutxtxx9OR%2Ft6sY2Cxoc0rPJ7u9%2Fe9Q39qdcXqQjsLANawqFaXkA4cYmHKu2bJBecKtuddp2AP8CFcpaeDKCgRKBHQ%2F4BPgvjfmPoOd%2FoVotHkr7ADrzMYcBPm4h5EYGyN5ou41jollUKb2cTmOcDJIapf9onft9t16SW56op7KW%2F%2FvDEP92CXJBCDbAZz7JJUMJpjWYDbh7oTXI0GYuzRszKEDz8TgY9Jt%2Fv2oREdXnNOsJPWOH%2FO%2BB4kcHiSX5DF44YjJxlp%2F7DnHfWZ5MPm5hw8cMmq93DEoUyIPKtthFgj%2Bu1yVhg%2BD9NDl3IYrWfiffmqPzUhnqPtPlaDD%2BYz08GxwGbx18wgRFQAUrcof1wo3xMD7QPRwu1Fyi9QdPvULDDBhAbIyeH4%2B3sjx8gVqDLCXfOAG7PQlbEA24Qc0GFHRiIdz1ONoyvl3yh4YS0qmDan3zu2bUXBZI9KpFqysDn66loWw5k895fi3XuprDTRSUBcFlWFMr1s5WjSbSIJcO%2BXyLFM2oLoQPwIPc56ba%2BhnkXFrXmP5seLOrzgGRMKTUpMMGOqUBhpuljgMnW6F0C7Pq4PXbe45kW8OU%2BbPfZGFiQqz0%2F1ZaYspyrPdEdpiotA9b418mzUgf3WVj7MuPKx0DurBgqO4%2BHoBHVa8hkBzLZ5SXey2fAc93BPubGB6RKOgaha4eQqBWZzC5IUr6Wrq1IrZyp%2FaXAHtxHQqUUFUtS5kzuQV%2FkfgNzgpqwQzrAMYi0m2Rn6IGYoGctq7%2ByaRn9570zg7N07qI&X-Amz-Signature=e4f1664114fd1bd5eb793120900f9c5287142aef9605443384a61afc0f1af208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
