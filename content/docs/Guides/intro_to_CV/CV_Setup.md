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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWBPI76%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC3FVC9lI9sZW6N%2Bh%2Bp2%2Ba8I1D1Fr%2BPi%2F29HA7oUMifTgIhAKRkedsjmVN4QZsf50S5FQ%2BlmyX%2F012bjuC1S9gGPLDvKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxKjdVUuG84f9KhZYq3AMzu6MhYUNVIb1JFgK0sogEMJuIjxGhiUtODH%2B446cDk8hqTnpiTqpYMsVGjs77O9SfX8TBZ6wZcYpsl6i%2FEF8M3YlBEknp9Cpr6%2FLNNeS%2FRNqsQCZsB%2FPyLwPDctpcX8BxKSLW0DayvPcy3CWYHibMifqjSoKOO8qOG8VAAaItCcyyr3niavYTHhOJg2pN98vTcf0aEMwS8GgUwOxGRmwHTf0jnniNmmAunBbOWNl2KXqFl3ipAk%2FRMfCO4rOyndf6F8v42dZGrVo%2F%2BT0f5CmMP3DDS4GFMIks8nlXcTTfAPZouUbMYtmAKf32ok4O54Exwt7Tm5HhqkdI%2FchUCp7GtcPJapUy6hMGB9BNSuOTX8wI4%2BMpDojABY9U%2FxRYiDiRRUvq%2B7B6VRQF8Uw0z1Uq%2BWGSU%2BrwvLxsCOpwxBEje7sMog0mvY7n6er%2B4bOtEwy%2BAlFywZc4lUyFrG3TaRPsCDSdKyAm6DDY6vCwc4%2FpR8v7SXAHVF70aEARqexGxe2S3ulwTSZjMUzhYO8sNx%2FE7owpKLMM%2BCX704j4u3Pj6edRH5QnMd0UYwdVGqI%2BzeT%2BkUozrnCVSDsHuMypR8xWl3HnWRoZ3d8LoMbueCUyHeAEeosN3%2B%2BrW4GzmzD29cvABjqkAVRKRpXbiDVQW40JQ64sbyCvJE8oyEJi1NLgIKlL4dAZlUXU7602vM%2B5DSzE0nKBloZXRg7rzeW1EWGEU5QtZ905sJzQiM75JCG1dhraxrWbaPvLFou1s3SnHygWk1wdkJdT3yOpiuMnNzvYPsU1K69%2BtcOz61RZcgDb%2BJUHqaQFV%2BDLbKo1PZk8vHAuoig84JSf%2BRHa3%2BubA5%2FgnlRljzx6vCbj&X-Amz-Signature=7a463edf832d507eef984954a2c2816aaddea1a2cd6f61a8d4c7abcddb432591&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5QSJPB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE6WRLZItDJBxJh1UD%2FNBKhWJr0u62yl7hCnXNfLWzZIAiBY6eQkLE2iW%2BdyLFPGon65EJDBWMGW57AeVJqha1MF1CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqU0W9oG6Dlj0IWr6KtwD%2F0v07Y6beELtqobdRLyZISlLMcUTlE6KjjoSNPLbvXwkx6SJQ0dzz2mD%2BNGGE7UQApqc%2BsIlJ4ITmi9JXtiPBbC8%2BQnf01u6sIwvXAqazhAWPELGDOrAr42V34Af0B2NYESaOFuMMWGRfoTT58h0Nu8vIbmeGKxewTiwhWWguo7qZ6nCDLVfXYa2oIe4427%2FVBgzQxoK7FzD%2BNo%2B86Y8YbKfaUgiOhKD7fny5A3Vnb5YwQsbxIBPQtgZxWV%2FQNAJf5bP5u7YGSpZajHc1NpxIDiiNHRMfwzNnnD6RDYYjj%2FkISitBuCyS%2Fnw51cEIC2gc7AXnAS8vl65RcSVq51YvA6BDQ4%2Fpqm5jTb3kf1WGPXqdkQ1JHqZBjTSgMSIXUjsR99HZfjy753Jzk%2BiHSh10TFcJQMt421fcJUvtW%2Fi6GH%2BMby0QEGlqeu%2B%2FbtxUDaVcjDgUZ28nzcocBAUDhcsM499657jRCjeJ%2FmH3gd%2FAS%2FGKaShf%2BhSJ%2F3Ex4FGIJm1r5bp6NfHKpnBrpraXpvZB5rAqC8qA%2B6V5Tcx24w%2FE3637eluzFyEJ3AAa83mHDE4Et4pSnoZffc6WqWmQuRRYO5OJuGF%2BeoAfkpN8%2FUGVOis9P38c1%2BGw1W95Z4w9vXLwAY6pgEcuTNHGwRxcXNFZ%2BKQUzNi7BdyTXW4HHkO2t6SzL6ot7IZ2TxPTZXcnvb6nQ5Y6HUwS3%2FFUBRhIGnfxwD1YhUlsE4Xizq9tBvJuyGjxl4m%2BcFwuNznOy2Yjji6r8wQ57%2BmfbNsX5PEI8q4SsQsO7AGded5eNlSPAyAbBqN%2FfVfwaFbxr%2B0ueRa0xZamGogSZF280O9cUBa%2FEbCiSiLBZ59GgF4JyIl&X-Amz-Signature=278d9b9effdfd08da78bc60a67dbc5b004a42f1e3f011649a19ac8412b8aefb3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
