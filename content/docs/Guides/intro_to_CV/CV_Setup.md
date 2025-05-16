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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBT3T5OG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHetuW%2BAuRN4EBC2s6SVwlxeBNs5CwpoUBYpNFhv0f95AiEA1ev0DFl1kPCdER1CLJxR9wwFNydqkwQXE77H4hjulKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOFdI6dJ%2FMICU9qy%2FyrcA%2Bk%2Ba5yLPZbQmVYw%2FwNMKHt1OkJaX8mq68HR9MJxO%2Fsehp2Hi3EYd3yVIiCSBIMhqJKR73%2FE3QdcbfOKKv9sSOOTb5IAPstAX08AMKWYEO1cgqTJnAtHvR%2BEtK4z33TEZfP39JTOiwRNOjHDDtYMyS3teK4sgaaPvS6pb0wgNNVoftFrGCfhB4NBhi8pjEHS8npd8nEL9CvJ1N3Jsq7sGrbMe10B0tbL2%2Bq28JVKtJf8y1mpehpRxa8YAjcm9DAM4i1PYKvIsjd5EpGITKI%2FOArF9fBbKl5A9D%2BcesUw5KD2wnl%2F%2FuSUlpxTnMVIlUqdhseZlJH92sqJWrM9SVIqhjXL3H3o9tfHtLhoVcrpJqPiay6sadxmUzPAy90tSZxPFbblGqO968tJJyYjabLNn1EP3Ul30wTRdVts7W0qJvkxMrDq0UwEGvetrXsuKmq2axV6asy2EIdxz3bQmLRyAQU4seRuz2OHwF12M%2FF7xfCZjHsgMO6l0%2Bgf%2Bz60psbElqAM8hNHVVEESdAtjvU8flTqvZ0%2F2BlXo%2BamvodFi4wLI6%2BjPZUZ5MZ1l1UT16kZJGvRODLSY%2BRrrSF7mL8flPYc40tk%2Fwaymo2NEYAiSWMpjDNZxsHXct0J0M4pMIjEnsEGOqUBMToQs8G4OeBg%2F2LCnecDJ%2FVMpyzniugAFGteG48wa7Vr2mlzJ0xPogpe21gBpzlgj6S1E7mWTlZZDKuHDO3RMnvbKjuWO%2FQsZqAPFgWBoY4XOo7qxKBCZVwnoQsDcMNvyxqDqze0Kz4rMToQBPPJXMimT4I0htCXawzGNNEBOi7Pruh9VMwvaepPtF%2F6KvxH596ucpz1ZwTju8ukLxPNBnSDBMDU&X-Amz-Signature=76292f171eea77054adafa9ae03387fa32e77f4aa48138337568bd8b3f80f89d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUN5DT4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJEXDvJdfSoOGG0se1amQmwILEwqeWxUzPecRza4Yy5AiEAndHEEtBVVfOimeN6dRfSE9DSU4hjT7mBYGbct1M25Xwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDrwYajYEv6t6ZAK3SrcA%2FoYY89OmDGJbTYqdKOJA7t7lBUInDJhvW7t%2B5p2vJOZDKgnNwn8F1qR6k3DL7wJl6%2BTV3NZbjpkeeZd4JbMMQ3MvR96xxY90mTBA%2FWbLR%2Frt7VB6c%2BjIbLWejRuG5ToUmb5LDU%2B2bjTFHkcPrlMB6878y%2F3PzL97K5hCd6nGfY2pes3h1BbI2dDq9mjDMibgEvATRM7aLAf4omxdO41Z5QUEEYLLd%2FJEjsXWk5MHHX1NAJH2uucBoDfD5kvRsxDLBBNPRXfzA00ohyHdnuP2meDaUC5aZ3iLWfx6S90hdM0Uywt%2BDyvoaToMTMJ8g1q0WrJvYXrE7sKgsZWusD%2B9ceJTOlW45peG2sNPvZ2UX4bCpbfU3YZiatqywqyETb9nsNArxD2tFEBKqcLrhihdpaSJlAO44%2B7soJqCUwDrWrvmlaCCpLC058abtaTAB3r3C5T49f%2B2dvDODKiqblAcuJjZK2aDEU%2FToo1eqRc6E0bUEA4Z0XCEgzNJhDwwR4sDcHmoMNl%2FgYP7aXoVUpeO%2BusHL9FQI68VD%2BM1XT%2B8JqNL5nz9d6EdyyYNwBxo6125O0DCCHwPDU3OZXD4ImJmqrHYuLLEapHSIBWBduwQ2G%2Fm168jefP0oQkbfJDMM3EnsEGOqUBmLNJ%2B1FwQJKZQGJyq%2BtxoRYruKd6M9SjEUUPIleyP7%2BICJNFdRh4WBGf4KM1Zk4%2FADmS3aSED4NhHARNOB33%2BSvOXwmvVdzKuxi9v7BZtElqwwlzaAylD%2Fu7GkcChT1Jfw5b7EdewydToB3BXMAufxjT%2FG2bHnnn3iNyWKTqj7MwCRC8lUQj%2B0LwBSgs2le6jH5%2FQqpDSrlCYn9aysxsdc%2FXPWxj&X-Amz-Signature=134bd5057d219cf2b9a22e809a278e1a619996991c74e0f73e7075cf3cfa3efa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
