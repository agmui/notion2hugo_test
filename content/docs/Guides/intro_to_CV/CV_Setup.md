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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4I5O5A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDIcnU03S03ZEPOlPd6wd2Yfh2DdwCM%2BBD89s%2B3xOJaCAIhAKkB%2BSMXf%2B%2FS6px6PUiGZqOQegf98JrPaTp3l0K8NKGRKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ZvbwC%2BZsTB67jUkq3APky%2BlP8IfZIGXWM9Fg598zJjf45edO65HW363vybbLnD73ZtqVutdkMYMgBDyJEV7ToDKsZ67LDLDJfxjQjTxDpBbGubxuoG70BWTcuzMbKn4%2BBScMNHvxcV%2BcqT9SOt4n8ylrH4rLIEQftltNyr7kQNUhfM4KmDr2Qnq%2Fbx9Z6Ld7RKhFZDe13sqwTxZdxYjPnW1qvtrKlCM6R4J8WNeZlteDVKWJxPGR0mtAi0%2BdPOQqqy8T00BwSXtDEIkseIhqfXcaQwfQp%2Bykdwkt3M0%2FXZ9SRSfffddac%2FoqFBzRuDMdjiXrwFYzWzTKvEnpN6%2Fj50YIMbmAfcT%2Bbqlke8GzwMAOHaBre1kGfpFpvyLYc3O%2FwhhORpiIwZTvIVuUuIIeNIxzXL98ng50UiRxEheuKk4LJFkN4O4gFZRLXqlm8CinjM7oQEBRrPB5A1hRtd4XCns80zXhjNmnHu26jjnDAN3cv6gMqKaVbUPQHT7h03a8UKba58YnH%2F5S%2FTN6dk0pePW7jWXEE1ILL1VjgLnIBRBHsLkHvlnQ7FpjrOE0WXFrQUjv6owKc8ezEfVZnEFe9I9041dwAYjrNoFlTEtcg2qJsBFg2muKEwzWZFdbQGtuCR787qZtQ17B%2FTDuyqPEBjqkAaeo8pPJ%2Fwlw5XrQGjUlgH1ImpRbwQn1Payp7hbSYm9RkwM5pyQrdXgIxMO5x4%2FGrlkvMZSUPjlpezQw9xf1XKCyRa%2BELLK7Jl9VJMO4kguPaiYKxWJj4b41V6iesBpoiDr5BvcHCjh3TETqLTwvyNWM0eeqNlquT%2F6mHoo1yEYaunVn1UtFdV8sIZdEDnMJ8EqYh1zk8ggF8HTakrpiy3NaCX5v&X-Amz-Signature=15c600e1db89a3fa828a195a487aaef2ccf66db171ea7953f989d2ab9204ab02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSLG47Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCk5WMIXj94YC5EAcfVo7D3%2BvuUmnqUC38hPRo9dUWdpQIhAOT1GufkFaLE%2FV9TkdPtpj237jTCY3%2FNh4qt4dLQrkFAKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySaR8qwVyFFGzSzj0q3AMn5UuE6k0Nqc6LEUVq3uj3dzA9%2BUv5Ax8C0H43uvy06kxj%2B9iMoh8MvAwP%2BOb%2FeO1Khpt7nkdmkGx9QKqcl24qw0CNlDHhgUjCOef%2FlcsftmJmN7Je3QsiHd1hlvfW8HFEcyVMxNBqpU2RmcXV8YJfiIKFIXhU0cM7MO4g02qOh7lj9ZMGR5iE9aWdX0DrrG%2F%2FXwGkIHSvKA2gStzVKHZ7DtzzogmLwyteqFvVDbzRkHrwoZAfvKST7EazjFvSSlm4JDe0EukpRq9AFFgz6JrdFaApTDPIGvwu0mCo78t%2Fvr2mt0tFoArZW4yxmTL49Qsuri5GYIVlwxZxIyYwSvLbVhDnfLFEJFaS4GzM%2ByiHL16WYjpt0nfV0E7zabz6lWKJyn%2BQGtX%2Fm%2BUOsBh1oK54GMymR95gIEIhr4d0rXU9FC0HPePjYvJU3nsGjM%2Bzftgww7a7DSwlKPf%2BdWpW9uGbR03t3Pa5YkPt7QSOXaTbwGKnV2Yy%2FbvW9tMeXb48WGGa9yJ87HksTPLmFeUnKsK2H509BhiZMe%2Fv7p%2Ff4Nyok6uCHpmOhKN%2F9OdVZaLRRW9Iju5ZQS8SaTPB6ycGrVI8stiq8docLvSqNBlLPJhrPwJ%2FAqWq5tfSGNMPbDDKy6PEBjqkAeIEou1yc8s8vBFsuIAh5fWEihAmt7wj1tB4B7pqRCDjHHatyQ%2BNYegMrucfPuP0CbceLmEqh9VDZNOkxVwhAv2peoRaOYtmgACbYAFJEQL80Ab%2BVY2SiULXBFTIiAOkxzSE3YuD%2Bec67ZVsUGinEQ8iIABww3jXoQjwSbhyP8x9hG78XrFBQV2IEjzUod%2FIc47%2Bn7bhho%2FB1egysVE4WahnlSIk&X-Amz-Signature=0e9eeaadd624bb8223c80d2797052c0679187fae16ec3ee858a753e61c63ca9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
