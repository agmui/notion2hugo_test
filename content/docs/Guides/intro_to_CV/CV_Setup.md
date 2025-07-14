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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2NYHMH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDxmcws0A9WkybSzvwSG4R9H3R4mdpIcGrkBC7iQ8U8hwIgWo1p4Ruz9Oc%2F1nmhgE4mA5CqJTZblQRb7K8ezi%2FhV2sq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDImFaIH%2ByfXWWbAY0ircA%2FW%2FXz%2FiuyJsLvlHZGAOLTKNJybDuNHd8z24k7h6OonFnZo4gzTTlCdrjU18H%2ByI%2Bpen3DRPtoXaWqq24KUF%2FjpKTzyAYSebzAkuyvI56yqW%2B3SA%2FOrjRsSn4fsGJFSLO8u%2F9uPeQ4j%2BiVlbayb%2Fz1PNWTg%2FDmwNYJPZuOXD%2BUK0J9Qa%2BUZ1Czbns7411Vf0qUDXYlNhHBPiPulB1ec8YNKqDgYv91jRcv%2FxCAqnSdJQZae%2FDDUCMvDAWxrT0zN%2FIX26u84F5%2B4imJiGRaAJmRiP2y9tftwgv4%2BY5iKbP87ip8Q4Ab4lM5VA89uImoJkbdBBfbJXF0yO0IBgN0guP72tvwKUluWFMS4KSGlMzaoZG6UIVqDuYDi9SOBi3liXhbh6H55EKj0hbxhw4E3h884I3heauypZ%2Bv1AguBufHYwHn41h99EMXPv7p%2BeH7bfyLKNkHZqMsSFgIWabj39GXxttaV9rRMRoJMR02icQEIWrXn5ZowK2m3eKrZg1xDI%2FJHve%2BMB9hLw5rl5qi%2BxUuBmuK%2F93lcj4chjwmf8TJyM8SRr4qUYJ0hJaeqxqVpkcOqi3GYTykKJqK8r3GL4oN5XM1gi1bk3XNGMfN1XaBqkdGbEyGe2pOychFxRMJ7M0cMGOqUBiobxDhznLf%2BjeGNWO1lTGzVt7KbAX62gQp6H6PE9KrQrVmeV48fPm%2FhLzdzRJjiRXJnMdK4NOvodsyJ%2FWgFbsPNqRQxeiQt6mTyOq6u%2BYbB%2B2red0YAjnr7bBjVzYpejzfyko6bvHv6hIdF9aOeur5R3Nm36ykbTtndqkeL3NgipPqGebwwYkzCyAxx5FFxL86E8ltY1lq1%2F5u7PbdthNyO42G4A&X-Amz-Signature=9281930c6f6cac91a9681dc756a82af92b9a17f6dfac4c856c2fdc93d6a9c04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3TM7VS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDV%2B9%2BQn2j7GEff74amjX1GY3BhYhzLDdUXfIvfO%2Fh9qQIhAId3jX1yC5Xo67WHoFq1BlPv6cvtXglI1H2w8%2BzU%2BRY8Kv8DCCMQABoMNjM3NDIzMTgzODA1Igw%2FOMkVVeqK%2FRQCMhYq3ANs0EV1t84J5gSCgbmEbVXkXYLeo80MUrcbrndD6UReKYyY7qofFAsOZeWGfFD%2BXMycSzGICuftKDfkwM8%2Fzkb0vjlLV7WrgzorzbMDxh2C9XfuFssESH4VHB1l0tuIie9VfX%2FYbmbcMG82%2BNyhWCU8SKHkWqqs%2FcLCM1zfeZ4p8HYGJ%2FjIwtxg0LVgHFIimwQ5cTlQvqebc3zQePryIOeEKBLUFIZeVFBkYEZCjv912g3bLDhgu2C3FMT%2BmWHpz6iNIQowjyANQuEg3p54imwhAYY0%2BKwR66lzrustFM3CMbIpI9%2BslLGmtins9ziTgGpnjES6HxIdlbM7YlgBxYAJcYHgws0GeSmoZg9svvAPus8D54LpW%2F7JQ8hVb%2BlZ57M73m7xPmkJeerZyyKSVk2H8Gl6rmxpnT13KQOr3mDsICxOLeFH4HKr7x8eRx6LgU9oE6b086juKrCxEHUmMXFwCFQ3SEZ3N19iCJxiabNFCw1FEigsUnjv7v%2BNb3cF%2F87RnOXFIIn%2F1URbddHKlxrGQP90Zza6KlwaEJRmFsTn9PS93Qv6Z0BTtaex7GbRVv6ts5RqHs9E83tjvsVStAa39QKEXtQDYgKa0lRwfRhb8htHuJLSwy6MwpFrUDCszNHDBjqkAYYm9C%2FCtjYV2QbJbTM660q3im6q9GG1KYH25ddlHERLsy3UcWC61ElW2UQcfDpu1LwcRkUWFAKQg7intmdJ0qTh9mhussXorpjRkpOwIj4xNvzOuY7W%2BLgDTzX1rZEZEiZqd9%2BbP0HJHeSsMSy6VVO9%2BN5tJTPc3sGKzqusaMJGOvgnGov5qn3hD04YQYO0PWdGHBYvPN2LGLhOKCNjPekevwEs&X-Amz-Signature=f1e5cfce3af212e18936717df3ba4c5df76e996659a8db08c1470850b0953c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
