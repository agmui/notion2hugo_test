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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZF3ZWJ3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDHU7GC6Da%2F72DJxsE8ZQz%2BoBzNh0uCzkaTG6rEtKCeqAiEAxwjXDK8PWHuR8U%2BXrSaR04kQw0RYYtsnu1tBwqiKUOQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLr5wF1KzoYFsoLRzircA7ivoK%2FvPZ4G33eVtYqvn2vqQ1IhF5jtKAzT5Ucf9iGia52PcGCWlzRDANjNy1GgdKGF0Ga%2FuFFtYLRpQKDKAUOCbgf%2Bq4Leyi1cS8NHFLKuFDClqIs1rJSSBf9b%2BkGCF4qmob37JMfkgP3nD9vToEQ5px6VJvvpe2bi%2FnGU%2BiUe2BRCb38jOmQBHZl4E%2FGuy0KVLvZ8oGodxwyaF68NH%2BHfeHnkvJb5CpWtGPEn5TacNcJVO1Yogk%2FeU6ymo%2FQOPdVnpHHmmBBBmdWKE%2B2njVUTBMg%2Bmbp4LF7gw7j51WqhmGV4YE1GJzton3OjEUONmBPtrR3pICrWt8UWL%2FIyncLoVD1tybXemH9oiLdlwqYzJkxfwgScRMPL2E8agEKSiqQfH8pNjF9a4ZlDTkrgG8l%2FE0Goak2CSrdbA0PEbde9y9%2FBGK4H6PuxCQILHewxyh4Rif9DPatSjcv1B7OjH0vhp4KW80VVAwwNeqscMoidp7LDES7yYSoqa0ULfNDnjhYIAsKKjp%2FlUAKU5J6xyzTFGS78Aui50e%2BSIwXwI1wjLoxrb2TJv60%2FzJbtRZqRVMCj6u1Ri1AOUf0c1KeuHcG5ss9qjSw9%2FY5rWOHRiNUZSGyrpmk4ZDd2NGzLMJ7Nx8EGOqUBht9jvaB4M0YD8Yh26v8LqseGx8bLwTaBYoi2VKl37%2BEvoLQDmp9PMuU0bO02oAaJoCCX3pY1heKV2RcDpWU%2BaKuqQBOHpL9%2F5YgYhUEYQwgzFQrujV%2BM3GwS61R0M1ZZ%2Fo9BcaNAQX3JcZ06FeDY5MRcRX5K84nbmS6yx0N2xRDXPRbZFiTvLV1KN61%2BLVx3eMsVVoJxVqRc5Jk1l7JwOhpcJNAd&X-Amz-Signature=e56aee5e69b0f990588446a05684f8b634473f4f5a0c1a77ebcd3c35e1188152&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDETO2G6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDehaS7HwofYC3Ng4B%2FyDnyhNWx%2BgPRS4TOkDYOVnpSbAIgXMOe6IjtMtQ1cHYR21Nb18V%2FivZmMd40eUWmizU05Ioq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJwDuHrRKGIsX6eXUyrcAzUUWPhS4wE66BiOmQ88LpyU0dhwxM2G1iWbrv1k%2BQscwQrNLE5RouTxKglQVTvn9hAgccqzy1x8o37gQkk0EedDnZydgg4zwUXJxuzgZEgb8zFsy5CdzHfM2K1iDwMbWU4zbjkZkuLQH0yIIZC9ysp8SHiZD9rN999o8TrRJEK5V%2B%2FGRc3FEyU2Nl40yKBX9ZuzMQDsTopUuAZ04oipQ6OI5K%2FQbzWICGy6G8hVJNXyDM0T%2FbckFxhBFyLL3P8SDB0hKklSA%2BVxlBKTgQ1%2Fe3Mn6vkDedGC%2BBdfOgygNE5b%2FpSLCt3sJ5JwIO%2FDaVajl4NFkurw1LcSkoptwniEpKR8HAcigo0P2a9y1IlNy%2FCDqdD7KNLz9Cd%2BGDHg3Hv%2F%2B%2BTvJJVFufFzisb4cZ0JSJuJg9uk%2B8gyASS05iYfRZ926NyFUUE5wxECGfw6B6jRZg8suivqbdQ%2F6vvl7ngVEFEgHFnjuQsAW52VqSLzZhoHrVdSyyLea7kUZvFeQUaLLNDWmoKSPQk3CPFe5lEfHZzB8ynIByvWAW%2B377YbSVxwYHkyDGfksKBgl2QbY0QvYA3pmq6ksJeaZ%2FCtWvFr%2FS8KGeb1U%2FNRrFe5u67sGBPie1V1BB7%2FCDBxrRXJMObVx8EGOqUBj3HQlShbLt7Dcqo137b3t8Gy8IjUDyc1X09anIZB8xfn449UvJGwlT3VkxZDDrpQNuWVH1HY1MGPtuMKbPAJUHNUb94ORcUc4rPOCXZhSNbknNlcLbtdqY2la1n4r78nv%2F3JqDEDCT%2FskBqYKPDtCtQXjLtQaM1QO7PRVjQkK7xRNC2f3h1IkF20vcVq1AugRcHb0ld9CAblgfyTioEfgfZy7K%2Fd&X-Amz-Signature=9a5586612ff2056bacd2ccc87923b63fce2ce0deef059d97b825df54961c0cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
