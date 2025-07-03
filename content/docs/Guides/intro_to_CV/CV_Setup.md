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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCV7KSEN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC0hrtevMuWTmhc7COFv852UJ4cRtZ0C3cmwdPQH2gN8AIhAKKmWD8PQ0jdEtt0s2qzo5o1ZuBZ601e2EKh7SvvNnfaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxEJTHlGFOd4kDE3QQq3AMO3afjlDKQeLTLIWL%2BqkgIy9usSMCk7O%2FX5XMXHThfwhgDNdNTvag1a7Iwxf8MzA7H6L5Aom7LFk7f3cMEAZazwCLwrY9dBi8rbCI%2FQGSzk%2BCesYztpHfDn0U4V2INV7WCZFkEFWGQIrYYl1ytK7yau7l7cTzwURW%2BCkwBZlL85lU0mJW9No4be05XYC6Pggq6Jh860E2w0xwfek4DtmJN0lFaTDrfmRDnjRDgf9CLMQ3T9pKB2nRAXuG6yREd8El%2FRdSg%2Br1K6si1rof0%2FrLkUcViRDP6tuV%2Box9gt4VU%2BccfQYym%2F%2BPjczA0WjP7uiMgKIf341ji0Pse8uhyulGWssjU1H3rVZMK%2B5mb%2B44vFOYtMZXKX6iDsDdHFQpdUXKYHlDvFGn1awYE8%2FOte5jVz%2FTbLYfht7Q3PiQw4IWJB%2BRIuVfu8poEf9pHE6r0TJ1Is8OKZU1tQ4ypqt0b3TctXI%2BWMyjvAJn78SNhkrUtvZFNhmkCK1ssH%2FdySeLptMr%2Bq%2BDiWAXHLLpnwk0kaVmYE%2BgpZliDDXP6Tuz4vBjR1e9JawMk%2FaJ%2FIsiHJYvVziSKI7cfCeJyghA2jVBTDf8S1Mxse4gCkZTpw2zFdbC6lfQfDOCcQIXG9Ig%2BjjDa5ZrDBjqkAfHORby6ylP%2B%2F5j4NcYISHkRCpup9Qo1t8L%2Fa28%2FfnJ5VRQm5LqCxawmbN5l080WIBYTej2IY1o%2BAy9zdPZUVearfZ%2FWnsFxrgd3f5AUu9siJhWY9FDCsPuJZcR6E%2BdFPHKhE%2F%2FICwUsNjYbyXEE4rQXIdgNO5vT4heiBk95ok6MHYo%2BPhaUCMLnvXh8Noo7RAYhrLjcI24vPJQy5hiYa%2BT9hnwA&X-Amz-Signature=0d3d6003836839250c846d3f15244b0d15021672523805c92a1a1d7fc9f6ce35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS674C6H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICd55pL4Shj1fJhObhIxwOOP9zwvDC94ddOZK%2F6ymLi6AiAHRzkSgOh8sHCGhD8pfT9ZfxcfTT8BN1oFn5778dfasyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJwALHRRB6C6nlVsfKtwDTx8hltZ00v9aTB47QNATORdvAMRBTOattfThBX%2BBcCVcK2IWiwSoRduogukqN9X4vC8PgefAOB5VDdYoQhjwDCIPIJdlI1XOfvhuWgIGJIdzkcEgO8tzEVwc2DttMIOoVGe0UPYWfU%2BT4hWCZyO30Yf1mOonHJejXRlNV75HO8QqBXIp9jiIcy0NB4kvTmBYnrrJNPcwFEazQ9G6aTSjYOid5%2F740uPlcorcMv1LPk6HgnDy5PyPOXmGcHbgBpktIkgm2OJwXw4SxO10mwkB22DPukVZyTBoPbIkPygCgNkSl1Crzkm%2FdRsSUEYEQLXNZvzTcafC2Hq7O76kjv39AMie8mV3tSevovPIIa1%2F%2F6Jp0BIryyFhTLEjRDiVfF6w%2B5QFzfONzG7v18RnIDvIdU45bGXJ5dyauWXmvZ3WLJjLpnK6RC3zckSCuzC4V2b%2FoTk%2BCCMHmlk2P7cM3X2rFUEgAC3F9oPwD81xDKgkc3KNAg7Crb1A4ZsMKb2l2PqHn2S2VCnEMY3ebs2h8tdqUxx4737gBtUxIt1RMTUxAP0AZXaLyL6JRN1dO9A6%2B%2BGVMIauod1mtH3UkwwpV%2FpCf8EM5RatZhGhNcLINLD9ZK3mzDiA%2FeVSnGg4ch0w%2FOWawwY6pgGEY2vCrkgAw7MrIEOiVpQEJ3UiuHflh5zG7WEpqDlXwZRfwJHLQpx7NsFZ0cGlKshErGCfntUSNcJIuxZNj0kGVtKjd5K0VbNHKfyDXS2Po2DYCGzCX8DIJ%2B0hMiHN8NqoseVw%2FYcwnVRzHciDqmOyKyddBUSBaPMCf5SrDkVG1o1OIwHK2pBKUgW1m7MfUtHxz%2ByLHDSaU5hQJgvo4mYcgsUmLNNc&X-Amz-Signature=9e41d6e2c2ddf4ef5578dd7ff234eb361d473918ee38d0d12c3ecffeb55e2e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
