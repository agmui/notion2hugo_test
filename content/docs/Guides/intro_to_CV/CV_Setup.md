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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODD4VFN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGbgd5MDHrL2JURXlmKpqXTpyFeoUzFLyRYJmVYBEIttAiEAyRkR6kk7cDzfvrUAaN46zv%2FzYQQrCGqdyna8TcnA0E8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJhNlTS3SCkMnHcOIircA7e1C9HFeT%2FVQoKlRcHSVIxUzH%2FxY%2FB91EOabXSvhk7%2FznbTXJDoAq0NbMxggg%2BduSRJ0juAPoKGhrtpguxSwlDfoMbJNLCQgJBiyqU2kPZYVapxONz0YpmclauMt6Yn30s87Gk8aDt6YNPExOCO6mimh9TyArNs8Nh%2FfLKH16H9lyxu9Hip0trj0qTJu0LlKEJ%2B7JwGT6xLmSIStJQBwUK07iMI7JummikvBSv%2BXJsQP3bSzSuu6ijwCMSyPwpLyjcGsyyHTfRYJyBk3JxpkBauJ9GMn9Y%2Fo%2B8UkzUlJLSSLvMiAO5rszU50wuxRxttFuyVK8%2Fre8f0PVcxwY592%2F9J2R6IppIfzw9%2BTS1Gg9VvOwlxXANylgNJtNqg70ov3dQphh%2BlvoLdKNnlZeid5uTQuKVDQqKv0rE3ukmCK0Jd100Z8svS7ORvdWRT7lH3FKLrr1Wx0%2FnXXQZZLLYe0SCsFsyyoTrH85oS2m3hFuOwwQXVczneJPsHNwUkmejsm6eKW%2Blf21j3ZFLZss1prECtWWl4T%2FwoEUn9LWM8GUyM%2BDUIekGJVVSEjoBZ1he9%2BcSIekSOxBAcF37chJSOU7C%2FWxeSTX7AdngNCGH0Ea2%2Byoo2BSOK2AajJia1MJy3ncMGOqUBXbzgSw37pLJmgqGlXta%2FlFy4hfPQeqIFABoc%2Bkcsgoj9x8s0%2BAROuiXzyuJ2hU0Lq2GXQVbX2ucnpAMJyy%2FuWFZ8UAh2XMGOjDfXDOQL3GvNV0%2Bv%2FF2Sue%2B96ZMGZy0721yXeuW85rJfgNBzXgD4GDVgMOy4yiaeKT5u6nSXM3FmtoUcJtpzSdOvYWstlgFhbidmgI2mSngcXIXqOja%2FNtr4Gjvp&X-Amz-Signature=d7c73dd2ec1df62dc8d079e845069e62ce658417a498e2a3e04bcd8664e04f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAPO4BF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG86xPBOvaDzzmbfbMh4qh2TjoeAaR9ZFnyTm9wFdXk7AiAlRMZKK0P%2BSUQvtmVHAeJKMoIsILThhFqsOx3cQFRc5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMJIEqNbYiDG34nuXEKtwDG7MjWhzsdHSgYvAdjVjQ%2FSxUOD81iLpuKY4BY8nG0ZMrSh4RUfMxS8X29fV4RuC7QnhkERM%2BHJbYKeexaBPibDzt%2B%2FO1%2BiRE7zkT5ibEjyfFjOvuROeEB1B%2FNkIm%2Fq6F0rr46n7rwuQ7noDye%2FCZ4R6XoO2DrgBxok7UKBXk%2FVnK6NXKMJujQJ9jl9AcSfbkkVEyfPC8R7ciz3aFne0Q85rrlgAIkCEZS1NCtu7R%2BHR3MU9tVHsIc%2FNu0ISxHpc5bVS5qbq9krdn5lwZ1cHtznokQe3BbHyUO%2BnL5ixmUlvlRneYmH%2BIGlEgPr5e0%2BnzcGggqLi2Pn%2F2rN4twSMLRgnbIXACi7vkwGbzhKJmdW9ztw3n5SljeOj38Vg0fPG4Upy7Zu8wnQHN28Ma1k6XW3u7Z0uC%2BSx16MoCRnDu92%2FdZayWyluXNkPlSI1FM3pXtJ19D%2BERukeCryjnWfhQgapv8HWR%2FglRYz%2BGLInjwZPA%2Bs%2FANwAGKfKYBm2i9WlgCYrZj2jKlp6w0tz3zrxS%2B%2B46P7pn2QtBNUybCXVm1r5dSVrFA77HBI%2BR0L%2FoNph%2BFSUOLmIzb5BPhrU6b5Hn8fPN063aRZ0S%2BxH%2B8JckG%2FNPSID8yC1i2U69lYkwj7adwwY6pgEXqjlGJTappRzYkAqd%2F600piLC94gPnUL8eourk7tKkot91gZKsCOqGUTKdYxX8uZDEx%2Fo3yybYDKm8KrAypee99zZWM0b8NG05y7GbVeAwzO6VirPNkXTOwd72EKAzvUsIt9GUySN8cIlxbxq3dGKI%2F90UUVj7dSFsR2U791Oj0UEZ1auQIfnw59IhWoIvgrpfBwJ3ngGXMhmHipqhD5vgSUdTTnt&X-Amz-Signature=b100f009dff7522df9dcdd8e66f2de253830a30f7a84fdb71d9b6b4150e27780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
