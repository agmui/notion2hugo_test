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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZGO6LQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDadxZJz7wKF12HjqZJVXdOPJjhh%2B9RrBl3H0dDznpfzgIhALZu5EoGfYVjESUgjDwca8r9Id8AIafNluG8bHs6iX7dKv8DCBYQABoMNjM3NDIzMTgzODA1IgzBXvEE%2BlN51TF7h1sq3ANzhL1eMJinrIM9vk29N%2F8DroTolCTL8xO%2BHSKL%2BXKI38D5bA2FDquHuf6CN%2FdNBCU%2F%2BHp6L0ARZljIc0fgEHROuLCK%2BE%2FlErkoEN4TPlLBJ7blufW3HF6sNpy764pQB5LlEKgwGDRjByUxIj6noZyduiOy36%2BipXFPCvA7Pt%2FXECmGs3h8dDnHyBNRO%2FtvIRY0l1sC3ncOeFMEjE83BRtXl4fBj19sjljAxAtUnEpwNf327zmyNDlJcHQHAsjXGJ2AIwhx%2FCw9LOj70KBSIefwUpwQ7vy8L7FBHtMf68AYC3nf0ggB0SZSzxpMqiWgfB7Nv28HRsaxD2r4nhPdJV1TNQqvrMV58mG%2BY9QCQD6l9NfvzC7XajUa0mHBrOYuomkUDUjaZSo5olDI3uC43HCqqT3cTYWxwoiu2tK%2FjlU%2Bhr5BgWF60xCtxyMHqT8pi9ay9y4FMEd954u1d1Y%2F%2Bx1961SUIDsx1mUSiQMEfECkkwBcoobdjqCRn9FTzrXx2lIOi9icW0LURK7ehKucSQohWUIyO%2BKuor3UTKsWiCqDxddPWL%2B%2FM797a35%2Bv8L2pcORBSmu7fWLBIqdcXnbfp9okmRDn088lqPXxMvNDAiexiKwHkMZHAtSFV%2BewzDR3be9BjqkAfrA%2BCDmar0vuMaPO8bR9X4mzAIi7SEsVBcl0%2B6acboHTg5H%2B4Qyq1YDgOnYj%2Fhe1mNziEegp01QFTyzTD3eWssPA9m2HrvhF9ZzrBK1GnuKYs77Lb1JFaHGAP2q9VpPc8dk64MU1fdjB5a8zFVWK2lOV3a3cElfs3l1H1C3am3mpejzM8uIS9ZTmCQxEFTdH8Ei7hd0FxB7BUCVPOF93NqxXcaU&X-Amz-Signature=a16ce79a539c7bcdccb5eea33ddb84f76a6b6cf38d0e6bc7e2370a59a5b50c60&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RIV76IF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjLvCF24bkH7%2B%2BrchmpzzJIV7lEhaDiJT50xD3VbAgwIgaAzfe%2F%2FBsDo6L7IC0dHomBBHVHIcygdc49CpjvmGVswq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDILq%2B01qA%2F3IvDVneCrcA5ZmBGWNFbCkZlk3DcqcRTtR4dqR7zgYcQbJ7AWHbj62BUC2ZHPQDmQ5Q6%2F7BAyk%2FVEeApKhauHGdr0WQY%2F5X9Npr5T9XH8m0zk%2B4nna7CG9GJkaXjEbGWGyF0U661BKC%2FeL%2FcdYRJ2mc1Czk7SVdDEF88bFSyb5t915WJlL%2FjdPiEhvjO7eYxCg3JBrf%2BrOHxQq1oT2Eu7BvuqBB9HKf9FaG5TE5l4ntWtAJe7rod2pXeSrD%2BH5UmIXWkb3VIByl0%2F7XtDQQuKIqunDhYn8EG9TytECVxB72r0j%2FNhX2hOX8QpzDfERlN%2B0JR2%2FXrsOpfYElk%2FppYXjqhxSAi6F0q4uhKeVoY0QM%2FgkFF3XtD%2FNySxc%2FqdnDzggdejScWw89jVwG5blxAnxdZ%2B2rQsyAqc90atpRiGQFYp7lnUa7egRUb1LEjM98H%2BI4ugklXYtYuMLgX2L4C8a0AYrwUadfbYoAu2nsN4qarXXlr%2FbBl67sXCzeoKD4BQ0beAGwo6ZzR01AkIpuqjQdvTLmMgDSzoxspUpetKKZTP%2FkXfo5p9rnXIJqdi159XjMxe4%2FEJ1Pm80K7M9VSBBxv2M%2BInSe7hsX37D%2FRLizdds4wyq6%2BfltFg4K%2BHc0yDiseEhMMfdt70GOqUBDO7%2F%2BMlg%2FxuvljAvrXDvG1V%2FfPv2N%2BazHM%2BIvJJdvmBdY45dlbngbrsZjpdDffJkpUtfX7YYK6KvcNLWFsxrrR%2B2IiRLtz%2FfPONl3PzYcFI62Aob8OTNKfwgy3pHWb21HmkNphvLSEJOl%2BdGxCmKI4WpZvNjnnetKMDgnJjOjtNHIlhi0hMilM1HM8lEG5S6VthLIgvhrbPqGITRKMk4LaTmreTO&X-Amz-Signature=3a46c91ab571a6598556ec70a438c778855cf37154b014c594b45fe3bd76de79&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
