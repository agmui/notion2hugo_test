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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AY7H3X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9dwiqn5yedoyAO3sQya%2FALyW5P8aDYlByTczCpIiVJAiEAmLV0AwbQl2EqdKHx16F5JkY4VLzzElaiJappdDhy62kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2F4IqRIlc03ZMjzqyrcA4DXxHIf7YsWunyP9sD%2BCOTZ5Vhg3dwkaS9C3vFciera3R7cDaAHY%2FY41Cjmg8G1ypbZWPGeH001d4HabwCupkwYTMgO7BrDW%2FmWhwOcwrCM9W6ItZsRrwxOlHnzWSLu55VGu8jcygXrJv3%2F50bJStwUDeQ8LdTtAavjqrYwV0Wi8q%2FSCuh%2BKkumt4Gxg%2BpdYgcktz%2FVuhXpgRA99WNiTY7rNyKRM%2F95Aa9raAqG7AC%2BxbO%2BQFCXro5bRextOZZbby68Bu2W8EjiDOebBdTFENtLLOXRbNdHiJj7K5NJE%2FRfjqt0pfDaC1VtbTpyqFwY9e1THp1rlaWIeJzttVGsqWopGJDnUEDKcPdkYhP4PDJSXLSHt8JFOmqo%2FRL6wbuOwdzPav1HNqhsEdfw1HvJojkaqZJIgz3mKHAC10PzrNSCQwfraBAkNyVl1qoOappyQ64cOG0sJZ5zHYi7vk5oIqD4fVLcG8HkljbTk4ZQCIJgJhxawS4%2F%2BaBzHp%2BSHEshn8z9pxp2mg181PoBHiaSvOF%2FpuQgK6l6txmdsZm0t968j5VlmDARtmaaPwPmWWn4TotdBuhNSxGOQW3wXLMJi3olEssIGu%2Fq6yrSDA11q88%2Bt60ILAu5CVnWtEieMLyBhMMGOqUB3HTNIz1FydTyqum1sVp8RgJjpIKsLiinrGLzVhBepfKTRSF3SyxOZCvQoYjhtR6Gg%2Bd17dF0nNVGK61Nd3AQqM1IZ%2BbUNtT7Id6RgxXYHcVXIv82DOpugC9BUoGpoutu%2BpGWONTi9zhZAuxsTpmBksIv0HmKiMTTA%2FQ1U5AVoYYcgiQ34SfYz%2FojWFVcC%2Ba2uOlpRM%2FDffEtDf1Lh7iPeQmv7U0G&X-Amz-Signature=5d9bf5e41224830b1dec55b5b7b8bb34455a188f2f9720f9ac25a40dfc1cd50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZOLZA4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkcUQB6%2FxJcd2cLiUkyhh0J6tA%2FpIZFC4Pz5Qa1tS0AIgHqCmPtVJ2pYGMvWtvr%2BmOrxNmUeCCdBQzqLSch10BHQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV%2Fe7DsEQB8auy9HSrcA7kiyh76yV78Bfw5RIf1E9EES%2BjO0HprBU1rPz15dsq1oMggaf3Ni9xVTFchZr1eCI8z0GAsyrOI%2BN%2BZ0eNsUOZQMyXbFW1VmOTF4cahDWX5A%2B%2BK6Z08TQxZwPv3XWJsFVuSE3FjG16fUJvrId7PFDgu9T4oaepN2DAb4MbCNACNOLkKrKrwCiwNweZsL%2FE1vrJqJj6zNuBA%2BAWuHD85XFv6f%2BNUBxyf93R2cgu1Dl6NddBMCcv9Tx9bfK8lyr8EEB2tuC24T089glfNjrLFH5e8CQmRRjcv%2FKBkAiRz2znyKDzvXaz42vtj0mnHyWqVaEBDW4suPt3oEqRiMyv3CPetjmFBFTykRdKryVl0BS7F8l6%2FHb8ZJcxI5upyYij8Be%2BnMfPBKHTSeZcdXF6UoMPCWQOC32n1IfwdoQyvVp5pdHdSgOfHwpesQamqYRtiSl03tDJfJGMCW%2BWNTiryl4csyt24Xx5tLkNKEBCj9oMM6ZsW5hmPilep3gIac7iZKdu8R1Enz%2FBRK%2FjhaHZEjuOPl%2FSCavN28G9%2FOCDxau0gngSrspjECYFZ4YF8TbrNQMpaMvmPKP8xB%2Bf1bcKYieDpuJKKlgrZQQ4dTcE6i1V%2FVH2SP%2Fbu2AEbfewyMIqnhMMGOqUBa9spndBhX5%2FxMMFnxdJ73byo6jNUOIPtlpuy0KcARqYsig%2BY5G3H%2BbCEmW69p%2Bj2XHs3lh87Zw1DNUeo5eAOeDwsYLmHFPg1%2FXap7sQ1rpf2WfaI6MTsKbXusTX6Bt3lPMf%2BSOqAG0YcsWITmmCZdvmyNE4cBZSuRwvuHBYpWsw8Ma%2FbkLCgDQTfMkCSqvU%2Fj%2F0X486HjhX4kmMEoA%2FoswOciUPK&X-Amz-Signature=619bd87dffea75585ce71bbf5ec5ca5b02a77231d1e8d9dea3b0248942d7d4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
