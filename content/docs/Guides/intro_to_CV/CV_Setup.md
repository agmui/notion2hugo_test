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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEWCCT4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FYrLBwE%2FF%2BCrZjS089sqQifkSwPKeqLojDClEhxc8PAIhAN0TotZK32M75WYvKlxbteWG4VoM2BpNlyCmaMEP2nSzKv8DCBcQABoMNjM3NDIzMTgzODA1IgwrYNG9mP35UHzorHgq3AM7nN7S5NzelOmFzVY0LjvwjrwcMUBOV0tdidOyGXPe4MlihtA6dzBAgnCI9B9cgSVeCjr%2B9FNddJqy%2F3g8cPWJbtfoEN7PW1tGbJJtXBDKD2xOvCwOsThl2LL4tSV8RneF3SKecdkDB5SIs0JBrryrgLmgMxbxAPrupQANPDtjABiroDe4OuEwc5ZqIYRFAjjc6u3DVd6IzdYBhaf3vNDyXWeHGhkzWIBaUkw0YH%2FaTIkGbC%2F50hVBZrjMMl%2Bc7ONdVBo0k%2Fldw4LCZMP8MumID7GdFXzCvK8Im%2Bgrs%2BZtqvpkS8lbwGvH%2BruKDny9CGGR0wFhbzgGmftvTAYpyYMg2b6buyCziC7nC7bTyAAec10XpxvU%2FsqJ0YhiBTHfbHcfThOgnnnNQU%2BkM3oubpbVtve9OllE56oYhyJ%2BbAPZ0M4g7k9Rr8bK497mMoGejKh87muR8oMK17ErueemX9qBC9kaWwF44yNXmZNqEcBe9XA3Fk3STtq3ZaZUs%2Ba8pssK9r6Q1BC1CECouHr%2BWAV1K8u2piKB6Lk1hDJTPe1ZpFzju3rVa4tsG%2F2s%2BqiwUEn1hUMA1E5ODfxoGUjP69VxRRnqoBMcxi9vVKOjItqb7h%2BvdRltVDa6y5OHlDCdj4O9BjqkAXoYT4D7VMIo7bUe6MeDV7WIhkiarn%2B%2FEEAgCUC8HrKsd27MXFzHKTZJO9Qy5DOPtLZBfpcNan5qDO5S1hwRYa4486I%2BdK59qutz9npYQQxZz%2Bd3d8PCAAINJ6rMncSSL9ZO%2BzQfN%2BdKxn3zkny%2BVNeCatYYtUmo%2Fx%2F2CkaaygSDg%2Buqh5odDzeSrgo8zC27r5RQRb0gWUauoRn2kiAfDqfUj%2BkV&X-Amz-Signature=5d2d4dab7eb8c89b701a6abfa82949722e9b53bbf35290c04b365d66f60d07fa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GW7VIW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FUh5648lvM8cnLnE0lhkzr%2BVXF5yo3Ap%2FZ9FEthlYSAiEA8xrO%2B7KTE3v810%2FkbEDvb6vwxc%2F%2FSxuEmMWBM%2By2A8wq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAlaZnEngA3n%2BujSPircA7m7I2S1wR%2BWSyhS4wPpHT0waU61qXX9P7kThitGORMLeCS2apfoafv1WTrKQ0KmFRhchBqmpyfzcWIhqVu8qDWMrCCXS0yYlvYqHQLOanohLRzCkNCs5VoBSTVcCBYVNzoosqEoC7x3GuBYErCPyX%2B4zNI6BaidjHVl1BNT7vZ3CjTFQdhAKvarj3RuOV1HR23IW%2BWmPvo95BBfCYFgdK4fEVd6LOMqWnDEPvANpzGSJwfCtfrOGwEg5vv5J2HthUSc%2FBalUYts02PkcAYq%2FNAk7WTusu6QuOusC7mAhYIc7Y%2BsDiSAxTcrCOh0fPiw9S4A9gTmofOoaHAUPt64jYNl4GGliAvf8vFNYXlzTNAwqdfLaQfEeYfAXSsx4d1FoooLZDQQw8COpsPKvzEqzYURRidsGci2Uyyr%2FQ2Xeb1%2BsXuoDfRdUaX9K5TyNEDPNRWQe%2BtBNknFvwijhYPJJsDGsvADlRA1r2SIsW8NvNCU%2BhWZuRn3PH%2By0NV0eqM4Z1dAMbwP3%2F86Z4K0mtam0NoKPw9BKcYJeIGGbROXvEsvfrIFt%2BsFvT6tsQ8d2ahgRB7C%2FDeSW92oCu60LPXuqMWPMueqIlWyaRHI%2FDnJE238JH9mWP4bj44zxZivMNyOg70GOqUBA8%2FDl%2FGYzQluok4LwvZt0p6IHZkOKBwWe1pwC7K7Q9EucHsKDGkHH6NqtRkH7ieMugFs1%2FcVqCnPCuHcVGmogrdy%2BOy2b%2FkOVuC3SDZWnmQK3Te%2Faagi1WsfukeoUIpZhsvg8UbJFBr1erOhI7JOP8VI5dciq%2BRELccZjQvsW7fMsLTGo6fGcAvJ7OB1%2BSKenvEZNXz9lIs8HtrtWqbPA58cFC3g&X-Amz-Signature=53515cffad859491143ebba5d6c8deb3544ff0f6b734824b042ee4235ee01876&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
