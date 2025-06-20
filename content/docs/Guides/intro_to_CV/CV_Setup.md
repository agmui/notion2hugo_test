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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2B3AYCV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA19TPudl1V2E29l1Zof9W%2BkQ1PQ1UMGUi%2BogOxe6PrAiAggVs7CYo%2FTiah9N6Uso%2BUCfNrZjhmtftoqvfZKzFx2CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY6XzJK3riXobJZeoKtwDYn%2BmufzdM18dQR1ZQQa8yBrKa2I16muK5TcdeAldwW%2BHl2%2BkCnavG%2FwokjIlVbMF1y1KzSAIMpZNmxNi5FpnsxwSBK%2BQ6VPDWNj0nQhOqr8RYs1M6Nu8hjhLjN4rajM2TkvT6HHOqVPaR04PSPIidq%2Fuw5U9TgCjGwVVEss3rYp78ENIfPif09aiOTC1WKyvbi53uUiSyISIccy9jmw3SNb%2BogLLl7Mbt%2F5i57z0ToKRjq5xfdlKWpLoMJLb%2FY6m8RIA9ausELtzVKRqEE8Vw7I9cpOdJRBE8IxVwuiOymMQ7J5vkjOx7WMsJhdJT51ASbd%2BOvrGxTrr%2FkvaGXMVP135Gib7pfQ5xgLz9c5l%2BJVQmbFLTJU73XPRlkdXwfVQIQplnCnd7B0nKNSIUNlNBrXQjKdosa9bzT29XQZni2HamI%2BOR3HA7%2FvMVe5ERN%2BKQi5elZ%2FZNOoXAGc87W95ouuG%2FbXm7GEUC3dlCqoOtqzf1dfTdaWcH5PgNw1hr%2B4aA1rDElEovf6olz4uvgtC4yL7YaYc7yDtvRkKUyrwjsf9MelNX4GANsUJXSTHEFyVjJgyGMpTn%2BSwkl1SsEfxkiqOLiTa%2BBw4QME9EyPU9WXt5IuUpIE7fqgpEIAwqL3TwgY6pgGthhObdxI30MQO2cDhu7Fa%2B6sNkjnzGSxQRigWqvXbEgYPg7cw3k%2FQFU0aN1oy2r6NON76qApymvXCtKD8Mod2Ik25ilHVC6Ry%2B4%2BgH79SFd%2FXrZl%2FyAwMXB70eyIjqElYnZTQ2jetKvSn3kl2Phr9AYU5ZHaeue9sUQ2VA2AYknA5nFdG4UWU1lbuXsESvbmcqNgupSrV3PN0dM0O2tee7Q1xnsuv&X-Amz-Signature=e32fee08bafcea804250e2020b71fa0be3efc26bd33ba48b4f491eabbe426306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMGCSAY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrDXbltPXk0jKdmS3vwumKnzxtgGBlJBxBJf1JwdViFQIhAIxwwF8D2QS17fsGqadTrkGdtQe81C%2FJ1imjra%2Fy5hqSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTryjBJ8DWjZ3w%2Bj4q3APvnkiY4JKNp67xMYIZ7ORuB%2FkQTTihufXoR7IGzlkUgWGeP8IcIGi4JztmE7qsEOhsg1eb%2Fu%2FSs8Iiy%2F3F9kuPwhhoWry0aYJYFPMBwGKifVyELzTH9MSBWzSr5CK5c5Qk5wpBFTHj%2B%2BrIL3Sd1UhAkmGM610s12zNwx6SFB9IM6f0mq%2B0WDSlyd6wDh9SMsFUAsE6YEkqGS4GcBQn7ZvBOLKhgTRLVGU7en%2BgMSuZInOd6mutfiu%2B0AqkllGgBLDQt0vvhiNtoEfie7mvENNxYAze5RsthjYc9jb0J6YTrsU%2Fo3ZpiHqyV4JGVkvmJRrVd6%2BxZD6fJUGD3cLv%2BpirreREhDNVl6odiIVhoedf5pGjJXFehaQg7hjG4USAuk89EvUrR9xui3CWfxBbNITiIscEmkbZkEBbo0qHG%2BVQyR5YzAx%2FbPTSs0J%2Fkkabd170T5zqBersuFk%2B9Xgb8vPWI7uQdN%2FKlTG6QDtJ7X74ajWZASDKN1lsP0kekXC2QQPR1ejDQZTVm%2BIomt5LKVV%2BAgED8U4l6tW8u01ZX27rnfxdD6RXZfs5UdeONC9e7JPiILHndH5LKEeqOYltnu2kBjFzXmWYaHwEIXP0afZxdGTPPvRdFE75%2BHMNDTCqvdPCBjqkAVoIdI9ymt%2Bj%2BTcVPjtbwmqFsrAkyvpOsICGy%2BORlfzuu%2F9G9WFz4Qg7kgpJKu%2FNLDrVr%2BDgUpI4MCmORWyALi%2Bvmja%2FmtrIVQXtLngyGTRAZyAbydL8hgp4AzpQQPmogoprWQWVoUkAWg446xXVUpY%2FpPWnQ4Sv%2BxQJzmRDTTl7AX2%2Fk31ocvnc8Lt5ltzfCb%2FZ2joxa4agX6%2BJh8nuWcXv5wgq&X-Amz-Signature=645d421faca87c864d4fd236f08e19efda08bbc8ba4cc10ad1e723458867b7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
