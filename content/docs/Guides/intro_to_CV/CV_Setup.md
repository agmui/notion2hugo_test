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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H2QJPEY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvVh7ef3dKWhhJvLLcmMe0Tr9Khd2NzMXo8fVdCHA9gIgYen2ZsPCrSSsaYdUFV6zJLqzYsG6%2B6OSh7Sajru4f6gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKl6ZO4VxGzghJDUoircA%2FvNzap02OnKFNvFyiNfDXXB6LB9eQAoZbN2o8rhTCI6paeiTBmRq83MJpGXlRXlho5AZaHK%2BC6pg0RbOUS2VafblJlEFSv3TNLIxXK4M7dY%2BOOH2%2BTT9lr3VkBNlf37N3xe3qugy3jVsHkdNgzh8pJ%2B67cPxcFKdmkpMiU7OPoRDT80xazldlAPcQ8GEzd7CE17ct1ha0WTz9OngV9pV0OfzUA9kkCmO6MQszCHONBLNC8GOlX%2BpQTx6IFlCuQSC3xXuOniDW5nfKA9MzaRFNxEfgWEtcm66rFvbtGlh3inm3HKewsuKUNj5Pdy%2F2rv1IUOq8wCKNw%2FhjDKrnAzBmq6IyJW2U4%2BbCc5RX2NHbJA8uAdwNE3CGXL1THfjeulVb480LHF2pE3jk71vrMTHidHrSeIqy4HMyWXNfeBhdt1MJCTzvUIubhGh6YNOzgCgRoWBAw41%2FTxoOokhU45la0ke0JqS045neK4ynXIL4opMDpjGAD9VI1TWeDuVzYdzvKxiwPHjbBNvX5XU1w882xZkZepExQEjdb24%2FaPx1ChEwEIzprWHCcPw%2BGzHbfrC9Jdnp%2F3Nb6uz3uwscHo8xd5coKHDaac9B7bMSqLvml66yETNcU1ue5uhPyjMI%2BKssAGOqUBo4csqpKWzpA2hhIJ7WX97xqnPN2A0lfWIBq%2Fs%2FNCgH2OiV5qw07PpfioD98vtcbgNNQF1bwfqULVrZ4lFPyNVT6vJ3SZ5Q96mJvUWQHk2ANxkTPzgtFQFM9rVXMFwj7zEKTcRI3yf25X3EZet7av5Dfnc8Ibx5Av71idb%2F3CdIs6x%2Fvx3kxDhJIThsOE0k9zYHoG7L%2FbFI26GzWqMlRQl%2FTUaOrY&X-Amz-Signature=a78718623fcd88a757e6659c8548416e5e99102ff8baf182e48922d1d417f343&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEZF6E3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAeccZvIK%2BfwWUgOTVvmPDWrUy1fencWx%2Fv3qx9ZOGMAiEAsYgnslnQtSXTaUQb3xImSJ4Mcv3p604SunD3AlWMsRoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIDbwh6BnfvhJb60nyrcA%2FiqVQWWo0RQoL9gxkVytBAMG5hd8GlNfFIIHNtR72fLRTgniS%2FvhL7JVWzjWSCKmS7gNE%2BE%2FKN3KDnLl8p%2BQuu5ngFUU82%2FacY79i0NwrF%2Bq9fOjCQn6YLL7akaHooULhdO7ehdewZ69a17BJghpn3f9cLLmMLo7YABji2yMzFvMU%2Fz7hEB8jtjYFfzJREQ56juSGzLCYup2jEf%2BdtIfRABrxCWMxyv%2FQbabQqGaEOeuF4n%2BU8vfP5vtm%2FSpC8tRuSRhA2JXcc771d3x%2BRP0nRgrFh0r2qFkPK00LMEbyALA4HGJSyU0Tkv3H1gHQO5YFJ8HiuYdPO9s4Oibw%2BRyh2EWJN7Rnl%2BKfVACZyEM3drCZYEKsx27NOlw6x999Y8lqm0nJ7MSyYT1ATbPJRWpJrn4mvgBc7aIKCOPQ4TUG8x40v0EAfbKZxNHBlzf0zVvEoPjx4ieWSImLKl4kBV14eBSD7vt%2BfhP8dEiMlNg3xmF8Hh9V8Xo3ih4BHuYcBv19BeNUe6zNWq42CTBmB2C%2BCicudyIX12EFjUwbeelqxarb3td981TsuFgrhWDNYJ4V4a%2BlmPiUOIB3NVMKGShsN%2FpUWx%2F4PH0d6aKfdqGSBpXsCqZ%2BEwt3dZ1KlHMKuGs8AGOqUB5hw89g1p8t2ta48zpBzW58iPMeZXqNtuCf9DJVnQ%2F%2FIVJv%2FCABKW2jP72yOA%2B7bDfZs6rtZi2dmmvW6%2FwpmBKuHsEX%2B2YIs8tJZOmPPp2%2BrJtQzvhW21mu8tLZ5kD9SV4apNgnhbT%2Bb2huLnlXT8Lm6j1PhLVQHLCI4oBxdc06oO5N3bNvAw17cV%2BNjnYP6Is9EBRci0SkRrqVG2IANBaHat%2Fge4&X-Amz-Signature=a187c926cec78e98161c5d8e098de6e86ff97e20574678fe45ece9a050e1ddb4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
