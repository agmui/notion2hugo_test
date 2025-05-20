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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZZNOJB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRI%2B9rNYch4zgiRxiEVDf3NvMSgZt4fzCUNonOyhxBAAiBzGRVAwrDFrxAt3eGCASjIiwKuxziq06FSbdt3nSu70SqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXZEsLMNHQ%2FkTUSaKtwDaoSGti%2FwEpWzkjmEx6S5otGGyeuH5lgdB4pyRGxYT7z2dyAwqYmDcMI1xSeRcpBHPMUHZCaurk7YR33%2BJCgAGk4uflTmO0reEnx0Z8P61O0gwD3XgEP1lBCIcz8d%2BMkX5TUTDaYpmSitlv1qoXlyWJl2fuJJ6%2BQzm%2BzT7wkF75LR1uNGMoIn1HlrtvlInh52%2F9xkvEZ0NXDP7b%2Ft%2BtNWHrUxNS2EghzJE4Y9EwL%2F3%2FR%2BpwQlB0cnuxFjgSHzkMPncuQensb0QmZh9p6ghPiZKXdN7j2FljjMwmA89lSchCpkHyGBQ5KJEjDiBejQCzfNhh8fkPQkhjadmh75s65%2FCvMIDjUuIEcV1c2muBhe7kygrijH1qpnjsrN%2BSL1XRw8fLEPE87vPRKL87eaBaE%2F9HZTU2EYP6mGVybzAEbujCrZN3ZpJezIboCYZhezN4elwXkrW6Y9GvoIsVvNy%2BRAubd%2BcgbOz85D%2Fvn7xYak2jB4dFbHKmW5AnXRvTLIi6nmAMh5fEwpcMnjzIUO1h9G3svbcoeJSqzLKRsbrXv2vB45AFhEEf39wy9FXRqhGQaGhVdxYY68YP4ygTcVxAQ0ApFKJpANBD07D4P9nJpECioGem%2FRdQku0zxqHiYw0cmywQY6pgGBu9k4lC94IgXP6QI5bq5Hw%2BnfmGMYTQTPqmnuciMFEqt5GNnBvfiAUwrXo1VSololrqK%2BdaBp0DujWNtEOAo9doN2C%2BvcihzkRQ6RpLeCZxC1WQ0XJJMrkLrEHNYHon5CgTcEgEUe1NF4AOLbVdAIoRjBFxbdWaoSc3DlzmOzfadUIk7EbOg5zMXbqTanyT8MVach55e5HZ2yRu2Kd9gK2t5F2wmD&X-Amz-Signature=d2bb40e301c5b284fd22b059f6850f9d7d6c730094898a998d0a1778f67f0220&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33552NZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4HEWzuPE1CnTssPh5tiunpl6MjXcG75jztX1vCukrxwIgZ4JumEt3a0urxFh8fCSGF5URUV5kmudxP0B0GJF34PMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg8uxG4G7O4JKvYzSrcAzKySiYFxUrJ5ArRZLzeObP2npJ9dJ4AKbbjOgnq%2BhKJWZPbHvQiNFsDcoPV%2FmF1mezEB%2Bvow4GK6iZwd8Clk9cmtqY6DnNdHcCdOTHAr8mmDVCxU967MoN18CGMOprR3f4mv1ww4eecShHrd0I4%2BGMhWBd0DXhI%2F5UgNAHXqkca6lOuJRuRPYGiiFGuWMtUJ9TAe4zXROrPqoTtTcyIbB%2FrYfYDnj0YZyv4mtxvj%2BgpQtlADcGbDPtmrcm2q5OQbGKVytrZ1OzJ%2FrrVbCInGoCogTmHbRKAQr%2FMBdLkCh5BLnO54ldEIsx%2FEmZWZuKQZU0rDUTUAU3TTrgEdY%2Bydy9KKqLtWfialeO0njT%2FEa8OEEy87CQTT%2FrEXRqknogrkKihNtKSg5LlKyy1jIggdNykHAknJU9Xh9jHcDxDP2xV5XyAjcaQ0cn63o03hcNBBoLPZg85eEvaiyDRWF4dtqqDcs8p2KIsCtJNXy%2FPHae5uj4L%2Fgx2ZmykTwLV7hMzeQM6750FuB65qeYYHvo47uBBMQIk0wKmLqdJXcRXE4gizsG2NFB%2FRQ2xikEI3Pv8Wm6Vpj54%2FSJr%2BOJTi5xfSvOepcblbe90UcRXnpnQ9bGoyPVMpfFI1p57viaAMNzJssEGOqUBM4LjDNnn7tqsHOjfRJH7OrsM1nsOYTNzvI0BDKw%2BhHadcYcBUWDU1ERRhgubMnD9DpJPqaHqQ88iupZclRvZRLK7tjw3Jz3KYmOS4OmGKUSgAxBXWXLRZpljASmGHJhnNDmNrS4sMqxBpDmEZPxe0iBFiee8TyGxCgFRVYZz8RWPyuywsfZnqcg2l0VPTKX8jyQvEzH6l9LY2CNhjoDtwZZeSaXK&X-Amz-Signature=4d5c58b94b4cf113327e44f53bae40bc86312130abdcd0ad97683a4576448f23&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
