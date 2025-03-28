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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEUH6S5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKwvv0oicbBwCv5n5h8Pl%2FFkOOhJlVAQ8IcdzRRoncQIhAKSV5jO3sSqUlJHLLTNwIjs0aC79sg3FYerVVKQ1F8HYKv8DCFUQABoMNjM3NDIzMTgzODA1IgwaTBKMZmbJ8850b9wq3ANxGKsoSXAjpmoJQebe13mPz4%2B0gsrR7sdkT4xdPWMJqXLzNXurZnNduEZtb3UJ9CeSSJOSXLa%2BO2rhs87vFTk8YQqAOYkmfL1vHrNxYzEDb1n4cIcpA7FNE5ISarv658Pc6%2Bhp7FGGEXrb1VLeQkRt%2Bwu6nmuT%2Fhyk7zZwWeCIxrjHLXmdZd5QWCniJwDI%2BeibUlZZNsBgPQ0ZELWNi9KetSqOhSuPNLVKkSdxivfndpN2qsOmJxXYP7rsR75Zetg7AelNqL9GsKgwLYd0QNiSsaBYykP2uLpwWFyJebxoIEI54iOBLQ1E07ospX6i9OPHChSYUMizC2HRmVOsXDoBgVZ7kdvmFNUDWlJDRwIwHQx7X61BdhOq5gPD%2BNlAlzGJ%2BLb4i4cBx9KY1Ib1%2BQngO9eGuQ7jwlnEzMV8MOX9WFf6ZDA64fLkAULG8AYbBdSeeophplp2hSuuE%2Fi3o7KPkC2A387uw6gcBWtC9ymrJFegn8O2hTwiHfdb7Hn6L7%2FVXsUxBsQCFfE8ceDNNgJDGqxLeDFPK30LOM3ev7ijyb59ODh4OX5kA3Q%2FtUnXVRwEZY2Ya1eMdMDLcT6Gw1wDAyUzxryh7%2BP5SfDDfIvIyBf%2BZDe5Izb5KqMvRDCGsJi%2FBjqkATrsSqp61ChphdsuDC%2F4ZXn7aAI%2BCuWCei7N5poqz%2BMa4pl5ugG%2Bojw6ZvihCzXi%2B5Yf24CCXcs0Bk9oN1Gtak86m8qFiijI2wMbpwxxX3VZJlHgcfKv61ZaBmLqPbJ9KS1tSBZapFlkbmES7CE2RuE0lNkmBqmndo4Xf0BbuWmjzp1%2FtcuJeK8kmFUGqHtw8Yih9Xl6OCHZ0LmidAcv0Op2W7oU&X-Amz-Signature=eb332d831161c5e6b88737fff3a84568843c90eb89221235f2434747ba415fea&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTVUYYB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BY7CexO5me1vm7BElbQSciWFQwZ0DFEAb9JlHqP5V7wIhAOAoKDcXL9KALL9P4Bm7ayclt8JmzSCicSc957zhJ1XNKv8DCFUQABoMNjM3NDIzMTgzODA1IgzVKewo1h8ShY5CGAEq3ANfmlTqTpbj5AVlbkBbGWCMFTUgVhmdvwolfrdmRIZWT%2FvnXQb5X5ySxYkwQWhMlFGoSiouVXGNjPpushV6HqtAo0FlVW8wIpNKBDlL3SVOoZv%2Bjzd%2BdBf%2BRggMGLKuqXi8rf24%2Fbk5lc5wIYLwXz0AJkGANfX51cctFX703Fns4cmSi5%2BkwmKKSWcang7R1aJsAeHzEpFCi9KPkSahCcznmksmTc47UFKal%2BVUda71qxrtPpNzhz3yvU1ne1FYk9J0%2BEP2hN6o7QSu91W4tS6FYp7c5C2mtzcVxg9E2GRiHTrpdvWaBVV%2BbdYC%2FoyQvBEpmvGpzux4SdMTJBh7yYjZ%2BHCl707QHSIdAQ2JzRgBb5WpPGp3fMx5s037Ywoh%2B2RYlg%2BMCY0sqwvznDw3rtd0zwpvqL08f7VNuio7fgJq7AVqjaRLxg8aEYnbrfFaYLYC1TjzR5%2FwRWb3XPfC%2FX4RfrXMv%2F%2F2PFbl1uBC2n4LYMWF7or1sL4ezz4WZy0gp6pL7MbqJtVGXngKHyWj3PCJ8rU%2Bnrswd3HC9ZPIgmKiz49xlXLhUKFJy3wNpZzwEksupZ9y1ggupqfDbCeJMTDMmJdhTCUDQkUe6ls0t7lK2j4dRIroVKsf86M9pTCRsJi%2FBjqkAZYZNa8ZZzLiArB5ub8n7KqFSwB26NF1ChKdj4l3C%2F%2FJEWFHn57IYHK9MlPDQb%2F%2Bl47oupWJph%2FwSKFXWb0PL6COuII3YVzKi9qlSTNTEYoU2X0U8vc1dwWMsK5GN8R5MxX4UceM0f4sBuWbYqjbI5aSNP5vkv4Ill7v6%2BpeB6I4mNoWqTAZiqYZzgO3uvL3oW3eIge1sMMsZ5BN3rGI33gvqkEk&X-Amz-Signature=819b665d7f9c1d88486fc3aef00b4d595f50566b3b5829e260bdcf8363e5463a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
