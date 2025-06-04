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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ICC2OM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGD7sXqwNgyXFdjzILAtf6ptk4unQ9PihSkpiWW6pXaFAiEAp3mGsnkNKv%2BERn6KAXmCQ%2F9FHFUJxUxoa0xdPG2aoqgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMmmhLyDq%2BZNRR2aZSrcA%2FwE9J%2FhDDSY%2BCTPV6Gw5l5krXQYBVtEbIB1Yb9aIpD49YrRldbP0cfmloV9g%2BP%2FRypHYLD%2BCEqroJAxqXkrlECzKYQxB8TqJg8nkaJ07MPxi7Hkp0RocCJAMrZ4ZaNb3l8SCvrbXpoQxiQYly0EHNTk9JeC3tIuhchNYFg5yUjAngInpuQRdI%2BEgKTi0%2FtluVIgMDVEIZ1Z2IEwxJiFPlS1e%2BDouIxvtQU1X56Ezb1jvaNPqZgTdmmireg4e5teboKovRSfKkNFbMC1WkucatxSfgfMVndUz8XTHaJV6yguRxagWFFJx6rd7wClYz1FalZXin%2F4xmcqAcm5vejDhWWezHMzmVlU0eQ0dtHBWaJHueoHA28R28sSKtJr%2BBFRPTVDRlqQMO25Y7G7oPqzUvWLyCjUYGhvnWW514xxNnjE6Fni3YYKKczVmTsRn5RA1O98066eDrUoI393F0lO35GMJx06B6qgWTc2q8ib3xwfTa6gJrCeBtzztKqzc8%2FaeE2S6axVhYHqD6DNAT3KJ9IqjtROhwoQ6YYVsxfjZCKosnvs%2F7WlhPsozj4sy9mxSNI7WvOb1MDJ0iTMUSbFloD%2BUrFBb9R3iFu8LmYMftPvsYwmiBxAY276wypEMIjegcIGOqUBbVKXncDHvH%2FXUBoS7LQQCW8FTa5XBwaIWxitiUVzYAc2kHOc1X7%2BvDyvEyk%2Bb0ZlIY2rg4CnJbcen7L6LGOMSl1MmRXWHi4A%2F93KVEuWYdvii26mZvG5qf6BNC1DMuzOFpOgCWV5PDpdFuCzNVlk8uKL0oVql8qFkC7oH2hXUkoumTf3gMY9JZliasS%2FHidy4t7A0Lnjt4jJKHLsJ5gQSHZ1Jzk4&X-Amz-Signature=5bf7050b817dfa993718bfe8fb19323a7611971ad5ab8643f0a0b13d1e869446&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQSIHYQH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDBiscV5ulAkJ0yDoz%2FtzoIiKfYjRGmPZ8P7SleInxLeAiEAu0C0XHqMntFzlSaSv6kl2HIFqN9YIxpKWIKfZqZSEjsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDK9u2g3wVqCwTj1MAyrcA01KQskZfxTutvkgDftrTPltZu5WXau5S9caQ%2FthtKyYUAV7tbtx3x92UYtDBvnUHQxOsHtkT4D8tQUeb33LIVAN5r%2BkGAu3c0SruuTB%2FkriaZeS1atKr7k6Aae8jQpcC8Unbo3f3uPtSbZHSTd3j12J2NGkI%2BhIg8%2By26mHe46h%2FqeqJgUr995P%2BEJGuOqcTkhv0glqKGRjNPxAwT54jW3EMfwzP53FKtnqjQPmlY7KZnovh2idXU7vm%2BxpOVkOe1bapTjbBbK%2FoW%2FSwnrhZZmYAXFSeUw6L00bBvitkETOrjr29i6PZNgD1cLonq%2FIrkX%2FEdJQ6ehj%2Bu2sDf4ekXuReVNAUJENvYHvj%2Bz3sD2SmfifQUp7aQA6gAoOgojqdxS21zccYqsFnGYdtE9M6di2hS0JzeSOQ16wVWlh4cmMupknAOZqyR96ueVpxfoJUUksBv2%2BWVpSicptGems0qFp%2B8SIAqfSFyB%2FfoRgOBytXjJkffMlEf9zr2o%2B3XFqgmQK2p7RlotU%2FiHsBbMPRU%2F43LPpYQ3AcPpPkbuDrU4V%2B2tQB1UahtNPb0Xgh%2FNolMhOYEwUrP6ElwqRtBM2EMVmEgfAyz9bqWjfE8v81sLri6tckjGC28heeFHWMNnegcIGOqUBJRTWscAKYcyFwZ5NZThB%2Fi%2B0n7bT036Y%2BDvOdt2WxymfLX09Z2ZJIJPPumS3KW%2FD3AhKwdC10%2BTrJtrub2L%2BKAm%2BiVYOcBtPI1I76r9oEMFehYNosTAOBcVVyrDOUBRVxHBG81BmpCmLDv90MlJoShlzQyG9uzlZM2NJHejbLD%2FD23WktJ7uTGEP90mstk%2Ft0asmszI6KinRUlaSkEkHdzLnj6HA&X-Amz-Signature=492d9afc88cf25f8a6d9fd3643e879b9a311b05349f52ee3b6fa965ede3b38d5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
