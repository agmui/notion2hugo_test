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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOMCP4J%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDrkTN%2FZ2SXVIE79iYz3NAlQUHodRut1HRqbkkD58AW4wIgRZncvrLyMnSR%2B63QnYhvLrGN8evD7S3Vgr77gI%2FjwLQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FhIWgeZMCI9grXLSrcA7daMgLZVkLA1kND%2Bc41fn9dJEPcAOfQdKs9WHN%2BGF7Lr7O6E%2BiRrKP1mEsd4W9Z%2B7NG2Ignfg4Em9y8ZywwVI4WP0MQnvxogH9JkZqFFf5xOVqkEg74EtKGGb38llW1xVZ5qrqFCy8daPRVALuP%2FS8y2I2vnVLaZBkCeTYQHKj4EXjCCQoznazU0jjIqP86103L44%2FjJ0%2BVHZYitqkN4alGb8vzmQF2CCLamnB1UAKef9w8jEIqBFGaKshOxb2MeUVxnVBwrSvWloksa%2FxjHmdpfQHn2lGs7niHvuxgfhLrphg4l64EtpnzPr5VAGyZqAVRrKQLto%2BrUm%2FAEArhsjYOalKCVZELcq02450bEZUxaCYdZef2eijWxDpBUbIF3JrNpML1b2II6SQvK07vZP%2BF6tY6zjg86TXuRdGHUmKTP6o%2Bc1YBmaBKOvdm53eU0fupPrfLS69KAI03rTYI3oI8jqJcp9hfBxY7FF%2FdPpaXuYbyHcO0MPfmusQnHhKarwC9GbEFySDcvi1js377AaeoBII6Vd3Zr%2FP7b77Dt4DxNLpjC6ejSV5Z2btrS%2F3S51vkypS3HrsbjpXlTfF%2FdWRX0nU2mU%2FE9eowc9MF%2BHOLuM8dF8yQ7PRdnlGQMIXDv8EGOqUBDnLkaQTE1nXoVpnIUtRKeCoah%2BJnxI8pTJ2o%2FWfmKFi8WdZvqu46vDmfiIH4zeOnOyz9HBrYeS5UtStbQ2etvaLeSmvAMTAo%2FFDVhnh3fhnN%2BQQl42vQ0FqsuaRwo5InOy4feBtbws7cqidrKXR%2FgYr45WBLk3tVGQlKD48doJ9ikB0yh9%2BBu%2BM9SF8s8jBNA8D3xC%2B3yrWznbC4%2FPX%2F6EULGlZo&X-Amz-Signature=a7947a96a42c9f1631a898b9dfe1e7d01bde66d320b1166a08ddc8afc74567dd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDTP5E3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDNepNc5gue%2Fpa5Z52sYgJqAB%2FryafJ0%2FzL0Kv9jeOzXAIgHHrGBRU142Dgdtqdm2Zg0B7mvXT3n26NX6rzbQ9p3bsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZkSDcAiaYcXeovQircA6BhdpFKVASd6BRLxMt7z0%2BvoXCqulHN6MKY9ZPU9y88%2Fca2tOd91ztK8cG%2Fk7wVidghmc40S95A5YApOKkyTN5zXDLJFJYtt0qOmmxA5XRFpwOZ0zwxe2cV%2BTBWCyIbvj20w900uo72jy%2B%2B9fbfdxmrW%2BhFHS1Hv9GWOEXYv5gQSLRjKawNeBt5Pbnkg0T3ei4nf54vS4T3D8R7npuvpc2ITp3DuvYX7VFrOFEEvsV5NgQBQu7VBGGOP4jRRyZw%2Bh4UiC4yBxmwIzc3RlPrkAKrePTAGzAy6EVNuHJAUuuJrDUiFWcDSsJ5vP3u0PkkjVACaKu4B0y016t8I9%2BtKeb2%2FPdRxXdZqiSG0o3JCWA0%2Bc%2FXtA9BTQsp%2BFuytfWrNAfvhRgdS4qGEpytVI3JEI8yV4QricdsDKUSLqqUKCbyH2uxGqxNI6kOKN1bKQOm5vvlcJGlhb2HdyDrMWJ%2F5a5fJIpZxqapJ6EXFM92BqIoYn%2BWOzTSTspvqgVR4YPHvRRj7IwJkXwdxCU4CkqUufjz5yn%2FH%2BDrkmB2LZ5kg4gBm%2F0OTvGR5B3BW8MY8%2F1NxQWMBnM5L2fLUKvOUePvZfETDeCtLJvrhaobFygw5xODm0fqt9oalc9Ed0F0MPzBv8EGOqUBRx2uEmI5ArD20h%2FlkQ5%2FyvFEO%2FHL0EPeXHDPphZqQGAPbMxE%2BYqarF2uQV4m1Jx6r%2BoyH1hVY9b0fvgYqFehoDmwR22CdKJrUMCkHs%2FX9d5p6282eQjfqJeoMGPKkJJTIG0xpCVd5zV%2BrSFFJtjV%2FimuKC4c08DhFC6oV8UcQwgtfP%2BclzeR8oEfl%2BmSshUah4AEsSmfTtGCZfc625IMbyEGLfJQ&X-Amz-Signature=d140936b0d0a5b3336efe9b3850b63d978e93ebddb0388d40bf86a4f14dcdfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
