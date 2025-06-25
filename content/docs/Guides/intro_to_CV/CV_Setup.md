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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMYD76HQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH2JaQ87%2Fodl7TengflRkuT3ZRCFS1uVGYrmjTLGMrqmAiB0n8pCcu9RduUh0fUn2KDqKdOuEQHVv5q2tVjdWV%2BqCSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMwARAn7tXMv%2BDWhEKKtwDTWxplYMzCNWVyrigzr8G7D7dAlyW9CcFao6vcxDQTwdETBbeKXYZLLs8JgR98f5vq7mWR7JPfKEW2V53A5kdQCEMYg%2B%2Fjv4fkZQMNnj0A2%2BdhbNpIKcthkoQL7XiyjzzTzvL71RVjvugC1prDqBiRZeDOTyxum1qjTcA5Jcr85zxsh6JR5Swxi04LCyhdf%2BGEvrxUm4mhnJeCrX84tIpU3JXs6ot4EaCdBMJLbWfL%2FciupCKyaiUoBADn0%2FhH8%2FuXFmrds3O8B%2B%2BrLNkjMSM9mxuq9NJ6E1YdKZdfSc7cqdXHtDN8yKytwx2DU16gvBVBFDrueYg7fd0lAPn5GqUTzi%2Bt0oCdofgvCrpWOlbqrEMn7xbOZVoHC4PR9NLOQi%2BWWLiC9T2L43CdYzDLC7HSK453lpB5qqPd6vs2yTV40jrAJ4hjMBatDY%2F%2BKG0gNTXNn6OhNswzI42GukPkCu%2Fr2rgj7pfoRCL9UoB%2BIjG%2BtgELF5UumXuJUodbGOrIkLqW0GJG90y9Dweg4iaGOnDaWk2%2FY%2BAkcOxF%2FXsn86JvlBaw1QKfIptdK7XayKf%2BirC%2B8ZD2UkMHJ7Is9uGBVEJJSH7Dk8PbVDOd%2B%2B%2Bo9L67i0jwzuj2FkNbx%2BqpNQwxcLtwgY6pgGaczW7W1ZA47FHH5WCu0o9l2bjWiNYL5m8TBeR6kHJWUCLZk%2Bi4PuP%2FLECSeh57h1NZCxqxVJOgZ6m%2BiA3Izh1VDfG%2Fl9%2BLG4ZisbLo8pv0gJfSHgBNNXPpqHyaSc5Gbk0et8FmLbC%2FY2NOz1njfsmDPwMzCOx8bb65k3dkFmvXF6gPQ9IE6BshTZJazk6uRg1tsf0AlHk2EWNYcyOuz0aevqBvQzi&X-Amz-Signature=e9c5674dd516d63512322541304f463a66ab8a91cdfffe7fd21f102e7a65cf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4SEOO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGrQ3Ni2HqQy%2FRJDASW59c2%2BhLOghUVt9%2BBsGfkihVMsAiANLOectinSHt9Y4PvENs2kRtGQYEb6kOx6npmFWqfxvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMfQyziJsKZ4j6AkFyKtwDg3vwJNaeBSWj8x9knt6m%2BTlf7HuDKkUYkPBKdP2doEH1OnShm627t0%2F0kXDD4bfYm8gcQ2amxrhBwF%2BIKnk7V7yAmhdXjsFWq%2F37A7axztnJUz6rQjtqfUryRdEPsFFWBmspQn4%2BIGI9MtbTiPC2IvoA4zT%2BpKjSar8SoL6zEOay11KpOC50Qw%2BQkPf61EmopEAi3XP9OUCgdS7x52esbfLOLJZIe89GACu5NBkSUBt%2FIz8bP5Ae22as3lm1he4czAdk6%2Fcxpidiahkr9q%2F%2FuKVYPNouKZZiTArOBypHR18FdQB57sbP8r5zqsPYssvP6SncCHvsVGd8wh%2BNp53ZW4D5Zoc0B%2BzwSJEi9%2BX3l8AaZPwXaRiLHXlDiIUexuFmmYBYWxnb20NYA1%2FGvRIA4vRf%2F5tzDmlsxRYtAmPGhUhxlc6l9T5m%2F%2BuSV%2FADE%2Fz21Q%2BkxyLgUlwKj4Cutz8DrIS1KQ%2BmYLzNJI5oak2MliH6VFudb%2BOdR5SAhJBG2yvgA2Ptv%2Fp%2FVHXdgYgKFRWdnpb7GxiSt1nnv0XrYmJrDC2sFLEqn9YrXE7uPQjm8t0nDA8KChMfHO8sO42MTJ3sjsHlLP4Oxn11Q7eyW8KRGjWA9obaSecWsiNIKGAwzMLtwgY6pgHHQ3IEq%2F5rP0GxuWUqqvFpgAQXxTEK3EYm980kJ%2B9fHYgDqH1hSAMJfzfTbuT64vT3jvIvLL15CtxLZ9qRIq2u8MFG%2BHy0Uzz92yM91Hs3q7oqZAvYbkGT2vCvrRC6tb2MfM%2B%2FyVOV5bSHxYctI6f8qXe7EIN%2F70KLQw3HcPAjU4MeDAJB%2FESWywjf6OwxFT%2FfDxQPDOhBwuHJ1%2BUlQnPVnDgNZ2Cq&X-Amz-Signature=6861ccd6147c172d98ddcb777b48a9ad432b8e18b3066af59e94a541daa860b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
