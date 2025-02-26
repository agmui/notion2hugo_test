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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RXIDO4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDgGck0ACt4p3d%2Ba426cuaepmoO9Yo0y8cz3sknf4cnOAIgYQMbYlI2zXE7neEQgtJT1ng9HqlSyZyfBzTRJbLHvlwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAcW2ZDxYuvMlz5AtyrcA3WmPxadhh4HJssf8U41WpAZWFzMXOfI4lf%2FGW4q8KuUMUn5Ww8Bpi1CozFXhncIeOam%2B7dicke9aP0FgdvXb7CqlBEH5ATd4pZX4ALzFk5JUoGIUkjTHt90P2Ok9UTV%2Fw%2FGYQn5MbwW9tE%2FYjFIKzCBolJVf46fb1pPxtAAkK2GVOb6ap5JmG%2FP62rKhHGzlQQ14GaQeyRnLEQpEoULqaQ5G7knIqJ4FZ3tCMwT2zP5SDq2JMrB7OZFOeK7KVY1jt%2BvAHmWHIDctALUureteHg%2BHDU1bkK6%2BJxWmW094Rj5eLQXnS226jEr0WhERRg7a8yzT9a4%2BXW%2Bqs%2Fmh3PqAYMB610l0CWgMJIU2JHL5RNLuGJcvjQyC1vhj%2BXvN0qn1kZUCQ17huTSB5gsU8kDiMniAa%2FdMSOQlcJQ1VB4LkplN1NxE%2FP9jxIt0Ke%2FArD0FkbfIaXeuli8Fnhy3YivVTAE3gb0szh6Tj%2F3TpFL4zvzGtkgN8X1VQph%2BVgZbno3BJCe7PMm4F%2FiLwqn6yBCcYW6M80T5OGbC%2FrCIfWJ7jDoBs8iSxREjK1a6n6U9Va9zqAYsHPGXp7GkkT3Uw27E6lq%2Fd9W8lYnagz2DhIHiLNaB%2F3Y86rq5t%2BN6VYeMI%2BB%2Fr0GOqUBdNAWq2%2FEGhGG0Js84XuMldrHvxTp3D%2FVAtR2%2F8ywPviFm44IXS3ci38IBqBXu29hUpdIYgwfBCMMJUF21o8m0qw2%2BfeDZzbfYOLGdqnJm19mP0foqBHeprfVdf55tqgw97eYF30Iy1dsVrNpIhX5Z3KNTlawCO5%2FAs5akPGwSEs9q8Z4VS16c1Wyjus7%2FDjoD6zPYF8WaNpST9Jsd81ElcHiJdVM&X-Amz-Signature=3b0bf29d96370a2e7e5795d0d64b6b6ae8c43dc75e660b04dde2c853a61b06bc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTS52XN4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQC38dbnm0MjvSK6oW0aLuSG6ya1vrnfLvi3LX%2Fdmio9jwIhAJDkUzT4sQI7VmTAFj2mu4hVoPpsD4Y9fIzUyyxDqOFrKv8DCGYQABoMNjM3NDIzMTgzODA1IgymD1YzRAG9P3e8vZMq3APDPivjIexsJilWTWf0Xlsv3y0KI8h6wiJfyLdDH5NZ%2F3RywkwSHQUdJLo8BzEKLhJOA8DS0HQXQpxAziJgO0irZ%2BD3Pr2OEmwG%2FfgYjT4e2ZZ6Aa0oPMOg1D26BY9f15lfi1NcOwScP3XX9cbTwWomsV8dPfH%2B2dSAE%2F5PYgBYd8uchoJQeD%2FKxAF501R0NhzVI98RdHgDXxIvtUFbNDc9L74g%2BYuXcwd9u7W2v6Itczkq5Bd%2BbOw4Kbf2HiBfih%2BAbtWLduxNIAN%2FHr%2Ba%2B82k4%2FE9F1IIXB8V4OknKdEs3aGDQJvttbuOcxGEs70Q5YeXZE%2FZOoktHVudg7NadJ1Vo%2B036SmqoX96EtlXWiL%2BM6hf8mn%2Bk6Sq9FHsTIfd59hndIgsDuaNbvlsele32K%2BrUokoy9EWtCBNdPS5Y09ZLKejoh%2FrLzeentFFu8M8xGM7UeoeJF415oOr535kvmkaYk67JSnv4N1D3hUK%2FA%2FL4iv4xym1hBQ%2Bo85tl4ak1IMMFnUwEykON7%2F6KRUfAGxmjWuQtsmIx0VMHLBrYZdlb20tk6%2B1Okzshs%2BZ033vnxY3OG%2F8Hdd%2Fx71kQI09SZ50fIpl1hMK6%2FSCqWld8F6Pya2eHSG3OYea%2Bw4ROjDHgP69BjqkAVxO7iIpdZVSfrgqorSljDCtJ5B2nq8Gh%2BYUaAqGskzAHnAW0%2BpcDb3ngF79Z5miqyES65bR6SzkuDiTQbfwOU7fq3iG4dvfj4lkvkYgKJiIviUWEBRwhjAunNkHpfs7UhARgli%2FaeIRVWQFL2%2FF3t3ySB0JtK21J3p27k0T8x35MnC5%2BSC1Xwc4VtB1NuAIxd67qzkqHpIcCvlNQSKKC%2FCbO%2FFL&X-Amz-Signature=d5d91018b67e5e9d78fb3839f17f058392af5f8e7a518cf96342dab2d2090b34&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
