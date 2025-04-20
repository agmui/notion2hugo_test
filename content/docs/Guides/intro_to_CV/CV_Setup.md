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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZBMB57S%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC%2FsdIPCv0v5Q9DDww035AK%2B6NtdGK4ZpWpt%2BEiOJBmzgIgXM3FKMXMDWcTcnF%2BcQdhmvZrExib2B6fgF577hkgSfQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFMR1NC987nEjpRYSrcA24N3L%2BI9cdAax%2FWS4FsUnmNBFDlDv8zbkSd%2BT4%2Be0vCovSwA7FdRRMO%2BnxTd6GvGPBKchqIJHQyalWTuLUfmmZjaeqKIek0GJ8k6jliDS0CJm3T%2B5zyqDq8eU61qkQvyi2cGusivnAyhz5Fi37qqCs%2FM033folWXP4OLVXdVd6voJRNdfX8tmZGlP0V2tpEqat2i54fenD9JqFkuI0tFRnHTxQUhSd03QL2vyvLYxwKphqdARped5h%2B2Wt2ffMg%2BgSiX8qSaLgxtpxTRaxY5URmI9bfsQpatJRtsiZI7tITaMQFUpfp2Fe4aDCNJli%2BUKXdySoxWAu2ltjf0IKiLqHV3w3oImzzv8CSlbUweNwt495%2Bd6RUAHQYnxp%2FvqRkcjOZmyxO2eSxZeYdGSV8ioT3yGf5%2Bbuf%2Fa8lUzHGqsAmy9XgftcqLeOrhJoil03JxU8RxtaMkh0qOtl5h1JWFksNw5%2F8qyX05PDU1bIQLUOS1wW5i7ztkkgoPT01gZx4F8AoWL4xGURIoe%2Bw0XiNEoZZJAqvnyvuT0nbWVIBqHgdOKbaNTvVxjZrEOZV1ROMxe3clAS8B03n%2BjzBm1Zz3ClVZx2NHXPa1pNF%2Fy7pKnDqXwOyF4Guc2OAqNFsMIGkksAGOqUBF5hvrlI0mIclJMTlX3%2FKTot1oo1DSLbh69FCZg3QBCaM7co14yiPEjcJOyNCn75y8CwDD6gR66t%2BNvSNKiAJrXWVWKtm8nGgdRdYMiOBjltac3NcJLZqK%2BGWJWYLIamUxIt5mHjSUx%2FYCHv312TRGnBsxQzPIVAOUsukdjUwLBrThXs0b93zmNU087Qw5MhqNk1sZatWlXbZ00NpcxpV82QxZsym&X-Amz-Signature=2182852cff34a0f75e519d2370aeea6292bf492de16d6b835ca996abcadd0491&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGAR6WC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBJTO7SxInofoWWboRKiOOHEAt8dlfPmr%2Besi7YhRG1XAiACQD4Rlot4DRzIlntmwLEIUHtUeuMgNHKu628%2FXSqoRiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8BNpPitpT0WtLheKtwDhegSFrvCUxLXkbf6MeHKY9yJeXkPMkQqwsluE9%2F19sbokXlTcko0FOpnGVYA39nkVxxXzXXl%2B96aiNTVapKSQE1YwoSI77n2TcdCLDozg9PGuXrtdrOCj%2FNQbvQspRhYGd9kl5EoJrbNs1%2FlY0Jky2aJwba09S4WIcICJWBcQg0c39eNd%2BdfmGMSoFqbZuq99eBy0xd2zet%2FBvvlMCx%2Fb4fJVtB5ndsGamVXPtCni56s6SIkWitITHVm3XYE%2BgzXgT7AyOet8KQEb6Ry6KckDyy5eNIhDO3hJbaBQll24bkbGd4XOIz1OViyr770eLCm4FbIwu44%2BP5b3RCNlr8aHqSAwuwIkuM0yUHNyYP49uAYVj%2BZyzT5uw5VXz62WmOlosufFV837IXzgaM4NIovAKTc4Cgt5UXPrUykD8xhVtbJ2vTcg2UTMPiMJgK2jzbvP%2FH9ri%2B19RtVW5sTUqGeGz%2BGsUUxuD3EplYuPr4qo6MprEKK8g92QcIAErdAzpURyZP5SIkPbxz9fxH27TDOqa4AqOQwgS5Y4t9sUCfUUiizFfn%2BJOtzZPjofw40GacIsiyvpH2BBIFBLoXAFtNlmqxoXX7ZOCHtmgRIyCUPO%2BLyAYgvMCyjYnCBOqkwlaSSwAY6pgHeAvxkmSssejXHToNHYHtXtIfTsnWJ7yqlawZCYQLjZajPndJXIQlDTI87iT%2FQfkxAW%2FIrLMYxq1HcNqORnNb6GxxfNJhsZhVv4B%2BcZqTblvmha6wurDcpADgQz2%2FV5IBW4ZInf94DdVm7msh9LSZ5Or5A7JOkqJYbwRxVKYid7Aw%2FRjJ8D1eDDYXCVp%2F%2Bgq%2BPKtUgCR%2B5LAGWzwrFZgj%2B9QMV%2BxiZ&X-Amz-Signature=dbfc0d5b6753f0594f7a0b11f9b9de69c475b81075364a3a3a2a68fb6b13771c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
