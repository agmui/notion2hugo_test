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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDQRQG3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvWKxWQD0AUg5CgYeW799oTMq%2B%2BSs5Cda84F%2BUOAN6ygIgQFqTHe4GK5ZMnTfyMWSayfi4LnBLoGKBvmegOXx9wBsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmtjbiXRImc7KR11SrcA6%2Ftt0oWwrzXskxwfBk8iURAffIL%2FMJW3oK4xMgQ7NWKkfX7PhBxvzqjFGTIP0fE4TQVMHjO5okudWy8aVSRMHSznUS6TDKmgbFAdzL3pEvav3HdSjy2jgl7MEImZilQjd4dSx4dwSwxwH%2FNXxlc2FhtiJQGfIBgg%2F5qlM3dshtyownHD900UsCUl8R04aklzIWZANFbGvymSkKh%2Ftz%2FudAkUKqwGkFc%2Blz21vloAkDbPeu%2Fe4RbfDam9P5FFAYUov3pahoTf5WVSJm%2BIdFCx4PBmO%2F%2F0y7tOkO%2FOB71nDGnu3K4xu3yD2z%2BKmoBenj4ifkyEWjkGZP%2FPzyMigHKjKNUGuIGLQSREHPrUps7abX59SdkQVvdrkIN8M52svFfmIFD7qibQqLw9ZLpsTreaDY6eS4IuqAXGrt%2FqSuskRaJEwkSrlTAqJvubm76mbQyNoOUFOPBK5nGc1YI%2Bb1eai0JWTbHAephrNquVMrOz8Jw45ua3spTGSEUUOxh3ijdOojmppsAzMBbCK3mTkF6cI8Dp0EzQBdyDlcEqnzFHh%2BrJhApscj1XE1ssb4Bd5tQC65KaDeTmKd%2BxYBc8%2FzZb%2F%2F%2FoxgiS8bXGeA9VJFYQnXij%2FtLhFkFE7XxuTXaMPajksAGOqUBX20CkC%2BKAvi0ZTq25j9vabmboSmSVm8TPhuLuwHZ0v01mv%2FMo%2FUNcB9lvT%2BwtauZMvFXQVx2LZ3KR0OFzKd%2Ft8gPYBj4WQuRu1srywA88TJaQVlnwvc%2BrzU08AxWiq0NrtsPnTLIIrzD3gn5%2Fd3X3cA5RRPdL0MPbSzZ5LhoBygq13sPUBp%2BeAIpw2CHAk2ROl55E%2BnFMGY%2FYN4a6VJnRVYUI3CO&X-Amz-Signature=3294d9842fdaeb7cd18647532b4e28937e28f2d3dace32c2af734a023e343c80&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PJM7IG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCD%2BFNfo0prTYxGKgzDr8ex%2BET2d7jEsmsf8sxlIk5RHAIhAIbhgWwbWtDjO8WCacWV0%2Buro5ZQV0Zmnan4vqHe3%2Fr6KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTpCHMgXDYMHTnVAYq3ANhnvDU3eap%2BLvOQqGCxiqLDhVa%2BUEe1XpiDZVyOgsj7ozZ2qgtijJXsWvvi1eN%2Bs7Pz4S7FiuZyvSYAVoD%2FdSZeQLTjJY4pF%2FnqLXLyALp2JDqrGzP9Q6%2BwyxYRZ%2FgHY8ociuBAalq3B5nGfq%2B967iRKiKD3fsJa3TCwwF78VNr8yTiI90ScZbCCWs5Xzet6fsmQhUfq55EM5lE1sWI5GHibFp6HTIwby%2BXbFCyJ4bfKdpM403g1tgAvqhyX7LZ6cIC0g3Abxx3NLjRSx0yFucukJt3PSii9F9Qhz63JfijkAhqL5ZCnfeOY5i8s%2BAX213ZjgDguFIi%2BI%2Bx7cAPv%2FXfXcPlBk%2FeuTTgwgoEpl%2FLok6yceESLY8DjRWvE57p%2B2Igy2bzzAiZh4heGRmAhFXZMhDqE5GfyJuDDbdGIudegOtOGRdgASw0iPEdjdf4VwTBQ4f5%2FbCwPYWvItKeOwdrd41w561y%2BP4sL6i2%2Bw53IXReRFi%2Bg0tPO7zyxzDvaVGHA%2FhbVFDnJ03hMKoNreHZSIx8yt1T%2BKQKcJD%2Bit4WKAd4o1HceleQ288NkwfBm40z1RoBq9V1eGlY4WWKt%2FnnNHkPQoMn5NjnF8W2o%2FOHhkgxFeyUnncwOtj1jD7o5LABjqkAXZKrM1gzO92HC%2BDNM%2Fkz6ZCLih6QvN4YGEEBmxKnZWh3C0cYsaTUcn%2B04%2BBBEmUCO1PKYrPuCg7LK3W%2Fzlqyh%2FF8YTBwVG7iEiwPjrh3p6uSayIHRJaMWszQAUsM%2FsFwBzLi9oq1oRUnSWgm5KJmzMSNKdXZyy0bY%2F8hfvKwy5OYv%2BzfubQdRWeGQb8hWze0XkUFuGcZrLU%2BsY7h0LVULHZR1L5&X-Amz-Signature=3781152883d5c19959a6afc707d76d042da8ca929ca0fefd3142c7c66af84455&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
