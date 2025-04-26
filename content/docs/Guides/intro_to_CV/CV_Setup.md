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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6254CYE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0qB%2Foj4h7dS9tWao9MClB7PPYSa%2FKUPIzd%2B4exb8MQIhAM38HdeCpud0Y5rnHIRHU7w9UwFNrSvIVOeTOLrd8XSTKv8DCEAQABoMNjM3NDIzMTgzODA1IgwtHrlQUhYIoZVI%2BXwq3AMq%2BEanE1SuURGKMBz10VbBbc6TAQWTK2VaL68Il1Vmx5fJLRVn4RxFC%2B2KNGZ6UFrGmllMC860z4LIUYdgMNiU5hzEdMXKdvZ5RccJm6OTnW8fjMipJOJIyiLIcfutHrl4VLdBjrKqVdJq%2BFUc6Aq09aC9QphRqocbPFraSYx8jHR22d%2B1pa7wCocK6v5iEwIatUfW5ColKbysyQTcvF7bgXFIb0SByfOpnPtDNvhVfjfkF7WJYANH%2Bq1Ym1z5Egnjb0zXQiWxbWEbhbwj82IumXbimXiEujHkaqrrJjU99crrHeTTsRu8w9ZSg17AvkLlp13HlgVneprQMkfOqCCEDMmlWbTH1LBa4sg1lRyfAJ0MfG2%2FrNTGkrBfXvi0jkk88TIH2vB4VeI0oMvkzV53HEfVQwPOzUc469Hy5WO0gnYfz7qQreHgW6URcqqg%2FHpT%2BChCzfzJkPk83JbvR2yOVah32ODVUH78rdL0reCvQSsJ6zAESRenPftoy%2BTrje4qHxZMC0wASx7n5KssPnwBy7ZLO7W6j5j9ugOeUGrOow3qviauuurhoGqWpxD%2B4o0P7ZsRPNZLtbVVAoA5xbdXwfsOs%2BpsaYx4Ks%2BQpD64PrpH5mKKyAT7Z6nGRzCyhLLABjqkAeiradtFFYlVO6GbuSm1bqKeBH1WkXAs%2FDCNHIoymNJdQ43TnC2aMyq5GkyFHDq3d6jSVWhXOHCIfKGLluku1vIhqnyrOvFvJeN8JS9hbSZBfNL80grKqg%2FYQu1oLp5ldfv%2FfkO%2Ftrg6eIxhVs7SCJufTy7FC6FwqUVKMs4P8pm3QPgdi1UC%2B5YgT6%2FykrYSp7%2BVWkwnP8mHLzg9Sz8xaRh673ZR&X-Amz-Signature=8e2995781391370c0e054e9a40b13e4bd192eff9cf630c445a1d9e9264fb3924&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTEPVLA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXNrUYu4g0CcO%2BBKRT2BFdjVwswPXMkzLp83lMxMvN8QIgXBlIK0Di5G3mm5UtxbQIrwsUFkQ6eISBW6MxjW69Qmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMkObO0UrqkD%2FrkP2SrcA6YgzJGvY07OsdK2ILw7tNmez4ERQmSxJo0fmYCE9uiY8VDs8DygzVAdlzJ16Sg6eVyQbPEGfCv2yfIshOOVapfjr2%2B%2FpXCJ5%2BFPRJi7prZcm9EjNnjcMeiklAhVJslMIGDD4CQZU7Q4ezmn0waPpG2HI41PbhBttg027k%2BS7T%2F3%2BsmXDYcSkvPuCQBmCN1gwPzCVfV9nrokpG44Rc4SJeRDIKznjYbqpii35TrO4zw4HTLdgcmlhvsWMEtBrlG06BE99Pp7lIKYCnRmqJWPu8hXcor2QakesyCNuC%2FGreQohcZJRC54XVs5AwOxJAo%2BX0Z9t1mWCkbbd%2B6w0UXxwNBeFZtw645Zrr63LoMV8C5k8zc3jombzbx2LvJtmkkfkOgje7oaG7yrO0uArkzv37vKZKpd1BRaP8YeVA%2Bg%2BN2GV2hKkzWDMQRcHYVzJXicqC5d9Eo0V2BvKS1UnkLJDZtuMXYGlfxJ%2B4RUOO2k%2FGxp6%2B4uo%2B1Adl0cxY%2F9E0Kf0JqjwQ4udFnf14e%2BN%2BwNNonxTMFj%2F72RGn1nQ0WG3YP%2FHJXOHFi1k4EeD9xtguo%2BwMcg5YOootWS0uzx08113ebmt22eaNQZNs8tpWeCG3IFv0WC%2BZNhBCs9PYiNMJSEssAGOqUBoJzUMT6vEHiKEwLJ3dKyO%2Fe7uIYNVjWEWilU6RoZZhuRCZZNr6J%2BARah6n%2BSzpQVrrZu7xk1ac6z5XlMm3K%2Fk739fPkm6y7GyYMvULh1OrTmH5mfPTE1LLOpGsSad7LN7vAtKZWFWQQCYeF91QgZiLp2JjT3VtE%2BtO2WOtbs%2FJ6NTCl7Pq1Q8gigU1702IuY%2BIgb8i4DgrWTYeWQ7cAjUIdIM%2FLM&X-Amz-Signature=4187b07102f146fe885664a96c57d5ee1143f0f54f5d2642df6d12f4bebe2e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
