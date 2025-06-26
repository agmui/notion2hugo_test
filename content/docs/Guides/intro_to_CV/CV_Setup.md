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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775I55LG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDShGFA0dc9z64mN8hQxOzohrny493KjzaqhF1Ax0Wc5wIhAMSVgRxUOmVgq%2BpTc%2BBZvrhKADBnmvl22jWxOs4X4qHHKv8DCFgQABoMNjM3NDIzMTgzODA1IgxBRMsDajyuadLK7X4q3AMQurYLiyL%2BQopqSqo3KtclZ4fY6A8AZFSoYyLoQG9%2BX1mHoqXzMwZx23KpOc%2FXHqS8Us9lRW2qKMY4Epf3eW1mZShKS072HrJj0RzILmTEmK%2FQuy%2FQ%2BamSNQtW9vzQXjl56tGfvGGocDMcIvZcISD4IOzfR9R6m7ubN%2FVfcAu9JRZ7vR7vA9PaL7b4d5AwIJSgcAbsamlA3v5EbdP9DQfbYXh7MIZlqehuvy%2FTP1kkVDkh2hkm5%2B3iE8Jztf5qOuMnlqN2hzYsrP3rmvYMndW6t5mZv8w9CW%2BJqIY0WCSdLcnozyhyDyCRr86D6w3ee7VhvNFvRjjQZbRlvVEFl3Ggf4b5YaXMTyf3zCGwRaCWz2b9aYeoNZUXS1d4Lkv%2BMVb6XfPUQHo75y9HyfTOHC7c7qN%2FdIOVYjwz6Hdz%2FOJ6bvAXTvAkBMOR08woP8oHyO5ACi3i%2BApD8QvRQ%2BUyIlJ8BHqTBYxiA2NuLYiTglRTqlkmpUzRjEgEI0rmKTnzn%2ByJ8bUHPUwDveR1sSppEtkWbkr10ipEOghrSJUmc6WCXRf1j%2BSOooqUTd5aJoDt5PBb9QbsG9v%2FOcruWbDbLmXdRcGVK68XwisROdq0NK%2FMvQeMu%2BxhHK%2B1XCzxJzCY6vPCBjqkAR%2FQ7UXmoa%2BeGbmGm0p%2FOsqXf3WJTCvhciL4Mpu7xkxp4zFucm1aNAIbse%2F%2BxktVrzGe34GAaNqyTMLLsB3hrLk76AuQbjRXQZ5aSDttvheaCyNO6zVwg%2BQQWhbeqqyLGqvdstKiQXgnafyRkJNIAi0Q1hY6bHdIYz1KrkUu8j3V6Bu51Ip4%2Fup9wgNjvnSZDG%2Bqx4B7vQNSm83CDlFgSEhPpRsE&X-Amz-Signature=e01b53f82d9b3de8920cf20ce0832a00ed9fcd45ce7042419f677df227671ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4UC6CX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHhFopcQj5RakQDk%2Bw7kmDi2wIRVyICVkfeyfsHdKvDdAiEAlL1n2YR6Cot1i0FO7NmgB3BounAAEgKykqVxNR4nXkgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPI%2FUoJnf0x%2FLI2T3yrcA0V0CrpXVrdPQWvSizjWx7SdXBpD%2BAh6y2gpJ91FCmv4Z7hZXv7JwEM%2B3actwD6tl%2F5t7pkz29N0byIEI3CaPRAzshq7uuKdSja%2FwGZKiHAwovMd7FD1nKSDQEAtQtoANPKZJycDJiBBInc2OehEQML%2FLRT5jQyxnp%2B21azkaS1cffDbQhEYDyJ42BMLtbfjqpE81kp3aG8NOo%2B%2BZXFtEHEkE68fGVwaJdgPoeSPa1afKDdAnI1ZAvCa5zdHECt7%2BbGaBsU6SsKVk2ampqyal3YkfztJEMH%2FleqIvdOGDVCCNiQ%2FxofirZe6BwqPyzyHnSq9NwCzf%2B49QpyUzotG3aMN05egc82pQ4Mhi%2FKBkfx89EDg000CJvMJyVqTHW7o9BFo0%2F4hVH8AkMlmW0ClkMBhC0034taretpOzvUFGxvNKKdw8mwyGP92vpDuvOR%2FrpLlq10bgshLRjYeQ4KUC4ry1xoAMuKNe3QWWREMUhWdK7xl6aqe0YWSug6jO3HApgEeigdnurJuDYdfiyYMSbGjqdl9yLjN3qkWipmY8OD3STrtdI0Me67hiVJgozlY3%2F6Xh8gGK0QLR86eWCaIbZMTtK5ucMCTsYKfoYBRrL1aMQdT9q46WZ3mkbE9MPTp88IGOqUBP0crutQeWfaPGrbnlqErPt%2BYwkYjmBd2%2B2Yra7NVBbE6XiBUd94rkPq3SY4fpGcMG8tscex4SDOGByxRdaMedcYzeMja%2BgN28pYqzC8mwEvOzxy7PKwg1m4K2LAE%2B4ErXj%2BUPqVSQHSsdHVEOXDOs4NmmKgS5Q2JoqLZWedkOb2jMmbyG0kRkTxwCNAJiezXShgxygMS8T5E%2FUn3CwjMdFepGH%2Fi&X-Amz-Signature=df634c72a0d090fe8c06d0d72bbffb2a726549701b21bdc5b470288ce9467996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
