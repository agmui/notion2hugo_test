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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZ7NTJ4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbkYZD5hlEwO9O1G9gaQa%2BP6%2BVYlu3JQmhlnSXglOX6AiB%2BXCxnfsyhGuVpl8kgIKWQ4KGtkxW1t%2F5oEI6V7iDMzSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLEOGK2GUo8rS1NCQKtwDMNQaWZpEUPOtOCMC1ZD2DOum3zg6UK1RoAu4vFyLe%2BTVNDXvQ8o1U62QA3x%2B8lhtffLTwjTdM5Re3QdXEQND%2BNENOyWu%2BsPJlO3otoxi4y%2FdFjkyfCUGKSUmMmaCv4aB8vfwA2rdvb17Qtt8ir%2F0dnr%2FSm6VGva9x%2B4teU%2BZ41hk6Ryt3Et685Bof%2F0UazKzZlvc%2Fm%2BLkwfujllB3ps0hDi4qlZHdBQWDeZpVKCPmYpGEHZFfPiKW8dOkPWph70r5j6xBcsk18V8azUwUOjI66a83ZRlovG6gnVFuE61SvyfTAWC1kUHBgQc7%2BOXIKFdbgPuF2IjsmKVgcSUEBAGbPLDdO5Cz2RGroGz1bMjADgbaI337oES4PBmk%2FzVRioq%2Fh%2BDQzy6WzEYUf1rxINkVk%2FgjXWZSxH62pIPQulRhl3%2BpybHq9wEMTULFJ6F5bIPXuQpx5E43HZrYYiBn1lSl0LmI8lWoqT4h3Mdi0hjkuDTFNq6Mki2DQuBNUWwarTpcg46kO2VzEf8QtK%2BZxrwGy4Cywoj21D0WKPo6na1zwyMXNvgx7KnxNfdYExVxx45WxyLl5HfSZgdnBWUnUQYriNrUf%2FjpcADk4liRXr8a%2BpK%2FMG9Ve5kQwGi5AQwvJWMvgY6pgEdk1hdwjRzYjY4NqIZu5ogSmcPvQTfY%2FbYIEAbR5l8HRtW6VmjS5rET7paOe5IMdyQq%2FD9nUIox9gU8AsncNk5WUM%2ByXOXyxH6WMPoKOtMfeOlO%2FxL1LPOaXXl3Rg%2BTFJvGRGZW9Q5%2F6g%2BBNOgG4GYzCo%2FtHIxcohT0%2B6LUfs4%2FY0WiupAlYc9MUE9EE0iIUntpKMcDDGfv3fYHgWo64zvUyA%2BgMBE&X-Amz-Signature=31820b7d989e3636cb67886a2f76a3eb885bef62d44be76a2a97fbc8148cbd27&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIKHZHQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDBJl8O3xzLWR9lfq8iZxM9WQtl%2BQ%2BDgYw1OxysJ2Q%2F9QIgP2JWAeWjw2%2B9oQWviFUzi0paRlQTpwOO1EpiG2xZejUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYxIqSG4amaR%2BeEwircA1n6hRGsETRsfYtJhQ%2Bui0CbSFNh2v8c6aEEz3yhJb6k2ywPCFOmcvkh6nZEpkiXfNPfNEIuQHGBGJAio8Dq5%2BQFuZvna%2BB%2FGbY8Y2pvRml8tdGU2Ja3OwBM14VP4H33hLJ%2FMdtAKf6JhY%2Fk40qBtdlCh4phUhOpUl02iLbnaEK%2F8cUEbkagbOJ0bGrKtuKVr%2BNbqMnlXFZfqwVcttIVXaLGX13oSnEdIatnB%2Fti5aNOvS%2FmO0QmHgB8mTzCicn51kueq9EbuKb%2F08raVe5a3Ndx%2F%2BGx6WbQcpZlukcbog7lPsDUZHDs6dYfcxGPZajEc1880V8ec4dLsED2%2Bd6fXgVPBpv1fSyKLlLaGEXu8XpGSwT45Mav8NlcvL65R4m7nD7SDdeyxpStLdg8eR3%2B2Gs8JbqzYLR6YkEMyy7mz6flKGo5jX5My6%2F57zzQthGbBzfnjbfpn%2F%2FOA3wWMMRllbBknW2ilZebUlB2aGBPT%2FVq3ccqkYgBcwtY8RVa5hVoh38X1mQQx8YHXc0v5wjWCF0YEVIYotBsAg0YW9aVzxBtlgTH9f4RNzx9W8zQ9OtkXvsGqTEzE%2FBOEfTDsY4C9fPz38n019VQdTfi0I77bOMdpOzrx4QXhj6msADPMPeUjL4GOqUBCPxAF2HfI4N1x9zsPTXUtle8D8GO6NMS%2Bz7BgGxwdX4twAJPD%2FxrzKB4ViVDayFzL%2BPmEJMim%2FIwycI5M5twdrEP0%2FqsHoLcHBOdhnAXMANhvpLGR1tvCEK5gYvtMTGacLGOFfLJ%2FMkKol3MI2TDm7jNZRL7p9SovSmbeCAjcsGOzM%2B4M2ZVgycDfBx%2F0ViXYAqrbz3H6taGah6OY7ebRrx7FTxa&X-Amz-Signature=411c7b7f2cf58cbe77d7f6f49bca1301ad04c77b4dacb777800f3abe829be41e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
