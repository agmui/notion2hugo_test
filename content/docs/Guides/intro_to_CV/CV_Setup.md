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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SAI46D%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAPZbIZNmFdVrb3n%2BEhsIsFD7bOLz0lTMEAqUCKfKALUAiAxw0OlHT6eGRzyZSHjxJkKUXUeyBDNpSiEPRKUuGWMHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMhq%2BOOK1Ts0r3%2BCosKtwDKXW3QjRZAnn4rMnVP2%2Frk8cwCgMTHkMhUNyKSBbzSXNJ1Ak3HFFkffjpGDUl%2FpJJ%2BGGeImk2g1d8zTg3g63xxIOluJlHhXCJRGGL9rHXhw1ydlZ29zxdKEzkhTfeSVfml1tK5zS5UDMxuCmxIS6cp0oIn9Hn%2Bfld1qTHGnJS9Fff9TaSbv%2BoYj6bU0c2Nckvlm8kHRdEioaSK%2BaPgAJlE1C17sjkdMupXS%2B3wIo6N44OSAE0bYr6i2lEoCRzdEB8U802xlHvGKI5h%2FyuJ7ybu4HneiiHckPoflr6ga0sGIS7WrqtbywHM3jTh0g%2FCbIvvXYLwPJ%2BsU05foRlMvcalmB%2Beo5sgdAeBc3k6xUf9cSLWKp53hT1lkfx2ydjuS1AkJH1eB0NAFI0abE%2FZyNn6utVhOIjJOYr9LZoY7PzLkaTBiKDvzGOSas2CgfMx8d4ZJdSv9X5dLRaBXiuJXP5D7mQsibWcZ7KNg0TQGZPJ8dAUoB9eOefcex%2BFzvwdpIwoFeLNH4rU8SIIGo3RgW3mgA16B5RoiXBvjpnC4wrJBlhqsoxqik4I2i%2BVyMr%2Fssqthld2YJ23%2Fhh%2BC256YviQJJqtgIOq5ItGke%2Fa72tuQG0FNYTp2Nt3VE%2Bhzowse%2FvwgY6pgEjnOZ1WDdbaP5y1uBkPc1f2skKEnuWuJBg%2FrLUx8jzkZOgY4osUuBNy9YXLdx1aJMDRP%2BsX9LhvjZyXGul%2BJlMYr5XWbOtRgMZvRfrKJT19vR%2Bj0yFJa92YgNumZXFNzWGnU8FQ%2FprSWCm2xFSq3LYOynyjyS6tx1JWHaKCo68OPpGxAmuGVCl8nsEN678sKvL3uW7Twdm3tYDIrwqIUHij%2FO7FKAH&X-Amz-Signature=f19b488bf95c98852055d2400871eab30904a70cc60ecf5186593ee94d50c74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHNLGPNM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDuXpr9tgjulBnOEHi%2BVECmWlNXGk8FDus9Z%2F8VjjhOgAiEA%2B70nj0ClW4w1qiAgkwVwVl7FKXrQJVMRXb75Dw9%2FDyAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGKHDfc1%2BeRKF4xzAircA%2BcxBQz1yNKD97JOsD9AF8ZXeiUqZdqs4KK8RD6zNJ6UVwUlXDsuuJYgufj9Fv58gs1zWQInb%2BRwVO3K8BEgtX%2FCIBiMeSxFNIhDa9NvZUPQ1WeKQ4WiRS8oLATX8kVzzQ3i%2By1XcfN2sgmhqRw4sZiks6N9tCSGOA5L3n0ryao6um5On0v36CmKFnyx7AizDWcT9zikVyjoTKzcIM0Z82InoYT6tOpSUhoJ4gvUaWo%2Bz29jW2iFsFNGG6jHxKHAvOxxgBOlMPJ0m2aPnUTrRSc9WATxDb1JAWcI9Tvm29N2PIV%2BIcJJiQEjSPPFvJrzzcnx1x20S1J41lGs9rY07GUa6h%2BJMBzCfh7ne%2B587iLDS4HV%2ByOID4otULyw%2FsMqL99qwDR5iAZe5Qas2YZtZP5LUBmHCrja1BODole2IRZW1iLbrkydHm9fzFk7NAyoJ0aFC4Re3YbBKIaa83konx9lXK%2BW%2Fl9KmF%2FsmokdzZbGmFJpy5TvieH%2ByaLENqnt%2BSHFuRguUfvB4ikbIWCZNWCW6nxLSgXcy5wJu4cFrg8CcCskrFpn6zp8tW0Y1idnI3U3SvlkCdTObb8eh0XFPUUGvm7xfNtpXUKSca%2BlDqggtzgmtWFiHdSkxwt7MK%2Fu78IGOqUBm4SIQTf7Q7ZPsoxuJUkL6cFi5%2FowRQBN2XagQKYuYETvTYRA2YlK1wf40sPdFghldZ46ziCjQiAE%2B4ELU8cWtKXAYRWfGudPpicUKMilgXdxUJTQ9aqSSH8ymGDkkQXP8sNR9T9k0rUEicHJoC4DQbBb3Q0lPW9ywatwnbB1ulzoBTLqGFYVTsYTOWa%2Frlta1tGEpT2a5gyURlu19xOJyUw4vkr0&X-Amz-Signature=e229e532dd43f6c70aae5c2d323498bf2e13eff28305ce91499947428f026dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
