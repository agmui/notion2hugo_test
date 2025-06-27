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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BCX2V7K%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDMW%2FMc7INFtJjEZpR5EDbxViXzT0CXx%2F70JcbiE8uFjAiAMR4rQWEvvMlG6DkWgzeSYqQFeJkPmYyvEt3lBC3cRyCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfn514UpdB9NJY2xoKtwDZ3oLH3Y7xE7forL2Tp0Sc%2BZIX1qU8hpkdt5Ov8LYCNTw3LKMBdpj42VsTkXftbZdEpWHFLr3RiBY%2FjL8WnLN7C1tKgf8cVP1xoCBRMZJG%2FeQoO9e67UOwy2koFExiywJt9P1jprQKtBx5eXL%2FskseKBu%2BiSCpJtkDZqTPkFfOdB6xBHYlvjBEzD7WJ2Bp6Waa%2FMeC9j9hvHFObD80kH2bpvUtuwdITCit7%2FrJrIW2R%2Bc4ydePh%2BPNLrou9Yx%2Fjc5%2FT6dlMp1tI1vMOy8cgk8lOP7TaWBZ1sS5KU9g%2FIB1Ns%2FNQ0%2BE0MUEF9LiCBzCYaZiwUNtz246hFFZGjoE6o4F%2BwROKGE5JMNtM9WrDu1HYJaJmm4cW7wlhOE9kHk4R8BAyIumHvxGnHwe2dH8Wb4LjMj33getQMLmwLbEkoZd3qAbPrEKyUMr3X8cWQq%2FkYTRhaL8ashh2QhEyxLcf9i2n5%2BvYSJ0aUpoAIdgi9Mv1V9Ah49IoKh028VFWY%2BC9NeTnHtDB9TEO%2Fz%2BO6QLeceI%2Bm9%2BFX1FJEXLyWiBZhHGjmbp%2FTIfsyLd1Qt2R3pZp99UFDHGsi6VSlCeHogBLKDUcEevIaR3n3dMUqY8ylKtxSTg7jA%2FEJ7QKHWmw0w5cn4wgY6pgHO8WzWaLHPO4q68q7ebUaAC3tK5fs82UU8jbPd7w%2Fb3sUe4CZkkUp9jpiJolPZ3tSzQFwJC2yVxOeN5kXkN4MtEf3hZG25Mss4SKEvqxo0WGS3NCWYARJUR%2BusMD6twMvqWvJjvkCYIGcMAXkFrfKhE%2BgFBhAYKF1E1eJcMIl%2BpNfLLGwRNa%2Fx5CCcueaZOvC%2F8ltTH1pu5l7oI2ZbiuJdVTi1rBsX&X-Amz-Signature=555f43a6c3a67c4856095890f6e705ffbbaf31e2b6d5469202faa14727f4c9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GELMQR%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDikEkp2%2B5HCWEC7Gxxlkjamkb31P%2BpTS8oBTEKMS6XogIgG3PaAArFhlt5PsETvLAeah0jEtvy%2BiVNxxijK5hhYpwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKBbFjlzF3C2VwJ4zCrcA9vXNv2PWBLVnjwJaKmc0R7y2uXs3zfkK6TNTpDUrwlC8bujEoI6s5pnPNkYFn2l1KyRtbyjCONCHBmCg6%2Fgl1%2BLzg1XoLHhXor%2BpEGqCiAe0PrVAzK1cE1Hg7dJ0u7whPLn9LwhSWzaBBd0RPuLTnUXipL0yMC3sN%2BiJENDt47a4NP%2Fnw1XMhikZI1qkLcpl4JyFFyU7g67MKqOPxJhUlJdNZrD2uGhNvMOQ%2BpIPpsbrw70yaaxOG4e%2BFDHq0kGuaibQWLhKUpA2L%2BcfVCMTV2P74NcFmS7V7gnJNgHM2AgnApxjLFzTCMG33CoqWCoIj63ePXlHHSUsmrLnFvt0HQN5wSjFcPp%2FhjESNjG8HJfg2rAOEHm6bbssq3W1310CZ5oBgzymtCYVLyMNwQjFrdp5blnsCFdqDwRfK7l1%2BrBfJ3QCkwb0ofPLDTgMYR%2FKE%2FRKEltChbM8UXVNkMyjZoKIPpriBdWa6qAGKg9jgRzHwSqEp4ypawBUq%2FbH279Dj3gHw3lDWx1GOJv9KZl%2Bh1FGg2XmdTshiPTqzWeYSkMLTn4jzBjwK944C6XB3K9Flw%2FeSHXHpYi5yp%2FXIWqP7wJuMzrzGZslRZWH6Hg3tKun6Gm4o1lNllMykZsML%2FK%2BMIGOqUBROzQJZukJQO3XWy6WUEY9Rj5DOewWR%2FnNZL2%2FkhByBzoXzVoyV8E7qhQZw36xQ0poancmCyjPGsYPsM2G8DbeRWTPnnJ%2FgJhUpqJPfeeC7VpBesNUKCrNjpyLybt4QDyc4vND9yf9%2B7fTmRSPw3Saysm9SIJWIQ%2B1E9r8CFAk6hSqh8ULYR8WyJUM6pErw7MTFOWZbwUpcXJx58OQpCQ0oqCBdWS&X-Amz-Signature=085ed19896a25bb956fb1671ea723c96bf42956bd2367fc743a27ecedee1d1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
