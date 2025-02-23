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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3ZMQYG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVQ7gBf55gBlrvxpnjSVCoPKZKAtpHRpuJ%2BNAbB%2FDPkAiBnMBji3zljWuTPovZ7excCxsQv2A%2FOudUtup71A%2FErKyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZT4aOnzXNTtMY4LyKtwDA1ztxmzQP9ut6Yn%2FE0iwCsaqU%2FZdLQD7IbyE040Gm5fjcdC3QCjDh10nsHLJrYdAzyrfm%2F18KPmj1of4AHyv6GSQzapMpYBkpDGxYfMnnbeu9iQ2AUjf4BO3JVLiu%2FBF3%2BfMkgeDqe97WD4Fgd%2BqQtZzjZcbwSlqV0WNxFhNIyRlJXNLSmDgIsSeQouo5zpaRqWljDUmXNKQc%2F%2BTisrCR5DGAfyR20lOoJejXMI0iMgJF84Z9TvL8J3vVLWsfDE%2FwKAIAlu0k5VL2MDkVkMZpWcxLskomUw04Opj7guET5QmOJpREC%2FjpEGVY12ctz5gQ44Pl6mek9GY%2FkoSkzDkiieBksD%2B%2Bl3bR79HaC3TLPoFnJQiI%2B39K3xmxmjyWSzGt9TdoVRJPRvXhpBJNtKd3tDMH9%2Fqm86cEcMVdMB6X4kBC1XsJuOiZOks9h5zkHBTvu7HzsX3N75%2FNjHCGQkgwDFMtbG4qMrIzYFf%2BsSLpgcqXzOBrJgp2sOMGVjnfskHBhdaUacNZsebTLxxJXwERj0F9lmJ7LLAPnIaFiKVX%2FbsVUoQxxWK9%2FWVxhSv2ijkpISuXzIRq6LcBOLqhuBeDAyerF5hzyS4zZ61VSkUOUgsZaSee145E6ljWBEw5ZPqvQY6pgEH3m7pUO%2BifYpJWUmag9XWLZ%2BCTsfdmnrd1Ce24Uv5xW6eE8YxKpexEKCUmn8SaOKCd1Ai8yJibnf%2FPrLogNh%2BndrYSwFQ7DcJZnLL5aGk00mnc1pQvIYnTVydw37X8P4vhOma83zvjiYuGRjEcJx%2FX8F3JBBpy5knEew11F83gORtmjn7L5ygshs96eRTsEf6fV0eQ6c8iQV3thku9mlmZ5DVu%2FCy&X-Amz-Signature=df94093fbf42c38756d20111fa64ecfe2942b347b3e94ab43805479bb47625b6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUBMWIB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjJh4eyvcjyqRz44tKdCiGgZ4I2uKTRGd2bQ1W1SFkugIhAOpMwGPJ%2F7CEVzr%2FtJ4iSBZnNjWXBl%2BvFXPphv2miMwBKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FD9FXlj9LswjErXkq3AOqz9YA3WOEkj7NLssWe%2FP1RWFhuPblE0bYxJUUxLF2tJ919KT0ntwn6gMdl6fevOvC9v1T%2FovMtBH85Kb2wRJCEfKKhR1gvKvGTVL%2FWm9l7TgR8EdzVNooGNpt0mN6yO5Eqy8AVOiAu7%2F9LDGfwJNalMOAEB6akmwHHqdWqd6sUSi8I5nJgcrPjrQdAUN8gTcP6F4HlKHGkENdssV02eBt8DWkSDLQw57KJ6HXFK2UKuRBky4LeBxDEwXJX3y%2BtWo%2FHprpsEecVcE47r1RyTb8wyGTyLucpBq1QHgkBUfk8iK%2FQLiw2x6%2BkK4o8esltrak2roF0%2BzNGiHPkCWjc6XS5AHknBF%2BYmgNPkZLmuOAELnhFSNOYi9znA9AvstVhvXIxLt4V2ZA4gXnja5hMIzbmFqqV0QwGJLYkrNQsACBKaH76Sh5zL8QsbC%2BcpyzzlJHe6NSYy1%2FNMekzUICQCm3p01f1VCZDD2R%2Bk2GgnrNT%2BdeeNXHgJwzRlcsd2o08O%2FQbBs4aDYg5mZRkpPiVVBgFP8rL7Z1HIS5MtneUNAP9p4JVxWJmBbzp6%2B4%2BMz6u%2FETWIqFIMyf9CwrCvIRb7r0keXubAFJhRg8ybH5t%2Bigs%2FI7ZwGUorMJNw1L6jDpiOq9BjqkATtSP%2B0bBPcmeJ8r7pjbeiDB9%2F8l4yd1Twc85VZtOrYAAL9BmUixuu34dRQ1DRjZyPc58is%2FLX86q6H76ilGjw4Pa%2F39kEKVgCtmV%2Fnh%2FEnnghnfU%2BV%2B5fItLD7a49ufe6dD67mxZjFVlMTn9F%2Ft3i3LYq5SpvdXucXkFxIDo2Yafn1onU3lgcbkjXiJ%2Bc3obzuAOuOHJJfuDt2WdKkZgpEA8xKA&X-Amz-Signature=a2929fe12a6038dcaea88e1014cff00c065b5e167d1dbe68df55c8a06395cb78&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
