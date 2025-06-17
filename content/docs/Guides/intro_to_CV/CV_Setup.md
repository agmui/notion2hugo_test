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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPUXWG3K%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7TDS4K9dwnLkACtD49%2FMCccIkuSDYOaxvcA9HPlqLgIgRzmYXhJ5K1oarwI9nbDUmYF0er7PH7xmqMRZYQ7lNCwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBqehV1fcFkjRmTl8SrcA9yF2vpWI8oRkgi3V9kR8QEtSoSASAJ8LbyMpfMoh1PaPUm5Y%2F3nqG3aHF%2FoAG90zvYQvSbh5v%2FJpM%2BUNSRUwJeUNYJCL53bgrSyZJHF%2FCjmZB2oNI8v%2F6UleZWri7%2BlMAdiHyHfTU8xV%2BuWpfiMqvtKxvuSVfsAsyyVwob25MsFFs3oawj4VPNVf%2F6G4UWsL4uYwWMuKISxR3kks%2FBJsJ8Q7%2Bzf4HOrIs03UrOCgsgn5HJRSfA9kXf7whWkepwoy8D8hin5aizrni0cX4FzWT2zJpRalbwuPuqjrqr%2B4wc9%2Fl1ZnUf3Bj6yjH5Dzu4hlE1%2FyxBCa69GHMWhXMwXKG4QMS7J59BDMoMH0maUdYrWofScBTenbvZXsetHHieH34ZYcKJa%2FPi5JvRaJTrsbMwMQLqGgxQbTFQzghW1F6gjTnZG%2F5Sqmeimps6x5ESHFFe6lR8H6VO%2FAaRL7o16YJMPoR3qqa78JkCOyTLCyEncYlJZ%2FxO1iXxAME5HZbdjcV9%2BIq0fFWHMgivw37nVhR88WhpNN%2FZPwgfq3EEgX%2BLlfdDCoqnrBoSjDrJ7%2BW0jq1JPQ2cvIWpNGT3UZZeFOYS82YhvQkSxMgWAd6dUOJ6JZTO4pQoldG3bMGnyMMyJx8IGOqUBrikADhsHiziG01K9MGvUVkx5KRiX6%2FDemlQ5wmiBSo8eQl3pOYXfQPC1T9MQhuwxIQaqHQW37g9O1ncJV6h6flKgSIvbhKOSS5mt6iIoF12C5jZMYIDr7OxAU1K3TSNZ9W32low9DR%2FXAoJAKaFvEXekVzu6fI5E8sC8ML4LUJssPwYg%2Bg9JBOcmzS4Zf76dFSpmu825qAjhb%2FZ2dFJ6eHl7TOr4&X-Amz-Signature=1fbc315a4797a12c14195d95cbc0f066a6043189a9705ac36d89a5f21b346ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDXWVPC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoSCJ82Ban2dpHwzUHGLpGaZGVodasQgvPDFuEc11EoAIgHMtJEYLWhfLYHR6kuhNducyffrTio8%2BF2NVycuP2wfgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCWDSsGKTz0J%2FWCdMSrcA%2F1i3CFQhgyta1fbvapOxBr00wMmA2gjiiCqyoKpDOQXZLcNyG3Ne3V37Jazt3L%2Bko85t2C88jF7LzBSDZPusG27wFDAnNA%2FuZCeuRFAucnASIVOhkPdTavJL5ZBkKJrA5mNRiHvOLCTA3mzIj0Xnt16VbuHz3oM5ST1pDYmO0QxkwciTGLZ2mbPYWAnbTzNWVcD5753LSDDY4DYJ0EgLHlv0iz0Br6OLHMpo%2BOF0RyxJgDDlAJP9aEkpIZIETkMJBOazw6HxWLZ1zRJXSZE0PY75C2b401nxzXnmFpKpxv2SIh92lD46dCd%2Feg%2Bu2rbLFLTPNDX9pspq1sKUKGHh6NngzPYSbx%2FWcVDsW8O%2BqcasH0akVq%2Fl1KwR7W17ndd2VzejBYBSfDs7FY%2BcRV1VvctpX2MKPvB0zwqEGQBnFnqgTUoMs9J1eJmmNTEsDAO%2FkIXp%2FcJt3Y%2BrM5CFSwv6toc8TFv4eXLp%2B9UJ6UOIUFYJtikb27MQCfb0TV%2F7o4jTCQpDH7%2BvYIaqW0lpvqidRdAId8hE8PVKLqJdNruA8iCYy0dfDA%2BLz22iUolTNcWBlm0SryMYaUpqw5MJkN4g%2Fkmhgo45fE1zFO37JRsDxk3CSNXRUfOnJNKj23%2FMKaJx8IGOqUB2OHBwe052nLS98dZBkEIH8tLuNbN%2FyNmuwBS8bPnCLmbQZqcJ0spAG7087XaqLj3RP%2FH%2B3zJ3z6r3uhmXoZO1TIo8ztU5JNYmxgMVt3l2tHNj26SB%2Bk%2B2utA8n2nTPkJm8dwIjATvljv%2FlHnD%2FtM3iaNF7pR%2BD9aJRgbErIYUgSONKjwkP8J8Snn0zpzMwu4ZxxXYbDoWXRwgyUoePzchvemRHRV&X-Amz-Signature=6ee9a76a5b7344466ddd4d8b66584fc564c56075b19bd7423a461c150cc337f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
