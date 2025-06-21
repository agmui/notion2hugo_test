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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDEMJBZB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0BToFPM4owTPhbgZtwoFBdP4D2300kpTNc1wse6SakgIgEOjSRwgwp8WFO4%2Bb54xcM9dfjLvdE59q%2BUL%2FyKk3KbIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVZXfJP7fyAdR0T%2ByrcA6lsiFv3dZItCLzyL%2BQMGpA8uwplEXkGGsESIjtrNVbNfI81NQ6nr7kLLKgpxGckDsavZ9E12Hb8bdQYzUJuGJxn710RilZvQHCbrzRCffjYa99oS9wcrEcsnVlZfs13rj87oqdDQLZjQgQpPRbMsWFWeqsPKpd9lJQQN6yz1QgelX7quKVRk8xnLgKKwS4onOtI9KrT5H7xrfbWtuljOrnyTHRbqSa3r6zGGnMn4YDRpeodkWeuwHgtqh8Zdq67qe%2BYbJfMZvdgh7TrMMkT9k7IxJMnn3iMkUWdxjqR5zwDj1qIQfv3sGQVJg5wR4IVww0fItIkpX4Robn3sD3FSyoj1mymFWtF7LIVnxXF7QrkMhWdNG6C5nFQwgTA0Ze6TeLS0BR7jr9VvX2ZPUVbKWqtayxCHddrAA9xAgtACzfG%2BoXw1QoYBis8ROmg3Mqt0bpFmYCJ7Sj7XolAcjWLVnpUrlnW93nhzgfZe3VLKHEeL3BXVP5mplANkBzOXgGBUFq7h3dorfKPha%2Fd37kTlhTFtdK1CJsO04ua9%2BezkIiNfgA3S6LPfku1BKhf5Ar6XaVoRGczSLxPgg3aerB6BYs8WXeblL7XD3TUBAdWQXm%2BqBq25OTc1XCyaPgmMOXR2cIGOqUBIUprmG%2BggQ93JGwKu8Ny1Ip8%2FQYDY4RPxgxi5EsOp%2B8uRW60vrD4Vv0mu66WVf7IuhQOD8vFt0F4khWo7pL%2Fv961D3JvuErCDjCpdU%2F3YDV6o2wRNJN59GMshXT%2FZNiwsUu6qorXQ26f4DpRkZDyeL5IJ5guMKjpfN%2FUgI6hBY5H3vk%2FP8Wq62pgBqJrUxU4L3%2FzHMHf0pEDY%2F%2BVU%2BMpYnIX%2BqWQ&X-Amz-Signature=504e4806913ac79bea13852b76dee4dafdc72039365aebf67f1a80b762772684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7BBIWO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWshH8rOL2y%2FOYu1%2BqCU7W3bPmNoJdqeVVf6SLilKhjQIhAKJRN1ogus%2FckmBsWQ4j%2FEWFuSwQuBdtA98ZhZF55U9JKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhKGb%2FCAHDbl5efWAq3AM%2BUjKtcuf8ac1fuzHAJShBDp3O%2FdEdDYP%2FW1mInK3CXScYasu4ldTI0Lr8t%2FpIEuwBMoUXE1WTwsFDLZZfvDUmwtVs2kIAl1NddE1yGyiKL4Nn2%2F3Xg%2FFu6b3nRnlLlY7BKWgaiOEgjGgUh0FHpYHdnzCOc%2FeuFzYF%2BWA04s40R0ySsYEFfHt2%2FRIvhqfEEA5PxOAXCaUIqom4ejwzj8HWKy3%2FkN1xSmCovV3hMqyyUUYHhNoFMFAoTPnU3%2Fd460q8X9rNbEwypXCV53MsdG3oPTt1e1Q8dCcbM2HcYZv%2BmCO0RlZcsqmv1ptdCEHgL0BoyFUa7Sxb7U44gMCpVTjoYTVvASasObfUtrPQKFQK8Rl4ZOa6qCEfhF%2F4B7GRsl1%2FdSe1WPYcMCGMVLfXZcZNv0WfOWNTeY3KN7pO5lgxreD5uME17%2BO9hOSN%2F3BVOqV3nKytiTWqnDhXNmhRpFjGo%2FRdKsxFR%2BZrjDUnE0lwdQKqQokh5PRMPX2gQUCuremlqMTSGgUAFHzCbXm2R6fP4%2Bmu9goHNYeyZJ112Cswdenuuv6nvvQ3%2FqbbM7sglU2fz6oGGMdSQLCcdzcHZ%2Fp6M2nyoymbs5NEMAU6PSUA%2FayO7hes8t2TagXkGzDA%2FdnCBjqkAbC83Qk%2BJEvM76hdj7jSH2aHxhQZlulzTD9eHs5gjQYjedMnvmhngpDQsAuktJTJUpQi5HVd3v3tdhPkZa%2FuOwYCCjJJkKQkZMY2OAybXYVNVdY80A7BZMhZeBGdFYMs3QXmHeJLk7B4SLtcCLvfuoOPFhb6vEPrkYtd%2B%2BCa0iTeowdCkX20AZbVt6SXdo%2BPLNolqeMkt%2BA%2BK%2BXY1jteJ6cAoW88&X-Amz-Signature=1df428e38d79d5bf5efd250b3a3ed97244a2f488d285949a1408ee8107166b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
