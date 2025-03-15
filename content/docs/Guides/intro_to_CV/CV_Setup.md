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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4LLDOS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc2wxeQkJHs%2FiFd7UBSxWIzwKsReoJnojDKY6LnTb9hAiEApg32GEtPlXLC3i2%2FIuyPKpKSWKFYkbPrednGdf43yrUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBnp0%2FC6168a0%2BCr1ircAwiOwFr%2F98E%2F%2BcQEowFCaYzCk6poQ9UU7t%2B9365hvWZQVHWHG7GWjQ0y8ypr8hmnkSfMxOUBvQEq4cb%2FGWH%2Fdd1gPnTVcg57C79DkWf3UDfmLuwa2LwepIYfA0KjKTELGOMTPfwuxtXZxCNpihFcwwD0K%2FR14dLI%2BpHWP9idquCOmssY%2B2HEMOpyIuassiqYUuxBzOyU3z%2BPj0FBccvr%2FOwi7q5C1A9Wj4jJocSada6I8mmkWgis31NbFS0ClJvSDDkugYp%2BUlSrCbhlchWND2xdTnZGU4CjXxWBzjfod%2FHcZ9zU8MGtkn%2BIG7C1r1ImYqttK4qcbA4EzwyTlkboYR6zGGrRknziKeQpLwVzGYVWRYD3wK0zuawAqzUgaGy2GZna%2BjsHeKx59pwPimFFQDv39V3ngUg5mtv%2F5XAKk2YpRkzxzTizNxQGF2a%2BqZHrdb8Can2ZsUXNkd3jNeeTjZIRrM22xS93kW57AIUb%2FkzQ9CPEYbQnhxUh7pUP2MA2pD4H3gMq8AdGgT5a45tUtwhNsWihyhUvUti31e3bjWKfpTYkf44aUhbSBtzlzJBB8ly1oWSYxffCIylemrIYZW6nbDzBvhQjwNwYOq3rBkG9knYdjJM6wfsnjq92MMCy1b4GOqUBj0OcrQSQfBVrhC3p6sryvhCCLRyqhoc5EfvnU4Sy09Hblhs486NFQdmtgLkJPJU9HoFhmm2KgslOuAKZ%2Frh4hoStQyOqPge%2Fqhm37Ov4WPxNKsY7n%2B5sB8HG4n1xUjQw36QLntIodl68GUpZnzQOVbjOIIuVwCjM%2FQZQ4IHJQ4l01WPtnLD4E8LCq1kBQdqX%2FAa9Ln1cTyATOFMXZsE6QhfIjLEv&X-Amz-Signature=bafe55d535abdc5fb30eb6b316249d05a7e19788d50f4794043ebeecd89cab3f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NXNWHR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcOutFLLhAhfCj8iBG%2FnUdZJO2KNwkemaaUDcJUi9iAIgO%2Fa928xZMU4L%2BcZIZRbRMqciNisiE%2FC%2BCaJLJ%2BQ2jMYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEFYDB6WNY10UFLUOCrcA6XXPSJIy0eGiYY2q9TxHBDMphkyBt8Cc2x7U0gZFotN4BF8deEPADye86ar%2Fb76M15nTyIxsKJsujbLyhe7zq6HRfwqMIzO1DvsADlSk%2BxPCONWfzL4Qwy%2B%2Fyc0rv6TmI74W5ZeQbAPPr4gLBtM4lHcWTIpV9I1QwKbo1w2xUZBoPJ87fK5c4QDStrS8ckymWB7EtJRuZQwR5CjEqXkWIc1Ts5QPbkYh8qlVAt6WnIZWQWHcyCa42BGqQRukPj5drlCcgbArLiKOvgSh7qDyD0v48pbZtDRqpdpk0svvD0ucpRRLZnzcyrt7UPeVMzQIgHDX6bTSO%2B847cTyLqJWd2diJnQ7Fuo5h9%2FkMwsDcT9kfOc%2BQB%2B5JxiNQktnM7m%2BFQX6DO%2F0zJgLGk93tkr8WwcxehGGZ8MR4hvXcdUqsddhVRXkMgXfEFE%2FjVm%2FAljmEd6VB1IgMimtGRtS2UX1Co%2Bjwdc7QIuti1Nch1nKq%2FCdoVIakRAKb%2FW34jR9Pp%2BdEie%2FmLEBJhAqrQXX6MnTWj4HSc38mzI7MhFRtHxlJFK1tc8G31x9v9D3hTimgT5xtobKLb%2F%2Bq%2BV6lzZq6aak9nYpLUu2x4PO9EmGoS5OI7UJ%2FA75JMv%2BhMneCuFMKGy1b4GOqUB8d88Elw2sON1PlbGsXXRCG8xVUzAeDTSHyeyw7gV5DmGe9AlD75%2Bz0QjRoEYNC4DepYa9T1OH4Tc7JlgHwhFORMCzr5WqwirqHoepLzOSgI3wGs96pBLYbsizKalXM2QrQs7Pu4NOmFqmxoivMyqG4RyKUf%2FbgOkzd8J%2F82LdqOrJOHQjDeG23QswMjeHVbbz%2B1EGCodr8tAU9Y85ETlZKZCGHws&X-Amz-Signature=b41dc5a00b0fe40a53f92f22525a5eb2f2ac04b40a41920d3cea39597058d95d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
