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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORZYAQS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICGgtUndvzgEF4ppkeKPSKeC%2FJQfpL0C4e5Ru%2FH%2B%2B7JiAiEAg45%2BUlpPAUWqHKgEzvldy9zCi5X6YnKsnJB3B5a%2FFcsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdaJwSLM2P95cJATircAyFw0Or9cWQxTTxguSZU74MQJnkAw3ttNJje1Bsq0dqZ5Af%2B6Igzf1vCPaNGGw6dbSMYh0bf9TNsEp0OpXSOanLwlgzMHiMPjXJTX9ANXUlWVNnem%2Be02Q6qcjahGnu4ZJCnDk62qNkpOzaQhv0WsTbBvu%2F4%2BHQJg3fY36cj9mrA5oaxP5e6A1QyCFNFU2h8sJDxK0B5FWUNeT6t9OUn1AiHcGQsp0NJC9w8htWGveUY%2BBdXkFMPTgM%2FfyV4Xupn4OHbni2KDskg8Uhu3bN93JihyL%2FJ5ZCOcJE8BNropuVeWEAF79uFg7ADcZOJtkv5ix3VDejnqQIRjIuXM9YCOxJ2ht0yiDL1q7Be9TNGnrzsNnwSAlLWIdw8C8FER9%2FdQ3qt%2BLjJ1Yv%2Fy2edDqLagb0CUFW%2FRFHGOyO6EwgA3hO5bWHMTeZiySljhQa3HacBy%2Fm8PE6DniRcyTyAetx%2FRnNt751jmhDI%2BkAfTCRjAVVxrOjXs2k12bMc07sRi7e%2BerEgjwe2ZMzNSbEqdUIihnaAG3LUQDULmNop4aKvRIB2OHQfyJSvjgtR4%2BPeDRd3XOhFrUcVf%2B7jjKnjIyX5Ay6GPzFM4nPQBL%2F2PObuWMMhr5Pj%2B%2BxJq8NWyT2IMOuG1sAGOqUBMFe62Va%2BlnBk8ujWPM84Wx1sGyHgpiN9yqnWagM2OOTomVHFcnFnCddziciuvSHIXrwf%2BrwQjvbG%2BT%2FKmh4vR42aPqCB2vcTdYUmbFbRR5bkqrKZ%2BKf65b01Gjl3tj8E5l97fXCyr3nbZ%2BPPww%2FC9j%2F65j3MxOWgpDcbvfH82qWWYfZjDcMprbCkaCipghmRMC6SanG3G4VXukX448vCHmvbre5Z&X-Amz-Signature=b0a659373b35fcb807b83e3e48a379384938f715793ed2cf8448d8b876ea5dc3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPHLQYN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHAP2xFfoWIuavLFC4Y6pX5U1%2FNReAqWo44h4UQzQU5GAiEAvXIwsDCF20KrWA%2FCHkLXHpnabwDjVkoBynZs6P0Gs8wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuuikR01amlx6pIhircA8lXIncH%2F%2BeRp8LoZFJwsghQJYL%2B3sPIKdvbbjU637sbSMwp6h%2FPCXn%2FCZaom%2FMRZWXzJl5t8gCSqSDbTHunjtFrTYmq1e6OKgBlDhemDHA8Je6owTcgqosf545FReWxGwN31pYuMmOYom6ctCP3vFzrjAnOuhohYsjtCyNbu3e9KjocPNs1WOwkeEV5pULqiqQFil%2BjzZCMjDtBa4mlxDEEvXQSF4l1l4IpbS1KyHlu4%2BNEDrzKRq8N3f8pAfsgPy7Nr6csismb24Mh09%2B7c6GI%2BnTiVEnkQ2XkY9ReeEr2AJnBc9OkfVBTMCPnR6YToXo2KfS7DKtvvtTd5LGFMCnkRrf9K2OfyEXR7CBFyZ%2BP3ks7zpyqZMYTtOJDBvwkYI6rJPuxDhfATM1TD5Jik5fzmhuNj1ldkGg9PHpxr467VsJxu0RKrHPBTWI5jNdIIbqX%2Fjss3xu5slQJQAoklhaT5gN%2FTMxgz6Deeds94VyXL7ObmQxqSBuSVCifJZnd5oiOrE1od3uZG02HPHZVxTHLXcvKG6YO9%2FZa9Piwu0j%2FtZvmARhcnZHvIqdm2Te9rI4qVUzbdpxpuYO9L7VsYD3gruuqa3LdQ63Vw0iymOX8wabPqHDhPFeENmy3MNiG1sAGOqUBiMqPQxxxEh3Bas3HBKQU9wbrGyHhf1DxlT9ELLktGLv5BZmoxCNtYsj%2FFni3IGF63Dnwk%2BN2ANqUHTU5LyVbrZxEtrHk8a64GK5jF2i%2Fh0NLSIA5OfeXXdYHaq06KrJgbiHvw%2F34dUQq6IgdA52ydXzCJpaZbyZKTToeN9BrQqLhBa%2BmzlcDZD0JcER%2FD9ILVHdo0GRen6zVf%2BxNciUzU7fPkTJP&X-Amz-Signature=9db79e1690bb454f20b20707fe91ac586552077bd6cccad01745c4919fc50fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
