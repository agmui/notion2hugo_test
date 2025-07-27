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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT3ZZX7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAUUg5cpOgvjYAPdhbqOnQtFrADbjFtSlVOTTxfLhVt7AiAVBdVIELILvouXRI8qaMMVXE30aJuvinA29Hhjx42CBir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHTCgvsDtENe27g29KtwDOQ0PqgC4mBQOq1v4LKFfyYZEyyXrf5MY6%2BVlc9uMiSgXz26g3%2Fn3CE7kOU9dFzISaP4s%2Fl%2BXv9PXYTgYwki5Opl6V285xX226V8ZFIJLtDxUR5Xj%2FrbUqKRfKs8NG%2FgJLrq7mYXuDWeI0BQMd4WSkZmRJqxMJiKCV%2BIvel7fTEhuVfuV1YiF%2BgN%2B7Vza30OIEucFnJHpo1A%2Bjmsw0x6VJlbtnLLAY22lKLQjt23hOzFcYCviqk2P0l1ra2%2F7Hym%2B9HLPgWsSBGZ1QtuGib9hb1KL2eJE%2FCh%2Fc1Pz%2BgOHy9lfPM6V%2FF859eDhUTt7EABGkMM88zCIN82O4scyO%2Ffv1dLcBEKN7oPRjdEmeaYuAAv%2FTbQDiBmshWyY269tKGAtaIC3Ja9tOEmlfkbmj1N7L%2Fg4sJ2M7ugFUKEcrCV0dSFsuhIloFuhdn6HKnlsOKRDN8W%2BwyrU%2FgL7TAOWWtZpO%2Fi7IhfN78d%2FjG9%2BetvwG1NnU5ASIa6xSztQpx6n54TG3Slo8VRP5D9B7e%2F451XpIoqEvq4pE%2BGtB%2FkcV2Of1CzCrW0GRjbtPD%2FBUzObiAyfhb%2FrvU9GLiPpnRIqHEZsasLn17JJ9L39j%2BBMZX72nbuvXy1wfhLXaJgRPKAwlLuWxAY6pgFKLcXk6jlXP17RFsei1VWWpprT33rGqGa0pZ5gjMK0VItjQF0WqaGEUIiYJvDTg7LAUQ4%2BomuIZHBiAK6Qz2%2BzkHETWU%2B05L9NNJRdFgtHRt3i4HJzomLFw9L84XWUVhA6j%2FHu5LwLiKvCJviJ5bloB4glgX6nhn3VTIL8m%2Bm13%2BFaCulqr3ofrO18%2Bp79KSuFfWHOYXlZ%2BQkfkyZMx%2FkPvgQc%2Fp5m&X-Amz-Signature=4ed10780e54119aad08107853e5cb75d960c93eb0cf80ab864b004992afc9f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIRQXWK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBaVXQIhi%2Bq8q5oTUU%2BbIaNGjHBvfDSCmR5Yi8X6Y%2FW%2FAiEA8F2AujD0VZ9ZUX%2FguGpUlCTqbng9NJjSS%2BqKJ4WZHpEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDApotTys5ogn%2BVgvlCrcAyoBpI2MxIQDKW3sOaFiMQ2R%2FdmYjDwnOc6brzn3RHRqqQir%2F5qHXmZh0VGX%2Fy4QrsZdiNWoUsfV4G3oB9dnfl0bHQL1ZcdxpYQ8UqN8%2BFCdsTgbnrhjI%2FxAFFl7n2CU71UaJ%2F0lwOcjXIFb2J86RKxpHhRpGX%2B2WOodJwhmUFw%2BmYB2FV3WHGK8qeVlKZCFZS3Ih6t8ZklXvB07LaXFB2ta0b2Vf71OaHl%2BdSFTQvZdt2AeJ6w%2F6wDZTpiffzk9Dwc%2F5e%2FG0fvFA75pzHJWkXX6AERz9ZqJ2bOEEIbP%2BTknEBzdrJqrDvUz7T31CfTI46WMjA9QNj0CQ0xqaPtWxdmV8kLtviYSlUoTTkZRFfgmaH4WKaZUrrfZI7wJa9nhV8FK3zRNqWiI4MqFA2EhMvmMwSY1Q12TnzlRMFLJfW8jz4PPRHAPb5PP4O%2BWMF%2FLWtVEsUit4bXSakp%2BbTN1jsjgDJC8cG4ycLyH%2FOHeHb9119irDgVWq95oixI1dZI924aJ15uOMezAIx9l8pQMhADVa%2Bbn5OROGmx1JkSAPFypROnmvy8910Su6nRzbGQfYeYg%2FHh5tq6fVoJRCLl6Ejxq08z3Jav7tbLvG%2Fe7eleOgfF0q7%2FNpil9tMGaMNG6lsQGOqUBBjo3syCqABP%2FEYOpE%2FnyeKBo1GAP4oNYZHW7iuVcpBN%2Frio5uyvUVy050lPhBEIfo0twpTX8hsGzv3gsNg8hpSSeGbbpb3uqJjpCwYRZ%2F6zqe7t6i9ipl%2FDc7aB%2B8e4ymiaZhr50KJxxhTcuZzmdGntM0GPC6JGvVQtNLkNiTWyxYYlkhVfT1ObZ0QwXhAmMaewXExeDj1hCHnMJkkFhoxkbxEBL&X-Amz-Signature=b55961beb65d27f2166e02e4eb0ce10508f81def3bfd3129539ca4b3e36d6ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
