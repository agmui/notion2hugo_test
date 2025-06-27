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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=af8e5a49d849e90e95edd4785324b13a1194b1e617f8c2e2870da228dd3217be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI75N63R%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID0ZBNqHZ6CgmbcurJfIVYSvlcXQfs6Hijcduglncth9AiBUlPqLAdZguJOhA4UsKbibht48Bv%2BCD5kVWSMOAlvRxCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMiDCBE0hb1eNKlefPKtwDlYhIt39TPYK%2FtCmsp9VPC6y7ZvBlGJ4O7Et2HnuuTQkqx19ZLS1kgwbYEJDYCHhT4xOZOW6NA1d6CiZWN4ReB%2FedXt9yD3qu17RIZbTer0Zs8u4BTehiRQAvwCUefTPhYPLmXAaYLlEwcA9XLbbyxw%2BOoAKwrSNSsHGj9Y8uWSXZwiSdkXVSC%2BD%2BHkOAPHVpcoAwmurHBnyz8L3Cip4cCmZ60MEGQXcDe%2Fj9wYseDdY4mtM2iS8TEaC6hT7bMUMqqAB1%2BJah1IRUpWAKVWcskxEy4BK1J2BLCPveprxAOU8otbTnqXwntQjKxsmzrD0icfuFRE5ivLiZRLtZHVRR6iN9CGmelx1nf73%2ByXqT%2F%2F9tPHZSJGH%2BLpZC3Zomxc2gs0yIQf7dG4mBP%2FSs%2BtCKESbE01K%2BerUGjJ%2B%2BHcVw1I%2BETSuumjISCQ%2B2VQz7VFNccRPrzfpP1Uz9RDCGqem%2Fl3O%2FvacSwcjjeTL%2FuonbJwfe3wTJ1yKIsV0MeY9zRJ%2F0FZYlbotW1hRfA9FXay8Y3q%2BHzCYExrvYy0B%2F0tVrmtwgBj0QogOf21VbtP6o94TGFUTC%2F1BRhwYmKJssSiUGx3jNoOEqc8hgUZ%2BX5l74YMlE%2B1N%2BA3U96t6uVQgwt6D4wgY6pgE0uALpWUHn3kXK6lM97KNs4KECyRlR4H3GCD237D4W5RaYvNgIG%2F63WyxtSP77kMU2yQIWtfhbfaYjW5RkL5vmVcqcuPAwTunRmVF%2BKpp8ALYA4izogao27RSEm9ev1b8fR2OVW%2BA0AflWy2%2FFSFykiJVENIg%2BGG26C41Dm1%2BBRXxVPZVZqcnJYmJWs3HQxcvUtl98ngHEVpo9yQSmYpsM9Pcqtb%2FB&X-Amz-Signature=159723ccc2ce7969e1ad0b6df5206ca50b274fa4effd6519ee5b61963907bad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
