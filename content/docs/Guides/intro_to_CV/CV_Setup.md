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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRB4ILMH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ1Gd4wU8XQWWEfyQWZFNbxTfGtrJVXMwbj42DFxh4QwIgBiqgND7fQ7pblYZqnx0Shi21T%2FL6HV9AEhHHdoqrtvAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFtb%2Bvf07qSA%2BHsc8yrcA4LgtcEGz54BIjevJ4yoawWeVFzRBftBGD3SOFaaoaTdPlikSteWHCK%2FKCfc5in3V6U6wU3A1Yy%2FBvwav359OMPV3k%2BckQRf%2FgMieju%2F8uQKTE4N0U0swVDzNJNmxtwZ4PP4z8qZeLJJFmn61pFpHKNyY%2F9MgsZyHMPyALU5SAL2WLQhSOKHZrGRtxbM1SNPpb06Vprhxd5U6W7agZkVMTdeE9Wa7HSyOmYMqkxD7XBGFIDiAbTswy2yfUj%2BACRU6aljSZzSSVexYO%2FmXDe4gBNa3O2NR8870szSlTi7SvfUBej5ctP2wYBUNoOpI3IiQzZix1P0ViipuasNXF%2F%2Fg13w0cOi%2FQtb%2B%2FhvRV2qoRxXPVWbjZ2y0QpQlRTSyZ3INJoTmtbPwyteR2JSAe38WX%2Fy5PATSaXnjO%2F%2FsvOHchXOj%2B7iLM16UQDeESJmntIr%2FolKrsNErpCqNb7SDV8jFiZhrqSmo4PZ6rwI5c%2BT%2Fj7GzJB7AkLisLNLtX5XsgMBrIqFWoxYSAMwSdqNhSQnBHQ8JgdS0IN688B%2BV68WUZ%2F0rwnXt8JWM5Kzq2ERUqHXG08U8IIVKRWrHy97xHl8EwQI1G2YehCRbT868cUJ%2BrRcOBGVl5itjwIeTwBQMKTWjMIGOqUB1LNsgVPg2vt5jL%2Fvmx%2B62dqdzD082GhdfsB7D7jVONdxY0BM44Mf8Mkn4Oa%2FoMN9QcdgHW%2F7GzdSbHOfKsf55PsA3cv%2FzoL0XVabdho34t%2FDrfReqw0iDZy%2FsY4sIyYjVw2ZJ16NxayFCuhQ5mlWC361A9TVtZsRW5qyJD41CSIo1xVkQa18Q8Py8Jzwh5z9DpxqPKi1wpZohTxzVMPnQsIRmW1B&X-Amz-Signature=1ab9d6601d8e2ec23ea2c50c23e2af0d4ec83583f138e3b8bfa96acff201c34a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDV2GJNX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyyotdYRooper7%2FbA9ST1aZUvZMCbmvQK7SyDc%2FHxM9QIgPs0N0TguNALf3hhdHLL%2B%2BHuZJLuyI%2FNHgfdmEw3KPe0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPnJhLHgwco6cdXWzCrcA8%2B5bwAisJyUqPtDLGgdahk%2BU%2FCjT51bRYNKeU83lDU1H43r%2FBbE6FI3YPy5E5kNvvOdTXB%2FwkCnoYGQMZ9M3z%2FD0P4j914Y4ziZ9k%2FXbedN%2BZulxo6jSgB2ACM6i4qroNYlJFkfTjpTTMarcrMPZLbsfgwQ9kfb9kSHDFSIQTnehaSnkmDxv55O9YlAQlZFmSLH8zlvyXWEngpTFS63EcwRysBDlCsZXR5a1jY7EJ%2BOw%2BeCFFtEpck58haJA2zko%2FBfVBxenDT%2FdQVnDjQG6CoB20Im9HBrKhufo%2BqmLBUhEs4Z%2FGm6q%2FAI1Jvb55Ys5HE1cXSFN%2BPKVb%2B%2FChcVDWBV3usPjTuk2ie8oPWX0vb5KCoIgYxDh%2FcOYYBBMJCSTzOuyD0Sd3OSb%2FxPK6dHHv8zEAgTBLRrqFimao9M85R3pOTUkAVD1jgW2K7juSG9goj4v5wn%2FNtv%2FXDBvQaq0dk8m%2B7F7bTubIflvxguqUEXJ2VnYfboh27%2BoD7izP6JOMbsZ4HePK%2B0PaoWR10dY7DvVJU66Zh37BLy1Syx%2Fd0z8wJ91ro4fLh98lD82hhRJC%2FzCF0ZDSMNXuV28BXoP7TWKjwjoLwj3OpDcWZ4kg58oYzBj5uxVKeyJ2gWML3WjMIGOqUBzTRckx4EnBhwDJNVm8jC%2Fyd3E05Ku7tnGPV4Gp1y4MiUbgD9yHfPuG1Kq%2Fcwlm61DQuRhszDHtHcx1LDWltKHyXZLRAKE%2FsDCcWQLBDkULf0CTm5Pyx2pvVXkUXMJNs9o3dApjjLyK3w%2BrhSaGrY%2By6qUQ%2BWLIQNaL85YQ9DlivEewTYNvGE2%2B2SuDS4Ieem5WHcp0XqeTUxHihkEeD1yrEYcOn%2B&X-Amz-Signature=95b26e9f5b5a721f00e7d1b3492c01e7bc66e75aa4f6d1dad1dbb5b373c6fd66&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
