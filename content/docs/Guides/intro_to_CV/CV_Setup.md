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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4NEEFR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG7j4V9LbSNZArQmX4fyb6iwsHZjCoXJOVpV09k%2BcO5XAiEA2JacEWD6Ydb0qM7C15tLuC%2FLDV%2FFPI1uVyOBBfp%2BWqcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMOAY6p3cmW%2FoYh0NyrcA9bca%2FJeTpoYc4TOF8IfO6hWfHCXRWDmWVX%2BtojS3nFjq1%2Ba7JAhwt3bAhMBPR%2BvqlMtu0lrqjapxSMJhQp5Jfnbh7SDMYGJiHirxZJJiW2vhtbdx0gzLUx264faI8hOzg8yATjzKJXTdvFrw%2B6o4qgK8LHf%2BryK%2F7aP56Kh3ioR3TmdenX25ZNrIzBd89UcWffcUIaWe%2Bve9vIn8D38UYy2UohPMhFzqiBSksyQXb8Md0svs8jZUaQtIol9X4t%2FyLxJXseXOjjf1nTeLtW4FRAVmkkjDGFr7Xh1WITyMQPpfgCescewTogSMuiaJXc85ke2mnxRAOPO089Fkuf1aFrIHs%2Bq%2FxGUlBME3TY0zi22Q%2B%2B2u4sjnK3GXSoyh6m1hscw%2B6ZRDJU2wIR%2FAkjNyxqW%2BLj9nAeHqjhVe0wE9lh0YkmhWSXyMhcW6ULg0W%2Fmv%2BhZtFw%2BR%2FoRmVq5kf1Kc9%2FtIFKDA8tVOYO3UymW9FeXvGMy507rcOeqNZQsBipZ%2FMCD1TpdZC4zvv7dxgC%2Bg0MmrqD6pxwHkHVKiSdeSxmzHjU5KXjf9lYecqytUHzlxzF32HJ6XeqHjX%2Bs0kw1Dr1qAMWLbDvcHCR3f4bbTALm5KBmqa7R12rq5a%2FIMJ331cMGOqUBshLO1KB6ft7I9gjjOLB2fGtNjI8IIDtSTzCff%2FRnDu7Q5qLQqxY6y4VQK1QUL%2BO0zD520McWqWL8o0%2BCyHLXZOh3hPm1LcBcwZuCRj6tMoyDlQs9WNaulMZtHvCQx7%2BEBp0eEXKPn%2BRHS4wnwirGRatp%2BFqlfHC9486OlLqkb1ObR8T4NqUCf4EpW%2BbnbQee7gMjU7vWN5oMwyyuh2TSurOkrUIq&X-Amz-Signature=997ed686bd36af09edc07bde8c58de279ff3fa970b8849476e88a0bbf49d9269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5R3XIE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAxgrV%2BFvbwOUk%2F%2F8%2FFWju2po7TxzspAzhQhoZXFyzSHAiBXd6JYgbixv4jdoz7%2BcPXs810UA%2BgYsl%2BLhC4nIN7ckCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM3BKiwMku30JsgqAbKtwDUoyTyqAWPSRzSv4JD2W9BYVsg4p5V93iyepjZvjZi3QkGrFZ505b5dRQRWjJKEjzKrifYmrmAgbYPBu5Zt7Ghf2iqe5Q4cS43o72T1inyKZFoDwzFmTeNc2tOo%2Bx5OftabG3CmQGqmXxbM1q3B2hVIY3OnbsclqEWwpE1YjN6RX0I9rxq9UjGDdayceaSOWQC1tuHOXQJI8Tx1rbAuqNyaqHGhiJe8Jio1sdsHhx2WvlqLmV7MsySrB07REk6gQfwD2naSAhRpI4KMRlhdykEM4Nly0So4NY7F1j%2F9J7gZI6c9NqG%2F3bQGPG16BGwc5oHlKYqrNZUGIALEgq51Mc%2FBECKuPBGgcnhtu%2B%2F57Z9sklkMHHbX5OXlQF0O2CCmi6QS%2BR%2B5286ox%2FRlGikpikHpAWm7Ic%2FJ4TQ2H8TFRcSeDgIp%2FvIdAJgAxzbPEgdu%2Btu7fksDNT%2Bm1bPJEbT900P3GZI%2BEy36xbuV%2FK9MHGsd0VbyNC86hEaOTOE0j2rDS3ARI9IYV1EPy7eYTav7AL7%2FkLp6H9gMVM4rJiZbivpKCUNobr7hky1gdCD%2FiVC6dwPiOgHb6dMxZSeBA3oNR945Q%2B7TM92nJIjvPx8jUmSTB3cIojFTrp4KaoyEMwqffVwwY6pgFMSnlbq4VzvFdQQ8oXTHVS3rYCSiQjhJILsKaUXvZ3V2hTIiP0SfH25n9rbh7l4%2FdJi%2FP8kZj0tG0PEf5CNKTIF7ogl5Im61ujXRTAH5tucaR7410ZA5mty3Ueo2X6PRb6YITrCIsonXLgOy7NPHk0xk5KyZXzfqiCYS8%2FmjekIiszzzR6vdvaVpffvJwChs5VheNU45GCFVqhTBaq%2Bo%2BIe%2BedDZcX&X-Amz-Signature=e2262e0653cd9d955b36e07af9ce1d198c803ca242054db37a75145b4d97cd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
