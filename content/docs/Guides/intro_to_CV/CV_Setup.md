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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOGWBCJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDiS82i7%2FhU%2FVOLv4pWSy8EdkgKvTuA%2BkM%2FvG9FO1qG2gIgeMFJ0G9ZoW5RlyZZd9oSuNeBMeIhAv6gUFvyRBMb7yQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKVmo13uonlrEbikyrcAxMOxyX2YRrE5I8e9odbsFBLwrXsoImT8IFizVTTDSnFNTco1LIW5PzknDAKBhddzERgNbbPHZEhRJRw75XCBNa%2BXBBlsao2m5dETeeJot2vHV%2BW2n331546UjK7MzAXrwsNx9mb6j0nTDHcQr3K6u4dV0arRBAmnGjDjrC5AZtCnS98Rvj9VvYjo7z%2FFHj3%2B%2Bo2qpr5B%2Bo0IEw0f5oo1HSc%2B7M0pgVuStFjtwAfx6sBt59pmBet5R3i7l4GLZMUhS74UrufsxLW5Hy9sF2b%2FCsAWN8sFNSLSxE%2FNFjCxzdpeht0QNtHGAMgFyrF2LIj88%2BxYlv2HOLi%2B1LoFd5J0gN%2Bs1z9PvL2UaLRQhZaBz52fIV%2F319b2VwNowrC7smm98Clrl0iWOQyURStiCWnX4SAE38U9l4hYiJloGUo7xyA5RlBCPa52Ta9QX3gjihA4BcRAmAd6EtBpv34ZCOzWaINemHaTN7YvYkDV3y5Kevs0Qej5tA0b6P7OEYPHRRvFD7Qr5%2BjhmH5BgxtDgX7f0iQl2TAJaaHdR9qb%2BWg1sP0fD1b9JurlQX8ZrFmtbOD%2FjOyLKWAvPX%2BOQRzFNU9O1mGnDbn7IUc8JBaBi5kOAGfGKUGuSrCktEthch2MKDFvMEGOqUB8Isb1Q1drqohexnpscKbOZN8XuaKlEQd7mxEgkkcD4w4ghx5oXdnMUGPulG99wFE%2Bk%2BcbkZpmBGvx1MeztCV93I%2FyrYR19nh9%2BRqn7rlvhHWuG%2FENoplchAqe2v49M%2BVPUXgE3BVDd1KLuCGITBncit05p%2FAn1%2FYDqb5VaQctR5TGqSDdEAGPRMeC7IX0Aqo2p0%2Bl2N02%2FFch4zILNMk26Wp5jUi&X-Amz-Signature=e5dfc99c5e688a1f6b12d44675a4f2bf823e523033cc01cf033a892758bf5bb6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KIPF4N%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDsWHKujnWkzY666Fk3GHXwyjRWksQ2IzPjMlAAwAj6twIhAPAYASJjjiGjVNs95cu%2FW0Y5MhlciN%2BtvRbxjswKnIHIKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ6BMlQE3oXwGmnaIq3ANkkYlo%2FHEXA%2FndogH%2BFH%2FJwlWvCHx1XABddKxImf9epY%2FzVSY%2FDfLp4N7gv7IuPEvnNlcIz9ROk2EaHxBexgpsOuG%2FQ9U%2BeYQcSUMOXaJmyZRIdlrQBNA8n77lEBmdV1Ytl2TLW1%2FmZ5ijG6P%2FFwTe%2B8coPxZMwkhnQuuVrbyH%2BoRdgaXwirK8TBGf6fwYYOhOoLe3dzge9KRdXUXsnQ2bRYASFYl6dbJWTOJilRbmiHRGhIlkx%2BsN4MQbuwJn4TG%2FsS71HgygcCxfyhjMVDsdHS%2Fj1TZltBqJS3Ppu3L1uPjuDMBeEutifgYbsqnqf8XGzh59yhTf9Yi%2Fo5tjcZKYLa%2BJOmNbFclU5Snb7v0C5pvnCgZ8FMCJcf9WFIj3PiKXwCdl8C6YEYZDmLkTTY6%2BjP%2F6eVevLk3djBlfIUtHUDFYCa%2FMcTJCBe4%2FlYSxEavjHYlj1B32SsmM68evwsXLO52g8r7Eg6ukGAs8WNcimzeyWm%2BJ3kNfK2RX6qN3OAMD5B1SmFKBNix2OCU5wU92Mc4CxW%2B9Gxv51De1AZ76VVp09LDj0QBSwfpgVQzQ1C5i7hDBqiAGVN0tKgIU%2FWfr8%2FVOrD0L9mYRE%2FKXdOEPnNOabtQU7Snd7OXp%2FjCQxbzBBjqkASB%2BD5wu6%2FVjL9mHrWkk4dYyhwCsLD6RDZSUIshuGe9ww3mINN4Hoa%2BDsWURluHaOTZB4e8mwNcQxeU%2FwwzTzV059HqsncdhRYnt8XQmlJXOerC616CRKr3qeufPK7B7r1ygOGEtLKUnWE4aYc9iX0nPxGMZI%2BCVu88hglBZcRvgLDF3PFXJubKieMLmcC0iFZe0AiZYu0EJMsU%2FGJn8G7rv37K9&X-Amz-Signature=262ab0e6efaedb0a19461d51c3d15f431d7949d7f0cb6426e7bda567d1deaef9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
