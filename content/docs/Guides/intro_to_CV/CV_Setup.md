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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPSAMQZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIF5WNM0K1qhgW7%2BHFkOK6Wx1R6QIRWD1qjWeJhsgvIBQAiAxqGRiMIPh1MKJxOw3pzpaE2fZb3dSmeLUcgXEqJUZhSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMQk1QL2kg4xa8Vw76KtwDR59MIB3I5C76Isa8FH55UkGY0kXBMJ%2BnuV%2BmHrf24d4BRCSjBh0i2XRNtwc1AW4W8UeWDuRC6Wk5UE7Qs3Stv109HgvA8BMxaqYBfMMNy9RV4sKMG6a8zh%2FG%2Bs3EnqcF4eGuu0dmthCrkXtoP5PAWyysdXcP20X7FMangPSWBMMqs4ggL%2BJwrOI2d7ec89%2BfIG6KsJSB3wPcCklWCx1hYreegGxhMWjiNSdRv8KX%2FEVoxUxfk9b7Zy6AXC7ISKRwuj4Pzfua%2BA%2BSKCaD77Z209HZ9z5vBV9zQWo619aZk%2FIqT5H%2Fa7RmuC2LulImzDWYvYiuhsntlmGSus2MAarXiCN6UJeuLdEXp55rXkwWzJoJDF3RfdbvPPor%2BGSflw6tCFDlOPGGLK5bcaxmtqQh0MnPsPUS51Wfao7GkI%2F331VGWCkKED2Kgh4NGfh57Wzia3omumX7nbaUTsYNgzoh4%2FT4K3e5BZv6lRA6PGS8fVJ5wG5Y5QDXJx0Rwc6mKDr9jKZNrsV11U3suzDyKwgLE2gH%2FjkAU9xlVhX%2BXOO1syF%2BENtL0ZQnGEQyytpgBELW%2FZDuv4ZEU%2FqNfTNkbNnU4Yu84woqxsrLOk3zHROXuBNTy0RPBhu9xcckEtQwy%2F7ovgY6pgGM4TgITcwYaJ3ktVrcCk3iW9c4NzTd1G3nmP7XiSYUAcm7tT23HTZsZOx10ix7XtuyeQaat4TpWI1Toha7NIm3p6mWKzcOx0mwSrUKp%2FxLbVtXP7knSg8TSnZVB4A068MB6mHCtzVyNdctHfhsflnarFLJRpb62FpPOeqZIERrl70GVAVwd8%2F0NaZEO1PkFR6a2sa%2BKe1lBbDJTIYvCHP1%2BmlADhQA&X-Amz-Signature=e065c6bc86337d793bce6ddeb07c7645a2871edf934917dec44ea6e8a5214e86&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHVIVSP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDZRdkI5lQTbopAAlyDavFiYk%2FLqK6gmVqUz7WW98WKmAiEAr1%2Fxb4r7dPSbr0QgQB%2FkThGgphwOkT7evxk0AcR%2F%2Bgcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNpHzHkssWxxm%2BB49CrcAzHKtezyeXn5L39oMaj3bm%2BVqo9ej3rA8G23TuP3YxAgKZnSrtmXlFlzBo%2FLmaxFVstTRIc6DsOsMYWVfeCcbeyjueMfL93fkx7aM2eB3YscjRZtvOubCCsOvf5ni8hw292nNRIvoQUb0j2cUwIdzR7p%2BC%2FI99Lb%2F0i9LEW5hTviZGYp6p8pN4MywIHDFkpKYSsFyM2ykZQUFidJ%2F7X%2FpYf6A25b9jHlDl584by47ckkNPOKk5MUAuTe2o%2BaMeLL3vYFizy6IRRzHJYFyvqCqEqh9S8d7DAKfj5TIlc9WKylAZQYMla9c%2BPBJDxnp8x5em8DonqCD8LN7Ho04EZ%2F1Y9jM%2FF%2B98TCIe9XxJqjbFjQ0uzm8jR0VUszkMoD%2Fw%2BEExP2%2BuPOJWQdVQySod1A0orX1bT7Nur2%2BtJ7YhdEeJhWFOmDO0za4RGCGSGA5nTZN4pG8IlO5%2FRM07XzrIYJWGA48ebr46IMuvlm7pMsXVgd4vBKygQMhlo5E7rWBlOGfjrr1MtnWsAYPUpT63M0le6kAalWqPoN7abnvEawklVwyEc%2F63fvs%2FZm61YpP72EfUeQiSLi9%2Bh233%2Blxv2wATNJpPiK13st3NPFcVdHy4H%2FKqcbmJNdp5qCPkv%2FMP796L4GOqUBldIupyG%2FyaG%2F5gOQsEoMKLoy9cmY62wmCSOHafWLJ95zmHDycB4SN%2BnPEMJ1EfkU8vm0YTd1jNN2GeymGASSU0H%2BWqH%2FFW96iqTio%2F66JYe2WuqHkv15E%2BKQFp6c2ahos8o8Ipt%2B9jmd9snPPxX36fL0mPEMRUUK4u6FFNuOE%2BY8RHuHnJnewHv4iknnvwDO7cAKMCJI%2F9i6RjPgmn2fZ%2FcomoBr&X-Amz-Signature=30baa0e0cb69ad0255ebbf300f3e2c2ce1e02ce6fb526fb6df1a2d8b327c78a9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
