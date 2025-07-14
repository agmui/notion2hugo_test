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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQPXAWA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCxQmLELwbU0bkaNoLr%2FfWj8xuJmbX39e%2FzkK2BSt4k8QIgBC6S0xoZc2uMGKiw2lAYKoCif1CWrf%2BJQW%2Focov1NhIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB3lwrv9rNVEzEJa%2FircA8w%2F53r60H%2Brt1fSznFqREZFKq6CcwhgvOeaIQT7dBVT%2B3j09e9DIr5cHiaFsQSdHdaL8QhJ61smJV8FvKnMjrKjzcpdzbaFDZg1If0D6pCUBROQPQYO3nNZM9x0HrU0lXt8%2FXkZNJ%2Fp9J2ubY6xx42AKvnELC2Xma%2FgLqwx%2B%2F%2FYdJUto3Qk7FlBzYblg3EEm0MhvZI0bkYo2hzYgAGdcbLRn5rJOW37BgEcKkIRznZha7S2p4gHD3Dq9nEkY%2BBes4Ax77zi6gVdK78fFMKsJXZo0TNoH6dg%2F9PeDLxBMXV2P6sGWvZfVzGfeLDTSPUd%2F%2FlX6lmIgCl1h3djnue59XlG6A4yXpbMNJ%2FCgOvH1f1yr79prjMMtBKo0KT4aIfAyv%2BZyJhqYtTOjjbks7A7ZJhrZVxCUiWLzQxCfloXng3%2BCd8MmAMrLwkaMadg3g7gis8%2Btg17vwptfMFS4D0nGdGcDdl1bgrV78AU3S2EkmKjvIHf0nlF2KJlehzxEdfc%2BpOM1nYS0mEO2NwJgkPm1L4BG3oEIGIBhj5wCC91AGM%2B3YkQ%2Bqmi7g5nUjOHrMZUepfMFDl1fKe%2FjfAKVBeR9btT2QsPhZK3B1wksiYMh8gxZvF6hTIY%2BbcX6PpNMJ6F1MMGOqUBcCrPZ1KnH9hTFRr0Um%2FQEwy5OuPB0BvWuvMRHiF2CpDNDLiew5q6ykfh0XhEucL%2Fkegdq%2BLeXowgN9BQiB%2BWVPfhG1j%2BqfeNt%2F0pqi5ms8NWghwUTv9C2r3SqUrdi%2F%2BK2UcRjasB1XRws0NCa8LbPeEphMdPJSf1AkWPAfCFkCJT%2Fp1S9OhQE61tBaq2s6j0UjgYTrXru%2FYrcBKzQ78UYxAzLDXs&X-Amz-Signature=e100d33821c28182dfe89900df83d343b7c721544f21c510e1cf8a4ba96f038b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666755IP5G%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDlwNkspmtYjLdcJ0unjfrwKPEvfOY3s8A345uBpmc2jwIgMJW7CpsJrB2Ua6CtpY48TZQcRHPfqLuZNP7EJyxT8Gwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJTReTrDNID6RfnvByrcA%2Fc4YbTsD2tmyMttMiQbdmnjxdMa2Dnz7Jbbw6ojPNJnrTPi3xs%2FIFpiY4UKmdQxlutPtj3ZhNTBFW8upLyqs%2BXpfWrAJsuICbqDsDKtubGno%2B65L1edpjVwxMlMzxnBMlIDC9qF9chiX1v4Jna2VJ9cGP2qf5oFqsEZCjZDCfkeNQ5oav%2F9BuHiEM4ki7iW8O4VNF41s1iesxTtIgC6reJAdxrUMNKofPmjTeIWF0TXCMiarYnCWzEcr2W2cB6V5oaIVRCJreFv05jScEFYu%2Fh81zGR3CkxHGLmYW268LYAS7m3qRExdJ6jD9C8KICtNPUJ4%2Bm%2F1LEMnIPgiu1%2FKxTFEbKhhwdWJB91R%2Buw6fvGGePfu0TbMAh6uUBoABB8l1nUHZSYjqRJcsbhX1ukJpNekILXnE2gHz5dCc%2FF3hU1KmiMV%2FbQTFGhrLITL0%2FPpz1ivd1UYFiiawbQ%2Bk03agNjT96ox7JxVQu17O1zFm7P%2Fe8y6z9jG4JSVHfPHB49lP32ND%2B0K3uo9Rso4GKGxst0U31ggKsdYB4ByQCN9o%2FMhW3ah%2FdBA%2BlM70Skq6zP25qIoPq0yRQRXrzXJ%2FBqruwqbhjdZnqtGrqkEdKUVv0MLBtlEgQZU0XsNrKZMJOF1MMGOqUBC9gn%2BdTH8ZajFmrUshrYWh028%2FI1ZIacqU8T3c8tzzRdYHG0lXvojI8Mu0Dau1CAHHZOliQTG%2B%2FM54Cn2qhtv0QUyQjPP0mqa5Q%2FPCZ2IxBG5ssnAIFrifgRfxWHVbuWQuGI7wSpePXSG5bCWVRpuOiUdVfngX99HhYWfn7px%2BIY9didsfuvYXvdMIBkHABAHsPM9EHS1VITBaROWpn%2BgZ%2BhKT4u&X-Amz-Signature=68d9880f6ee759b3ba46d8eaefca90d90a3253be39b9f31ae0392bdfe01f89f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
