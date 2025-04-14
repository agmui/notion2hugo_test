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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNO25DN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8zSR9aGy%2B%2B0XWCV4Fkv8St0DafHxoM00UrCgAhw5R6wIhAL8K2MGA11eSbbRlz%2BkGnQf1adXpEE50If3ZpBfbQZruKv8DCBAQABoMNjM3NDIzMTgzODA1IgzENF8z7bWkuMQpNfgq3AM%2BA2s5NKWdzX%2FShZBQr8PLz7koK2ILxAeSJ%2F1JqKNk4bPHK0pJYVMNY8C3TxK0Mypx2Y2MdfuNYzyTkXL1VYgnGTdFviZDzZlxWXSSp6aM7lGF26WCD5Wj%2FABQv9aeLsLJr9XYL7bZfGgsfWaEWVQZy1nuGh08Nskco60o8huehxZAAX1H9kX4E3Xe62KQp6w%2B7DnkZNtECdVfVxrxD0HhzqGB%2BWq7JnfpnCnjI%2F8dXtWJEra56e5WiMnm9VP1YqnpQrSiGodSjlFSYuFBjBo4hm1MYEql5XJl9HSJSAPVwG%2FC5Z0PSqMgtxomOKmQNT%2F6OE31RyvszNvitSVl4n8qw8v2tEjl%2BmhNKqsp0z9Rmz2wBOYGH5WUhydi1KkRB0igeLUV%2F%2BrlWevJ8MXUM%2FPdlQdteMjS%2BPlfA3awC6GDSr8fJUSztfB%2BrVQPee6%2FkYhz6MbyqSBzRiCyQmtU4cpo9%2FQeupppq%2F8RTgH%2FCLNITv5xt2MuNG38NmYwskm1NULnRYHCyQXeM%2F13ki8i01XZuUovkEvrHu7swf31JVD06royzaOds1%2FjCINtag8wbvBZSovnFUULQtsAHjZPyu75VIlWID5SNJ%2FWUAbBdSYtaZrdVnAFp2cK5zde9zD04%2FK%2FBjqkAU%2FOCfAkDa5GPGvPncoXlL9ZqmE8iOStHDVw21ZdVHHtntiQc6T7HOYhoY5WYusg%2F7G8FdFZcQRN5WcbjKbJWwhpCwyHKQsxW2RuWrkCmYlHk2s%2F%2Bd85DU7My%2Fb%2BcEO6a6Do%2FDWbV8d41Mb1ssC1N7Txi%2B3miARDiINa69L9pm6SH97RHh3uybGDrsRNclveTF3x%2FNlP9I%2FnH4PDA%2B0MnzUJb6HS&X-Amz-Signature=b5815705763e30d69023d97c4ddfdd27b924551fc7813aaa316084c4747cebc8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7YKPPY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjJ509b%2B1pLcgY4nDXBST8JpeLJgUHyU%2FXzzpPgW2ihAiEAspKNPJpwSoSYPaI4zipi7vilirFcG3anHWpkEBQjYokq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOfLB9etC%2Bzq42F%2BZCrcA%2BKd7ZWiutubIqaxkuy4MgrqYK0aWUX0LLq7JCqclH9MnpXI26ykoDJUWvw4WTGO3rkD6NprqryHrC27ObtWeL4CcXewdgGDVOE4XDS3vxlrOVoLNTw%2BjzGxG6Mfo97WmX49q57CZtRpbEIvj3bZWTsL%2BfvqPOZOubpqZ9wHZYVmYWzl9Cs%2Fn040BO6JjDbnHHMcP%2Bv0xNEHyRfLweEeHwGDgD5fdXs7%2BoCcw7GwF5X99TF0iIzDwqBy0FEBPajxCm%2FB6xgtENfVfel7f4wOX7poYfExheJQdj4f8PZFgghmwl0xoym235bk8E4kjVN%2BjP5TLuYwDFflNw3BWN7NM4DKCDK8LHu3LjWxRX599j%2BEjLLR5CQYjfSFSTNpus0dSeolXgWQN5LEl7J3VX%2BusmkXxtuSW1V4V1vt7%2BpoILm9QoqAYsPIePiZSlD1Uf2cnNzt8g5zzknI667NuvZQ8MraXn9lFiLLYxvBw5MlCLBWBGBCkfEJVft%2Fkx%2FBUZPIkrmblR%2BEOzsF0Wpvc24mpsV3wzPGW9QKbBjbtxDvSRkJZKsYwfgrFwHGbnXmOpGv3%2BymMXA0Rm2ke87XyGyZDzjBX6kURmnpVqkOvJAI3ezqqSnWLdN%2FnK0jsxwDMMnj8r8GOqUBL%2Fc8ABodZ7m8JbIVJcwO0GUITBVQwV11E03eXhBWzyTKVqxXSerf%2F2azJpFcnHsqhRcYUxby7xgErR0oKiKFKA1n0A11rR7cyljDajIDI1IVwhbJfyMuNvQlU8bxMgUHyO7g7LdQxCx%2F5msA3K74zem1XLwrW1DVeg06u2u6wzrVQkbpNDfdALv1GCd%2BmjQxvDtiG%2B1bcT1HmG59%2FfsmyOi%2Fft0k&X-Amz-Signature=0a9be1585e7738dd235e057bb86eadf804c9b04b13c7528502f1b40629db1514&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
