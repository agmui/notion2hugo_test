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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WROLXW4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDJQF8sDAYWmMs91DoehYJ8XafqAlNF%2BQ2s%2F%2B62wgo%2B8AIhANgIStvIdfksl46VR%2BzoThjuLTsCPa1SRBJTwCZNWV9yKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmtExqvUdsK2xGOvoq3AObkkQLtkMuEUqt55qcFqJq9rvnGU4rrxYCH5at6uKpDqvXVvT5onsQjlE4bHO1MEw%2BGSAi4lf97OeJJWebFAmnApE9ftoPQCP00F%2B49IBf7rbBn9wcCU0XiHQqE6UBmr8cumXxZfawtCBweHVNfqoYSkTUyvxzgNFa%2FZmFCn8TvzgzNRBhL7GMZiWTyHWpQSHEywW6DGpdHGTBnj7a%2BYTLfIHSJoY9yOC%2BH9d0PF7hUNAMlFaBlPWcEZ5WR5c4EuLlnFuLk0kSrjcNFoPKLIsQ8QgDHt6RhGYcledcUvIEQHHgGT%2BGb77tAIeNo4yVqEDdyFWZJHFMoYpOxZG3tpmOyouXHAJmsJdlc6YDTZINjGh7frw3eO7PUSLsqRt173fYF%2BSiuTQ3Rf9ShAVN2ufArjZQFywZArh6lQYqBmU%2BEFbOfk80kT%2Fu8yufG4pFDzucHUp%2B9Romvm6unTPcu9tzcjTvchDMUE8ixQHxwM6yH4FdNTK%2FuZ%2FNd2ohAvPIiPhLjOK3QY4Tdxxu2K12lzjmrmmjhIgZQxljnvcOWCNnJsJ%2B3HWFjUGqvcB9wDQgyTLSUu2Js%2Fqzme2hiojx3g6Fj0fDF6BF2HSpg6TchJNJObzENq1heR00q2GjlDCpsuO%2FBjqkASXYGM8jVhLHlzH1EEj%2B0RlipO9jKy7oR07ZjCIu1mdeG1qiWaAUVboTxay3YZlYstc3zh08E8HCM3h42Kq%2FR%2FlJGQKRoX0hOnvVfU9ctleTWS1U1XnC760br%2F8hr55hV1m7crmbMSHhyLlguDEHK2olnXmqfRaqHxJYN75ygBFyX5X1VQV8CPK9ESbI2UXbP5wecnwQ43KEjTCUKSPlKR2%2FM2eB&X-Amz-Signature=4e8bf08534194ef60e3bbc4303e0f4830be08d54454860475b237429eae08c9c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGODJEHO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCMwz8RMvNuM7NoqUG49rzC8BG1w3XOyECllJr0yReIjwIhAKWXlvsqyj5oMYcGlZFeeRH3vG1Dm6L6FxybGGtd6VwnKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI1Msqp6txlSEKmbAq3AOxCXnk43gMWEcRyivd5k7%2B9GGs76CbdSRWrzQG%2F6Ah2KctlcIyLasuZt29GnvAA4i0%2FaJNfJvRxr2lJdq5iAuz9jfhl4Gv%2FuvMIBwudqiZaUZsubbjCh3IUv6xYxUPZOQqrYtS68xwK2l7MMuRnnXctAKwWtIjbBl9DRrE56rhYApCKE%2FxqmBUn5btn8b6Pc3kq7sfrPyv1RgUARE56iTqyjnzkC6ahMVfPQilhYKZveQ2VCIsSG0OwUjWzBdeU1SRcWrr%2F0BN%2FeRhOvfceEJWH1lTvrP9KaZoxJDQ%2B2xtRj6OkvErzIs9Juw2VY0%2BZeBCqoK7VAHZVrramm2tLtpulKkdOGPZTq6IqJ6Ux3jrjQ3W%2Bx0fs5%2B2hEEbGMLzyXTDo7v64rQ0DJ5fLzVtu%2BmPwtpYV%2B4343cwhDw0f3cG6pdoqss3OSB548SGGI5hJ%2Fkur8WL7bJ0jItScswVaocfBmxE9Lvozpaa0%2BAC9CXMkob5Q1hQRIkvZWDzmuQe8BWf8qNsOUEXQe3Mozz2lv3vh1BeB6zTJr0LKFVKVqBXeWTYtwL9I2Wde5Yy0eYsV6jODHPn%2FIw13PK4x5HgYeyGDE%2BU79hyj8UFBvlXzptuVoCyt%2FWt0G9TUwZ4HTCrsuO%2FBjqkAQfhrtZZ6VO7KbHWLvUjUcvyza7tx8TCY3agVXP7Y7FHlabStJ9NYP73HDKpIPGm1XgGhlEBtdsh8nuSZoji%2FMnuqkG4xG4wsv%2BfJAcXiEcMnUUecLwLjgXxfWP4YeMDLZScRhGsfs1Ff3ipqSiUG8eJVBQ91ePDRrfM5%2FofkaltagZiILNetOlUfnU7XCXVXrSDHmOSY6SIIQi461zHY7Etp5vw&X-Amz-Signature=0629abee8f0c5441dbfeff451b1417de2194f29162e060b9b5cba827f747b509&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
