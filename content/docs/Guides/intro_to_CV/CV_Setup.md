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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AZDCZS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAvUNdBUwVYNqKpwXfg0U1z0Gl08cZvQuNWAUxCPGrWjAiBs3%2BVE0EO%2BpVw9q9kLAYMaaV7FtMm7di8OzEKz1rcYTSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMrODzIheSrneFZwBfKtwDpLzZgI2mJi5EzNW9AZE%2BwtA4ZX%2FZXXcCvf1a97qBpxOgQH%2B%2FlmCw78x5nPVs6ORpqGegt%2BjU%2BEzhECcPYzhVVv4Y8qKwoOzDuQomu73w1J%2BWlT%2ByxnC86dzA6McccSZWyxl%2BHOZC%2Bn7dBVS%2FTyRaUXxhG24w1qAX1l9MW%2Byv5rXH8OX5KHVql%2Fz0e3etP5fG1gYbTGWFKMry%2F27jQ%2F0uAXUT3%2FUfv9p%2B%2BYZFwvivbK%2BjBkUhgzDbrDhl%2FEuyvBLV%2BRNhKJzPvJgJcBegR2n9TAQ9KZ%2FtF8BaU6MK2rgY1I0oFfpC8CosTvKu84WFNMcPsmeHNojetFldGDgrsK9IH6WVbFEW5o28pXG07V2sFkpo0uI0oAYtQihpS7W%2FKnJMSi0AgoB9L3L%2BtdMBUA%2BlELDICpGeAtT8ISELtSmIH3Sg1q8ULqtGndvVDEEj2cnCh4zXHuzGU%2B3Nqjylun%2BokPN5aZkKihxw3N8YFO5tKb0g%2BAOkz%2F6DTU69X1fvZjFZ%2BSFY3YZ2jzdNlNZPIGUpuLRe%2F5vCk1eKY5Q87DELU7BZFpwmY3eddps%2FPnVZSgZU12R6sy0ESbkLV8L5SRTN1YfUPu1S19DvMCjmKN%2F11OZmFD3FwXLR0TKntDgwi5GBvgY6pgEzULUnQoaFPWuFNt9L%2BXNkspCqY5N7c5b%2FrW23lBeWGQe7uGgHzEXWY02nVE0FT%2FHC3kTe9K9sxbPtpZS%2BqbP8YlwjRs2qsFHYrweLg60K7Qq2dB2sJq5U8fH5Uzj62HWBqBQS0Z5RKV8kysW5tX47S4uK5J9oMxgJtJGtuKJqYjsgjRoyooDCsx5f9GLGcq3wY0z%2F5SjS4IXsZPTOumCPHVZkc%2BKw&X-Amz-Signature=cc7a3c4c7e63ce45cf30a321e4060d65ead2ba719b5d4a8a0ca02b05656160da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46W4JZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCXspMczZpe2k%2By1SWyT9zMV1dNcsVzyXAY%2FcW%2BMvK%2BpwIgXm4AvvtXT40C9BPk3%2BYWi%2F2pYzN8QVwUpQPrXHTaWjIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLjXxaJAzFehBhfP0yrcAzASPtOGtetCaeJvDq%2BzZSaz6Qkm98IrZhYfZhxc6AFi7lZvIBpVwnD07FPB%2BHk6mwN8BJrLyq2OjzWdA3x4Q1cxtH59f0oJA%2F6awhu7Ek7LfeY24j5CBr7tFYQx0V9nugyPgOimb3HGJPb8ENiu8ScnujbKrt%2BnbuR8HSGaU6iPgLnlVPh0rQpzGQXvzoKNKb8abCPfradZ402Q%2BciHv35zRIKdinqcDAHouLY9elBkG%2FVcCLpHUNu3QHbdNJY9hqxe2IO6Owu3jYCZpi4Vd9dQuFtl7OEibTBCZGe9x%2BcBJG3HzAv1r%2BZQvn0BuHM1HKmIdSAR4IT%2FFAhK5eoHbBVcwc3JK2h%2FKvO0V9yBTxeZOuctGentfmASyrle5Hy8VCSbm8mZYeykClhDR%2F%2FivBDnez74l53HtVfUGwyaJDL7xGD9fgQrCGb6JU7SOTcCDOy7wtdxqU%2FAhtOdhH7aY1v%2FQprX0ppElbCEcxjc0byC9MUrxTD8C5zPZ3ohIYFtANWt5emdXXyeNrv4L3HuBsJ2fvPuJxRLqGAaa2b8CWi1AUOgsWGPKmIkuMKdfmqyRGp3%2FVDUR3FEmFlicnRb%2FFa1lz3yTM85d4mAHfJfGhlq9AE1d7kwPIiiBr0TMLSQgb4GOqUBP0aCB7jrkba3DYLagtHMX362ZeSVWbCHa1kmkgv%2BnYnvM8C%2FBbq%2BmVhbR5VHtI0UqEF4dhxhXbyy%2BE9Rj7kEkqnU7TJUy9sVyK5GHlH8EOW7uwJcjMyAVdYF9yU2yYPybOQ1%2BEgr0uFtaVOrBLGv4ak%2BIU5F%2B8ZjyWhiaRhE17ll7FxoojcrP1iT2Vdc7k1DGndRy2rjBBSs4b4LcuM0l0XGgCui&X-Amz-Signature=6919d00be9df047fc754d320f30dd69fd9f8f60916f492d0c7b28d8eaaba3431&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
