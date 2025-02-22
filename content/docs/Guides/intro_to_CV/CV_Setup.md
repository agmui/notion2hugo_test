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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ME7BNX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVqYNq55zrqP8I8dnns00we%2FYaH0LI9cmtsDoDK4o4aAiEAxNkx6BzW3uiflI2jdhfHgRXF6RuAte5NjY0ODQuBrG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFVzw4kONEUQnrkUSrcAz8wxieR8CFZ00UX%2B5%2BliIxNZvNT4J5po47JWxLozFBAeSp%2FOscoLKiJL4beXZUZeb1bcgqpYYtAXhknEqdK1e18iB%2FDn8iFscZMNbEU3pbx1mt%2F%2FSTWaDOn2MtSrFrib%2B4IzVxB03FvhmDAYpr0woJjYQdGMQEERyln0pnpZG8vV2TbRGzYOvilFIv7QH%2BVjWydcK3lQCWbuP47hgTZuyLf6i9%2FBxhzA7nQTJGOIC4ItxwuTSNnU0aKBKBlG3gJ1J3q7L53qs4K1ECalbhgClx%2F059ma6jk7anf9ANa6MUl%2BXmS%2BmXj7fsa8Lb%2BloKZ2jMWPnPMcqjka8OYLbpIq1NCGGwi78pn2tZuCP04u1WqO3bHVbEXZbhxlgSo%2BW7IKsVMjqNVKx2avhWvEAmzt%2FYfY23lwGNI7D%2BaR25Mf6ZEyYu26n7liEMmJiVzop3VK9LEcLYNLiuKtFUnpWB4Z1QyqDAtueYSe21XqClA11tjoI%2BEiSAfUeAzk7cosaOUGEadLmFvpaB2NhCj%2FQW6VFgGAMq0icndy%2BapkVHwZxwa7ISZM%2FrRfvd3qlCDtCc9LFN9r88dhE%2BrMLq%2FiG4px%2BC8ygrRKeObyQ7%2BLpzW76KWbCDl%2FS6DrxVDMWsuMOOH6L0GOqUBimBCt9XoCb5M9DsT2DHMm89nPrLd6%2BVKa695taTWJ4iAwqelmbztuxX6imezg1Ue%2BGphTdRgk74BKAmN82msgRY7w%2FOWQyp%2BOGOwaAirnN4UNsUIp1j6pXJA5hZCNoqQvaDoCHllYOACYQl4rcWeX4FJT%2Fje4MGDrbbAht8W1DzeYpXOYUrShEk9fPm9JX1YoJzTYZSXGS8Q01SmvfsnBC3lrjOc&X-Amz-Signature=282607626eb7be7efc1fa2a618f0400923897a607ed40b9c9d7a3f69c0da5bfd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMVCZUB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCebaJz51jbW49S8rLmuqi%2F6ak0CDLDOji4z8E3fc7EIAIhAMpoZ22u%2B5DZXDnJvocMWPI0L%2BKDNZ2tAd68ibejwahBKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgJ6uuVNJCEl5QjEwq3APyGeDMBL1K4i0A%2BoK5j5cl7oz86qq8WPykNrYNP%2F7KUNVU46bFhD5mO8Be%2BtEq694gdDfqAQxwoyI5LOO8iJncDIcWkLK0i8f9Jyi5zMaLXJeSmOhdKj1SDai4%2Fq99mFx%2BlBwVNtQM9n6qveTaLwyAY9FiukI4LTmX0vv4MZaBHTd%2BM9f2EG2P9jGGmdLbSLCReIuhMkN%2FvlStNLdD6%2BR5HkGTYnq9HNC6WOiw9J0NaxDBQNqP9p7MMRly0IJgolZ2WtQvtiZGJoK%2F9KuR8R69ffshFrd%2F07HT9bG0mD1WcthqLZWr5Lq%2Fjbpl5D97JhLGjnfGpUpcw8u%2FKEc3jdduFWzR2C6EAoGHTBYkD9ub8kz%2BHIGGx29yYmEMxzL6jsTlL2gvd2mv5DBfJZfsfbEVHhT76oY%2F6C9lPcykhjzyMP0bwIri4DDO5UarNanKnCjFcMvyQV2Y01vxJQEQ5Wt8EL1dtNxHwCdq1eLIKAx%2BTMXyHgL8tCopVgH1HSdMSL6m2zluthNVA%2FANFnmxDN5%2Bi97ypNzuwNPvNtTZ5kB4AwRTYoH8NCHq2OmBnGL2UCbxzd0RHrOaYu1v%2FILrUAwKfkSC%2BqmEi42U%2FM2mQ%2Fux58%2B7%2FR5eBjawcAHWOzDi%2F%2Be9BjqkAQ%2FFDz7%2BKvT66YiDGupg7DDuNs3FW%2FDCNqjf%2Fa264w8wmOT4KsDrCDRBBK3IQK4hgppBkQFAvLXM6Z3A9XD9s6UdRtoxfqukAYjAG3Rx%2FqJJ2IvdULpCXqLak%2FaW4Zq5DJnklRW5%2F9OHzdvZLJ%2BeF6KYyyngiGVOlzA6roUBqYJwxADL6WQC%2BuyDxpAq518wqk7g5sw38r19o%2BCdd%2FRhOGO2NmGj&X-Amz-Signature=7ec2cf2ad23037022351a6f6afccba2b2302923a23ed4ab19bcfa7cdc796355e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
