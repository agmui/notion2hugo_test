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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z27LKE3W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICzLHLi58XWzGZFTZ3DxTKGYwJULU%2FOHOdkJElICdTJZAiBpM%2B45M2cHsgtQxKbMoEDc22sSxsvfRpuwPcLflZ%2FxWiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC42hqKcjQVlQKUNKtwDuvXZdEGov67DXVRle23WNgDqKX6%2FdOj4mfoHs%2F6IUZ4lYsdb4U1lzuVC8RQskYYOT0vSmHWocgE7VzJK8P8W6LxfWNHuRBKtvPb4YHA9RDknQV%2BlXiZiuxLJ%2BerD9chk4tgTifBFgdy1R1F8YNt5s7sOSwUd825lQv9edNbJEbXaIExUwb4WGDvhx3PNUlL2rKXM1jVkzZVlJ4CUjgPcpIii8lWDfnje1jm72cMHHnjfVLFDzjtTCGaAt2V%2B2xXUxXTfFRucWR0Ah%2Fq2sj4FvFaApe%2FKM%2BCSvczV9CfB1TXRT9FLKlhnKXbo7kCjI7IwtZOZk1KNrECEVE5UFSxKo6%2FIOYOIV4tBr4D9rBZWDB2MJvLdIdvh2EsrwGnwvlaLEft9C%2Fd4NjYfumtTV%2BpcKpjiNDuN6SiicHwzVeZ83%2Bu5oymPJM9MKax2HI1E5ejtikm2ar6TtTMla4uz3qehH360GCFXe2gBjGXJ0JQ7eXafbbusdosIkmh%2F550BcMWkYD%2BvS6g8uRLVDTdxyolLQVCggQ394jwzOKswSi2UDuK6oUdKtrR2CFO5j5HANwhOGmKTbINoWJqpbftW2s3ZUziqOEz0aPqn8%2Fwe7%2FMuz0ixRiUSZQlISAxK7Msw0YTmvAY6pgE9P52ZlbYz5BeafQW1HZzc4ex1%2BLsR1cCYoqlDtF%2BLCprNDnRTtS4qd7mw8hoB9z30JEj46pYyzJG3ZaqJwqiVbRbXsY5ist68O6Q%2FosdNY8Jnjv5hgOL%2B3irW6BjCVJag4GP7T8ddKjatJA7cojXCcTzok8fX4BvA8l9kLC73LBfPo44imtZuBjbr%2BTTR58T8Ql3ctnT3QPJn8F8Hqm8F3BG6SZ5t&X-Amz-Signature=3be29fe1fc5f7eea823a7639dc1d47225b31462ff6add4791116dd866174cc8f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4G24N5O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFepXyf%2FgGaRxlwgWpZsQd80%2BBq6LBxB9mR2GmPUYuNGAiAlkgXimffLT78PEPonR%2FdzY%2FEbZO7JAAST7DKuxgVurCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzEdMg4R1PKPjKP1yKtwDRXwKFOH1AeEYGIifPoX5bANdgyaUEFt%2BuubS9YGBVjrJ2PlNUnRQeJyCbethOyF0ysUxt23YnqXo%2FeoIAK1Y4YyxW%2BPBclt3ee1DUU7ZEcKHRV5ZOZosOj3jh8MCqZHnAt0QY7Yu1wT3tjpGJNI4IJEi7H44314jxWi4bcHHmg%2BgjpKKyif3ILf2duyxluBtEnN9N8lFdYaKYp1UYMWZKhkCOaxtDZABF0mrnltlTfdm873GzqUCCpojeKu4cFqAYvmoU5lJE17QmM%2BC1rmL9WdiO3VOpKjYkJC9CeajvH9FIARHw7qJzjK3%2BHsG4jZKg8Da%2FQ9ByYs2PMEEdGHRW%2FDEBFDJ86BqNN6N7JDPYujdmWeujrzebrnN7bpIjFJuR%2BVkzF8A9pocMUBmtdtChFYrZKQkn7p5ZZERyybNk4bVtjcOCslQf30JkexaRJRmgGHa9X9Tgws6kHkXzaESBnLKivRmPoHXMdTM0itjBtUx83PZY4wgKsZFKTnjLojbo3n4CKoaWVEyPbGYBTe7QQwas9mx1ZumOVtKn9fL6tbj61f43Fb2c2cNMBkwOvdt4zRsiLXJW2geqJJPyCbrOwi09FbHZ7eqh6sjuVj6ivumcRNl6R2nERNnmTow3oTmvAY6pgG7TSUNgpnS1gSUPJmsEtTeid9Z5PO7fEr9fVFrKx5VX46kLPzI1R6Lq1yZRbCe4SS31t7qT1nPe2dF4PTGwDsUIVwhEPcL%2BZo%2BhntwxXViy5o1Qg%2FL2k6sURnyCdiF%2BQ4kdKY295PSfY6RRhBJkhvnbr5vpWd4RkYLfzz0KGr3apdACUFUkPylKXlkRXxxh0v2iXbh%2BKfDec5mV2C2q5Zn8dVyCC9n&X-Amz-Signature=66c650a90f2d4046780e59f66e1b2f6c51c35296432b6e25caa5ee749ab48362&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
