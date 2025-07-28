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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444TX3CT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDSLCDaDXq9SxH7UE6P29QMjaZkqgE4WAFckfVjXWeXcgIhAKwAeWPUCIyd03by%2FndH3P7LdvNwfCcSc8WXyRJXHyMdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwggPRZyZempppMSfcq3APU7rV1FNZfMS%2BfyzP0oEoDkAjmbmsNcCFgTFnhLWptktenCjfMe7KyAiy1WHSdjJ%2BNdb1Jx%2FQZ%2Bya07mKttHTLYuOPfagkgisO8qKV0%2FLwvdU9QJJ3P%2B7T0nWpJGCy%2BZt4UQFwYuEf3XjMn7fWlS7n5JKylux8BBc6C0YeIdS5GRuvvK%2B6a94xqcj%2F6QArGCGi96nkMLvF9%2FmOTPIfd9zhRlL2uprcCJOSTmwO5%2BUUPjs8icn8FV71JwwO4dLEKcotoxPHGpPixXjoxMXNa2HNtD3cEXCoz5j0DIIysY3v8v2iAYQXe93xTZ%2F5vwO7f%2FdhCHsJwwtLgVqtMuh%2F9ltz0dYuIDainEAbrq7r49d0%2BaELNWJvImJyhNNg8ejAzLUOXs2YeH5gBPz8C%2BZbPV8K%2Fuhcf1SymaJiZO7Dg3F%2BbquUvu2oYEF2LbLhH5ZzAkvv03KpxVD%2BlVMGPJtbde1koDYBxk%2Fk%2BQa%2FTSIJfNtU%2F%2B5MdX2ebh6BFaz6M0mU70EsN06igJeToQJ0OgxcfWNn4AoTdA%2F8MqLkZJPypZz4CIQZdBYORpJ1vi68qB4mJHcJ1eo8IaOlO23q6smU9F6h4c5TzoZm0AuCgZSZRbS2SBbg5Yv3FhAqOt%2BBIDCq7prEBjqkAUmAKPyW1RXgWWC8kFGzu9D1srqkXFboOH9U86IglvWas%2FkmSL%2F5JimfxRYiAT8b701Nt25x6lnYHbx79dgFHxd0QeRAW56yONz9UMt0THu1GHr0I4uhzoTcLzXafXDRJb3B60KJftAx58JyZ0A5RDYMCURoMLHOzUFEulfipGnUcFJmBUwr2TM4MOfiE0jkt9auQz7uIds7Xa1V6FP1lvVi6m8A&X-Amz-Signature=d33e774668179dee1aed9a713578c648b13cbedef558289bd79b9b50ecccc515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4CSCK4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEY%2BxtXnJeuMF3dfyPeGd0zVXZHTaabAP01JgzHfojJkAiAYbMwhbtYBiWdANuYArIXDRVQ%2FBff1nGhLa6RU%2BA8%2BvCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHV5z1CQLyP6l1PZAKtwDduoWwClf3NezAefTZ%2FNwSS02I6jMiGNWCyFTRrXboTV6ha373SzhrzMEgODy0nuIBgcO9qfGLQgIpcDCnsbdeaOOKv5zvz26Tbnz4scfVzXM%2BrnxyUkZyJu%2BzuB4RZsg6jJp32gYTxOGRw4T%2F8c1b1E1awiIW8hvgeFYGtBcS3H%2Bmvl%2BBw65sCrF%2BP2SeO7gHToKzJzaiGxS3go69SqjXg%2FJmJn8Bbc%2BkWHLeHW4ucuEiG2F%2BQwVaYJPWVrsFXjU2KHMGxqxCOaFafg%2FvgZH2mbRTq%2B00NjDjwAWKxStTIXC82pgjnrVguX9%2FyR3VcXUE1%2FD18VYEO6tpOCPzZ6f73h9Nm1BSqxVQfxhwXMqf2xq0O2bbWU3cShhnIZP8LDhhINmA5sharymsDmRYpzyIjqbvCtnJoDZJoRzvpbMcEl5we0ZtUgahaoPmQYx7Bu6xpiL7EQCuKU1J3760iHXBaVfr97RTkj9qNvzVdUUue%2FGa62IebVwZIcBrXd8WRrZlNqUhNvaVxzEuh7q8e8r5xllVUpwp%2Ft7XiMe0Jbe6odeTIdlzJFdNgUX8lqv%2BbNysmKDBc6Oq2K2%2FLntAa5E2YJ6Rc20EHcBYGP2lniDYzBKEQAQq0h9KbKY8wgwu%2B%2BaxAY6pgGTl10SmfwjM7vXhBogW%2FwAcuDJ0VPR37%2Bz76Uxh3vLZ028Il%2F6eFOAui0Cpj8le6ijI4mp9V9Symr0x4aceXlZ78DBbvigg1X%2Fb%2BEGFLuiq%2BIa4E%2BmAomIq4ltldvMGMsawy6ahmvCw1Ck8eGRHzpYhdMocH7b91SEGTTo0Y615FUJbYeHWjqUC9%2BAZOllYv3t8IsASGvbq7EfO0%2FuYtB27%2FT8xPxo&X-Amz-Signature=4b0a4de94a3be10ff33776ac22bc8e2fdb5d681789d59319b1aff40c03cc817c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
