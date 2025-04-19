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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TZ3EZ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2BQTZPrZigpXJavVhoeDUNy6JvXyH7UIBIeTreZyTPAIgSV4lLf8zzdwWtQZ2dKYiTaz5OcJePc%2FrF4VQ39fs9TQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYkU3GXOJWZ6BiShyrcA1kuv1RpGaZUEZ30sa0dPrlXwVZJI3NlPKnKpmQaeY1T1Bz14D3La%2FfVsKQJLzCedxpxupFOeOIY2NaJO98uZuz2d07PpRnriqaNRroBlC1QUz6fTrNpKXgUv97U4DFMeXEgIapYZ2iZBqtdRqZ%2BxqFloQvTMQiucPZ%2BscUfDK18RHSXoJJY2r44gYr3mVGtBWkiSm1HDb%2BjYb%2FzECayZYINAg%2BXACejNElRhVfBzUiIAYXN205rKICHESAUruyHq32SUv0IQLLjjB2nrRS6ZIjIEyJkTkmfjVtuK2N30bFwC8HiYYX7yk%2Bn06%2BELkbGpLSkRQb%2B4r73aXo%2BMjiCJmIh2AorrLubwyCJlCuyLP6QssRpr%2BikJxm9El060J3S%2FnAxXMbQjmRNJAOZv8qYxD4uE1qIYUhdeVtuQqWpXnE8Grm5KWhGpgXacVwYSHPmVNlC33%2BoQjbdKtbtcDqNH8J8KwY3Gc7xavY%2FNWG6I7ontuUrfmxx1KPAUTzOXvfH2YbBYylErksoMY0fGtrDHoYT1ZIivtC2NIOZ55ti49vym%2Fqe6mypep9SHIvC1Ho8pKMkTGMiq8U9ERD%2FHYYvf3AyH9N1zQ9ZWdtfwwDlLZH6b7sLqq16u%2B16u07dMJCgj8AGOqUBahDk0sq6pBVOKhjxHvVTrYqdvRJcrrafuttRkX4iiXc0V9GMOoEXYHhygvyxioZzlbn8hNlIVe%2FmGfgtjN56o%2F5qhvOMlJKkP6xx8e1KV0hCsxcgE0Ewv8IHVR1pr%2FLOQ8TZw%2BocZvk5N1YZ5uFTsVQIKJinLnDq4NCEwI6sG%2B5jRhNRbJdK5qRgUT3ff9l3Gllva%2BIjaGMDLqbk9F9Qm%2FIpcq3f&X-Amz-Signature=313f2d991ca884ca8c9808a2737dc7d9093fb3b1852fbac740d1597bd80b8b70&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBG5Q3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC1gKUOL8vX5yw22CvF3uZ7aNc0XWiG9Qy2%2FtsTgZxEUAIhAMVsrUXbarQ%2Fu2HNwOefdF7lDu3523vxmM4E2EcxdzD%2FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHMrilWfaa0KRzcKUq3APKZXwElUXSMSRwjEs0UXmMetI%2BYxxjmqyAo3pYIFb9GXn21Py4OlUXo9yLvOrF3RzBz%2FQOA0KtHX9RGJafxZ%2FvM4Umgj1B6akvk6hfYpMQX6%2FYk%2FRRWMw8KC9cP0WEI7Q6X8MQEgFfeKwUGPzVbY1SEr8faGpmpHuwwTGX7Uc7jqA15eq2vYDOfuS%2FqDs1P46yZxUJRgO47QfHhhiswB3WRqaEtXnJJUZoxtN%2Be%2F4GKMFUGrP0o7%2Bx%2B6bXYfv%2FviU31z3yqYPkwudJoYmahM6hREDGWGX0Mu3ZTziQbsRz7ir3Itv233%2BPg55hfdNHU3tqiYstxydhz0Iwb5bGcXNtzeJnI4SEbYEUzzjbYKaNDUAGRU%2Bg37jWZMbXUtqNpD%2FxEgQTDFLq7O5fFfmI3FJyuLFIoaZzVpANsdBFVPoU69BmlfaW1STCEePKoKSig5q6WgoUn5GkZTqhFQmUEm0QtbhqEaBI5WCOeL54cODc5PNoRvjJHr80HtAxIDRwsFRp%2Bh%2BFtgQhmst8EO5qI9hMW7wE25IvS7EvYYyGF8F9V%2Fq76Q0INd2cyIE5yyxsxnLq%2FA4vcxx5hA6ItjOwHzGOJGd7oOeAfEuuG4EWo7JlBtYHmnJ35HhTNaE25zDCoI%2FABjqkAeuZXx3itJUsrAp%2B3HUoVPfre6T5ZTqmSNYvnE82ThkaKOqeDm4u%2FwIgZnoh%2B%2B%2BpqcCtyUUaAgAmcOIa%2F%2F2VLS9scZ7BK%2Fhpb6l3L07jjZ%2FTBlhoHQRJYYXJoR%2FfKWSM50rV%2FF94QwvRXrjsIp39AUp9Yi2CiMngQ1WiVts4nFjlvSzWvDQPhTwObH3VjFzEne3Mv9NNP2qErsQ6dAugHNKCv80n&X-Amz-Signature=91d60f291e61d9112373bc5ab00d144ef672df39816a26eeefefe21fe58143ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
