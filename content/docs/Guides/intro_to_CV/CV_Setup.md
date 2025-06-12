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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQVZFGF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAzirFw%2FByAVNcCdtCiv9EpUwIq6YUPY9ANo4HlDRizWAiABNpa%2BG7BmS1LEUu6ZG9jc5l7K0AubP4u4YLkgmJrsZiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOoYTst%2B7XoVc0E2zKtwDGRSCQee%2FvwunQgE6o4wCDNASiOrUmXB5cabLrSkQClST3MfgNZJ7iurJJZhKj22cqPqx5E3iv7Q9sxMySF6ZG%2Fdw1byQ1Bo%2B2Dd%2BMW%2B9w24wP2YWQMjN9hIP%2BSY1j0xthPqW%2FpeYNYOkqweae%2FUSgwn8mtaE4PzaeGvATBt6eVPvFdOh4JB1meMjBCqvVxO34Uu8%2BzsKL%2FDq8w%2BygGNKxS3eIgyk1tQrPEUxF3w0irOianuiuT9izCWfQVWHcLpI%2FArEpuMvg01VhysG2nO6ylQ6ye3EIn9DKQKWrnbn2uohAl%2FdufcldlRXt4i0lEjLAcOBjtZ%2F%2BRL9Lv7bx1DMMMyjzMBpyZAt0gwtZyeJPHZgZoaC2clkkNgZsi14CyZpMDpO%2FmIOgeP1nE7TpGe2v4VUCvAyxLCjm6AIx%2FF1ytiBlcOclxtDCVDmILHIQDIev0JvpNf94N3Yv6FDno9OG2VQSesuGVlOG3UyIpNQLBQDVhqo5azd198NrXUF441R4XnJQ2PCpUBZiIwGfFUMiE772asmiMvms5WiPEaKe0MgKHrBvpND7ONINuJZbU3XyraSICxcJgK8c1%2B3c7RZ%2BWV2RVPW8JQvSbJ4R2wcEh6OU5VWhPI8qetdEnkwzpCswgY6pgHOqwPyFyQ3HYDQYeW70J63iouUiSxfdSIO62bfSyanb8Bun7aDP%2FjrkU4Vv9UuJC38jVmj8M7Bden8aOfN1w%2Ftqnn%2B56QJxlBL9XdM0HGj%2Bbyd5ydzrgiU%2FPQ0iYdMR0AKKHeD8MDriNNNwAxOHzgtPwzkAo3VL9W1dsHg3hoVNjTQhLaAYv9ukYhHaICq0Db7PW9hL6%2BhkLtgOr4E%2BCsrEnZfgYK%2F&X-Amz-Signature=0aec8b8cc3b70362129052c4358550b3431ae66cc6b900b5b53999b47b0e3a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZCGUPJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAVRjwTldyZmjdBii4XOWj4qUQ0OYJmOkiw64QR9CMVHAiBb49Zdh3ivzIsveRSgMBnXQTlZvEo9dVgs0jjq49nB%2FSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWWVth3wR1JbKKKvKtwDuzd4rNbwxwuAxK2ztRaZqJ1QMzQ4xcrR3LojzldOEBCAM6dL0wGDU%2Fr9Af%2BF%2FiVNmj7JaG1LkP7NowJL5xGaCNC0m0gvL3AJIMMe%2FobbVLakHgkHrwAxdFtIJbwhQaUTVaMeoY1n8COUaOPMtpv%2F3O2CvNe7Ca7z32uxZW8xAuJnrp%2BXMumEj2%2FOQ%2FxOOTFrEm%2BaTLqlfaF59JdRop2rR0ZhFpSENf77DJfhbz47jg1TnD7tJYMYgBSnIqL%2B1%2FrAKVYHtSMfzT9n%2BfX7sGdhrn1Y4BUVd32l%2FKSkQz1HG6jHNMG%2FjHR4fQp9JX1R%2F58usEkMjGzTDwBQM49Nrg%2BYxOfFM9252oLJKRRa05xdsQlMi1tBN0z%2BOXDnz1h%2BZposF1oqXLFOXHVjpvxZZrhNX4PBydn3QK6wlNlSywsVTzosJV2LX0AHsUhk%2BiA%2BSFYbEsJfR071dqKdo9d%2FDQZ1nRkRw1BSSzjc6Xayd%2Ftor8cNgjojW1l1nMGie%2FYMmmETod9fDVe2Zh%2BRrHYnr%2BTOnJSUhfpNphG15TzzFbCliyvOoa2YltFCEpFGThyKD0CPdWTfhebCBMWr%2B79Nkk6fE%2FhRvCZ%2BadisfdVUVdf5%2Fh%2BlMUGZ2B%2Fiu5vYwhMwvJGswgY6pgEqNqac1EBNnfXECEidPMK35lrivVLfY1BaEkFqH%2FyMRA8UBpg2Vjaq%2FQ%2Bs0ANHDJUH9gukun32DSWF2tH4shBc5VP4CXGp%2BaxiC2KRtw4uBzLr%2FUk9CWB%2B90sPO9%2FhzeyezAKOCpKP6f3KOr0XIR%2FRZu26RlangOuxGhTlMszsGnIh89l4ozA2p7Vs7rX3ub5ORd3C6g1DKHzwTgZ5miyn%2BM7xPth7&X-Amz-Signature=1c571df3b36e0c9382e7b05ce2713fb95550b9132634390677db11b2ca16d036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
