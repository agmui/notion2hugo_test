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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDABXEU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDWMMy6rcGOB2K7q3ldNWGAbkMmHTXBDSp26WxSVr8QCAiEAxRr%2BYdiG6PgJqLXdcMZTsalN%2BNj%2Frw6uPtRUKFIK3OUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHWnihGl%2Fh3JLcD5NSrcA6XAiokJqKSuRwp2D%2BEf4caid%2B%2Bd6PEYKYJoLyq9EP9vxKZfTb9EgEzNTWujwx1z1%2FKOkC66X6JnxpdWKD%2BwhtQjgNHBs63y%2BRQGY%2Fymx%2B97qkoRYriSnUlkllkLcuANy0vbSAm03iTO3efJc84rx9ew5cwYsEuJx9TLL35gKLMSaGeDtpNWOPTvT4pfoH8Js%2FMsFqU%2BgqBNN7vOJDaUK%2FJVZ6H5yjqqdh9ADEUeHJVfH65CaxG3VWdr0r8VPsPiHofig%2FGRPHPKA7PNbNPWevGX%2BdSsyckOR%2B96dB84%2FiQbJAaNpWuWdDptL8c7qM8HBnrLCVSZocvjNx17ncc1LAajfky%2F1o0GkgA8iLyzbec0IMLauTqoYfJgKS%2BYX0IEUf92LIx1hppn3L5t6UYOVV4H6SAqh4mttonIo2CxkaJ5C7J8fW5UdqVzpQQTWWQMZvhrAFcAyANMdadRs298U8wjce6zhxSawnIDr5JqnvtUWNkq09giv%2Fvvw6SqgedHC0Nm8pEzaEVKNFOV8KgiJIMcHfkXAZtkLs7QZE5RKoWnPAKW0obhtjEg8YY0ldO2HH%2F3QXu8Qb8FQfuKvOEcbVIx7XaHHPk1JLnuS8q%2FxK8VqZEO21cvyhIEhMMOMOz5ksQGOqUBHOzgpCqS6Er7F4ocgwjr4mz44h41lMHOJlp%2BeHuovxXScC8zXOOLlAI0YRUeekK8YKDMuqFxwsshZjyPoeDMQqoouFLnp7q9EEt2b3AO%2F6pH3zlCb7eyf4SsM2Srwq%2BxP6HjZ%2FVvX7xXcHohVRBqW7Xxovd1E9Zh1Uf7y0piBHeYoVhTsvUSY1DIa7%2BLGJzMS2ciXYbFZAbGyTdlNIbyzW5gPadV&X-Amz-Signature=cad013f0b1b40b14ffa58e441091401eeaf6756a47fe4e64d6a68ebdc7139cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZQC6DH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFLE0bFwlG1NIyU%2F6DZZeHtf3uypgy1%2BhKOMqYUebPJuAiEAl%2BW14KE6hmUn3by39vkCQH5EaaHIOred15XPAnPHZg8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHs%2BevgNNk%2Bl9d%2B2RSrcAzsCzzV8PE%2FeNjlphrSvzdmPPVbJ1yNfnLwOuASOX7bm6bvAb%2FkKGzsd4wSUhC4waup4Fw0tC2j0rj8WIbM33aZZ1XXn8hIqfdT7mOQjIlo1I39jioA8wDW0WnwhtzraSwOgobOcWJFck10CgAZrG8MP6CbGil9aj38pDA2R7q5niZ60ETxgFiHcn%2B1BrvfpCV2%2FnX31LFiEZnU64LMY97%2Brm%2Bejd3n7Pw5GeptCsWvbs0e5im960Wu3rpPKenAt3SyyiJU7NYqKpZ%2B6%2FlpwjnZ5H9wUsEuTCEmJSUnHjit07jTfh%2BTv6v4MI%2FNLFH7kMFvRMCAAPBOaO7oqlU%2FIja7%2F5em%2Bwu8nAj2%2FxWwoe14TR42y7t9QVr13bbMPoKy%2FrYzYzKVHI79Swz3hY4%2B0vkAzyvnHYuB0zVrOR7XVdNk%2Bqg4ZRpwHRwDdcvFqB0lREfIZ2jQ5MQF1OuxiYtl%2BAMXKi5fL7fkuQrgh13aejInZIbWbSOX2GrAguH7fYX2pqpTlGaNUD0609OBZP9pJWwE58ry8%2BN9H17muHj8XxXdzc%2BXI9XiJX3DQo3HzcZuAVzA5EXQMjvfC5H3rj9igztSTJHQaqK67TctMrJabyCB4Pae2JAMl3G5OqqrYMK%2F6ksQGOqUB5ARAvCnf87Wsae9OH%2Ff7Ar%2BkQov%2B8CKThnc5JB1%2BAcAfEWF0yN2S9y%2F%2FBr9rffrSJO1jBDEP2Ws3KgF12hLsyWy6mJYmunh6P7hnH3MZda8RZ0gk7OtzgDuKDVnUnKF4%2FIrUm4GE8nqZbZ84l%2Bku53%2FygF0jEhlGCEy0hw8tGBSjjg9R0ABshasRu%2BfHNowFDFGk2Ceyd%2FnubkT65rkSB4Jpv8A8&X-Amz-Signature=78dbca92cd08b8d99d9fdac0049b13c3a96df29bb7beb7d78324cad01f5ce733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
