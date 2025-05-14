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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUV7MJK5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDtSC1QKjlH9l5BQnQ%2BpdlP9Dl4hbliBa%2Fxnt9LHWKEvgIgROGTriwj%2B5RS4rxP4MFR32cNpcPORtSd%2FrisnqHhOaYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDb%2F4E2LEFjm1N3XSyrcA2eSfB%2BWX3oqVYx4Kc0o0CLs%2BG6btXbYTgq2WJfNAkwPPlbKTcu81mcW9x6%2FCBJDklGcIQt%2F2GB3wJ%2FY30QuDbFOaIHRlnDLWVG4sYhBE8KE0tm%2BXWKmxU71ilRSxYqjcrcI17X3%2FAekDNfV5YTep%2Fl%2Bu44uoRIC1zIM0llQ07aAAoOpI5w91QCWdByaulNcuWYtEQcY9flQ%2B4Ghp72yG%2BrQTSnXIaqqnV1tNr3G4XMD7xSyupan0KlIZw0GvBbOIlLuErlwlp%2B5UiHVHoXRxEOZJvu23IUGmrsOPNWuRp%2F%2BkWarAAm48rtub%2FXGRNfl9PLS2Vj%2BLNkfA00dF5QkTGLh4zFJs9ErS99oLCEdFk5xNRSGFk7XclBBXr9y%2BKyytT%2FTEwXUp1smGwiV9E3PS4EG7vYfZQJYwAQbYgt83soePi7CTZcEC0VHJoC6FcTrXNyeekPTYRzfjXx%2BcrIzU5uXwpGeMRwJ9eqk0ElXO9QlbbTxi%2Fxf6NqYBZ8GxrPfl5O23HJ%2BprdLN2IKsVA5xegGzGL1zMXOpgpdyRw5272DDWfMNX8nJXS1JbEFLI2VkgOinMWDp1UrhG%2BtqJNUgB037wPg239xmryMJzDckubR93RKmKj9kmo46yE8MILwj8EGOqUBSYuFTPlENwB1zV7dDCYNfyJAuwqAAsdlz10y3YUCfylbF5I98hpgc9zlkQ5MNXjX%2B%2FdQu3dqDyt1NuK01mJSGOsT2PhToo7pWh%2BizcqoRxHspJvLKzRakrSgcvTBVwWqK1fk3F2Q6JDigXcCszG1HxdJFmt70RX4rzaj4nXV1uKw85K6zDpPdgG8MJoSneCKe1iroGsi8y90xJ8evrhk5pkDTE5z&X-Amz-Signature=aafac15c134a69bcb44bd104b845232cfaa684d966cd51d2396ca2195c674c60&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HAMO7LK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCgQ16EEea%2B46blIJsWOzDqT0pOvbKQA9I%2Bo4g6uS4JLwIhAITZm1NKfxDISKtoAjbFF8coKVdL2XCcZtedDVuKkESFKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYH8xdMCko0VXkspcq3AM1H%2B0cuTpW5SfJwhWig%2BHX9WETgDyIj6w268wzAXaXfDRJKEfOaF7lOr%2B8SVnZJGwlziSIAHB6EpctfTeX5mQLoRExOc3dhASxgNMYZ%2BRmMjlg61EBnpeYzPFtemyCHXXhruXtUv5bdME8t8R%2BLa%2B4iqAVcEw0FlgsZdm5l6N3ctfyQxrQLqHXsMzt4bzo6n2uWmtuDrCBi0vOI6xM0dHJUmuIyWY0CWRfyTZxU8vNyr%2B4lN6WhkE30VL9HZVYteFhykJSjXg8znZE%2Bhqvb4M4G%2F%2FeEuPN0Vr2yYBjIFsHvLI6MXzcZM3%2FnIQm3RCfC4XdAWnH7zsKtYpPOWhkSl0QW9eQyQd4PDWbdGPxwhffmtfVUURjgMCYp1mVAqAPV1EAYF67xhGKRYhTd5d60Agn7YJEEpeHh8bgqbO9mbwLeTzU%2BqfgxYow76HNMD8DJMrdw9LRNc%2FgKTOEJkIFuwPJJb6K5QlfCS6jUr5UlHwNU3B5LM9gFaAXO6HW6zBbXcXRuCKl3GNVhlbrER0d%2B7ESoR66qzyCiyFRAiXw%2BNr8kQ88%2Fk9Lu%2FvMKwGiN9AmT3WpUsVZFIffCMm4qrtBK16X1i2yEhZDpjxFT8rA94JK9ivcvGx7EYcvarFZvjCx8I%2FBBjqkAYCFrNGkt6ip%2FF95X%2FyT049iZdWz91VBLBxomR%2BE7pmXOeD%2BFoViqd3WyLQJ6DZ%2Fjun6jm%2FF8i8eFX%2FrU9k1nOXfrW6nF6BSutvVPz8mi%2B6%2F0IWfGuswzLsEt0mnPaO%2FYo4%2F4trhA5Ihw5A7X94jG4SsxE%2FDWYWD08UjFOzHmI7tYWupgfocGNp4P1Qt58gvm2tbi8eUu6us%2B1%2FbEzMHnxG0Jyll&X-Amz-Signature=79b58040d535b9647a93426d16baefd4d0b51a31a7b10612090b2c964d8a3549&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
