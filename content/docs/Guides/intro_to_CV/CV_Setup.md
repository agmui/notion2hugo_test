---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ66V2KP%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCn4eDrj%2BBWTvzWWZV9IuGoWGoMdlaRnSV7OgrjVA2BYAIhAKBwfqOEtYFWi%2FVahxQuaPXzRKzF8QXtQz9KYOKCGWSxKv8DCDIQABoMNjM3NDIzMTgzODA1Igy9yoGLlBjtHNYrXSsq3AMrP4KPC4yKYYsuXH%2BYVAEMaKWclwlUUE07VMoWAsXXS9PW9IBUWRqRkVlxazTERjDClYhUxc%2FWDPZggkh6OnRgflu2waJRB4OLyD%2BVpgIPRLkpgZ3P2jWG0NEvBn4sjY%2FlVp%2FX7TlktL9ChSOq51iEA9XlXVqAvX51TuwsAQaRRprGdRATRtzb0uO2obkkG8eX3uKrUb9FLeg1HzjSkaE6ToXB7d5s0V1%2FPfnZGOCsgDqHj5zZH28WPXyf%2FNLrD11ovGTMCuwbuHvq70cr6dcR7aH%2BZMpesOeS1urSussWMCgeQsWoqT9BCpsIlk1LzjI9alI6LMOabxDISMNaXdn%2F5OmX6aAyfx8bjNVOrdrxrZn28KNmxs59SJMYnFfOaJyPhUwR%2B8W2QZ1mqOnEmQh7t1E9oAdzD9wvqDmMAocHtBkr%2BXYGxCFj2YK8i4cwnUG5k6OyBXqEoNvV5ZB%2F%2BgLzVdai4sRFiuGIMdFrR9KcPpz2grWZhUdlcvq2hXY7mzmIS6L85ZwAV3iYTqwsg7rXs7wXFdugcc0MwyUsu%2F791Ion3dyM0VXzC5NMk1gxDAwHXl1RY34Hmx1pHEf5w%2B2x7m6XcneyKRXF4dw1pre5Ei7vMUGV7AGOpMhzEzC52oPNBjqkAarSleLAWoZYSg4AFVmuBsKK1GIhcpQHWi%2FQMjgbNHpNedkXY%2BPyc41B6DfQX5n2inZwBBWQrZoVxjm9ZtK6zjhygLyovpSmmseJyuYiTQKk5QZIvcdd9SkBuqV93aqLsxEsydgZikFmgOo1m9bQ%2BnFLLYLPBRG6UC46SGB0fZGJNwOUjem2SIZb%2B5%2FG26c2FdsJKHbUkeuA4%2BXKcYwIglCYZ%2Bri&X-Amz-Signature=5844f90de6f241c8b8bf2bb7439d2215cc660b9f23d20ddbc9c7ce287ca258db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EFHQZX%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCBV4f5G%2BMUqh%2FF1NaC02cqBPYcCOiGfsE4MMF%2B0E7DiwIhAMD%2BRDSLyiRjeB2lluZuOyxbfti%2FYu7IUsYh7r44O1T9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyMMrXyp1%2B0DzXDZQoq3AM5eS3L8W6GHuz6liboXVpagDAMonnJOrv9xReJPWryYkAAzKWYGgcLLgazBZNhrK3cz%2FwN83QPA5uqSTESi%2BlUbwM%2BDbp9G6vPEbm0gZKO5LDXAfhmKyHILgJwLoyk0dQLavefAMa6Ommw1zprwtRqecoLHfGi559RFDGXYPL4hmLPmSWMqvP%2B4R3fpEre%2B5P3SErIt4V9ei8llPUdUAyCJO4gnVx5eC%2BVZJrh8qvkafYhxFhbcmDfF%2BxeF2LC651O4LQP8kkBQHDMQesl19A%2BzDelnzNpdueexpZ97EOqf%2B5EcRPOHZwMuIbDWw%2F2%2FM08%2BgGy%2BrAO4Wmwrcu6i7i%2BJ%2B3wrRzqGO1F5FtDJGjFFNVdiQuVRmkwwQpAeKcvkuOTXcufra9seA%2BngXhyoVZTXLx%2BamwDCoJKofbVWWlAqjcptIeZ992ziL3P6cBL88%2BtxaFt7euVXbSW6ipcEuVOVtxq7E8WkZBJBRQQzpoCG%2FpZsUlZXZT2KinAasGFv7Xp%2FEnSRoW42YzeuOps%2B3%2FkF0VZT1hJzHAI8LsII93n5QojyjsvPLiQztYUi49Pdb3MO3HckB8Qu6N9xg%2B6DFafXXyPsUaC6O1SBDa6%2FxXlIyAgOO%2BH%2FBOvWfQaDjD32YPNBjqkAZY8haO6CshWGH6AxXWkwpRUTU72PVTPActNQdi3DhAzCyzMZaZVpeYzLmD4nsSzlOYkz6u0DG2rRUALLo48vaEaAwbNXDZ%2FFT3mNs3tiURImTphuenfmkhjYTkvANTU%2Fz1rEc9SIBzcvowz0CrBKJs%2BJZtIMtRse0DkETW%2Ftwzt5Ax2NiIA84tgFEPY5wu7zruBFw4KmD6627cK%2F3Hiyp%2BtueUt&X-Amz-Signature=2fb1f9bcb3b1b0d778be4d434047a5fe6c249c9fa4677513dd2553acb439c502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
