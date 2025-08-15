---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFK7JZI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGRASZ6r%2BahZRgPFv03YPgdlMVGzTAJJreXWdYVCq3aUAiEA6ZkKxeY4s%2BdzpkUmh8G0ugJvF1aUqkdek731lsrNyEQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJ6Aqe38W%2F2HTC0ONCrcAxwBplgJGyY0xEro8V%2FmFz3qSi4JHTFWi%2Fj6PHpoxBYpMi1S7B3FPlv5DEtjlYmd8ucQMlYN9SfLkhi27xMwMlGU%2FAHUU%2FseJiX459NMt102ay1o3WiDVon0FXXDEQRm%2BZmJXXGdrb4AOsDdeEmF1F0fJ9l2sl6TjNyyMwFWeqGf5vWKOUWgtaOBuViP8CFHqsw0pslIY2yqgeON7sHiuPya7CHHmHocpOM3rwiYkrqpLOj2fKAz8hTueYjgSrUzieo0ZhhiiQkIEvb1Svq4NpCG420jXT5IywEf%2FYYzb97djpOJqVMUbjzCbLJ2AAUjaDNOv9JmxEEbV6ckUZX5sDG8oO2pxUHwITWzWDJg4WviydFdiSuBSke34SLoIwKmnZkyOBe8svRcjFNYlIrzPWysIO6flgfzU1arcxvwQbZ4EbDGWj8fnj2lf8RM1JsFe9frJ10P23soTeE9bQW4MzTMg00GvQLT%2BplOPEW5ROYOeQ%2BmVn6NXsH6y849r2%2Fnf%2BBhpvVJWiBH1PohGOHXdlgOT7%2BMGP%2FFbQgzWD8CdH995KnsMlimyS2GgLzW7j4gx3mb0sA1QQIBfzj8MlsIkd8t2rb7lUKPt%2B3MXEHgLZL5xgWgQEXscuKvJ7eAMKja%2FcQGOqUB7UFWvH%2BBtvcwf8KrkfF7HYV6hAz8XdeTpGi2QnaN6N60%2FEbJU%2FXyCV%2FiEm%2BT9MzGGI4EVNyyFUNcga3BFiSJ%2FlOGP6hfa4x4y19H4UxGWGIJGBDW3PvM7I4jD2s4CiB1%2FRFfNtzhWv4gDi16esNUthQO2BuHZ1hqgPCk2uHgkPeJPtse3NJOgFp%2BoZO96soNYOsxMfbEfIAMnPEf1vR6J02BARh9&X-Amz-Signature=05b676ee02a852c9ecdafa7907bad48375bb7bcd0d330b14938e4ae2d8350b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2JH3Y4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDRzac71BgfIF9SLMcgdljWdHu2%2Bwz%2FSz37d0c5sr5QDwIhAKWHM6Xb7jQMpC7ZVZ7Vv1kjAoH2vwVGZnGQF1d3mNnZKv8DCGMQABoMNjM3NDIzMTgzODA1IgyehkHOs6mzp3bFHB8q3APQJULNN9FcgaGQDQn8qUlgFifiIYJdtkNITW90AigQFRkSLXDdaEYOkZWAGVErZY38k4fFPRsNtECAbqndl79yY9Rr8dcpS9yMaOAa%2FSf5t4eXy0Fj4dG1Mp%2B5RctvWmBVeO8FIuEFc%2FQzNsHGHR57FWaNFbooevhtBxjzqkWGuQtAgna9N72hXoWdd1uupRV4kRQNWhlCxCejCUcRiHIqZn0M%2FwPkpUf83q6elB8RsM4KFvbzPAn%2BlTVw%2Bn99FAiMUKik1jARHTgkHTmKrQ3NtWO5RthbBFdCtzkPQLODxcK1lZN1NqadmayP4eLQrtTBBQ2PHAI595KogaM9QjuKt3fXLwAiDIDBXI%2FlkCXC1NAIjGzSaQIrq8eJf83wy%2FKlZfpziWlyigUO47SJfsRO%2B4w5M2s9oM2G%2B%2FapsHO0vSyKb%2Bw%2BYcjmKeUzvXgqPiBjE%2BHt3OpiS1b6F3KyHES47HPJ3Hj5BKH%2FXDmFB1pL%2FCTtuyo8abnIYNWmhyjcSPFYeFgtW6YHDzLeIiXBIX3Cn3lXuPiGl4NLOEA%2B5SMlSoYSdfT7jZHmNit56GcV5lTBQv%2Bu%2BMaTWMGfRRpJPI5KuRFzyrDes10NwHDlQRA3GPrmc1krekrbGfukTTC02v3EBjqkATUJ3qS3DAUdErjkq6Llt41EV5RhN7bBviXgKzkZz0JFpbU8hDyxC6dLN%2FZj99FR%2BAfFL04CavwxZbcrJNCy6KC5RwY4YplKf4RzH5NW9svP77MqBtq4Jv1bjVFewe11mFx8tBG1m9JI4ZMTeKPMR1IBcYZIOx1gJK%2FyWqfRmMC8Q6Ko8A%2BCk%2FFCxBifV7s2YaBZeMg6vSUu8Wx6GHPk5ADEOIC2&X-Amz-Signature=25890e57eeea16a34e59481a9dbf737d464b17d2d6a2cfdf20c4055f2a42eb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
