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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSOZ6RS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE9E15j1YMmxXc1nGKoArOl6K4UQZO5hWzolkrf5Kq2%2FAiAHA2dCGnd50OHAK5vyxnprc7DdPJBw2OgkTmO8pllBzSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4At7rSIhnN810hZKtwDWDmrhbuAY4kefvV0Mzbk6iHMrqKrK1kSu0gCvaLOoeTj92vCot6eZdecnbT2c9pKzITLAIcPWbOUeapQjDmbOLSOgTl%2BD6BMMjVl3csKbFtfBVUWUlRSqI4XmK92IesidQlRZa3ZM6E2WDB6GkPQgvD8kDWkkhHhs4w1OXik1sAjweauOOBcWtk6g5nuF0O7ktk9Ez8wa544BnLiIXYHkOqreZkDqNirDYRoanQJmslyrxbYu6P6nvzki%2BFVRQyFLHxc86%2BK0pECA9WQJHYm6R%2FRDywyvC6hIksT0o5Gf1r7S4puThIAFcpOrHp2IExJnk504wmNPsGd2SAaOhrtatXi1%2BK%2BbldPLDeXpxCKMCad2b6GlcnqxVAc9N8lFfCashq3Be1%2BKDzfa%2B5BcfFyXWpZhRyMdgNeFE1VNbALt13jYBgrkIWRou7EjZZbLNzx3nsMt2Laq2XgdY6jU2LUtSnqfcDY7F5M2n3WEXuER6gXq%2FUcaQ2frYWLhqxUxsbudZZ9JTMF9MCOco3QIBFmBN0DPpx7gK%2B8Oa%2BqEbjd%2B7RwT%2FLaWiF%2FlR1b%2BvsdENvuOOfZfhGmkXsW%2B6L4EL2FT7uqgOOxVVcOmljsLvCSi9a035ZfVGspNrVYuZEwq%2FGowgY6pgEOyXbk1%2BrZ13XaIaHNL4uN5yWV3NjbavUdbOGPJvTnD61wKHkWRd1ASaY6KClkWIF5zeTxXzASEbIRE1CwCQrtwYhhL4uNG3CQJUUd2ROm7EjDW6rkPu18%2BGfkKG2fBGRZFOGi1E95P6HAE%2By%2FxI7Q%2Brgl7jHlTO1pIRa9e7IVgCitGqPSMjew23sFy09e8ebPYUdgz%2BumyOevzM7DUTptLY%2FfF18Y&X-Amz-Signature=0a7c14a14bba7fa75de4fb54a38bf683fe38f36a20e9b82e32655d7ee93a0976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q57G5OF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDCjQdDHoPKx6wgz%2Bb71wwFF%2Bw%2BgJxjKxCc5brZ8lX4DgIhAPZXx7gbw%2FKuoyV4r5KSAu4WY05h2Vmu6qYTASjKntBeKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydobuR1RRqISmqzTAq3AOoA8LsypQh3r6LsYsjOBS8p3q56oU%2BjzbmcfbxWxrM3F2Z16BTLqVKqVbzVp8dNwDA9MIESLJMGa2%2FiEr8QaqFC31TvKjY2CXIEmumsLxZVzgScE2BmX8V8tZTTk6u8mFcFhkD%2FCBhLU%2BDPX9jD7jzjptBO3qLGBUSSuc59AF9d4SzgY2%2FdOi56UHHQmTxApN3acQGUNuD%2FM82pjyUu8CIleNpp%2B25x6TD6Vl7GNG8QkPFgqf9jo7Q5FPYg%2BQ672NglBYp9ut9Ko4ak22N0iP5oo4fmaVa9kyyeumFC%2Fu7Eda8m486rB4Br5h0MiAP%2BKtZnAGiUjlqG2vSblmJYwAemOs4VZGep5YBoM%2Be6XemscXI6ptlm8iVsq2Adci1v%2BhNrOKWgtMkgU50b4zJ4xP05%2F57Jxbl8aWJ1znD47hYMtrZ%2BrPkjpiIu7GvIX5QcQ6uSHE1tdtEN%2FgSy6bd356%2Bdb24doW81ata105RyPPmZ6Ih8AlJXRnVBo1ECArcuwCYvhZ2jTvE%2F5EeSRbZncb%2F%2FYpm5y3jk7UaU7P3OqNbxOuxvimXUnK9%2FK9lGyiSVmYJO%2F0zFZM3%2FnZpsDN%2BJePak%2FT9U0Q4MB1J2VAa3tfijXgQ8B79zeMgilw5mzDk7qjCBjqkAREcpGxZbFFRQW%2F19PG2eGo3OnSjqgGVTa7QdtaBJndq4dwqqTRyi2Txf68hmUFBpC%2FGqQ%2BwsUEBGuesSRQ3VbIwuGSIIIaCGTZx1iJUQTl09N7LockU0Xuuhsm11KwuRmQaG6C%2Brokai%2BI3a59%2F32yxNjixjcDT%2FmoQfXPAqZSuzeCeE7NSpSJqN%2F9SBTVfohTx5UmM3R5JVjH4wtB3ifbPiaIT&X-Amz-Signature=855bb6096c0dce9a8c0cae82f341a9cdf02e4f7a45fd132c3803d6c8eab837fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
