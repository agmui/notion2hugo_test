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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIFZEED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKPvAjWdffRhcaTUyAfTt%2F3AauaJXJseeUdqd%2FTpfErgIhAJxi1RzLNlDC10mvEhVBzLVR6HUiiy5oacyxvH%2FX%2BRtOKv8DCBYQABoMNjM3NDIzMTgzODA1IgzWr8FGk%2BopOruwTh8q3AOM0vQH%2Bn8AOIDaMdXPWL1HpM5%2FgV%2BI%2FEJYyAZsIWuFiM99pm7A2QVS%2FXeTkNKNJiGyNuESq%2BmsnYog3GCUqjSGcFh7C7QzUKcY8SDqXTDGO3mDTWWWKNIKIfLrw%2BQj2wz4N4FYI2jbAtOp72rPjBL6RkNDKq4HaSYkqmYmIUCqM5AXL%2BGP9yNviDb3kgn2W36V13Q3iPh7bQhOpaFVGPXBeZl1cvgk5UnSbNrZ8duRhXXm7ct%2FVDm62XmXJrTAVeyfwu2jylpdKTGe8hqePYfLkV3FH6CBqi28HVyV%2FzdYhDQMD1lqugoBV2QFs2sHUlZIW7kPNAcs09bcPPLn958RynyMUB%2Bc1F7so7rudNtDtnC1iKQyN7fRDTzyr8JCh045UmfUfyxvpR3zErxFQoWiWyi3gXXVCMvu47Ypss9Hyat01UGxIEzWsjsLl8aW2N2a0UneZtzo1pWxL1R9VByMu6JjGal%2F%2FlTZdeJ3i2S4m1kvyxKdypTF0XYmS4cJjpdDfpkJCVtyWv4tbO%2FLir93F7xOnauxQm9gdFAEP%2BtbkwpeKnhDzBowyER6ypgPZLZ5h5N9aBq8MIdWqHzWzrLNwGhDYeGctDtdnWmJOCmlryQQ0CQXH6f7CBOv2TC83be9BjqkAdkaHvK%2BQxqc528mRiviz481WWYuTNkpMzCp5c%2F%2BHs3Ek4ajyNh0GdpSJj8SSW9PlenGPbQ2Sbzy1hhGGA4v2n%2BVMNuc1nFCHk4DzbzjBON6o%2BjcG8ftfeYTYrkgbz3KEJLT%2B6v40kJA33EgM6pZfsJ5xPBprJnuc0BUQpe2DRTvdrkrETebaaYIlRYxSFEtAXTi0tXdO6WCUAwIj7GMEUnFzZBU&X-Amz-Signature=22b1c394e97807bc254fc59aee6dd04dacb12bd2b155d29ed63a69b866de4423&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDRR3DV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiZQtKdDhN6WEhqNbbcJF74uErp943hFhTMX0axel7BQIgJsoJzgr9Cu7klq0d4SKYMBn0YlOYAAgaEaMLKXLaNwUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJuUrWH8vDKOYAEzOSrcAzLoPZFs3ERE9A6PRqBMAr8LzKR23ZmEX274L2kJ%2Fo3nUCdbAKB2pj4aLebwpUYM5GvIIJx8PDHRt4O8mG%2BDmqCcLo%2B%2F9GYxIyLPaQJxEKe5Nsz5FtyWjOGfXuz2umo1Gxo7KV6um1vjk%2F74PW5NpKYv%2BoLniOhAIGYxAPVpng9JdoJa%2FDaDKL1%2BIHN65L5bCvVbwS1%2BKTgd0svJjHqStQ0dyX%2FtcK7o4qhQjGrqqoOYDJoo37gs5pygzmMQ90gdB7uu5APb1yVndQz7lEDMLFJjVO58G77nJeBwinbIjSL0eLr5ypIHxaIkahoPKYDSUVaEn3HPnhOLohTYbF1wuHPj0C8zUaLeLqBJx%2FRGCZ4HAzsxS4f33I5KSWMfFbuxfppFhi%2FiGMw7nQl5VF5B8Z4V67e6wmL1aUZj2ssOzXlrAvLNsMylmvitRIhxexBKbu%2F91auVHNpElsMdPpTcfI1SExtzChhajXWnMXfJExuQ9omhRwD16mfVNYJcXMf2sbEduNaJCMgME9Iy%2BohG%2BgIsLDhR4WXJJzGMaZNsXamJ10Fo%2BpTIw%2FSrq9%2F2rm4hmL8U%2FazOY1BM5DdaR%2BOOJMoWfHGPS09ul9OA%2BAvyoI%2Bmgnh%2BmFnzO8%2F70UzXMKnet70GOqUB2rgAdzV6P3PGldCt31EB581uIVTZe2muUZBB8B0YM0uAQQTZ2P9Hvx2ebwy8u8amqmS6czflT%2BH2yTdeZxDJ4zmhnfI6a%2F0benqri8eMmiIdOu4VwDB%2FE0ka9cEwo3M8bqO7T%2FWovibRy9uDvxi5LHXDcPdWEKtU2IyQUQIEos%2Bn1Px6m1JAYcGc4CRAzx4TdBLUxYkW4Uo0j2Q5IRrfIKdIslNb&X-Amz-Signature=5251072f1c581d54a8d8cc65d50af6341c8963451a09b970522be2c8ce162e54&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
