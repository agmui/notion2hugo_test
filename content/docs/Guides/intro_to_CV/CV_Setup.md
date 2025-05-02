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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXM7SAPB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCICarJrzE2kqYiKiB5FtMRTrBRfTOjzVP8QBa6CYh4G1wAiEAyZZXsW0SlJu8Z%2B2GWfZUnwPG%2B8%2FqHQuNATY%2FQsM6SogqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqsvHr%2BeUv32%2BzO0ircA8HpsBbF1jiEcgZz1sMPDDb1pQDhHY6uTi7l4xohnaFwH6MXXofKZ5vgJkMROBRkBPQdFTRiNuYuoXtYG23DzNnlxLaCxjcncuvrKEInhGDwaiOhZgvn33JNpLEWW3qBhi32v9NQLWyAwZkvztCRaG3c2YVov67pncpSICeOFLJGlyA%2BlV6dI7R3LHkHxCzsxsC3p0pcfcivSVKbfYMJr3ULYrw1%2BBJLn2hSUkedc%2FKg9UlLs8eQg3euR8Xju1SNgmJYPeDX8b3DG7FktxECyGz7OX4mo5hHJ08rL3R%2FeQTHb4A%2FNhL38ennpgulhwxzQXIcpOGSjlDs59J2JWyab8bR4dDwMV0eW%2FYSXkVI9Ixk0zpUBp%2B6gQ2QmHnNHWpATJ9f%2FO9CQopBVDOc2F1CE%2FtKXzFVchJi6sig45l%2ByIkRyb4AOrml%2BwvOYEkq5auObrvj7pT9e9A0oKatpD3yDgnutlxg%2BkeX3WaX5j07fngLD8ERhQxXnBgt2%2B5io14s09%2FLgmN6kthZkes2ZjDp5K7iBUg7jeKg%2FywZXsNTJzhYpXDZrzavBwvwT8k4q9uSn4MyD7AbuFqM8OVFHZYc27LtRFfYZ468ML%2BHm7H8bxAQin4xgWLFjYa%2F34%2BYMNTk08AGOqUBV4vuJGVmEBQI%2BY3A3wXaLx9uvOE%2Bn1N6uR6K2Gy6TrD%2BANfUJgoummxRLwizmg%2BPwdIzXBGAh6ZeH7bTxiUqdP87E1ZxGhqa2boG2qHQSXGEZqyhk6GUq4Zb1fmuVpTUO4ZOlKQDPmIdiq9nx9S4wbB4UMoKZo6afADSfgfvgSFr6zA1VHUvOb80pbsp4fmK5eSKBFfafZsonM4XtFkfoxK%2FEa9c&X-Amz-Signature=d79fbc94cb41827f0a20b4f32dfd89c02d70973c4214039a08c2eceaf3be4ee2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IAG5H4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC5erbL9E38YWT4lRT0%2BwDsKed2Z%2Bsfto%2BRB9WZBay%2FggIhANI4WyfSY%2FracrcVp4RFn80kgp%2Bdl%2FGDAq23rCKs6nT2KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkZo5nJhDHPXfdUqEq3APGTJMCuwj6KpxBCDEPnaDiW%2FjnZHKJ0adopA%2FPz498HSdg2GZYWlNmzbnNdPEVwmO3U6ocQ8Q9aYpjCt2jY%2Bx6QCY8i1f2LoTruYodhrsIJBpV3TPc2bAKdLuL1l2ulIanGfB1IJ1wMpHAre1ruacN45Gb6ci6GQJnc8Eghimm4UoZz0Yz1TfHEtVf0DN%2FrkfkC1QXA0m7v3Rq%2B7m8%2F0eM99Tb9rd7POGnmiOUbw7DMYfRbt6D9Isb18KfMb%2FW7%2Fq%2FiH0sEg7sMNXZ%2BEm7q5dKa8itey59SBPVWMb8UI6dz2Hazbnhx0GluEaziDiC0t91oQDUJJSqZcFHRyFZvldPed94J8O7ypM3bINPbUWFETIUKeOrMEMq6znjKk76oNzZHtLu1BUswXJpUi6TW5dKZtFGlB3FHmp12%2B10Y%2FiQ5kISFx2whkCGtPtq%2Fcd5zwZNUmbUEvobgJVT5QS7bqLbsKspNjiZSF9AMiUE3IrcaghQs0D%2BgwWtNLwol9390V6HIre0x4tYj0eG8eTS9KqDXK5djeWxqZSRV5bt9J00BUx7NxiIyLVhc0q%2BveipvRdx%2B3EFbuUS4FX%2BMdlJNQ3lnbXXnblT7hhuelx4NsvVfJJYFpbq6RunS5LvVDCS5dPABjqkAWPw5wlhWpWnzKjxwgCCwDL6oewQ0jnJSVagvzasrfICWNZobm2fR2naag3iD0aPeSg9%2BbRn7deA65DzR0Wb8AOGmTmAQpbdXwEpLI0qOIn53UyAKafqZKCg1XoEzKlyVZTm6DKs0OWYnhkOxIqq2772VrM%2BtxWOHfdwkS9uncXiwl5%2F8gE6bSYXtmxg9G7VMTIGcJ%2BxZpvFBY2P7eLqtxYiAsg1&X-Amz-Signature=bdaa4143da20568d24102f7877bb03f6270daa062fb843ec4b4a28583492dbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
