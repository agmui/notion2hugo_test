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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DURR3JH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5mU3mY%2F553Ioj7Cia9dxH%2BBk3kdu867aj6DkEgGMrAIhAMqQadRY3I7BLUfVEvlnkfZrYW8IRYZ%2Bu%2F1u6DuRaRB1Kv8DCCYQABoMNjM3NDIzMTgzODA1Igzr%2FhX5YxhNulIwmsMq3AM7iMOzuu81twk9rwSFZkMg2Yk9jIi2jQiV9z%2BvBVK%2F%2BaaND67jbiplJVRzq394k0t1Ir7UWci9gu74p9qjxtL3kF7vqw1dqIOcIPe0kGeYDzWf3JE4Ca0%2BZpf1%2FuOn%2FqoFRSWzTMGDXpHH8V7AKHhWJZwiO%2Bm3wiXeOZ0EbnKN9ctoaoOA0h3enCuUJse5J2S3XNyqAx1vCbbT%2F22KOcrhJjez3Xpq3bYCVpUVUkEXxPzCCIebwTUoD%2BNxsd6PoDfPRJ9M1Wy6C9fQabUekeYbhJpA%2Bxzm2vVCeFLHpsoW2JTmJ3FbVXUF295KGdsWv5uy%2BDmvNplqFmqsDYucF63h2M0zTT5YzmVDCaOaRUaUcMaCWzbDkBQ7fiWJHKBUkgrwmD97CL67usIO8D81WSCUhikbr9Bk%2FzIxtg%2B%2FPP%2B8iYmywkdUAkRcaUj2atHQL4hM4UjSNuFPR%2F7YsSudMfmgWqMy%2FRTIGlOVkuQesedGr2eyBW3Ug%2Fp2q35EQ0yg2OAy9WjHohMP2UH5Sxk3uLenudxSC9KzBFf27I3yjI%2FRhPrrrt7Cr0c0I1%2FnT6nttsDhJJyk%2Fh3GaWhBmy86zDySXd4NOFME%2BluCmpxv57ZiYgTOKbypYES0gQXFyjDmqvDEBjqkAV71yANjQCA%2Fz9kf13ALCg2ZWk5wL7egtyVh6p%2F8FXO2Vt55rAclcCT0OVlahDivWJv4tE%2FsJWpppXWIhrKqqjRRoN8N9ZlSp0mEkCR8rMQs4DSc3Y9sP0FwuUg3NIbms393o7DvlyKQEsrQhesIf%2FhezdiDhNW16ncV7ducCZWAhE3L34xaRHuFJ0notmyZcz53Bi6Ej93%2FUlS20Ex8ImrmF47Z&X-Amz-Signature=3500ee97ca6b736d1dcf2cbf0a4ec20c40ea5499dfc30821c876734b708efe3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXFPPRZV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Mjy7qivYbWuuG8JVbNsiQfmJUSYLTtfwXo0wrtepwQIgENXbZR8FEFyWgHVdgNzRhl%2B35rT9Kh0u8UE8nbLNj%2BEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEjl8BfXGEYIeSRQqircAwdF%2Fgeqqv1vEn5CZb%2B%2FUikWHn%2BWWYe%2FauwE0LYuDGouwJThfrdG2BTDcILzFpYyM5Sp6nbGKYZyti%2BOFGg5uI6D8WdGzRqZyM8UsAkcZxJDSCw3WxhWy2gfBGiRbhtOxEU0luSMWDM4tfDHeyiGQ4WIX2xAQ9f9O5N0vl14dn9VYfijeBsM1Bk3j17aDjpx4dhE6nwwKFxpwaPgX6yZnAUb3mmTIe50l4wEP9RvITgS76xCXK8gG8VL8CNEE4hnaNv6FYHL37%2FDXu1xOt9JnfqwfV%2BqtSsAiZ%2Ba0ZfQ4ZEPXQh2tOCiXoyt4S%2BHWiv%2BM08i%2Bk2JePBVu9RFK7IAJqu56G0XLLLQlJfRPrwu4Bg5tiKp5VihwM1cAU81e0FI6uYtUtOlAbkhlZ06QMaoxsDlN80WV%2FmfcWcFg2OSo1BlQs2cS7IE4u%2Bo6DlKntrccua5xy9ViDnq2PMb8XA%2B%2B7ioR73k0WFHYzAcrLizmkn6fCRxNlfh6BCnk0WECSROCxCo1jNzTyJIpPASgt5m%2BO8ga0un3QCQLl9%2BfDx9tXoTnuLM5a1xw%2BVnxAl3TQsxVdRkIzVl%2F%2BZGmA%2Fw%2FWFaBaXy2ho6carr6YtPVOH8ieBSeJq%2BpSyLLGAj2FxTMMir8MQGOqUBY3Wfz9icG9DiPTzIZodkVH%2FMBqL15Oq915Hvs6BLocfrVTNGFmzTVKvas1a6GuAa0re%2FgV9JNkILtthLY2itYgCzmcW6c2wikPYI24aJuxgmQB%2Fm6pDPiw0P%2FG7ulkE6U8zoAVJExIgMQYG2bPoVBwwbqDJToBfQv84lxFmxg3Rf%2Fx4s0dKrof69KuIksHCMROEsc8Ua8L6VKnb5JVcoMzAk2FQU&X-Amz-Signature=3173eb9b507613ba404f26c0706c29f155511ac5baa8021ed66451ffad924e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
