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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2TQ4QG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9GRv%2FKjH2SkXvIOIzCvbBUb%2F5jrnsu31r%2BpMQw1XjIAiEAy4c9z7NXD6e0rLqSDX9aIeFhrmKyAZsMnw7vRAL93xMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMPGqblfBNrWv6ZNVCrcAwhFnc6tljVXkM4qaxaeQ4SC%2FyPyjqGZssKaKk0Rlu%2FEn%2Fb%2BGe0acWaMG%2FV3fKkcoOZdYbVmfegkzxLrswnaTMEH3TiZ469sg5o0jYsm75v1tAxIwCyGOxRTuMESoJahB01DbVzNCvJoXwHlgQ%2B3QH%2BgcPjZQzqPJQt5q6TAK%2F2j%2BFdSaQuq6rkYVIQUPHyZuHW52%2B2%2FzPkgK2W4t0mtezAQRYyJYBMovRLK098uleIJ3I7BAATvq%2F1GM0mZX5jmJ8rg1YwBe%2FqKEVQPyun75UUKmcR2yuAQC8QYIgVgi4Su9bN26MeEGUl8sKYLkjqeGl3CCcNgBOynW1RxDUwZBzm2gVU2BgTpbtt1fGtK4liaGymFc28RcwLdm7DHuyM0G1Ai%2BRJ3XBnJpsIvrL3OwZcbdF9dLAwgHBxWG2bUzyo5ukaQUOQIuxTWAi4elpj6Rtttooz6FhFLDNqxtcP95BhGGjGVXRKERXyGPP%2B3ATxWGm%2BHcnvl9iRgjNY2ffFYXwpkNmVP%2B8RJuwxmGGuUZVcfT9ReQeomLCMBwoe1EEJFpfF9q57cz3s6dL4fNTHHdLv1p0ZrrQ1rba68a7vwaVZPgUbNB5j%2BEP8EPnAriw3M3Lnq44gfGwFdE%2BFAMOzw7r0GOqUBkBLqf91CmcWWUBnxsL1OYiHFt3da18pHJKHnGUbIuJ9L8YrVehT95SarV4gLAhmiuXA6k4NaXmDn3BKkZx5caERmckUMgk3lE1CceagKLYKhPgi9%2FrHGntVXutVLiTlmQnIgSk7E2vO9YYrrRyvRfc9qz%2BjGjK0BUhHNqSeP7Il2fODTUqL6q1AVFzlOkIwwW0N%2BOQN9tKPsVI%2FZD6MuOQjDRq6Z&X-Amz-Signature=c6af352a3f34259927789b7fa04a3da19de5da9101927753a07c39f9ee518ea1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4A5JDA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBQYx1Tc%2BkVc7YMV%2FaCoSZY0Pb1udmjxLnXR5V9MQS9AiEAzUgO5qiUy%2FDU8sIkXrwdnk0bZeDOnnfoBn6vVvSoiDcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE7NrEEU46zsX9h4CyrcAzpoDzWKdupeJjNpX7p63bXX%2B7hUz8VZ%2FZflsw8JG79wtSHiILSjZlJwYbTfABO%2BH%2FuauFoQnTQiLHn%2B%2BE0McIJqG8lVqTxuaLiLyo8a7pHg5Wzs0aXvDVRhRMTMTJBfgDre%2Bpgvgd3il1RwtKkmOSoAqRUyEsNdbSOg3ZnoDz8qiqkc2EIqGBYQT2zxo2QU0xwxRPT9%2F5hF%2F6rdKsHqMQypnENpAj2UTAyu9jm4sDYUiEcSClb5xqO7P69ylLqjz5C7g3DsYlUGkzaNc1aKIbQAghTfrsIIVcA%2Fn3H9TvU9KWCDU3viWAJuA2EyRj9zC7QC7V4Y7nrKZTmW9Q93HuS2X%2BiLLq%2Bru%2FJdw1nXi07fF%2Flgi2pfLyTd8uLrQO8qBPX0E4UBp4dCEVo1bbgwdTkOeLoClt1pqpXZ0TAofhe5ndVvxnagzREo25yKcwAOolOeIfqP6mwK9QwjyT74yuHQe2KBEEc4jL0g8uSHMtTEd2r7ZCYuYwN4HMoGWLb%2BTDyki7IqqexuE73%2F9kgy7K2%2F0OhV%2FycSZGi8cN%2FzT6JShM1n%2FeEvDT91cmaPRLl0qb2Nlst32%2BFlZJ1v5HCTcYh%2BqxulVjfY5y%2BXkYf%2Fgl9DmmnvfntcvgU16aZlMPjx7r0GOqUBQjuTABqO615hLJLNMUlqkIsmu3VDd1LnyH4CoraiUOmyREK0S%2BiI2WdzK9V8FOEO3toJ0cnKpZ23l6VA%2F2RfmScv0FEqiLa3nhswgHqi9iu6%2BaxN81%2FeqKqONAB7oloGVhqDEyVtUBJlwfqrMpEKYUz4CPl79Pmxz5epEaIuU8iQUFr0n3zteu5gWRUftZ%2FW2UiikUqXo5KNvRc%2FduewnEyRjvhl&X-Amz-Signature=3dad9e0e19cbc626c30e20e96be4fc060502296faf716cf3988229b51d185c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
