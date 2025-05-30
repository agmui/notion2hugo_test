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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUF6FRQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIBTxmjY0zUhjIgqiL4F94S7ny4xfYP4hsN3%2Br4YEwNAiEAsJWaiz7PbqdeKswYEA%2B6sLcBi7%2B7SWeERoPiQjGuKI4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLFQ5QTqBxLgO0TyyrcA3hqQEeu2WMZf%2FF9fvUTC9Hzyl1KTL9Phg5RGShzEOLEf%2BHOY%2FJpSKjpiHnSQKb1E1791snMP6IP894SZ3d27GpA%2BpnQNugTLYnATY9MrhZnBUqi9%2Bbv9Huzf0ekvWTH7RswnAG6R%2FU3%2BqSvNVT9a5ZZtV03drOcpblhM1okUZS9tAu2G%2FXWaPtp08Oz4V4FX6YkyXCYbcNKDB9r0Z0Oo0SaA2BBJZgcjGdQp49p%2FEj0%2FGldyD59AHAeWdeL4COmEXmWG0IihcfcxQrOo08jXdSe8%2BcVW9%2B7QlMZ2jjMeBjAqj58yM7QJwSR4lWWkgX1HfuIwaqgIvOnTpTggysSg45OGdV5zjjhPDD6skafOSMzRe94%2FL5h4LMm8ZYZKjNdi%2B%2FQOGqhLAVteirfTQ1fj2bvskoe8rkFo00CD4SBmYAgTIeWWqggYKLVXeyjE8kl46i9GEjpC16JBqHJhyvMBAlDekljsd%2FZIqeL2Bwjlgy5pzPjtxldvag3jxorpo5kJPyXwBfTjO23JDL%2ByS0DoIoKpHNsg9JYiSi4aQaZ%2FnKw094AS2NcwGpzcyF1pYeYoHClqSGQgKNoFkZXB9lwkWh1OhJtuprMccjgf6e2uMiQNpKYgmJAclAdTn9PMJve5MEGOqUBYruhk6FKbfevSU9xuWKuXqK%2B1PyB%2BL%2FGWojYOTTzihg8cTkJGQw92BkmlTg%2F0a2di%2BHt3K3bDYV0kpiyovdHL77gWsILFhsQTFHvQlv0pAcV0hPmVSo7bvmkTl9tIgnAR53aAGv3NPa1hjTEFokJ4IZKPuYSr6PaUXM2ECnbZ7SXq%2BclnDaGVMlxMXN9X2fRrTHr%2BYSM53BIj6Ld3NUadW%2BpCWVH&X-Amz-Signature=860fc9bc7cd6ba3477c1a7212e5e5b085372c23ff66c5996de27546321e4e5bc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QVBXSG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB74wkXPB2zO4AZD3n4M38jyxYiNSzhLtGtpznBwzcZQAiEA%2BMUTjKiW4nmUepNti5kBvlSWSUu9BvoQc6EXZRxAD40qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7OYkUERCzGER%2B4hyrcA6uJ%2F1SMLsNrruq3uk6t2Sn8KCW3ohCD3q0TNXkHPQiTtlOqYLW3mJkfe8mzlnl13kJ2FzUIHHZR1Z7ggV%2FgyB%2FpYR7KGRQrh3DSPK%2BqgmkyaxJE2TKQPB7d0CcCkl%2FJyKqrESBUHi7ZrJiKIn0wqCq4DPjeZFSlNUCLnPweMrImzHFNi4k1MLqjvlQBE9I5WM00oSSP69ThVGUBzttLEEm%2BHpjsx6dtvkSIAt5htxASc9BKxCx9YPk8kzajIveV9g2hlumUjUp0Bd0Aaucj3x6wX%2BPyP0n4nsBpQdlpyW24hwHgXX96%2FB118igc6qm5Kpz%2B7Pn4%2FCbhaZpW1yowclyZpTEtKT1A1CHJ28vjvvbzgx9%2Fhppvn7b4KdWbajPbTF5ucoKVfFhNyiNPzhtXWb9Tpwg8u9C68uHeIAQW7rEmvRLrESSXsTJp3o5U5tEvOw6yejtAobEStWgeNOPQBaiprO2wbblIlE%2BRTNDTWPyTAeLOJNbH4QhYCCUDL3Sxcwp18OuBWs9NCvNuACi2U8NrOEzpBdeW0RRN1GKlq%2BTREVe%2FgWOz0BlpT%2F2f2vhc5ejA0Tn4q9HCmTWDvqQAJ5Lf0ZIqKjHjdeIMFwZlv%2B5Y5ND0o%2FAuy%2BPscy2vMMDd5MEGOqUBgnC7lvcHsVfRo7v16nffo%2FhbopB4msSTveMm%2B0Q0ixjx8d9UcBtfeQQhMkKBsPtkdiR2ftNnwfD6i4SGTVl9r3gi%2BDJAvBbZIEOZkIWOO9tY5mLjjYKnAxT%2BXyO5NtP9gOxDYzLO163iIsLi2d6%2FZrRkgVfbiYYyF7bD4z44F2u8ynoez2Ox8iGTyTfKrFMmvKpQfryMBPPHKNcATULmT4FdmjNh&X-Amz-Signature=d26d778941b32fcaac13d27b26e9e0127c3990794f30b0eee235525ac14ad919&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
