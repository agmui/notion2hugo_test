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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMFVRKU2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIE6mOdHytCMVAoqMJBoIplcSKW7FIU0%2FzjSFJ%2Fc%2Fd13ZAiEAhu99LR2D7cg4f7pJyyhrUETHMhWbLIKyDyElw6hyLP8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxljSBbWS5EryzHtSrcA2FQ6yHaTgFG%2B6JygWAy6WUqaKtOFHuctBf%2B9QJmXaC8jgL7Ud6u9kc5Sop4O3a9G1875YBQl%2Bx1n4tCJTgNAhcqSGg6b68X3obRo%2FesnvXlQo82VKYbuMgklVJnFaJ0bzKPmswaUOHM21LxfsQW15Ss%2BNEMkIi98RetVv4O7YYw0cR6UAu4mraa5l%2BdXmJPFpX9NzCVFLUbArWP4H1AGQL%2FLeVLrDogB1bpmW2tPCBNQKDs0rXrhh47w%2FDZ1Pjhubvi0e3HwaBKuii9GmFR5EvHC9q8C0oOaqP%2BF98WR5numsaHA5gD8tJnTCMUtaP4z6MMI9%2B6OCT5UfbWJGZhXpdmMn81EdxnNLF0J5o9L223LzK7OloMJ1rsUWMzr4OZ9CTuAAeqX%2FZzvllTqDkny2%2BuNQoHaXETvqFPSepgEAkeB0SUoDjInyutYrli%2BjQQ3qrRTpYPJAkh61jQlQtp%2F18Dy2YMwmK0iONQxaJ4K4Xr5KAvyyS%2FEZmFlQxvXKsSTuLORw1vgFkwQy296j0Rw3jdNq9CXVTO7gN24lWtBPf33OXNdx6IJ04AWaQ493YHQW6%2B7Zw7bsEoZWXwgD8vwhIF3EKN7%2BACWPdubo8O0b8pjI%2FHTIlXs2uioac4MJSMpb8GOqUBKxVO%2F04%2BWIMl0TDi0L%2BZFtwowfmOVeb%2FUeAEl5AlkX5%2FPueYG5SoaOxLOA%2BvlEjYAIecNfeoanV0YwJ3ZAHkAj6bycp70JLwR15lpLBWz2bXbTIdMv97m4%2Be49f1iKeqd2Qnk1Y6Um4YQueSWY144qLV5G99hXMgrZTLb8D%2FHWQaihA4MkTWBjtTg2FhXeamkBUf76K7PwiNd0maAu1qlNEPZZnD&X-Amz-Signature=ab6a774579b41f493c5cee3511d330841bbcdbf831cdcfc7cab884b8911170c2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUK7X7W%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD1jSqu%2FAU5%2FETQmG20GIOFmnVThOdryMrzYgPoCQJEDAIgMdWsqUczaZvSwKtdiQ0JlIQRc%2B0Cs%2BwOybnPOOHEu1sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxm9iI%2B85deDrrpbCrcA%2BJh2KoaM35hLp82GTgSQATjrPmieG%2FJz%2FHV31Zr5iD52zcwZr5wvTyZFmZ3dceKsxPDcVAKTQdqLE%2F3Xdkae56GclBEoZgGUVJGqcUtfkrDsShXFR8gbyKvF5opps3256nvjQc%2BzghSTO894%2BnDs6NZx%2BA50iDEsM%2B4ZhCnzdbCBl%2BCRm37whiLpHhaz3kd0492ngjk0UaTub37rCGJbh3rwNY6KXH3bcjVvKvQunu9m8KLKSe2YGWZZGTJ3eg1PXOpFlLsrl2q1JBKkxcxdRrgkglrzSH9jVSkqdVtsz6SmU0ECzSgyEe8frcFinkm%2BqvaZwuumJSFn0FoFZyOTha7vUJi6KAtbI6jTxMakU7ZkvFCdsn26Ck87UDjDeZdDJAoN5bYfNNQLh8uzUidhMsK7Q5HYoWxtbT8H5diI%2F7HDjyDKIdKfzCLPcpaS7npmyrrHroREO%2ByXwB0MA1cyZ4Hd5QVyrZ9NASQsmBYha3s%2FgVqqIaw8NRjjoB2oJkRsNAADKrXCWhJ%2FlBLYbwvJzJEF%2B65MG34XWR55h%2BWHAiPNiRFF%2F4KwpwCFAgsiZSQgMeS4nM14IxT3A1Kfb2dSOCv1EApqBf3RGkfe3ejQ49VHJ4Z02SgYsWIKO96MPeLpb8GOqUB%2FFVJXeZ5F0ZfsKdZf1dV%2Bt2yZS6tkXH%2BUZ%2FROTfzuNR6qPjYor1BWDHnYS7AsLYzhP6BYVZYT2ejqK5U9oxV8%2BZa0f8K%2FqkXqy9CcEkCQ9Tuw2hM6rTjHlz05jS2IBcGasM7CC4jDsj45giyloAysvEmjQJjIjmdx4mBgyVwNJq8JfVRRTsSvmCLkp8HrVKUCw4xKWrns3UxZKTvqUxdNI6%2FxIvV&X-Amz-Signature=5a47d0ac36aa2f737fce895164911670efef96095354c0b4c910a08c5adfaeab&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
