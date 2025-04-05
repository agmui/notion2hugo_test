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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7IZBOWM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVBiXAg%2FxDgq8mbfRMc7UrLerYr5UUk7oIiN2FoJwO%2FAiEAjKTacqIv06QlrfgnMn5ff0v%2BcWLUzqI6p9iOP3W5LAIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFHIQQqMUcNIRK9FDSrcAx%2F0TC6xnvNhIRt4zpWkTs%2Bl2rv%2FpUOlSDnv9ckEoB%2BvRawxHKBQlZguTNKiP5fjHL4ns1kaO5KYQWZJ%2BBPYD9KCZdKj%2F%2BVCeD7dcpknHpj1K3Uuo478Q9td7rz0cXRPUHF%2FkHdRRSsP3bmU4tFhOBfTsHv6uAQ3Ikw7LfHl71WGQU%2FKnTG5KRr7p%2FMe%2B4G3I%2FDw1ll8SKggjEiyiXSA58OdJhU6ns1HtbLPiZVLrqfVQBDaPCkuVZCGm%2BPHuCh8Sg7HFzM0FkI88GLSZfiPXRIxSXtYRzPTAIUV59cg2P0O1tkiHPq0RRVeR0gz6gm%2BwoeKhi8P6ZJI%2BBcC5%2BbZRhdX4fCEdIyha5paIJh%2BsohLS91KVIZw%2F9gDryi3LhQU3O0Z3oocMDlZZsQrwZsMB4QSJmki3yFYUlNwevV0G%2BlgQLfopDtCx5daCNGjtCB5NEuD9bbqJZRI5%2FhpjBtJhbV1khy9WGtu2fLNJQdo51JvOw3wC2M0%2BvVJE2vQzSeQwlEoPKQdwtAmoMHup%2B7V%2FaE8H%2F0VcOXQueD4T0r5IHvqQz340P321VnPisX6jDCu7Jqu7h4ZJGmZLN%2BxfQPLTCmryl5S6HjoWQHt0uodn2nMIuvCXGRtlW8HTAADMNLCxr8GOqUBY3c5HlXWGCqbmYYTOAj0HnaQT4LOMsCP4mJQ5Cztj32YtftVz7jWixDUue5Cdp8c5SspZ6EHrqnuooG74kZnGw%2BEJHTjulSDerbGWdqKaYcpqTiAc%2FpqX8l0M8Yp40o65u1%2Bt2tN6bLeNYM6KL8qtWnFvFeqNnPPjet%2Br5ximnOri87syzmZLgQQjW0%2BfYaRkW8hlUXfxyzUYVbHBvLhs8IhJt1P&X-Amz-Signature=8c1ee74633e0dd5b8137341c7397d11185f114ba6ba5bde4174dc4d5cb0f7162&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCCJ6KG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqOFQNY9o1Z8VfUZEAPZ2BVi5FgORSSf6rq0q0Q4tofwIhAOOPR9QlAZUhCdnTAD%2FQivAoh7fArO%2FzKq1By12AzZmjKv8DCDcQABoMNjM3NDIzMTgzODA1IgwQVZkIBgTw3COvKPoq3AN9RSXccfAsd8hmGcgoQa4QHxAu2SnBxyjgIaNHmJ8%2FU6sWakOpwdnFuj6lZb4i%2B34hjTVOn9IchBSsfcbic0zbeeAk%2BlzC7sCv8eBm5pUK%2Bmu396%2BI3ys46%2BRlk5uxvWBOiiNNZyoDf4cnQZHLO8eLYFHzDqCLWMdW9urmVtd%2FeCXotI7i7Bp%2BijSJxRKPH1A65NkRg%2Bi632ud%2Bw87%2Brt74WVvtaZ5YU3CW9f7n%2BWXsq8rrg%2B0nBM%2BOMf5s9VNeV7Y8Zel%2FjvZaEmD7hHSGTwakOuy%2Bf1pFW7FBJph4l3nA4TMIIPicKV4L1mrgiV2EhmCKjBJkWc%2F14M6kzhyZEdR8Wg0LT5dgTuzLyc0GHLxE4%2FdeKgmx06bbQEZPvqvPC3IMUYE6gfVndNBuTD4kQ8xtoXEcezuaGNYFMBF9MX3FcUh8Vzcn2h80iaDAVIfg4ByLMgg3fH81YwOm3qd0r6606baXm9z1UOWZz%2B1o7QBGOSPi3b5Azh6ZrFs%2FBa%2FuWniD9Q49EYCvMK%2BPW2Qlyy8hEdfs7Yt8j1bGD1799JLt6P4HeXZuv9AV%2Br8lSDsif%2BeWbqQKCZ2Gct0LSD%2FxPT2buUc9CPP1WzgPhbUk7o3JyoQARJPHPhIcZnVmTCwwsa%2FBjqkAaiy3M%2FuweZrqDp6SePGOeTK82Z2tCeTz6hb98t1rCBtUBTVO0EzkxsrQseFIes10OfVZSMC6TZKYV8ar%2F02u0InzoHvzKrWSq0VDJAtZHN%2FzbFuXGcIg0awmJZGsSSOSuyT2ddJdsdX1ugTWLa6lvINu01Bxl9KDNLZDlITsB%2BFlLs%2FC4QLRv6ttrN99UoBh0OmbaogrcQupdCiLfLUr%2BvtB7HT&X-Amz-Signature=2ef25e3c0dc6cfdeb08a9a253d17ab9ab8c3f8bf51bb44282985f457e90d5dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
