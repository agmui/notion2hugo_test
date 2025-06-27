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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVQ4CVG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICKAq%2FQEiIBN%2BsFS82n1newYgEpTOKXePhDizMggNJZQAiEAl6AO21Lv5%2BD7RTyVR3MkzjR15Li97va0C8L0eV23vX0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEndpOlHiSC8hoc7myrcAwGlx4lnN1sdY2K8KypdDtbL5gJmTZN6huctSHVsqDMrvnK8pZzE88IuM3HQr%2FWNy7Tf1jKvZEAmWzgRcQTGfqqp0kyjtQH5jfqmteRQ%2BzYWQ7pUpw%2Fs%2FATq9RmR4RRPaqHdxjKWlu2%2BWHNJC0LQVsFojFLB7BBsW0YfUDHKUIQkEYwRoOWl%2FvhF2PChXhYGQYtzQgmBmpFccZqGP81OwdyDQsj5EHqtqQiyXKPeiqVPAAv6kWdBdFUxNSgYkS%2FgocRxrClnPAfWU6hBIXeMyuuzGcme6i1OfEL%2B%2F7zJ6piOrXZPqFoe9VAcw1eMRPF853Ed9tzQ%2B1O8Q21IAqwtkXRwFJt5FMLm%2FLuwQcGveZemekcnQrUuG%2BG%2B1Got9PcOq%2BlQPUhSmw5P4E6M4KvHVw3o9DUPQxWdJ6pnXahkS%2FjOJxWpqo15yrvTWu8RIxUegOBoAcHfU%2FpkeBkyDgX6lzgOG7zfnVkaydZCxCCACtEHciYXwlTeSXYp0N3YG8oN%2FM4I8JHGVIbVA0rJ5BzZik1bcBTd5NOV1lH2h%2BqM2HH0FInqxc3SYrPoAj9B%2Bg9i%2Fr4tW3KZ%2Bq481j0f2brML%2FvkNgRHMNkhd0JjiuTlOmwMYht1jIr0mNQaHcqnMPel%2BsIGOqUB4eV%2B2NjrKoLaQBQI3FM787npEw9nat40vlyJ4ovFnDzR4pM2z6gue40jCDduF%2BRcZ6A5IssbHKGBYxVCFO82hxZ%2FecinVSdWFstkvtzu3fYSZuuvuYV3FBCIfiiSkyzd9QJbw2qZ%2FZ67liEelJTEP%2BJdf%2FbpmwZyt3lgaoUrqtz8S%2F7M6svrOFArzD2XRvfG%2BNpyr4FVt9QXXSa9HLBOq9F31G%2BA&X-Amz-Signature=5464c09d7495af869f1b95a1009d3fb553d2603a82978a46b18a8d072152a786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBO6ECTV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDfViHa5dpAXR7epdSnZd6MnHUXemrSICtABVPzAMpVLQIgcuk6LsO9De0xgcskZVgosjTQBr0XVqGWV%2Fxl1jqYIQYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJj84IQfAaNtkU7XASrcAzdwHZbqRYUOOW0v%2B3o7%2FSIKTb00gO0cXucueDIt%2FhHJWKCSwjkBlUwXYB%2BdlZxjhB01OZomFE7FTnJfD5TiRqboY9y8NrTenE7Z8s6IkCzcNh3%2BB0BsZNIbaDSvvAsFefEOI11RnJvoPsrqaGN8X9C8TqrV0OdLF7iFoRdFLk%2FWaL7vAoHxqm9zA%2FJK85ZZ%2BExWxDnQilcwB%2BWABvDuBN%2B8a09%2FrFcZ0G%2Fp3o8C1tVDMrBwR2eNsz%2By8kA6CR4hXXl9xuzs0YjJhWtXa4MCMu%2BhwIQEFGJq3qC4x96NQpjobLHzTFY%2FzROvw2lnxu9aSnLNhZneePQe%2F18Ts2nGniAIOQJR5L2GN2C5EjTPE%2BY2i1b7ddQlDmd19%2BO46WwXpncOr4yB0rLl%2BZ8Q1ENGxPw3lUriVg9i2C658IftK%2BGCLHEbaiBav9N6A3OEqeGRlATNOBE%2BFhBLGyFcmm%2BSaxiAPQbwiKflxpeRKc3j1pYBb%2F4FZj9WQO6wNZosHvlWjw4qPsIXZ1Cz0sat3Y1wIOaGu7q3vsCtLKv5oGXx9diPtvLjHmfaDrX63ArahG8KqQCXwHIcxoxQcZR2SXSaBNQfNCzUKJFEEo8rXovqC2rIt6Y4%2FyfIQV0MqsymMO%2Bl%2BsIGOqUB6iuJMwORg8IRmvSZa43pLXGokdsDGp9T%2BoP2M9EeswZmq2SeV1myE4ipWLeBvJNSHPgPxbOVE48Bn5OCHSEubQPxbcGWz%2B7IYUZRh%2B2i2D4JrCdIJbgP%2BEQERdLSYX9XxGUXKJgSyQWDqIjNiQNgLAl8XF8mK%2BHrQWcN%2FQ3F4mL5SFbE0QxzEuleVNqEdnl4F%2Fqvenfjozcy9SirapmLdHsnP%2B8e&X-Amz-Signature=584a22f586f98f35442ed3368d7f76570fc3118555bc29aa025f8b2a348446c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
