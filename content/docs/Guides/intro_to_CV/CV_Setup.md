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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFD5KKSN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCUkJCj8KwYCXZlIGM%2FnvvOVETymiPXuOmMI90kJO%2BAKgIgMUsICJQtNGZSZIJ2xoCyeqfryD1NnXeNLYVvKyKnnm4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIaNr%2FYioBNvMSi%2FBSrcA7ItgIIPaV2TbANbYWfgb3n%2B0EzkQjvBR395xfQjTkC%2BTRFdQrp1r2jwPV3VRkcyHWYbzTA61AOb2fRFeldV8%2BjLhtWArMPdHT1tyn2zPKtavAx7oArOdsowbFgbaUpVwGmj4Raj36bHXCWFJAvAXQN8ZlArFm6PHCkqWKJL8lGeKDDh7dUakVegxdtVkbJcQho%2FDxtsAm2PWsNLVuDfY7D627xd%2BV%2B5MjBPL%2BDTOWBPSHtalfI0pGwGQJMixLw3FP16APHBuX3EwhTUpJOj6A3fpZFVVRdJjiWvUIBTPKGOaNVUz5k1cQhOkadllefMc8ppaWp5uR6YFQIvXQJuq5NXNqJI%2B3fZxlI920%2BJovK1I8Qjr2Uecig5LLOtPJgelubeIPQh%2FE3Lpk6dKTYvL2LD3Kxiqq%2B5XDlS7f1%2Fdh%2BQ65wcy2Dq2rhHIzFyFUCuZ1WRlhFEPW5d3u8%2FIWXZylcQsQVrcnayQ%2FnOyuvsEG56gS3%2BWI5XIsS9yteK6f7shb5pJCOtNlEEm1%2FdaFaJGoheNUMS%2FicDY92mBZk5z5HOQPWT6NiC5KdbXXwgJjaur4N50Z9cwyGi9X3eoRu3oiR2fTTo1SjM3ofbt%2Bm9Ii3AjlFSSd%2BUbH7wG7%2FcMJKJucIGOqUBGxc2yLQbPL2N5US0daeDuTlDplvY47dcEfbdhkNgAnB00rJTlfTXo%2FcOKEPvrUMkdXqPk6t44ylrbtzqm4DL3bjUajWU3%2BXP8K8%2FiRb0d8SShqUUEEbPrRCQ%2F55gyBnAhSEXxJiXHH7KHSsWU6UAj5hwOo97RTzv5bNOAkw1adkXoXyFwj2xPAEdE9uDqVVrHb8qO1Mcigd6GxegPPm3oiKvzISe&X-Amz-Signature=ffb8fa2be313234a08cedf6eddc21c525fcd77fc6b652159bf7a563b1506ddad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MRUMSO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCNKZ8ZfGRejncldYyc0dkprSNttLmR2FTekVLGnEq0dwIhAKALdUqBKoSU9dol9LxzKaKTV2bSk9FBuyYK%2F%2FGMvw1PKv8DCD0QABoMNjM3NDIzMTgzODA1Igyux6imeorIKlKD8Vgq3AO7ytH2Q0vNT4Qvn7HMJ7vVD6nnjLT16ltm1JPt6XCzCVWn5p72Qb1WkXNn6EsRKNj630WGBwFCT7rZaJqBGeTwAO1WSkoJz6odwCibtuPPaCo7NeZKz8DfO%2BEIMYH%2BNVxXsf5XVcV%2BRuTVYsdrahoJj733gGwEyZ6eaWoCJhljxijIlI4aJD7Y6oe9Cckfn4hgDqHtMCaz%2BFAiFhDW3ShQ21EqzbpTdb8BuWZe4kvei3G6v3nxKgboFPZ4kOqxS%2BhcDwx%2B3rNEOXEoYUBmGaY9zPu%2FWa8UmMWJSJfb%2F%2Br0qLwxTwc4MYdS4L%2BVP%2FS7SCkGTF3uSPwB0weEwlswespgTKs0%2FcBVquZ0z8P%2Fp2wOo%2Fpy%2Fq9ieskXdw8Wu4ZlO3CE%2F4UFHAolNz310NRUaEI0Bmedjmj0Y%2FIdweK7lHZ4MaHstHGISE%2FnzxXAiipBM8C6nEKMD%2BnEgAowOTh3mH8LFMHhhGh56wJ9iDZ7cGQitOi3y6QUYpYzQh%2FspspUJcq1hIU6bl37GsXtZASudueVj0lctZbrgApO%2BUi39XiqN%2F37E70LlubrL30wtRYcHC1Tq8kEsZ5KHo6fey6GTSAnUmTqAbRaoYMxiHXbJC%2F2Fj0ngiNC2IkPR8L7sjCq%2F7jCBjqkAXJTB0TtCMEHYgsdMrGTFTpbsVGpcLuMKMY0CbRHrWk8dqSBmkgrQb597F13DnOI2bCYVoOYXFKnwN5vGScWVduvJqLifCo1jp53A2zZOcASPVya5ctzmqGCCB%2Bpe9joVmx6h%2Bqv6ietsz65KC27GUlLWm7nzoGdxfhVQb5UjXaw5oBMVTlIuQmKkLp7Hxp6%2BGRO%2FLDDKbKXWKVbADCWTS1BdqHa&X-Amz-Signature=5fe0f5114a656669271cef5940fe5b652d9761f588e1576c5c66c4a1d0b6efd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
