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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFHUZ6H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8bizgy%2BGF2u4ftq3u5IZUl9BNPxVoLcY%2BmPaUZOopyAiB0SSOC7NUfnNir4wY9Z%2FnXXvGTUb8TJ%2BItExSsrxX%2FoSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMIuiSkLTopODPLThqKtwDorYm5yNMtgybCuOCUT%2F8wIi9%2FCFR8irW%2Fsi56ZyRJrzZCro2OESgXUaK9nIlE2pt4JszQGaVCRkaWZckv9%2F%2BJXPMizt%2BkipUmYPlvtHZyq%2BhdzXLiThjtZNvoa4HnTfXJrT8y1Wth4kgLOuzU7ZpfPKTphermmScx7ju9KrcRiHT7nsLo5TrYuU6z83S4sYogpUR8j1FXEjZno%2BZ7fsyxqLrZAA3YhHXVzgL%2FzkDcyizy1oDZITdM4FnSErAs5ucQxlZ%2Bmc6hRAIy5QxIyWcNV7WeqmkS%2FaPKAgi47qittP9mUC8JgFhW7ouFz3xFneHaXRmdIIedElNy%2FSuRvfzOqt8xqfJtLJBlJ1AM6K3iGgk2xZOrzDL%2F1JHcO10wJsLi6dJrF2parDHhdU9fH%2BE61b9AiEJzhF%2BADixhR4Xr%2Fj6Sy2GI1gc%2F90im6%2FQsJ61lybjQToHdUDxNOnyM2yaotSKme5H2ky5lv0ghT8Y%2F87n23VCnhojffmRlXUNGspg5Si0yxc8ImGFRomDUV8O1dZGc05Z7GEOV9YGUwlH%2FnHYgdnijXtBcbZ0JK0SiiZobqUlAU81tXbfEBG0FNIB9twAgNMEzkaZKGYDehDIs9Zmy1BaMX9fFjl1LXQwmoG6xAY6pgHab9NAtU29C4MsXxiaihccG9M%2FUleLsU%2F7ZHhV%2BkYnLpBtDX6HT6kqTtWJD7kxGC%2Fwoc2Cu7C8HO4tasZuOhGFFXKhA3EahCh%2BzYBxYB4NHYay7ShomVX%2F4FgBsSpMx%2Fj5T1%2FRNldEfO1GyPXa1SabLuofMDF0fRQ43WhjqRuUZtkvDwJOBKkO5hD2Imvu7Uw9u36Cg2lBMRQFBjArmpk%2B79b%2FuXoA&X-Amz-Signature=65b354ba64213f66a755d137a991b9aa6f4bbc275e571a85df7679cff9cabe4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YOKUKK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtOC35z321nPT93HPlZhxlBhtHsaiTMtJHvLahuwP9VAiEAsrNJ2fZN%2FXJ1TQhcm%2B4K53qEDi70pG9LXQojLusu5Z4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDC4zlHiXO1E1ZxehcircA%2Bq8NpFsQHgqDrsrOE2i%2BwMio06yorbnNPE896SWZfqgHdyYcVgfLrZFCrBf1e7%2F%2BTF46gIE2DXbRL6WRHP99LKuST7zziqAfMd7v%2BVp34cvwLESec8KMUJ%2Br79HyPUK0xSwftvUckJUkdxktiz6jk%2B6dhWsh%2Fub%2FeJjhSgPtA5bx6%2Bur3v0dx6SAamzLFtf7JE9h9tilN9VB6Bf70l3LrEf14VKIvhK7VbM84Y2jdDKb3thr5k47pgYJiE3%2B%2FBZv2y0fCnuy9WK9afnXBBELnD4A7W22Es8eQi74ka1Jgcc7Bkq2D8bFpQy1d2hbRYtCd%2BgZHZM8DH0DhJXAL5tFQBJ61K2W366hFl5HcJkfj7y7JlterU4a2iyDmT2s99Ss1MRrIo2b3QPdWb5EkOxiP28j1UsnkdnJsutHaI8cqCzeAzEBIg3UTj1OKzz%2FMVRYOhXbkmt1oKKl0molkhJgzF1T80NtAfnA%2FtD8xdJWOkvl%2F7Sz3JVVbDwyafZHTKx8%2FqTQs2BFsTcesKZfSQND31yBULuOAI%2BDQOGlJN6NXXwsLvc56VmdN7xPGJvqw0tob07C2%2Bh2gqSo3CfcbnlihrlrwWeHi%2FX5tnw78Eo3IeJQFXcapNaCgfkWtLHMPuAusQGOqUBoV3FaeEwfNSSzfUPm%2FT17HqL5GQD6%2BKBfVAZHrpXMX2wuNKhgunkClJvJ8XtKP1LMe7404EK7lJXCnhTsoxv37KD2zp4UGYhdNE5Z6Y4Dnx1rREiUf%2FmdqOocqjYYJl1AHPxUvdMROMy7p4Nh5QPgSkLAJVFLaKKeGda292oaCOaT7W%2FFz1ZZIqecve3pU8%2FGzWqnXOF9keMS8qXpi17fj3Drj94&X-Amz-Signature=908a71d70e041c2c33cacb1962f68ee0d362377297da555f5c85428a0fa3f27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
