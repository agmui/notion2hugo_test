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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BP3QVFH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH%2B3BSakDSrWKOrePSe%2BFVSumOXFrGmhDUZY2%2BZE0JWkAiBEe3oci4QFtKUo%2BDlKRmKbKZjxysZAuxBoErrlllPKpiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFcq4FWM2Vw%2F%2Bbv2MKtwDGA30uclCfZLzaWzQyWo%2FltTarGo%2BXVezLuof%2Fogeggw7%2B352wAO%2F1wAnkbEio157d%2FxvYNKvRGxhHQoH4xBtVf9ID9XGVv8wFscPMUcxay%2FO5zkzkXTDwsu1pK3zLc9tQeejabYYybtrqTigSDoyYCm%2BgeYDGlqb0MF8wvmDevaEl%2FIyskysQBiaY7zctz0Fiy7KyYlADf%2B0%2BRKQi2qStsBSgkmsVgv25NuCzOVUdV4nw1gKLet%2BDcsr1XwLpGAJzbTr3Zwmtv63xCbU8naBupLXddB3yHkjOEZItZja0INj7AbaMQB%2Bag5Szkkm9kCgH0fWh4o0rBEJ8ciee8RZTx6yiS0rFLe0vriLBLf82VipLnrhLi1lNH%2Bz2Z%2Ba1flilKcwnRguS2qcDso61uNZYaxGvWQgJaz9VTGB5uKtd17Gg%2FZF28hN3YK8Wgjlq4OV7Ld%2FY5%2BoAA518WWQahyJ3bw3u84OJmRS5ndaaoMR65P4H1MKO95iP7N2%2BYrduPFrT7NuSs%2BgZjj2kirxFcc9N3daPkJ7I4T4hBINSgBoLvzfCAFwsI6VPHVIRxuNHyEgUkMJ3SMx%2BomqK9lvUZ%2BjS6O30K2h1xli9xCfo3T79LPMqHLS5%2F5woQfv%2BLgwpqqewAY6pgEP8uAR4qZ5xPTK%2Bu8hA8LmWpEeZs12vFX4%2FSyoQi8%2F8yRzWO6oiBTuSYO6Oy7Q062jv416pA%2B2JzPNlcK7kBqJoZTt%2FXD2gEKzVaKwrDwvGpNdLY%2B%2FTkA%2BaD9S5YZ89B56Ldo02CenGmcwQ1Sdp0hJO8FZKbh31ZyezC7ZIi8Zr2KhFQUMWhDTBbEG3pfWW7obOWtKvi9U0X%2FksVntT7LvwWANhEz5&X-Amz-Signature=044f446901ded8c3ca58032fda2a7fae97023c99c57e9ce606e75b398af0202e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JCFDZS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCEh9nEl61y%2BNcju7mAaO2ClrGKs7sPchQebZhEs7mEegIge4YZpKGm04FncUTVzSMpKEHHYF8rS0Yh21wJv%2Fg91TwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHp2QpKWSgg%2BrMQ2SrcAwjwDcBMYMXvHve92qaua1oiOiJF9%2BUYvpnqGOaYneLCSXv%2BKrA1UJF2TbcL9649kq3HWCmoSytj39PKA4RcwohsndGjfKeSJ4OFuVVVK6L49DZ1Y5dnUoxhSKS8i%2FwfaftbMzWflHLt6KDzlTGPgrCpQBB0YhB7wWIJw4NQUcOycEeA7jNPA1SuIwQ9KaR44TGWChu%2FBR6O1II6XAKV9oHmrQ5b4yPcU5fk35c%2BQyUluQDG2neF2VHQfnUMEFJil%2BxzfNrd%2FEQlLhTLWl4Acoq1KqRDbS8MLwXRWGPcAUOswAvNNWf%2FkcBaAolGY12479EdhgMAQWwIioe1%2BD02HhA22o8b6%2BdujmIyNmigUQfeF61qnYYSoEjqn9WKBdRia15sObYrnO4qy7v5tHXBUX0smQTGEvG%2BOq7%2B7MSQYnHmLJCiBTCxxujdmH4a5A%2Ft6%2FpLvo248VY0Sc5wMoKBYlPDziNu%2BqTNChYBpfR6cDA8AV1cE6tCGnfl3fehLu9aBmgPhogWz3jqaFAwJwUi%2FySRtYMVuvmJyt75NbQnedSeSOmNyxlP7VLvZw514GVr0O2fmWs8hwgfCmo2K4rjfeJdB6TOCAlOOSonGbG%2BsNcrIwa3XckJRPCct36%2BMOGqnsAGOqUBGbiCzpcV%2FhoI821nY6HNu%2FOsGguv90GDLIiLmy1pEzVMSrMr4bi6rEBrW9kXma3lIil43Sv4SpheRFxJc8qmA1idrVXRs2ca6QYL3Kkedzshohhxf%2BqCQ%2FBAturikdAOCY9oWHV%2FtsgQd9fQewIF2bR9ZJFVzz8KqjL%2FfiAyi70ZfYHU3TGEuzKRmEfAknRpDNSU9NhWrE%2FvGJykQBweNp49wLFD&X-Amz-Signature=44e49fea36412a01eeafd36d39441a88273760585179a0a2192a0fff867c700a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
