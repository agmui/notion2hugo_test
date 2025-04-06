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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRHYJYRW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoWll8YF9BCxlXc%2FM2tkJsq4YLgLl0ibP3%2BybFsaTt3QIhAM%2B2tT4a3P%2FS3dp8D6n%2FAa8YfVSZowwEZs27hB9CkezpKv8DCDwQABoMNjM3NDIzMTgzODA1Igw9rOYVyhA%2BfdoGgQ0q3AMtnvRKvZ0GrvJbbpNtDtX5bNnZU3rsjmJYiQor4o7opvHvFfH2GHSRrUTvSDYrOkZfqKpwa3G21vYiQLA%2Bm21h5kFQKZ5hL3wpjIzrKKd2ymox%2B%2B%2BbWBDu%2B6%2Feyr%2FB3otXqaCQFSVgw4hGWFAVXOnLsAf5pH93v%2B93VI9S8K53BUndbYbm%2FteSTPcgzrW1cDBfGHc3m%2Fot7cIOEg4%2B7LMCm5Sgns0qcoNi5pftIpLEOrHyGGWKuzr4xc0qM5vMpXe7mIFEYYsDEhQDQF3GjeJvujWc1z%2BUl9s6c402Z%2FWAkXLuN9x8fj6k3DDWYvZTRJuitwSFw6R5F5WUBaGblWLWm5Z2AiXme1yW7KaR69tv%2F2mM3Nzo%2FKir7dmfD1iL%2BG9lmp%2BftBNzaODxlwckfbvBhNi0fHSsfJBT3ZkISHknW82Rg2%2FuWrLynUHtNuYDlSiQmgoMkwvcT0%2FmTWqFaekLf8GLW5%2BQGJIXt22Zoc8ctbmCVsqK8ay0A0Bm%2B884y0QIquwpbqFy0VBHizCQo2H5UoPQVwXyGLwcXyqACeBjni3ji6EcAjFjP%2FS546LSeTpxJsfn5MAlwdef3GwutneCYNe3HrYP0Rp2uMjZ7dCQYU1WC5vT%2B4yCyoNx7zDL38e%2FBjqkAcVMgfOcZT7BETFeHh2FLOZPsnsyVsAriq0kH00VuTNlT%2B%2BzVYb9Is0elMk6SWb76LvqpsloN3XMuLhCc8AQlIIDnqkDPSJzwA4Y4HRw9GMKdR4HC9RAtWYQwptb6avJVZOezBStXQ7uHF808USeM8zPE9AwJwlY%2Fw9KwAy6lMYevIOgSXAAFG8CQWxYTuYChouU4pZwg4DvfI01A4ZQ%2Flg%2FeBTl&X-Amz-Signature=503b758b5066c461d0298236eda874a55a589affa589b3f69ab50d10e479da01&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3TR2YB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2JySZSxBNbh2SwCwqWHdfzJtP9iqFldG85kw%2F3loRngIgJKJONVziyMT%2FR09GuOZK4vsjUunkFEhhfG50Gc9gRiIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFmYrP0sy%2FdffTSwaircA3KQ1PdTcjMVxv9pUwrJj%2FMBUOD2Sq%2BiF8YDfjYCIloPhqg2RJlZWTOVHakhc7Ds5GKZdI8u7cyG9teK6VloKrn9T15KB7iWdyKYHvbG4bZeacW1e%2F534hHnOwbXWF%2FREwp%2BkYPyg6vR5qJ%2BdXul16ZU1fv8%2B%2FG5jmygbLFvnZLUGXw1gyfAMAC4n0ybGUHGkmOseKyx%2BIAIfpcXsfX1cysMpz364EiRotUBdMEyRKPlo0WIKBZTiAjweVUPBa%2BK1T9PLmg4h6eEB05Hpn3yu5U6eU3xK1MxbtuvoD%2Fl%2F79HMEmcVGLAFOKqtCYuTts6y80DCIj2YKlji8Uc13eLf%2B5H%2FvY61yVcX9cYxb1vzFbTOcszz02I52xgTfkjAO9lhNs7whUXNM4Pd%2BgyGPggny%2Fa8ovAE3bpmdNbdrR3RtMVT3YkkFX9MGEaigQfn4DNu%2B9dtS95M8gTja%2FOOx11f8uGnhUMS6n0zgK8BSAVOHOGBNx3GfRkIzikuorNVyT6CjGVhwUt5OOIkdCERnOPiVU0brgAr7kD4naJ8HsdD%2F5AkhZcwz%2FcEeYUxHWS33GrJljbh3B%2BF7N1sOwQBpdlMMonzb%2FMs8uIIlywM4G02fxK7lv47U8NLrLXw95OMOTmx78GOqUB7fAbSLEw1A%2BRcoDARk1qf0y2mA7%2Bg0ukraqbXwjeHVoQ%2BStoiFfW5gAAMCGBTMaQDbSdR8%2BORi9GSuc9uVw800V7zeSfOIcyOBYPio54Rq5RaL4wSvfOz7U83i1fBVhpyiAOqMX0j9O6LzIrb%2BgQBULzDaIBidTgZYG1KdhM%2BBjCCMyLdCe7MHkIE3yP8qcvXgwlx3RStzYmZNkVyk1MwlNWN8dO&X-Amz-Signature=ab316ade6ab022024f4591febcd37df36a3eec8f25adf35badf87bcc9a4f91b4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
