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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343I5VGV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjlnrOASQ%2FihXyt8K3IJtb7HrUjoXbZ3MirfIxI%2FQq1AiEAjVNZEr2TKcZKs%2BROQe1XJaFg4eTs1A00%2FlYL91vnGnwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC3CsjjeLcKp4SSbSrcA0fLAai51aRvg4V6Y%2FIb8gmKUSvw7OQ4P0%2BAzXS7hut8e02YQf9EHnBC7aKnmFt3VI6HHmUx2YXPcL%2B3e7s7p3R34sH2sJjSQK44uQwbTUtqxXD0in0xTKxZ0pE0DNipH0AxIXtAxBzaWiabtComeQ7LQq1qcEp415JyJgKQ4ShN49oIeu2HAaEQK3kOiLZ9nEGdxpOxVZg7kkxYPuemRHZhom07A7%2FUNyxCL6PizQwjRFdnWMNBxAG7EpctlXowlDlmjVmgaDf36agC8tNlSuPaul8%2FQrd3Noz4NDnY0UuHawgV2M3%2F84jZSimmp88Z1O7Rk%2Fd8m3uNWW2JD8cGrNHyXAqQdTHK9JEUlUzIbZqiIBlPGAzqASbaiBZGLny%2BZ1oUbdwS4rn%2Bb3cHkHTHVeiNyVIGuFbd%2FybnvGsPWKj0CthUueXjBqpnCMcjEYSMpDhClgW4jql0zQJtrjcT0JJSzZk3qkwv417dMnCYfDjm3J%2FuTWESrDt%2FATGsjaK%2FF0vB3Nv8Mz6%2BPz28kWcALQXRtStiC7ulTv3sXWbi45o6GCv2RWj2HtWt21tka4WhW%2B0g%2FycvIiIX5mlC40UAZ1D8L1jOM9TT67OomPeb7YOlJRZ9EWenC%2BIaLgjuMMH%2FxMMGOqUBfPd55r%2F5brUiQOufZeUh81oYrMPEDlyMcny%2BH5H9xsnaw%2FLGY3I3aSpu34Ng35xOZa%2Bpz6QZkgkPoM%2BblaqRFaQYpYzhVbGvLD0EWXw%2F4FqLtWtYoHDIb6Gli4Dt8NYQbwO3Sp5S2Qj9Pwj13c579Qfm6amkM2pw500C6FtAqPXPp6dN4bcTvj%2BTp9gCwotuLdEwgsOytXmG8CAM%2BzemKueCxmED&X-Amz-Signature=005253eaf6e1eeff145b4f80137b1c387cefc1c334508cddbe2a45af5be49c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKYQEM7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTx9kGE2tqaztFLmG4CWlgZjqGIYfRV3CRykTHkgQfAiEAiA7KY%2F2kFqhF0CeJH2CFcRBl8RkMEGNjrkHq4Fi2ZToqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLhs0oiImTKjdSs1CrcA5LvLR8S4qSbQg7eopZxB8jem7%2Fpa8uOk9f9vZhecEyR1QSKyt3NotG4ClXxHNd7ZVUSL5hfRm7DUATWDdkHMD28Ic13upzOKnay%2BKXc%2BSt2WcZFAREfsxof%2FeAo%2FAUkzJEgO1eJsv2AZPnso86ow27YqWPUaFZWPXnGJeXs%2Fd6JbjXZJumk3O7hadli%2BS1bGK%2BXiVdFmbfk1GtCpAOEdO0PQrUYpsRpZ6ev0zUrU5NMKBwWuswUyW%2Blc5yj1LLLnqtShYkdxc0DeGfdkUcPXbpsZz35W4zOhuQHLwtIhMvVfd6VLtu7pCMy%2BDfhXhAGCw99%2B98NEluWut15qIRuc%2BO%2B%2Bys0yq6B1rnneLoEkoaMNZe8csfr5ydFloS35a%2BX3f55TPeHbtDGyrFWr%2FwuwSlJNe2XW%2BxpiBFXPkKnjQZOuGuSL80wq5Zu6muSAR0El6qY%2BXrhi06XXw%2BrBnCt4a%2BwAtyrpsPXctGHBr23lEFbz9%2FN4WEXuat%2Fl6m0lfa1mgITLFgIBnfAcw7u3CTGRuKVuqVueDB74VJug2sD5MjIhLBfBhpz6Xz3bS70%2F2Hsr%2Bbp6KNNlx%2Bf5h%2BtqVi8R99GWAfFtRaDqcUFhwI7OLD0nvRzLQ62Iz451HG9MPD%2BxMMGOqUBaBURwJ%2F8syGptmSdJ9uldOR80VBIil49qKjfWWpmbnLXYQ%2FL0jxty8OlO37ffcG0%2BONnP%2FpmU3GAMpjKS5Pa6FoZtsGf796TB%2FknZu78oWtFYPPaZGNSkVPXdd%2BDC3q4BQFQ2xTgzNI%2FToDL7XcQkvY%2BvVviMKDnUZXa5TJTi7pcycrnw4dzMsW5%2Bd6262ERi5VlUSD%2BOW23pKifXamxVKyhsJ1t&X-Amz-Signature=87fc0756098e9f52f01e8d8654b75b70c1d9d2951bb2a71db23452d6815d100f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
