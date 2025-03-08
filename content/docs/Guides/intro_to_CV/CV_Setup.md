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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PX535Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDtrAA8raNVJh0UUmzGaLwLtKEoNQp4rZTC%2BhiU%2FhPlQAIgJW5uncCnnu4eD6GTY%2F%2FO89jJF%2FOT6%2BrpIrx%2B8TN%2FOZsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFpZQcI1H06PL7wVpSrcAyVq6hYIq0ORzFYl4av7VQB9OKnPZ3jADEF68hr%2FY7XgMr7VEsfDsqSsG%2FSgn1lnhlV3jgiQILbWaEuFYrNkQKVM9PuscgZPsd2LA6uOjwer0pKWLU1yMNNlzow5er%2Fy1bqyyO0et03KEkK2Xd4KgdOx49qjA8KxwfJxYiDZ1mUWi7M%2FZAF5aiep2PKB126a9Jv2Dq1KBmFVtUT%2BCbav%2F3TJfYJBrWp4Bf1yeHdGJ0%2B5x%2BQqg5WOmdIxZxBOPdAFaLEtrWee9ghDQpMiflkcbQr7OuvfszvvLz2Kg7HqEg1uGQ%2BdFXLX9uYUWNTQgrxZL1cV%2F4QI2eZm99jDyjOHN4iS1fUCYGURj0z81L5%2Bm7P%2BEOmLnTsCx1A3onOdY5juNvUJRhgH6ZKkub9CvzPEBT3Xpx0pE0DXuwOnVJy5Vq36R0xo9uluWdZrCLqSEdHzWLCzccldLtxev9Rk4vIm5lD%2FU5CmGGs2axKldGOl4MoKQ95Xtp0qw0fAALM8JG7Q8LFtg7h0jOs9wKQ6ediTofCPOW%2BWrpb2ZMBXKEB62BaYPvC7cW3xsZEN%2B52dtr2PnHitn67Ul5%2B%2F%2B%2FynyPDuxqb0F%2FyRnmqEHEpXoM9%2FWsDDRLz7ookw4lfwX3nMMKPzsr4GOqUB6inf5yDuL9kg%2BSMPnZp57WD7VKp3cB%2Fe5CJKOoBGHQkWuaQZwivZagL7iXv%2BBxPGvt3JvLs2k73bM9RDSBO0vrLdiwdLRwX2CWTf2GypmDae9ni1IDd5bxrsh2Kt21oJ%2BkR2XFxajKRW9hMq3dSWKTx3ElgdQY2AUj1gbk%2FgYSId4eDQRQHh%2BBwHS4pOqOypwdDJIW8hTultHaRLyhMhawFS5XAO&X-Amz-Signature=72d5e3a2ea8c7c354da74ec82f133e945539f14f61f340bb23a54808dd524750&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPCLKSS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE49fr1DVpF0b%2FBAts3Vrhsab7A8%2Bb4iDCgCgjKoTULbAiAJy9LfIc5%2FxV4cb1lSzHx5aLMw%2BwWyJ5TywY2UAmrVmir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMxp3N2HLzXrkTlugSKtwDQu1Mw2CFvVTD066M%2BFB6fjonlanRTGxr35H1oyt73TEvzMf5bhjbMM3%2BkmpRqhFH%2BvK%2F3apTpWAibvJw2Ggiliv6bd6wnv3IFnN9vPFkbtPtkIAvpB2e3lSTq9EZ3rHylEO0SS9B7idP4%2FR%2FGEPBTzNM9eCZoSwpS7UMyBrYu5AhfQGYjas7laeYfJHa4hCBVpdyVrfxIp3lEFSjbn1OC%2BEPb1HqqsX41v60uQfirTw0MroamZMObfEcPVET1sYe6cxqZg%2BqbGYVNjtDH1z7PFNyQVsm3JkxQhv7aHIGn5VGbCZ6BZdBUtTm7HUrBeaLkg0sQ9pxgpPGsR1L3a%2FHmmeuXCP%2BUK40sLoqKjQzplfp15Q9VQ6skWD6f8ZvD1ueds7ZcItwKpM2aeycsYjJa0saKFrssh9qZvWGmYVI4pStdPxo2K3l07c5rs4DF5pnMG4I5cmoIi11Ex23C72WdWXiOt9UiasA%2BmNw8gVzDojPV66zTfcedjz%2FNgcJusRW%2BpVvxlCFerZlHlcXWk724reJCA2YhuJCZHTbwuL3b1ydVJqI5sfaWbffpsEK7vmMiaOG2elKDfnUo4EK6Jp8uefQDFBNNiXUO%2B%2FYO35mJExl90PfMbGyt%2BC8HR4w8vKyvgY6pgHDe8DDruMtpGYIV6lhn5pk5kaq4EgEVzIkYP7lR0kVjeerDwfzvu4wyWCYGXZ7lUn2kALkrIvKNrFCM%2FgW%2BP44tCoaxLg6Nv%2FeE7Atqj2F%2BN1zAW4lEu0q55ZuJtd78em1ggUEhX9al7ZAIN5jgnsE1CpxMmeCtiVTPPwLGk%2BTIq01tx2paJbPX5zIAohD61ojF94unFqpji4pL%2BOL9FnN6KAjO23X&X-Amz-Signature=82c719a9969eac6943acecd5bc076a66f67057ff4719c2bb5683bcd42dcf0c35&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
