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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2WC2Z7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCq1kmLR462EkLwePKVyZjgHZGVvA0hl5pUS4w9XkbpCgIgPXMu0XORkANNFtAvKP61V8nLlXD09gsZpLUN7PVo688qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZkq%2FzLmdT5ws1q6CrcA2g%2FfWuPE4njKgujt2MxLIzLqbNVzppWSOglpvg4SHEAwHX2pqgxtbS11Sv6G%2F5PTLWCEZ6GXXVczbmApYMvqGIjnmtZ4bqrghpJTJSEnZE9Yc7aa%2Bilm0hKiBP8fQCzmEBWJQCd73G0zsMPD1T9WrWOdYN%2B8gUKKpLi%2Fe1iYlDMptseU0NTk6yXK7a9e2WTizHyig2Jk9YSdW6%2BACwa22Vfpqr%2BkfInTgUFuIN5jqRDtpRqUU7ZW5XOZAXN3GYOpNp5SG6Kxv9aCwv6GHpjH8Ix1Dk11BSGdK%2B4l7%2B%2FwCGO9ABhdcPqaIOBtUbAjIYOekB%2Bqifwoi78ubQOjFIZsQuv38PORvrxBT47NRIH2mJ13kCGzVWLhekdoaI938jHPnjBuYaeLeA3z4t4cFOrjc9mYF1Iv%2BsDaJ9EMO8xuIVXmqpah17ssjcjKtGnLwbILOCeq4Y16TrC9%2FS8yrGxBKXiSyZZHBslHtStcl0RSVwX%2FmKoqxmsWmmzsyW9I00XcWcwbRvrK79C7R98pBPBezQM7LolxpaLniz%2F6zPJVPKrN7wVH5jGNBbnOAH9I7rItLb7TfXsvM%2FwdrcqLbdtW1zY4IfslH2HhMNKI6tG4uBy43OxS8EDacuThwnrMOqWrr8GOqUBJ3PrViLlTf3AoIG%2BJ8CPEsuLh%2BIOY70u5rE9PfkMndNe7L2RpMGmmxKZhLBE0lRB7dko8ggFq%2B%2FLFZESoDgkqmh5l8OgUOXZ5GOIow6yIdYCyREhjF8lfiMUQmuTDr10uhrrIC1cM34Lnoe15ibhDBgAyOQ99oeZuG398bVQtXASbVljF2TPY%2BM9nXiLAKW4ynQXUmSxfSVWDwG4twrM8GnWA%2FmF&X-Amz-Signature=81bc91dc95c66d71aa46776ba3e8443fb167efa6643ef61b62d206cc36db58ef&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTBOFT4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCa0cOI7yiJmlMBk%2BmHRAo5csorXxkS6nF4fMjkCwefRgIgP2H%2BSevI3re4oyRMKl2nK%2FWSsDXx%2FYUYA7GxvaVVpYEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECrEsCcknaolrJavSrcA3LQTnlBOlL5bYrnBLMuwvrpHgjXOVx8VWTatiJTEz31xAZeIvlHUFtQIgZSRyd7wlSgXY5aTFEoHorXnu3XtHPREuf4vMtP4nyCdNgEL15C5m%2FA%2F%2F7HB4rzQ8Z47g8k8lUCyD6Ko%2FILPPS2nDN3DI%2Fhykw5JRPhzG88pJE%2BKWv0OsrDlFM01IsAV1RBTCczXUWiHN%2B5d%2BRJnMxM78%2FuQj5IgBzJDkxT%2FGi5X%2FrDklJKuYb6rO5nL04%2FlBslU9dnFctAt5zrRju19tO9KZxd506d2k0ZBiTn9IECu5Ods%2FH3GGXKF6RS3f05ONKRj4TOghILflZBpyIfYuhVwbX9U7sXf0MIwjpvIb6lwoC9230fJj05PtYWBrDcjsq3R%2F6c2S2Ny9hyKV6jEcJiMzy4DA7ua3FAYC6HHvCrbLJomaq62F8UU4eFyTAIRD0%2F8IQ%2FNB6tQKcbN8d1LE%2FCcS1tgryOWzEMRc7A2hbWrw%2FhbWwp9N1HuAFI7SxgSh254HLsB6JVClbG28glpFj4AFIGenFTFo3bBLoqcVPKzEWKQNytawDYVChRfzjUDARcJQBn84AS3ST3BHe7qjqq9CuP9xqHhpPv0G7PJK7UDnNMH9wj%2F%2BKiacVTJtKCmIftMPqWrr8GOqUBjM0qvWl7CYqcDlfQmUjS8rstqCPMzXdJAY%2FohzOoDI6GQyNlxIJeAYYiaE8Re0K%2FJimgpXfnMY0GooAgiAOMrQ6m06X2egD1M746hLoJAz4J2CvHpJM0iey8Ye9r6WZEw7ttaaB%2FMwYZlg4O8Gha4UmIfM6pX88AaWp75Ikjr8mCGCL%2FuLJSLw4abX4FbfpfNsDxA9SxnITtu6rIoXq3wMYwvlmD&X-Amz-Signature=d383c49897792ab5a58716729fbf4a7d147068bf4572a8960461d70c300f80e6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
