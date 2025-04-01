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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMBXQL3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCG3f3N1GQvHpO8l3wLb8P%2Fo826EVHsJKmAp0uj%2FS0KNwIhANMx6N83AvR9XYY6aQMHknmdhwG%2Bhptf%2BJ%2BS%2FMhhUch8KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoHfw%2B0ToKfZgve4wq3ANX5mWhb%2BVByxbCMQVzdzrLfvfPYtHU%2F0KPGmDIe%2F9vSWPiH9Ji1lPd6MJHtM%2FUsCqsipZ0EOEN0g%2BBzvn7GWFsz5FQfX0ehbtZb7KOuImn%2F209spknwYJMjQFCq6BPtK5k4h%2BKSGQWfsNtS1mb6RPODGGZy6BQn6%2BzzAN4NykV%2FdsZnzBss9riTS8MD32btU5ehIOiSm0TmEtjTk4O1dBJOh4e61TrNiuxIZAAek6y6r1Mmh6QsCZMlw8rG3J73Yrc8%2BLErTf64UO6K%2FVk8RDb4IBLHzPEoHjkTUYQIt2MeDfoRgLmeiCf12WsePrvzJgGLC5P%2FxEvH3p3ZczIgri8jftM2LQhKa2Dy%2BxRk%2FaFAHFXgiw%2FDhqoLG9Se4ANNKkuoBW2KlhB820kqrLwNdF5oPxiApenlM53UrdB2eTBY%2F%2BivvKfKL6dSv%2F98aBN2h%2BkrDqc166JO3aIWglc4J9HPlLiElVgIrmVtrj0Ec%2F%2FdH38yh%2BVKbUfcYYv4WN2ezoxNKiOmGsBQoFCtirP0psHN79r30gEv756aqpREhAFeYHomsppxdnWmLgDpKmUSOL6of8afPZV8eOz%2BR6afH%2BmjQOSfHvjJzmy6ahl4a%2BeurpteTBQM0fziC30zDCWiq2%2FBjqkASkCKXNGzx9gfq8XJK7s218UwnEirCD7RFL6IRtCwbt%2FB144Mhb%2FUOdi4KyWlWr04FCyQtkwDklQ9LPcGRNUyfNy%2FpIABQ0VociSiu2zRXliWFR6TUl9wmgsWdPNRiwDVN8Ioa1fh935He8JTgqidZ3YlM7UdlGRC5qaRTJWZz5UUosCWmOeO38SMXHAU7NPm9goSkgPXXHtgb22UyuHpKt9flAi&X-Amz-Signature=94a47afe886adc611fb79e7a52e9f9146880906193fbdc6bd0e85078918e25f6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLOJ2ES%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICitfr8WdqVhap%2BIz%2FmwEoJSjVyMc0cpLg5dlQE4831CAiEAlb0J9EahsoZCHzDAvgJCmBG0vQr7CBkYuLDn0MJVg1MqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIFKC9nKVrWODbuJCrcA%2Bwa5HAJqTMWqESsAaOo9r%2B1HaTM15gsYFzBR%2FxYOXoLgBiaPuoPCfve2g%2BI97BCd2pNEYW80p%2BobKfN%2FK8VEAJ7UL3Iduy3c17vbKMQ6phbLdTKXM90lzxA3V1QK5b7CEAFK0LOM9K8RuuJEug47sUdf8Qw%2B9Dzg0bOs7j%2Bo86wCIqXNZiprYojCbCTY6%2FSThm26QibOGkesrWYxAteWL2C57xUwf5BhV6MMtcvxsPaEVv%2FmQDlIEWvddTC%2BAj7vovf7SlowQ%2Bk3sJLwBj%2FMspMORIdgjQSTI8O3hUXM%2FiflJl7ls4Mt04OBapTGkCaSE91gMvd%2FdOfmIXVPL4btmyeWKW%2BbWTIZf0z5WAvOM8k%2BEQjnQ8ia3nlpoiYyLFfH0lZecCr4Hgb5T1VhyUNJhpxcRI0xcx9jKEhV%2FAAd1IasnaXTsxvaHK1JTpAHFaBW5ouOmJPsTqdCrI5IyOX6gLslb5sgj7YC8CJj%2Ft1WVnlTufmA2VHD%2BN3zPIMVNEGQSumhthqTL%2FUWHflG%2FmU9oVUv%2Fh6sHOqyb7Ir3j9yCusWrS6i1jLtaQgzgEAg%2FFSM1wlYNZE8OyLb0UrHoeDporGk9sx2%2FAIRCZ1dfWarIaaMDOf7uk%2FXOh6xgoJMK2Krb8GOqUBd9t%2Bmtdq1LPBnOfHA9korLWYoAuBR6i1Eeni3VJW3O9FKHneV7EZtL8%2FZlj3rE%2BZ8fJK5RlA5Ag8IXmhwzn3GcUgym2zvxF%2Fb1L4HFbDwbnMdhtJzlhkPFMax1CLatiwA4WiiXhyCmvE6GGMsySMMIK7j01qRUixGQTXlC1rWJBskfaegvJEmoiShhk1sB6yjHIEFAugrMkR2iBa7Fw9TzdNhqRo&X-Amz-Signature=f3a9e6b96208876d91be1546ff4c5e910c8d8cf996332fc71218d5131c058705&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
