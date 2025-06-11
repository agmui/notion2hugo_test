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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USFYOXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdXTOV13xZ4Sn0I29ielje%2BEH%2BcDg5R%2F5uturSBnCBvQIhAOIptOGsiViFOgCS8ZqPkv3ZT3D6r8E4KO%2FlO5QBATzLKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmQKMyuwIwzEikGykq3AOfcobeiu%2FbWaHflL2s4DdJJ3x93JHdx9RdY5PnFoUkmUGz6j5iyEqjAgW8an66K04cDJl%2F8j4wUozTs7AxPmZCuKsrJeUjFrP9nyNmKZ7yXCmal4MbHPpF8KdH%2Fu2vJnX4hCAbVRKn9xaSbS%2F2QeUP2QVGkKzQy3YMANHil7a7RE2Yl9uMFcm1sQOn5kNqzy9ppt2gJFtCutuDN9cMeutM1rlIfqIPyORWioobvhQ0elkjtgPHHCXqGB03UVJSVuUxsohKd5WAg2Y0kBT5G78onrDayNra39xR4%2FYMR15Ac4Yz%2BGURFBSE9ZHR%2BFj%2Bq3Zd6ENqD%2F7%2FySSSqbn9NEuNUdS8UfrEyyXJgnttVZZjpNeikNOpnn4OFmpLKYtWx3fzGaygVh81Q9C9OmvfaSLH7pd56%2B4qvVGxUTUiazwfd%2FNcnkOd8zJ1UcVcFtEQ%2FCN3i%2FZ%2Fkh9c1PAtZ92DPzBljr5zBwZ2EYtk3PF1itBZjlW8ryqIRqUWkwMKt%2FZQegF1TZLxF0GHuQ4Ld3mofitJLYgx6tY5DAIavyMcMVTugIRsEiW9hzi8whGFdmJY29WBbs7QTn8U31sdUaBVq7R2%2B3gvmiLcC4D3hsOnzBs8mtfz%2Bbg91Na3C95uGTCpyaTCBjqkAfJnbiYLiadNByWi9IV6nsnZDENIrHoRZkThnk%2B7kxdOJinmUuhon%2B99Xv6AtLFt0gxNjx2pCBgivOQnJNyLccvjS4Vwbuh9q5ohpOmR5Dy2GhGY8pjp7b%2FzkF%2BdPYExvaxO4RIW%2FfiBnMhi1Ud7ystUMKjWW2j5RtYU4Nriu3ioPOYE%2BDbhrfTQd%2B1R2ro7jVyW6Gnr47l79yJY%2BqoJdTTDIiSu&X-Amz-Signature=a5d1d9962044ea0b00bfc5250f30db08356886cde6fcc8b3c4bc8b1086de648b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEPBRQH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfcOyhZE1Pt%2FeS%2BZ6gUw4G7hzRb%2BJW4Io270xi33J0%2FAiEAw%2Ftad6NXvd%2FXjEKW7wRsjuR22W8oIsWyPO81hxqhAXIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6DqfWt32ksL3zkYSrcA9eErygWG05vrhuehoRoI6yYJfSmadpnC9PiQ6%2Bldz0Rd5aNUfbcyPUFRlqgRZoqlXYD8tjNKH%2F%2B34jk7NDMf4R3KXijU5YuerGdynoT5IuTACQX37dL%2BGVDEghP3JCT1Q9TvoFbl7eX30EKWBd0Tdfd8czwwXvRzR40NEMc5urz%2F4AVlpwnprLQIMT0BZTzsVMq%2BbaZQfRrj1NnHkGXzvj5ocUUwrBEehPxxM9yNqG9nkeqFW%2FduXyy8cmWjhJWeyr%2FykoCKDv%2F1i1KvN83UtEX%2F9YYIGzQa%2FY0bxTaj%2FzcEueen3BPyiZD9VJ0pNAUD8FHfQ8RuosukKVcqoa9Blw1ziObGtGSmtnn540w8VYR3qbcyIV7BmoPkFub9yo6RKg5s7NkVafyHOVzHE%2FFM1hXSNI7CCfa5BwI7GcPbKUtKAh64cfjcBtZ1Iq1hM8fZXZ8hrPsy1AlF9EKJGntfLX1nudaOIBYEObDzvMJLN3YhdQrnpB3yUCfqWPOIBDEZxX9smhksfJTYw52F0%2BwVBeRfMvgSVqwZgACAJWEgaB9AolQCeMj%2FOL9KJsnLcQ8pcCMyxCG3UlZwWy7h6uVx1ydZIDZO6jwcpKqg5TMeVT3Of5xhrAu%2FI5HEj1DMIbKpMIGOqUBlkBasUIFYSSbItvAWqDd22BMdLLCB6CgK8Mhfpkodam9lfy4vO01xusj51vJan%2FjIzqAdKCS7VUFStAtL53VOwK5ufuei5ft00UoolLFuZafYPv0cdr%2BzlN2f31hUeAQu1NQdpykI2q%2BW4UsBJDcm0smyhrkBrNHXHlA6aJKaWa4lY6D3EELID7UfONmNL3YrFfX2lIvktaYFNrAgP9MSrm2JOa8&X-Amz-Signature=42c890858abc04eceae2aa35a1fb56a87f2cb53dbbf231c84d5a8f7b2426c8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
