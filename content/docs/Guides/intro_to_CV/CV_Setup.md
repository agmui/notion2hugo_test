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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQP37F7F%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFzq7T%2FISnL4RqC2FTrz%2FtBFVXSy7J%2Fe4hSuBWMFR4zgIhAJ0%2BW9Aqxackr0Ha3c%2BgyK1Qf5wWrUlSPbdhRzkE7SnDKv8DCHwQABoMNjM3NDIzMTgzODA1IgxFQd%2F9vZ9gadmuIkoq3ANAklFUw0pQqMKQofZtNtdvc5k1iQDoEGOMhXML4PAs8mc6HP0Gdh2le3GxgX3lHrOJ1KMHe7rJOrJ4coKbp7c7Vaa%2FLeeUoxISb12kU3PUXzZD8d0Y4l2voCVuLXIY20H4piQ4AAh7ftBJcv6fx2i0an9DQiv8yhgeaKktRR1vUp4ekdY703TigINGA5QPssJYNr4uu6WSulXdbiA01GiV1kU2hEgyzhWq584sxxMZRhWTqTpScFcSn7ZjFBFEWLVqdhE%2BtX1rBXZEOxzr%2FCyExamYU%2FTVXeLogODUghUxzgzIjlXLBbpD8pbl1wpasuj7N5sU26hUwMAJgR64yB7HaTXZgZYlVysYKeDDk%2FT9U%2Fk%2FHy%2FQgcfZfekvkFC%2B%2FwyrPUuOSn2vWmuksy27sgCESfTrIhjEynphx8OMLeifPkdlGsTQmTNQ1YbLC4BC9rihSOzN85jnBPYqLYHy0y43RvnhjaWsn9NDjQ1PWweq5tzEvgRyEjgTq0UzkXxvEblqUaq5%2B9wpE77TN%2FX4ZNNRARROiiHUJflfHnu5zek%2Fm5PkGszxnTL2r9Exvh9ta2bMI%2BpcmmlBPARE8jG%2FLK81FjaKv3UcvzPqwFzjkZ4z74XpCx%2B4abWFzZAULDCcyvvCBjqkAdAE1AWiSm2cpsiH8D2xU4GKXrLV28G3U6uV4XzAP%2F%2Fhh4zXg80GI9lDmeb0%2Fx3GjxnKlebl1Ed2KLN3Cf8QM2aWP7rIeDbJvnCnwp4PZFNwVG9enU4Cki3ioXovLtuhuHHiA6YFGB2UObbNN9z4UKGIQeQXTB5Ryzj4vbTs%2FpqdFv6pLBdXm84CZsQzeuDjlLJHqnjPjjMGgJ66yAeHWU64ME3V&X-Amz-Signature=1a31ced8d790d540f6e857ce094f32f7c0689af546c381f96db676461c6368c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7MCXI4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUZMkYsvAw%2BxjRgRYVKKnNtUcOUOS5O1BlNQp5SJs6ogIgfpLDZ4mqQV2faNmp6p6fqSmeV7lu9ttfEBaHTKnqmf8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBp6gA5MltxXls4NLircA1nGXUzCdrXihm2Tr3fVPurgU9O8Zw6aejJZVgwzNIBAU1Qj9RlC4pEdzH7cn2O1F9vaAZDQQ669kaw%2BuVq7NpFcUYdJ4PnMV1UOG8nhHTum1eEIy7vkBYzuLxPQeADLSCRaLcqrN6MmwetIWUFsYXDRAndYkzWDHS84sSD%2BRY3xIxwmoNW9JbLfxOMZaACz62Ge%2BaTxFzQMa14hkq67VAryOND0z8puR0mdR82tVzc54D3OFzUijOJEkMvjxyxHYGRmlzy6iuSI5lutDs8D44Ha%2BGn%2BwOEgdy6nPSsmYhga09SfgwfmVeRDWi9JaTZlifsDRUZH3kFvm2mKVVa7BdfUX3wATxyj%2BphwSHXYUYEwE58gGGQKnaHdxBRwmaF3HlcbdRNYMrV4GEbUW7oafgoHbRB2Ysf9ppNESml2iNbzopC4GY5oB9dQlWysvx%2BqhfpUhe5VfY6OKPiGC2lvuJqXL%2FD%2F8W7vjDEAWWiKdcY%2B7UatrhTdV38UlQE4Kd4II0JUbd%2FkI41pkEib42IQmvvqnLvR%2FW50lLUG9bYXrs91uTeRquogs0%2Fosi4t8%2BAAW8dMcNWshoIDJcnVz9NUgpElHszu1HF3ibraTjpXZ%2Bo7K1vP4GKCsgbZP5uMMI%2FL%2B8IGOqUB8ZOOvsnWDYpI9fv238BkvCII8FuixbFW9Wk1q12fmhZxUd58b%2FLW%2Bo%2BNNPJhciOrl%2F%2FT%2FPsKov2mJ5be4z6S5vp1i1X2S%2FIaMgGMxdUEl3URJR%2FOC2ULcu5jqAmNj47fb%2BkySMQ8diEIGMMx18JQYXBia6IhcXJJIm1mIuPi1tX%2FxcIWN6H2hGjB65p9Qzp0Imqv8EFD56yEGgNOE9FXd1cQqQmj&X-Amz-Signature=c81120066e29bb1380294caa7a4c1618c2538a95da5886f0c47dee0a98786a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
