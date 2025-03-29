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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIFPYXHZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCxTx%2BjE4gqqGoJ1pRDhhgH7kbBSal4r%2BSEVh%2BKZJhWeAIgaYBv3xfHp%2BxBXMUxvMsr4fj0pZlAPsORGzElr3l5j6gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAsFtiRZEmCg2mJ44yrcA7ssWFvIDL3VrYnqco4IsJ1OyufZhHNE7QQMxTYgLtdpve2Jx5hjLj8ZONG9H%2BvCR9px14BA8k2s1JZsQ8s7pvrRqtP5MqTpLhCq7GEYdBeNVrqbHMTLO8ZfcRqe1fQvFBkQvw%2BMQGMRDzfbN6km3yT9spPKIAGlNZrvhdL2EzqvFayKgahSTiVdqghOLhxBeOOkYz9ThqIdx0tR8t1BTPETdnMhg81srN%2BrYiBbmKJMF5h%2FCGmv1pGOw0jZbhwfuc5wvv42HwPi%2Fc2OHFrEsFPleSsU2%2FdOmNE7CEbfnB122fOUu9AaKlS0iRA2mdeP8ePV%2FTaUNpJllOgoSGVI%2ByPr2QYw8DfiYEGnYLRURBT2CwW0gnmovA40ByJu5HpK3gs3iO9dxyIvl39duikmEJgvhqe3nXjXK2bh%2B7n5STRJQKYAwaPjKB6%2FYs831TUU06XE6XbTC8Kwilje1GgMxXu0mK%2BTtGCN8BZTTfNCXRXOA%2Bgh6aEGyIoWPRckfpDXgOEx1ehyOGeGjAMmTTcOE24mG5LkQNfM%2F1nnYJ3iL0UYq0M1NYx0hk6FI3OinHHPTR6zQbpZg8Bl2mdCCZmav6Njnsz5CkIvi8AQly14DXK47Lv0Ozpatpfdj422MP2eoL8GOqUBA%2FrnO4eAjMDyCgw03l0Ei1o6LOqb%2F8MhovgUfTUZ2QWuPhWG7sUoDnjseQ1mw2YrVZ3diiR%2F8PWZ9IYKc83CLtXTZxaQbqkJudfGJbHALwPwhE1Nn0b2pybG8zAtJj0bVNJazkVm8xkSLtFJfh7SjnE1KeSn60vPn9tw5r5q75pt8cElVMcba7CBf2KVxpEX6ekm7rkQiwMgUksK0bpidq5L4373&X-Amz-Signature=3af09ee2ff9f8ab38d444d39a2b6775ea0e3bf0713e4a676e2170f441ee32957&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEW4LLBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC8T3CMcx31pFeddVS9n4eWwWH1kgYyOK7WlwxLu5DvWAIhAPJ6hk6vUy2xVQ5Hp%2FM3rgoTpFHH0YwL4WOJSEbfjPc8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgykSL6kpapUPhEMguUq3ANEyN%2FuTkEp%2BhpKFCekymPCve%2Fe12YcKCTSKhM3lCpKG5Xp5t5z74E8YB8BjucJqVv%2BZ5vBLt%2F%2FW0VeBhtYhpHdzAxw1KuMGa4Fd5ReSedXyTDorFMw47PFTy31qGGhh9WKnQGPtBUww1vcCnfIi2mkCtMWlEycTAi2h1uisYK3RbRvjkKpYhfEoBtnDU5W2xYBOwrQS1GgyRCKqGNk8Mxk4yrcjpPvzLNh8FSuB1AnKPLkAOUl9wqdGz9qy%2BVeeOHO08wVmzpo6lrVkp%2FWYTSVYl7fZ14dg%2BTTi%2FhVLXJudG06yavhZ%2B7eMyV1zUrD2UMcaOmnw4gW6dPYUbZimZEIDYg1xPtqAOll722MOVtXEblIQw36jClKK5OECLpjutd0aWm%2BwGR%2BExPy2pnfFxQTwMsPIm56lBaZDSeY%2BXo51nXwOWKprUxhyZs8tAEdtEfqAn8QVUTfBPqmi5rSGVvTSXHgC65FRkmvOYi8XYMwveuQKnL05sOLbRHlWKe4MbK7kHDsEtdG4x8csofFR8miCM6kZmT5%2FOd3Wa%2FWGIHo6PZO%2BbhyDndFqEKw%2BY8ap9RKe68VMjWtCxrCfWsvAD0DyceIzoAwzvwvkdX%2F0uTYasQn%2FhzXLfB4ZFqiaDD9n6C%2FBjqkAZKpsOF84%2BtgEhaIGv%2F7tY0dTmM%2BWKSXxa1Ax3kzIB5hCb%2BMNK8GhDV5fcFaR9qjJf1SZH2nzlQAV5Hioxe%2BQODDNQkeG%2BYVZyhSCoDmnPQSNRgA1IHEEOQq3FkbRNw9P8TpjQdtBmAcxMZ5Xv4LYIlJNg62xVJLS0GhZ23Mj5sioSN2FaNDzTiWzXNclat0vP9b5%2BzP5pcQxweiim6%2F5x%2FYu%2Bk%2F&X-Amz-Signature=1c06989d9e362026bac0a94cb025806a8fd0ff832c2be6ed7c35a275d28a6211&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
