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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ET6RS5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIA2g22GqaQHFpe0Y6PROuJaAHzrsTnXH9XV7UbZ3UK3uAiEAs20MxCX5vNDu54oSEXkap6xNqwXTDKqppSyuqtcL9z8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHcYpsapDXwNjFqnkCrcAxFOmLkfvPbBczs30gwEKAQOXx%2BiQmYfTEeZdHb4D9fmZd7lxEcnvhdAxmI7Nm3f58aPjOe05c37H1U5ap%2ByhYvclbTJ7V2xVYlJYb8K31zTzgEGpnzAQTb31bJTOxbVoN1k7naAqR8fNJM1xYUCkNkWu5WYI4LYi5pzt756vOrYYwrf27pMSED6KBNScgJvLiDGKthDu70WuiN2320MQiAOxoMzXS67QjK4zLX%2Bn5kDAMz2oKbnKHvM9D1ZJn%2FmLcHhx9m1b2765Yd6xRqv7ieL5TToQISH%2BS3gA4T0DyTshiF5dtFdzQo84rY387lTMQO0fO51jOziCtLe%2FdeYo0pQGbP1cN6DvqxsZdH8l2xeCmCPAFAiN%2BVBtXT3OaqJIuI4f5PneV8up62IC7RiEKLHjBmhqmdv620r1OXdL42B2I7%2FCquKMH%2BsL2Gja7Tt1Q1AMy598y9eBkDPCz3L06uygG%2FpbzphoRDDe5XOr5eKcM94%2FnLfGKrRg6E%2FHTu1YqJqhdfptw8KQ96%2FAUumrsWfl7uBsKPN52fC5NPIE7cy6H%2Febq5QpCkJFzT%2BcijocWGAKvvbgfdjjbTb3gq4ussF5wIoF6IJUfG5w0NeE3kIBJ3yYOa47NIyaRw7MKrpy70GOqUBudoo2pLExTk%2BfAyH94N7a%2FI487o60FE3xTLQc1xt1KOmSPZKpPi%2FWo56E6yBvfD3GXp8JA1qz0anYQPrJ9jt%2F4%2FdFFrD8oNGLnwRzCZTRc%2BOki5hnLgdt9eU1xXIIkSTKhfZ%2BxSNf6cMKQBZl8uYr%2BxErrInlboic97KEj54JvzTv3GCjekytAyNeH55Eh6Yqw0x95b3a9wLnoty4uLPT5InVx1V&X-Amz-Signature=49cadb687b2ced704bd38b6a92c937dc9fc702b03a687b723bd49ad50c9fbd92&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE26H7EQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDdL4a%2B66KeowO1h58JKTX8FAzfA3K%2Bc0MEuf7yS4QLKgIhAODgMHqlvZNVTjQl70NjWS4yXjF3769UVY3%2FZZ8lGLRwKv8DCHIQABoMNjM3NDIzMTgzODA1IgyKFlUVY6mNqn84C%2Fgq3APEpiGS7MEN%2F4XZt%2BnpsMQ2EbW83aS3G18t4P0Kh8Y7B%2Be2uD%2BiKeeo9KjmmkZHiVFVMwU2bjm1D9VEoTa7DQdq1dlMCyP3Y6q58Q%2FUnuiKRcG6jurq6qNTGfSvfYg%2BFPaJLuStk3gANPbM4RSeXtWH6L5hBHLsunIrFkaJYGrnHVTRLM4wwInVfNRp%2BIUQJ2kCv5jq3PK6flfJWkba%2F4tJvY8Xtt8tG2wg%2FhBQrwJmJ3oMK5x46mMUcADvlLT89ivPNVNh1LI61ksmz%2FEjxg8MKL6Nv3pSmLVg7Wte%2BpTtPoBMxlxTlVRbeIiQZ2j8R1XW2ezgglPZuJMJXc9RbahVhaUf2totlhas2ANncJjrcb8FJ0QFRH7y14vgRiJsYZn4I2cg1eDJRGfBr4Hd0gqBobw3pZuatfrRY23EBGGLHxZxOkVGrzbDHS%2BuebrTNBDVdl8vX4lKlxc7%2Fgw2LfDYkvDRky0zEiHnMcF9Uc15HH1LJq5kEl6Y9CDZ9gy52TUe1lykgqnQNU1lBO3U7FjujhOSrM5ebbYxX3LhXp6LLRvuxlH%2BYdDxKyFfAlUi9uUc2k%2BcqOdTjOrrAJIVyjv%2BOJr8QN2fkd3S4a6EmyBzhYG1fSWiwTgEfUIekTCc6cu9BjqkASz9XUXk0t9ja8RK629z4ZXmQO2gIF8SNkSqEw0fGzFROMLuWiVoU%2BEMh%2B3hkETuE3idsJ%2FuYEh%2FMtLb1AFuzvQaIAy2FtVR3cLBv0yvDvaxDGTlCeLPjf3Gn99p6Y5IQ0BEA3CKl8utIaeh7hysvko2O5J0%2BuLp2mNCZj6Isej7QoOA5eoA6%2B2tAXQvc5f%2BZLMe%2FwZlsv0iBNMXp4D9HcRgEZgI&X-Amz-Signature=1e10b743f1b97760740477c0fdc801a891b226b79c88fd657a5f127c756c7395&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
