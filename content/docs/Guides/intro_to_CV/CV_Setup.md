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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK7O37L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDC0f8t7DHJ4XViXL7rBjPJkTLcyHhR83Ccn9%2BxdS59ZAIgcp9GCyEhfumVWpuH9fpMQxtdzjncjWakdqmAVtg6CTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBE%2BK1SS4usDpeKEryrcA4%2Fb0hU%2BMyAhiD2%2FMZEPRaskCOLkol5AGV%2Bi0yKrARDJOU0XCQUeE4IvRUvxRy1qZrMl38WrW%2F%2B2Da7eDHAjTTpe0%2BqNltXByR8Xrdus8WrkKit078WiX4QyqgFc2iQi1ITW9FVJF0ea8wlrHOA39ppO5wiCNFq0tCHYo85kx%2BQef3HzwGkJ%2BljO0voyhuKQIwvZ8xIe5POpWxlOhsPSSoqMpcb3JsHJA83Ne7vWLlM9lSU6qK7w7LF2ORAgPQKsQDR5URFjaRccSzpwkF%2BH1uD57hPADRdoAYIYm0qggYkNd378P8yyL0aUzMHJClpLAgY7gX0sWCn6V5M%2Bgf3Pf6j%2B0epgmB16MG7bL%2BAfURLHKy9rvpI0E4%2FCMIXpGn%2FJmxnZAyHYJgcSAIWT6kc3xjFH5zLzzjL%2FKAoAG9qrM2LAyNk6OsfTb5L4iAMuYNpYGv7Kex9zidz%2Fw0kHWm4nW65ZrRDomVNchJWAcna0kj6rGxmE55wkeYI45KRIeqVXdmGtaB%2FvEAPx8k5wsxqopSuDitqN3tVNiyRjsZjX39JleOvbuA%2FvnhVaGTMrENWUHQ9DYki5naNWt6sJw%2FyN1KD46Ql3jyny8SxuUQhjXZeL2mFacy5T0FRB0kFqMJPQzMQGOqUBuyTJ5BxVmKLMoDOqKKK3%2FwrCpgmuglsc9V0bFTUwivpxoqLMtHA0EDR3Tiz6DRW7F1e5GvzdR68mn8mz%2FJcDz0QEWFfERYUy7F6XAiOSkCNX4wDYpSEmqoqt4SCUn9aDYWwEGPCdevDZcfufhWnhy2ffvs15TEyDI%2Be6y5RZRyTIKP2kCHhrQAGTbVB%2BpFWzqL1w3q4j6ij0WoZX15Ovy8tqqIIq&X-Amz-Signature=48ae503d4cf70a5984d9751aa0a7b856dde095db3c66a267d485c428b3e73c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTHHOQW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGiJo8QnAuXp%2FT%2FcFdO4xatS5sCsT%2Fbv4b7QBrtYTZKmAiBNc%2BiAwbshi%2FVtm8iHg5HVXg4ZXwcHk8tnasd3KT0cZSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpuek%2FzPxL%2BsDOdQ3KtwDJ9AEtPu57Fa9hNyk7heIdWYiucqcuPNZoO%2BlbL6u3drwfKBAYXp964dYMypW7vs8vpCvdbJCXqox9qqVVL9t59mapADbz5%2B7uharwh4Zo9Ex9ZtjXem8Cmlhvj31M4KAJGK7CVioomqWVm6rvuQMP0cea%2BIgH9fcG58vYnUDOrkWwKDhbSf0o4%2BhF0CbuHM4WkxQ%2BgKtLtBun9Kqv4HTBgC4DY2%2BHGEsNSiwmKyhLB3DrIVbVDwsIpbKPfvqrxHAKHG1AWh0cKEXKvTCnMdoqArjmXyQFDNB8Br0Gtyja517LepL%2FCGSyOsQuEAdO7vPrC83E2J7M42QZArTZyZ8ve02gIhY4ua2m2kFjUcP7aiSmFh1Rm4Ba4LTWUi8dgtLqhVM3oVaPHiMWzcXs4o22TA5AkIDAQiD27SjrNJFIq0nAHdqpUqHayFSrIj3XVHOweFKMiYHgk09MehiVNjwOndEYdIXaJU3JszSYsy9r8oPbRkKGOrhOABO%2F%2FNeSq8t0%2Bf508w5XtNjfnc8vys6TDQnCLBbqV0eQBZNJtGsVvIXgCPVHq8p2s57J263Vh7GvM%2FKPsVMY8wimcbm11CapUEPNcqCuQ1XQJlRNeS%2BFKFlxWHhS04uILrAg5cwo8%2FMxAY6pgEheHAQQLSlvBs%2BSGX43gemXDO30iWb%2FsA45dJEsydq0pGw8lYN8VET332PfRQ5fzpN7%2BD11%2FAQmOr6R4IFWQb8PbTLH28tTIKEh%2FsuBx1ig6dEukCfqFDqlkNbFdPgv5qylqGkYTOunq4BDL4g4FCaz47CLHwYJJOLu08HkByqbKOrpVRRWvgsq6Or1kB0stY5iuDHoKAIkOh4JysNM4OTC6b%2F9xBj&X-Amz-Signature=bdc0f835d584a3d6dae7f829213262fe142e983994897aa5398608e38d182d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
