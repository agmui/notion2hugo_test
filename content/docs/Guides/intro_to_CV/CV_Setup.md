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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446CGFL4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQD5osMX2pRInTQPFoJ0kSj61fM4qfBkdFMv8GdS5HA15AIhAI2lm8PuyT5eBtn7mC84WfpEBV77rO2Kwp98ByV1TG9ZKv8DCHAQABoMNjM3NDIzMTgzODA1IgyYAXosZOQ7D5YpR5Qq3AMSmUedfUdFnsyislAerobugZ2O4XFYWuQsczvqH3X0t2ExSI5UNObF0NIwm7EhVMe81Io4LNC6zvM2umWw%2BuP%2Fvogr%2Fs6%2BjIhD2TeRu4wLAzbJadARxVm1OasG9Fi1dClEHtj8%2BxhfG3NM39Jy9Q0dVtbvqSxX1LYz2obw%2FJPgI8CF18Hw%2FUPuz3qDxQP7B7jvzOx8jSH9RrHOSYe6HRmjQLYefujFOJ07sYXV6dIdO5IEqsuqA17P7BF3g23iK%2FmyW0RB4OQwswaTyrjwiAc%2BAyD3O%2BiKjNh8BYKVWAOS6fBZUcg3QEPY8K9QKFn4B89b7p9dAwBbfW7oXx9TzIhoWI0ZOdZNNmL7Dazdq4l64QWWX3TQQanN7r4QnKGGs273eqiunIiMzPwzorNN2ENaQE%2BAosiFj47FFup50TCrXWLz93Bdki3lVrMBGcjWz4zGGY9yXhZAWOGzvGxIKDzbEQesoXxx5lClxBFzXXz2Y9w3fUaBP939jKUHUDF6chYTY3ePmC93lcYUNM%2Bki8TDwXhMrnNgnoiTc0dYbAopLhoFmgItFi10Cbrgow1cx0YVtmCOJOHlA7OZmwNJJNJG0%2Fszo9eXeXp78kHscvKMZFAUQTg8afNWpBbk6DDmi4C%2BBjqkAVh0XS8VnGy%2BPZk8Ep4ltOjvPua%2F8%2FwyNcLZcBZIQyGapSyHyNvFtBNMQDgnzICbOEpqNs%2BJDrnxhg98qPcXexkcf%2FgOTk9adqT67qxtKPGtz2ycRVbiNgtI1lmJEtisCCeh9X8C1CnbzvOcOlcGZ5BJl8zUEF3Wl8kW6BlRAgbRaykT9yCrtY9M801IwP8d8VYqomIAXeddVMibcEj7knrM1l1A&X-Amz-Signature=75b3a9076d7d2d9cee2b1043e5e12846735f18eae3a074ba04ec071ac3b08b2d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKTUPEH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCxWsccvZOR61Jcmu9nngXxOvt0M42Xkey4xbJIHNaoZQIhAKqOZsbF95Tazf0rIoKMUFn3WWK49FitAH31jQ47%2FfXqKv8DCHAQABoMNjM3NDIzMTgzODA1IgymxA8xwh%2FFndAjC9Mq3AN%2BPHI1dRL8frEF92E89in3yHa2EzBQQH40Zz%2FqXewfn%2BEL%2BMPJOCMX0vSn6fBN8k7ALK%2BByPAs9qrEUSzemf2GNDC0AMGNiL4q2Cyl5bicaQW3ToJFWj7SHkTDDRgr9RPofzZ6gds0j7u2KmJaFP%2FFokS%2FTPd19%2FHKn0LvWzPjVzKgIjFzqIr4e8alavL2V86%2B2WQZDBOf%2FvDSl4EkeIaPxwBUqY4ORJNd%2BBavvprb%2FaZCbGveq8VZ7T1U0p%2F%2F4DGr29BZGp3AlfGSyqMswYiq0Lok8DGtgbDBZmbkR3NixcvBL7On8YmG5%2Fj3fh4UmTeRIPCnIwFsqBE1sdeFWvNJhYgudvYZgUxuRe5dqQPCzUKYkfGXyB9OIxeBRLXe%2Fdq55QHIFzkMPrnLNQpQwdz4WrrWOFvn8ixdLMe6fJ9OmdK0XJ%2Bv4pniIXZQD7jLbLVdEU4UtkLBjwT56wTC3ud3FcKSeUqQgN5Ivj8yWSx0CGUzNtVu%2Fg30x%2F%2BPdqZi%2BEsHTOETzkntUcuDKLc8Z6z7QNZ6ditJIwCBdOats1PwajdkBn1q6riYbJuWUxPriODHjsVlw1PQdciGC%2FEalPZw3fAwHBE5AEtpQQWStIAU7weQWXqo2qaQ%2F9mNdzCqjIC%2BBjqkAVEz30dD%2F%2BPEvBtHEjaa8CwEo9hxPxpjmpo%2FrpDliVUtTkFtoVtnFSaZYSq0Ll7Q6pvflSfi%2FV5EMzvPcGuSencCM7CeFu2MVrCgfsqsFiXQChd67lZfhTGxSroCzvW1lRZByqg51R%2FYbEf2%2BnH%2FdjmUBjvw3irG7vu%2BapNL7v7srhsL9KhdgIMXaIt65sqwF69AwbCHgpQbMA0mZRE4GMRrN8ko&X-Amz-Signature=69fc26fd8235b4eee1d2b952af3175578e47a52cc23fa0880c61c056e19811f5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
