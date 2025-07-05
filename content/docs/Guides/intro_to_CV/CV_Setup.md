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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRVQCJP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEQV4RQJRUp647EH7gDqCFnJ4mxZI%2B80Dlm5QUrft5HKAiEArK6COUJn8bdb9JmZriPnqQrYhxpjqs4NPIkfMnitbz8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBDFqicZWx%2FOTq%2BiBircA1vJ1GJ4PjTkv0BLpq6meRMvBd1SbgdAo1%2BNmWHk4C0C14DbD%2FPxC9r5fjneNHpnUH1c6pp3xw%2Fp7pE6B9VpeQbDorwotRfneBbDLYivTPF1tYlM37DhxoHVLGgSGJhIFEYMCoRe0fKUa7UqYExm62HXBfJHoPZa8tGPqmy%2BU6me%2BAlQhKQ8Jxz1mVICqR5I92wOAdpHFYn5PfFInkS%2F0wrNSNr%2BqBsUTxAGqXOhlgHAq94uFgym%2BWupBA0pPZY9XkWHLLYqlMXE9PHcMMHYwBFCs4IDdlIB0cx%2BvSg3D6ir22HxulhhDd2QVviX%2FY1HbkMB12rIBSHjH9ZWL2lCg%2Bo6zoMBBlYDNu3DiRRe0AT5tZtsjgpDxD1swK%2FsSEzqWteQBGB1%2FnyoGS2FjdaHzFtGJMzGJu2VVzxNZLGIGlgDAyoGTBPhJgK7sMPX%2F8bi4SflftMp%2BVjT%2BnWAqGZ2ZLquZvO5Kz2aWrXww%2FgiQHFc7TSUXBV2WJhz4vEeDPi87gIIFBNUUC5mGBu7FLTDbDKXnabD4qEFC7Y0c3WXB2PPmu%2Fue8Kx9tPG55G53H8WXZzcnERBim8s16p5P2%2F8Us3KxqSzlv9pF7MUOGlvD5SsxzlyAtCVDPFyknFqMNmGosMGOqUB%2F09L8y6g7YELXmuwKgZABCwyuXlDQIIrs3y%2BvYprWA4xTt06O6l2YyvKk6BgIj%2BddF9cj2iKDcdnfozzX4n4aEkE9d3fmWWGIDChOI1kokwCNiP0%2FG7GCX1SGOPekkWdnqa7kuDq1oRjUwYmRDP6ySucqwDyRf1pK5LYtDQ9mwzOsc3Ysuv4IqOAnNAE7QVeWKAA74%2BEKi1b3pdG%2FsakQdwysh28&X-Amz-Signature=fdbab1f6b9498163831308999b8b669d65b5c2a218127e740303845df07ae94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARZOCYA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH8Qdg5H2C54BRdBHSa%2Bn8wQZR4gNYf31dkMl8QdFl9BAiEAo1JvKsLGp0D4SWHvvBdXygi%2FBSvqrau1%2Bz2VJcmkzbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLoXtdyHlr68owShbSrcA4U%2Br6WMBuZTqkDdHwQNJOlxmHZPHkmaEXQZB%2BM5vAH21rP50Krb2TRDn4trylWs3YXs9Lzj1v68yIDh0keLKSzaiJwnEBptnZE9H2De8zGfh41Ef%2FX9dW9lbXA84QlKRJlTWG3imGQ1Ifx9%2Bgx0HOzr5VBnykqa3QYkUw1vaGboOmNcDbxfwOJGEhhxH1%2FXGnAeaL8Ve0DJ7%2BLFDMvf%2FPzdqlbfXqRiTUdLnfFwxKkqufjUgYTeM1J4bSlQFN4J58ehMsL8NAYzy1nOTQF6awLzXLguFKuqmK9RBLjeyChQKTyc0cCCzyS8s%2F9nfQBuVyJMdTpHJHK5LciNsMXW%2BhhjZBMSi3WiPjen5mzhnwSRz4G9AZWxXq2PoXsx1oA9lh9rLsJp%2Br1FVipbyNMGThraxDGe7z8DQscgF1RjbZYDmM4L9wBO2AaCYGfgcjqEhQNABdudSR%2F1qkzefwS%2FXdK4mIPCvkmYoJEONLDZAl2datwuoDFZGkRzgPBjgfDoEdyGCKzyPMzgUkmZaVKD9t%2B8kqxfqzom84Fv8nRtx8vFdI%2BUk0FpuTrGMbOYPhOSMHKpL8Rkin6GMsqS36u5kCofMNMpSUc181lbuDGFR12giNXSiwBZy%2BNm2G7aMLGyocMGOqUBRNXCpGEe9h79pIjPIIHo%2Bc4HR1fWbAJvz%2BtrfKMLIAoLovxG1KmhluKvtmLM4CcTJYS5ZQHUPPiPttSPiuAcghSmcHwcX7ZXxnwZBZYJPysiB9AQMBqMoDhlWiBveng0jYM1rh69xFj11oVzBjLPDwsu4UX%2BjHg6zm7sf0laABtc6R6p67FTReFwujOX7vDRoqU3Xu7rqm611tphlAX6Az79HPoG&X-Amz-Signature=92995355b03b6915436944fd35df909cad9806ed02e9fe29a668076625661d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
