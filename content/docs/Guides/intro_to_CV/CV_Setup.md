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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGC4ZO2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD3J77pcxupDCJmNZV%2FGFrZ0u9qGvA4N0ZQmIsmi2sFfQIhAMOr9GEtFy4OpORV8ArLtjlPJhfX%2BZCfern0k0jqoLprKv8DCG0QABoMNjM3NDIzMTgzODA1IgwLm%2B5tGiN05uAZZfMq3AN%2FcIYKC7xOM6VUOK5c6uQGimm3jEgT2NMnEUCqvVby1%2FeIMAmNQh12qStwxASkeIcYW1zySh5B2AGa2VueWloPryqiY5LumRW9XKEiVzWoIPKxVoLNq%2Bjamrl94pB3CoMjFHJLAKzWNiyTnhf%2Ft0HYSK4RB3g4jUx5xjgoombzC6FcwzR954vBtlBxBs28s8w0KgXoT6WeLXieA3qxKIXnI3Cs3F9rMBNzbSrre67rznivWtG4nrxUKc9k8r3YBsv93OpCyqssYllQvGHwGx5vS1MDmhV9IL3w5rQIV8pY4DgnpiNLf6hmIKUVQBMKU5tiMYi8f2%2BMQ1tux2yAq1lC%2BtqLR3SqmHJWn3qMqOvjmsoD7kQShkg17%2BE04EyTnzYdwSO52ASS0Mmdvd43lu3lWMccKc7aTDXoEhDyQI9nc7YO3Yhb8c32RlmqmLhTvlNrZOcp8BYRoL6QMltvIjyhA3aRCAZGDuvCAQVlpxMn0nMxa9ApFTiHownD7QMxrAvWsJdu8R%2BWISeZwpLEjtqDxFXLXgLi1jfIwRhoQvJKbxIgXKX01HZXc%2BLhRkGhAYUlpLhmaKmRCiDRFcoILvDzPL1J2X8sEslphJMT3XPj3qXKv%2FBcvsrLYseeXzCr0P%2B9BjqkATRwDZ3%2BZchc8LJZGJq5Bd4h8mJq%2FgA6FfcFyLaonW3gN2jwi06MptflUHsiJhy%2FYF7jInLA686sEt6cJAzYzOUFP8h0x9wGHb0CZ2ovpdXVznOrPD%2Ffsk7fMd16ehUNV6iXMKYI%2F%2BT8KJIEVrK7p6Y5Kq9VbtNWu3x6BA6bBpRdDk38vSU7yseH9CFDl35gYhmMZBbMHqaWJnOgsSonnS%2BORhES&X-Amz-Signature=c1dfc01588355a05b8ee94fa43c61e723625ac15e7e3daae46e54c25368de5b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVSVKRT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGB3dS3AI3ASjNjr88ulW90JGIdCRhDjLLsQwuGxTBsNAiEA18cBe7JnxNh0s677japDImXXeWZwoV5LY3OvcmGDNQQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFbHj%2FHN5knrxTw7mircA9JM9I7DMWe1K1PB%2BjCByG6LNzJyhwnpuAMzaqBJ9v9ojVTFNEioQZua9oDmFU8Zq6HLgZ%2BnzWX%2FV4SWhKcmegaTvJLFOtBbyhsrMrK2FKk4ex02r7EYuZ93SE%2F27CPTTbp%2BeYZnFYFuIIfgRTblBsY%2FKWCkmFbLWhLjUY3JuysZ3EcpH%2F9D%2BF770N6BWtd2dIJojJ79O%2Fep2B%2FfJghc14u3s%2BakpXwbsCXMvAKe6DUlH3Gq6ozioyB5el%2F%2F5c2fAjTM2UmpI3X6SqCSM7%2FQsdjzfD1CjMQ6BhnbL0P2TqMEbQllbNl9HEI%2BlyrAzEf69RMUtzsSp2twmpd0B9dEzpyruWUmbzBVtEd6o6Uwr%2FWzpk3%2BnfIEqPztoFsHY8B3vastk2wthFFANcsw%2FLDVFw06dHzgEbCnpj9C8g7J3F%2BbibEvcpTSRbT8FznXulIRhcdldibvQwnWZ2dXahUk2FMso95C9x7zWMBJTSL55eJ6xYnsNIQA9htLjV1OTM5kDlFGts4GY%2FEzsG0MyWSfbMSN41l7qDJwKk%2BDg%2FFFF1u5MPXRhXAlMtPGRP5Nbk1agM%2FqF9%2BKvtSSexzMNSv7bTYKAtfauJVpP4VMuQOLnFCMO5fbXArflLTNhG%2B%2FMPvP%2F70GOqUBpZZ%2FsLmHy%2FlamXIRI1knnnAuL%2F0DJU%2Fyx9hTf9rqVewBmqPRER37lqBX%2Fxv4imlErcEQ3%2FHtc08db1XKisUi524rJvfEVlAxJNMCutlMDXLcNP5xW6095C5RgpUmWeHXUzwTu8r%2B0jLMt6Gg%2BESJ9QeJ3WygWcLnV6M85ngWDkGhIIRgJ8jCrPlUPeQ2awinqZHUiSXODcBJTV9pMOx9eHkdZqc%2F&X-Amz-Signature=f990ff059a81bb66fce36a8934b501d4b711c454f8f65d0c0151b5b096821b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
