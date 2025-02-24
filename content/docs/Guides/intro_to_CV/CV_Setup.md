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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5N53MW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOyjTWNNSkHKhbsqbVKuX0Awy1sN5gGwLBBJGnTQnv5gIhAN9A0FmBi%2F1Xjaei4SUHMYti1lL1NpVQmJXNBZfxU%2B4zKv8DCC8QABoMNjM3NDIzMTgzODA1Igy%2FczJsbU0IFP7eMF4q3AP1TIWGcEAscTxSHu0a4tkeTjW%2BcMUYQhIMdYQOgidngZZ28DbPozLN5enwWFFiG6VBjUnsfJkl9DFh8dtDIx8v5CdTB1SJYh34jpr35DN%2BP%2Fiqk7qhHJxqbxZLq6lbfDA0F2glBJu%2F%2B6b7F2Cq4PPCo1Bp6Kmeiyh8nTu8JhJvcxxlacVdL7JyoQX7%2FK3YBnBfCFZBg5MSC7YSVSNnwP6bdwOtF2xZRwB6PBwAclgF8yM9EupuBr9uu0RtisoR4mAXv3U3FSspJ9xWvTfYlYUc95IA0bJLFWN%2FI4I6%2FIVt%2FMdhUWh1dL4XL45xakf3Vx69kHen2CStV8lp51eCU1SQ2nU8982icbPocbrlap5HnsXM3apxNn6phFJUBssi9wkiD%2Fx1BoKmaxkAErraq%2F97ZuvaBdC9zxevSppN6%2FrFjU1hlSSZPxleqWMXM9mSzarQDk7QaYsUTMYAvV5jwDXOqnqdmY5zkpXdO9P6gj%2B1yjG1tEIIR%2B5O%2BgCpRyUyJWIymb9ixbhmLzj%2BQJ%2B3jhd689tEOILSc9TsOHcsbWNv7oK9AVsLsn%2BZO0WVl4R3lztKhtiVT6Hkx%2BvP%2FG3XBDtY%2B5vNlQGHIZVS5I5w2IB0UIvCY6Czq9rlYyvmmDCu%2FvG9BjqkAYz4WToWBnkmv7CedJ3iKml9R4DO1jLaQv5ZVtAa24pFtgYxc3733p5TQyYG%2Bxms1ReAWNj1j%2B2WOBiQSai4pA3tqMm8JJK3ThGxT0hVaGFMmD49s40TFGbvvTEQkhQyHNbTLbzt1l%2Fe8jGS85RJCBEnAJjw7sj0q%2FMquojd7QVbRBo4xTKr37mD72c8ATztMPyNQyICpVaVDban0YOpwh70P%2Bu9&X-Amz-Signature=68d3f74269b7a99ff56fb636d6e8c0d21eefe09cbff600bd49176b4e2008479c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYWX3GK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCURnARMg5inU%2BDA4Zn8gRmG7fhi0PXYGg%2FMgHYPldyIQIhAILkuU4NVd8VddSCzgrBoaUlPY1ffv2apX74t2AbrA2RKv8DCC8QABoMNjM3NDIzMTgzODA1IgytoZTgJjK0D6Ko3qQq3ANCGQlEy91rVd8JA%2BTvAr7FGBK4PPtQosjPDt34us5YNXIAgLJtx7tjutDfAcUXqCdQ%2F%2B5qGqR48hH%2BRL0hulgprpoRaWvsIcfThYpImR6DVFrg%2FG4PF0AJJ5aiSLx6yg2dDr%2BVYyQ%2BpFmJxYXR3W3LMXwlSUA4UA9cgEA%2FCINqtGCv6pbchGUUyfPjPPdhAjSHNla9kbrUxkq3e7ok6bWoAqwKyfekyoCIpQ5%2FuKGj4N%2FjNgFClfDoPc07wOsW6msJvX9X8UF0PBBG%2FSt9lYafG%2FtTaTiiet23IoshU9m0nhsd80qohMD72feU%2BYPQl0tP3BEHi3mEAp%2BfGaDVOjXcwJLcuIjwVlxR5w1kuDSt%2FunaOYvUHiku0e4X9rPZWnVZT6RD6mJfuvHFgGEBDG3EH9j3bm0KQ0diTtqjDA135DhNA%2FRkfVO9mQqb6mW0kWOSAU4oSn25g28tKhNtYmNj9%2FkOmGhZvp42%2Fja6lnPnlAEkxUdOd9YpLr8oizk6vnzJvIlSYh14AomRu7s7oOujbb7hLBXZJusZY%2BnjZDEWfOGcRLYcMiIGwNYcUFVgYBmGBxLsgV7yKHujGWG8UaXRMOsnBP4%2B1%2FuMbXCkbOR1iYxFESqitGAOSm6%2B2TDp%2FvG9BjqkAUE3cprVb8DsdnTeCpEcMXu%2Bxb0u1vtRbOXvuy7wJHPhPxz1dqSz1fcf%2Fxekf5qrOeYQCIYKAN1meq8D%2BD5d%2BrCUJjge0qMDuJRw%2BjYmXfVTnAPQt2ooNSwuCLNef8JVeAf8bsmxfG%2Bh5NTJsDuUe%2BRTOi7KDBxun9SDYureBaq3y%2FO7q9WT37zTRLUOx3MFfx%2FItpelf6bbPrIStwodZuyhkpXX&X-Amz-Signature=829193e218d999e17282a3aa02cf17ea4656a22cf3fe8344794109a8f5239a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
