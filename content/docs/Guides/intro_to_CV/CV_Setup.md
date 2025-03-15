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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64GD4MA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtDeiC6fc9YLDy65pNPkidXIzAiuiFfgtFfOfOWuuETAiA8Ix9AFyFIhVr3wufCN22%2BG7s8TuQqHFmrH9FsFAcEuCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0YicwkQku%2BNoL9GvKtwDy%2FPfigIhjwQndEHJk5VNDcptwkN9raRPQjHak7SCoKoagAZMwdTMQTOT9aNI4RDfQNOvttbtbr%2BSRHCsKanSsO6xdJUS2OQXANPuA%2BsePNsHvOlBo71broPQTCih6ZSVYPhouUV%2FeBrAxCTRMIM3Q9OE6TbVYFc9JkLEqHLSjsFH4Fwu0p4Du5GRbv5sy55rgrCvlJcLLfVvKdxx%2B%2BLbUHyh1jRJsy86aIjTPQ0KRQHhjZ7He2hdx27Ri2Gb%2Blnt69zularNYHxLca1tJycgXd3fZX3szUwYUWG22pQcKZBF5gBjiiLfUrg8hSkO1MjFidaqzW5NdPnVHmQ%2B9WXXDGdyJhkYybHbZRk9QCAyLCud4nd6m%2BjAAiaqPGAzWPEz4VTqlMvGTl%2Bm4lszRFR54Q0JUUf%2B5RBPQZnoq%2BUa%2BB7MZSr8ZNOF8FeXb2CWqmNpqIhWchPd20vCHC9fPADhpjhpWZ6nXQA601p7rA5W5XBo2gmwtg5aJg1blB%2F77z%2BH1GQBZzKBMNKUbmdMfFsNIp4Px6JO2BUtqfhwGFG4LmYIgf1PvSryF5Q8OlTjDt3t1V%2FFIlwJ48%2B85Pf5s0rWYK7pzvFM5sn3gz8ImOWvZEeV3QH%2B5BEqmYzVFpwwwofUvgY6pgFOBNbNmN5Xq0xxW%2FsuTn6pviOy8jPWpkIUtgui762sWY1hpYv6ytE8KDLXJ3BWjbP2SeW0o%2B2KoM5jEfpwT4kwRCzQIzDnLpfj3KqVE3lxTfz4mkYYpS3aOjL1uyf7WD%2Fdugjba0hzC4kcsIVr1bQClLTrjHNF%2FcZbihCB568Bl8u1nVMPl3ldNICVuTmydN5R3iz2JnO4FsUvm5bqHy%2FcHgYszFSZ&X-Amz-Signature=b1dff7c78154676da4a92fe2cb8d61722ea3fc2eecf4ce788e32cf4c35aa8a00&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPAEQ2S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm4LPpzGQfwHXpRCayAH1QOI7cfCw1m%2FIWwYMF72ZwaQIhAPb4%2FPORQk3V9vL7vovvTcl4a94T%2FeRVyElklNeCf1e0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7oaLzaxSdB9aFvXIq3ANpcPg%2B84gpWwR0HeyfxseS%2BH0kwIfoH2U%2FPare0KtiKrLMPLLl9A4RTRauG03eECVClAAmvdboJxjy%2FG0INiUCWsKJfM%2FKqvBMfrX%2FEOZvTHKwAG02i%2BpAbdwB5EqfYewQq%2FZKUFIB%2F377gl9fGMt1%2BuWOZQMEcFSHziHmT0Nn7xL%2BxIQNQy9tJxmzAcAsYTQk9Owm%2BknHQvF%2BcVp4Bov04KRbVMVJCphmoouohW%2Fp2E6buoQveJL8s12v6OnrQSafEaqeXFrshylGg6ERzOhOn%2BzfJQl33Gq%2FyQ%2Fc3THBKMKmJURnDGbASTzBiPrLblprw0tmB12M7zkxKggi8YhmWCaibl4qO8NAoA0pV28h8caLZx0XxnaJviKnxUfn8Dhvm%2BMhT77mzkbjyl3bbbBF2y1%2FjaNUmJBJTWRaD7xLR1qV8%2BfTK5ufksCsOHbm97%2Bub8dNLhJuGKXfAcelr07RdRA0bhpXZ160IRdADQnSDVj%2BQOOB4WpSMIzKG7Rw7zrc4eQ6wa7Pg67ClXFihxDRyDaGGNpyhSVwHyDWDMnrobxuE1ZwVDmsrKBPVSQBzYKisILQenZzEPHTXUS3FV8NU8VBnuz3c%2FsnbrHG3LPlP5iWRgdbEw%2F9kN6XVzDXldS%2BBjqkAYyCyE82PZct3xMUXTqpXu4W6aw4LrekQMmPve9vzzDKRABvppgrDOC0fKvW9hCnneNsidK581tXLC98GCUBRN7D4%2BQ%2BGVnw5MfwEtXj06bcwkZmUMd6ZbT8PYU33vKmphP1%2BE8TJuKLbU2wc2zDBi6ugCuXRVawIo%2FJIU%2F8O1P1RrG8s5gDuMzyj4YpWYbgESDKu2VcQ0NTdrcPAYmImfNsvIgN&X-Amz-Signature=94bf0d8af95e8eb1dbb9ebd78dd38afc443a0c9b7366828eff3246d24a2565e4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
