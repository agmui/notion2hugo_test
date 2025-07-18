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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76RYRQX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIG6YnhQnzAin803%2FKuuH69Q5sgJEhpwd6e0rWzD%2F7u%2FWAiEAkfwEf3GuDe%2BYQs5cgEOKv%2FK19cehCeMLE3Wm9tdSIIYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhgGEiyBWxzrexouCrcA%2FNmwLsPAZo5jmRSRUxpPhitbfE4zx3rsWiQc8%2FHmssW3ADSbOF0Uk0rws7m1wKy08kYNjGIcBE74eRtJY4N1K%2FkWPOqDh6ChknaHMIB5RxXmH%2F3P4f5dSZJCKLugiMGPWSd1l7CTvhskiZsX%2BPHYV%2Fzwwe03SsOV4AmXNjgo7DLOPfba2iAx0fI1%2BR49fSYaUfiwX9q3lqtjsND5ptFGJGsUUJpD5gqzrfdW7GJlamCRTEObkyOfmGdWC9EA2tpza5pqs%2B6nlkxPsFjPfr%2F9R5mnnW%2FOnEbHULgEugEeuGBu86XMtIWqgOOMDkMymFh66dLREPuBDO5%2BBuBk59WJtV8k90NdrtlA1J2Mnnnt%2FLTJP5YXkZySLMZIxLx6Idnd3jvkJyT%2FLVVYWPVwERa%2Bl3IhQfsR5mNCH%2BhYQsUekRdrS75EednOQ6pSwaexiTz1EFLBCW6%2FMpZTMyyzwGUCbFZvNbkNXMPbhp7HpcLzUixUEE%2FhRrMncL5kpRQMI7MuQCXCdJcqoocez51rgL5XtR3%2FUujlEdDXqo9KsFvQ3ylimQz5xSqQ41uT%2B0ZD1LJCN269Gm55yfkq36l6vWt2l5ce%2FTJps3cgxqKBFd7t6LrUjxL4bR2wXr0n7LXMOCv58MGOqUBQmaR%2F3%2F8g53HhTxUlzkSyIT1RqqbfKm2ZUSZ52eIkmlz3M5O2Qb2WL2pV4xzIKiXhbkN1S4Daj8TPapUZFxGN%2BYUnI0PadzqEYV5UBvTZ0lM6CrzdlZSvDHUuWjftTVzRRNvqU2Tp7bDPRGsnMmOaQ8SLaM2AHRwPhacpnGIuTjriQQr6XXc4SbPRG7Pmtkpb8l7WK5uZ6tjfIttgghTAMVk7R83&X-Amz-Signature=accde4d10e4fcf10b9cad708b8314539bb28d4bef34324fd0aa9797662961a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6HKR7A%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2BtezGJKuB6t87Xqhd9VSGlFhDPwqipN8tg4tTBWwh5wIgeV%2F8QVy40yqzEliMB6QE41QwpftHTqauUMa7l36rfdYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS%2B31XfvTr9h14JRCrcA413xvtXtybh0ScZWDz%2BdhHKVYobt5pd6VcXxHpWLid55Rn4fRJrTO4fW8%2B%2BGEGxUsEmkri5TiCQbCyG3s7O4C1QXnPRYXpQ%2BCRAZeK2hD%2BiAyGXbJ6kyCaAxmSNuiNjcTJff16s73zS8KFLL1v5kd1yHkeH1X9Fk9f95ZVTKzGdl0VzDitU70mP7kFErY%2BuEGTbAissTxds2u%2FxJvulPH5kEXQxoT2fxq7zdW93jTUBylEm3fP76XkqJGfA%2BEOqR8iKvTVP5H%2F0T2Bc2t6Up%2FN%2F5vhfxqBLOxtNZ3rmXvo%2BLDSPp9Q5ZAJjYmMP0pkN65O2lcUqOpFHzJ0nLjIqFLXyVHjncJMFYULQwTLVYznYX9x2xFQKzx9Wt%2FOjPd4l9XojjTL8fPgaY7dR8wmiDbE2JKxjGKMgrLGxEMKUYH%2BLGhTpCdjJhXd5MO1U7gZhX2A0lSkukliWRajybSGVBF3hPqujX06f%2BFHNGLn1Xxb80BQetBRHjPP20043VpJn0SAs7%2BF5%2ByGJvVsyFWHhcCowQP1K0hQQGr7BHshXw0bxaVNM0xEyA8Zg075jlWFRBtqJ0DqH1bYZUE2oTrkw5dXnE5r3p2Cue5jTv%2BBE3a7ZwZ6Dw8PFdmWfR4Z1MMav58MGOqUBJx%2FiLeUdOQCRYNQHsFUVNN%2BLE8pH3gQTvsl4KkaQ0yM%2B%2BXrACTTSKhdorYcnnqbtJMb4M4dD%2Ba4irXhaDEUpUWaec1qiFp76HyRkvvaGpGs7btlAn%2Bt1FZj7mSj%2Bf8U1f6rGJUaNCUiopMQZIVGO9bUWGPIcloXHCJT6HOhSvyyNHW2XfqiFAwIKf%2Fc%2FofNW2gXOgOHMqywjCOu1xd2oPg9CqKxn&X-Amz-Signature=6e683806c913c8ffe80659f2ad581e2482e9a188582860e9c28948e7ae58c748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
