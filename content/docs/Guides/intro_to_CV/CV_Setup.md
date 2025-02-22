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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYOIR2C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBcaDLaZvTMFBaaMfLxeMPnL3HiR0TGPatZfVII%2BRvZAiEAtVRyOZb3GEjSpp7qvpRsQYVhq51FaUwy8RAifjrTH3QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BxmtJWscCdNLUMEircA9A0nHurwCsmyVDClPD4bXTcqIexd4r9pt4fMqVpmOJNoKX6qlmXCxauTZ7htzPlLYjyDcVsxxioeSqgv9MaJrO1g%2BRmY28YgLcF6ZsR6Yq1u%2BALCVB8%2FA7JIw1a0XhEmGlCM%2BapscV6QkxPslb%2FQ2iaCR7yY1uIMSiPQz51C%2Fz8m5QsBdz4oEynbKEy4R5WxuoR9KUXPZ1IkyO2YnKD1tBLbRcm3qFSk2cuRlbXaRq17wn6J0Hrq466lgs5ssI8wTZ996zbnUC8pBh0klbtAxKyZve0tomVSoHMdLt6mAazlXEPLdWFmJkpHNPJH20r73sKXFTmRL87Old65ZpkUB4SmcNrpX52hxG2jsO7CGW%2FEa9ZKlDBGp5hj43V6e94AeNkbG12JR1xMITAZ3KdyxRvtoMl4ahkh8kyfn4PF9zKXW9tI0r3kMcw9BC%2B5Pgf60nhpSws8MyDRJLP%2BCSTtkSMg3pP5qi5%2BBG6Rb%2FjfEUzHNR79wfdn8XZgQvGc5XKaqFjjfQsxOKEIy7gSdPWSAKdIgfMjpzVVkJI8fRYbjTQA9wqFEQZ%2F3JXXUbXEYzJMg0c3dk7oO8GymIkGIsTRo4Za79BraU6pBxmtR7O9nhZEDC5XBJeK0sUrvNyMJHH5b0GOqUBwbSwwGeJQj8zB%2FdOSWYW9YDL%2BWldn4ewMAtIAsKU4L8xGJxD38hKAY5Rk4%2FWXX%2FlLIO%2BRBx86iHDS2ijkmcGGfa6QjI0PzggGqk7wnFIWEjNahg54%2FJu9owiUh3JEbrUWZGfGM2R4zGEnCXd6YjNjMqZwXO5%2FirZNpNYO6C8NWPyZzgMWE7rCQkbVwMAvnOuG4VQnQjsiW5X9H94FRMjo6RPukQ0&X-Amz-Signature=f5d4c0f19801119daf357915b9c92b9539b1befacec998ff4c25c860cea6e1aa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMTTFVW%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJIwkCoflP%2FmD6DZNiBEMbqizZhP5Glzj8OLQ%2FBVxRUAIgbEJioXCrADspvxJiud%2FiYEItao10Mxp5TaCVguanlRwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRl%2BWt%2BN5F1SE0VnyrcA5H1JQrLJkneROQbpgtBRXQ%2FnIWCZlXjIKk6UrHpOnLzwJoJjzBFR9bH7Who7K4CTClHzVQ2dT0%2BT9yB7PJVHirYWy1n2c31kkoVnHp3PPh3I5AidSREBGcopb7LQ8MBymOaIX0wVbebHGbgX%2FhAEPEpYuUMjQ35ymtJ3%2FeKaYpCLcSsvEBwDCzHY2RxJ%2FCMBMnAAwXYZiHeeA6wNwkpl8aG8%2B%2FJcjBMiWfnhGEYAnfdYacgQtHwuxSZs7ZFyIqFJ5K%2FSNXK1RddjCd%2BpL9ZmD64qhQwhp485gq1QcEALbs30teqR%2FepVq0h8vfXmNo0Q7S3BLRA%2BpwwA4z0vyLkyJWipUJlCi2poqo0qAW9wAU3DW9ErFr0wvJzzOURrwboNHeoZFVtsDn0PvA7v866Wsg5ZSRBtAKQ1s9qL3FwNxd6lWZk7kuGGP4pkmRmr6OUd0Rttf0TsjvgFJmRbSL64j1y2DxKk7he8UrfKH8FjCEDKPlx23ROKJEcs3mSbG9G6OoGYVUO4%2FgdLEamLkgIGde17T1iwPncuDfbka9DnlMpBMGkoDU0gsYdpojEcPwhg7a2urXu%2B7MoBrvZvRW3%2FJxzZkBb%2Brf64JVnFqcIXLGo98PAsuV3FKlOJLPiMMPH5b0GOqUBjC80jkKZbZFaV3dTAcTH5aJ8MfyhPof6suILMTlUTYxmUNlFOVOtRa1mmXtqu%2BlzmyQ0zrxF2Od5I8o%2BDwH%2FRdg2rqxgh0px2%2FTohrN8DEn0iwQHitU%2BxLzN7I1WCfsmfquGZr7Br0ZIe0vTFhzJvT7hq4FpXdU20pWhJMRgpN2ofq%2FPnkpNN0XWoiEFOqmyyK0f3vGYD5rQTmOq8P3mzxW3UL5m&X-Amz-Signature=4b1e0ec73d2da22027dd91452864a2f5c7ddbd413be099506163e2cf738e973b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
