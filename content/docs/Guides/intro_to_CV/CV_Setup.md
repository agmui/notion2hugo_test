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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NK7P5WN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIE%2FcI%2FEBAu%2ByU119kznoFOcZ9DjybIgC3UH%2Bfl3WI3BQAiEAr8Xf23c%2B3snY3lshaLBNndCEHBkJxZFzZ%2B1V3Cun3O0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDENBGEEXreDitGktxSrcAyQK0Io3uiC57ENxd%2Fkqw2mDbo5fwjilm7Uug0ipmms3sRUSykrVlKDDabKECG2Tma0K%2FHomWpw5hNKoJ%2BmnOK%2F7xFsQe7UiG262H3bjj%2FSNDU%2BUbrCQvqCbLidtLpypQmRWvz%2FM9um%2BRHc503YFp6NDL9b4UuweQMHHgu0EQn%2F%2BSUm0qWZRhOsLSRW6AFGWGPCnmrt9k41J7hvTaAiD16wC%2Fmqnl0HT5OpHaY9XqJvPECnb02OTWdIVKunP8uZr%2BBW5XRZeRU5R%2BAq%2Bbnc0WUwFA1xdrwOgZJ0fZgbYnnqpDLLcKtbjQfSUs%2BTDZAeFM4md%2BNLqCNq6ieELL2BdN%2F0LNjwEJ%2Bpv7CMxca6u2WPHuJG1iko8E%2B5EsjQMiwVjW7%2B7xYJRwEQKezTeSSx3fhE7m3E2xxSvcz%2BI7Y9Fq2jFrvEInrL%2FvtrTAhMiUioZKImtTAiNL0ttZn68ujXxUBr6d7Ae%2FO6cCn85kWjT2iarf2hZU%2BextSMrAspf2DZEuDbTr9XJwIsCqRp8z0vGTLF3VOVq3044OeawVl7YdfzHiV7pedEdzsw%2BIt3Ik0Oj5Fg3rBsa8QWt5boeYN3mSbRyvVsUps8rUMAQIAzcHZO%2BRZXGRxQ4xq6n%2BgDXMMTL9b0GOqUBfVVvYmiy%2BxFv68uXP2ERB2NgyagMqvmjFHtGGxFUeZlJF5YkD5xVPeUgNhyfGlZMPFgTq4izOYl5%2ByfGgVc7w1pNmYjjMuWVxxDnvbTRyppUUOMmlm5CODNA1jZZk0PHFvkIsf4ABXsF9brZLPUNFdGJKYuG0CCophpndJFeNUuiEzWPJcKielIPEelN7QPXgTzAZIqIfwn2QaIYln%2FoOc%2FzSpjs&X-Amz-Signature=ad69c2bc48ee31f1c191b8857d01eff43e54893824a012e349f33a66b738262d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULA4LWU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIH5Iqhkh7sc2KWcBt7nJgzKWa5npkv7yazxrtAbSt9y%2BAiBtxhJa8%2FnvIAfB2EWuY6k1KW9ZzkwHNW7qZCmU5TaLnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7%2FJsFphhJKdRuV6nKtwDC5rPBxjJI4tj2jFH7996bFojL%2FX8VPM1LS16Stq17VVcMWuh7UhdAqKM0ZVQqwwx%2B7RzFXVLiaGkpvi%2BBDpA3ZDLrECfAZs%2FBXmNqe%2B%2Bf%2FfruztbkoOel862hbE1MURiOLqhrqjCChV2SrKDnDP38R0SzdrZVooEmbgFCT88CFAzLnXgW8Yz18xlNPKdqxy6nbm6KjTYC0gsRnuCDuv%2BuOFYHvhcigtgbuRa3RgVhAMxA6Q5KQp0b8RKbp2E3su5%2Fm2GJcXbri31Cw7l65UGuOyFxZEUy2q2Sz9k6JmvjvaSCmE698blLmW0rGCE9Hxm4JMmrSrHFd7RL4qGC7bSza2OHxTkKq8hkP0VRNoBT6G0LQBxLDkOoR5714TUtSmq2jerIB%2B2CTikySPKQVL0wOM%2FYwiq0gasf2gXhmqx9Ic0xEX7Drv6TnWEQaI5laY3BEIeXlToG1v2MXjhO6ls3bd4rXU0VZ8sqluC8vmtWkC2A7%2FovasbFMwyZ4CaMAsaHN7XW%2BlrG1DMd5R5fxH%2F8h%2Fff4Wth47sWn5DPfmmz6Y%2FhQhvGTjb94arId1sH5iYUflfXH5%2B2x07llaiY7aPStXfwngzOaelvzjttoppO0v7alH2PnrS7w0WNMYw7sr1vQY6pgF7s3TyFo%2F93Qj8f2nNEfkrnm9c8MInoIdN6NGAy2FDxg0SehBn3gqkwbk%2FGQ1kpZDRZQBu%2Fr8rIL%2F%2Bb%2BIk9Q6vgCJ5eqxdwtMsStYzQLRn%2F4Pt41R%2Fukh32GCD%2Ftv%2FJMN4%2F1vXD%2FCLAVglVqYnzqN4R14ipMt85BzgFxlKZoL07YZtdUUPcM%2B0ri2yzgkux5Id3p8ueWHUNuf%2FLZrnIUKt0Y%2FFQQ7y&X-Amz-Signature=639b0dfdada676163e02edd59114b0902f80954b0fe6288f766f6af39cf4364d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
