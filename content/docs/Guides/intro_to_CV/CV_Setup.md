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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DR23JKE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B9PyMkaNt1PG58NQ2pa1z5Gx6qA3zxWORHKHu91xqvAiBy%2BZYbiWAoxKxh5kjV9X6FrD18KhVbC1oDnPA5aRGkIyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYiYsDoYIvNKrD0RKtwDhNrTosfHXLp47xbX49rmy9bboyNphaIU0Y64igCZmKyowMgTxtCMFNENnVKBD5uhXEIaX9S1sF1%2BXMpVdiG381fL0R3XKdv34R0gkw%2BOR9WMlVJduOittZV8OndhJ%2F2GfYTfnlV72gGXmD0TZcDtQVD01P80r8lK7xJd47EduBHLcEpmWTsMM2NED%2BZdtAOflBRukMSb3IyNQE7hkBdtld%2B7KVhNTqoEVrta2zbMecGCiKT2LQv%2FpwzXPzOCKMUpxc%2BdDpUGG9ssvLGj5SNZFnlOpzLQGTxVWnKaTRv0Up5%2BTYOdwBvVpDnMc4ZFYFXpuA0Gr92AD86eDwooIHCAFf66GEBf9uRQwBHfE6OrtEJR3AC5fa01ZeZejBPhbLx4zTB1AQ2E4%2F4ZdYZqF3mo6AiVaMkOLpYpKi%2Fev1HIKokgJUnF5gVz5U0ANhzGg0VQ7q0Jx3iQcATGedQRNxZBY5EO8IRCCy%2FvPtLIPiYU0waAQ52B1OSkwICwRZElSw0uOKO9V8vc3TiSLb6AxJBj76TSj0ycraFivklUAOnjZNGU5Y5qailq0ohCyXTgs0qoR9RjHozBGAIsapFOZTlBzXns8dAllGFjRBZczkylRunUuCpnRVDjMD31dgMwjLPWwgY6pgFyXPjd%2Bih7j7ijT0dfQHLN8CLk%2BMbJbh3FHzzDpWpLBtd0%2BXDbNec2OpdaZ%2BQG6N0OZQvss%2BR6u8UH2VWFcNd2c%2F0bGuZsPKeF%2FuqX5xUG2LwscHv4EA2W4ihQUxs7grWHAjYUqejbcHzJdd7QVJcw6fxNcrrO6t0y2xJM9mceOL8Xo%2BfHVE68Mtw6VKwKq1Dtu5ItzFHKoRcnko%2BW2TuhCmwQfPEF&X-Amz-Signature=56073ac5e6064cdd2cf08418b4d595aadcd3099220ff2851b82487c66fda7690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKPC74J%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFx0xJbL3IAO2xGxcJLGfvVjWy89foea8ezTGb%2BVOunGAiA%2F7p6X%2FE589ZOj4fIHfWTqFseQRTkpIcuzzpP1GDw26yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTlDhSowmea0%2FvfeKtwDx432ODtWHz8kbWztndJjdc8FC3Ok5iFiZ04NrP1OU%2FYH7hDwyLpNEmJH47zfe6GLLKRuzPW%2Fqnonz9kmznPf5LO15%2BZNZgHVyGEANLD%2BdxA258d9tL0egszXuoSxVCRo9nX%2FU2P%2Bons37SZi6kaHzCFmnJj4%2BpCBTCXR9WdJjP2cFOjnA3s%2Ftjkm2Qzsd6DRW4sOrUzLTemuonHhO61HsjZX6xP3FaXRGK%2Fos3kbA6cP002umXP5ZoFjhtYeltSaLbWmeBpU8DPe6ji7KbAAEE8NOjGVtu7uAm2BxmG7vnJIQ3X0DFwYgnt%2BxYJXWCP4tRfVlWZYpsjxad0H2l7Cy2SsXPBDwb%2Fgd5uRMc2dUU7JSmRfz582RV5vTwo8zLf09fubRF7f1hHdwyJa35yt0qa6DZU5vbafv8CkPDbCIgKUHa72KD%2BGvcAz3uQTXnc6zeDLULb%2FmAUUMu1U40VJIpDw8ZM6XgdRVHUWERDfZYcEE03YnS9BJlNG1UcMka7gMrro7bBvmC05GgKJ1NUS4FCCI2Ekk5Xbl3eyy4jvj5APdcrr651KmWK7Z6g%2FDNOVxcRzMasCF%2BeWKDT11uS%2F1TXGb%2BQI%2F%2FdDu99yOmNwfzRpsUMxt10VISaT1Dww7LLWwgY6pgHTGvvD2hCOTJ6yYbeI08pZobx%2B1IeKj8ZJlrnfBQJ9lNY3lEalvO08K6JcPj0p8ZyAhJYNAYF%2B5TSNw9VHKdEjIuTH4u8AbltrlI0CQuJLBhqiQlya0RA2J31vRfXTBZsPR4NmIAegwM0gI9f2mNf7eB5JkDAkiFkWj1o6Bgro5zJ3UaLRep6tiP5f30xrH0wZKNpNpmKWnQPlO%2FQMUp%2BZE9UbHPFG&X-Amz-Signature=79e03f07d6111f9b67898fcd20a4e53a950dad982fbf3b0194d681bfa2e8f9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
