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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJWFFCQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEnnrZvewhUu7q8DS1GppfFVAGWRW9tPP98k9nQ%2FU%2B7dAiACOqLY9Y8D23N%2FttBMVlFjUFdJjnBCiPkebhiu4lR2tCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMODATtWQoI7Yq1FOMKtwDvLq5C4FNs4P2CHU8PQcPf5WnNjh%2BoQ5QxPfYZ9SWrEk7l4Y%2BKNgz%2Fh%2BwneHg5ISNwEnqJxIqY67cCBRGNmo5uaFfWV9Dlq0ZmthnQ2mZ%2Fd13Y9AkZE5rKBuDeevj1tzZ2JBLohvik%2Bup16JQOeSrHsV043UtnB71Rvb%2Bt3Ap4LX38DcZnivy6hYE89pQZkoZdWzAoEZE321aZBhRssO3XEYpleALlcwSX3XbZclilWRs3x6bLU6jPayezVYNDiZmGVwzoYhceJbj5g7HvZnI%2B3FKl31xdVzMbv%2BUm4hUX4lrKrx6BZ7YFHaN7%2FnpuVgVdbSLQzHlolm%2FklQH7YH3oj9C6%2BX1o%2F%2Fx1t5YKs1JDS2n4T9PIS3QbFXze9X6P1IXay7uAMZQ5YqTIv%2BtUGi7Tplr8FdPOIH8KGXnhBiV3vyNY4PlFqVx1RzutLqx%2BzF0kEhObI09agcxJytX3Rt2JzSCQsAXX1qAp9%2F1MpNiqe1jY0U%2FQJYu6jiyAf1o4H6sgjk9wBk7ZZVZg9jRgUgU1n4JJDOZFpPNjkTy7AgCDF7llO1qAvATZXSysUsgFk%2FlYFq3vsMP%2BB4%2BXB8axvdTlOBVtN4FKLWcv%2BSeq6NaKw6uzdSzKP85Gldb6gcwheaawwY6pgGXTlz4%2BidFiiknmaxQugYKXftHWR%2FAxCU%2FOcbMG3XFNGzLFJ5CyXyJvpuyuBgtlzWrOzLAehX%2B9qo2KS1BY88IJZ22yYuLMWl0maUPpJr1sCk1kc7bB%2F0WpMNNUawEwI1ZcncKpzC6hJmSM1f5HEXqig9HV5EO7uGQKjyS5cIufQPEwpeKlkus5vHs0NpqUqI%2B5lbxY9kaYfV3pB%2BM%2Byyf%2FjUTpDcX&X-Amz-Signature=5393f0373bb828e267066ec09f9e5be26a1bf01f4956a0d7e3665a9d98940a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5J6QKD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDyal%2FQBMq3ciKqar7JPS4VjNUqYqyUXSKyrv4tEGs02QIhAKQP5BmtL6XXzdEIhaM25LKQyluYt%2FUM3ovV5Itk8uS5Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwXEswUJu55NWKvnl8q3APUR4ItTZltgYZMvmP%2BAwH9Mw7XPbbYMoDenuWVS1Qlh%2Fw%2Fo4CUf7Wu6cu6WOqu2Y8aSft%2BHYrMSrr%2FMiQTFGJ7ppKXAxPrHRpPDcYABuMTumu8J0xSEZ3MZE6ozMvSuamxAqSTaTREBtazPrmaZsLyMdS0ynQ59fdr031YY4hFA4VqCzuH2r2GMea4re%2Fp%2FIMscw8bDpn3vruO270chaep%2B0Kuv5r6NcYKPBlQpFkxNdHzvvgRie5530JubeI351GFxnlf3iwQyeqFf0TXMg7SFrq1c8OeSpx2XoIKeqN14%2FvfnnodMwDTBwKQOhg1s883v1LdCKbV6%2BNFZ4Yhx1YQxeJMQ738eYST0rJ78KxvG6YAoN%2B7vKKVgHTrSrm67LEBDWqwrHP9aq76tHnHsnwGJO7tWaeKJFIeU5IAXYjreJ8ZCMF%2BcAiCVR43AXC5Umn8dPQTU0OGI1u0YeGMoQKWnFr6tr2EIOeT7wqso3%2B%2FAmmOdeNctY7rHQJsvrWXeabs1H%2FdnATO7P%2FuDr7FFFh%2FrVYx9kOAqpqujKwicoDTqAMIKm2daTZSAZbbNhLTFWFMDP5gc3gUHtnER%2BtybJTKrSpUJpUEZ8pgvJL0xViSbyM1gnTqi10K4BlzazCa5prDBjqkAes4dwohrR%2BSBFsgan%2B64p8J1FQ8popaKaz5fRh9LvDmLGQTByLxISsBKTEGrjSivvyaEq%2Fnu1f64n298HUg7lQSEFN%2FkQDC0t1wJ%2FLJip6N5N52IssqZ5fmcVWrrjlP3G2RBFC2%2FZIE8qm%2BrI7zRR9HS3oCLA2kDNaSIpC12jkIns2rgTJL2DmAfx6aNIjNCzUcaIsbqmUPt0Og8iFJ0EMX2w%2BK&X-Amz-Signature=1c37619435fa66d51791a2e3e5112c1ae7dde35a820512f0a85ef14bf57451c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
